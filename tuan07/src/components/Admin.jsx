import { useEffect, useState } from 'react';
import './Admin.css'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
function Admin() {

    const ad_menu = [
        {
            img: "../public/Squares four 1.png",
            title: 'Dashboard'
        },
        {
            img: "../public/Folder.png",
            title: 'Project'
        },
        {
            img: "../public/Groups.png",
            title: 'Teams'
        },
        {
            img: "../public/Pie chart.png",
            title: 'Analatic'
        },
        {
            img: "../public/Chat.png",
            title: 'Messages'
        },
        {
            img: "../public/Code.png",
            title: 'Integreations'
        }]
    const card = [
        {
            title: 'Turnover',
            cost: '92,405',
            change: 5.39,
            img: '../public/Button 1509.png'
        },
        {
            title: 'Profit',
            cost: '32,218',
            change: 5.39,
            img: '../public/Button 1529.png'
        },
        {
            title: 'New Customer',
            cost: '298',
            change: 6.84,
            img: '../public/Button 1530.png'
        },
    ]
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
                        <h2>Dashboard</h2>
                        <div className='hd-menu-input'>
                            <input type="text" name="" id="" style={{ width: '250px', borderRadius: '10px' }} placeholder='Search...' />
                            <button style={{ background: 'none', border: 'none' }}><CiSearch size={20} style={{ marginTop: '25px' }} /></button>
                            <FaRegBell size={20} />
                            <img src="../public/Avatar (3).png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <img src="../public/Image 1858.png" alt="" />
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
                        <img src="../public/Squares four 1.png" alt="" />
                        <h4 style={{ color: 'black', padding: "0px", margin: '0px' }}>Overview</h4>
                    </div>
                    <div>
                        {/* <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
                            {card.map((item, i) => (
                                <li key={i} style={{ width: '200px', height: "100px", borderRadius: '19px', backgroundColor: '#69ddba', textAlign: 'center' }}>{item}</li>
                            ))}
                        </ul> */}

                        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
                            <li style={{
                                backgroundColor: 'rgb(235, 197, 218)',
                                width: '300px',
                                height: '150px',
                                borderRadius: '10px',

                            }}>
                                
                                <div style={{ margin: 'auto 10px' }}>
                                    <h4>{card[0].title}</h4>
                                    <div style={{display: 'flex'}}>
                                        <h3>${card[0].cost}</h3>
                                        <img src={card[0].img} alt="" style={{margin: 'auto', marginRight: '10px'}}/>
                                    </div>
                                    <div>
                                        <h5 style={{
                                            color: card[0].change >= 0 ? 'green' : 'blue',
                                            display: 'inline'
                                        }}><IoTriangle />{card[0].change} <label style={{ color: 'black' }}> period of change</label> </h5>
                                    </div>
                                </div>
                            </li>
                            <li style={{
                                backgroundColor: 'rgb(198, 234, 250)',
                                width: '300px',
                                height: '150px',
                                borderRadius: '10px',

                            }}>
                                
                                <div style={{ margin: 'auto 10px' }}>
                                    <h4>{card[1].title}</h4>
                                    <div style={{display: 'flex'}}>
                                        <h3>${card[1].cost}</h3>
                                        <img src={card[1].img} alt="" style={{margin: 'auto', marginRight: '10px'}}/>
                                    </div>
                                    <div>
                                        <h5 style={{
                                            color: card[1].change >= 0 ? 'green' : 'blue',
                                            display: 'inline'
                                        }}><IoTriangle />{card[1].change} <label style={{ color: 'black' }}> period of change</label> </h5>
                                    </div>
                                </div>
                            </li>
                            <li style={{
                                backgroundColor: 'rgb(198, 234, 250)',
                                width: '300px',
                                height: '150px',
                                borderRadius: '10px',

                            }}>
                                
                                <div style={{ margin: 'auto 10px' }}>
                                    <h4>{card[2].title}</h4>
                                    <div style={{display: 'flex'}}>
                                        <h3>${card[2].cost}</h3>
                                        <img src={card[2].img} alt="" style={{margin: 'auto', marginRight: '10px'}}/>
                                    </div>
                                    <div>
                                        <h5 style={{
                                            color: card[2].change >= 0 ? 'green' : 'blue',
                                            display: 'inline'
                                        }}><IoTriangle />{card[2].change} <label style={{ color: 'black' }}> period of change</label> </h5>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="footer">
                    <div>
                        <div style={{ display: 'flex' }}>
                            <img src="../public/Squares four 1.png" alt="" />
                            <h4 style={{ color: 'black', padding: "0px", margin: '0px' }}>Detailed report</h4>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Admin;