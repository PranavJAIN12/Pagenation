import React, { useState, useEffect } from "react";
import data from "../components/Data";
import "./Home.css";
import Modal from "./Modal";
import { supabase } from "./client";
import { FaSearch } from "react-icons/fa"; 

export default function Home() {
  const [page, setPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState(data);
  const [searchTerm, setSearchItem] = useState("");

  const dataPerPage = 10;
  const startIndex = (page - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

  

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("PracticeTable")
        .select("*");
      
      if (error) {
        console.error("Error fetching data", error);
      } else {
        setTableData(data); 
      }
    };
  
    fetchData(); 
  }, []);


  useEffect(() => {
    const insertData = async () => {
      try {
        // First, check if there's existing data in the table
        const { data: supabaseData, error: selectError } = await supabase
          .from("PracticeTable")
          .select("*");
  
        if (selectError) {
          console.log("Error fetching data from Supabase", selectError);
          return;
        }
  
        // If the table is empty, insert data
        if (supabaseData.length === 0) {
          console.log("Table is empty, inserting data...");
          const { error: insertError } = await supabase
            .from("PracticeTable")
            .insert(data); // Bulk insert
  
          if (insertError) {
            console.log("Error inserting data", insertError);
          } else {
            console.log("Data inserted successfully");
          }
        } else {
          console.log("Data already exists, skipping insertion.");
        }
      } catch (error) {
        console.log("Error inserting data", error);
      }
    };
  
    insertData();
  }, []);
  

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

  const handleSave = async (updatedData) => {
    try {
      const { data, error } = await supabase
        .from("PracticeTable")
        .insert([updatedData])
        .select();
        console.log("data added successfully")
      if (error) {
        console.log("error inserting data", error);
      }

      const updatedTableData = tableData.map((item) =>
        item.domain === updatedData.domain ? updatedData : item
      );
      setTableData(updatedTableData);
      setIsModalOpen(false);
    } catch (error) {
      console.log("error saving data", error);
    }
  };




  const handleSearchChange = (e) => {
    const search = e.target.value;
    // setTableData(search);
    setSearchItem(search);

    const filteredItems = data.filter((data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTableData(filteredItems);
  };

  const handleAddData=async(updatedData)=>{
    console.log("add btn")
    try {
      const { data, error } = await supabase
        .from("PracticeTable")
        .insert([updatedData])
        .select();
      if (error) {
        console.log("error inserting data", error);
      }
      
    } catch (error) {
      console.log("error adding data", error);
    }
  }


  const handleDeleteData=async(domain)=>{
    try {
      const {data,error} = await supabase
      .from("PracticeTable")
      .delete()
      .match({domain:domain})
      console.log("delete btn ")
    } catch (error) {
      console.log("error deleting data", error)
    }
  }

  return (
    <div className="app">
      <h1>Company Data List</h1>
      <h6>Current Page: {page}</h6>
      <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <FaSearch className="search-icon" />
    </div>
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
            <th colSpan={2}>Function</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((element) => (
            <tr key={element.domain}>
              <td onClick={() => handleRowClick(element)}>{element.domain}</td>
              <td onClick={() => handleRowClick(element)}>{element.name}</td>
              <td onClick={() => handleRowClick(element)}>{element.score}</td>
              <td onClick={() => handleRowClick(element)}>
                {element.public_email}
              </td>
              <td onClick={() => handleRowClick(element)}>{element.phones}</td>
              <td onClick={() => handleRowClick(element)}>{element.url}</td>
              <td onClick={() => handleRowClick(element)}>{element.country}</td>
              <td>
  <button onClick={() => handleAddData(element)}>Add</button>
</td>
<td>
  <button onClick={() => handleDeleteData(element.domain)}>Delete</button>
</td>

            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= tableData.length}
        >
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
