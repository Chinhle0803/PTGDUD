import { useState } from 'react';
import './Admin.css'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
function Admin() {

    const ad_menu = [
        {
            img: "../public/Squares four 1.png",
            title: 'Dashboard'
        }, 'Project', 'Teams', 'Analatic', 'Messages', 'Integreations']
    const card = ['Thẻ 1', 'Thẻ 2', 'Thẻ 3']
    const [isSelect, setIsSelect] = useState(false)
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
                                <li key={i} style={{

                                }}
                                // onClick={()=> {style={{backgroundColor: 'pink'}}}}
                                >{item}</li>
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
                        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
                            {card.map((item, i) => (
                                <li key={i} style={{ width: '200px', height: "100px", borderRadius: '19px', backgroundColor: '#69ddba', textAlign: 'center' }}>{item}</li>
                            ))}
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