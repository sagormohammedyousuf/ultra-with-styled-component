import React, {useState, useEffect} from 'react';
import { FaBars,FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {Nav ,
    NavContainer,
    NavLogo , 
    NavIcon ,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLink,
    NavItemBtn,
    NavBtnLink
  } from './Navbar.element'


const Navbar = () => {

  const [click, setClick] = useState(false)
  const [button , setButton] = useState(true)

  const  handleClick = () => setClick(!click)
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  useEffect(() =>{
    showButton()
  },[])

  window.addEventListener('resize', showButton)
  
    return (
        <>
         <IconContext.Provider value={{Color:'#fff'}}>
            <Nav>
                <NavContainer>
                  <NavLogo to='/'>
                      <NavIcon/>
                     ULTRA
                  </NavLogo>
                  <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                  </MobileIcon>
                  <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                      <NavLink to='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to='/services'>Services</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to='/products'>Products</NavLink>
                    </NavItem>
                    
                    <NavItemBtn>
                      {button? (
                        <NavBtnLink to='/sign-up'>
                          <Button primary>SIGN UP</Button>
                        </NavBtnLink>
                      ):(
                        <NavBtnLink to='/sign-up'>
                          <Button  fontBig primary>Sign Up</Button>
                        </NavBtnLink>
                      )}
                    </NavItemBtn>
                  </NavMenu>
                </NavContainer>
            </Nav>  
         
          </IconContext.Provider>
        </>
    );
};

export default Navbar;


