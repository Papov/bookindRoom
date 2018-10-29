if (!Object.entries) {
    Object.entries = function( obj ){
        var ownProps = Object.keys( obj ),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
    };
}

import React, {Component} from 'react';
import {render} from 'react-dom';
import BookingPage from "./components/BookingPage/";

render(
    <BookingPage />,
    document.querySelector('#root')
)

module.hot.accept();