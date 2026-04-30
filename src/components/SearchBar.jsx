import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch(value);
    }

    return (
        <input
            name="search"
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Cerca..."
            className=" form-control my-3"
        />

    )
}