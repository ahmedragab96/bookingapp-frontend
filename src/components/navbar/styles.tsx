import CSS from 'csstype';
import { fade } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface IStyles {
  menuButton: CSS.Properties,
  grow: CSS.Properties,
  inputRoot: CSS.Properties,
  // title: CSS.Properties,
  search: any,
  searchIcon: CSS.Properties,
  inputInput: CSS.Properties,
  sectionDesktop: CSS.Properties,
  sectionMobile: CSS.Properties,
  title: CSS.Properties,
}

const styles: IStyles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '2',
  },
  search: {
    position: 'relative',
    // display: 'flex',
    // flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: fade('#FFFFFF', 0.15),
    '&:hover': {
      backgroundColor: fade('#000000', 0.25),
    },
    'counter-set': {
      backgroundColor: fade('#000000', 0.25),
    },
    counterSet: {
      backgroundColor: fade('#000000', 0.25),
    },
    marginRight: '10px',
    marginLeft: '30px',
    width: '20%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
  },
  title: {
      display: 'block',
      marginLeft: '10px,'
      // [theme.breakpoints.up('sm')]: {
      //   display: 'block',
      // },
  },
  inputRoot: {
    color: 'inherit',
  },
  searchIcon: {
    width: '10',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '8px',
  },
  inputInput: {
    padding: '1px 1px 1px 35px',
    width: '100%',
    color: 'inherit',
    // [theme.breakpoints.up('md')]: {
    //   width: 200,
    // },
  },
  sectionDesktop: {
    // display: 'none',
    // [theme.breakpoints.up('md')]: {
    //   display: 'flex',
    // },
    display: 'flex',
  },
  sectionMobile: {
    // display: 'flex',
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
    display: 'none',
  },
};


export default styles;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     grow: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       display: 'none',
//       [theme.breakpoints.up('sm')]: {
//         display: 'block',
//       },
//     },
//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: fade(theme.palette.common.white, 0.15),
//       '&:hover': {
//         backgroundColor: fade(theme.palette.common.white, 0.25),
//       },
//       marginRight: theme.spacing(2),
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       width: theme.spacing(7),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 7),
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: 200,
//       },
//     },
//     sectionDesktop: {
//       display: 'none',
//       [theme.breakpoints.up('md')]: {
//         display: 'flex',
//       },
//     },
//     sectionMobile: {
//       display: 'flex',
//       [theme.breakpoints.up('md')]: {
//         display: 'none',
//       },
//     },
//   }),
// );