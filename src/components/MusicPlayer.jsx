import ReactPlayer from 'react-player';
import { useContext } from 'react';
import { MoodContext } from '../context/MoodContext';

const MusicPlayer = () => {
	const { state } = useContext(MoodContext);
	const { videoId, mood } = state;

	console.log('Video ID in MusicPlayer:', videoId); // Debugging line
	return (
		<div className="">
			<h2 className="text-2xl font-normal mb-4">
				Listen to some music for a {mood} mood
			</h2>
			<div className='flex justify-center'>
				{' '}
				{videoId ? (
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${videoId}`}
						width="50%"
						height="50%"
						controls
                        playing
					/>
				) : (
					<p>No video available for this mood.</p>
				)}
			</div>
		</div>
	);
};

export default MusicPlayer;
