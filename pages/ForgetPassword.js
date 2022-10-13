import React, { useState} from 'react';
import Menu from '../components/Menu';
import Router from 'next/router';

import api from '../pages/api/api';

function LoginServ() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      
    async function handleEmail(e){
        e.preventDefault();
        try {
          await api.get(`recPassword/${email}`)
          Router.push({pathname: '/loginserv'});
        } catch (err) {
          alert('Falha no login! Tente novamente.', email);
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
                                Recuperação de senha
                            </div>

                            <form onSubmit={handleEmail}>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="email" placeholder="Digite o seu e-mail" value={email} onChange={(e) => {setEmail(e.target.value)}}  />
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

export default LoginServ;