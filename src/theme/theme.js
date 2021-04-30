import { createMuiTheme } from '@material-ui/core'
import PoppinsFont from '../assets/fonts/poppins.woff2'
const poppins = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Poppins'),
    local('Poppins-Regular'),
    url(${PoppinsFont}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}
const primary = "#B3E63A"
const secondary = '#A8A9AD'
export const Theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 14
  },
  spacing: 2,
  //overrides over css styling of components
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [poppins],
      },
    },
    MuiButton: {
      root: {
        // textTransform: 'none',
      },
    },
    MuiTypography: {
      root: {
        cursor: 'normal'
      }
    },
    MuiListItem: {
      root: {
        "&.Mui-selected": {
          color: "#303030", //color de la tipografía seleccionada
          backgroundColor: '#B2E639',
          "& .MuiListItemIcon-root": {
            color: "#303030" //color del icono
          },
          "&:hover": {
            color: "white",
            backgroundColor: '#9ECC33',
            "& .MuiListItemIcon-root": {
              color: "white" //color del icono
            },
          },
        },
      },
    },

  },
  //overrides over props of components
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary',
    },
    MuiTextField: {
      variant: 'outlined',
      size: 'small',
      InputLabelProps: {
        shrink: true
      }
    },
    MuiCard: {
      elevation: 2
    },
    MuiPaper: {
      elevation: 2
    },
    MuiFormControl: {
      size: 'small',
      variant: 'outlined',
      InputLabelProps: {
        shrink: true
      }
    },
    MuiSelect: {
      variant: 'outlined'
    },
  }
});