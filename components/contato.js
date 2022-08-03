import { useState } from 'react';
import Head from 'next/head';

function Contato() {

    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    const [response, setResponse] = useState({
        type: '',
        mensagem: ''
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendContact = async e => {
        e.preventDefault();
        console.log(dataForm.email);

        try {
            const res = await fetch('http://localhost:8080/add-msg-contact', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseEnv = await res.json();

            if (responseEnv.erro) {
                setResponse({
                    type: 'error',
                    mensagem: responseEnv.mensagem
                });
            } else {
                setResponse({
                    type: 'success',
                    mensagem: responseEnv.mensagem
                });

                setDataForm({
                    name: '',
                    email: '',
                    subject: '',
                    content: ''
                });
            }
        } catch (err) {
            setResponse({
                type: 'error',
                mensagem: "Erro: Tente mais tarde!"
            });
        }
    }

    return (
        <div>
            <section className="contact">
                <div className="max-width">
                    <h2 className="title">Contato</h2>
                    <div className="contact-content">
                        <div className="contact-column contact-left">
                            <p>Proin finibus dapibus lorem, eget viverra nunc auctor vitae. Pellentesque condimentum diam sed convallis posuere.</p>
                            <div className="contact-icons">
                                <div className="contact-row">
                                    <i className="fas fa-user"></i>
                                    <div className="contact-info">
                                        <div className="contact-head">
                                            Empresa
                                        </div>
                                        <div className="contact-subtitle">
                                            Celke
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="contact-info">
                                        <div className="head">
                                            Endereço
                                        </div>
                                        <div className="contact-subtitle">
                                            Avenida Winston Churchill
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="contact-info">
                                        <div className="contact-head">
                                            E-mail
                                        </div>
                                        <div className="contact-subtitle">
                                            cesar@celke.com.br
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-column right">
                            <div className="text">
                                Formulário de contato
                            </div>

                            {response.type === 'error' ? <p className="alert-danger">{response.mensagem}</p> : ""}
                            {response.type === 'success' ? <p className="alert-success">{response.mensagem}</p> : ""}

                            <form onSubmit={sendContact}>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="name" placeholder="Digite o nome" onChange={onChangeInput} value={dataForm.name} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field name">
                                        <input type="email" name="email" placeholder="Digite o seu melhor e-mail" onChange={onChangeInput} value={dataForm.email} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="subject" placeholder="Digite o assunto da mensagem" onChange={onChangeInput} value={dataForm.subject} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="content" placeholder="Digite o conteúdo da mensagem" onChange={onChangeInput} value={dataForm.content} />
                                    </div>
                                </div>

                                <div className="button-area">
                                    <button type="submit">Enviar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contato;