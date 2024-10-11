import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import '../assets/styles/components/Rating.scss';

const RateMood = () => {
	const [rating, setRating] = useState(0);

	// Catch Rating value
	const handleRating = (rate) => {
		setRating(rate);

		// other logic
	};
	// Optinal callback functions
	const onPointerEnter = () => console.log('Enter');
	const onPointerLeave = () => console.log('Leave');
	const onPointerMove = (value, index) => console.log(value, index);

	return (
		<div className="Rating">
			{/* <Rating
				onClick={handleRating}
				onPointerEnter={onPointerEnter}
				onPointerLeave={onPointerLeave}
				onPointerMove={onPointerMove}
				/* Available Props */}
                
            <Rating
    onClick={function noRefCheck(){}}
    showTooltip
    tooltipArray={[
      'Terrible',
      'Bad',
      'Average',
      'Great',
      'Prefect'
    ]}
  />
		</div>
	);
};

export default RateMood;
