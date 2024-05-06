import {Investment} from "./investment";

export class User {
    id?: number;
    cin?: number;
    name?: string;
    surname?: string;
    //address?: Location;
    birthDate?: Date;
    email?: string;
    password?: string;
    salary?: number;
    job?: string;
    photo?: string;
    balance?: number;
    rib?: number;
    role?: Role;
    status?: UStatus;
    lp?: number;
    //notifications?: Notification[];
    //loans?: Loan[];
    investments?: Investment[];
}

export enum Role {
    Customer = 'Customer',
    Admin = 'Admin',
    Fieldworker = 'Fieldworker',
    Investor = 'Investor'
}

export enum UStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}



