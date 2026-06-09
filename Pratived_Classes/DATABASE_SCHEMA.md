# Pratived Classes ERP Database Schema

## users
- id
- clerk_user_id
- name
- email
- role
- created_at

## classes
- id
- class_name
- description
- created_at

## students
- id
- user_id
- class_id
- admission_no
- created_at

## teachers
- id
- user_id
- specialization
- created_at

## subjects
- id
- subject_name
- created_at

## teacher_subjects
- teacher_id
- subject_id

## class_teachers
- id
- class_id
- teacher_id
- subject_id

## attendance
- id
- student_id
- class_id
- attendance_date
- status
- created_at

## Relationships

users
├── students (user_id → users.id)
└── teachers (user_id → users.id)

students
└── classes (class_id → classes.id)

teachers
└── subjects (through teacher_subjects)

classes
└── teachers (through class_teachers)

attendance
├── students (student_id → students.id)
└── classes (class_id → classes.id)