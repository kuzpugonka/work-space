import { API_URL, VACANCY_URL, appData, filterForm, vacanciesFilter, vacanciesFilterBtn } from "../script.js";
import { getData } from "./getData.js";
import { closeFilter } from "./openFilter.js";
import { renderError } from "./renderError.js";
import { renderVacancies } from "./renderVacancies.js";

export const filterFormControl = () => {
  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(filterForm);

    const urlWithParams = new URL(`${API_URL}${VACANCY_URL}`);
    formData.forEach((value, key) => {
      urlWithParams.searchParams.append(key, value);
    });

    getData(urlWithParams, renderVacancies, renderError)
      .then(() => {
        appData.lastUrl = urlWithParams;
      })
      .then(() => {
        closeFilter(
          vacanciesFilterBtn,
          vacanciesFilter,
          "vacancies__filter-btn_active",
          "vacancies__filter_active"
        );
      });
  });
};