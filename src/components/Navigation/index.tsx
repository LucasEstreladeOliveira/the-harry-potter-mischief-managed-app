import React from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { getHouseName } from '../../utils';
import {
  Logo,
  NavContainer,
  NavContent,
  NavHouseBadge,
  NavLink,
  NavLinks
} from './styles';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { state, setSelectedHouse } = useApp();
  
  const isActive = (path: string) => location.pathname === path;
  


  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">Mischief Managed</Logo>
        
        <NavLinks>
          <NavLink to="/" $active={isActive('/')}>
            Characters
          </NavLink>
          <NavLink to="/favorites" $active={isActive('/favorites')}>
            Favorites ({state.favorites.length})
          </NavLink>
          <NavLink to="/house-selection" $active={isActive('/house-selection')}>
            Choose House
          </NavLink>
          
          {state.selectedHouse && (
            <NavHouseBadge 
              $house={state.selectedHouse}
              onClick={() => setSelectedHouse(null)}
              title="Click to change house"
            >
              {getHouseName(state.selectedHouse)}
            </NavHouseBadge>
          )}
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation; 