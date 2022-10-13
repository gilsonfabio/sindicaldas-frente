import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Router, { useRouter } from 'next/router';
import moment from 'moment';

import api from '../pages/api/api';
import { ViewAgendaSharp } from '@material-ui/icons';
import Menu from '../components/Menu';

const useStyles = makeStyles({
    buttonArea: {
        width: '100vw',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    report: {
        width: '100px',
        height: '30vh',
        background: '#FFF',
    },
  
    button: {
      color: '#fff',
      display: 'block',
      width: '260px',
      height: '45px',
      outline: 'none',
      fontSize: '18px',
      fontWeight: '400',
      borderRadius: '6px',
      cursor: 'pointer',
      flexWrap: 'wrap',
      backgroundColor: '#1f80e0',
      border: '2px solid #1f80e0',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#1f80e0',
        backgroundColor: 'transparent',
      },
    },      

    filtros: {
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '200px',
        marginTop: '100px',
        backgroundColor: '#fff',        
    },
      
    input: {
        height: '100px',
        width: '30px',
        borderRadius: '6px',
        outline: 'none',
        padding: '25px',
        fontFamily: 'Poppins',
        transition: 'all 0.3s ease',
    },

});

function CmpCnvEmis() {
    const classes = useStyles();
    const [vendas, setVendas] = useState([]);

    const [datInicial, setDatInicial] = useState();
    const [datFinal, setDatFinal] = useState();

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    
    const router = useRouter();
    const codConvenio = router.query.id;


    //const datNow = moment().format('DD-MM-YYYY');
    //const horNow = moment().format('hh:mm:ss');  
    
    const reportTitle = [
        {
            text: `Relatório de Vendas por Emissão`,
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45],
        }       
    ];

    const dados = vendas.map((venda) => {
        return [
            {text: venda.cmpId, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: moment(venda.cmpEmissao).format('DD-MM-YYYY'), fontSize: 9, margin: [0, 2, 0, 2]},
            {text: venda.usrNome, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: venda.cmpQtdParcela, fontSize: 9, margin: [0, 2, 0, 2]},
            {text: Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(venda.cmpVlrCompra), fontSize: 9, alignment: 'right', margin: [0, 2, 0, 2]}
        ]              
    });

    const totCompras = vendas.map(item => item.cmpVlrCompra).reduce((prev, curr) => prev + curr, 0);

    const details = [
        {
            table: {
                headerRows: 1,
                widths: [70, 70, 200, 50, 80],
                body: [
                    [
                        {text: 'ID', style: 'tableHeader', fontSize: 10},
                        {text: 'EMISSÃO', style: 'tableHeader', fontSize: 10},
                        {text: 'NOME SERVIDOR(A)', style: 'tableHeader', fontSize: 10},                        
                        {text: 'PLANO', style: 'tableHeader', fontSize: 10},
                        {text: 'VLR. DA VENDA', style: 'tableHeader', fontSize: 10},
                    ],
                    ...dados
                ]
            },
            layout: 'headerLineOnly'
        },
    ];

    function Rodape(currentPage, pageCount){      
        return [  
            {
                columns: [
                    {text: 'Total de Vendas..............' + Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(totCompras), alignment: 'left', fontSize: 10, margin: [10,0,0,0]},
                    {text: 'Página: ' + currentPage + ' / ' + pageCount, alignment: 'right', fontSize: 10, margin: [0,0,20,0] }
                ],
            },                    
        ]
    };

    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer: Rodape
    };
   
    useEffect(() => {
        
    },[]);

    function emitePdf() {
        let servidor = 1;
        api.get(`pdfEmiCmpCnv/${datInicial}/${datFinal}/${codConvenio}`).then(resp => {
            setVendas(resp.data);  
        })
        pdfMake.createPdf(docDefinition).open();
        //pdfMake.createPdf(docDefinition).download();  
    };

    return (
        <div>
            <Menu />
            <section className="login">
                <div className="max-width">
                    <h2 className="login-title">Vendas por Emissão</h2>
                    <div className="login-content">
                        <div className="login-column login-left">
                            <div className="login-image">

                            </div>
                        </div>

                        <div className="login-column right">
                            <div className="text">
                                Informe o Periodo desejado
                            </div>

                            <form onSubmit={emitePdf}>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" name="datInicial" placeholder="Informe data inicial" value={datInicial} onChange={(e) => {setDatInicial(e.target.value)}} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="field name">
                                    <input className='input' type="text" name="datFinal" placeholder="Informe data final" value={datFinal} onChange={(e) => {setDatFinal(e.target.value)}} />
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
    );
}

export default CmpCnvEmis;
