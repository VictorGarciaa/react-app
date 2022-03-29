import home from './home.controller'
import sobremi from './sobremi.controller'
import notfound from './404.controller'
import contacto from './contacto.controller'
import portafolio from './portafolio.controller'
import paisaje from './paisaje.controller'
import comida from './comida.controller'
const pages = {
    home: home,
    sobremi:  sobremi, 
    contacto: contacto,
    notfound: notfound,
    portafolio: portafolio,
    paisaje: paisaje,
    comida: comida,
    
}

export {pages}