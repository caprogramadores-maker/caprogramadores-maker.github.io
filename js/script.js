// Fontanero Barcelona — interacciones básicas, sin cookies ni almacenamiento local.
(function () {
  "use strict";

  // Menú móvil
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav-principal");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var abierto = nav.classList.toggle("abierto");
      toggle.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (enlace) {
      enlace.addEventListener("click", function () {
        nav.classList.remove("abierto");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Cierra un FAQ abierto cuando se abre otro (accesible, sin dependencias)
  var faqs = document.querySelectorAll(".faq-item");
  faqs.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqs.forEach(function (otro) {
          if (otro !== item) otro.open = false;
        });
      }
    });
  });

  // Año automático en el footer
  var anioEl = document.querySelector("#anio-actual");
  if (anioEl) anioEl.textContent = new Date().getFullYear();
})();
