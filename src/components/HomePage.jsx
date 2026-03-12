import React from 'react'   
import '../Index.css'
import Header from './Header'
import SideBar from './SideBar'
import PBody from './PBody'
import Footer from './Footer'


const HomePage = () => {
    return (
        <div className='container'>
            <Header />
          
            <SideBar />
            <PBody />
            <Footer />

        </div>
    )
}

export default HomePage