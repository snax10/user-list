import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF; 
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    padding: 0 20px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    h1 {
        font-size: 36px; 
        color: #333333;
        margin: 0;
    }

    div > span { 
        font-size: 18px; 
        color: #555555;
    }
`;


export const UserListContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 100px;
    background-color: #F9F9F9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 20px; 
    
    max-height: 800px; 
    overflow-y: auto; 
`;


export const SearchInput = styled.input`
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
        border-color: #007BFF;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

export const UserListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #F1F1F1;
    }
`;

export const UserListLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #333333; 
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

