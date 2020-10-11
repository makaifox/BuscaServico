import React from 'react';
import logoImg from '../../assets/images/logo.png';
import Input from '../../components/input';
import './styles.css';


function cadastro() {
 
    return (
        <div id="page-cadastro">
           <div id="page-cadastro-content" className="container">

            <div className="logo-container">
                <img src={logoImg} alt="BuscaServiço"/>
                <h2>Sua plataforma de <br/>serviços online.</h2>
            </div>
            
            
        </div>
           
           <div id="page-cadastro-buttons" className="container">

            <div id="header-form">
            
                        <span className="cadastro-text">
                                Cadastro 
                            </span> 
                                                 
                </div>


                <div className="input-container" >
                <form  >
                <div>
                    <legend> Preencha seus dados para começar. </legend>

                    <Input  
                            name="name" 
                            label="" 
                            placeholder="Nome"
                        
                    />
                    <Input  
                            name="sobrenome" 
                            label="" 
                            placeholder="Sobrenome"
                        
                    />                    
                    <Input  
                            name="email" 
                            label="" 
                            placeholder="E-mail"
                            type="email"
                
                    />                    
                    <Input  
                            name="Cpf / CNPJ" 
                            label="" 
                            placeholder="CPF / CNPJ"
                            type="number"
                
                    />                    
                    <Input  
                            name="cep" 
                            label="" 
                            placeholder="Cep"
                            type="number"

                    />                    
                    <Input  
                            name="user" 
                            label=""
                            placeholder="Usuário" 
                        
                    />

                    <Input  
                            name="password" 
                            label=""
                            placeholder="Senha" 
                            type="password"
                        
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

export default cadastro;