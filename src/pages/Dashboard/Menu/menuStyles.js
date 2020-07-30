import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 270;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  appBar: {
    backgroundColor: '#2D64F3',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  appBarLine: {
    backgroundColor: '#2D64F3',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuButtonLine: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },

  drawerOpen: {
    backgroundColor: '#D7DFE6',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: '#FE2121',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(8) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },

  toolbar: theme.mixins.toolbar,
  toolbarLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  headerInfos: {
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  paginatitle: {
    [theme.breakpoints.up("xs")]: {
      paddingTop: "0px",
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "7px",
      fontSize: "16px",
    }
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    textAlign: "center",
  },
}));