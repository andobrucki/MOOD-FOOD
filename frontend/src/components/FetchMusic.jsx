const API_KEY = import.meta.env.VITE_API_KEY;
const YOUTUBE_SEARCH_URL = `https://www.googleapis.com/youtube/v3/search`;

const moodSearchTerms = {
	happy: 'upbeat music',
	relaxed: 'active music',
	fearful: 'calm instrumental',
	astonished: 'energetic music',
	sad: 'uplifting songs',
	frustrated: 'motivating music',
	angry: 'soothing songs',
	excited: 'relaxing music',
};
// Function to fetch music based on mood
export const fetchMusic = async (mood) => {
	try {
		const searchTerm = moodSearchTerms[mood] || 'music'; // Default search term if mood not found
		const url = `${YOUTUBE_SEARCH_URL}?part=snippet&q=${encodeURIComponent(
			searchTerm
		)}&type=video&key=${API_KEY}`;

		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Failed to fetch music, Status ${response.status}`);
		}

		const data = await response.json();

		if (data.items && data.items.length > 0) {
			//REturn the first video
			return data.items[0].id.videoId;
		} else {
			console.error('No videos found');
			return null;
		}
	} catch (error) {
		console.error('Error fetching music', error);
		return null;
	}
};
