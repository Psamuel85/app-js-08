function zapateria() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = parseInt(document.getElementById('precio').value);

    let pago;

    if (cantidad < 10) {
        pago = precio * cantidad;
        document.getElementById("pago").innerHTML = `<div class='alert alert-success' role='alert'>La cantidad a pagar por su compra es de = $${pago}</div>`;
    } else if (cantidad >= 10 && cantidad < 20) {
        let descuento = 0.10;
        pago = cantidad * precio * (1 - descuento);
        document.getElementById("pago").innerHTML = `<div class='alert alert-success' role='alert'>La cantidad a pagar por su compra es de = $${pago}</div>`;
    } else if (cantidad >= 20 && cantidad < 30) {
        let descuento = 0.20;
        pago = cantidad * precio * (1 - descuento);
        document.getElementById("pago").innerHTML = `<div class='alert alert-success' role='alert'>La cantidad a pagar por su compra es de = $${pago}</div>`;
    } else if (cantidad >= 30) {
        let descuento = 0.40;
        pago = cantidad * precio * (1 - descuento);
        document.getElementById("pago").innerHTML = `<div class='alert alert-success' role='alert'>La cantidad a pagar por su compra es de = $${pago}</div>`;
    } else {
        document.getElementById("pago").innerHTML = `<div class='alert alert-danger' role='alert'>Error en su compra, verifique nuevamente!</div>`;
    }
}

function edades() {
    const edad = parseInt(document.getElementById('edad').value);

    if (edad <= 12) {
        document.getElementById("resultado1").innerHTML = `<div class='alert alert-success' role='alert'>Eres niño <img src="img/ninos.png" alt=""></div>`;
    } else if (edad > 12 && edad <= 40) {
        document.getElementById("resultado1").innerHTML = `<div class='alert alert-success' role='alert'>Eres un joven  <img src="img/mujer.png" alt=""></div>`;
    }
    else if (edad > 40 && edad <= 60) {
        document.getElementById("resultado1").innerHTML = `<div class='alert alert-success' role='alert'>Eres un adulto <img src="img/protector.png" alt=""></div>`;
    }
    else if (edad > 60) {
        document.getElementById("resultado1").innerHTML = `<div class='alert alert-success' role='alert'>Eres un adulto mayor <img src="img/viejo.png" alt=""></div>`;
    } else {
        document.getElementById("resultado1").innerHTML = `<div class='alert alert-danger' role='alert'>Error, verifique nuevamente!</div>`;
    }
}
function imc() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    let indice = (peso / (altura * altura))

    if (indice <= 18.5) {
        document.getElementById("resultado2").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Tu masa de indice corporal es: bajo peso  </strong><img src="img/1.png" alt=""></div>`
    } else if (indice >= 18 && indice <= 24) {
        document.getElementById("resultado2").innerHTML = `<div class='alert alert-success' role='alert'><strong>Tu masa de indice corporal es: Normal </strong><img src="img/2.png" alt=""></div>`
    } else if (indice >= 25 && indice <= 30) {
        document.getElementById("resultado2").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Tu masa de indice corporal es: Sobre peso </strong><img src="img/3.png" alt=""></div>`
    } else if (indice >= 30 && indice <= 34) {
        document.getElementById("resultado2").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tu masa de indice corporal es: Obesidad I </strong><img src="img/4.png" alt=""></div>`
    } else if (indice >= 35 && indice <= 39) {
        document.getElementById("resultado2").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tu masa de indice corporal es: Obesidad II </strong><img src="img/5.png" alt=""></div>`
    } else if (indice >= 40 && indice <= 49) {
        document.getElementById("resultado2").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tu masa de indice corporal es: Obesidad III </strong><img src="img/6.png" alt=""></div>`
    } else if (indice >= 50) {
        document.getElementById("resultado2").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Tu masa de indice corporal es: Obesidad VI </strong><img src="img/7.png" alt=""></div>`
    } else {
        document.getElementById("resultado2").innerHTML = `<div class='alert alert-danger' role='alert'>Error, verifique nuevamente!</div>`;
    }

}
function presionarterial() {
    presion = parseFloat(document.getElementById("presion").value);

    if (presion <= 90) {
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-info' role='alert'><strong>Su presion arterial esta: Baja  </strong><img src="img/triste.png" alt=""></div>`
    } else if (presion <= 120) {
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-success' role='alert'><strong>Su presion arterial esta: Normal  </strong><img src="img/satisfecho.png" alt=""></div>`
    } else if (presion >= 120 && presion <= 139) {
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-warning' role='alert'><strong>Su presion arterial esta: Prehispertension  </strong><img src="img/emojis-sin-rostro.png" alt=""></div>`
    } else if (presion >= 140 && presion <= 159) {
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Su presion arterial esta: hispertension:Fase 1   </strong><img src="img/choque.png" alt=""></div>`
    } else if (presion >= 160) {
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Su presion arterial esta: hispertension:Fase 2   </strong><img src="img/mareado.png" alt=""></div>`
    } else {
        document.getElementById("resultado3").innerHTML = `<div class='alert alert-danger' role='alert'>Error, verifique nuevamente!</div>`;
    }
}
