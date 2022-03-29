import views from '../views/comida.html'
export   default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML=views;
    return  divElement;

}