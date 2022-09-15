import React, { Fragment } from 'react'
import styled from 'styled-components'

import {ReactComponent as Logo } from "../assets/logo.svg"
import {ReactComponent as ArrowDown} from "../assets/arrow-down_nav.svg"
import {ReactComponent as NavCat} from "../assets/nav-cat.svg"
import {ReactComponent as NavAccount} from "../assets/nav-account.svg"

const Navbar = () => {

    const navLinks = [
        {
            title: "Shop",
            children: [
                "Cat Litter",
                "Gift Cards"
            ]
        },
        {
            title: "About us",
            children: [
                "Our Story",
                "In The Story"
            ]
        },
        {
            title: "Community",
            children: [
                "Blog",
                "Out Rescue"
            ]   
        }
    ]

  return (
    <Wrapper>
        <nav>
            <ul>
                <Logo />
                {navLinks.map((navLink, idx) => 
                     (
                        <div key={idx} >
                            <li className='nav-links'>
                                <div className='select-box'>
                                    <p>{navLink.title}</p>
                                    <ArrowDown/>
                                </div>
                                <div className='navChildren'>
                                    {navLink.children.map(child => 
                                        <>
                                            <p>{child}</p>
                                        </>
                                    )}
                                </div>
                            </li>
                        </div>    
                    )
            )}
            </ul>
            <ul>
                <button className='subscribe-btn'>Subscribe</button>
                <NavCat />
                <NavAccount className='account-ic' />
            </ul>
        </nav>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.header`

    @media (max-width: 700px) {
        .account-ic {
            display: none;
        }
        .nav-links {
            display: none;
        }
    }
    @media (max-width: 475px) {
        .subscribe-btn {
            display: none;
        }
    }

    height: 91px;
    width: 100%;
    padding: 25px 40px 0 40px;

    background: #027747;

    nav {
        display: flex;
        justify-content: space-between;
        
        ul {
            display: flex;
            gap: 38px;
            align-items: center;
            list-style: none;
            
            .navChildren {
                display: none;
                p {
                    padding: 10px 10px;
                    color: #ddad26;
                    border: 2px solid #ddad26;
                    font-size: 14px;
                    background-color: transparent;
                    text-align: center;
                    margin-top: 5px;
                }
            }
        
            .select-box {
                display: flex;
                gap: 10px;
                align-items: center;
            }

            li {
                width: 110px;
                font-family: 'Domine';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 18px;
                text-align: center;
                color: #DDAD26;
            }

            .select-box:hover + .navChildren {
                display: block;
                position: absolute;
            } 

            button {
                padding: 13px 15px;

                font-family: 'Domine';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 18px;
                text-align: center;
                color: #1C1C1C;
                cursor: pointer;

                background: #DDAD26;
                border: 1px solid #DDAD26;
                border-radius: 2px;
            }

            li {
                cursor: pointer;
                a {
                    text-decoration: none;
                    font-family: 'Domine';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 18px;
                    text-align: center;

                    color: #DDAD26;
                }
            }
        }
    }
`