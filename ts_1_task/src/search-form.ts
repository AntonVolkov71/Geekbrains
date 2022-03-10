import {addDays, renderBlock} from './lib.js'
import {ISearchFormData} from "./interface/ISearchFormData.interface.js";
import {renderSearchResultsBlock} from "./search-results.js";

interface IDates {
  dateEntry: Date;
  dateDeparture: Date;
}

function addZero(num: number) {
  return String(num).length < 2 ? '0' + num : num;
}

function parseDateToString(date: Date): string {
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
}

export function renderSearchFormBlock(dates: IDates, action?: { name: string, handler: () => void }) {
  const {dateDeparture, dateEntry} = dates;
  const today = new Date();
  const dateEntryMinDefault = parseDateToString(today);
  const dateEntryMaxDefault = parseDateToString(new Date(today.getFullYear(), today.getMonth() + 2, 0));
  const dateDepartureMinDefault = parseDateToString(addDays(dateEntry, 1));

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input id="points" type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
             <input id="check-in-date" type="date" value="${parseDateToString(dateEntry)}" min="${dateEntryMinDefault}" max="${dateEntryMaxDefault}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${parseDateToString(dateDeparture)}" min="${dateDepartureMinDefault}" max="${dateEntryMaxDefault}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );

  const $form = document.getElementById('search-form-block');
  const $form2 = $form.querySelector('form');

  const res = new FormData($form2);
  const searchData  = <ISearchFormData>{};

  if ($form != null) {
    $form.onsubmit = async (e) => {
      e.preventDefault();
      for (const [key, value] of res.entries()) {
        searchData[key] = value;
      }

      renderSearchResultsBlock(searchData);
    };
  }
}
