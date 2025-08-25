import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import profile from './profile.png'
import banner from './banner.png'
import Button from '../../Components/Button';

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background: #f5f5f8;
    min-height: 100vh;
    font-family: 'Cinzel', serif;
`
const UserCard = styled.article`
    background: linear-gradient(135deg, #2e1a47, #462769);
    color: #f3e9d2;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    padding: 24px;
    width: 320px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 28px rgba(0,0,0,0.6);
    }
    img.banner {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 12px;
        margin-bottom: 16px;
    }
    img.profile {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid #d4af37; /* dourado medieval */
        margin-bottom: 16px;
    }
    h2 {
        margin: 0;
        font-size: 1.6rem;
        font-weight: bold;
        color: #ffd700;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }
    p {
        margin-top: 8px;
        font-size: 0.9rem;
        color: #e0d4ff;
        font-style: italic;
    }

`



function StateInitialization() {
    const [user, setUser] = useState({
 
    });

    const newUser = {
        name:'Frodo',
        email:'frodo@gmail.com',
        images: [profile, banner]
    }

    const login = () => {
        setUser(newUser);
    }
    return (
        <Main>
            <UserCard>
                {user.email && (
                    <div className="data">
                        <img src={user.images[1]} alt="Banner" className='banner'/>
                        <img src={user.images[0]} alt="Profile" className='profile'/>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                )}

                <Button onClick={login}>Log the user in</Button>
            </UserCard>
        </Main>
  )
}

export default StateInitialization