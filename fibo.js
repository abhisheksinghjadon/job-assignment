document.getElementById("mybutton").onclick = function () {

    var firstValue = document.getElementById("in1").value;
    var secondValue = document.getElementById("in2").value;
    console.log(firstValue, secondValue);
}
const fib = (10) => {

    const fibarray = [firstValue, secondValue];
    for (var i = 2; i < 10; i++) {
        fibarray.push(fibarray[i - 2] + fibarray[i - 1]);
    }
    return fibarray;
}
console.log(fib(10));