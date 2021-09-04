
//Middleware para loggeo de requests
function myLogger(req, res, next){
    //imprimir log
    console.log(`Request ${req.method} ${req.path}`)
    next()
}

//exportar modulo contenedor de funciones
module.exports = myLogger