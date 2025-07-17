import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import type { User } from '../../redux/users/types/users.types';
import UserDetailCard from '../../components/UserDetailCard/UserDetailCard';
import { BackButton, DetailsContainer } from './UserDetail.style';

export function UserDetail() {
    const { id } = useParams<{ id: string }>(); 
    const users = useSelector((state: RootState) => state.users.users); 
    const user = users.find((user: User) => user.id === Number(id)); 
    
    if (!user) return <div>Usuário não encontrado.</div>;

    return (
        <DetailsContainer>
            <BackButton to="/">Voltar</BackButton>
            <UserDetailCard user={user} />
        </DetailsContainer>
    );
}
