import Student from "./Student";
import Lecturer from "./Lecturer";
import Team from "./Team";
import JSONFileManager from "./JSONFileManager";
import moment from 'moment'

export default class SchoolManager {

  private students: Student[] = []
  private teams: Team[] = []
  private lecturers: Lecturer[] = []

  constructor() {
  }

  public setStudent(student: Student): void{
    this.students = new JSONFileManager('./Students.json').readDatabase()
    this.students.push(student)
    new JSONFileManager('./Students.json').writeToDatabase(this.students)
  }

  public setLecturer(lecturer: Lecturer): void{
    this.lecturers = new JSONFileManager('./Lecturers.json').readDatabase()
    this.lecturers.push(lecturer)
    new JSONFileManager('./Lecturers.json').writeToDatabase(this.lecturers)
  }

  public setTeam(team: Team): void{
    this.teams = new JSONFileManager('./Teams.json').readDatabase()
    this.teams.push(team)
    new JSONFileManager('./Teams.json').writeToDatabase(this.teams)
  }

  public setLecturerToTeam(teamId: string, teamName: string, lecturerId: string, lecturerName: string){
    this.lecturers = new JSONFileManager('./Lecturers.json').readDatabase()
    this.teams = new JSONFileManager('./Teams.json').readDatabase()
    let message: string = "Dados não conferem."

    const foundTeam: Team | undefined = this.teams.find((team: Team) => {
      if(teamId === team.id && teamName === team.name){
        return team
      }
    })

    const foundLecturer: Lecturer | undefined = this.lecturers.find((lecturer: Lecturer) => {
      if(lecturerId === lecturer.id && lecturerName === lecturer.name){
        return lecturer
      }
    })

    if((foundLecturer && foundLecturer !== undefined) && (foundTeam && foundTeam !== undefined)){
      foundTeam.lecturerList.push(foundLecturer)
      new JSONFileManager('./Teams.json').writeToDatabase(this.teams)
      message = "Estudante adcionado com sucesso."
    }
    return message
  }

  public setStudentToTeam(teamId: string, teamName: string, studentId: string, studentName: string): string{
    this.students = new JSONFileManager('./Students.json').readDatabase()
    this.teams = new JSONFileManager('./Teams.json').readDatabase()
    let message: string = "Dados não conferem."

    const foundTeam: Team | undefined = this.teams.find((team: Team) => {
      if(teamId === team.id && teamName === team.name){
        return team
      }
    })

    const foundStudent: Student | undefined = this.students.find((student: Student) => {
      if(studentId === student.id && studentName === student.name){
        return student
      }
    })

    if((foundStudent && foundStudent !== undefined) && (foundTeam && foundTeam !== undefined)){
      foundTeam.studentsList.push(foundStudent)
      new JSONFileManager('./Teams.json').writeToDatabase(this.teams)
      message = "Estudante adcionado com sucesso."
    }
    return message
  }

  public getStudentAgeFromId(id: string): number {
    this.students = new JSONFileManager('./Students.json').readDatabase()
    const foundStudent: Student | undefined=  this.students.find((student: Student) => {
      return student.id === id
    })

    if(foundStudent && foundStudent !== undefined){
      return moment().diff(moment(foundStudent.dateOfBirth, "DD/MM/YYYY"), "years");
    }
    return 0;
  }
}