import React from "react";
import ReactDOM from "react-dom/client";
import Slider from "./scripts/Slider";
import NoteReactComponent from "./scripts/NoteReactComponent";
import SearchReactComponent from "./scripts/SearchReactComponent";
import LikeReactComponent from "./scripts/LikeReactComponent";

if (document.querySelector("#render-react-search-here")) {
  const root = ReactDOM.createRoot(
    document.querySelector("#render-react-search-here")
  );
  root.render(<SearchReactComponent />);
}

if (document.querySelector("#render-react-note-here")) {
  const root = ReactDOM.createRoot(
    document.querySelector("#render-react-note-here")
  );
  root.render(<NoteReactComponent />);
}

if (document.querySelector("#render-react-like-here")) {
  const root = ReactDOM.createRoot(
    document.querySelector("#render-react-like-here")
  );
  root.render(<LikeReactComponent />);
}

new Slider();
