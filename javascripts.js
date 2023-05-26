function openSlider() {
    var slider = document.getElementById("slider");
    slider.classList.remove("hidden");
    
  }
  
  function closeSlider() {
    var slider = document.getElementById("slider");
    slider.classList.add("hidden");
  }

function actionToggle(){
  var action = document.querySelector('.action')
  action.classList.toggle('active')
}  

// --------------------------------------------------

// toggle class active
const navbarNav = document.querySelector('.navbar');

// ketika hamburger menu diklik
document.querySelector('#add-nav').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar side bar maka akan hilang nav
const hamburger = document.querySelector('#add-nav');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
  