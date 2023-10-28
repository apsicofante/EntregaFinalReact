import './InfoAside.css'
import { Link } from "react-router-dom"
import taza from "../../assets/img/coffe_PNG.png"

const InfoAside = () => {
    return (
        <div class="atencion">
              <Link to ="./coffeInfo" target="_blank"><img src={taza} width="150" alt="enlace info cafe"/></Link>
              <Link to ="./coffeInfo" target="_blank">¡HAZ CLICK AQUI PARA CONOCER MAS SOBRE EL CAFE!</Link>
        </div>
    )
}

export default InfoAside