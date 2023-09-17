import { cardsList, observer, pagination } from "../script.js";
import { createCards } from "./createCards.js";

export const renderMoreVacancies = (data) => {
  const cards = createCards(data);
  cardsList.append(...cards);

  if (data.pagination) {
    Object.assign(pagination, data.pagination);
  }

  observer.observe(cardsList.lastElementChild);
};