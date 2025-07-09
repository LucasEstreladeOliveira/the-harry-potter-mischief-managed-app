import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { ApiService } from '../../services/api';
import { Character } from '../../types';
import {
  getCharacterRole,
  getCharacterInitials,
  handleImageError,
  isCharacterFavorite,
  getFavoriteStar
} from '../../utils';
import LoadingSpinner from '../LoadingSpinner';
import { BackButton, CharacterCard, CharacterHeader, CharacterImage, CharacterImageSection, CharacterInfo, CharacterName, Container, ErrorMessage, FavoriteButton, HouseBadge, Image, InfoGrid, InfoItem, InfoSection, Label, PlaceholderImage, SectionTitle, StatusBadge, Value, WandInfo } from './styles';



const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state, addToFavorites, removeFromFavorites } = useApp();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const char = await ApiService.fetchCharacterById(id);
        if (char) {
          setCharacter(char);
        } else {
          setError('Character not found');
        }
      } catch (err) {
        setError('Failed to load character details');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <LoadingSpinner message="Loading character details..." />;
  }

  if (error || !character) {
    return (
      <Container>
        <BackButton to="/">← Back to Characters</BackButton>
        <ErrorMessage>
          <h2>Character Not Found</h2>
          <p>{error || 'The character you are looking for does not exist.'}</p>
        </ErrorMessage>
      </Container>
    );
  }

  const isFavorite = isCharacterFavorite(character.id, state.favorites);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character.id);
    }
  };

  return (
    <Container>
      <BackButton to="/">← Back to Characters</BackButton>
      <CharacterCard>
        <CharacterHeader>
          <CharacterImageSection>
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
                <StatusBadge $alive={character.alive}>
                  {character.alive ? 'Alive' : 'Deceased'}
                </StatusBadge>
              </CharacterName>
              {character.house && character.house !== 'Unknown' && (
                <HouseBadge $house={character.house}>
                  {character.house}
                </HouseBadge>
              )}
            </CharacterInfo>
          </CharacterImageSection>
          
          <FavoriteButton
            $isFavorite={isFavorite}
            onClick={handleFavoriteToggle}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {getFavoriteStar(isFavorite)}
          </FavoriteButton>
        </CharacterHeader>

        <InfoSection>
          <SectionTitle>Basic Information</SectionTitle>
          <InfoGrid>
            <InfoItem>
              <Label>Role</Label>
              <Value>{getCharacterRole(character, true)}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Species</Label>
              <Value>{character.species}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Gender</Label>
              <Value>{character.gender}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Ancestry</Label>
              <Value>{character.ancestry}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Date of Birth</Label>
              <Value>{character.dateOfBirth}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Year of Birth</Label>
              <Value>{character.yearOfBirth || 'Unknown'}</Value>
            </InfoItem>
          </InfoGrid>
        </InfoSection>

        <InfoSection>
          <SectionTitle>Physical Characteristics</SectionTitle>
          <InfoGrid>
            <InfoItem>
              <Label>Eye Colour</Label>
              <Value>{character.eyeColour}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Hair Colour</Label>
              <Value>{character.hairColour}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Wizard</Label>
              <Value>{character.wizard ? 'Yes' : 'No'}</Value>
            </InfoItem>
          </InfoGrid>
        </InfoSection>

        {character.wand && (
          <InfoSection>
            <SectionTitle>Wand</SectionTitle>
            <WandInfo>
              <InfoGrid>
                <InfoItem>
                  <Label>Wood</Label>
                  <Value>{character.wand.wood}</Value>
                </InfoItem>
                <InfoItem>
                  <Label>Core</Label>
                  <Value>{character.wand.core}</Value>
                </InfoItem>
                <InfoItem>
                  <Label>Length</Label>
                  <Value>{character.wand.length ? `${character.wand.length} inches` : 'Unknown'}</Value>
                </InfoItem>
              </InfoGrid>
            </WandInfo>
          </InfoSection>
        )}

        <InfoSection>
          <SectionTitle>Magical Information</SectionTitle>
          <InfoGrid>
            <InfoItem>
              <Label>Patronus</Label>
              <Value>{character.patronus}</Value>
            </InfoItem>
            <InfoItem>
              <Label>Alternate Names</Label>
              <Value>
                {character.alternate_names.length > 0 
                  ? character.alternate_names.join(', ')
                  : 'None'
                }
              </Value>
            </InfoItem>
          </InfoGrid>
        </InfoSection>

        <InfoSection>
          <SectionTitle>Film Information</SectionTitle>
          <InfoGrid>
            <InfoItem>
              <Label>Portrayed by</Label>
              <Value>{character.actor}</Value>
            </InfoItem>
            {character.alternate_actors.length > 0 && (
              <InfoItem>
                <Label>Alternate Actors</Label>
                <Value>{character.alternate_actors.join(', ')}</Value>
              </InfoItem>
            )}
          </InfoGrid>
        </InfoSection>
      </CharacterCard>
    </Container>
  );
};

export default CharacterDetail; 