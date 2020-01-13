import React from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Router, NavLink, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import IndexPage from "./IndexPage";
import BusinessPage from "./BusinessPage";

class Nav extends React.Component{
    render(){
        return (
            <nav>
                <NavLink exact to="/" activeClassName="active">Главная</NavLink>  
                <NavLink to="/business" activeClassName="active">Бизнес</NavLink>  
                <NavLink to="/organization" activeClassName="active">Организации</NavLink>
            </nav>
        );
    }
}

class App extends React.Component {
    render () {
        return(
            <div>
                <Header />
                <BrowserRouter>
                    <Nav />
                    <Route exact path='/'>
                        <IndexPage />
                    </Route>
                    <Route exact path='/business'>
                        <BusinessPage />
                    </Route>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App;