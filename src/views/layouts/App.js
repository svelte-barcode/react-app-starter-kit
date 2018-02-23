import React from 'react';

const App = props => ({
  render() {
    return (
      <div>
        {props.children}
      </div>
    );
  }
});

export default App;