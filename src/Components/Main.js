import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight,faChevronDown, faChevronUp,faSearch ,faGreaterThan, faL, faArrowLeft  } from '@fortawesome/free-solid-svg-icons';

import filter from '../Accests/Group 346.png'
import './Main.css'

import noti from '../Accests/Notification 2 (1).png'

import shape from '../Accests/shape.png'
import profile from '../Accests/vect 1 (1).png'

import data from '../data.json'
import { useState } from 'react';
const Main = () => {

    const [lists, setLists] = useState(data)

    const [ser, setSer] = useState('')

    
    const [filterOpen,setFilterOpen]=useState(false)
    const [departmentOpen,setDepartmentOpen]=useState(false)
    const [statusOpen,setStatusOpen]=useState(false)


    //selected department and status checkboxes
    const [selectedDepartments, setSelectedDepartments] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState([]);

    //Pagination State
    const [currentPage,setCurrentPage]=useState(1)
    const itemsPerPage=10

      // Function to toggle department selection
      const toggleDepartment = (dept) => {
        setSelectedDepartments((prev) => 
            prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept]
        );
    };

    // Function to toggle status selection
    const toggleStatus = (stat) => {
        setSelectedStatus((prev) => 
            prev.includes(stat) ? prev.filter(s => s !== stat) : [...prev, stat]
        );
    };


 
    let filterData = lists.filter((list) => {

    
       
        const matchesSearch = list.name.toLowerCase().includes(ser.toLowerCase());
        const matchesDepartment = selectedDepartments.length === 0 || selectedDepartments.includes(list.department);
        const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(list.status);

       return matchesSearch && matchesDepartment && matchesStatus;
    })

    const totalPages=Math.ceil(filterData.length/itemsPerPage);
    const startIdx=(currentPage-1)*itemsPerPage
    const currentData=filterData.slice(startIdx,startIdx+itemsPerPage)


    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (

        <div className='main'>


            <div className="nav-bar">

                <p>Welcome,User!</p>



                <div className="ser">

                    <div className='input'>

                        <span><FontAwesomeIcon className='bar' icon={faSearch} /></span>



                        <input onChange={(e) => setSer(e.target.value)} placeholder="Search here..." type="text" />
                    </div>


                    <span><FontAwesomeIcon className='bar' icon={faArrowRight} /></span>


                </div>

                <img className='filter' src={filter} onClick={()=>setFilterOpen(!filterOpen)} />



                <div className='noti'>
                    <img className='notify' src={noti} />
                    <img className='pro' src={profile} />

                    <img className='drop' src={shape} />


                </div>




            </div>


             {/* Conditionally render filter popup */}
             {filterOpen && (
                <div className="filter-popup">
                    <h3>Data Filters</h3>

                    <hr/>
                    <div className="filter-section" >
                        <p onClick={() => setDepartmentOpen(!departmentOpen)}>Department  <FontAwesomeIcon icon={departmentOpen ? faChevronUp : faChevronDown} /></p>
                        {departmentOpen && (
                            <ul className="dropdown">
                                {['All', 'Finance', 'Engineer', 'Arts'].map((dept) => (
                                    <li key={dept}>

<span>{dept}</span>
                                        <input 
                                            type="checkbox" 
                                            checked={selectedDepartments.includes(dept)} 
                                            onChange={() => toggleDepartment(dept)} 
                                        />
                                    
                                    </li>
                                ))}

                            </ul>
                        )}
                    </div>
                    <div className="filter-section">
                        <p onClick={() => setStatusOpen(!statusOpen)}>Status <FontAwesomeIcon icon={departmentOpen ? faChevronUp : faChevronDown} /></p>
                        {statusOpen && (
                            <ul className="dropdown">
                                {['All', 'Active', 'InActive', 'Blocked', 'Suspended'].map((stat) => (
                                    <li key={stat}>
                                       
                                        <span>{stat}</span>

                                        <input 
                                            type="checkbox" 
                                            checked={selectedStatus.includes(stat)} 
                                            onChange={() => toggleStatus(stat)} 
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}


            <div className='list-table'>

                <div className='list-table-fromate title'>

                    <b>Record ID</b>
                    <b>Teacher Name</b>
                    <b>Teacher Id.</b>

                    <b>Department</b>
                    <b>Student</b>
                    <b>Status</b>
                    <b>All Details</b>


                </div>

                {
                    currentData.map((list) => (
                        <div className='list-table-fromate-data'>

                            <p>{list.id}</p>
                            <p>{list.name}</p>
                            <p>{list.teacherid}</p>
                            <p>{list.department}</p>
                            <p>{list.student}</p>
                            <p>{list.status}</p>
                            <p className='view'>view More  <FontAwesomeIcon className='icon' icon={faGreaterThan} /></p>


                        </div>
                    ))
                }

<div className="pagination">
                    <button className="prev-next" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`page-circle ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button className="prev-next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>



            </div>

        </div>



    )
}
export default Main
