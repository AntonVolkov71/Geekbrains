import { renderBlock } from './lib.js'
import {IUser} from "./interface/IUser.interface.js";

export function renderUserBlock (user: IUser) {
  const {avatarUrl, nameUser, favoritesAmount} = user;
  const favoritesCaption = favoritesAmount ? favoritesAmount : 'ничего нет';
  const hasFavoriteItems = !!favoritesAmount;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="${nameUser}" />
      <div class="info">
          <p class="name">${nameUser}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
