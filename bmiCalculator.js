function cmToMeter(cm) {
    return cm / 100;
}

function calculate() {
    let heightInput = Number(document.getElementById("heightInput").value);
    let weightInput = Number(document.getElementById("weightInput").value);

    let bmiIndex = bmiMetricCalculation(heightInput, weightInput);
    document.getElementById("result").innerHTML = `Your BMI is ${bmiIndex} ${bmiMessage(bmiIndex)}`;
}


function bmiMetricCalculation(heightInCm, weightInKg) {
    let heightMeters = cmToMeter(heightInCm);
    let bmiMetric = weightInKg / (heightMeters * heightMeters);
    return bmiMetric.toFixed(1);
}


// function bmiUsCalculation(heightInInches, weightInPounds) {
//     let bmiUs = (weightInPounds * 703) / (heightInInches * heightInInches);
//     console.log(bmiUs);
// }

// bmiUsCalculation()

function bmiMessage(bmiIndex) {
    if (bmiIndex >= 0 && bmiIndex <= 18.5) {
        return "You're underweight! You should eat more.";
    } else if (bmiIndex > 18.5 && bmiIndex <= 25) {
        return "You're normal!";
    } else if (bmiIndex > 25 && bmiIndex <= 30) {
        return "You're overweight!";
    } else if (bmiIndex > 30 && bmiIndex <= 35) {
        return "You're slightly obese!";
    } else if (bmiIndex > 35 && bmiIndex <= 40) {
        return "You're obese!";
    } else if (bmiIndex > 40) {
        return "You're highly obese! Please visit a doctor.";
    } else {
        return "Invalid input data.";
    }
}