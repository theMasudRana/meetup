import React from 'react'
import Footer from '../components/layout/Footer'
import MainNavigation from '../components/layout/MainNavigation'

function Layout(props) {
    return (
        <>
            <MainNavigation />
            <main className="main">
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout