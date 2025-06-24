type Student = {
  id: string;
  [key: string]: any;
};

type Teacher = {
  id: string;
  [key: string]: any;
};

let students: Student[] = [];
let teachers: Teacher[] = [];

export const getStudents = (): Student[] => {
  return students;
};

import { v4 as uuidv4 } from "uuid";

export const addStudent = (studentData: Omit<Student, "id" | "createdAt">) => {
  const newStudent: Student = {
    ...studentData,
    id: crypto.randomUUID(),
    createdAt: new Date(),
  };
  students.push(newStudent);
  return newStudent;
};

export const updateStudent = (id: string, studentData: Partial<Student>) => {
  let found = false;
  students = students.map((student) => {
    if (student.id === id) {
      found = true;
      return { ...student, ...studentData };
    }
    return student;
  });
  return found;
};

export const deleteStudent = (studentId: string) => {
  const initialLength = students.length;
  students = students.filter((student) => student.id !== studentId);
  return students.length < initialLength;
};

export const getTeachers = (): Teacher[] => {
  return teachers;
};

export const addTeacher = (teacherData: Omit<Teacher, "id" | "createdAt">) => {
  const newTeacher: Teacher = {
    ...teacherData,
    id: crypto.randomUUID(),
    createdAt: new Date(),
  };
  teachers.push(newTeacher);
  return newTeacher;
};

export const updateTeacher = (id: string, teacherData: Partial<Teacher>) => {
  let found = false;
  teachers = teachers.map((teacher) => {
    if (teacher.id === id) {
      found = true;
      return { ...teacher, ...teacherData };
    }
    return teacher;
  });
  return found;
};

export const deleteTeacher = (teacherId: string) => {
  const initialLength = teachers.length;
  teachers = teachers.filter((teacher) => teacher.id !== teacherId);
  return teachers.length < initialLength;
};
