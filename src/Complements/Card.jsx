import '../Styles/Card.css'

function Card(props) {
    return (
        <>
            <p className='title'>{props.titulo}</p>
            <input type={props.type} placeholder={props.placeholder} className="puntos"/>
        </>
     );
}

export default Card;