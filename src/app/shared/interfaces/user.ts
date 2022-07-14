export interface User{
  email: string;
  password?: string;
  name: string;
  lastName: string;
  lastLocation?: string;
}

export interface UserToLogin{
  email: string;
  password: string;
  location?: string;
}
