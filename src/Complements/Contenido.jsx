import Card from "./Card";
import DatosCine from "./DatosCine";
import '../Styles/Contenido.css'

function Contenido() {

    const Personales=[
        {
            "Titulo": "Nombre:",
            "Placeholder": "Ingrese su Nombre",
            "type": "text"
        },
        {
            "Titulo": "Correo:",
            "Placeholder": "Ingrese su Correo",
            "type": "text"
        },
        {
            "Titulo": "Telefono:",
            "Placeholder": "Ingrese su Numero",
            "type": "number"
        },
        {
            "Titulo": "Telefono de respaldo:",
            "Placeholder": "Ingrese su Numero",
            "type": "number"
        }
    ]

    return (
        <div className='datos'>
            <div className='partes'>
                {Personales.map((item)=>{
                    return(<Card titulo={item.Titulo} placeholder={item.Placeholder} type={item.type}/>)
                })}
            </div>
            <DatosCine></DatosCine>
            <input type="button" value="SUBMIT" className="boton"/>
        </div>);
}

export default Contenido;