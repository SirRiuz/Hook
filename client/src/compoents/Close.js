
import { Redirect } from 'react-router-dom';
import React from 'react'

function Close () {
    localStorage.clear()
    return <Redirect to='/' />
}


export default Close;