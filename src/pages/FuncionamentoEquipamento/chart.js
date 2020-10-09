import React, { useEffect, useState } from 'react';
import {
  Box,
  CssBaseline,
  Select,
  MenuItem,
  TextField
} from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import { useStyles } from './funcionamentoequipamentoStyle';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function ({ dataToShow, equipmentData, selectedChart }) {
  const classes = useStyles();

  const [chartTitle, setChartTitle] = useState("");

  useEffect(() => {
    const title = () => {
      switch (dataToShow.type) {
        case "temperature":
          return "Temperatura";
        case "current":
          return "Corrente";
        case "voltage":
          return "Tensão";

        default:
          return dataToShow.type;
      }
    }
    setChartTitle(title);
  }, [dataToShow]);

  return (
    <>
      <CssBaseline />

      <h2 className={classes.title}>{chartTitle}</h2>
      <p className={classes.subtitle}>
        {format(new Date(), "PPPP", { locale: ptBR })}
      </p>
      <Line data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Atual',
          borderColor: "red",
          data: equipmentData.map(data => data[selectedChart]),
          fill: false,
        }]
      }} />
    </>
  )
}
