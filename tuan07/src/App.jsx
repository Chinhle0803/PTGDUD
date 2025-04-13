import './App.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Dashboard from './page/Dashboard';
import Project from './page/Project';
import Teams from './page/Team';
import Analytic from './page/Analytic';
import Messages from './page/Messages';
import Integrations from './page/Integartions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route index element={<Dashboard />} /> {/* Mặc định */}
        <Route path="project" element={<Project/>} />
        <Route path="teams" element={<Teams />} />
        <Route path="analytic" element={<Analytic />} />
        <Route path="messages" element={<Messages />} />
        <Route path="integrations" element={<Integrations />} />
      </Route>
    </Routes>
  );
}

export default App;
