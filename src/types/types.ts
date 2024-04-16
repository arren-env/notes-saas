export interface IUser {
  name: string;
  email: string;
  image: string | undefined | null;
}

export interface IUserDb {
  id: string;
  firstName: string | undefined | null;
  lastName: string | undefined | null;
  email: string;
  profileImage: string | undefined | null;
}

export interface IStripe {
  priceId: string;
  domainUrl: string;
  customerId: string;
}