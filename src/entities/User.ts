import { v4 as uuid } from 'uuid'

export default class User {
  constructor(name: string, email: string, password: string){
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  id: string;
  
  name: string;

  email: string;

  password: string;
}