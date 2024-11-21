"use client";
import { useParams } from "next/navigation";

const TrainingDetailPage = () => {
    const params = useParams();
    const { id } = params;

    // Example training data
    const training = {
        id: 1,
        title: "Introduction to React",
        category: "Frontend Development",
        duration: "2 hours",
        level: "Beginner",
        location: "New York, NY",
        images: [
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video
        rating: 4.5,
        price: 29.99,
        description:
            "Learn the basics of React, the popular JavaScript library for building user interfaces. This beginner-friendly course will introduce you to React components, props, state management, and hooks.",
        comments: [
            {
                user: "John Doe",
                profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
                comment: "This training was fantastic! I learned so much about React.",
                timestamp: "2 days ago",
            },
            {
                user: "Jane Smith",
                profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
                comment: "Great introduction to React. The pace was perfect for beginners.",
                timestamp: "1 week ago",
            },
        ],
        learn: [
            "Understand the fundamentals of React",
            "Learn how to work with React components, props, and state",
            "Get hands-on experience with React hooks",
            "Master the basics of React Router for navigation",
            "Build simple, interactive web applications using React",
        ],
        courseIncludes: [
            "Video lessons",
            "Interactive coding challenges",
            "Downloadable resources",
            "Access to the course community",
            "Quizzes and assignments",
        ],
        courseContent: [
            "Module 1: Introduction to React",
            "Module 2: Understanding Components and Props",
            "Module 3: State and Event Handling in React",
            "Module 4: React Hooks Overview",
            "Module 5: React Router and Single Page Applications",
        ],
        requirements: [
            "Basic understanding of HTML, CSS, and JavaScript",
            "A computer with internet access",
            "A text editor like VSCode or Sublime Text",
            "Google Chrome or any modern browser",
        ],
    };

    if (Number(id) !== training.id) {
        return <p className="text-center mt-10 text-gray-600">Training not found.</p>;
    }

    return (
        <div className="flex flex-col items-center p-6 min-h-screen space-y-8">
            {/* Header Section */}
            <div className="w-full max-w-6xl text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">{training.title}</h1>
                <p className="text-lg text-gray-600">
                    {training.category} · {training.level} · ⭐ {training.rating}
                </p>
            </div>

            {/* Media Section */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Images */}
                <div className="grid grid-cols-2 gap-4">
                    {training.images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Training Image ${index + 1}`}
                            className="rounded-lg shadow-lg object-cover w-full h-48 transition-transform transform hover:scale-105"
                        />
                    ))}
                </div>
                {/* Video */}
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <video
                        controls
                        className="w-full h-48 rounded-lg bg-black object-cover transition-transform transform hover:scale-105"
                        src={training.video}
                    />
                </div>
            </div>

            {/* Details Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">About the Training</h2>
                <p className="text-gray-600">{training.description}</p>
                <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
                    <div>
                        <span className="font-semibold">Duration:</span> {training.duration}
                    </div>
                    <div>
                        <span className="font-semibold">Location:</span> {training.location}
                    </div>
                    <div>
                        <span className="font-semibold">Price:</span> ${training.price.toFixed(2)}
                    </div>
                    <div>
                        <span className="font-semibold">Rating:</span> ⭐ {training.rating}
                    </div>
                </div>
            </div>

            {/* What You'll Learn Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">What You'll Learn</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    {training.learn.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* This Course Includes Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">This Course Includes</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    {training.courseIncludes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Course Content Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Course Content</h2>
                <ul className="list-decimal pl-6 space-y-2 text-gray-600">
                    {training.courseContent.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Requirements Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Requirements</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    {training.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Comments Section */}
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">User Comments</h2>
                {training.comments.map((comment, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <img
                            src={comment.profileImg}
                            alt={`${comment.user}'s profile`}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold text-gray-800">{comment.user}</span>
                                <span className="text-gray-500 text-sm">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-700">{comment.comment}</p>
                        </div>
                    </div>
                ))}
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition mt-4">
                    Leave a Comment
                </button>
            </div>

            {/* Apply Button */}
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300 transform hover:scale-105">
                Apply Now
            </button>
        </div>
    );
};

export default TrainingDetailPage;
