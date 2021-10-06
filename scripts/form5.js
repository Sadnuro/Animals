function validar_confirmar_correo (original, toConfirm) {
    // Validate format | regex
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(original) 
    &&  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(toConfirm) ) {
        // Verify mails
        if(original === toConfirm){
            return true;
        }
    }
    return false;
}

function validar_pais (pais) {
    // Check string
    if (/^[A-Z]+[a-z ]+$/.test(pais)){
        return true;
    }
    return false;
}

module.exports.validar_confirmar_correo = validar_confirmar_correo;
module.exports.validar_pais = validar_pais;
