document.addEventListener("DOMContentLoaded", function() {
        const deskripsiButton = document.getElementById("deskripsi");
        const informasiButton = document.getElementById("Informasi");
        const deskripsiBuku = document.getElementById("deskripsiBuku");
        const informasiBuku = document.getElementById("InformasiBuku");

        deskripsiButton.addEventListener("click", function() {
            deskripsiButton.classList.add("underline", "underline-offset-8");
            informasiButton.classList.remove("underline", "underline-offset-8");
            deskripsiBuku.style.display = "block";
            informasiBuku.style.display = "none";
        });

        informasiButton.addEventListener("click", function() {
            informasiButton.classList.add("underline", "underline-offset-8");
            deskripsiButton.classList.remove("underline", "underline-offset-8");
            informasiBuku.style.display = "block";
            deskripsiBuku.style.display = "none";
        });
    });