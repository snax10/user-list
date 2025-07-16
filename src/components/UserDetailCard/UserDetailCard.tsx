import React from 'react';
import type { User } from '../../redux/users/types/users.types';
import { CardContainer, ContainerImage, UserImage } from '../UserDetailCard/UserDetailCard.style';

interface UserDetailCardProps {
    user: User;
}

class UserDetailCard extends React.Component<UserDetailCardProps> {
    render() {
        const { user } = this.props; 

        return (
            <CardContainer>
                <ContainerImage>
                    <UserImage src={`https://randomuser.me/api/portraits/men/${user.id % 100}.jpg`} alt={user.name} />
                </ContainerImage>
                <h2>{user.name}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Telefone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <h3>Endereço:</h3>
                <p>{user?.address?.suite} {user?.address?.street}, {user?.address?.city} - {user?.address?.zipcode}</p>
                <h3>Empresa:</h3>
                <p><strong>Nome:</strong> {user?.company?.name}</p>
                <p><strong>Frase de impacto:</strong> {user?.company?.catchPhrase}</p>
                <p><strong>Atividades:</strong> {user?.company?.bs}</p>
            </CardContainer>
        );
    }
}

export default UserDetailCard;
