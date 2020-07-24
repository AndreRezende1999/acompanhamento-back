import React from 'react';
import { useStyles } from './styles';
import Menu from './menu';
import Graphic from './chart';
import { useEffect, useState } from 'react';

import { clientTemp, modelTemp, equipTemp, dataTemp } from './temp';

export default function Dashboard() {
  const margemPorcentagem = 0.8; //acima desta porcentagem entra em atenção, e abaixo ok

  const [situation, setSituation] = useState({
    ok: Number,
    revisao: Number,
    atencao: Number
  });
  const [values, setValues] = useState([{
    temperature: Number,
    current: Number,
    voltage: Number,
    id: String
  }])
  const [limits, setLimits] = useState([{
    temperatureLimit: Number,
    currentLimit: Number,
    voltageLimit: Number,
    modelName: String
  }])
  const [totalEquipment, setTotalEquipment] = useState(Number);

  useEffect(() => { //total de equipamentos
    const quantidade = dataTemp.data.length;

    setTotalEquipment(quantidade);
  }, []);

  useEffect(() => { //seta valores 
    const data = dataTemp.data;

    const valuesData = data.map(equipment => {
      return {
        temperature: equipment.temperature,
        current: equipment.current,
        voltage: equipment.voltage,
        id: equipment.id
      }
    })

    setValues(valuesData)
  }, [])

  useEffect(() => { //seta limites
    const data = modelTemp.data;

    const limitsData = data.map(model => {
      return {
        temperatureLimit: model.temperatureLimit,
        currentLimit: model.currentLimit,
        voltageLimit: model.voltageLimit,
        modelName: model.modelName
      }
    })

    setLimits(limitsData)
  }, [])

  useEffect(() => { //configura situações
    let numOk = 0; let numAtencao = 0; let numRevisao = 0;

    function defineSituacao(valueEquipment, limitModel) {
      // Parametros para analise de valores. Ex.:
      // se o parametro vale 0.8 o equipamento estará em situação de atenção 
      // quando chegar em 80% do limite que ele pode alcançar 
      const paramTEMP = 0.8;
      const paramVOLT = 0.8;
      const paramCURR = 0.8;

      function analisaTEMP(value, limit, param) {
        if (value > limit) return 2;
        else if (value >= (limit * param) && value <= limit) return 1;
        else return 0;
      }
      function analisaVOLT(value, limit, param) {
        if (value > limit) return 0;
        else if (value >= (limit * param) && value <= limit) return 1;
        else return 0;
      }
      function analisaCURR(value, limit, param) {
        if (value > limit) return 2;
        else if (value >= (limit * param) && value <= limit) return 1;
        else return 0;
      }

      // 0: ok
      // 1: atenção
      // 2: revisão  

      const sitTEMP = analisaTEMP(
        valueEquipment.temperature,
        limitModel.temperatureLimit,
        paramTEMP);

      const sitVOLT = analisaVOLT(
        valueEquipment.voltage,
        limitModel.voltageLimit,
        paramVOLT);

      const sitCURR = analisaCURR(
        valueEquipment.current,
        limitModel.currentLimit,
        paramCURR);

      let sitGeral = 0;

      // a pior situação será a situação geral
      if (sitTEMP === 2 | sitVOLT === 2 | sitCURR === 2) sitGeral = 2;
      else if (sitTEMP === 1 | sitVOLT === 1 | sitCURR === 1) sitGeral = 1;
      else if (sitTEMP === 0 | sitVOLT === 0 | sitCURR === 0) sitGeral = 0;

      // transforma os numeros 0,1,2 em suas respectivas situações
      if (sitGeral === 2) numRevisao++;
      else if (sitGeral === 1) numAtencao++;
      else if (sitGeral === 0) numOk++;
    }

    values.map(equipValue => {
      defineSituacao(equipValue, limits[0]);
      console.log(equipValue, limits[0])
    })

    const situationData = {
      ok: numOk,
      revisao: numRevisao,
      atencao: numAtencao
    };
    setSituation(situationData);
  }, [limits, values])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Menu />
      <div className={classes.sidebar}></div>
      <div className={classes.tittle}>
        Situação das Bombas
      </div>
      <div className={classes.graphic}>
        <div className={classes.graphic1}>
          <Graphic
            data={[situation.revisao, totalEquipment - situation.revisao]}
            colors={['red', "gray"]}
            labels={["Revisão"]} />
        </div>
        <div className={classes.graphic1}>
          <Graphic
            data={[situation.atencao, totalEquipment - situation.atencao]}
            colors={['yellow', "gray"]}
            labels={["Atenção"]} />
        </div>
        <div className={classes.graphic1}>
          <Graphic
            data={[situation.ok, totalEquipment - situation.ok]}
            colors={['green', "gray"]}
            labels={["OK"]} />
        </div>
      </div>
    </div >
  )
}