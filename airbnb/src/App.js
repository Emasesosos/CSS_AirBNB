import React, { Fragment } from 'react';
import Hero from './componentes/Hero/Hero';
import Main from './componentes/Main/Main';
import './css/fontawesome-all.min.css';
import './css/app.css';

function App() {
  return (
    <Fragment>
      <Hero/>
      <Main/>
    </Fragment>
  );
}

export default App;
