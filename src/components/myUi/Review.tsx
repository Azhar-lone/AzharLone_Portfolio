import React from "react";

// Icons
import { AiFillStar } from "react-icons/ai";

// components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// types
import reviewType from "@/types/Review";

interface review {
  review: reviewType;
}
const Review: React.FC<review> = ({ review }) => {
  return (
    <div className="flex   flex-col  w-[100%] shadow shadow-foreground rounded">
      {/* Owner Info */}

      <div className="flex justify-between md:w-[70%] p-3">
        {/* profile Picture */}
        <div className="flex  flex-col ">
          <Avatar className="size-16">
            <AvatarFallback>{review.owner.name.charAt(0)}</AvatarFallback>
            <AvatarImage src={review.owner.profilePic} />
          </Avatar>
          <div>
            <h1 className="text-2xl">{review.owner.name}</h1>
            <h1 className="font-serif ">{review.date.toLocaleString()}</h1>
          </div>
        </div>
        {/* Stars */}
        {review.rating && (
          <div className="flex gap-1 items-center">
            {Array(5)
              .fill(0)
              .map((_, i: number) => (
                <div key={i}>
                  {review.rating && review.rating - 0.5 > i ? (
                    <AiFillStar className="text-yellow-500 size-5 md:size-10" />
                  ) : (
                    <AiFillStar className="text-secondary  size-5 md:size-10 shadow-2xl" />
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
      <p className=" w-full p-2">{review.review}</p>
    </div>
  );
};

export default Review;
