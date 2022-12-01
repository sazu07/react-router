import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/friends'>Friend</CustomLink>
                <CustomLink to='/post'>Post</CustomLink>
                <CustomLink to='/post/new'>Nested</CustomLink>
                
            </nav>
        </div>
    );
};

export default Header;