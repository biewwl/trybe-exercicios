document.getElementById('footer-container').style.backgroundColor = '#2F4F4F';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#EEA08D'
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#FBFF75'
document.getElementById('header-container').style.backgroundColor = '#3CB371'

let divUrgente = document.querySelectorAll(".emergency-tasks div");
let divNaoUrgente = document.querySelectorAll(".no-emergency-tasks div");

for (id in divUrgente) {
    document.querySelectorAll('.emergency-tasks h3')[id].style.backgroundColor = '#CB37F0';
    document.querySelectorAll('.no-emergency-tasks h3')[id].style.backgroundColor = 'black'
};

