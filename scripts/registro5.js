export function guardarRegistro(usuarios, user){
    usuarios.push(user);
    return usuarios;
}

export function filtrarPaises(usuarios){
    const usuarios_filtrado = usuarios.filter(usuario => usuario.pais === "Colombia")
    return usuarios_filtrado;
} 

export function ordenarCiudades(usuarios){
    //Ordenar ciudades de la A-Z
    usuarios_a_ordenar = [...usuarios]

    usuarios_a_ordenar.sort(function (a, b) {
        if (a.ciudad > b.ciudad) {
          return 1;
        }
        if (a.ciudad < b.ciudad) {
          return -1;
        }
        // a must be equal to b
        return 0;
    });
    return usuarios_a_ordenar;
}

module.exports.guardarRegistro = guardarRegistro;
module.exports.filtrarPaises = filtrarPaises;
module.exports.ordenarCiudades = ordenarCiudades;
