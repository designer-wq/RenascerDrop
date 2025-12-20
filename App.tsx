import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import PlayerRegistration from './pages/PlayerRegistration';
import AdminDistribution from './pages/AdminDistribution';
import ItemRegistration from './pages/ItemRegistration';

const App: React.FC = () => {
  return (
    <GameProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/drops" element={<Navigate to="/history" replace />} />
            <Route path="/register" element={<PlayerRegistration />} />
            <Route path="/items" element={<ItemRegistration />} />
            <Route path="/admin" element={<AdminDistribution />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </GameProvider>
  );
};

export default App;