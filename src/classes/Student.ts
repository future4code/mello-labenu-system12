import Member from "./Member";
import { MemberInterface } from "../MemberInterface";

export default class Student extends Member implements MemberInterface {
  constructor(
    id: string,
    name: string, 
    email: string,
    dateOfBirth: string,
    public hobbies: string[],
  ) {
    super(id, name, email, dateOfBirth)
  }
}