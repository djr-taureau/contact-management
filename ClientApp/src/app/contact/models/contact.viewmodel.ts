export enum ContactType {
  Client = '1',
  Lawyer = '2',
  Company = '3',
  OpposingCounsel = '4',
}

export enum PhoneType {
  Cell = '1',
  Home = '2',
  Work = '3'
}

export interface Phone {
  phoneNumber: number;
  phoneType: string;
}

export interface Address {
  addressDescription: string;
  address1: string;
  address2: string;
  city: string;
  state?: string;
  postalCode: string;
  country: number;
}

export interface Contact {
  id?: number | 0;
  firstName: string;
  lastName: string;
  contactType: string[];
  email: string;
  phone: Phone[];
  address: Address[];
  birthDate: string;
  company: string;
  jobTitle: string;
  notes?: string;
}

export interface ContactFormValue {
  id?: number | 0;
  fullName: string;
  contactType: number[];
  email: string;
  address: object[];
  phone: object[];
  birthDate: string;
  company: string;
  jobTitle: string;
  notes?: string;
}
