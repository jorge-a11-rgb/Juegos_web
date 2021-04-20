// objeto.metodo(json)

$("#formulario1").validate({
    rules: {
        "txtNombre": {
            required: true,
            text: true

        },
        "txtApellido": {
            required: true,
            text: true

        },
        "txtEmail": {
            required: true,
            email: true
        },
        "txtTelefono": {
            required: true,
            max: 999999999
        },
        "txtRepetirTelefono": {
            required: true,
            equalTo: '#id_txtTelefono'
        }
    }, // --> Fin de reglas
    messages: {
        "txtEmail": {
            required: 'Ingrese email!!!',
            email: 'No cumple formato'
        },
        "txtTelefono": {
            required: 'Ingrese Telefono!!!',
            min: 0
        },
        "txtRepetirTelefono": {
            required: 'Repita su telefono!!',
            equalTo: ' deben ser iguales!!!!'
        },
        "txtNombre": {
            required: 'Ingrese sus nombres!!!',

        },
        "txtApellido": {
            required: 'Ingrese sus apelllidos!!!',
            

        },
        "txtFechaNacimiento": {
            required: 'Debe ingresar fecha de nacimiento!!!',
            date: 'La fecha maxima permitida es 31-12-2010'
        }
    } //-->Fin de mensajes

});
