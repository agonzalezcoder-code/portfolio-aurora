document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio cargado correctamente");


    //==================================
    // ENLACES EXTERNOS
    //==================================

    const externalLinks = document.querySelectorAll(
        'a[target="_blank"]'
    );

    console.log("Enlaces encontrados:", externalLinks.length);

    externalLinks.forEach(link => {

        link.addEventListener("click", () => {

            console.log("Enlace externo seleccionado:", link.href);

        });

    });


    //==================================
    // DESCARGA DEL CV
    //==================================

    const resumeButton = document.querySelector(".resume-btn");

    resumeButton.addEventListener("click", function(event) {

        event.preventDefault();
    
        window.open("assets/CV/Aurora-Gonzalez-CV.pdf", "_blank");
    
    });

    /*==================================
    19. MODO OSCURO
    ==================================*/

    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");

    });

});