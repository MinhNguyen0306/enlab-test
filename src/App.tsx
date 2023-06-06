import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import routes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
              {
                route.children && route.children.map((child, index) => (
                  <Route key={index} path={child.path} element={child.element} />
                ))
              }
            </Route>
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
