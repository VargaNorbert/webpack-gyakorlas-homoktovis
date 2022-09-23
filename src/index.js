import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.remove();
        return false;
    };
};

let i = 1;
let i1 = 1;
let i2 = 1;
let i3 = 1;
let i4 = 1;

function szamol() {
    document.getElementById('bokorT').textContent = i++;
}

function szamol1(){
    document.getElementById('t1').textContent = i1++;
}
function szamol2(){
    document.getElementById('t2').textContent = i2++;
}
function szamol3(){
    document.getElementById('t3').textContent = i3++;
}
function szamol4(){
    document.getElementById('t4').textContent = i4++;
}

function colorPicker(e){
    let szin = e.currentTarget.value;
    document.getElementById('cim').style.backgroundColor = szin;
}



function init(){
    document.getElementById('bokorP').addEventListener('click',szamol);
    document.getElementById('p1').addEventListener('click',szamol1);
    document.getElementById('p2').addEventListener('click',szamol2);
    document.getElementById('p3').addEventListener('click',szamol3);
    document.getElementById('p4').addEventListener('click',szamol4);
    document.getElementById('hatter').addEventListener('input',colorPicker);
}

document.addEventListener('DOMContentLoaded',init);