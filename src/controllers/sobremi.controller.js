import views from '../views/sobremi.html'
export   default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML=views;
    return  divElement;

}