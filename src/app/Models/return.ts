import {Investment} from "./investment";

export class Return {

  idR?: number;
  rDate?: string;
  returnType?: RType;
  returnAmount?: number;
  returnInterest?: number;
  sharesGain?: number;
  investment?: Investment;
}

export enum RType {

   DIVIDEND = 'DIVIDEND',
   INTEREST = 'INTEREST',
   SharesDividend = 'SharesDividend',
   CapitalGain = 'CapitalGain',

}

