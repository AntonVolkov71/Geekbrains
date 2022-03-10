export interface ISearchFormData {
  city?: string;
  pointsCity?: {
    longitude: number;
    latitude: number;
  }
  checkin: Date;
  checkout: Date;
  maxPrice?: number;
}
