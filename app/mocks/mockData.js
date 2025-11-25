export const SINGLE_QUESTION = [
    {
        "id": 1,
        "question": "How to delete a directory in Linux?",
        "description": "delete folder",
        "answers": {
            "answer_a": "ls",
            "answer_b": "delete",
            "answer_c": "remove",
            "answer_d": "rmdir",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": "rmdir deletes an empty directory",
        "tip": null,
        "tags": [],
        "category": "linux",
        "difficulty": "Easy"
    }
]

export const ALL_QUESTION = [
    {
        "id": 1,
        "question": "How to delete a directory in Linux?",
        "description": "delete folder",
        "answers": {
            "answer_a": "ls",
            "answer_b": "delete",
            "answer_c": "remove",
            "answer_d": "rmdir",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": "rmdir deletes an empty directory",
        "tip": null,
        "tags": [],
        "category": "linux",
        "difficulty": "Easy"
    },
    {
        "id": 2,
        "question": "Which HTTP method is used to update a resource?",
        "description": "REST API update",
        "answers": {
            "answer_a": "GET",
            "answer_b": "POST",
            "answer_c": "PUT",
            "answer_d": "DELETE",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": "PUT is commonly used to update an existing resource.",
        "tip": "PATCH can also be used for partial updates.",
        "tags": ["api", "web"],
        "category": "webdev",
        "difficulty": "Medium"
    },
    {
        "id": 3,
        "question": "Which command shows current running processes in Linux?",
        "description": "list processes",
        "answers": {
            "answer_a": "ps",
            "answer_b": "ls -p",
            "answer_c": "proc",
            "answer_d": "task",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": "ps lists running processes.",
        "tip": "Use `top` or `htop` for real-time monitoring.",
        "tags": ["linux"],
        "category": "linux",
        "difficulty": "Easy"
    },
    {
        "id": 4,
        "question": "What is the default port for HTTPS?",
        "description": "secure web traffic",
        "answers": {
            "answer_a": "80",
            "answer_b": "21",
            "answer_c": "22",
            "answer_d": "443",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": "HTTPS uses port 443 by default.",
        "tip": null,
        "tags": ["networking"],
        "category": "networking",
        "difficulty": "Easy"
    },
    {
        "id": 5,
        "question": "Which JavaScript method converts JSON to an object?",
        "description": "JSON parsing",
        "answers": {
            "answer_a": "JSON.stringify()",
            "answer_b": "JSON.parse()",
            "answer_c": "toJSON()",
            "answer_d": "parseJSON()",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": "JSON.parse() converts a JSON string into an object.",
        "tip": null,
        "tags": ["javascript"],
        "category": "programming",
        "difficulty": "Easy"
    }
]
