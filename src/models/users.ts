export interface UserAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  country: string;
}

export interface User {
  id: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  image?: string;
  address?: UserAddress;
}
