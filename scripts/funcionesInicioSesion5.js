function verificarCaptcha5 (respuesta) {
    if (respuesta==0) {
        return true;
    }else {
        return false;
    }
}

function verificarInicionSesion5 (correo, arreglo) {
    const usuario = arreglo.find(usuario => usuario.email==correo);
    if (usuario!=undefined){
        // Prompt Captcha
        //let respuesta = window.prompt("¿Cuanto es la derivada de 5?");
        verificarCaptcha5(respuesta);
    } else {
        return false;
    }
}

export function guardarRegistro(usuarios, user){
    usuarios.push(user);
    return usuarios;
}
module.exports.verificarInicionSesion5 = verificarInicionSesion5;
module.exports.verificarCaptcha5 = verificarCaptcha5;
module.exports.guardarRegistro = guardarRegistro;

