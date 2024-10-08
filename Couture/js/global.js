/* ceci est un commentaire js */
// console.log('toto');

// string 

let myVar = "ma variable";
myVar = "variable changée";

const myVar2 = "ma variable 2";

// console.log(myVar);

// boolean
let isTrue = true;
let isFalse = false;

// console.log(isFalse);

// chiffres et opérateurs

let chiffre1 = 4;
let chiffre2 = 3;

// console.log(typeof chiffre1, typeof chiffre2);

// template string, littéraux de gabarits et concat

let test = 'test ' + myVar + 'value';
let test2 = `test ${myVar} dzqdqzd `;

// console.log(test2);
/*
if (chiffre1 <= 3) {
  console.log('condition est valide');
} else if (chiffre1 <= 4) {
  console.log('je passe la');
} else {
  console.log('condition pas valide')
}
*/

// tableaux 

let array = ['item 1', 'item 2', 'item 3', 'item 4'];
// console.log(array[3]);

// objets

let obj = {
  title: 'Mon titre',
  description: 'Ma description'
}

// console.log(obj.title, obj.description);

// les boucles, while, for, foreach
/*
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.forEach(item => {
  console.log(item);
})

*/

// fonctions 

/*function myFunction(item, item2) {
  console.log(item, item2);
}*/

const myFunction = (item, item2) => {
  // console.log(item, item2);
}

myFunction('toto', 5);
myFunction('tata', 6);

const calcul = (nb1, nb2) => {
  return nb1 + nb1;
}

let result = calcul(4, 5);
// console.log(result);

// interagir avec le dom // methode, propriete, evement

// selectors
// let header = document.querySelector('.header');
// console.log(header);

// let grids = document.querySelectorAll('.grid');
/*
grids.forEach(grid => {
  grid.classList.add('titi');
  console.log(grid)
});
*/
// evenements les plus courants
/*
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM entièrement chargé et analysé");
});

header.addEventListener('click', (e) => {
  console.log(e);
});

header.addEventListener('mouseenter', (e) => {
  console.log('souris entre');
});*/

// insertion dom et navigation dans le dom

let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone</span>`;
// console.log(header.nextElementSibling);

// fin de la théorie 

/* Menu mobile - burger */

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
      });

      
    links.forEach(link => {
        link.addEventListener('click', () => {
        header.classList.remove('show-nav');
        });
    });
}

menuMobile();

/* Porfolio */

/*document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.portfolio-filters a'); // Sélectionne les liens de filtre
    const projets = document.querySelectorAll('.grid_item .card'); // Sélectionne seulement les cartes

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // Retire la classe active de tous les filtres
            tabs.forEach(tab => tab.classList.remove('active'));
            // Ajoute la classe active au filtre sélectionné
            this.classList.add('active');

            // Récupère la valeur du filtre
            const filterValue = this.getAttribute('data-filter');

            // Affiche ou cache les éléments selon le filtre sélectionné
            projets.forEach(projet => {
                const gridItem = projet.closest('.grid_item'); // Récupère l'élément grid_item correspondant
                const category = projet.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    gridItem.style.display = 'block'; // Affiche l'élément
                } else {
                    gridItem.style.display = 'none'; // Cache l'élément
                }
            });
        });
    });
});

function showProjectDetails() {
    const links = document.querySelectorAll('.card_link'); // Sélecteur pour les liens de modal
    const modals = document.querySelectorAll('.modal'); // Sélecteur pour les modals
    const btns = document.querySelectorAll('.modal_close'); // Sélecteur pour les boutons de fermeture
  
    // Fonction pour cacher tous les modals
    const hideModals = () => {
      modals.forEach(modal => {
        modal.classList.remove('show'); // Retirer la classe 'show' de chaque modal
      });
    };
  
    // Événement pour chaque lien de projet
    links.forEach(elem => {
      elem.addEventListener('click', (event) => {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        const modalId = elem.getAttribute('data_id'); // Récupérer l'ID du modal via data_id
        const modal = document.getElementById(modalId); // Récupérer le modal par ID
  
        if (modal) { // Vérifier si le modal existe
          hideModals(); // Cacher les autres modals
          modal.classList.add('show'); // Afficher le modal sélectionné
        } else {
          console.error(`Modal avec ID ${modalId} non trouvé.`); // Message d'erreur si modal non trouvé
        }
      });
    });
  
    // Événement pour chaque bouton de fermeture
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        hideModals(); // Masquer tous les modals
      });
    });
  }
  
  // Appeler la fonction après le chargement du DOM
  document.addEventListener('DOMContentLoaded', showProjectDetails); */
  
/* Portfolio*/
  

  document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.grid_item .card');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            tabs.forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            projets.forEach(projet => {
                const gridItem = projet.closest('.grid_item');
                const category = projet.getAttribute('data-category');

                gridItem.style.display = (filterValue === 'all' || filterValue === category) ? 'block' : 'none';
            });
        });
    });

    showProjectDetails(); // Appel direct après le chargement
});

function showProjectDetails() {
    const links = document.querySelectorAll('.card_link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal_close');

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    };

    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = elem.getAttribute('data_id');
            const modal = document.getElementById(modalId);

            if (modal) {
                hideModals();
                modal.classList.add('show');
            } else {
                console.error(`Modal avec ID ${modalId} non trouvé.`);
            }
        });
    });

    btns.forEach(btn => {
        btn.addEventListener('click', hideModals);
    });
}


// effets

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}
  
observerIntersectionAnimation(); 

/*Fleche backToTop */

document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('backToTop');

  // Affiche ou cache le bouton en fonction du défilement
  window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backToTopButton.style.display = 'block'; // Affiche le bouton
      } else {
          backToTopButton.style.display = 'none'; // Cache le bouton
      }
  });

  // Défilement vers le haut au clic
  backToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement doux vers le haut
  });
});

//Carousel

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0; // Revenir au début
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Aller à la fin
    } else {
        currentSlide = index; // Mettre à jour l'index
    }

    const offset = -currentSlide * 100; // Calculer l'offset
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1); // Passer à la prochaine image
}

function prevSlide() {
    showSlide(currentSlide - 1); // Revenir à l'image précédente
}

// Afficher la première image au chargement
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
