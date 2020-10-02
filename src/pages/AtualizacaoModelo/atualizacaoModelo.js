import React, { useState, useEffect, useContext } from 'react';
import {
  CssBaseline,
  Paper,
  TextField,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Backdrop,
  CircularProgress
} from "@material-ui/core"
import api from '../../services/api';

import { useParams } from 'react-router';
import { useStyles } from './atualizacaoModeloStyle'
import { DataContext } from '../../context/DataContext';

import MaskedInput from 'react-text-mask';

function YearInput(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, /\d/]}
    />
  );
}

function AtualizacaoModelo() {
  const { id } = useParams();
  const [updating, setUpdating] = useState(false);
  const [model, setModel] = useState({});
  const [modelOriginal, setModelOriginal] = useState({});
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    (async () => {
      await api.get(`model/${id}`)
        .then((selected) => {
          setModel(selected.data.model)
          setModelOriginal(selected.data.model)
        })
        .catch(err => {
          console.error("Backend is not working properly", err);
        });
      setLoading(false)
      // const data = modelsList.find(model => model.id === id);
    })();
  }, [id])

  const classes = useStyles({ updating });

  if (!model) {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <h1 className={classes.title}>
            Detalhes do Modelo
          </h1>
          <Paper className={classes.containerForm} elevation={0}>
            <Typography variant="h5">Dados inválidos!</Typography>
          </Paper>
        </div>
      </React.Fragment>
    );
  }

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setModel({ ...model, [name]: value });
  }

  function handleSubmit() {
    if (!updating) setUpdating(true)
    else {
      console.log(model)
      alert("Salvando no banco de dados...")
      setModelOriginal(model)
      setUpdating(false)
    }
  }

  function handleDelete(confirmation) {
    if (updating) { //cancelar
      setUpdating(false);
      setModel(modelOriginal)
    }
    else if (confirmation === true) { // excuir de verdade
      setDeleting(false);
      alert("Excluindo modelo do banco de dados...")
    }
    else { // confirmar exclusão
      setDeleting(true);
    }
  }

  const AreYouSure = () => (
    <Dialog
      open={deleting}
      onClose={() => setDeleting(false)}
    >
      <DialogTitle>Excluir modelo?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza que deseja excluir este modelo?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => setDeleting(false)}>
          Cancelar
          </Button>
        <Button color="secondary" onClick={() => handleDelete(true)}>
          Excluir
          </Button>
      </DialogActions>
    </Dialog>
  );

  if (loading) {
    return (
      <React.Fragment>
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>

        <h1 className={classes.title}>
          Detalhes do Modelo
        </h1>

        <AreYouSure />

        <Paper className={classes.containerForm} elevation={0}>
          <Grid container>
            <Grid item xs={12} md={12} className={classes.grid}>
              <TextField
                name="modelName"
                className={classes.input}
                value={model.modelName}
                onChange={handleChangeInput}
                label="Nome do modelo"
                type="text"
                helperText="*Obrigatório"
                variant="filled"
                autoComplete="off"
                autoFocus
                disabled={!updating}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.grid}>
              {/* <Autocomplete
                value={model.type}
                freeSolo
                className={classes.input}
                options={["Motor", "Bomba hidráulica"]}
                onChange={handleChangeInput}
                disabled={!updating}
                renderInput={params => (
                  <TextField
                    name="type"
                    {...params}
                    label="Tipo de equipamento"
                    type="text"
                    helperText="*Obrigatório"
                    variant="filled"
                    autoComplete="off"
                  />
                )}
              /> */}
              <TextField
                value={model.type}
                className={classes.input}
                name="type"
                onChange={handleChangeInput}
                disabled={!updating}
                label="Tipo de equipamento"
                type="text"
                helperText="*Obrigatório"
                variant="filled"
                autoComplete="off"
              />
              <TextField
                name="manufacturer"
                className={classes.input}
                value={model.manufacturer}
                onChange={handleChangeInput}
                label="Fabricante"
                type="text"
                helperText="*Obrigatório"
                variant="filled"
                autoComplete="off"
                disabled={!updating}
              />
              <TextField
                name="releaseYear"
                className={classes.input}
                value={model.releaseYear}
                onChange={handleChangeInput}
                label="Ano de lançamento"
                type="text"
                helperText="*Obrigatório"
                variant="filled"
                autoComplete="off"
                disabled={!updating}
                InputProps={{
                  inputComponent: YearInput
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.grid}>
              <TextField
                name="temperatureLimit"
                className={classes.input}
                value={model.temperatureLimit}
                onChange={handleChangeInput}
                label="Limite temperatura"
                type="number"
                helperText="*Obrigatório"
                variant="filled"
                autoComplete="off"
                disabled={!updating}
              />
              <TextField
                name="currentLimit"
                className={classes.input}
                value={model.currentLimit}
                onChange={handleChangeInput}
                label="Limite corrente"
                type="number"
                helperText="*Obrigatório"
                variant="filled"
                autoComplete="off"
                disabled={!updating}
              />
              <TextField
                name="voltageLimit"
                className={classes.input}
                value={model.voltageLimit}
                onChange={handleChangeInput}
                label="Limite tensão"
                type="number"
                helperText="*Obrigatório"
                variant="filled"
                autoComplete="off"
                disabled={!updating}
              />
            </Grid>
            <Grid className={classes.centralizar} item xs={12}>
              <Button variant="contained" color="primary" className={classes.btn}
                onClick={handleSubmit}
              >
                {updating ? "Salvar" : "Editar"}
              </Button>
              <Button variant="contained" color="secondary" className={classes.btn}
                onClick={handleDelete}
              >
                {updating ? "Cancelar" : "Excluir"}
              </Button>

            </Grid>
          </Grid>
        </Paper>

      </div>
    </React.Fragment >
  );
}

export default AtualizacaoModelo;
