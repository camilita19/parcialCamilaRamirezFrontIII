import { useState } from "react";
import music from '../assets/music-1030x686.jpg'
// import {Card}  from "./Card";


const Form = () => { 


const [name, setName] = useState("");
const [lastName, setLastName] = useState("");
const [age, setAge] = useState(0);
const [favoriteMusic, setFavoriteMusic] = useState("");
const [show, setShow] = useState(false);
const [error, setError] = useState(false);

const validacion = name.trim().length >=4 && lastName.length >=4 && age >= 12 && favoriteMusic.length >=5;

const handleSubmit = (e) => {
  e.preventDefault()
  validacion ? setShow(true) : setError(true)


}

  return (
    <div>
     <img  className="img-card"  src={music} alt="musica"/>
    
    <form  className="contenedor-formulario" onSubmit={handleSubmit}>
    <h2>Musuca Favorita</h2>
    <div className="estilo-casillas">
      <label>Name</label>
      <input type="text" disabled={show} placeholder=" Name" onChange={(e) => setName(e.target.value)}/>
      <label>Last Name</label>
      <input type="text" disabled={show} placeholder=" LastName" onChange={(e) => setLastName(e.target.value)}/>
      <label>Age</label>
      <input type="number" disabled={show} placeholder=" Age" onChange={(e) => setAge(e.target.value)}/>
      <label>favorite Music</label>
      <input type="text" disabled={show} placeholder=" Cual es tu Musica Favorita" onChange={(e) => setFavoriteMusic(e.target.value)}/>
      </div>
      <div>
      <button className="boton" type="submit">Enviar</button>
       {error && <h5> por favor, cheque que la informacion sea correcta</h5>}
        {show && 
            <>
       <h3>  Gracias, {name}  {lastName}</h3>
       <h4>Tu tipo de musica Favorita es {favoriteMusic}</h4> 
        
       </> 
    }
        </div>
      </form>
    
    </div>
  );
};

export default Form
        // esto deberia ser al lado de show pero no alcance a llamar la card 
        // me salia error asi que lo deje comentado
         {/*<Card
       name={name}
       lastName={lastName}
       favoriteMusic={favoriteMusic} />} */}
      
       
    