
// Ce fichier javascript est lié à toute les pages html

// pour rendre le barre de navigation fixe au top de la page lors du scroll : 
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 330) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});

//---------------------------------------------------------------

// Fonction pour afficher ou masquer l'input (matricule et année) en fonction de la sélection (Etudiant , Professeur , employé)
function afficherInput() {

    var selectValue = document.getElementById("personne").value;
    var inputElement = document.getElementById("pour-etudiant");

    if (selectValue == "etudiant") {
        inputElement.style.display = "block"; //afficher l'input si c'était un étudiant
    } else {
        inputElement.style.display = "none"; //masquer l'input sinon
    }
}

// Ajouter un écouteur d'événement sur le changement de valeur du select
document.getElementById("personne").addEventListener("change", afficherInput);

//---------------------------------------------------------------

