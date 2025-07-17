import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { fetchUsersRequest } from '../../redux/users/actions';
import type { User } from '../../redux/users/types/users.types';
import { addFavorite, removeFavorite } from '../../redux/fevorites/actions';
import { UserListContainer, UserListItem, UserListLink, SearchInput, Header } from './UserList.style';
import { Favorites } from '../../components/Favorites/Favorites';
import { FaSpinner, FaStar, FaHeart } from 'react-icons/fa';
import { Modal } from '../../components/Modal/Modal';

export function UserList() {
    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const { users, loading } = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);

    const filteredUsers = users.filter((user: User) => user.name.toLowerCase().includes(search.toLowerCase()));

    const handleToggleFavorite = (user: User) => {
        const isFavorite = favorites.find(favorite => favorite.id === user.id);
        if (isFavorite) {
            dispatch(removeFavorite(user.id)); 
        } else {
            dispatch(addFavorite(user));
        }
    };

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    if (loading) return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
            <FaSpinner style={{ marginRight: '10px', animation: 'spin 1s linear infinite', color: '#007bff', fontSize: '3rem' }} />
        </div>
    );

    return (
        <>
            <Header>
                <h1>Lista de usuários</h1>
                <SearchInput
                    type="text"
                    placeholder="Pesquisar usuário"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                {
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FaHeart
                            style={{ cursor: 'pointer', color: 'red', fontSize: '24px', marginRight: '5px' }}
                             onClick={() => setIsModalOpen(true)}
                            title="Ver Favoritos"
                        />
                        <span>{favorites.length}</span>
                    </div>
                }
            </Header>
            {
                !filteredUsers.length ? (
                    <div>Nenhum usuário encontrado.</div>
                ) : (
                <UserListContainer>
                    <ul>
                        {filteredUsers.map(({ id, name, email, phone }: User) => (
                            <UserListItem key={id}>
                                <UserListLink to={`/user/${id}`}>{name} - {email} - {phone}</UserListLink>
                                <FaStar
                                    style={{
                                        cursor: 'pointer',
                                        color: favorites.find(favorite => favorite.id === id) ? '#FFD700' : '#ccc'
                                    }}
                                    onClick={() => handleToggleFavorite({id, name, email, phone})}
                                    title={favorites.find(favorite => favorite.id === id) ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
                                />
                            </UserListItem>
                        ))}
                    </ul>
                </UserListContainer>
                )
            }

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Favorites />
            </Modal>
        </>
    );
}
