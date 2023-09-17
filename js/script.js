import { fileController } from "./modules/fileController.js";
import { filterFormControl } from "./modules/filterFormControl.js";
import { formController } from "./modules/formController.js";
import { loadMoreVacancies } from "./modules/loadMoreVacancies.js";
import { modalVacancyControl } from "./modules/modalVacancyControl.js";
import { filterToggle } from "./modules/openFilter.js";
import { selectCityControl } from "./modules/selectCityControl.js";
import { vacancyControl } from "./modules/vacancyControl.js";

export const API_URL = "https://adorable-cultured-trade.glitch.me/";
export const LOCATION_URL = "api/locations"; // получить городаexport 
export const VACANCY_URL = "api/vacancy";
export const BOT_TOKEN = "5865349145:AAFzbOl9p7W0hreb0kRvdLtwShm_eLAGchA";

export const cardsList = document.querySelector(".cards__list");
export const filterForm = document.querySelector(".filter__form");
export const vacanciesFilterBtn = document.querySelector(".vacancies__filter-btn");
export const vacanciesFilter = document.querySelector(".vacancies__filter");

export let appData = {
  lastUrl: "",
};
export const pagination = {};

export const sendTelegrm = (modal) => {
  modal.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("hello");
    const form = e.target.closest(".detail__tg");
    // console.log(form);

    const userId = "719154468";

    const text = `Отклик на вакансию ${form.vacancyId.value}, email: ${form.message.value}`;
    const urlBot = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${userId}&text=${text}`;

    fetch(urlBot)
      .then((res) => alert("Успешно отправлено"))
      .catch((err) => {
        alert("Ошибка");
        // console.log(error);
      });
  });
};

export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMoreVacancies();
      }
    });
  },
  {
    rootMargin: "100px",
  }
);


const init = () => {
  try {
    filterToggle();

    // select city
    selectCityControl();

    // cards
    vacancyControl();

    // modal
    modalVacancyControl();

    // filter работает
    filterFormControl();
  } catch (error) {
    console.log("error: ", error);
    console.warn("Эта ошибка вышла потому что мы не на странице индекс аштимээль, значит все работает корректно");
  }

  try {
    formController();
    fileController();
  } catch (error) {
    console.log("error: ", error);
    console.warn("Эта ошибка вышла потому что мы не на странице employer аШтимээль, значит все работает корректно");
  }
};

init();
