import React, { useState} from 'react';
import Menu from '../components/Menu';
import Router from 'next/router';

import api from '../pages/api/api';

function LoginServ() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function sendLogin(e){
        e.preventDefault();

        if (email.length > 6 ) {
            try {
                const response = await api.get(`loginSrv/${email}/${password}`);
                let srvId = response.data.srvId;
                let srvNome = response.data.srvNome;

                console.log(srvId)
                console.log(srvNome)

                Router.push({
                    pathname: '/dashboard',
                    query: { id: `${srvId}`, name: `${srvNome}`}
                })
            } catch (err) {
                alert(`Falha no login servidor! Tente novamente. ${email}`);
            } 
        }else {
            try {
                const response = await api.get(`loginSrvAlt/${email}/${password}`);
                let srvId = response.data.srvId;
                let srvNome = response.data.srvNome;
                Router.push({
                    pathname: '/dashboard',
                    query: { id: `${srvId}`, name: `${srvNome}`}
                })
            } catch (err) {
                alert(`Falha no login alt. servidor! Tente novamente. ${email}`);
            } 
        }
         
    }  

    function handlePassword() {
        Router.push({
            pathname: '/ForgetPassword'});
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
                                Formulário Login Servidor
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

                                <div className="button-forget">
                                    <button onClick={handlePassword} type="button">Esqueceu a senha?</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default LoginServ;