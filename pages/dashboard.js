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
   
export default function Dashboard() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
 
  const [cartao, setCartao] = useState('');     
  const [compras, setCompras] = useState([]);
   
  const router = useRouter();
  const codServidor = router.query.id;
  const nomServidor = router.query.name;

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
      api.get(`pdfCmpEmissao`).then(resp => {
        alert('Relatório gerado com sucesso!')          
      })  
    } catch (err) {
      alert('Erro no relatório!');
    }    
  };
    
  async function emitePdf(){
    Router.push({pathname: '/VdaVencimento'});  
  }
  
  useEffect(() => {
    let idSrv = codServidor;
    api.get(`cmpservidor/${idSrv}`).then(resp => {
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
          Servidor:{codServidor} - {nomServidor}    
        </div>
        <div className={classes.leftItens}>
          <p>Total de Compras: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(totCompras)}</p>
        </div>
        <div className={classes.leftItens}>
          Qtde de Compras: {compras.length}     
        </div>
        <div className={classes.leftItens}>
          <p>Media por Compra: {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(mediaCompras)}</p>
        </div>         
        <div className={classes.leftItens}>
          <div className={classes.buttonarea}>
            <button type="submit" className={classes.button} onClick={emitePdf}>Emite PDF</button>
          </div>
        </div>  
      </div>      
      
    </div>
  </div>
  );
}