import React, { useEffect } from "react";
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = (props)=> { 
    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(res=> {
                console.log('LogOut.js ln:9 props', props);
                localStorage.removeItem("token");
                localStorage.removeItem("role", res.data.role);
                localStorage.removeItem("username", res.data.username);
                props.history.push('/login');
            });
        
    }, []);
    
    return(<div></div>);
}

export default Logout;