import React, { useState} from 'react';
import Menu from '../components/Menu';
import Router from 'next/router';

import api from '../pages/api/api';

function LogConvenio() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function sendLogin(e){
        e.preventDefault();

        if (email.length > 6 ) {
            try {
                const response = await api.get(`loginCnv/${email}/${password}`);
                let cnvId = response.data.cnvId;
                let cnvNomFantasia = response.data.cnvNomFantasia;

                console.log(cnvId)
                console.log(cnvNomFantasia)

                Router.push({
                    pathname: '/sobre',
                    query: { id: `${cnvId}`, name: `${cnvNomFantasia}`}
                })
            } catch (err) {
                alert(`Falha no login convênio! Tente novamente. ${email}`);
            } 
        }else {
            try {
                const response = await api.get(`loginCnvAlt/${email}/${password}`);
                let cnvId = response.data.cnvId;
                let cnvNomFantasia = response.data.cnvNomFantasia;
                Router.push({
                    pathname: '/sobre',
                    query: { id: `${cnvId}`, name: `${cnvNomFantasia}`}
                })
            } catch (err) {
                alert(`Falha no login alt. convênio! Tente novamente. ${email}`);
            } 
        }
         
    }  

    return (
        <div>
            <Menu />
            <section className="login">
                <div className="max-width">
                    <h2 className="login-title">Login</h2>
                    <div className="login-content">
                        <div className="login-column login-left">
                            <div className="login-image">

                            </div>
                        </div>

                        <div className="login-column right">
                            <div className="text">
                                Formulário de login Convênio
                            </div>

                            <form onSubmit={sendLogin}>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="email" placeholder="Digite o seu e-mail" value={email} onChange={(e) => {setEmail(e.target.value)}}  />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field name">
                                        <input type="password" name="password" placeholder="Digite sua senha" value={password} onChange={(e) => {setPassword(e.target.value)}}  />
                                    </div>
                                </div>

                                <div className="button-area">
                                    <button type="submit">Entrar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default LogConvenio;