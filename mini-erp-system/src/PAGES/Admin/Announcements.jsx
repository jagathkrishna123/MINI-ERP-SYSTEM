import React, { useState } from 'react';

const Announcements = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !date) {
      alert("Please fill all fields");
      return;
    }

    const newAnnouncement = {
      id: Date.now(),
      title,
      description,
      date
    };

    // Get existing announcements from localStorage
    const existingAnnouncements = JSON.parse(localStorage.getItem('announcements')) || [];

    // Add new announcement
    const updatedAnnouncements = [newAnnouncement, ...existingAnnouncements];

    // Save back to localStorage
    localStorage.setItem('announcements', JSON.stringify(updatedAnnouncements));

    // Clear form
    setTitle('');
    setDescription('');
    setDate('');

    alert("Announcement posted successfully!");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Make an Announcement</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <div className="mb-4">
          <label className="block text-slate-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter announcement title"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-slate-700 font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter announcement details"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-slate-700 font-semibold mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-800 transition duration-200"
        >
          Post Announcement
        </button>
      </form>
    </div>
  );
};

export default Announcements;