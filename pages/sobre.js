import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Router, { useRouter } from 'next/router';
import { withRouter } from 'next/router'

import Menu from '../components/Menu';
import api from '../pages/api/api';

const columns = [
  { id: 'cmpId', 
    label: 'ID', 
    minWidth: 100, 
  },
  { id: 'cmpConvenio', 
    label: 'Convênio', 
    minWidth: 100, 
  },
  {
    id: 'cmpEmissao',
    label: 'Emissao',
    minWidth: 100,
  },
  {
    id: 'usrNome',
    label: 'Servidor',
    minWidth: 170,
  },
  {
    id: 'cmpVlrCompra',
    label: 'Valor Compra',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },  
];

function createData(cmpId, cmpConvenio, cmpEmissao, usrNome, cmpVlrCompra) {
  return { cmpId, cmpConvenio, cmpEmissao, usrNome, cmpVlrCompra };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  
  header: {
    height: 80,
    backgroundColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',    
  },
  
  totvendas: {
    height: 200,
    display: 'flex',
    flexDirection: 'row',    
  },
  
  left: {
    width: '50%',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  leftItens: {
    width: '50%',
    color: '#fff',
    marginBottom: 20,
  },

  right: {
    width: '50%',    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonArea: {
    display: 'flex',
    alignItems: 'center',
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

  formtext:{
    color: '#fff',
    width: '100%',
    height: '100%',
    fontFamily: 'Poppins',
    fontSize: '20px',
    padding: '30px',
  },

  input: {
    height: '100%',
    width: '100%',
    borderRadius: '6px',
    outline: 'none',
    padding: '0 15px',
    fontFamily: 'Poppins',
    fontSize: '20px',
    transition:  'all 0.3s ease',
    marginBottom: '20px',
  },

});
   
export default function Sobre() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
 
  const [cartao, setCartao] = useState('');     
  const [compras, setCompras] = useState([]);
   
  const router = useRouter();
  const codConvenio = router.query.id;
  const nomConvenio = router.query.name;

  const totCompras = compras.map(item => item.cmpVlrCompra).reduce((prev, curr) => prev + curr, 0);
  const mediaCompras = totCompras / compras.length;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
   
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
     
  async function handlePdf(){
    console.log('Rotina de Emissão de PDF...')
    //await api.get(`pdfVdaEmissao`);
    try {
      api.get(`pdfVdaEmissao`).then(resp => {
        alert('Relatório gerado com sucesso!')          
      })  
    } catch (err) {
      alert('Erro no relatório!');
    }    
  };
    
  async function emitePdfEmi(){
    Router.push({
      pathname: '/CmpCnvEmis',
      query: { id: `${codConvenio}`}
    })  
  }

  async function emitePdfVct(){
    Router.push({
      pathname: '/CmpCnvVenc',
      query: { id: `${codConvenio}`}
    })  
  }

  async function newLancamento(e){
    e.preventDefault();
    let idCnv = codConvenio;
    if (idCnv === 4) {
      try {
          const response = await api.get(`verifUser/${cartao}`);
          if(response.data.length === 0) {
            const resp = await api.get(`gerSaldo/${cartao}`);
          }
          Router.push({
            pathname: '/lancamento',
            query: { convenio: `${codConvenio}`, nomFantasia: `${nomConvenio}`, nroCartao: `${cartao}`}
          })
      } catch (err) {
          alert('Falha na busca de informações! Tente novamente.');
      }
    }else {
      try {
        const response = await api.get(`verifUser/${cartao}`);
        if(response.data.length === 0) {
          const resp = await api.get(`gerSaldo/${cartao}`);
        }
        Router.push({
          pathname: '/lancompras',
          query: { convenio: `${codConvenio}`, nomFantasia: `${nomConvenio}`, nroCartao: `${cartao}`}
        })
      } catch (err) {
        alert('Falha na busca de informações! Tente novamente.');
      }
    }  
}   

  useEffect(() => {
    let idCnv = codConvenio;
    api.get(`cmpConvenio/${idCnv}`).then(resp => {
        setCompras(resp.data);       
         
    })   

  },[]);
   
  return (
    <div>
      <Menu />
      <div className={classes.header}>
        
      </div>      
      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {compras.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.cmpId}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={compras.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <div className={classes.totvendas}>
      <div className={classes.left}>
        <div className={classes.leftItens}>
          Convênio:{codConvenio} - {nomConvenio}    
        </div>
        <div className={classes.leftItens}>
          <p>Total de Vendas: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(totCompras)}</p>
        </div>
        <div className={classes.leftItens}>
          Qtde de Vendas: {compras.length}     
        </div>
        <div className={classes.leftItens}>
          <p>Media por Venda: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(mediaCompras)}</p>
        </div>         
        <div className={classes.leftItens}>
          <div className={classes.buttonarea}>
            <button type="submit" className={classes.button} onClick={emitePdfEmi}>Vendas Emissão</button>
          </div>
        </div>  
        <div className={classes.leftItens}>
          <div className={classes.buttonarea}>
            <button type="submit" className={classes.button} onClick={emitePdfVct}>Vendas a Receber</button>
          </div>
        </div>    
      </div>      
      <div className={classes.right}>
        <div className={classes.formtext}>
          Formulário de lançamento
        </div>
        <form onSubmit={newLancamento}>
          <div>
            <div>
              <input type="text" name="cartao" placeholder="Digite o nro cartão" value={cartao} onChange={(e) => {setCartao(e.target.value)}} className={classes.input} />
            </div>
          </div>
          <div className={classes.buttonarea}>
            <button type="submit" className={classes.button}>Novo Lançamento</button>
          </div>
        </form>  
      </div>     
    </div>
  </div>
  );
}