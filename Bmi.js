let tinggi = document.getElementById('tinggi');
let bb = document.getElementById('beratBadan');
let hitung = document.getElementById('hitung');
let hasil = document.getElementById('status')


hitung.addEventListener('click', (el) => {
    el.preventDefault()
    const BMI = bb.value/(tinggi.value/100)**2;
  

    if(BMI < 18.5){
        hasil.innerHTML = `Your BMI is ${Math.round(BMI)} which means you are Underweight`;    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        hasil.innerText = `Your BMI is ${Math.round(BMI)} which means you are Normal`;
    }else if((BMI > 25) && (BMI < 29.9 )){
        hasil.innerText = `Your BMI is ${Math.round(BMI)} which means you are Overweight`;
    }else{
        hasil.innerText = `Your BMI is ${Math.round(BMI)} which means you are Obesity`;
    }
});

