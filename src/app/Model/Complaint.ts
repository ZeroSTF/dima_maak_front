import { User } from "./User";

export interface Complaint {
    id: number;
    date: Date; 
    subject: string;
    description: string;
    status: boolean;
    user ?: User; 
  }
  