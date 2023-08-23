const API_URL = "https://workspace-methed.vercel.app/";
const LOCATION_URL = "api/locations"; // получить города

const getData = async (url, cbSuccess, cbError) => {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    cbSuccess(data);
  } catch (err) {
    cbError(err);
  }
};

const init = () => {
  const citySelect = document.querySelector("#city");
  const cityChoices = new Choices(citySelect, {
    // searchEnabled: false, // если удалить это, появится поиск по городам
    itemSelectText: "",
  });

  getData(
    `${API_URL}${LOCATION_URL}`,
    (locationData) => {
      const locations = locationData.map((location) => {
        value.location;
      });
      cityChoices.setChoices(locations, "value", "label", false);
    },
    (err) => {
      // console.log(err);
    },
  );
};

init();
