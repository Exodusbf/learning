function getValue(x, n) {
    return x ** n;
}

const x = +prompt("Enter x", "");
const n = +prompt("Enter n", "");
if (x <= 0 || n <= 0) {
    alert(" Ошибка! ");
} else if (getValue(x, n) === Infinity) {
    alert("Результат не вмещается на ваш экран....");
    confirm("Хотите купить монитор побольше?");
} else {
    alert(getValue(x, n));
}