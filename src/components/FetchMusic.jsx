import ReactPlayer from 'react-player/youtube';
import { useState, useEffect } from 'react';

const FetchMusic = ({ searchQuery }) => {
	// Function to search YouTube for videos
	async function searchYouTube(query) {
		const apiKey = import.meta.env.VITE_API_KEY;
		const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
			query
		)}&key=${apiKey}&type=video`;

		const response = await fetch(url);
		const data = await response.json();
		if (data.items.length > 0) {
			const videoId = data.items[0].id.videoId;
			return `https://www.youtube.com/watch?v=${videoId}`;
		} else {
			return null; // No results found
		}
	}

	function YouTubePlayer({ searchQuery }) {
		const [videoUrl, setVideoUrl] = useState('');

		useEffect(() => {
			async function fetchVideo() {
				const url = await searchYouTube(searchQuery);
				setVideoUrl(url);
			}
			fetchVideo();
		}, [searchQuery]); // Only run once when the component mounts // has missing dependency Search Query

		return (
			<div>
				<button onClick={searchYouTube}>Get Music</button>
				{videoUrl ? (
					<ReactPlayer url={videoUrl} playing controls />
				) : (
					'Loading...'
				)}
			</div>
		);
	}
	return <YouTubePlayer searchQuery={searchQuery} />;
};

export default FetchMusic;
