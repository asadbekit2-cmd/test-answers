import re
import json
import os

def parse_test_file(filename, title, description):
    questions = []
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Split by lines to process each question
        lines = content.strip().split('\n')
        
        for line in lines:
            if not line.strip() or not line.startswith('Question'):
                continue
            
            # Remove "Question X: " prefix
            question_match = re.match(r'Question \d+:\s*(.+)', line)
            if not question_match:
                continue
            
            rest_of_line = question_match.group(1)
            
            # Split by option markers: [ ] or [CORRECT]
            # Use lookahead/lookbehind to keep the markers
            # Match [ ] with space or [CORRECT] but not [] without space
            parts = re.split(r'(\[\s+\]|\[CORRECT\])', rest_of_line)
            
            # First part is the question text
            question_text = parts[0].strip()
            
            options = []
            correct_answer = 0
            
            # Process remaining parts (markers and option texts)
            i = 1
            while i < len(parts):
                if i >= len(parts):
                    break
                    
                marker = parts[i].strip()
                
                # Get the option text (next part)
                if i + 1 < len(parts):
                    option_text = parts[i + 1].strip()
                    
                    # If there's more content, we need to stop at the next marker
                    # Look for the next marker position
                    if option_text:
                        options.append(option_text)
                        
                        # Check if this was the correct answer
                        if marker == '[CORRECT]':
                            correct_answer = len(options) - 1
                
                i += 2
            
            if options and len(options) >= 2:
                questions.append({
                    "type": "multiple-choice",
                    "question": question_text,
                    "options": options,
                    "correctAnswer": correct_answer
                })
                
        return {
            "id": title.lower().replace(" ", "-"),
            "title": title,
            "description": description,
            "questions": questions,
            "completed": False,
            "score": None
        }
        
    except Exception as e:
        print(f"Error parsing {filename}: {e}")
        import traceback
        traceback.print_exc()
        return None

# Define files to parse
files = [
    ("/home/asadbek/Desktop/test answers/php test", "PHP Test", "Test your PHP knowledge"),
    ("/home/asadbek/Desktop/test answers/sql test", "SQL Test", "Test your SQL knowledge"),
    ("/home/asadbek/Desktop/test answers/ux-ui test", "UX/UI Test", "Test your UX/UI design knowledge")
]

all_tests = []

for file_path, title, desc in files:
    if os.path.exists(file_path):
        test_data = parse_test_file(file_path, title, desc)
        if test_data:
            all_tests.append(test_data)
            print(f"Parsed {title}: {len(test_data['questions'])} questions")

# Write to tests.js
js_content = f"const PRELOADED_TESTS = {json.dumps(all_tests, indent=2, ensure_ascii=False)};"

with open('/home/asadbek/Desktop/test answers/tests.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\nSuccessfully generated tests.js with {len(all_tests)} tests")
print(f"Total questions: {sum(len(t['questions']) for t in all_tests)}")
