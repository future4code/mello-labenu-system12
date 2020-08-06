import Student from "./classes/Student";
import Lecturer from "./classes/Lecturer";
import { Skills } from "./SkillsEnum";
import { NightTeam } from "./classes/NightTeam";
import FullTimeTeam from "./classes/FullTimeTeam";
import readLine from 'readline';
import Team from "./classes/Team";
import Member from "./classes/Member";

const newNightTeam: Team = new NightTeam("12", "Mello", "15/01/2020", "15/07/2020",  [], [], undefined)
const newFullTeam: Team = new FullTimeTeam("13", "turma-noite", "15/01/2020", "15/07/2020", [], [], undefined)

const newStudent: Student = new Student("1234", "Manoel", "mneto_004@hotmail.com", "13/06/1993", ["ler", "escrever"])
const newTeacher: Lecturer = new Lecturer("1111", "Caio", "caio@labenu.com", "12/12/1990", [Skills.BACKEND, Skills.CSS, Skills.REACT])

const addStudentToTeam = (team: Team, student: Student) => {
  try{
  team.studentsList.push(student)
  console.log('Estudante adicionado')
  console.log(team)
  } catch (e) {
    console.log('Erro ao adicionar estudante')
  }
}

const addProfessorToTeam = (team: Team, professor: Lecturer) => {
  try{
  team.lecturerList.push(professor)
  console.log('Professor adicionado')
  console.log(team)
  } catch (e) {
    console.log('Erro ao adicionar professsor')
  }
}

const array: Student[] = [
  {
    id: "1",
    name: "Diogo",
    email: "aaaa@aa.aa",
    dateOfBirth: "  ",
    hobbies: []
  }
]

const checkStudent = (lookID: string) => {
  const found: Student | undefined = array.find((item) => {
    return item.id === lookID
  })
  if(found && found !== undefined) {
    console.log(found.name)
  }
  
}

addStudentToTeam(newFullTeam, newStudent)
addProfessorToTeam(newFullTeam, newTeacher)
checkStudent("1")

// const rl = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })


