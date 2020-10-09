import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {
  CssBaseline,
  Grid,
  CircularProgress,
  Backdrop,
} from '@material-ui/core';
import { useStyles } from './funcionamentoequipamentoStyle'
import ChartTable from './chartTable';

export default function FuncionamentoEquipamento() {
  const classes = useStyles();
  // const { id } = useParams();
  const id = "9c662f70-041c-11eb-a5d4-d9a33cd11de3"

  const [equipmentData, setEquipmentData] = useState([]);
  const [equipment, setEquipment] = useState({});
  const [selectedChart, setSelectedChart] = useState("temperature");
  const [dataToShow, setDataToShow] = useState({
    type: selectedChart,
    period: "2",
    max: 22,
    min: 12,
    lastAlert: "12",
    worktime: "",
    situation: "",
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get datas of equipment
    api.get(`data/equipament/${id}`).then(response => {
      const equipment = response.data.data;
      setEquipmentData(equipment)
    })

    // get equipment
    api.get(`equipment/${id}`).then(response => {
      setEquipment(response.data.equipment[0])
    })

    setLoading(false)
  }, [id]);

  useEffect(() => {
    const data = {
      type: "temperature",
      situation: equipment.situation,
      worktime: equipment.work_time
    }
    setDataToShow(prev => ({ ...prev, ...data })) //first time
  }, [equipment, equipmentData]);

  if (loading || Object.keys(dataToShow).length === 0) {
    return (
      <React.Fragment>
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </React.Fragment>
    )
  }

  const changeDataToShow = (property, value) => {
    setDataToShow(prev => ({ ...prev, [property]: value }))
  }

  const handleChangeChartData = (type) => {
    setSelectedChart(type)
    changeDataToShow("type", type)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid container className={classes.chartContainer}>
          <Grid item md={9} xs={12} className={classes.chart}>
            <h2>Gráfico: {dataToShow.type}</h2>
          </Grid>
          <Grid item md={3} xs={12} className={classes.chartTable}>
            <ChartTable dataToShow={dataToShow} />
          </Grid>
          <Grid item md={12} xs={12} className={classes.chartButtons}>
            <input type="radio" onChange={() => handleChangeChartData("temperature")}
              checked={selectedChart === "temperature"} />
            <input type="radio" onChange={() => handleChangeChartData("current")}
              checked={selectedChart === "current"} />
            <input type="radio" onChange={() => handleChangeChartData("voltage")}
              checked={selectedChart === "voltage"} />
          </Grid>
        </Grid>
        <Grid item md={12} xs={12} className={classes.table}>
          <h2>Tabela do equipamento</h2>
        </Grid>
      </Grid>
    </div>
  )
}
