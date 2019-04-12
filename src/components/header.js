import React from 'react';
import Logo from '../css/logo.png'
import Footer from './footer';

const Header = (props) =>{
        return ( 
            <header>
                <Footer/>
                <div className="logo" style={{background:`url(${Logo})`}}></div>
                <input 
                    className="search"
                    onChange={props.keywords}
                    type="text"
                    placeholder="Seperate indgridents by commas..."
                />
            
                <button 
                    className="button"
                    onClick={props.searches}
                    type="button"
                ><i className="fas fa-search" style={{color:'#f0eeed'}}></i></button>
            </header>
        )
}


export default Header;