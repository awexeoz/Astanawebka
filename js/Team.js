const cards = document.querySelectorAll(".card__inner");

cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });
});
  
/*animation footer*/
VanillaTilt.init(document.querySelectorAll(".sci li a"), {
  max: 30,
  speed: 400,
  glare:true,
  "max-glare":1,
});

/*tooltip*/
tippy('.facebook',{
  content:"Facebook",
  placement:'bottom'
})

tippy('.twitter',{
  content:"Twitter",
  placement:'bottom'
})

tippy('.youtube',{
  content:"Youtube",
  placement:'bottom'
})

tippy('.instagram',{
  content:"Instagram",
  placement:'bottom'
})

/* keydown*/
document.addEventListener('keydown', (event) => {
  const key = event.key;

  switch (key) {
    case '1':
      // Переключиться на раздел Home
      window.location.href = 'index.html';
      break;
    case '2':
      // Переключиться на раздел Attractions
      window.location.href = 'Attractions.html';
      break;
    case '3':
      // Переключиться на раздел Food
      window.location.href = 'Food.html';
      break;
    case '4':
      // Переключиться на раздел Team
      window.location.href = 'Team.html';
      break;
    case '5':
      // Переключиться на раздел Contact
      window.location.href = 'Contact.html';
      break;
    case '6':
      // Переключиться на раздел Contact
      window.location.href = 'Game.html';
      break;
    default:
      break;
  }
});

//to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

  /*=============== SEARCH BAR JS ===============*/
  const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
      searchButton = document.getElementById(button)
  
    searchButton.addEventListener('click', () =>{
      // We add the show-search class, so that the search bar expands
      searchBar.classList.toggle('show-search')
    })
  }
  toggleSearch('search-bar', 'search-button')