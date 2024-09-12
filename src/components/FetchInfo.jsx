import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { MoodContext } from '../context/MoodContext';

//!Fetch Info component

const FetchInfo = () => {
	const { state } = useContext(MoodContext); // Get the state from the context
	const [wikiData, setWikiData] = useState(null); // Set the info state
	const [loading, setLoading] = useState(false); // Add a loading state
	const [error, setError] = useState(null); // Add an error state

	const fetchWikiData = async (query) => {
		const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query}&origin=*`;

		try {
			setLoading(true); // Set loading to true
			const response = await fetch(url); // Fetch data from Wikipedia API
			const data = await response.json(); // Convert the response to JSON
			setWikiData(data.query.search); // Set the data to the state
			setLoading(false); // Set loading to false
		} catch (error) {
			setError('Error fetching data'); // Set error message
			console.error('Error fetching data:', error);
			setLoading(false); // Set loading to false
		}
	};

	useEffect(() => {
		// Fetch data when the component mounts
		if (state.mood) {
			fetchWikiData(state.mood); // Fetch data based on the user's mood
		}
	}, [state.mood]);

	return (
		<div className="fetch-wiki p-4 max-w-4xl mx-auto h-full flex flex-col">
			<h2 className="text-2xl font-bold mb-4 flex-shrink-0">
				{' '}
				{/*short-circuit evaluation*/}
				Learn more about {state.mood && state.mood.toUpperCase()}
			</h2>

			{/* Loading State */}
			{loading && <p className="text-lg">Loading...</p>}

			{/* Error State */}
			{error && <p className="text-lg">{error}</p>}

			{/* Display Data */}
			{!loading && wikiData && wikiData.length > 0 ? (
				<div className="wiki-info overflow-y-auto h-full 	scroll-snap-type: y var(--tw-scroll-snap-strictness);space-y-4 flex-grow">
					{wikiData.map((item) => (
						<div
							key={item.pageid}
							className="wiki-item p-4 rounded-lg shadow-md"
						>
							<h3 className="text-xl font-bold">{item.title}</h3>
							<p>{item.snippet}</p>
							<a className="underline hover:font-bold"
								href={`https://en.wikipedia.org/?curid=${item.pageid}`}
								target="_blank"
								rel="noreferrer"
							>
								Read more
							</a>
						</div>
					))}
				</div>
			) : (
				!loading && <p>No information found for {state.mood}.</p>
			)}
		</div>
	);
};

export default FetchInfo;
