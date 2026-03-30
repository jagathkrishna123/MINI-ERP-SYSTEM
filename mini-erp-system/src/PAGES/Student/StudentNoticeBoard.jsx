import React, { useState, useEffect } from 'react';

const StudentNoticeBoard = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('announcements')) || [];
    setAnnouncements(data);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-slate-800 border-b-2 border-slate-200 pb-2">Student Notice Board</h2>

      {announcements.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl text-center">
          <p className="text-slate-500 text-lg">No announcements at the moment.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {announcements.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition duration-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                  {item.date}
                </span>
              </div>
              <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentNoticeBoard;