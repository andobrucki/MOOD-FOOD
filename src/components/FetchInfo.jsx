import { useEffect } from "react";
import { useState, useContext } from "react"
import { MoodContext } from "../context/MoodContext";

//!Fetch Info component

const FetchInfo = () => {
  const { state } = useContext(MoodContext); // Get the state from the context
  const [wikiData, setWikiData] = useState(null); // Set the info state

  const fetchWikiData = async (query) => { 
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query}&origin=*`;
  

    try {
      const response = await fetch(url); // Fetch data from Wikipedia API
      const data = await response.json(); // Convert the response to JSON
      setWikiData(data.query.search); // Set the data to the state
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => { // Fetch data when the component mounts
    if (state.mood) {
      fetchWikiData(state.mood); // Fetch data based on the user's mood
    }
  }, [state.mood]);


  return (
    <div className="fetch-wiki">
      <h2 className="text-2xl font-bold mb-4"> Learn more about {state.mood.toUpperCase()}</h2>

      {wikiData && 
      (<div className="wiki-info">
        {wikiData.map((item)=> (
          
          <div key={item.pageid} className="wiki-item">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p>{item.snippet}</p>
          <a href={`https://en.wikipedia.org/?curid=${item.pageid}`} target="_blank" rel="noreferrer">Read more</a>
          </div>
      ))}
      </div>)
      }
      
</div>)
};

export default FetchInfo;