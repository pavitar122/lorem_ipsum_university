/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/scripts/LikeReactComponent.js":
/*!*******************************************!*\
  !*** ./src/scripts/LikeReactComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const LikeReactComponent = () => {
  const [liked, setLiked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [likeCount, setlikeCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchResults();
  }, []);
  const toggleLike = () => {
    setLiked(!liked);
  };
  const container = document.getElementById("render-react-like-here");
  const username = container ? container.dataset.professor : null;
  const fetchResults = () => {
    fetch(`${universityData.root_url}/wp-json/university/v1/like?term=${username}`).then(response => response.json()).then(data => {
      setlikeCount(data);
    }).catch(err => {
      console.error("Error fetching notes:", err);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "inline-flex gap-2 relative bottom-[-10px] left-40 t bg-slate-100 p-1 rounded-sm",
    children: [likeCount ? likeCount : 0, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      onClick: toggleLike,
      className: "focus:outline-none",
      "aria-label": "Toggle Like",
      children: liked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "red",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        className: "w-6 h-6 cursor-pointer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: "Like"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        className: "w-6 h-6 cursor-pointer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: "Unlike"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeReactComponent);

/***/ }),

/***/ "./src/scripts/NoteReactComponent.js":
/*!*******************************************!*\
  !*** ./src/scripts/NoteReactComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const NoteReactComponent = () => {
  const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [editData, setEditData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: "",
    content: ""
  });
  const [formData, setformData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: "",
    content: ""
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchResults();
  }, []);
  const fetchResults = () => {
    fetch(`${universityData.root_url}/wp-json/wp/v2/note?author=${universityData.current_user_id}`, {
      headers: {
        "X-WP-Nonce": universityData.nonce
      }
    }).then(response => response.json()).then(data => {
      setResults(data);
      setEditIndex(null);
    }).catch(err => {
      console.error("Error fetching notes:", err);
    });
  };
  const handleEdit = (note, index) => {
    setEditIndex(index);
    setEditData({
      title: note.title.raw || note.title.rendered,
      content: note.content.raw || note.content.rendered.replace(/(<([^>]+)>)/gi, "")
    });
  };
  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditData({
      title: "",
      content: ""
    });
    fetchResults();
  };
  const handleSave = id => {
    fetch(`${universityData.root_url}/wp-json/wp/v2/note/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": universityData.nonce
      },
      body: JSON.stringify({
        title: editData.title,
        content: editData.content
      })
    }).then(res => res.json()).then(() => {
      fetchResults();
    }).catch(err => console.error("Error updating note:", err));
  };
  const createNote = () => {
    fetch(`${universityData.root_url}/wp-json/wp/v2/note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": universityData.nonce
      },
      body: JSON.stringify({
        title: formData.title,
        content: formData.content,
        status: "publish"
      })
    }).then(res => res.json()).then(() => {
      fetchResults();
    }).catch(err => console.error("Error updating note:", err));
  };
  const deleteNote = id => {
    fetch(`${universityData.root_url}/wp-json/wp/v2/note/${id}?force=true`, {
      method: "DELETE",
      headers: {
        "X-WP-Nonce": universityData.nonce
      }
    }).then(res => res.json()).then(() => {
      fetchResults();
    }).catch(err => console.error("Error deleting note:", err));
  };
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setformData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
      className: "container mx-auto max-w-6xl px-4 py-6 space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("form", {
        onSubmit: createNote,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow duration-200",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            name: "title",
            value: formData.title,
            onChange: handleChange,
            placeholder: "Note title",
            className: "w-full text-xl font-semibold mb-2 px-2 py-1 border-b-2 border-transparent focus:border-blue-500 focus:outline-none placeholder-gray-400"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
            name: "content",
            value: formData.content,
            onChange: handleChange,
            placeholder: "Note content",
            className: "w-full px-2 py-2 text-gray-600 border-b-2 border-transparent focus:border-blue-500 focus:outline-none resize-none placeholder-gray-400",
            rows: "8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "submit",
            className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-colors duration-150 cursor-pointer",
            children: "\uD83D\uDCBE Add"
          })]
        })
      }), results.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-center text-gray-500",
        children: "No notes found."
      }), results.map((note, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        className: "bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow duration-200",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "mb-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            value: editIndex === index ? editData.title : note.title.rendered,
            onChange: handleInputChange,
            name: "title",
            type: "text",
            className: "w-full text-xl font-semibold mb-2 px-2 py-1 border-b-2 border-transparent focus:border-blue-500 focus:outline-none disabled:bg-gray-50",
            disabled: editIndex !== index
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
            value: editIndex === index ? editData.content : note.content.rendered.replace(/(<([^>]+)>)/gi, ""),
            onChange: handleInputChange,
            name: "content",
            className: "w-full px-2 py-2 text-gray-600 border-b-2 border-transparent focus:border-blue-500 focus:outline-none disabled:bg-gray-50 resize-none",
            rows: "8",
            disabled: editIndex !== index
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex justify-between items-center text-sm",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex gap-2",
            children: [editIndex === index ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                className: "inline-flex gap-1 items-center px-3 py-1.5 rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-colors duration-150 cursor-pointer",
                onClick: () => handleSave(note.id),
                children: "\uD83D\uDCBE Save"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                className: "inline-flex gap-1 items-center px-3 py-1.5 rounded-md bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition-colors duration-150 cursor-pointer",
                onClick: handleCancelEdit,
                children: "\u274C Cancel"
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
              className: "inline-flex gap-1 items-center px-3 py-1.5 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-150 cursor-pointer",
              onClick: () => handleEdit(note, index),
              children: "\u270F\uFE0F Edit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
              className: "inline-flex gap-1 items-center px-3 py-1.5 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-150 cursor-pointer",
              onClick: () => deleteNote(note.id),
              children: "\uD83D\uDDD1\uFE0F Delete"
            })]
          })
        })]
      }, note.id))]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteReactComponent);

/***/ }),

