import { datediff } from "./dateManipulate";

const filmeSlider = document.querySelector("#formFilme");

filmeSlider.addEventListener("submit", async (e) => {
  e.preventDefault();
  e.stopPropagation();

  const { currentTarget } = e;

  const id = new Date().getTime();
  currentTarget.action = `../api/POST/addFilme.php?id=${id}`;

  // Salva a sala selecionada
  const salaSelect = currentTarget.querySelector("#sala");
  const sala = salaSelect.options[salaSelect.selectedIndex].value;

  // Salva a data de início e termino
  const [dataDeInicio, dataDeTermino] = [
    currentTarget.querySelector("#dataDeInicio").value,
    currentTarget.querySelector("#dataDeTermino").value,
  ];

  // Armazena todas as opções selecionadas
  const inputDatas = document.querySelectorAll(".input-data");
  const horarios = [];

  inputDatas.forEach((div) => {
    const input = div.querySelector("input");

    if (!input.checked) return;

    const horario = div
      .querySelector("label")
      .textContent.replace("\n", "")
      .trim();
    horarios.push(horario);
  });

  const inicioDate = new Date(dataDeInicio);

  // Calcula a quantidade de dias que o filme será exibido
  const quantidadeDeDias = datediff(
    new Date(dataDeInicio),
    new Date(dataDeTermino)
  );

  const diasHorarios = [];

  for (let i = 0; i <= quantidadeDeDias; i++) {
    const dia = new Date();
    dia.setDate(inicioDate.getDate() + i);
    const horariosDoDia = horarios.map((horario) => {
      const timestamps = horario.split(":");
      const diaHora = dia;
      diaHora.setHours(parseInt(timestamps[0]), timestamps[1], 0);

      return diaHora.toJSON().slice(0, 19).replace("T", " ");
    });
    diasHorarios.push(horariosDoDia);
  }

  console.log(diasHorarios);

  const body = {
    horarios: diasHorarios,
  };

  await fetch(`../api/POST/addHorarios.php?sala=${sala}&id=${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    method: "POST",
  });
  
  currentTarget.submit();
});
