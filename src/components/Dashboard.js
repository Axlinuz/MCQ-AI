"use client"


import React, { useState } from 'react';

const BlogPostGenerator = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Define the query to be sent
  const yourRequest = 'hey, do you work ?';

  // Function to make the request
  const generateBlogPost = () => {
    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    fetch(`https://free-unoficial-gpt4o-mini-api-g70n.onrender.com/chat/?query=${yourRequest}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setResponseData(data); // Set the data received from the API
        setLoading(false); // Stop loading
      })
      .catch(error => {
        setError('Request Error: ' + error.message); // Handle error
        setLoading(false); // Stop loading
      });
  };

  return (
    <div>
      <h1>Blog Post Generator</h1>
      <button onClick={generateBlogPost} disabled={loading}>
        {loading ? 'Loading...' : 'Generate Blog Post'}
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {responseData && (
        <div>
          <h2>Generated Response:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default BlogPostGenerator;
