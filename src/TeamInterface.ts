import Lecturer from "./classes/Lecturer";
import Student from "./classes/Student";

export default interface TeamInterface {
  readonly id: string,
  name: string, 
  startDate: string,
  endDate: string,
  lecturerList: Lecturer[],
  studentsList: Student[],
  module: number | undefined
}