import { InsurancePack } from "./InsurancePack";
import { User } from "./User";

export class Insurance {
    id!: number;
    startDate!: Date;
    endDate!: Date;
    clientcoverageamount!: number;
    clientpremium !: number;
    state!: InStatus ;
    insuranceP!: InsurancePack; // Nested insuranceP object
    user!:User
    
    

}

// insurance.ts
export enum InStatus {
    Accepted = 'Accepted',
    Pending = 'Pending',     
    Denied = 'Denied',
    Archived = 'Archived'
  }
  