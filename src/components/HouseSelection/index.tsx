import React from 'react';
import { useApp } from '../../context/AppContext';
import { houses } from '../../styles/theme';
import { HouseId } from '../../types';
import {
  ClearButton,
  Container,
  Header,
  HouseAnimal,
  HouseCard,
  HouseFounder,
  HouseGrid,
  HouseName,
  SelectionBadge,
  Subtitle,
  Title,
  Trait,
  TraitsList
} from './styles';

const HouseSelection: React.FC = () => {
  const { state, setSelectedHouse } = useApp();

  const handleHouseSelect = (houseId: HouseId) => {
    if (state.selectedHouse === houseId) {
      setSelectedHouse(null);
    } else {
      setSelectedHouse(houseId);
    }
  };

  const handleClearSelection = () => {
    setSelectedHouse(null);
  };

  return (
    <Container>
      <Header>
        <Title>Choose Your House</Title>
        <Subtitle>
          Select your preferred Hogwarts house to personalize your experience
        </Subtitle>
      </Header>

      <HouseGrid>
        {Object.values(houses).map((house) => (
          <HouseCard
            key={house.id}
            $house={house.id as HouseId}
            $selected={state.selectedHouse === house.id}
            onClick={() => handleHouseSelect(house.id as HouseId)}
          >
            {state.selectedHouse === house.id && (
              <SelectionBadge>✓</SelectionBadge>
            )}
            
            <HouseName>{house.name}</HouseName>
            <HouseAnimal>{house.animal}</HouseAnimal>
            <HouseFounder>Founded by {house.founder}</HouseFounder>
            
            <TraitsList>
              {house.traits.map((trait, index) => (
                <Trait key={index}>{trait}</Trait>
              ))}
            </TraitsList>
          </HouseCard>
        ))}
      </HouseGrid>

      {state.selectedHouse && (
        <ClearButton onClick={handleClearSelection}>
          Clear House Selection
        </ClearButton>
      )}
    </Container>
  );
};

export default HouseSelection; 