import React from 'react';
import Grid from 'material-ui/Grid';
import Header from '../../components/Header';

const App = props => ({
  render() {
    return (
      <div>
        <Grid container>
          <Header />
          <main>
            {props.children}
          </main>
        </Grid>
      </div>
    );
  }
});

export default App;