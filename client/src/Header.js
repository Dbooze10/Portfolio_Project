import {Link} from "react-router-dom";
import { useContext, useEffect, useState } from "react";

export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch('http:localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        });
    }, []);

    function logout() {
        fetch('http:localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUerInfo(null);
    }

    const username = userInfo?.username;


    return ( 
        <header>
            <a href="/" className="logo">MyBlog</a>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Create new postt</Link>
                        <a onClick = {logout}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                )}
            </nav>
      </header>
    );
}