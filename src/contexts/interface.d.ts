import { IUser } from '../services/interface';

export interface IAuthContext {
  signed: boolean;
  user: IUser | null;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
  loading: boolean;
}
