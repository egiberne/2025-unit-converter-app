/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn= document.getElementById("convert-btn")

const measureElt = document.getElementById("measure-elt")

const lengthCvt = document.getElementById("length-cvt")

const volumeCvt = document.getElementById("volume-cvt")

const massCvt = document.getElementById("mass-cvt")



convertBtn.addEventListener("click", function(){
    
    
    console.log("clicked")
    
    console.log(`measure = ${measureElt.value}`)
    
    console.log(convertToFeet(measureElt.value))
    
    displayConvertion(measureElt.value,lengthCvt)
    
}

)

function convertToFeet(lengthMeter){//1 meter = 3.281 feet
    
    const lengthFeet = (Number(lengthMeter) / 3.281)
    
    console.log(`${lengthMeter} meter > ${lengthFeet} feet`)
    
    return roundedNumber(lengthFeet)
}


function convertToMeter(lengthFeet){//1 meter = 3.281 feet
    
    const lengthMeter = (Number(lengthFeet) * 3.281)
    
    console.log(`${lengthFeet} feet > ${lengthMeter} meters`)
    
    return roundedNumber(lengthMeter)
}


function displayConvertion(measure, element){
    
    
    element.innerHTML =`
    
    ${measure} meters = ${convertToFeet(measure)} feet
    |
    ${measure} feet = ${convertToMeter(measure)} meters
    
    `
    
}

function roundedNumber(num){// three decimal 
    
    return Number(num).toFixed(3)
}