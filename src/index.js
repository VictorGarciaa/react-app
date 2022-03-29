
import ReactDOM from 'react-dom'
import './styles/styles.css'
import './styles/home.css'
import {router} from './router/index.routes'
import App from './App'
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
router(window.location.hash)
window.addEventListener('hashchange', () =>{
router(window.location.hash)
})

