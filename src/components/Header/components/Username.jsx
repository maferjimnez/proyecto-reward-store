import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext'
import styled from "styled-components";
//assets
import coinIcon from '../images/coin.svg';
import variables from '../../../styles/variables';

function UserName () {
   const {userData} = useContext(UserContext);

    return(
        <UserInfo>
            <p>{userData.name}</p>
            <UserCoins>
                <span>{userData.points}</span>
                <img src={coinIcon} alt="Ilustración de moneda"/>
            </UserCoins>
        </UserInfo>
    );
};

const UserInfo = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px){
        width: 13%;

        p{
            margin-right: 15px;
        }
    }
`;

const UserCoins = styled.div`
    padding: 5px 10px;
    border-radius: 20px;
    background-color: ${variables.gray};
    display: flex;
    align-items: center;

    span{
        margin-right: 5px;
    }
`;

export default UserName;