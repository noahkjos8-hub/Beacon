// AddressAutocomplete.tsx
import React, { useState, useEffect } from 'react';

const AddressAutocomplete = () => {
    const [address, setAddress] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (address.length > 2) {
            fetch(`https://api.example.com/autocomplete?input=${address}`)
                .then(response => response.json())
                .then(data => setSuggestions(data.suggestions));
        } else {
            setSuggestions([]);
        }
    }, [address]);

    const handleChange = (e) => {
        setAddress(e.target.value);
    };

    const handleSelect = (suggestion) => {
        setAddress(suggestion);
        setSuggestions([]);
    };

    return (
        <div>
            <input
                type="text"
                value={address}
                onChange={handleChange}
                placeholder="Enter your address"
            />
            <ul>
                {suggestions.map(suggestion => (
                    <li key={suggestion} onClick={() => handleSelect(suggestion)}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default AddressAutocomplete;