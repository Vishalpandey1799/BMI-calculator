const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

const calculateButton = document.querySelector(".confirmBtn");

const result = document.querySelector(".result");
const container = document.querySelector(".container");
calculateButton.addEventListener("click" , (e) =>{
   e.preventDefault();
   let heightval = parseFloat(height.value);
   let weightval = parseFloat(weight.value);
    if(heightval!="" && weightval!="" && weightval>0 && heightval>0){
      
        const formula = weightval/((heightval/100)**2);
        container.style.height = "450px";
        result.style.display = 
        'flex';
        result.textContent = `Your BMI score is = ${formula.toFixed(2)}`;
    }else{
        result.textContent = "Please Input Your Height And Weight";
        container.style.height = "450px";
        result.style.display = 
        'flex';
    }
});
 