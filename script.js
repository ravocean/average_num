let myArray = [2, 3.4, 'x', false, -1];


function average() {

    let numbersOnly = (val) => {
        if (typeof (val) === 'number') {
            return val;
        }
    }
    let newArray = myArray.filter(numbersOnly);

    let total = 0;
    for (let i = 0; i < newArray.length; i++) {
        total += newArray[i];
    }
    let avg = total / newArray.length;

    document.getElementById("original").innerHTML = "Original Array: " + myArray;
    document.getElementById("filtered").innerHTML = "Filtered Array: " + newArray;
    document.getElementById("average").innerHTML = "Average: " + avg;
}