import re
import json
import os

def parse_test_file(filename, title, description):
    questions = []
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Split by "Question X:" pattern
        # The regex looks for "Question \d+:" and captures everything until the next one or end of file
        raw_questions = re.split(r'Question \d+:', content)
        
        # Remove the first empty element if it exists
        if raw_questions and not raw_questions[0].strip():
            raw_questions.pop(0)
            
        for i, raw_q in enumerate(raw_questions):
            if not raw_q.strip():
                continue
                
            # Extract question text and options
            # The format is: Question Text [ ] Option 1 [CORRECT] Option 2 ...
            
            # Find all options marked with [ ] or [CORRECT]
            # We'll split by the option markers
            parts = re.split(r'\[(.*?)\]', raw_q)
            
            question_text = parts[0].strip()
            options = []
            correct_answer = 0
            
            # parts[1] is marker, parts[2] is option text, parts[3] is marker, parts[4] is option text...
            current_option_index = 0
            for j in range(1, len(parts), 2):
                marker = parts[j].strip()
                option_text = parts[j+1].strip()
                
                if option_text:
                    options.append(option_text)
                    if marker == 'CORRECT':
                        correct_answer = current_option_index
                    current_option_index += 1
            
            if options:
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

# Write to tests.js
js_content = f"const PRELOADED_TESTS = {json.dumps(all_tests, indent=2)};"

with open('/home/asadbek/Desktop/test answers/tests.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully generated tests.js with {len(all_tests)} tests")
