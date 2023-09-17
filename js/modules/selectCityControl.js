import { API_URL, LOCATION_URL } from "../script.js";
import { getData } from "./getData.js";

export const selectCityControl = () => {
  const citySelect = document.querySelector("#city");
  const cityChoices = new Choices(citySelect, {
    // searchEnabled: true, // если удалить это, появится поиск по городам
    itemSelectText: "",
    position: "bottom", // pзаставит окно выбора открываться только вниз
  });

  getData(
    `${API_URL}${LOCATION_URL}`,
    (locationData) => {
      const locations = locationData.map((location) => ({
        value: location,
      }));
      cityChoices.setChoices(locations, "value", "label", false);
    },
    (err) => {
      console.log(err);
    }
  );
};