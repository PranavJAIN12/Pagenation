import React, { useState } from 'react';
import data from '../components/Data';
import './Home.css';
import Modal from './Modal';
import { supabase } from './client';

export default function Home() {
  const [page, setPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState(data);  
  const [searchTerm, setSearchItem] = useState('')

  const dataPerPage = 10;
  const startIndex = (page - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = tableData.slice(startIndex, endIndex);  

  const handleNextPage = () => {
    if (endIndex < tableData.length) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setIsModalOpen(true);
  };


  const handleSave = async(updatedData) => {

    try {
      const{data, error} = await supabase
    .from('PracticeTable')
    .insert([updatedData])
    .select();
    if(error){
      console.log("error inserting data", error);
    }


    const updatedTableData = tableData.map(item =>
      item.domain === updatedData.domain ? updatedData : item  
    );
    setTableData(updatedTableData);  
    setIsModalOpen(false);    

    } catch (error) {
      console.log("error saving data", error)
    }
    


          
  };
  const handleSearchChange=(e)=>{
    const search = e.target.value;
    // setTableData(search);
    setSearchItem(search)

    const filteredItems = data.filter((data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTableData(filteredItems)
  }

  return (
    <div className="app">
      <h1>Company Data List</h1>
      <h6>Current Page: {page}</h6>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
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
          {currentData.map((element) => (
            <tr key={element.domain} onClick={() => handleRowClick(element)}>
              <td>{element.domain}</td>
              <td>{element.name}</td>
              <td>{element.score}</td>
              <td>{element.public_email}</td>
              <td>{element.phones}</td>
              <td>{element.url}</td>
              <td>{element.country}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={endIndex >= tableData.length}>
          Next
        </button>
      </div>

      {isModalOpen && selectedRow && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={selectedRow}
          onSave={handleSave}  
        />
      )}
    </div>
  );
}
