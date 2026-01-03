// Password Generator
function genPass(){
  let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
  let pass="";
  for(let i=0;i<12;i++) pass+=chars[Math.floor(Math.random()*chars.length)];
  document.getElementById("password").value = pass;
}

// QR Generator
function genQR(){
  let text = document.getElementById("qrText").value;
  document.getElementById("qrImg").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);
}

// Text Counter
function countText(){
  let text = document.getElementById("text").value;
  document.getElementById("count").innerText = text.length + " حروف";
}

// Color Generator
function genColor(){
  let col = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("color").value = col;
  document.body.style.background = col;
}

// BMI Calculator
function calcBMI(){
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let result = document.getElementById("bmi");

  if(!weight || !height){
    result.innerText = "من فضلك أدخل الوزن والطول";
    return;
  }

  if(height <= 0 || weight <= 0){
    result.innerText = "القيم يجب أن تكون أكبر من صفر";
    return;
  }

  let bmi = weight / (height * height);
  result.innerText = "BMI = " + bmi.toFixed(2);
}
