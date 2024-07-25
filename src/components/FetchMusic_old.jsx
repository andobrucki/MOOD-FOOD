import ReactPlayer from 'react-player/youtube';
import { useState, useEffect, useContext } from 'react';
import { MoodContext } from '../context/MoodContext';

// FetchMusic component
const FetchMusic = ({ searchQuery }) => {
	const { state, dispatch } = useContext(MoodContext);

	// Function to search YouTube for videos
	async function searchYouTube(query) {
		const apiKey = import.meta.env.VITE_API_KEY;
		const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
			query
		)}&key=${apiKey}&type=video`;

		try {
			console.log(`Fetching data from YouTube API for query: ${query}`);
			// Fetch data from YouTube API
			const response = await fetch(url);
			const data = await response.json();

			// if (data.error) {
			// 	if (data.error.errors[0].reason === 'quotaExceeded') {
			// 		console.error('Quota exceeded');
			// 	} else {
			// 		console.error('Error fetching data:', data.error.message);
			// 	}
			// 	return null;
			// }

			//Check if there are any videos
			if (data.items.length > 0) {
				const videoId = data.items[0].id.videoId;
				return `https://www.youtube.com/watch?v=${videoId}`;
			} else {
				console.log('No videos found');
				return null; // No videos found
			}
		} catch (error) {
			console.error('Error fetching data:', error);
			return null;
		}
	}

	// Function component to display Player
	function YouTubePlayer({ searchQuery }) {
		const [videoUrl, setVideoUrl] = useState('');

		// Fetch video URL when searchQuery changes

		const fetchVideo = async () => {
			const url = await searchYouTube(searchQuery);
			setVideoUrl(url);
		};

		useEffect(() => {
			if (state.fetchMusic) {
				fetchVideo();
				dispatch({ type: 'SET_FETCH_MUSIC', payload: false });
			}
		}, [state.fetchMusic]);

		// Render the YouTube player
		return (
			<div>
				{videoUrl ? (
					<div className="w-full max-w-lg">
						<ReactPlayer url={videoUrl} controls width="100%" height="100%" />
					</div>
				) : (
					'Loading...'
				)}
			</div>
		);
	}
	return <YouTubePlayer searchQuery={searchQuery} />;
};
export default FetchMusic;
