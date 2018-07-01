const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const loader = document.querySelector('#loader');

let params = (new URL(document.location)).searchParams;
let step = params.get("step");

console.log(step);

console.log(document.querySelector('#loader'));
loader.style.display = 'none';
section1.style.display = 'block';

if(step === 'step2'){
    section2.style.display = 'block';
    section1.style.display = 'none';
    
}