function calculateSum(a, b) {
    return a + b;
}

const btn = document.getElementById('calculateButton');
btn.addEventListener('click', function() {
    try {       
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Invalid input: Please enter valid numbers.');
        }
        const result = calculateSum(num1, num2);
        document.getElementById('result').textContent = 'Sum: ' + result;
    } catch (error) {
        document.getElementById('result').textContent = 'Error: ' + error.message;
    }
});
