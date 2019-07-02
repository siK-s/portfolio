// Pour l'animation de l'icone du menu burger
let isClicked = false;
let links = document.getElementsByClassName('nav_link');
var hamburger = (function(w, t) {
    window.addEventListener('load', function n(event) {
        window.removeEventListener('load', n, false);
        t.addEventListener('click', function(event) {
            t.classList.toggle('clicked');
            // Pour l'animation / ouverture du menu
            isClicked =!isClicked;
            if (isClicked) {
                console.log(isClicked);
                for (let index = 0; index < links.length; index++) {
                    links[index].classList.add("animLinkOnMobile");
                }
            } else {
                console.log(isClicked);
                for (let index = 0; index < links.length; index++) {
                    links[index].classList.remove("animLinkOnMobile");
                }
            }
        }, false);
    });
})(window, document.getElementsByClassName('hamburger')[0]);

// Pour voir plus de travaux
let more = document.getElementById('more');
let plusDeTravaux = document.getElementsByClassName('hidden');
let onMore = false;
more.addEventListener('click', event => {
    onMore = !onMore;
    if (onMore) {
        for (let index = 0; index < plusDeTravaux.length; index++) {
            plusDeTravaux[index].style.display = 'inline-block';
            more.innerHTML = "Voir moins de travaux";
        }
    } else {
        for (let index = 0; index < plusDeTravaux.length; index++) {
            plusDeTravaux[index].style.display = 'none';
            more.innerHTML = "Voir plus de travaux";
        }
    }
});
// Pour accéder à une section de la home page
jQuery().ready(function() {
    //animation des ancres
    $('a').click(function(){
        cible = $(this).attr('href');
        //on va supprimer le #
        cible = cible.substr(1 , (cible.length-1) );
        //hauteur où se trouve l'élément
        hauteur = $("section[name="+cible+"]").offset().top;
        //animation
        $('html,body').animate({scrollTop:hauteur} , 1000);
        return false;
    });
});
// fonction pour accéder à une page
function url(html) { window.location.assign(html); }