import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { IoTriangle } from 'react-icons/io5';
import './Dashboard.css'; // Giữ file CSS hiện tại

function Dashboard() {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State cho modal
  const [newUser, setNewUser] = useState({
    name: '',
    company: '',
    value: '',
    date: '',
    status: 'New',
    avatar: '/default-avatar.png', // Avatar mặc định
  });
  const [isLoading, setIsLoading] = useState(true); // State cho loading
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' }); // State cho thông báo

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
    {
      name: 'Actions',
      cell: row => (
        <button
          onClick={() => {
            setNewUser(row); // Điền dữ liệu người dùng vào modal
            setIsModalOpen(true);
          }}
          className="text-blue-600 hover:underline"
        >
          Edit
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const statusStyles = {
    New: 'bg-green-100 text-green-700',
    'In-progress': 'bg-yellow-100 text-yellow-700',
    Completed: 'bg-blue-100 text-blue-700',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const cardRes = await fetch('https://67c81c2e0acf98d07084e2ae.mockapi.io/card');
        const cardData = await cardRes.json();
        setCards(cardData);

        const dataRes = await fetch('https://67c81c2e0acf98d07084e2ae.mockapi.io/data');
        const tableData = await dataRes.json();
        setData(tableData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setNotification({ show: true, message: 'Failed to fetch data!', type: 'error' });
        setTimeout(() => {
          setNotification({ show: false, message: '', type: 'success' });
        }, 3000);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Xử lý thay đổi input trong modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  // Xử lý gửi form (POST hoặc PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = newUser.id
        ? `https://67c81c2e0acf98d07084e2ae.mockapi.io/data/${newUser.id}`
        : 'https://67c81c2e0acf98d07084e2ae.mockapi.io/data';
      const method = newUser.id ? 'PUT' : 'POST';
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const updatedUser = await response.json();
      setData(prev =>
        newUser.id
          ? prev.map(item => (item.id === newUser.id ? updatedUser : item))
          : [...prev, updatedUser]
      );
      setIsModalOpen(false);
      setNewUser({
        name: '',
        company: '',
        value: '',
        date: '',
        status: 'New',
        avatar: '/default-avatar.png',
      });
      setNotification({
        show: true,
        message: newUser.id ? 'User updated successfully!' : 'User added successfully!',
        type: 'success',
      });
      setTimeout(() => {
        setNotification({ show: false, message: '', type: 'success' });
      }, 3000);
    } catch (err) {
      console.error('Error saving user:', err);
      setNotification({ show: true, message: 'Failed to save user!', type: 'error' });
      setTimeout(() => {
        setNotification({ show: false, message: '', type: 'success' });
      }, 3000);
    }
  };

  if (isLoading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="dashboard-content">
      {/* Tiêu đề Overview */}
      <div className="flex items-center gap-2">
        <img src="/Squares four 1.png" alt="overview" />
        <h4 className="text-black m-0 p-0">Overview</h4>
      </div>

      {/* Danh sách card */}
      <ul className="flex justify-around list-none mt-4">
        {cards.map((card, i) => (
          <li
            key={i}
            className={`card-item ${i === 0 ? 'bg-pink-100' : 'bg-blue-100'}`}
          >
            <div className="mx-2 my-auto">
              <h4>{card.title}</h4>
              <div className="flex justify-between">
                <h3>${card.cost}</h3>
                <img src={card.img} alt={card.title} className="mr-2" />
              </div>
              <div>
                <h5 className={`inline ${card.change >= 0 ? 'text-green-600' : 'text-blue-600'}`}>
                  <IoTriangle className="inline" /> {card.change}
                  <span className="text-black"> period of change</span>
                </h5>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Tiêu đề Detailed Report */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <img src="/Squares four 1.png" alt="report" />
          <h4 className="text-black m-0 p-0">Detailed report</h4>
        </div>

        {/* Nút Add User */}
        <div className="my-4">
          <button
            onClick={() => {
              setNewUser({
                name: '',
                company: '',
                value: '',
                date: '',
                status: 'New',
                avatar: '/default-avatar.png',
              }); // Reset form khi thêm mới
              setIsModalOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add User
          </button>
        </div>

        {/* Bảng dữ liệu */}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {newUser.id ? 'Edit User' : 'Add New User'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  value={newUser.company}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Order Value</label>
                <input
                  type="number"
                  name="value"
                  value={newUser.value}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Order Date</label>
                <input
                  type="date"
                  name="date"
                  value={newUser.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  value={newUser.status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  {newUser.id ? 'Update User' : 'Add User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Thông báo */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 px-4 py-2 rounded-md shadow-lg animate-fade-in-out flex items-center gap-2 ${
            notification.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default Dashboard;