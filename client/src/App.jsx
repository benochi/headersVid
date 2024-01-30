import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
import HeaderExplanations from './HeaderExplanations';

function App() {
  const [response, setResponse] = useState('');
  const [headers, setHeaders] = useState({});

  const fetchData = async (method, data = null, contentType = 'application/json') => {
    try {
      const config = {
        method,
        url: `http://localhost:3050/api/headers`,
        headers: {
          'Content-Type': contentType,
        },
        ...(data && { data }),
      };
      const { data: resData } = await axios(config);
      setResponse(JSON.stringify(resData, null, 2));
      setHeaders(resData.headers);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Error fetching data');
    }
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', event.target.file.files[0]);
  
    try {
      const { data: resData } = await axios.post('http://localhost:3050/api/upload', formData, {
        headers: {},
      });
      setResponse(JSON.stringify(resData, null, 2));
      setHeaders(resData.headers);
    } catch (error) {
      console.error('Error uploading file:', error);
      setResponse('Error uploading file');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>HTTP Headers Tutorial</h1>
        <div className="button-group">
          <button onClick={() => fetchData('get')}>GET Headers</button>
          <button onClick={() => fetchData('post', { data: 'example' })}>POST Headers</button>
          <button onClick={() => fetchData('patch', { data: 'example' })}>PATCH Headers</button>
          <button onClick={() => fetchData('delete')}>DELETE Headers</button>
        </div>
        <form onSubmit={handleFileUpload} className="upload-form">
          <input type="file" name="file" />
          <button type="submit">Upload File</button>
        </form>

        <div className="centered-content">
          <pre>{response}</pre>
          <HeaderExplanations headers={headers} />
        </div>
      </div>
    </div>
  );
}

export default App;
