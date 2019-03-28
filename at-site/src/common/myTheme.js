import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  type: 'light',
  primary: {
    light: '#8BC34A',
    main: '#FAFAFA',
    dark: '#042109',
    contrastText: '#000',
  },

};
const themeName = 'De York Turquoise Blue Gerbils';
const theme3 = createMuiTheme({ palette, themeName });
export default theme3;


