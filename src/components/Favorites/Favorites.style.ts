import styled from 'styled-components';

export const FavoritesContainer = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: auto;

    p {
        color: #555;
        font-size: 16px;
        text-align: center;
    }
`;

export const FavoritesTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
`;

export const FavoritesList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const FavoritesItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: background-color 0.3s;

    span { 
        color: green;
    }

    &:hover {
        background-color: #f1f1f1;
    }
`;

export const RemoveFavoriteButton = styled.button`
    padding: 8px 12px;
    background-color: transparent;
    color: #dc3545;
    border: 1px solid #dc3545;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: #dc3545;
        color: white;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(220, 53, 69, 0.5);
    }
`;
