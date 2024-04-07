import React, { useState } from 'react';

function RecordSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [records, setRecords] = useState([
    { uniqueId: "1234", address: "0x1a2b3c4d" },
    { uniqueId: "5678", address: "0x5a6b7c8d" },
    { uniqueId: "91011", address: "0x9a0b1c2d" }
  ]);

  const handleSearch = () => {
    let found = false;
    const updatedRecords = records.filter(record => {
      if (record.uniqueId === searchInput) {
        setSearchResult("Token present");
        found = true;
        return false; // Remove the found record from the updated records array
      }
      return true;
    });

    if (found) {
      setRecords(updatedRecords);
    } else {
      setSearchResult("Token not found");
    }
  };

  return (
    <div className="container">
      <h2>Record Search</h2>
      <input
        type="text"
        placeholder="Enter unique ID"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>{searchResult}</p>
      <table>
        <thead>
          <tr>
            <th>Unique ID</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.uniqueId}>
              <td>{record.uniqueId}</td>
              <td>{record.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecordSearch;