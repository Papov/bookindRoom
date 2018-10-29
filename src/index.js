import React, {Component} from 'react';
import {render} from 'react-dom';
import BookingPage from "./components/BookingPage/";

render(
    <BookingPage />,
    document.querySelector('#root')
)

module.hot.accept();