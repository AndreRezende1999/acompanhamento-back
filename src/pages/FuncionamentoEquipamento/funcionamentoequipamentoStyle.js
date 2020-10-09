import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: "border-box",
    display: "flex",
    width: "90%",
    padding: "50px 0 66px 50px",
    [theme.breakpoints.only("xs")]: {
      padding: "30px 5% 30px",
      width: "100%",
    },
  },
  chartContainer: {
    width: "100%",
    marginBottom: "35px",
  },
  chart: {
    // height: "300px",
    background: "white",
    border: "1px solid rgba(0,0,0,.2)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  chartTable: {
    // height: "300px",
    padding: "10px 0",
    background: "white",
    border: "1px solid rgba(0,0,0,.2)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& h2": {
      lineHeight: "0",
      color: "rgba(0,0,0,.4)",
      fontSize: "12px",
    },
    "& p": {
      lineHeight: "0",
      fontWeight: "bold",
      color: "rgba(0,0,0,1)",
      fontSize: "16px",
    },
  },
  selectPeriod: {
    // width: "30%",
    height: "2rem",
  },
  inputPeriod: {
    width: "30%",
  },
  chartButtons: {
    height: "20px",
    // background: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  changeChartButton: {
    cursor: "pointer"
  },
  table: {
    width: "100%",
    marginBottom: "35px",
    height: "100px",

    background: "white",
    border: "1px solid rgba(0,0,0,.2)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  //utilitys
  divider: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(0,0,0,.2)",
    border: "none"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))
