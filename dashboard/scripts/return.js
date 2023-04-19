document.querySelector("html").classList.add("js");

const fileContainers = document.querySelectorAll(".input-file-container");

fileContainers.forEach((fileContainer) => {
  const fileInput = fileContainer.querySelector(".input-file");
  const button = fileContainer.querySelector(".input-file-trigger");
  const the_return = fileContainer.querySelector(".file-return");

  button.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
      fileContainer.focus();
    }
  });
  button.addEventListener("click", function () {
    fileContainer.focus();
    return false;
  });

  fileInput.addEventListener("change", function (e) {
    const nomeDoArquivo = this.files.item(0).name;
    the_return.textContent = nomeDoArquivo;
  });
});
