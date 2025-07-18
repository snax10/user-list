import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BackButton = styled(Link)`
    display: inline-block;
    margin: 20px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    
    &:hover {
        background-color: #0056b3;
    }
`;