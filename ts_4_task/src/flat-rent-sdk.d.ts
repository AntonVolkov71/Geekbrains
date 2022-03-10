export interface IFlat {
  id: string;
  title: string;
  details: string;
  photos?: string[],
  coordinates: number[],
  bookedDates: Date[],
  price?: number;
  totalPrice?: number;
}

export interface IParametersSearch {
  checkInDate: Date;
  checkOutDate: Date;
  city: string;
  priceLimit: number;
}

export type ILocalStorageKey = 'flat-rent-db'

export function cloneDate(date: Date): Date;

export function addDays(date: Date, days: number): Date;

export const backendPort: number;
export const localStorageKey: ILocalStorageKey;

export class FlatRentSdk {
  constructor();

  database: IFlat[];

  get(id: string): boolean | Promise<IFlat | IFlat>;
  search(parameters: IParametersSearch): Promise<IFlat[]>;
  book(flatId: string, checkInDate: Date, checkOutDate: Date): Promise<number>;

  private _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void;
  private _resetTime(date: Date): void;
  private _calculateDifferenceInDays(startDate: Date, endDate: Date): void;
  private _generateDateRange(from: Date, to: Date): Date[];
  private _generateTransactionId(): number;
  private _areAllDatesAvailable(flat: IFlat, dateRange: Date[]): boolean;
  private _formatFlatObject(flat: IFlat, nightNumber: number): IFlat;
  private _readDatabase(): null | IFlat[];
  private _writeDatabase(database: IFlat[]): void;
  private _syncDatabase(database: IFlat[]): void;
}
