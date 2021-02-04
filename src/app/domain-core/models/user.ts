export interface IUser {
  id: number;
  name: string;
  displayName: string;
  signatureToken: string;
}

export class User {
  public static getCurrentUser(): User | null {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return new User(JSON.parse(currentUser));
    } else {
      return null;
    }
  }

  public id: number;
  public name: string;
  public displayName: string;
  public signatureToken: string;

  constructor(attr: IUser) {
    Object.assign(this, attr);
  }

  public userLocalSave(): void {
    const { id, name, displayName, signatureToken } = this;
    localStorage.setItem('currentUser', JSON.stringify({
      id, name, displayName, signatureToken
    }));
  }

  public destroy(): void {
    localStorage.removeItem('currentUser');
  }

}
