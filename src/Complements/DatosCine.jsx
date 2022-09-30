import '../Styles/Datos.css'

function DatosCine() {

    const Datos ={
            "Name":"Sala:",
            "opc1": "Premium",
            "opc2": "Sencilla",   
        } 

    return ( 
        <div className='partes1'>
            <p className='titleP'>{Datos.Name}</p>
            <p className='title1'>{Datos.opc1}</p>
            <input type="radio" value="Premium" name='Sala' className='puntos'/>
            <p className='title1'>{Datos.opc2}</p>    
            <input type="radio" value="Sencilla" name='Sala' className='puntos'/>

            <p className='titleP'>Horario:</p>
            <input type="time" className='tiempo'/>
        </div>
     );
}

export default DatosCine;