import React, { useMemo, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { houses } from '../../styles/theme';
import CharacterCard from '../CharacterCard';
import LoadingSpinner from '../LoadingSpinner';
import {
  Controls,
  EmptyMessage,
  FilterButton,
  Header,
  ListCharacterGrid,
  ListContainer,
  ListErrorMessage,
  SearchInput,
  Subtitle,
  Title
} from './styles';

type FilterType = 'all' | 'students' | 'staff' | 'house';

const CharacterList: React.FC = () => {
  const { state } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredCharacters = useMemo(() => {
    let characters = state.characters;

    // Apply house filter
    if (filter === 'house' && state.selectedHouse) {
      characters = characters.filter(char => 
        char.house.toLowerCase() === state.selectedHouse?.toLowerCase()
      );
    } else if (filter === 'students') {
      characters = characters.filter(char => char.hogwartsStudent);
    } else if (filter === 'staff') {
      characters = characters.filter(char => char.hogwartsStaff);
    }

    // Apply search filter
    if (searchTerm) {
      characters = characters.filter(char =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        char.house.toLowerCase().includes(searchTerm.toLowerCase()) ||
        char.actor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return characters;
  }, [state.characters, state.selectedHouse, filter, searchTerm]);

  if (state.loading) {
    return <LoadingSpinner message="Summoning characters from the wizarding world..." />;
  }

  if (state.error) {
    return (
      <ListContainer>
        <ListErrorMessage>
          <h2>Oops! Something went wrong</h2>
          <p>{state.error}</p>
          <p>Please try refreshing the page or check your connection.</p>
        </ListErrorMessage>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <Header>
        <Title>Hogwarts Directory</Title>
        <Subtitle>Explore students and staff from the wizarding world</Subtitle>
      </Header>

      <Controls>
        <SearchInput
          type="text"
          placeholder="Search by name, house, or actor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <FilterButton
          $active={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          All Characters
        </FilterButton>
        
        <FilterButton
          $active={filter === 'students'}
          onClick={() => setFilter('students')}
        >
          Students
        </FilterButton>
        
        <FilterButton
          $active={filter === 'staff'}
          onClick={() => setFilter('staff')}
        >
          Staff
        </FilterButton>
        
        {state.selectedHouse && (
          <FilterButton
            $active={filter === 'house'}
            onClick={() => setFilter('house')}
          >
            {houses[state.selectedHouse as keyof typeof houses]?.name || 'House'}
          </FilterButton>
        )}
      </Controls>

      {filteredCharacters.length === 0 ? (
        <EmptyMessage>
          {searchTerm 
            ? `No characters found matching "${searchTerm}"`
            : 'No characters found with the current filters'
          }
        </EmptyMessage>
      ) : (
        <ListCharacterGrid>
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </ListCharacterGrid>
      )}
    </ListContainer>
  );
};

export default CharacterList; 