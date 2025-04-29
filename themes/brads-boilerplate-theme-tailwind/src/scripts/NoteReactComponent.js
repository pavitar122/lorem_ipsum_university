import React, { useEffect, useState } from "react";

const NoteReactComponent = () => {
  const [results, setResults] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ title: "", content: "" });
  const [formData, setformData] = useState({ title: "", content: "" });

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = () => {
    fetch(
      `${universityData.root_url}/wp-json/wp/v2/note?author=${universityData.current_user_id}`,
      {
        headers: {
          "X-WP-Nonce": universityData.nonce,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        setEditIndex(null);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
      });
  };

  const handleEdit = (note, index) => {
    setEditIndex(index);
    setEditData({
      title: note.title.raw || note.title.rendered,
      content:
        note.content.raw || note.content.rendered.replace(/(<([^>]+)>)/gi, ""),
    });
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditData({ title: "", content: "" });
    fetchResults();
  };

  const handleSave = (id) => {
    fetch(`${universityData.root_url}/wp-json/wp/v2/note/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": universityData.nonce,
      },
      body: JSON.stringify({
        title: editData.title,
        content: editData.content,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchResults();
      })
      .catch((err) => console.error("Error updating note:", err));
  };

  const createNote = () => {
    fetch(`${universityData.root_url}/wp-json/wp/v2/note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": universityData.nonce,
      },
      body: JSON.stringify({
        title: formData.title,
        content: formData.content,
        status: "publish",
      }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchResults();
      })
      .catch((err) => console.error("Error updating note:", err));
  };

  const deleteNote = (id) => {
    fetch(`${universityData.root_url}/wp-json/wp/v2/note/${id}?force=true`, {
      method: "DELETE",
      headers: {
        "X-WP-Nonce": universityData.nonce,
      },
    })
      .then((res) => res.json())
      .then(() => {
        fetchResults();
      })
      .catch((err) => console.error("Error deleting note:", err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <ul className="container mx-auto max-w-6xl px-4 py-6 space-y-4">
        <form onSubmit={createNote}>
          <div className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Note title"
              className="w-full text-xl font-semibold mb-2 px-2 py-1 border-b-2 border-transparent focus:border-blue-500 focus:outline-none placeholder-gray-400"
            />
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Note content"
              className="w-full px-2 py-2 text-gray-600 border-b-2 border-transparent focus:border-blue-500 focus:outline-none resize-none placeholder-gray-400"
              rows="8"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-colors duration-150 cursor-pointer"
            >
              💾 Add
            </button>
          </div>
        </form>

        {results.length === 0 && (
          <p className="text-center text-gray-500">No notes found.</p>
        )}
        {results.map((note, index) => (
          <li
            key={note.id}
            className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
          >
            <div className="mb-4">
              <input
                value={
                  editIndex === index ? editData.title : note.title.rendered
                }
                onChange={handleInputChange}
                name="title"
                type="text"
                className="w-full text-xl font-semibold mb-2 px-2 py-1 border-b-2 border-transparent focus:border-blue-500 focus:outline-none disabled:bg-gray-50"
                disabled={editIndex !== index}
              />
              <textarea
                value={
                  editIndex === index
                    ? editData.content
                    : note.content.rendered.replace(/(<([^>]+)>)/gi, "")
                }
                onChange={handleInputChange}
                name="content"
                className="w-full px-2 py-2 text-gray-600 border-b-2 border-transparent focus:border-blue-500 focus:outline-none disabled:bg-gray-50 resize-none"
                rows="8"
                disabled={editIndex !== index}
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-2">
                {editIndex === index ? (
                  <>
                    <button
                      className="inline-flex gap-1 items-center px-3 py-1.5 rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-colors duration-150 cursor-pointer"
                      onClick={() => handleSave(note.id)}
                    >
                      💾 Save
                    </button>
                    <button
                      className="inline-flex gap-1 items-center px-3 py-1.5 rounded-md bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition-colors duration-150 cursor-pointer"
                      onClick={handleCancelEdit}
                    >
                      ❌ Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="inline-flex gap-1 items-center px-3 py-1.5 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-150 cursor-pointer"
                    onClick={() => handleEdit(note, index)}
                  >
                    ✏️ Edit
                  </button>
                )}
                <button
                  className="inline-flex gap-1 items-center px-3 py-1.5 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-150 cursor-pointer"
                  onClick={() => deleteNote(note.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoteReactComponent;
