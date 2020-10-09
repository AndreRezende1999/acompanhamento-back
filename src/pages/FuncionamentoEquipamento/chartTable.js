import React, { useEffect, useState } from 'react';
import {
  CssBaseline,
} from '@material-ui/core';
import { useStyles } from './funcionamentoequipamentoStyle'

const elementsOfTable = [
  {
    title: "Período",
    value: "2",
    unity: "meses"
  },
  {
    title: "Máxima temperatura",
    value: "666",
    unity: "°C"
  },
  {
    title: "Mínima temperatura",
    value: "55",
    unity: "°C"
  },
  {
    title: "Último alerta de temperatura",
    value: "2",
    unity: "meses"
  },
  {
    title: "Tempo ligado",
    value: "5",
    unity: "meses"
  },
  {
    title: "Situação",
    value: "Ok",
    unity: ""
  },
]

export default function ChartTable() {
  const classes = useStyles();

  const Module = ({ title, value, unity }) => (
    <>
      <h2 className={classes.moduleTitle}>{title}</h2>
      <p className={classes.moduleValue}>{value} {unity}</p>

      <hr className={classes.divider} />
    </>
  )

  return (
    <>
      <CssBaseline />

      {elementsOfTable.map(props => (
        <Module key={props.title} {...props} />
      ))}
    </>
  )
}
