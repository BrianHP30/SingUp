import '../Styles/Header.css'
import Logo from '../assets/Img/pelicula.png'

function Header() {
    return ( 
        <div className='conteiner'>
            <div className='logo'>
                <div className='division'>
                    <img src={Logo} alt="" />
                    <p>CINEX</p>
                </div>
            </div>
            <div className='titulo'>
                <div className='accion'>
                    <p>COMPRA DE BOLETOS</p>
                </div>
            </div>
        </div>
     );
}

export default Header;