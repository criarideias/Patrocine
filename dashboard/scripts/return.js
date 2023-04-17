document.querySelector("html").classList.add("js");

const fileInputs = document.querySelectorAll(".input-file");

fileInputs.forEach((fileInput) => {
  const button = fileInput.querySelector(".input-file.trigger");
  const the_return = fileInput.querySelector(".file-return");

  button.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
      fileInput.focus();
    }
  });
  button.addEventListener("click", function () {
    fileInput.focus();
    return false;
  });

  fileInput.addEventListener("change", function () {
    the_return.innerHTML = this.value;
  });
});
