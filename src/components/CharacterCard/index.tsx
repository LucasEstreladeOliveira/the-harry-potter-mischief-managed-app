import React from 'react';
import { useApp } from '../../context/AppContext';
import { Character } from '../../types';
import {
  getCharacterRole,
  getCharacterInitials,
  handleImageError,
  isCharacterFavorite,
  getFavoriteStar
} from '../../utils';
import { 
  Card, 
  CardHeader, 
  CharacterImage, 
  CharacterInfo, 
  CharacterName, 
  FavoriteButton, 
  HouseBadge, 
  Image, 
  InfoRow, 
  Label, 
  PlaceholderImage, 
  StatusIndicator, 
  Value, 
  ViewDetailsButton 
} from './styles';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { state, addToFavorites, removeFromFavorites } = useApp();
  const isFavorite = isCharacterFavorite(character.id, state.favorites);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character.id);
    }
  };

  return (
    <Card $house={character.house}>
      <CardHeader>
        <CharacterImage>
          {character.image ? (
            <Image
              src={character.image} 
              alt={character.name}
              onError={handleImageError}
            />
          ) : null}
          <PlaceholderImage style={{ display: character.image ? 'none' : 'flex' }}>
            {getCharacterInitials(character.name)}
          </PlaceholderImage>
        </CharacterImage>
        
        <CharacterInfo>
          <CharacterName>
            {character.name}
            <StatusIndicator $alive={character.alive} title={character.alive ? 'Alive' : 'Deceased'} />
          </CharacterName>
          
          <InfoRow>
            <Label>Role:</Label>
            <Value>{getCharacterRole(character)}</Value>
          </InfoRow>
          
          <InfoRow>
            <Label>Actor:</Label>
            <Value>{character.actor}</Value>
          </InfoRow>
          
          {character.house && character.house !== 'Unknown' && (
            <HouseBadge $house={character.house}>
              {character.house}
            </HouseBadge>
          )}
        </CharacterInfo>
        
        <FavoriteButton
          $isFavorite={isFavorite}
          onClick={handleFavoriteToggle}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {getFavoriteStar(isFavorite)}
        </FavoriteButton>
      </CardHeader>

      <ViewDetailsButton to={`/character/${character.id}`}>
        View Details
      </ViewDetailsButton>
    </Card>
  );
};

export default CharacterCard; 