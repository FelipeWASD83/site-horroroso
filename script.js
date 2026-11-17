// Visit counter: counts only this browser's visits, stored in localStorage.
(function () {
  "use strict";

  var STORAGE_KEY = "site-horroroso.visitas";
  var DIGITS = 6;

  function countVisit() {
    try {
      var previous = parseInt(window.localStorage.getItem(STORAGE_KEY) || "0", 10);
      var next = (Number.isFinite(previous) && previous >= 0 ? previous : 0) + 1;
      window.localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    } catch (error) {
      return null;
    }
  }

  function renderDigits(target, text) {
    target.textContent = "";
    for (var i = 0; i < text.length; i++) {
      var digit = document.createElement("span");
      digit.className = "contador__digito";
      digit.textContent = text[i];
      target.appendChild(digit);
    }
    target.setAttribute("aria-label", text.replace(/^0+(?=\d)/, ""));
  }

  var counter = document.getElementById("contador");
  var note = document.getElementById("contador-nota");
  if (!counter) return;

  var visits = countVisit();
  if (visits === null) {
    renderDigits(counter, "??????");
    counter.setAttribute("aria-label", "desconhecido");
    if (note) note.textContent = "(o contador quebrou: este navegador não deixa guardar nada. Combina com o resto do site.)";
    return;
  }

  renderDigits(counter, String(visits).padStart(DIGITS, "0"));
})();
