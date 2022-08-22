import React, { useState, useEffect} from 'react';
import Menu from '../components/Menu';
import Router, { useRouter } from 'next/router';

import api from '../pages/api/api';

function Lancamento() {        
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vlrCompra, setVlrCompra] = useState('');
    const [qtdParcelas, setQtdParcelas] = useState(0);
    const [user, setUser] = useState([]);
    const [servidor, setServidor] = useState();
    const [cmpCartao, setCmpCartao] = useState('');

    const [saldo, setSaldo] = useState(0);
    const [statusUsr, setStatusUsr] = useState();

    const router = useRouter();
    const idCrt = router.query.nroCartao;
    const cnvId = router.query.convenio;
    const nomConvenio = router.query.nomFantasia;

    const arr_alfa = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z","!","@","$","%","&","*"];


    /*
    $arr_alfa = array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z","!","@","$","%","&","*");
    $_dia = date('d');
    $_mes = date('m');
    $_ano = date('Y');
    $_hor = date("H");
    $_min = date("i");
    $_seg = date("s");
    $pri_letra = $arr_alfa[$_dia];
    $seg_letra = $arr_alfa[$_hor];
    $ano_alfa = (string)$_ano;
    $cod_alfa = (string)$codigo;
    $min_alfa = (string)$_min;
    $seg_alfa = (string)$_seg;
    $seguranca .= $pri_letra.$seg_letra.$ano_alfa.$min_alfa.$cod_alfa.$seg_alfa;
    */

    async function cnfLancamento(e){
        e.preventDefault();
        try {
            let cartao = idCrt;
            const response = await api.get(`cmpLibera/${cartao}`);
                let data = new Date();
                var dia = data.getDate();
                var mes = data.getMonth() + 1;
                var ano = data.getFullYear();
                var dataString = ano + '-' + mes + '-' + dia;
                var dataAtual = dataString;
        
                var hor = data.getHours();
                var min = data.getMinutes();
                var seg = data.getSeconds();
                var horaString = hor + ':' + min + ':' + seg;
                var horaAtual = horaString;
        
                var priLetra = arr_alfa[dia];
                var segLetra = arr_alfa[hor];
                var codSeguranca = priLetra + segLetra + ano + cnvId + min + seg;
                    
                var taxAdmin = 3;
                var statusCmp = 'A';
        
                api.post('newcompra', {
                    cmpEmissao: dataAtual, 
                    cmpHorEmissao: horaAtual, 
                    cmpConvenio: cnvId, 
                    cmpQtdParcela: parseInt(qtdParcelas), 
                    cmpVlrCompra: parseFloat(vlrCompra), 
                    cmpServidor: servidor, 
                    cmpCodSeguranca: codSeguranca, 
                    cmpStatus: statusCmp,
                    cmpCartao: cartao      
                }).then(() => {
                    alert('Compra cadastrada com sucesso!')
                }).catch(() => {
                    alert('Erro no cadastro!');
                })  
                Router.push({
                    pathname: '/sobre',
                    query: { id: `${cnvId}`, name: `${nomConvenio}`}
                });
        } catch (err) {
            alert('Falha na confirmação da compra!');
        }  
    }

    useEffect(() => {
        console.log(idCrt);
        
        let cartao = idCrt;        
        api.get(`findUser/${cartao}`).then(resp => {
            console.log(resp.data)
            setUser(resp.data);
            setServidor(resp.data[0].usrId);
            setSaldo(resp.data[0].usrVlrDisponivel);
            setStatusUsr(resp.data[0].usrStatus);
        })
    },[]);

    return (
        <div>
            <Menu />
            <section className="login">
                <div className="max-width">
                    <h2 className="login-title">Login</h2>
                    <div className="login-content">
                        <div className="login-column login-left">
                            <div className="text">
                                Dados do Servidor(a)
                            </div>
                            {user.map((row) => (
                                <div key={row.usrId}>
                                    <div className='dados'>
                                        Nome:{row.usrNome} 
                                    </div>
                                    <div className='dados'>
                                        Matricula:{row.usrMatricula} 
                                    </div>
                                    <div className='dados'>
                                        Mes/Ano Saldo:{row.usrMes} / {row.usrAno} 
                                    </div>
                                    <div className='dados'>
                                        <p className='saldo'>Saldo Disponivel: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(row.usrVlrDisponivel)}</p>
                                    </div>
                                </div>    
                            ))}                            
                        </div>

                        <div className="login-column right">
                            <div className="text">
                                Formulário Conf. Lançamento
                            </div>

                            <form onSubmit={cnfLancamento}>
                                <div className="fields">
                                    <div className="field name">
                                        <input 
                                            type="text" 
                                            name="vlrCompra" 
                                            placeholder="Digite o Valor da Compra" 
                                            value={vlrCompra} 
                                            onChange={(e) => {setVlrCompra(e.target.value)}}
                                        />                                       
                                    </div>
                                </div>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="number" name="qtdParcelas" placeholder="Digite a Qtde. Parcelas" value={qtdParcelas} onChange={(e) => {setQtdParcelas(e.target.value)}}  />
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

export default Lancamento;