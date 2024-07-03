import React from 'react'

import Review from "@/components/myUi/Review"

import reviewType from '@/types/Review'
const Reviews: React.FC = () => {


    return (
        <div className="flex flex-wrap gap-6  p-4 flex-col ">
            <h3 className="text-4xl font-bol">
                Reviews
            </h3>

            <div className="flex flex-wrap gap-3  p-4  ">

                {reviews.map((review: reviewType, i: number) => (
                    <Review key={i} review={review} />

                ))}
            </div>
        </div>

    )
}

export default Reviews



let reviews: reviewType[] = [
    {
        date: new Date(),
        owner: {
            name: "John Doe",
            profilePic: "",
            userName: "john-doe"
        },
        review: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse vel et sunt aperiam labore, asperiores neque quidem laborum autem inventore suscipit eum fugiat! Velit assumenda, totam adipisci placeat officiis iure facilis repellat quod eos unde sed quos animi quo? Nam ut quasi ratione fugiat nesciunt minima earum exercitationem debitis inventore blanditiis odio cupiditate libero assumenda odit sapiente sunt possimus, soluta aspernatur praesentium. Esse molestias ut odio optio omnis, a eveniet nulla debitis velit dignissimos tempore nam id accusamus quae pariatur obcaecati nobis iure perferendis reprehenderit, atque maiores, nihil inventore beatae illum. Maiores laboriosam quisquam beatae in voluptates illum! Fuga.`,
        rating: 4
    },
    {
        date: new Date(),
        owner: {
            name: "Some one",
            profilePic: "",
            userName: "some-one"
        },
        review: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse vel et sunt aperiam labore, asperiores neque quidem laborum autem inventore suscipit eum fugiat! Velit assumenda, totam adipisci placeat officiis iure facilis repellat quod eos unde sed quos animi quo? Nam ut quasi ratione fugiat nesciunt minima earum exercitationem debitis inventore blanditiis odio cupiditate libero assumenda odit sapiente sunt possimus, soluta aspernatur praesentium. Esse molestias ut odio optio omnis, a eveniet nulla debitis velit dignissimos tempore nam id accusamus quae pariatur obcaecati nobis iure perferendis reprehenderit, atque maiores, nihil inventore beatae illum. Maiores laboriosam quisquam beatae in voluptates illum! Fuga.`,
        rating: 5
    },
]