import {User} from "./user";
import {Investment} from "./investment";

export class Venture {
    idV?: number;
    companyName?: string;
    ventureName?: string;
    ventureType?: VType;
    description?: string;
    stage?: Stage;
    sector?: Sector;
    availableShares?: number;
    sharesPrice?: number;
    dateExp?: string;
    status?: IStatus;
    loanAmount?: number;
    interest?: number;
    loanDuration?: number;
    dividendPerShare?: number;
    details?: string;
    user?: User;
    investments?: Investment[];
}

export enum VType {
  LoanOffre = 'LoanOffre',
  SocialImpactLoan = 'SocialImpactLoan',
  PubliclyShares = 'PubliclyShares'
}

export enum Stage {
    STARTUP = 'STARTUP',
    GROWTH = 'GROWTH',
    MATURE = 'MATURE',
}

export enum Sector {
    AGRICULTURE = 'AGRICULTURE',
    Retail = 'Retail',
    Technology = 'Technology',
    Other = 'Other',
}

export enum IStatus {
    ACTIVE = 'ACTIVE',
    CLOSED = 'CLOSED',

}

newV : // @ts-ignore
    Venture = {
  idV: 0,
  companyName: '',
  ventureName: '',
  ventureType: VType.PubliclyShares, // Vous pouvez choisir un type par défaut
  description: '',
  stage: Stage.STARTUP, // Vous pouvez choisir un stage par défaut
  sector: Sector.AGRICULTURE, // Vous pouvez choisir un secteur par défaut
  availableShares: 0,
  sharesPrice: 0,
  dateExp: '', // Vous pouvez initialiser avec la date actuelle si nécessaire
  status: IStatus.ACTIVE, // Vous pouvez choisir un statut par défaut
  loanAmount: 0,
  interest: 0,
  loanDuration: 0,
  dividendPerShare: 0,
  details: '',
  investments: [] // Si vous n'avez pas de valeur par défaut, initialiser avec un tableau vide
};
