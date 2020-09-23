import { makeStyles } from '@material-ui/core';
import { titlesFontFamilyPadrao, titleFontSize, azulPadraoClaro } from '../../StylePadrao/stylePadrao';

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    padding: "50px 0 66px 50px",
    paddingTop: "50px",
    paddingRight: "0px",
    paddingBottom: "66px",
    paddingLeft: "50px",
    [theme.breakpoints.only("xs")]: {
      padding: "30px 5% 30px",
      width: "100%",
    },
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "space-between",
    },
  },

  title: {
    position: "relative",
    fontFamily: titlesFontFamilyPadrao,
    fontWeight: "500",
    fontSize: titleFontSize,
    lineHeight: "40px",
    display: "flex",
    color: "#000000",
  },

  buttonAdd: {
    marginLeft: "40px",
    padding: "0 20px",
    border: "1px solid", azulPadraoClaro,
    fontFamily: titlesFontFamilyPadrao,
    fontWeight: "500",
    fontSize: "13px",
    textAlign: "center",
    color: azulPadraoClaro,
    "&:hover": {
      color: "#fff",
      backgroundColor: azulPadraoClaro,
      border: "none",
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: "20px",
    },
  },

  search: {
    marginTop: "40px",
    position: 'relative',
    borderRadius: "5px",
    backgroundColor: azulPadraoClaro,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '486px',
    [theme.breakpoints.down('xs')]: {
      width: "100%",
    }
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },

  input: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "430px",
    [theme.breakpoints.down('xs')]: {
      fontSize: "12px",
      width: "270px",
    }
  },

  table: {
    marginTop: "30px"
  },
}))