import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Meetups from './pages/Meetups'
import Favorites from './pages/Favorites'
import NewMeetup from './pages/NewMeetup'
import Layout from './ui/Layout'

function App() {
    return (
        <Layout>
            <Switch >
                <Route path={'/'} component={Meetups} exact></Route>
                <Route path={'/new-meetup'} component={NewMeetup} exact></Route>
                <Route path={'/favorites'} component={Favorites} exact></Route>
            </Switch>
        </Layout>
    )
}

export default App