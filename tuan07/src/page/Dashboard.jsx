import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { IoTriangle } from 'react-icons/io5';

function Dashboard() {
  
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);



  const columns = [
    {
      name: '',
      cell: () => <input type="checkbox" />,
      width: '60px',
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {

      name: 'Customer Name',
      selector: row => row.name,
      cell: row => (
        <div className="flex items-center gap-3">
          <img src={row.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
          <span className="font-medium text-gray-800">{row.name}</span>
        </div>
      ),
      sortable: true,
      
    },
    { name: 'Company', selector: row => row.company, sortable: true },
    { name: 'Order Value', selector: row => row.value, sortable: true },
    { name: 'Order Date', selector: row => row.date, sortable: true },
    {
      name: 'Status',
      selector: row => row.status,
      cell: row => (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[row.status]}`}>
          {row.status}
        </span>
      ),
      sortable: true,
    },
  ];

  const statusStyles = {
    New: 'bg-green-100 text-green-700',
    'In-progress': 'bg-yellow-100 text-yellow-700',
    Completed: 'bg-blue-100 text-blue-700',
  };

  useEffect(() => {
    fetch('https://67c81c2e0acf98d07084e2ae.mockapi.io/card')
      .then(res => res.json())
      .then(data => {
        console.log('Cards:', data);
        setCards(data);
      })
      .catch(err => console.error('Error fetching cards:', err));

    fetch('https://67c81c2e0acf98d07084e2ae.mockapi.io/data')
      .then(res => res.json())
      .then(data => {
        console.log('Data:', data);
        setData(data);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="content">
      <div style={{ display: 'flex' }}>
        <img src="/Squares four 1.png" alt="overview" />
        <h4 style={{ color: 'black', padding: 0, margin: 0 }}>Overview</h4>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        {cards.map((card, i) => (
          <li
            key={i}
            style={{
              backgroundColor: i === 0 ? 'rgb(235, 197, 218)' : 'rgb(198, 234, 250)',
              width: '300px',
              height: '150px',
              borderRadius: '10px',
            }}
          >
            <div style={{ margin: 'auto 10px' }}>
              <h4>{card.title}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>${card.cost}</h3>
                <img src={card.img} alt={card.title} style={{ marginRight: '10px' }} />
              </div>
              <div>
                <h5 style={{ color: card.change >= 0 ? 'green' : 'blue', display: 'inline' }}>
                  <IoTriangle /> {card.change} <label style={{ color: 'black' }}> period of change</label>
                </h5>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <img src="/Squares four 1.png" alt="report" />
          <h4 style={{ color: 'black', padding: 0, margin: 0 }}>Detailed report</h4>
        </div>
        <div className="p-4">
          <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            selectableRows={false}
            responsive
            className="border border-gray-200 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;