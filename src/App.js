import './App.css';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Header/>
                </Switch>
                <main>

                    <Switch>
                        <Route path={'/'} component={Home}/>
                        <Route path={'/home'} component={Home}/>

                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
