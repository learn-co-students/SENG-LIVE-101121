import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './components/App';
import {BookProvider} from "./context/books"


ReactDOM.render(
<BrowserRouter>
    <BookProvider>
        <App />
    </BookProvider>
</BrowserRouter>,document.getElementById('root'));
