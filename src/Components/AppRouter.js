import React, { PureComponent } from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Main from './Main';
import { Services } from './Services';
import { AboutUs } from './AboutUs';
import { Header } from './Header';
import { TopBar } from './TopBar';
import RequestHistory from './RequestHistory';
import AdminLogin from './AdminLogin';
import AdminContent from './AdminContent';
import AdminProvider from './AdminProvider';
import ContactUs from './ContactUs';

export class AppRouter extends PureComponent {
    render() {
        return (
            <AdminProvider>
           <Router>
             {/* <TopBar></TopBar>  */}
             
             <Header></Header>
             <Switch>
              <Route path={"/"} exact component={Main}></Route>
              <Route path={"/home"} component={Main}></Route>
              <Route path={"/admin"} component={Main}></Route>
              <Route path={"/services"} component={Services}></Route>
              <Route path={"/aboutus"} component={AboutUs}></Route>
              <Route path={"/requestHistory"} component={RequestHistory}></Route>
              <Route path={"/adminLogin"} component={AdminLogin}></Route>
              <Route path={"/adminContent"} component={AdminContent}></Route>
              <Route path={"/contactus"} component={ContactUs}></Route>
              
              </Switch>
              
           </Router>
           </AdminProvider>
        )
    }
}

export default AppRouter
