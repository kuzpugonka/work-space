import { API_URL, VACANCY_URL } from "../script.js";
import { validationForm } from "./validationForm.js";

export const formController = () => {
  const form = document.querySelector(".employer__form");
  const employerError = document.querySelector(".employer__error");
  const validate = validationForm(form);

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); //отменяет перезагрузку страницы при нажатии на кнопку

    if (!validate.isValid) {
      // console.log("Отправка идет");
      return;
    }

    try {
      const formData = new FormData(form);
      employerError.textContent = "Идет отправка, подождите.";

      const responce = await fetch(`${API_URL}${VACANCY_URL}`, {
        method: "POST",
        body: formData,
      });

      if (responce.ok) {
        employerError.textContent = "";

        window.location.href = "index.html";
      }
    } catch (error) {
      employerError.textContent = "Произошла ошибка";

      console.error(error);
    }
  });
};