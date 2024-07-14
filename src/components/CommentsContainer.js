import React from 'react';

const commentsData = [
    {
        name: "Akshay Saini",
        text: "Lorem ipsum",
        replies: [
            {
                name: "Akshay Saini",
                text: "Lorem ipsum",
                replies: [
                    {
                        name: "Akshay Saini",
                        text: "Lorem ipsum",
                        replies: [

                        ]
                    }
                ]
            }

        ]
    },
    {
        name: "Anup Ray",
        text: "Lorem Anup ipsum",
        replies: [
            {
                name: "Akshay Saini",
                text: "Lorem ipsum",
                replies: [

                ]
            }
        ]
    },
    {
        name: "Sehat Singh",
        text: "Lorem ipsum",
        replies: [

        ]
    }
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return <div className='flex shadow-sm bg-gray-100 p-2 my-2 rounded-r-lg'>
        <img
            className="w-8 h-8"
            alt="user"
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
        <div>
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentsList = ({ comments }) => {

    return comments.map((comment, index) => <div>
        <Comment key={index} data={comment} />
        <div className='pl-5 ml-5'>
            {/* <Comment key={index} data={comment} />
            <Comment key={index} data={comment} />
            <Comment key={index} data={comment} /> */}
            <CommentsList comments={comment.replies}/>

        </div>

    </div>)
}

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>CommentsContainer</h1>
            {/* <Comment data={commentsData[0]} />
            <Co */}
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer