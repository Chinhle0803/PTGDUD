import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin'
import Dashboard from './page/Dashboard';
import Project from './page/Project';
import Team from './page/Team';
import Analatic from './page/Analytic';
import Messages from './page/Messages';
import Integreations from './page/Integartions';
import './App.css'

function App() {
  return (
    <div>
      <h1 className="text-4xl text-red-500 font-bold">Hello Tailwind!</h1>
      <Routes>
        <Route path="/*" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="project" element={<Project />} />
          <Route path="teams" element={<Team />} />
          <Route path="analytic" element={<Analatic />} />
          <Route path="messages" element={<Messages />} />
          <Route path="integrations" element={<Integreations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;