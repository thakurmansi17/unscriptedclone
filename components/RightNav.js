import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-top: 15px;
  li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  &:hover {
    color: #fee000;
  }
}
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:  #fee000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding: 8rem 3rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
      font-size: 20px;
      align-self: flex-start;
      margin-bottom: 20px;
      &:hover{
          color:black;
      }
    }
  }
`;
const Button = styled.button`
  padding: 0.5rem 1.7rem;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: black;
  color: white;
  border-radius: 30px;
  border-style: solid;
  margin-right: 10px;
  &:hover {
    background-color: white;
    color: black;
  }
    @media (max-width: 768px) {
    background-color:  #fee000;
    color:black;
    padding:15px;
    margin:40px 0;
    border-color: black;
    &:hover{
        border: none;
    }
  }
`;
const Button1 = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: #fee000;
  border-radius: 30px;
  border-style: none;
  @media (max-width: 768px) {
   padding:20px;
  background-color: black;
  color: white;
  &:hover{
      color:gray;
  }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Shows</li>
      <li>About Us</li>
      <Button>LOG IN</Button>
      <Button1>SUBSCRIBE</Button1>
    </Ul>
  )
}

export default RightNav
