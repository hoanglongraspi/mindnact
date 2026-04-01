import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import ActivityCenter from './components/ActivityCenter';
import Calendar from './components/Calendar';
import EventDetail from './components/EventDetail';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/activity-center" element={<ActivityCenter />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;