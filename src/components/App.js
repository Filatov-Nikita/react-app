import React from 'react'
import ArticlesList from './ArticlesList'
import DataPicker from './DataPicker';
import 'react-day-picker/lib/style.css';
import Counter from "./Counter";

    export default function App() {
        return (
            <div>
            <Counter />
              <DataPicker numberOfMonths = {1}/>
                <ArticlesList />
            </div>
        ) 
    }