import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import ActivityCenter from './components/ActivityCenter';
import Calendar from './components/Calendar';
import EventDetail from './components/EventDetail';
import News from './components/News';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/activity-center" element={<ActivityCenter />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;