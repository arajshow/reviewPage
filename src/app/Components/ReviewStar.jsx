import React from "react";
import ReactStars from "react-rating-stars-component";
import { Toaster, toast } from "sonner";

const ReviewStar = ({ heading, description }) => {
	const ratingChanged = (newRating) => {
		toast("rating changed to", newRating);
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-col gap-1">
				<p className=" text-[1.8em] font-bold">{heading}</p>
				<p className="text-md text-stone-500">{description}</p>
			</div>
			<ReactStars
				count={5}
				// onChange={ratingChanged}
				size={52}
				// emptyIcon={<i className="far fa-star" />}
				// filledIcon={<i className="fa fa-star" />}
				activeColor="#ffd700"
				inactiveColor="#aaaaaa"
			/>
		</div>
	);
};

export default ReviewStar;
