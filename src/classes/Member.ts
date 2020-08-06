import { MemberInterface } from "../MemberInterface";

export default class Member implements MemberInterface {
  constructor(
    public id: string,
    public name: string,
    public email: string, 
    public dateOfBirth: string,
  ){}
}