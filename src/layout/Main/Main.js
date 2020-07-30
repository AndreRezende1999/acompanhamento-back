import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Dashboard from '../../pages/Dashboard/dashboard';
import Testes from '../../pages/Testes';

import Menu from './Menu'
import { useStyles } from './mainstyles'

import { clientTemp } from '../../pages/Dashboard/temp'

function Main() {
  const [user] = useState(clientTemp.client);

  const isClient = user.tipo === "cliente";

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Menu user={`${user.name} : ${user.tipo}`} isClient={isClient} />
      <div className={classes.spaceContent}>
        <Switch>
          <Route path="/app/dashboard" component={Dashboard} />
          <Route path="/app/testes" component={Testes} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(Main);