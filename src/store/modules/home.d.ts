export interface HomeState {
  setDataLoading: boolean;
  hotelsList: Array<Hotel>;
}

export interface Hotel {
  name: string;
  description: string;
  price: number;
  location: string;
  id: number;
}
