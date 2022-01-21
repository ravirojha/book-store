import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import BookStore from "./component/BookStore";

function App() {
    return (
        <div className="App">
            <BookStore/>
        </div>
    );
}

export default App;
