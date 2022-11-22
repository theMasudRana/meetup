import React from 'react'
import Footer from '../components/layout/Footer'
import MainNavigation from '../components/layout/MainNavigation'

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className="main">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout