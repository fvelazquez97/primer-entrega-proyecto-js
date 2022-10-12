console.log("BIENVENIDO A LA CALCULADORA DE GASTOS POR PERSONA")

function division() {
    let salir
    do {
        let gastos = parseFloat(prompt("¿Cuánto gastaron? ($):"))
        let personas = Number(prompt("¿Cuántas personas son?"))
        let cadaUno = parseFloat(gastos / personas).toFixed(2)
        alert("Cada uno tiene que poner " + "$" + cadaUno)

        salir = (prompt("Escriba SI para realizar otra division de gastos o NO para salir")).toLowerCase()


    } while (salir != "no")

}
division()