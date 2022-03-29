import views from '../views/contacto.html'
export   default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML=views;
    return  divElement;

}