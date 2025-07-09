import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Character, AppState, HouseId } from '../types';
import { ApiService } from '../services/api';

interface AppAction {
  type: string;
  payload?: any;
}

const initialState: AppState = {
  selectedHouse: null,
  favorites: [],
  characters: [],
  loading: false,
  error: null
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  addToFavorites: (characterId: string) => void;
  removeFromFavorites: (characterId: string) => void;
  setSelectedHouse: (house: HouseId | null) => void;
  fetchCharacters: () => Promise<void>;
} | undefined>(undefined);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload, loading: false, error: null };
    case 'SET_SELECTED_HOUSE':
      return { ...state, selectedHouse: action.payload };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites
          : [...state.favorites, action.payload]
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      };
    case 'LOAD_FAVORITES':
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addToFavorites = (characterId: string) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: characterId });
    // Save to localStorage
    const updatedFavorites = [...state.favorites, characterId];
    localStorage.setItem('hp-favorites', JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (characterId: string) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: characterId });
    // Save to localStorage
    const updatedFavorites = state.favorites.filter(id => id !== characterId);
    localStorage.setItem('hp-favorites', JSON.stringify(updatedFavorites));
  };

  const setSelectedHouse = (house: HouseId | null) => {
    dispatch({ type: 'SET_SELECTED_HOUSE', payload: house });
    if (house) {
      localStorage.setItem('hp-selected-house', house);
    } else {
      localStorage.removeItem('hp-selected-house');
    }
  };

  const fetchCharacters = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const characters = await ApiService.fetchCharacters();
      dispatch({ type: 'SET_CHARACTERS', payload: characters });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Unknown error' });
    }
  };

  // Load saved data on mount
  useEffect(() => {
    // Load favorites
    const savedFavorites = localStorage.getItem('hp-favorites');
    if (savedFavorites) {
      try {
        const favorites = JSON.parse(savedFavorites);
        dispatch({ type: 'LOAD_FAVORITES', payload: favorites });
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    }

    // Load selected house
    const savedHouse = localStorage.getItem('hp-selected-house');
    if (savedHouse) {
      dispatch({ type: 'SET_SELECTED_HOUSE', payload: savedHouse });
    }

    // Fetch characters
    fetchCharacters();
  }, []);

  const value = {
    state,
    dispatch,
    addToFavorites,
    removeFromFavorites,
    setSelectedHouse,
    fetchCharacters
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 