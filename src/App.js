// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          await axios.post(
              'https://sheets.googleapis.com/v4/spreadsheets/1wrl33s3H2SdYHG-NHnU01K6PNCbps7M6eGu6VgK44MA/values/Sheet1!A1:append?valueInputOption=USER_ENTERED',
              {
                  values: [[formData.name, formData.rollNo, formData.email]], // Corrected structure
              },
              {
                  headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ya29.a0ARW5m76MwU40_5TCKgp-UjKACQBi7DNr_JCcbAPwKbA9u3XvA4JGNN43F-b8PI8OZJkbHCmXOf2L2Fhww6eBCKmqdm0B60UMw5lHFo-l_idOpMi-VlzysYLstY7WR8cWckQx4vFSMuadTO6GdFcQPiixjlidpoQObm6SGMtSaCgYKAfsSARESFQHGX2MiVW5mnizmmAePaJvR6YXVsg0175`,
                  },
              }
          );
          alert('Data submitted successfully!');
          setFormData({ name: '', rollNo: '', email: '' });
      } catch (error) {
          console.error('Error submitting data:', error);
          alert('Failed to submit data.');
      }
  };
  

    return (
        <div className="App">
            <h1>Sheet1 Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Roll Number:
                    <input
                        type="text"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
