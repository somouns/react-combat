import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { counter } from './index.redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

const store = createStore(counter, applyMiddleware(thunk));

function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}
ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/erying">一营</Link></li>
                    <li><Link to="/qibinglian">骑兵连</Link></li>
                </ul>
                <Redirect to='/'></Redirect>
                <Route path='/' exact component={App}></Route>
                <Route path='/erying' component={Erying}></Route>
                <Route path='/qibinglian' component={Qibinglian}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);