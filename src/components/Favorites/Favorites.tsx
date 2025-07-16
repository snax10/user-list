import { useDispatch, useSelector } from 'react-redux';
import type { User } from '../../redux/users/types/users.types';
import type { RootState } from '../../redux/store';
import { removeFavorite } from '../../redux/fevorites/actions';
import {
    FavoritesContainer,
    FavoritesTitle,
    FavoritesList,
    FavoritesItem
} from './Favorites.style';
import { FaTrash } from 'react-icons/fa';

export function Favorites() {
    const dispatch = useDispatch();
    const favorites: User[] = useSelector((state: RootState) => state.favorites);

    const handleRemoveFavorite = (id: number) => {
        dispatch(removeFavorite(id));
    };

    return (
        <FavoritesContainer>
            <FavoritesTitle>Usuários Favoritos</FavoritesTitle>
            {favorites.length === 0 ? (
                <p>Nenhum usuário favorito adicionado.</p>
            ) : (
                <FavoritesList>
                    {favorites.map(({ id, name }: User) => (
                        <FavoritesItem key={id}>
                            <span>{name}</span>
                            <FaTrash
                                onClick={() => handleRemoveFavorite(id)}
                                style={{ cursor: 'pointer', color: '#dc3545' }}
                                title="Remover Favorito"
                            />
                        </FavoritesItem>
                    ))}
                </FavoritesList>
            )}
        </FavoritesContainer>
    );
}
