import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../components/Home.js'

const Routes = () => (
    <Router>
        <Scene key = "root" hideNavBar>
            <Scene key = "Login" component = {Login} title = {false} initial = {true} />
        </Scene>
    </Router>
)


export default Routes