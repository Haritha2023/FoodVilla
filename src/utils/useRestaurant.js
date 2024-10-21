import { FETCH_MENU_URL } from "../constants";
import { useEffect, useState } from "react";

const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  async function getRestaurantsInfo() {
    const data = await fetch(FETCH_MENU_URL + restaurantId);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  //Get data from api

  //return restaurant data

  return restaurant;
};

export default useRestaurant;
