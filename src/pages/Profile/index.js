import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styles from'./Profile.module.css'
import DatePicker from "react-datepicker";
import profileku from "../../asset/profilku.png"
import NavBar from '../../components/NavBar1/Navbar';

import "react-datepicker/dist/react-datepicker.css";
export default function Profile() {
    const [data,setData] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    let users = 'https://jsonplaceholder.typicode.com/users/1'
    useEffect(()=>{
        axios.get(users)
        .then((res)=>{
            console.log("get data success")
            console.log(res)
            res.data && setData(res.data)
        })
        .catch((err)=>{
            console.log("get data fail")
            console.log(err)
        })
    },[])
  return (
    <div className='bg-light w-100 h-100'>
        <NavBar/>
        {/* <ul>
            <li>
        {data ? data.name : "data not found"}
            </li>
            <li>
        {data ? data.email : "data not found"}
            </li>
            <li>
        {data ? data.phone : "data not found"}
            </li>
        </ul> */}

        <div className='container p-5'>
                <h1>My Profile</h1>
                <h5 className='text-secondary mb-3'>Manage your profile information</h5>
                <div className={styles.line}></div>

                <div className='container col-12 row'>
                            <div className='col col-8 row'>
                                {/* form */}
                            <div className='col col-12 row '>
                                <div className='col col-3'>
                                    Name
                                </div>
                                <div className='col col-9'>
                                <input type="text" className="form-control" 
                                value={"Revan"}
                                // value={data ? data.name : "data not found"}
                                />
                            </div>
                        </div>
                            <div className='col col-12 row '>
                                <div className='col col-3'>
                                    Email
                                </div>
                                <div className='col col-9'>
                                <input type="text" className="form-control" 
                                // value={data ? data.email : "data not found"}
                                value={"rizkyrevanda@gmail.com"}
                                />
                            </div>
                        </div>
                        <div className='col col-12 row '>
                                <div className='col col-3'>
                                    Address
                                </div>
                                <div className='col col-9'>
                                <input type="text" className="form-control" 
                                // value={data ? data.email : "data not found"}
                                value={"Jakarta Selatan"}
                                />
                            </div>
                        </div>
                            <div className='col col-12 row '>
                                <div className='col col-3'>
                                    Phone Number
                                </div>
                                <div className='col col-9'>
                                <input type="text" className="form-control" 
                                // value={data ? data.phone : "data not found"}
                                value={"081081081"}
                                />
                            </div>
                        </div>
                            {/* <div className='col col-12 row '> */}
                                {/* <div className='col col-3'>
                                  Gender
                                </div>
                                <div className='col col-9 row'>
                                <div c>
                               <input class="form-check-input mt-1" type="radio" value="" aria-label="Radio button for following text input" name="gender" id="gender1"/>
                                <span className='ms-2'>
                                Laki-Laki
                                </span>
                               <input class="form-check-input mt-1 ms-2" type="radio" value="" aria-label="Radio button for following text input" name="gender"  id="gender"/>
                                <span className='ms-2'>
                                Perempuan            </span>
                               <div>
                            </div>
                                </div>
                            </div> */}
                            <div className='col col-12 row  mt-3'>
                                <div className='col col-3'>
                                    Date of birth
                                </div>
                                <div className='col col-9'>
                                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                                <input type="text" className="form-control" 
                                // value={data ? data.phone : "data not found"}
                                value={"07/08/1999"}
                                />
                            </div>
                            </div>
                            <button className='btn btn-danger mt-3'>Update</button>
                        {/* </div> */}
                    </div>
                        <div className='col col-4'>
                        <img src={profileku} className={styles.image}alt="..."/>
                        </div>
                        
                </div>
        </div>

    </div>
  )
}
