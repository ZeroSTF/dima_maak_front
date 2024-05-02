import {User} from "./user";
import {IStatus, Sector, Stage, Venture, VType} from "./venture";
import {Return} from "./return";

export class Investment {
    id?: number;
    date?: string;
    purchasedShares?: number;
    amount?: number;
    totalInvestment?: number;
    status?: INStatus;
    user?: User;
    venture?: Venture;
    idV?: number;

}
export enum INStatus {
    ACTIVE = 'ACTIVE',
    PENDING = 'DISABLED', // Correction de la valeur de PENDING
}
/*newI : // @ts-ignore
    Investment = {
      id: 0,
      date: '',
      purchasedShares: 0,
      amount: 0,
      totalInvestment: 0,
      sharesPrice: 0,
      status: INStatus.ACTIVE,
        venture:0,
        user:0,
        idV:0
    };*/
