import Student from "./classes/Student";
import Lecturer from "./classes/Lecturer";
import { Skills } from "./SkillsEnum";
import { NightTeam } from "./classes/NightTeam";
import FullTimeTeam from "./classes/FullTimeTeam";
import readLine from 'readline';
import Team from "./classes/Team";
import Member from "./classes/Member";
import SchoolManager from "./classes/SchoolManager";

const newNightTeam: Team = new NightTeam("12", "Mello", "15/01/2020", "15/07/2020",  [], [], undefined)
const newFullTeam: Team = new FullTimeTeam("13", "Mello", "15/01/2020", "15/07/2020", [], [], undefined)

const newStudent: Student = new Student("1235", "Diogo", "diogo@hotmail.com", "13/06/1990", ["ler", "escrever"])
const newTeacher: Lecturer = new Lecturer("1122", "Paulinha", "paulinha@labenu.com", "12/12/1993", [Skills.BACKEND, Skills.CSS, Skills.REACT, Skills.CSS, Skills.TYPESCRIPT])

// const addStudentToTeam = (team: Team, student: Student) => {
//   try{
//   team.studentsList.push(student)
//   console.log('Estudante adicionado')
//   console.log(team)
//   } catch (e) {
//     console.log('Erro ao adicionar estudante')
//   }
// }

// addStudentToTeam(newFullTeam, newStudent)
// addProfessorToTeam(newFullTeam, newTeacher)
// checkStudent("1")

// const rl = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
const add = new SchoolManager().setLecturerToTeam("12", "Mello-na-night", "1122", "Paulinha")
console.log(add)
// new SchoolManager('./Teams.json').setTeam(newNightTeam)