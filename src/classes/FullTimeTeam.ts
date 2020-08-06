import Team from "./Team";
import TeamInterface from "../TeamInterface";
import Lecturer from "./Lecturer";
import Student from "./Student";

export default class FullTimeTeam extends Team implements TeamInterface{
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
  }
}