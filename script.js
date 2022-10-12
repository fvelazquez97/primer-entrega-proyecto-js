console.log("BIENVENIDO A LA CALCULADORA DE GASTOS POR PERSONA")
alert ("BIENVENIDO A LA CALCULADORA DE GASTOS POR PERSONA")

function division() {
    let salir
    do {
        let gastos = parseFloat(prompt("¿Cuánto gastaron? ($):"))
        let personas = Number(prompt("¿Cuántas personas son?"))
        let cadaUno = parseFloat(gastos / personas).toFixed(2)
        alert("Cada uno tiene que poner " + "$" + cadaUno)

        salir = (prompt("Escriba SI para realizar otra division de gastos o NO para salir")).toLowerCase()
      if (salir == "si") {
        alert ("Okey ¡hagamos otra division de gastos!")
      }
      else {
        alert ("¡Gracias por utilizar la calculadora de division de gastos! hasta luego")
      }

    } while (salir != "no")

}
division()