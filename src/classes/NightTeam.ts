import TeamInterface from "../TeamInterface";
import Team from "./Team";
import Lecturer from "./Lecturer";
import Student from "./Student";

export class NightTeam extends Team implements TeamInterface{
  constructor(
    id: string,
    name: string, 
    startDate: string,
    endDate: string,
    lecturerList: Lecturer[],
    studentList: Student[],
    module: number | undefined,
  ){
    super(id, name, startDate, endDate, lecturerList, studentList, module)
    this.name = name + '-na-night'
  }
  
}