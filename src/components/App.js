import React from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Router, NavLink, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import IndexPage from "./IndexPage";
import BusinessPage from "./BusinessPage";
import FavoritesPage from "./FavoritesPage";
import SettingsPage from "./SettingsPage";
import OrganizationPage from "./OrganizationPage";

class Nav extends React.Component {
    render(){
        return (
            <nav className="navigationDELETE">
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
                <Header /> { /* Объявление хэдера */ }
                <BrowserRouter> { /* настройка навигации и роутера */ }
                    <Nav />
                    <Route exact path='/'> 
                        <IndexPage />
                    </Route>
                    <Route exact path='/business'>
                        <BusinessPage />
                    </Route>
                    <Route exact path='/favorites'>
                        <FavoritesPage />
                    </Route>
                    <Route exact path='/settings'>
                        <SettingsPage />
                    </Route>
                    <Route exact path='/organization'>
                        <OrganizationPage />
                    </Route>
                </BrowserRouter>
                <Footer /> { /* Футер */ }
            </div>
        );
    }
}

export default App;