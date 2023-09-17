export const fileController = () => {
  const file = document.querySelector(".file");
  const preview = file.querySelector(".file__preview");
  const input = file.querySelector(".file__input");
  // console.log('input: ', input);

  input.addEventListener("change", (event) => {
    // console.log(event.target.files);
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      // console.log("src: ", src);
      file.classList.add("file_active");
      preview.src = src;
      preview.style.display = "block";
    } else {
      file.classList.remove("file_active");
      preview.src = "";
      preview.style.display = "none";
    }
  });
};