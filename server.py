import os
import json
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='.')

DATA_FILE = 'leaderboard.json'

def load_data():
    if not os.path.exists(DATA_FILE):
        return {"users": {}, "scores": {}}
    try:
        with open(DATA_FILE, 'r') as f:
            return json.load(f)
    except:
        return {"users": {}, "scores": {}}

def save_data(data):
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=2)

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    nickname = data.get('nickname')
    
    if not nickname:
        return jsonify({"error": "Nickname is required"}), 400
    
    db = load_data()
    
    # Check if nickname exists (case insensitive)
    for existing in db['users']:
        if existing.lower() == nickname.lower():
            # If it exists, we check if the user claims to be this user (validation could be added here)
            # For now, we strictly enforce uniqueness for new registrations
            # But if a user reconnects, they might need to login. 
            # The prompt says "nickname is recorded, it will be unique".
            # and "nick name 1 nickname is only for 1 user".
            # We will treat this as: if exists, return error.
            return jsonify({"error": "Nickname already taken"}), 409
            
    # Register new user
    user_id = str(len(db['users']) + 1) # Simple ID generation
    db['users'][nickname] = {
        "id": user_id,
        "nickname": nickname,
        "created_at": "now" # You might want a real timestamp
    }
    save_data(db)
    
    return jsonify({"success": True, "nickname": nickname})

@app.route('/api/submit-score', methods=['POST'])
def submit_score():
    data = request.json
    nickname = data.get('nickname')
    test_id = data.get('testId')
    score = data.get('score')
    
    if not nickname or not test_id or score is None:
        return jsonify({"error": "Missing data"}), 400
        
    db = load_data()
    
    # Verify user exists
    if nickname not in db['users']:
        return jsonify({"error": "User not registered"}), 401
        
    if 'scores' not in db:
        db['scores'] = {}
        
    if test_id not in db['scores']:
        db['scores'][test_id] = []
        
    # Update or add score
    # Strategy: One score per user per test? Or keep history?
    # "each subject's scores should be calculated separately"
    # Usually leaderboards keep the highest score.
    
    user_scores = db['scores'][test_id]
    
    # Check if user already has a score
    existing_entry_index = -1
    for i, entry in enumerate(user_scores):
        if entry['nickname'] == nickname:
            existing_entry_index = i
            break
            
    if existing_entry_index >= 0:
        # Update if higher
        if score > user_scores[existing_entry_index]['score']:
            user_scores[existing_entry_index]['score'] = score
    else:
        user_scores.append({
            "nickname": nickname,
            "score": score
        })
        
    save_data(db)
    return jsonify({"success": True})

@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    db = load_data()
    
    # Sort scores
    if 'scores' in db:
        for test_id in db['scores']:
            # Sort by score desc
            db['scores'][test_id].sort(key=lambda x: x['score'], reverse=True)
            
    return jsonify(db['scores'])

if __name__ == '__main__':
    print("Server running on http://localhost:5000")
    app.run(port=5000, debug=True)
