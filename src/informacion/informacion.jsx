import './informacion.css';
import { FooterComponent } from "../footer"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: '30px',
    fontFamily: '"Albert Sans", sans-serif',
    fontOpticalSizing: 'auto',
    fontStyle: 'normal',
    color: '#004187',
    fontWeight: 'bold',
    border: '2px solid #0660C2',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '20px',
    border: '2px solid #0660C2',
    color: '#004187', 
  },
}));

const StyledTableRowHeaderCell = styled(StyledTableCell)({
  fontWeight: 'bold',
});

export const InformacionComponent = () => {



  return (
    <>
      <div className='container-general-informacion-banner'>

        <div className='titulo'>
          <h1>Conoce los <strong>beneficios</strong> de nuestro servicio</h1>
        </div>
        <div class="circle grande azul-oscuro-izq"></div>
        <div class="circle mediano azul-claro-izq"></div>
        <div class="circle grande azul-oscuro-der"></div>
        <div class="circle mediano azul-claro-der"></div>
      </div>
      <div className='container-banner-beneficios'>
        <div className='tarjetas-beneficio'>
          <div className='grid'>
            <div className='icono-beneficio'>
              <h3>Rendimiento</h3>
            </div>
            <div className='icono-beneficio'>
              <h3>Bajo costo</h3>
            </div>
            <div className='icono-beneficio'>
              <h3>Seguridad</h3>
            </div>
            <div className='icono-beneficio'>
              <h3>Control</h3>
            </div>
            <div className='icono-beneficio'>
              <h3>Autonomía</h3>
            </div>
            <div className='icono-beneficio'>
              <h3>Rentabilidad</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='container-tabla-informacion'>
        <div className='container-tabla'>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Características</StyledTableCell>
                <StyledTableCell align="left">Propano en granel</StyledTableCell>
                <StyledTableCell align="left">Propano en cilindros</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableRowHeaderCell>Costos</StyledTableRowHeaderCell>
                <StyledTableCell align="left">Más rentable a largo plazo.</StyledTableCell>
                <StyledTableCell align="left">Puede ser más caro por compra frecuente.</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableRowHeaderCell>Comodidad de uso</StyledTableRowHeaderCell>
                <StyledTableCell align="left">Totalmente automatizado luego de la instalación.</StyledTableCell>
                <StyledTableCell align="left">Necesidad de intervención manual (más propenso a accidentes).</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableRowHeaderCell>Seguridad</StyledTableRowHeaderCell>
                <StyledTableCell align="left">Instalación profesional y a nivel industrial.</StyledTableCell>
                <StyledTableCell align="left">Más expuesto a fugas por mal uso o conexiones sueltas.</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableRowHeaderCell>Logística y abastecimiento</StyledTableRowHeaderCell>
                <StyledTableCell align="left">Entregas programadas, estabilidad y confianza en entrega.</StyledTableCell>
                <StyledTableCell align="left">Depende del inventario de cilindros y demanda.</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableRowHeaderCell>Autonomía</StyledTableRowHeaderCell>
                <StyledTableCell align="left">Sin necesidad de intervención por parte del cliente.</StyledTableCell>
                <StyledTableCell align="left">Tienes que cargar y conectar los cilindros manualmente.</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableRowHeaderCell>Suministro continuo</StyledTableRowHeaderCell>
                <StyledTableCell align="left">Entregas en periodos exactos.</StyledTableCell>
                <StyledTableCell align="left">Entregas bajo demanda.</StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

