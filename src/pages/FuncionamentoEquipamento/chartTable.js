import React from 'react';
import {
  Box,
  CssBaseline,
  FormControl,
  InputLabel,
  Select,
  MenuItem
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
      value: "tempMax",
      unity: "°C"
    },
    {
      title: "Mínima temperatura",
      value: "tempMin",
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
      value: "currMax",
      unity: "A"
    },
    {
      title: "Mínima corrente",
      value: "currMin",
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
      value: "voltMax",
      unity: "V"
    },
    {
      title: "Mínima tensão",
      value: "voltMin",
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

      <h2 className={classes.moduleTitle}>Período</h2>
      <Box>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        // value={age}
        // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        // value={age}
        // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Box>

      <hr className={classes.divider} />

      {elementsOfTable[dataToShow.type]
        .concat(elementsFixedOfTable)
        .map((props) => (
          <Module key={props.title} {...props} />
        ))}
    </>
  )
}
