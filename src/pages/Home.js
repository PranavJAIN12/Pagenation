import React, { useState } from 'react'
import data from '../components/Data'
import './Home.css'
import Modal from './Modal'

export default function Home() {

  const[page, setPage] = useState(1)
  const[selectedRow, setSelectedRow] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClose, setIsModalClose] = useState(true);

  const dataPerPage = 10;

  const startIndex = (page - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;


  const currentData = data.slice(startIndex, endIndex);

    const handleNextPage=()=>{
      if(endIndex < data.length){


        console.log("btn")
        setPage(page+1)
      }
    }
    const handlePrevPage=()=>{
      console.log("btn")
      if(page>1){
        setPage(page-1)
      }
    }
    const handleRowClick = (rowData) => {
      setSelectedRow(rowData); 
      setIsModalOpen(true);    
    };
  return (
    <div className="app">
      <h1>Company Data List</h1>
      <h6>Current Page:{page}</h6>
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Name</th>
            <th>Score</th>
            <th>Email</th>
            <th>Phones</th>
            <th>URL</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((element)=>{
            return(
                <tr onClick={() => handleRowClick(element)}>
                    <td>{element.domain}</td>
                    <td>{element.name}</td>
                    <td>{element.score}</td>
                    <td>{element.public_email}</td>
                    <td>{element.phones}</td>
                    <td>{element.url}</td>
                    <td>{element.country}</td>
                </tr>
            )
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => handlePrevPage()} disabled={page===1} >
          Previous
        </button>
        
        <button onClick={() => handleNextPage()} disabled={endIndex>=data.length} >
          Next
        </button>
       
      </div>
      <Modal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} data={selectedRow} />
    </div>
  
  )
}
