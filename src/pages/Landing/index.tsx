import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.png';


import './styles.css';
import api from '../../services/api';

function Landing() {
    const[totalConnections, setTotalConnections] = useState(0);
    
    useEffect(() => {
        api.get('connections').then(response =>{
            const {total} = response.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
           <div id="page-landing-content" className="container">

            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Sua plataforma de <br/>serviços online.</h2>
            </div>
            
            
        </div>
           <div id="page-landing-buttons" className="container">


           <span className="bem-vindo">
                Seja bem-vindo.<br/> Oque deseja fazer? 
            </span>


            <div className="buttons-container">
                <Link to="/Profissionais" className="study">
                   
                    Procurar profissionais

                </Link>

                <Link to="Cadastro-de-Serviços" className="give-classes">
                    
                    Oferecer serviços
                </Link>

            </div>

           
            <span className="total-connections">
                Total de {totalConnections} conexões já realizadas 
            </span>

            </div> 
        </div>
    )
}

export default Landing;