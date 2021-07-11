import './App.css';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About_me from "./components/About_me/About_me";


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
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
