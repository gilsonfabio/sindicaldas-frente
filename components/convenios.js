import { useState } from 'react';
import Head from 'next/head';

function Beneficios() {
    return (
        <section className="info">
            <div className="title">
                Convênios
            </div>
            <div className="content">
                <div className="left">
                  <div className="image">
                  </div>
                </div>
                <div className="right">
                  <div className="text">
                    Para acessar rotinas referentes aos Convênios;
                  </div>
                  <div className="text">
                    . Favor entrar na opção abaixo;
                  </div> 
                  <div className="button">                
                    <a href="/login">Convênios</a>
                  </div>  
                </div>
            </div>
        </section>
    )
}

export default Beneficios;