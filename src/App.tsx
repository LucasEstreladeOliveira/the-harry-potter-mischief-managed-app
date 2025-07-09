import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Favorites from './components/Favorites';
import HouseSelection from './components/HouseSelection';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Router>
        <div className="app">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<CharacterList />} />
              <Route path="/character/:id" element={<CharacterDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/house-selection" element={<HouseSelection />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App; 