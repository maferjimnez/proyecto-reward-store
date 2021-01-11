import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext'
import styled from "styled-components";
//assets
import coinIcon from '../images/coin.svg';
import variables from '../../../styles/variables';

function UserName () {
    const [userData] = useContext(UserContext);

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
    width: 13%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        width: 100%;
        border-top: 1px solid ${variables.darkerGray};
        padding-top: 6px;
        justify-content: flex-end;

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