/***/ "./src/scripts/SearchReactComponent.js":
/*!*********************************************!*\
  !*** ./src/scripts/SearchReactComponent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SearchReactComponent = () => {
  const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const resultsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (searchTerm === "") {
      setResults(null);
    } else {
      fetchResults(searchTerm);
    }
  }, [searchTerm]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleClickOutside = event => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setResults(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleTyping = e => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  const fetchResults = term => {
    fetch(`${universityData.root_url}/wp-json/university/v1/search?term=${term}`).then(response => response.json()).then(data => {
      setResults(data);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "relative",
    ref: resultsRef,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
      className: "text-gray-700 bg-gray-50 focus:bg-white  \r placeholder-gray-400 transition-all rounded-full py-2.5 px-4 w-full \r border border-gray-200 shadow-sm",
      placeholder: "Search courses, professors, events...",
      value: searchTerm,
      onChange: handleTyping
    }), results && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "absolute bg-white w-full rounded-xl shadow-lg border border-gray-100 mt-2 z-50\r overflow-hidden transition-all duration-200 max-h-96 overflow-y-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
        className: "divide-y divide-gray-100",
        children: [results.generalInfo.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "bg-gray-50 px-4 py-2.5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
              className: "text-sm font-semibold text-gray-600 uppercase tracking-wide",
              children: "General Information"
            })
          }), results.generalInfo.slice(0, 2).map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: item.permalink,
              className: "flex items-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                className: "w-5 h-5 text-blue-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "text-gray-700 hover:text-blue-600 transition-colors",
                children: item.title
              })]
            })
          }, item.permalink))]
        }), results.programs.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "bg-gray-50 px-4 py-2.5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
              className: "text-sm font-semibold text-gray-600 uppercase tracking-wide",
              children: "Programs"
            })
          }), results.programs.slice(0, 2).map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: item.permalink,
              className: "flex items-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                className: "w-5 h-5 text-blue-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "text-gray-700 hover:text-blue-600 transition-colors",
                children: item.title
              })]
            })
          }, item.permalink))]
        }), results.professors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "bg-gray-50 px-4 py-2.5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
              className: "text-sm font-semibold text-gray-600 uppercase tracking-wide",
              children: "Professors"
            })
          }), results.professors.slice(0, 2).map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: item.permalink,
              className: "flex items-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                className: "w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm",
                src: item.image,
                alt: item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "text-gray-700 hover:text-blue-600 transition-colors",
                children: item.title
              })]
            })
          }, item.permalink))]
        }), results.campuses.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "bg-gray-50 px-4 py-2.5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
              className: "text-sm font-semibold text-gray-600 uppercase tracking-wide",
              children: "Campuses"
            })
          }), results.campuses.slice(0, 2).map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: item.permalink,
              className: "flex items-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                className: "w-5 h-5 text-blue-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "text-gray-700 hover:text-blue-600 transition-colors",
                children: item.title
              })]
            })
          }, item.permalink))]
        }), results.events.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "bg-gray-50 px-4 py-2.5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
              className: "text-sm font-semibold text-gray-600 uppercase tracking-wide",
              children: "Events"
            })
          }), results.events.slice(0, 2).map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: item.permalink,
              className: "flex items-center space-x-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                className: "w-5 h-5 text-blue-400",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "text-gray-700 hover:text-blue-600 transition-colors",
                children: item.title
              })]
            })
          }, item.permalink))]
        }), results.generalInfo.length === 0 && results.programs.length === 0 && results.professors.length === 0 && results.campuses.length === 0 && results.events.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "px-4 py-4 text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "w-8 h-8 mx-auto text-gray-300 mb-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1.5,
              d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "text-gray-400 italic",
            children: "No matching results found"
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchReactComponent);

/***/ }),

