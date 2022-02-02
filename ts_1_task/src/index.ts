import {renderSearchFormBlock} from './search-form.js'
import {renderSearchStubBlock} from './search-results.js'
import {renderUserBlock} from './user.js'
import {renderToast} from './lib.js'
import {addDays} from "./lib/addDays.js";

// function addDays (date: Date, value: number): Date {
//   return (new Date(date.getFullYear(), date.getMonth(), date.getDate() + value))
// };

window.addEventListener('DOMContentLoaded', () => {
  const dateEntry: Date = addDays(new Date(), 1);
  const dateDeparture = addDays(dateEntry, 2);

  renderUserBlock('Anton Volkov', '/img/avatar.png', 1);
  renderSearchFormBlock(dateEntry, dateDeparture);
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
