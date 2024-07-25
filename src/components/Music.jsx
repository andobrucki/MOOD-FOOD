import { useContext } from 'react';
import { MoodContext } from '../context/MoodContext';
import MusicPlayer from './MusicPlayer';

const Music = () => {
	const { state } = useContext(MoodContext);
	const { videoId, mood } = state;

	console.log('Video ID in Music component:', videoId); // Debugging line
	return (
		<div className="music-page">
			<MusicPlayer videoId={videoId} mood={mood} />
		</div>
	);
};

export default Music;
