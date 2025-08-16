import { useEffect, useState } from "react";
import viteLogo from '/vite.svg';
import './App.CSS'
import axios from "axios";
function App() {
    const [jokes, setJokes] = useState([]);
    useEffect(() => {
        axios.get('/api/jokes')
            .then(response => {
                setJokes(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the jokes!", error);
            });
    }, []);
  
  return (
    <>
      <h1>😂 Nargis Jokes</h1>
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}>{joke}</li>
        ))}
      </ul>
    </>
  );
}

export default App;