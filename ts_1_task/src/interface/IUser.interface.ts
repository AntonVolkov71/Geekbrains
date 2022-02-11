export interface IUserDto {
  nameUser: string;
  avatarUrl: string;
}

export interface IUser extends IUserDto{
  favoritesAmount: number;
}
