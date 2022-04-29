import { series } from "./data.js";
var info = series;
var serieTable = document.getElementById("series");
var averageParagraph = document.getElementById("average");
function mostrarSeries() {
    var tbodySeries = document.createElement("tbody");
    for (var _i = 0, info_1 = info; _i < info_1.length; _i++) {
        var serie = info_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(serie.id, "</th>\n        <td><a href=\"").concat(serie.url, "\">").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        trElement.className = "table-light";
        tbodySeries.appendChild(trElement);
    }
    serieTable.appendChild(tbodySeries);
}
function calcularPromedioDeTemporadas() {
    var pSeries = document.createElement("p");
    var count = 0;
    for (var _i = 0, info_2 = info; _i < info_2.length; _i++) {
        var serie = info_2[_i];
        count += serie.temporadas;
    }
    count /= info.length;
    pSeries.innerHTML = "Seasons average: ".concat(count);
    averageParagraph.appendChild(pSeries);
}
mostrarSeries();
calcularPromedioDeTemporadas();
