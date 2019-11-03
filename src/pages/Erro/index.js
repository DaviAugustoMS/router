import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Erro extends Component{
  render(){
    return(
      <div>
        <h2>Ops pagina não encotrada!</h2>
        <h3>Vc esta procurando por:</h3>
        <Link to="/">Home </Link>
        <Link to="/sobre"> Sobre</Link>
      </div>
    );
  }
}

export default Erro;