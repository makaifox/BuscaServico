import React from 'react';
import logoImg from '../../assets/images/logo.png';
import Input from '../../components/input';
import './styles.css';


function esqueci() {
 
    return (
        <div id="page-esqueci">
           <div id="page-esqueci-content" className="container">

            <div className="logo-container">
                <img src={logoImg} alt="BuscaServiço"/>
                <h2>Sua plataforma de <br/>serviços online.</h2>
            </div>
            
            
        </div>
           
           <div id="page-esqueci-buttons" className="container">

            <div id="header-form-esqueci">
            
                        <span className="esqueci-text">
                                Eita, esqueceu <br/>
                                sua senha ?
                            </span> 
                                                 
                </div>


                <div className="input-container" id="input-container-esqueci">
                <form  >
                <div>
                    <legend> Não esquenta, vamos dar um jeito nisso. </legend>

                    <Input  
                            name="email" 
                            label="" 
                            placeholder="E-mail"
                        
                    />
                    

                </div>

                <footer>
                <input type="submit" value="Enviar" className="enviar"/>
                </footer>
                </form>
                
                </div>
                
            
                </div> 
        </div>
    )
}

export default esqueci;