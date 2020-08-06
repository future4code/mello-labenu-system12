import { MemberInterface } from "../MemberInterface";
import Member from "./Member";
import { Skills } from "../SkillsEnum";

export default class Lecturer extends Member implements MemberInterface {
  constructor(
    id: string,
    name: string,
    email: string,
    dateOfBirth: string,
    public skills: Skills[]
  ){
    super(id, name, email, dateOfBirth)
  }
}