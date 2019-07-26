import React, { PureComponent } from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Main from './Main';
import { Services } from './Services';
import { AboutUs } from './AboutUs';
import { Header } from './Header';
import { TopBar } from './TopBar';
import RequestHistory from './RequestHistory';

export class AppRouter extends PureComponent {
    render() {
        return (
           <Router>
            <TopBar></TopBar>
             <Header></Header>
             <Switch>
              <Route path={"/"} exact component={Main}></Route>
              <Route path={"/home"} component={Main}></Route>
              <Route path={"/services"} component={Services}></Route>
              <Route path={"/aboutus"} component={AboutUs}></Route>
              <Route path={"/requestHistory"} component={RequestHistory}></Route>
              </Switch>
           </Router>
        )
    }
}

export default AppRouter
