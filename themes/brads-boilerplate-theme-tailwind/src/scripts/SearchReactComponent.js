import React, { useState, useEffect, useRef } from "react";

const SearchReactComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const resultsRef = useRef(null);

  useEffect(() => {
    if (searchTerm === "") {
      setResults(null);
    } else {
      fetchResults(searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setResults(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTyping = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const fetchResults = (term) => {
    fetch(
      `${universityData.root_url}/wp-json/university/v1/search?term=${term}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      });
  };

  return (
    <div className="relative" ref={resultsRef}>
      <input
        className="text-gray-700 bg-gray-50 focus:bg-white  
          placeholder-gray-400 transition-all rounded-full py-2.5 px-4 w-full 
          border border-gray-200 shadow-sm"
        placeholder="Search courses, professors, events..."
        value={searchTerm}
        onChange={handleTyping}
      />

      {results && (
        <div className="absolute bg-white w-full rounded-xl shadow-lg border border-gray-100 mt-2 z-50
          overflow-hidden transition-all duration-200 max-h-96 overflow-y-auto">
          <ul className="divide-y divide-gray-100">
            {results.generalInfo.length > 0 && (
              <div>
                <div className="bg-gray-50 px-4 py-2.5">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    General Information
                  </h2>
                </div>
                {results.generalInfo.slice(0, 2).map((item) => (
                  <li
                    key={item.permalink}
                    className="px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <a href={item.permalink} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 hover:text-blue-600 transition-colors">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </div>
            )}

            {results.programs.length > 0 && (
              <div>
                <div className="bg-gray-50 px-4 py-2.5">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Programs
                  </h2>
                </div>
                {results.programs.slice(0, 2).map((item) => (
                  <li
                    key={item.permalink}
                    className="px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <a href={item.permalink} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-gray-700 hover:text-blue-600 transition-colors">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </div>
            )}

            {results.professors.length > 0 && (
              <div>
                <div className="bg-gray-50 px-4 py-2.5">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Professors
                  </h2>
                </div>
                {results.professors.slice(0, 2).map((item) => (
                  <li
                    key={item.permalink}
                    className="px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <a href={item.permalink} className="flex items-center space-x-3">
                      <img
                        className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                        src={item.image}
                        alt={item.title}
                      />
                      <span className="text-gray-700 hover:text-blue-600 transition-colors">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </div>
            )}

            {results.campuses.length > 0 && (
              <div>
                <div className="bg-gray-50 px-4 py-2.5">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Campuses
                  </h2>
                </div>
                {results.campuses.slice(0, 2).map((item) => (
                  <li
                    key={item.permalink}
                    className="px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <a href={item.permalink} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700 hover:text-blue-600 transition-colors">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </div>
            )}

            {results.events.length > 0 && (
              <div>
                <div className="bg-gray-50 px-4 py-2.5">
                  <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Events
                  </h2>
                </div>
                {results.events.slice(0, 2).map((item) => (
                  <li
                    key={item.permalink}
                    className="px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <a href={item.permalink} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700 hover:text-blue-600 transition-colors">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </div>
            )}

            {results.generalInfo.length === 0 &&
              results.programs.length === 0 &&
              results.professors.length === 0 &&
              results.campuses.length === 0 &&
              results.events.length === 0 && (
                <div className="px-4 py-4 text-center">
                  <svg className="w-8 h-8 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-400 italic">No matching results found</p>
                </div>
              )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchReactComponent;