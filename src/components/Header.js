import React, { Fragment } from 'react';
import Menu from './Menu';
import Icono from './Icono';

const Header = () => {
    return (      
        <header className="bg-alert">
            <Fragment>
                <div className="casa">
            <Icono/><h1>Home Legs</h1>
                 </div>
            </Fragment>
             
            <Menu/>
            
        </header>
     );
}
 
export default Header; 











