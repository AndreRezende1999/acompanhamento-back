import React from 'react';
import {
  CssBaseline,
} from '@material-ui/core';
import { useStyles } from './funcionamentoequipamentoStyle'

const elementsOfTable = {
  temperature: [
    {
      title: "Período",
      value: "period",
      unity: "meses"
    },
    {
      title: "Máxima temperatura",
      value: "max",
      unity: "°C"
    },
    {
      title: "Mínima temperatura",
      value: "min",
      unity: "°C"
    },
    {
      title: "Último alerta de temperatura",
      value: "lastAlert",
      unity: "meses"
    }
  ],
  current: [
    {
      title: "Período",
      value: "period",
      unity: "meses"
    },
    {
      title: "Máxima corrente",
      value: "max",
      unity: "A"
    },
    {
      title: "Mínima corrente",
      value: "min",
      unity: "A"
    },
    {
      title: "Último alerta de corrente",
      value: "lastAlert",
      unity: "meses"
    }
  ],
  voltage: [
    {
      title: "Período",
      value: "period",
      unity: "meses"
    },
    {
      title: "Máxima tensão",
      value: "max",
      unity: "V"
    },
    {
      title: "Mínima tensão",
      value: "min",
      unity: "V"
    },
    {
      title: "Último alerta de tensão",
      value: "lastAlert",
      unity: "meses"
    }
  ]
}

const elementsFixedOfTable = [
  {
    title: "Tempo ligado",
    value: "worktime",
    unity: "meses"
  },
  {
    title: "Situação",
    value: "situation",
    unity: "",
    last: true
  },
]

export default function ChartTable({ dataToShow }) {
  const classes = useStyles();

  const Module = ({ title, value, unity, last }) => (
    <>
      <h2 className={classes.moduleTitle}>{title}</h2>
      <p className={classes.moduleValue}>{dataToShow[value]} {unity}</p>

      {!last && <hr className={classes.divider} />}
    </>
  )

  return (
    <>
      <CssBaseline />

      {elementsOfTable[dataToShow.type]
        .concat(elementsFixedOfTable)
        .map((props) => (
          <Module key={props.title} {...props} />
        ))}
    </>
  )
}
