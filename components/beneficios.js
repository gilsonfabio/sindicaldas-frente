import { useState } from 'react';
import Head from 'next/head';

function Beneficios() {
    return (
        <section className="info">
            <div className="title">
                Benefícios
            </div>
            <div className="content">
                <div className="left">
                  <div className="image">
                  </div>
                </div>
                <div className="right">
                  <div className="text">
                    . Segurança e agilidade no fechamento da venda;
                  </div>
                  <div className="text">
                    . Maior comodidade para seus clientes;
                  </div>
                  <div className="text">
                    . Possiblidade de fidelização dos clientes;
                  </div>
                  <div className="text">
                    . Melhores taxas de administração;
                  </div>
                  <div className="text">
                    . Risco 0% de inadimplência;
                  </div>
                  <div className="text">
                    . Aumento nas vendas e na visualização da sua marca;
                  </div>
                </div>
            </div>
        </section>
    )
}

export default Beneficios;