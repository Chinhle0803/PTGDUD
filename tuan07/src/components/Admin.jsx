import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { FaRegBell } from 'react-icons/fa';
import './Admin.css';

function Admin() {
  const ad_menu = [
    { img: "/Squares four 1.png", title: 'Dashboard', path: '/' },
    { img: "/Folder.png", title: 'Project', path: '/project' },
    { img: "/Groups.png", title: 'Teams', path: '/teams' },
    { img: "/Pie chart.png", title: 'Analytic', path: '/analytic' },
    { img: "/Chat.png", title: 'Messages', path: '/messages' },
    { img: "/Code.png", title: 'Integrations', path: '/integrations' },
  ];

  return (
    <div className="container">
      <div className="header">
        <div className="hd-Menu">
          <h1 style={{ fontSize: '30px' }}>Dashboard</h1>
          <div className="hd-menu-input">
            <input
              type="text"
              style={{ width: '350px', borderRadius: '30px', color: 'black', textAlign: 'center' }}
              placeholder="Search..."
            />
            <button style={{ background: 'none', border: 'none' }}>
              <CiSearch size={30} />
            </button>
            <FaRegBell size={30} />
            <img src="/Avatar (3).png" alt="avatar" style={{ width: '50px', height: '50px' }} />
          </div>
        </div>
      </div>

      <div className="menu">
        <img src="/Image 1858.png" alt="logo" />
        <ul>
          {ad_menu.map((item, i) => (
            <li key={i} style={{ display: 'flex' }}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active-nav' : 'nav-link'
                }
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 20px',
                  textDecoration: 'none',
                }}
              >
                <img src={item.img} alt={item.title} style={{ width: '20px', height: '20px' }} />
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;