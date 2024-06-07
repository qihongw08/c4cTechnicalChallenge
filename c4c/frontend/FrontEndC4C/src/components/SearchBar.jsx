import {useState, useEffect} from 'react'
import {FaSearch} from "react-icons/fa"
import "../assets/SearchBar.css"
import axios from "axios";

const SearchBar = ({setSearchResult}) => {
    const [input, setInput] = useState("");
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        let baseUrl = "http://localhost:8080/organizations";
        axios.get(baseUrl + "/find/all")
            .then((response) => {
                setOrganizations(response.data);
                setSearchResult(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const setCurrentList = (userInput) => {
        const res = organizations.filter((organization) => {
            return organization.name.toLowerCase().includes(userInput.toLowerCase());
        })
        setSearchResult(res);
        if (userInput === '') {
            setSearchResult(organizations);
        }
    }

    const handleChange = (value) => {
        setInput(value);
        setCurrentList(value);
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder='Type to Search...'
                //Stores the input in the value
                   value={input}
                //Whenever the user changes the value inside: take the event and set input as target value
                   onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;