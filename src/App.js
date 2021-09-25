import React, { useRef, useEffect } from 'react';
import { useLocation, BrowserRouter } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <BrowserRouter basename={window.location.pathname || ''}>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </BrowserRouter>
      )} />
  );
}

export default App;