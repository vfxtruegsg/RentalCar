export const selectCarBrands = (state) => state.cars.car.brands;
export const selectCarList = (state) => state.cars.car.carData;
export const selectCarDescription = (state) =>
  state.cars.car.selectedCarDescription;
export const selectIsFavorite = (state) => state.cars.car.favoriteCars;
export const selectIsLoading = (state) => state.cars.isLoading;
