
import { pages } from '../controllers/index'

let content = document.getElementById('root');


const router = (route) => {
    content.innerHTML = '';
    switch (route) {
        case '#/': {
            return content.appendChild(pages.home());
        }
        case '#/sobremi':
            return content.appendChild(pages.sobremi())
        case '#/contacto':
            return content.appendChild(pages.contacto())
        case '#/portafolio':
            return content.appendChild(pages.portafolio())
        case '#/paisaje':
            return content.appendChild(pages.paisaje())
            case '#/comida':
            return content.appendChild(pages.comida())
        default:
            return content.appendChild(pages.notfound())
    }

};

export { router };