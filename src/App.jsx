
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/router'
import './App.scss'

import store from './servces/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {

  return (
    <Provider store={store}>

      <RouterProvider router={router} />

    </Provider>
  )
}

export default App
