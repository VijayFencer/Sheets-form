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
                      Authorization: `Bearer ya29.a0ARW5m77zcfAJckRaT-i7dE5rXwGOZg66Opd8k4VnBiiXBJRGdawXuLG6uCa92KfFWFhsj-vQcZ5vzog0Oxa6pm2KVSBEdzc0gnCg0cLxnLauO9zAXjDWZ94l6RzT8hjCyakqM_tk97rw9sWmqTOYTE_D2tIqGSfVj0UhXefcaCgYKAUMSARESFQHGX2Mij9xtTk0SgRNll11YEWIlZA0175`,
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
