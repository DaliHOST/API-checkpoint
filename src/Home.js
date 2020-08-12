import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Userdata from './userdata'
import App from './App'

export default function Home() {
    return (
        <div>
            <Switch>
                <Route exact path="/"><App/></Route>
                <Route path='/:id' component={Userdata}></Route>
            </Switch>
        </div>
    )
}
