import TeamInterface from "../TeamInterface";
import Lecturer from "./Lecturer";
import Student from "./Student";

export default class Team implements TeamInterface {
  constructor(
    public id: string,
    public name: string, 
    public startDate: string,
    public endDate: string,
    public lecturerList: Lecturer[],
    public studentsList: Student[],
    public module: number | undefined
  ){}
}