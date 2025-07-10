import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { getHouseName, isMobile } from '../../utils';
import {
  Logo,
  NavContainer,
  NavContent,
  NavHouseBadge,
  NavLink,
  NavLinks,
  MobileMenuToggle,
  MobileMenu,
  MobileMenuLinks,
  MobileMenuBackdrop
} from './styles';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { state, setSelectedHouse } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobileDevice = isMobile();
  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBackdropClick = () => {
    closeMobileMenu();
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/" onClick={closeMobileMenu}>Mischief Managed</Logo> 
      {
        isMobileDevice ? 
        <>
        <MobileMenuToggle onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuToggle>

        <MobileMenu $isOpen={isMobileMenuOpen}>
            <MobileMenuLinks $isOpen={isMobileMenuOpen}>
              <NavLink to="/" $active={isActive('/')} onClick={closeMobileMenu}>
                Characters
              </NavLink>
              <NavLink to="/favorites" $active={isActive('/favorites')} onClick={closeMobileMenu}>
                Favorites ({state.favorites.length})
              </NavLink>
              <NavLink to="/house-selection" $active={isActive('/house-selection')} onClick={closeMobileMenu}>
                Choose House
              </NavLink>
              
              {state.selectedHouse && (
                <NavHouseBadge 
                  $house={state.selectedHouse}
                  onClick={() => {
                    setSelectedHouse(null);
                    closeMobileMenu();
                  }}
                  title="Click to change house"
                >
                  {getHouseName(state.selectedHouse)}
                </NavHouseBadge>
              )}
            </MobileMenuLinks>
          </MobileMenu>
        </>
        :
        <NavLinks>
          <NavLink to="/" $active={isActive('/')} onClick={closeMobileMenu}>
            Characters
          </NavLink>
          <NavLink to="/favorites" $active={isActive('/favorites')} onClick={closeMobileMenu}>
            Favorites ({state.favorites.length})
          </NavLink>
          <NavLink to="/house-selection" $active={isActive('/house-selection')} onClick={closeMobileMenu}>
            Choose House
          </NavLink>
          
          {state.selectedHouse && (
            <NavHouseBadge 
              $house={state.selectedHouse}
              onClick={() => {
                setSelectedHouse(null);
                closeMobileMenu();
              }}
              title="Click to change house"
            >
              {getHouseName(state.selectedHouse)}
            </NavHouseBadge>
          )}
        </NavLinks>
      }
      </NavContent>

      {isMobileDevice && (
        <>
          <MobileMenuBackdrop $isOpen={isMobileMenuOpen} onClick={handleBackdropClick} />
        </>
      )}
    </NavContainer>
  );
};

export default Navigation; 