/***/ "./src/scripts/Slider.js":
/*!*******************************!*\
  !*** ./src/scripts/Slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Slider {
  constructor() {
    this.slides = document.querySelectorAll("[data-slide]");
    this.indicators = document.querySelectorAll("[data-slide-indicator]");
    this.currentIndex = 0;
    this.interval = null;
    this.init();
  }
  init() {
    // Start auto-slide
    this.startAutoSlide();

    // Add click events to indicators
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goToSlide(index));
    });
  }
  startAutoSlide() {
    this.interval = setInterval(() => this.nextSlide(), 5000);
  }
  resetAutoSlide() {
    clearInterval(this.interval);
    this.startAutoSlide();
  }
  updateActiveSlide(index) {
    if (index < 0 || index >= this.slides.length) return; // Ensure index is valid

    // Update slides
    this.slides.forEach(slide => slide.classList.remove("opacity-0"));
    this.slides.forEach(slide => slide.classList.add("opacity-0"));
    this.slides[index].classList.remove("opacity-0");

    // Update indicators
    this.indicators.forEach(indicator => indicator.classList.remove("bg-white", "!bg-white"));
    this.indicators[index].classList.add("bg-white");
  }
  nextSlide() {
    this.currentIndex = this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
    this.updateActiveSlide(this.currentIndex);
  }
  prevSlide() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
    this.updateActiveSlide(this.currentIndex);
  }
  goToSlide(index) {
    this.currentIndex = index;
    this.updateActiveSlide(this.currentIndex);
    this.resetAutoSlide();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _scripts_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Slider */ "./src/scripts/Slider.js");
/* harmony import */ var _scripts_NoteReactComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/NoteReactComponent */ "./src/scripts/NoteReactComponent.js");
/* harmony import */ var _scripts_SearchReactComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/SearchReactComponent */ "./src/scripts/SearchReactComponent.js");
/* harmony import */ var _scripts_LikeReactComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/LikeReactComponent */ "./src/scripts/LikeReactComponent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







if (document.querySelector("#render-react-search-here")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#render-react-search-here"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_SearchReactComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {}));
}
if (document.querySelector("#render-react-note-here")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#render-react-note-here"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_NoteReactComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
}
if (document.querySelector("#render-react-like-here")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#render-react-like-here"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_LikeReactComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {}));
}
new _scripts_Slider__WEBPACK_IMPORTED_MODULE_2__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map