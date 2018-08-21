export interface ContactFormValue {
  id?: number | 0;
  fullName: string;
  contactType: number[];
  email: string;
  address: object[];
  birthDate: string;
  company: string;
  jobTitle: string;
  notes?: string;
}

export const initialFormState = {
  fullName: '',
  contactType: [],
  email: '',
  address: [],
  birthDate: '',
  company: '',
  jobTitle: '',
  notes: ''
};

