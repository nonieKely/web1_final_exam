const close_button = document.getElementById('close-button');
const nos_plats_container = document.getElementById('nos-plats-container');
const nos_plats = document.getElementById('nos_plats');

close_button.addEventListener('click', function () {
    nos_plats_container.style.display = 'none';
});

nos_plats.addEventListener('click', function () {
    nos_plats_container.style.display = 'flex';
});


const activities_container = document.getElementById('activities-containe');
const close_button2 = document.getElementById('close_button2');
const nos_activities = document.getElementById('nos_activities');


close_button2.addEventListener('click',function(){
    activities_container.style.display='none';
});

nos_activities.addEventListener('click', function () {
    activities_container.style.display = 'flex';
});