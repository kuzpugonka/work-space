import { vacanciesFilter, vacanciesFilterBtn } from "../script.js";

const openFilter = (btn, dropDown, classNameBtn, classNameDd) => {
  dropDown.style.height = `${dropDown.scrollHeight}px`;
  btn.classList.add(classNameBtn);
  dropDown.classList.add(classNameDd);
};
export const closeFilter = (btn, dropDown, classNameBtn, classNameDd) => {
  btn.classList.remove(classNameBtn);
  dropDown.classList.remove(classNameDd);
  dropDown.style.height = "";
};

export const filterToggle = () => {
  vacanciesFilterBtn.addEventListener("click", () => {
    if (vacanciesFilterBtn.classList.contains("vacancies__filter-btn_active")) {
      closeFilter(
        vacanciesFilterBtn,
        vacanciesFilter,
        "vacancies__filter-btn_active",
        "vacancies__filter_active"
      );
    } else {
      openFilter(
        vacanciesFilterBtn,
        vacanciesFilter,
        "vacancies__filter-btn_active",
        "vacancies__filter_active"
      );
    }
  });

  window.addEventListener("resize", () => {
    if (vacanciesFilterBtn.classList.contains("vacancies__filter-btn_active")) {
      closeFilter(
        vacanciesFilterBtn,
        vacanciesFilter,
        "vacancies__filter-btn_active",
        "vacancies__filter_active"
      );
    }
  });
};