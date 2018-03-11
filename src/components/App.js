import React from 'react'
import Articles from './routes/Articles'
import DataPicker from './DataPicker';
import 'react-day-picker/lib/style.css';
import Counter from "./Counter";
import { HashRouter as Router, Route, NavLink} from "react-router-dom";

    export default function App() {
        return (
            <Router>
                <div>
                <div>
                    <h2>Main Menu</h2>
                    <div>
                        <div>
                          <NavLink activeStyle = {{color:'red'}} to = "/counter">Counter</NavLink>
                        </div>
                        <div>
                            <NavLink activeStyle = {{color:'red'}} to = "/articles">Articles</NavLink>
                        </div>
                       
                    </div>
                </div>
                <Route path = "/counter" component = {Counter}/>
                <Route path = "/articles" component = {Articles}/>
                <DataPicker numberOfMonths = {1}/>
                </div>
            </Router>
        ) 
    }