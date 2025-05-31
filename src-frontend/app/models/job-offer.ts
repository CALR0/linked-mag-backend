export interface JobOffer {
  name: string;
  email: string;
  phone: number | null;
  date: Date | null;
  city: string;
  country: string;
  modality: string;
  salary: number | null;
  description: string;
}
