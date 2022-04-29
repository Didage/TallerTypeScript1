import { series } from "./data.js";
import { Serie } from "./serie.js";

let info = series;

let serieTable = document.getElementById("series")!;
let averageParagraph =document.getElementById("average")!;

function mostrarSeries(): void {
    let tbodySeries: HTMLElement = document.createElement("tbody");
    for (let serie of info) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${serie.id}</th>
        <td><a href="${serie.url}">${serie.nombre}</a></td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        trElement.className = "table-light";
        tbodySeries.appendChild(trElement);
    }
   
    serieTable.appendChild(tbodySeries);
}

function calcularPromedioDeTemporadas(): void {
    let pSeries: HTMLElement = document.createElement("p");
    let count = 0;
    for (let serie of info) {
        count += serie.temporadas;
    }
    count/=info.length;
    pSeries.innerHTML = `Seasons average: ${count}`;
    averageParagraph.appendChild(pSeries);
}

mostrarSeries();
calcularPromedioDeTemporadas();