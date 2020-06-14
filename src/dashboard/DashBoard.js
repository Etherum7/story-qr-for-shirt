import React from 'react'
import NavBar from '../layout/NavBar'
import SignedOutDashBoard from './SignedOutDashBoard';

function DashBoard() {
    return (
        <>
        <NavBar />
        <SignedOutDashBoard />
        </>
    )
}
export default  DashBoard;