export interface ProtoUser {
  userName: string;
  passwd: string;
}

export interface User {
  id: string;
  userName: string;
  token: string;
  image?: string;
}
