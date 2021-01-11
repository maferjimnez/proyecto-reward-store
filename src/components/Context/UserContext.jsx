import React, { createContext, useEffect, useState } from 'react';
import { fetchUser } from '../../services/api';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [userData, setUserData] = useState({
        name: '',
		points: 0,
		redeemHistory: []
    });
    
    useEffect(() => {
        fetchUser(userData, setUserData);
        console.log(userData);
     }, []);
     
    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    );
};