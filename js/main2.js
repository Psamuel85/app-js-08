document.getElementById('Form_pesoIdeal').addEventListener('submit', function (event) {
    event.preventDefault();

    const sexo = (document.getElementById('sexo1').value);
    const edad = parseFloat(document.getElementById('edad1').value);
    const peso = parseInt(document.getElementById('peso1').value);
    const altura = parseInt(document.getElementById('altura1').value);
    const imc = peso / ((altura / 100)* 2);
    let ideal, perder;


    if (sexo == "Masculino") {
        ideal = altura - 100 - ((altura - 150) / 4)
        perder = peso - ideal

        if (imc <= 18.5) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}(cm)<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu indice de masa corporal es: bajo peso <br>Debes perder peso: ${perder} </strong></div>`
        } else if (imc >= 18 && imc <= 24) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-success' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}(cm)<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu indice de masa corporal es: <span class="badge text-bg-primary">Normal</span> :${imc}<br>Debes perder peso: ${perder} </strong></div>`
        } else if (imc >= 25 && imc <= 30) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}(cm)<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu indice de masa corporal es sobre peso<br>Debes perder peso: ${perder}  </strong></div>`
        } else if (imc >= 30 && imc <= 34) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}(cm)<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu indice de masa corporal es Obesidad I<br>Debes perder peso: ${perder} </strong></div>`
        } else if (imc >= 35 && imc <= 39) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}(cm)<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu indice de masa corporal es Obesidad II<br>Debes perder peso: ${perder} </strong></div>`
        } else if (imc >= 40 && imc <= 49) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}(cm)<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu indice de masa corporal es Obesidad III<br>Debes perder peso: ${perder} </strong></div>`
        } else if (imc >= 50) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}(cm)<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu indice de masa corporal es Obesidad IV<br>Debes perder peso: ${perder} </strong></div>`
        } else {
            alert("Error")
        }

    } else if (sexo == "Femenino") {
        ideal = altura - 100 - ((altura - 150) / 4)
        perder = peso - ideal

        if (imc <= 18.5) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu imc es:${imc}<br>Debes perder peso: ${perder} </strong></div>`
        } else if (imc >= 18 && imc <= 24) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-success' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu imc es:${imc}<br>Debes perder peso: ${perder} </strong></div>`
        } else if (imc >= 25 && imc <= 30) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu imc es:${imc}<br>Debes perder peso: ${perder} </strong></div>`
        } else if (imc >= 30 && imc <= 34) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu imc es:${imc}<br>Debes perder peso: ${perder} </strong></div>`
        } else if (imc >= 35 && imc <= 39) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}<br>Tu peso actual es: ${peso}(kg)<br><span class="badge text-bg-success">Tu peso ideal es:</span> ${ideal}<br>Tu imc es:${imc}<br>Debes perder peso: ${perder} </strong></div>`
        } else if (imc >= 40 && imc <= 49) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu imc es:${imc}<br><span class="badge text-bg-warning">Debes perder peso:</span> ${perder} </strong></div>`
        } else if (imc >= 50) {
            document.getElementById("resultado70").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tienes ${edad} <br>Tu sexo es: ${sexo} <br>Tu estatura es de: ${altura}<br>Tu peso actual es: ${peso}(kg)<br>Tu peso ideal es: ${ideal}<br>Tu imc es:${imc}<br>Debes perder peso: ${perder} </strong></div>`
        } else {
            alert("Error")
        }

    }

}

)