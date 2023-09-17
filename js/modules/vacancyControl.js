import { API_URL, VACANCY_URL, appData } from "../script.js";
import { getData } from "./getData.js";
import { renderError } from "./renderError.js";
import { renderVacancies } from "./renderVacancies.js";

export const vacancyControl = () => {
  const urlWithParams = new URL(`${API_URL}${VACANCY_URL}`);

  urlWithParams.searchParams.set("limit", window.innerWidth < 768 ? 6 : 12);
  urlWithParams.searchParams.set("page", 1);

  getData(urlWithParams, renderVacancies, renderError).then(() => {
    appData.lastUrl = urlWithParams;
  });
};