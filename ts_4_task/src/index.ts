import {cloneDate, addDays, backendPort, localStorageKey, FlatRentSdk, IParametersSearch} from "./flat-rent-sdk.js";

const cloneDateTest = cloneDate(new Date());
console.log('cloneDateTest', cloneDateTest.toISOString());

const addDaysTest = addDays(new Date(), 5);
console.log('addDaysTest', addDaysTest.toISOString());

console.log('backendPort', backendPort);
console.log('localStorageKey', localStorageKey);

const flatRentSdk = new FlatRentSdk;
(async function () {
  const getFlat = await flatRentSdk.get("vnd331");
  console.log('getFlat/ id vnd331', getFlat);

  const parametersSearch: IParametersSearch = {
    city: 'Санкт-Петербург',
    checkInDate: new Date(),
    checkOutDate: new Date(),
    priceLimit: 7000
  };
  const searchFlats = await flatRentSdk.search(parametersSearch);
  console.log('searchFlats', searchFlats);

  const book = await flatRentSdk.book('vnd331', new Date(), new Date());
  console.log('book', book);
})()
