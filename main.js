const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function auto(){
    var counter = 1;
    setInterval(function(){
        document.getElementById('slidebtn'+ counter).checked = true;
        counter++;
        if(counter > 4){
            counter =1;
        }
    },1000);

}