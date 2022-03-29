import views from '../views/portafolio.html'
export   default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML=views;
    return  divElement;

}