import './assets/styles/index.scss'

import { BrowserRouter } from 'react-router-dom/'
import { RouterProvider } from './conf/router/routerProvider';
export const App = () => {

  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RouterProvider />
    </BrowserRouter>
  );
}


