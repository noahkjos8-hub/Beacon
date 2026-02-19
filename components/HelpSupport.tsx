# HelpSupport Component

This file contains the HelpSupport component for managing support queries effectively.

import React, { useState } from 'react';

const HelpSupport = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate an API call
        setResponse(`Thanks for your query: ${query}`);
    };

    return (
        <div>
            <h1>Help & Support</h1>
            <form onSubmit={handleSubmit}>
                <textarea value={query} onChange={handleQueryChange} placeholder="Type your query here..."></textarea>
                <button type="submit">Submit</button>
            </form>
            {response && <div>{response}</div>}
        </div>
    );
};

export default HelpSupport;
