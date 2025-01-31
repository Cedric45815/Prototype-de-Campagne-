const threshold = .2
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove('reveal')
      observer.unobserve(entry.target)
    }
  })
}

document.documentElement.classList.add('reveal-loaded')

window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(handleIntersect, options)
  const targets = document.querySelectorAll('.reveal')
  targets.forEach(function (target) {
    observer.observe(target)
  })
})

// ------------------------------------------------------------------------------------------

const Threshold = .1
const Options = {
root: null,
rootMargin: '0px',
Threshold
}


const HandleIntersect = function (entries, observer) {
entries.forEach(function (entry) {
  if (entry.intersectionRatio > Threshold) {
    entry.target.classList.remove('revealed')
    observer.unobserve(entry.target)
  }
})
}

document.documentElement.classList.add('reveal-loader')

window.addEventListener("DOMContentLoaded", function () {
const observer = new IntersectionObserver(HandleIntersect, Options)
const targets = document.querySelectorAll('.revealed')
targets.forEach(function (target) {
  observer.observe(target)
})
})


// Sélectionner tous les liens dans la navigation
const links = document.querySelectorAll("nav a");

// Ajouter un gestionnaire d'événements à chaque lien
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    // e.preventDefault(); // Empêcher le comportement par défaut

    // Retirer la classe "Active" de tous les liens
    links.forEach((l) => l.classList.remove("Active"));

    // Ajouter la classe "Active" au lien cliqué
    link.classList.add("Active");
  });
});


