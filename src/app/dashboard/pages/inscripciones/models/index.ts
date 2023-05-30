
import { Alumno } from "../../alumnos/alumnos.component";
import { Curso } from "../../cursos/models";
import { Subject } from "../../subject-models";


export interface Inscripcion {
  id: number;
  studentId: number;
  courseId: number;
  subjectId: number;
}

//http://localhost:3000/inscriptions?_expand=student
//para utilizar con el _expand del mockapi
export interface InscripcionWithStudent extends Inscripcion {
  student: Alumno;
}

export interface InscripcionWithSubject extends Inscripcion {
  subject: Subject;
}
//http://localhost:3000/inscriptions?_expand=course&_expand=student

export interface InscripcionWithCourse extends Inscripcion {
  course: Curso;
}

export interface CreateInscripcionData {
  studentId: number;
  courseId: number;
  subjectId: number;
}
//http://localhost:3000/inscriptions?_expand=course&_expand=student&_expand=student&_expand=student t/TODO

export type InscripcionWithAll = InscripcionWithStudent & InscripcionWithSubject & InscripcionWithCourse;