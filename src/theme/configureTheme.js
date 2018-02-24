import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/lightBlue';

const configureTheme = () => {
  return(createMuiTheme({
    palette: {
      primary: {
        ...blue,
        '500': '#01579B'
      }
    }
  }));
}

export default configureTheme;