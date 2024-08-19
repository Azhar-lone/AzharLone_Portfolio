import React from "react";

import Review from "@/components/myUi/Review";

import reviewType from "@/types/Review";
const Reviews: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6  py-5 flex-col w-full" id="reviews">
      <h3 className="text-4xl  p-4 ">Reviews</h3>

      <div className="flex flex-wrap gap-3 justify-center ">
        {reviews.map((review: reviewType, i: number) => (
          <Review key={i} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

let reviews: reviewType[] = [
  {
    date: new Date(),
    owner: {
      name: "John Doe",
      profilePic: "",
      userName: "john-doe",
    },
    review: ` Review 1           `,
    rating: 4,
  },
  {
    date: new Date(),
    owner: {
      name: "Some one",
      profilePic: "",
      userName: "some-one",
    },
    review: `Review 2`,
    rating: 5,
  },
];
