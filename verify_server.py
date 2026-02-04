import requests
import time
import subprocess
import sys
import os

SERVER_URL = "https://harmonious-babka-6fa6ae.netlify.app/"

def start_server():
    print("Starting server...")
    return subprocess.Popen([sys.executable, "server.py"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

def stop_server(process):
    print("Stopping server...")
    process.terminate()
    process.wait()

def test_registration():
    print("Testing Registration...")
    
    # Test 1: Register new user
    nickname = f"TestUser_{int(time.time())}"
    resp = requests.post(f"{SERVER_URL}/api/register", json={"nickname": nickname})
    assert resp.status_code == 200, f"Registration failed: {resp.text}"
    print("✓ Registration successful")
    
    # Test 2: Duplicate registration
    resp = requests.post(f"{SERVER_URL}/api/register", json={"nickname": nickname})
    assert resp.status_code == 409, f"Duplicate registration should fail: {resp.status_code}"
    print("✓ Duplicate check successful")
    
    return nickname

def test_score_submission(nickname):
    print("Testing Score Submission...")
    
    resp = requests.post(f"{SERVER_URL}/api/submit-score", json={
        "nickname": nickname,
        "testId": "test-id",
        "score": 100
    })
    assert resp.status_code == 200, f"Score submission failed: {resp.text}"
    print("✓ Score submission successful")

def test_leaderboard(nickname):
    print("Testing Leaderboard...")
    
    resp = requests.get(f"{SERVER_URL}/api/leaderboard")
    assert resp.status_code == 200
    data = resp.json()
    
    # Verify our score is there
    found = False
    if "test-id" in data:
        for entry in data["test-id"]:
            if entry["nickname"] == nickname and entry["score"] == 100:
                found = True
                break
    
    assert found, "Score not found in leaderboard"
    print("✓ Leaderboard verification successful")

def run_tests():
    # Start server
    server_process = start_server()
    time.sleep(2) # Wait for server
    
    try:
        nickname = test_registration()
        test_score_submission(nickname)
        test_leaderboard(nickname)
        print("\nAll tests passed!")
    except Exception as e:
        print(f"\n❌ Test failed: {e}")
    finally:
        stop_server(server_process)

if __name__ == "__main__":
    run_tests()
