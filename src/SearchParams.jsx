import { useState } from 'react';
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = ["Select Breed"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input onChange={(e) => setLocation(e.target.value)}
                        id="location"
                        value={location}
                        placeholder="location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                            }
                        }
                        value={animal}
                        id="animal"
                    >
                        <option/>
                        {ANIMALS.map((animal) => (
                            <option key = {animal}>{animal}</option>
                        ))}

                    </select>
                </label>
                <label htmlFor="breed">
                    Breed 
                    <select 
                        onChange={(e) => setBreed(e.target.value)}
                        value={breed}
                        id="breed"
                        disabled = {BREEDS.length === 0}
                    >
                        <option/>
                        {BREEDS.map((breed) =>(
                            <option key = {breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams; 