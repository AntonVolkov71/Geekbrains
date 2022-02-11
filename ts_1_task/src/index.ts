import {renderSearchFormBlock} from './search-form.js'
import {renderSearchStubBlock} from './search-results.js'
import {renderUserBlock} from './user.js'
import {addDays, renderToast} from './lib.js'
import {IUser, IUserDto} from "./interface/IUser.interface.js";
import {AVATAR_URL, FAVORITES_AMOUNT, USER, USER_NAME} from "./aliase.js";

const userMock: IUserDto = {
  [USER_NAME]: "Anton",
  [AVATAR_URL]: "/img/avatar.png",
};

localStorage.setItem(USER, JSON.stringify(userMock));
localStorage.setItem(FAVORITES_AMOUNT, "33");

function isUser(object: unknown): object is IUserDto {
  return Object.prototype.hasOwnProperty.call(object, USER_NAME)
    && Object.prototype.hasOwnProperty.call(object, AVATAR_URL);
}

function getUserData(): IUserDto {
  const user: unknown = localStorage.getItem(USER);

  if (typeof user === "string") {
    const userObject = JSON.parse(user);
    return isUser(userObject) && userObject;
  }
}

function getFavoritesAmount(): number {
  const favoritesAmount: unknown = localStorage.getItem(FAVORITES_AMOUNT);

  if (typeof favoritesAmount === "string")
    return typeof Number.parseInt(favoritesAmount) === "number" && Number.parseInt(favoritesAmount);
}

window.addEventListener('DOMContentLoaded', () => {
  const dateEntry: Date = addDays(new Date(), 1);
  const dateDeparture = addDays(dateEntry, 2);
  const userDto: IUserDto = getUserData();
  const favoritesAmount: number = getFavoritesAmount();

  const user: IUser = Object.assign(userDto, {[FAVORITES_AMOUNT]: favoritesAmount});

  renderUserBlock(user);
  renderSearchFormBlock({dateEntry, dateDeparture}, {
    name: 'Понял', handler: () => {
      console.log('Уведомление закрыто')
    }
  });
  renderSearchStubBlock();
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {
      name: 'Понял', handler: () => {
        console.log('Уведомление закрыто')
      }
    }
  )
});
