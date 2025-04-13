import { useEffect, useState } from 'react';
import './Admin.css'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import DataTable from 'react-data-table-component';
function Admin() {
    const [cards, setCards] = useState([]);

    const ad_menu = [
        {
            img: " /Squares four 1.png",
            title: 'Dashboard'
        },
        {
            img: " /Folder.png",
            title: 'Project'
        },
        {
            img: " /Groups.png",
            title: 'Teams'
        },
        {
            img: " /Pie chart.png",
            title: 'Analatic'
        },
        {
            img: " /Chat.png",
            title: 'Messages'
        },
        {
            img: " /Code.png",
            title: 'Integreations'
        }]
    // const card = [
    //     {
    //         title: 'Turnover',
    //         cost: '92,405',
    //         change: 5.39,
    //         img: ' /Button 1509.png'
    //     },
    //     {
    //         title: 'Profit',
    //         cost: '32,218',
    //         change: 5.39,
    //         img: ' /Button 1529.png'
    //     },
    //     {
    //         title: 'New Customer',
    //         cost: '298',
    //         change: 6.84,
    //         img: ' /Button 1530.png'
    //     },
    // ]
    // tạo cột và hàng cho Datatable

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
        {
            name: 'Company',
            selector: row => row.company,
            sortable: true,
        },
        {
            name: 'Order Value',
            selector: row => row.value,
            sortable: true,
        },
        {
            name: 'Order Date',
            selector: row => row.date,
            sortable: true,
        },
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


    useEffect(() => {
        fetch('https://67c81c2e0acf98d07084e2ae.mockapi.io/card')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);
    console.log(cards)

    const data = [
        { name: "Elizabeth Lee", company: "AvatarSystems", value: "$359", date: "10/07/2023", status: "New", avatar: "/Avatar (1).png" },
        { name: "Carlos Garcia", company: "SmoozeShift", value: "$747", date: "24/07/2023", status: "New", avatar: "/Avatar (2).png" },
        { name: "Elizabeth Bailey", company: "Prime Time Telecom", value: "$564", date: "08/08/2023", status: "In-progress", avatar: "/Avatar (3).png" },
        { name: "Ryan Brown", company: "OmniTech Corporation", value: "$541", date: "31/08/2023", status: "In-progress", avatar: "/Avatar (4).png" },
        { name: "Ryan Young", company: "DataStream Inc.", value: "$769", date: "01/05/2023", status: "Completed", avatar: "/Avatar (5).png" },
        { name: "Hailey Adams", company: "FlowRush", value: "$922", date: "10/06/2023", status: "Completed", avatar: "/Avatar 313.png" },
    ];

    const statusStyles = {
        "New": "bg-green-100 text-green-700",
        "In-progress": "bg-yellow-100 text-yellow-700",
        "Completed": "bg-blue-100 text-blue-700"
    };


    const [select, setSelect] = useState(0)
    const [isSelect, setIsselect] = useState(false)
    // useEffect(()=> {
    //     isSelect ? {backgroundColor: 'Pink'} : {}
    // }, [isSelect])
    const handleClick = () => {
        setIsselect(true)
    }
    // var check = false
    // if(card[0].change > 0) check = true
    // console.log(check)
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="hd-Menu">
                        <h1 style={{ fontSize: '30px' }}>Dashboard</h1>
                        <div className='hd-menu-input'>
                            <input type="text" name="" id="" style={{ width: '350px', borderRadius: '30px', color: 'black', textAlign: 'center' }} placeholder='Search...' />
                            <button style={{ background: 'none', border: 'none' }}><CiSearch size={40} style={{ marginTop: '25px' }} /></button>
                            <FaRegBell size={40} />
                            <img src=" /Avatar (3).png" alt="" style={{ width: '50px', height: '50px' }} />
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <img src=" /Image 1858.png" alt="" />
                    <ul >
                        {
                            ad_menu.map((item, i) => (
                                <li key={i}
                                    onClick={() => { setSelect(i) }}
                                    style={{
                                        backgroundColor: select === i ? 'rgb(228, 97, 169)' : 'White',
                                        color: select === i ? 'white' : 'black',
                                        borderRadius: '35px',
                                        textAlign: 'left'
                                    }}
                                >
                                    <div style={{ display: 'flex' }}>
                                        <img src={item.img} alt="" style={{ margin: '5px' }} />
                                        {item.title}
                                    </div>

                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className="content">
                    <div style={{ display: 'flex' }}>
                        <img src="/Squares four 1.png" alt="" />
                        <h4 style={{ color: 'black', padding: "0px", margin: '0px' }}>Overview</h4>
                    </div>

                    {cards.length > 0 ? (
                        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
                            {cards.map((card, i) => (
                                <li key={i} style={{
                                    backgroundColor: i === 0 ? 'rgb(235, 197, 218)' : 'rgb(198, 234, 250)',
                                    width: '300px',
                                    height: '150px',
                                    borderRadius: '10px',
                                }}>
                                    <div style={{ margin: 'auto 10px' }}>
                                        <h4>{card.title}</h4>
                                        <div style={{ display: 'flex' }}>
                                            <h3>${card.cost}</h3>
                                            <img src={card.img} alt="" style={{ margin: 'auto', marginRight: '10px' }} />
                                        </div>
                                        <div>
                                            <h5 style={{
                                                color: card.change >= 0 ? 'green' : 'blue',
                                                display: 'inline'
                                            }}>
                                                <IoTriangle />
                                                {card.change} <label style={{ color: 'black' }}> period of change</label>
                                            </h5>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="footer">
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img src=" /Squares four 1.png" alt="" />
                            <h4 style={{ color: 'black', padding: "0px", margin: '0px' }}>Detailed report</h4>
                        </div>
                        <div className="p-4">
                            <DataTable
                                columns={columns}
                                data={data}
                                pagination
                                highlightOnHover
                                selectableRows= {false}
                                responsive
                                className="border border-gray-200 rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Admin;