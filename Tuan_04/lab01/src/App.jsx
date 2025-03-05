import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [menu, setMenu] = useState([]);


  useEffect(() => {
   var fn = fetch('https://67c81c2e0acf98d07084e2ae.mockapi.io/menu');
   var fn1 = fn.then((res) => {return(res.json())})
   var fn2 = fn1.then((data)=> {
    setMenu(data);
   })
  }, []); 

  return (
    <ul className='ul_header'>
      {menu.map((item, i) => (
        <li key={i} style={{margin: '15px'}}>{item.name}</li>
      ))}
    </ul>
  );
}

export default App;