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


let measure = {  
    //let length,
    //volume,
    //mass,
    //function convert(){}
}

convertBtn.addEventListener("click", function(){
    
    console.log("clicked")
    
    console.log(`measure = ${measureElt.value}`)
    
    console.log(convertToFeet(measureElt.value))
    
    displayConversion(measureElt.value,lengthCvt)
    
    displayConversion(measureElt.value,volumeCvt)
    
    displayConversion(measureElt.value,massCvt)
    
}

) 

// Meters to Feet
function convertToFeet(lengthMeter){//1 meter = 3.281 feet
    
    const lengthFeet = (Number(lengthMeter) / 3.281)
    
    console.log( `Meters to Feet : ${lengthMeter} meters = ${lengthFeet} feet`)
    
    return roundedNumber(lengthFeet)
}

// Feet to Meters
function convertToMeter(lengthFeet){//1 meter = 3.281 feet
    
    const lengthMeter = (Number(lengthFeet) * 3.281)
    
    console.log(`Feet to Meters :${lengthFeet} feet = ${lengthMeter} meters`)
    
    return roundedNumber(lengthMeter)
}


// Liters to Gallons
function convertToGallons(volumeLiter){//1 liter = 0.264 gallon
    
    const volumeGallon = (Number(volumeLiter) / 0.264)
    
    console.log(`Liters to Gallons : ${volumeLiter} liters = ${volumeGallon} gallons`)
    
    return roundedNumber(volumeLiter)
}

// Gallons to Liters
function convertToLiter(volumeGallon){//1 liter = 0.264 gallon
    
    const volumeLiter = (Number(volumeGallon) * 0.264)
    
    console.log(`Gallons to Liters : ${volumeGallon} gallons = ${volumeLiter} liters`)
    
    return roundedNumber(volumeGallon)
}

// Kilograms to Pounds
function convertToPound(massKilogram){//1 kilogram = 2.204 pound
    
    const massPound = (Number(massKilogram) /  2.204)
    
    console.log(`Kilograms to Pounds : ${massKilogram} kilograms  = ${massPound} pounds`)
    
    return roundedNumber(massPound)
}


// Pounds to Kilograms
function convertToKilogram(massPound){//1 kilogram = 2.204 pound
    
    const  massKilogram  = (Number(massPound) *  2.204)
    
    console.log(`Poundss to Kilograms : ${massPound} pounds = ${massKilogram} kilograms`)
    
    return roundedNumber(massKilogram)
}


function displayConversion(measure, element){
    
    
    element.innerHTML =`
    
    ${measure} meters = ${convertToFeet(measure)} feet
    |
    ${measure} feet = ${convertToMeter(measure)} meters
    
    `
    
}

function roundedNumber(num){// three decimal 
    
    return Number(num).toFixed(3)
}