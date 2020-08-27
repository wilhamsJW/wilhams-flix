import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Video from './pages/Video/index'
import Home from './pages/Home';
import Categoria from './pages/Categoria/index'

const Pagina404 = () => (<div>Página não encontrada, Erro 404!</div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
     <Route path="/cadastro/video" component={Video} ></Route>
     <Route path="/" exact component={Home} ></Route> 
     <Route path="/cadastro/categoria" component={Categoria} />
     <Route component={Pagina404} />
  </Switch>
  
  </BrowserRouter>,
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
