export interface IContact {
  //schema for the data
  id: number;
  name: string;
  phone: string;
  email: string
}

export class Contact implements IContact {
  //placeholder for the data
  id: number;
  name: string;
  phone: string;
  email: string;
}
