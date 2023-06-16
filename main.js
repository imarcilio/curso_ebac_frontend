    const verifica = document.getElementById("btn-submit")
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const numero1 = parseFloat(document.getElementById("number1").value);
        const numero2 = parseFloat(document.getElementById("number2").value);

        verify(numero1,numero2);

            function verify(numero1, numero2){
                if (numero1 > numero2) {
                    document.getElementById("resultado").innerHTML = numero1 + " é maior que " + numero2;
                } 
                else if (numero2 > numero1) {
                    document.getElementById("resultado").innerHTML = numero2 + " é maior que " + numero1;
                } 
                else {
                    document.getElementById("resultado").innerHTML = "Os números são iguais.";
                }
            }
        }
    )












/* 

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, preencha ambos os campos com números válidos.");
    return;
}




*/

