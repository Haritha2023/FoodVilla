export const filterData = (searchText, restaurants) => {
  console.log(searchText, restaurants, "This is from help.js")
  const filterData = restaurants.filter((restaurant) => {
    console.log(restaurant?.info?.name);  // Log the name of each restaurant
    return restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
  });
  console.log("FilterData============", filterData);

  return filterData;
};
