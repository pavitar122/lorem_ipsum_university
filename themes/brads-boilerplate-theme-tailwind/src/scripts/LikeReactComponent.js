import React, { useEffect, useState } from "react";

const LikeReactComponent = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setlikeCount] = useState(null);

  useEffect(() => {
    fetchResults();
  }, []);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const container = document.getElementById("render-react-like-here");
  const username = container ? container.dataset.professor : null;

  const fetchResults = () => {
    fetch(
      `${universityData.root_url}/wp-json/university/v1/like?term=${username}`
    )
      .then((response) => response.json())
      .then((data) => {
        setlikeCount(data);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
      });
  };

  return (
    <div className="inline-flex gap-2 relative bottom-[-10px] left-40 t bg-slate-100 p-1 rounded-sm">
      {likeCount ? likeCount : 0}
      <button
        onClick={toggleLike}
        className="focus:outline-none"
        aria-label="Toggle Like"
      >
        {liked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <span>Like</span>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <span>Unlike</span>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default LikeReactComponent;
