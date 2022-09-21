import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from "react-router-dom";
import "../../index.css"

export default function Nav() {
    const show = useRef();
    const hide = useRef();
    const menu = useRef();
    const {nums} = useSelector(num => num.product);
    useEffect(() => {
        show.current.onclick = () =>{
            menu.current.style.transition = 'all 5s';
            menu.current.style.opacity = 1;
            menu.current.style.display = 'inline-block';
            show.current.style.display='none';
            hide.current.style.display='inline-block';
        }

        hide.current.onclick = () =>{
            menu.current.style.transition = 'all 5s';
            menu.current.style.opacity = 0;
            menu.current.style.display = 'none';
            show.current.style.display='inline-block';
            hide.current.style.display='none';
        }
    }, [])
    return (
        <nav>
            <div className='container-fluid'>
                <div className="row">
                    <div className="response">
                        <div className='logo'>
                            <img src="./Images/logo.jpg" alt='logo' />
                        </div>
                        <div ref={menu} className='links'>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/Product">Product</NavLink>
                            <NavLink to="/SingleProduct">SingleProduct</NavLink>
                            <NavLink to="/Store">Store</NavLink>
                        </div>
                        <div className='shop response'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <div className="number">
                                <NavLink to="/Store">
                                    <i className="fa-solid fa-basket-shopping"></i>
                                </NavLink>
                                <div className="num"> {nums} </div>
                            </div>
                        </div>
                        <div className="menu">
                        <p ref={show} className="show">
                            <i className="fa-solid fa-bars"></i>
                        </p>

                        <p ref={hide} className="hide">
                            <i className="fa-solid fa-caret-up"></i>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
