export class InsurancePack {
    id!: number;
    name!: string;
    type!: IType;
    duration!: number;
    coverageAmount!: number;
    premium!: number;
    policy!: string;
}
export enum IType {
    Property_Insurance,
    Health_Insurance,
    Auto_Insurance,
    Agriculteur_Insurance,
    Liability_Insurance,
    Business_Insurance
  }