import React, { useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import CharacterCard from '../CharacterCard';
import {
  CharacterGrid,
  Container,
  EmptyIcon,
  EmptyMessage,
  Header,
  Subtitle,
  Title
} from './styles';

const Favorites: React.FC = () => {
  const { state } = useApp();

  const favoriteCharacters = useMemo(() => {
    return state.characters.filter(character => 
      state.favorites.includes(character.id)
    );
  }, [state.characters, state.favorites]);

  return (
    <Container>
      <Header>
        <Title>Your Favorites</Title>
        <Subtitle>
          {favoriteCharacters.length === 0 
            ? "You haven't added any favorites yet"
            : `You have ${favoriteCharacters.length} favorite character${favoriteCharacters.length !== 1 ? 's' : ''}`
          }
        </Subtitle>
      </Header>

      {favoriteCharacters.length === 0 ? (
        <EmptyMessage>
          <EmptyIcon>★</EmptyIcon>
          <h3>No Favorites Yet</h3>
          <p>Start exploring characters and add them to your favorites!</p>
        </EmptyMessage>
      ) : (
        <CharacterGrid>
          {favoriteCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </CharacterGrid>
      )}
    </Container>
  );
};

export default Favorites; 