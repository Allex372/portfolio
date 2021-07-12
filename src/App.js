import './App.css';
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About_me from "./components/About_me/About_me";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Header/>
                </Switch>
                <main>

                    <Switch>
                        <Route path={'/home'} component={Home}/>
                        <Route path={'/about_me'} component={About_me}/>
                        <Route path={'/skills'} component={Skills}/>
                        <Route path={'/portfolio'} component={Portfolio}/>
                        <Route path={'/contacts'} component={Contacts}/>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
