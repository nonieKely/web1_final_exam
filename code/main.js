const close_button = document.getElementById('close-button');
const close_button2 = document.getElementById('close-button2');

const menu_container = document.getElementById('menu-container');
const nos_plats = document.getElementById('nos-plats');
const activites_container = document.getElementById('activités-container');
const activites =document.getElementById('activités');

close_button.addEventListener('click', function() { 
    menu_container.style.display = 'none';
});

nos_plats.addEventListener('click',function(){
    menu_container.style.display = 'flex';
});


close_button2.addEventListener('click',function(){
    activites_container.style.display = 'none';
});

activites.addEventListener('click',function(){
    activites_container.style.display = 'flex';
});