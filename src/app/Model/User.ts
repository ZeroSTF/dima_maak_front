import { Set } from 'typescript';
export class User{
  id!: number;
  cin!: number;
  name!: string;
  surname!: string;
  birthDate!: Date;
  email!: string;
  password!: string;
  salary!: number;
  job!: string;
  photo?: string;
  balance!: number;
  creditScore!: number;
  rib!: number;
  roles!: Set<Role>;
  status!: UStatus;
  address?: Location;
}
export enum UStatus {
  Blocked,
  Pending,
  Active,
}
export class Role {
}
