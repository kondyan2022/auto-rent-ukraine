export const getCarItems = (state) => state.cars.items;

export const getPageNumber = (state) => state.cars.page;
export const getPageLimit = (state) => state.cars.limit;
export const getIsLastPage = (state) => state.cars.isLastPage;

export const getServerPaginationState = (state) => state.cars.serverPagination;
