import { useState } from "react";

export default function DepartmentList({ departments, onDeleteDepartment, onEditDepartment, onEditCourse, onDeleteCourse }) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const [editingCourseId, setEditingCourseId] = useState(null);
  const [editCourseValue, setEditCourseValue] = useState("");

  const startEditing = (dept) => {
    setEditingId(dept.id); // state got value , and it bacame true
    setEditValue(dept.name); // deprtment name stored in to state , so it will show in input field
  };

  const saveEdit = (id) => {
    onEditDepartment(id, editValue);
    setEditingId(null);
  };

  const startEditingCourse = (course) => {
    setEditingCourseId(course.id);
    setEditCourseValue(course.name);
  };

  const saveCourseEdit = (deptId, courseId) => {
    onEditCourse(deptId, courseId, editCourseValue);
    setEditingCourseId(null);
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Departments</h2>

      {departments.map((dept) => (
        <div key={dept.id} className="border rounded p-3 mb-3">

          <div className="flex justify-between items-center mb-2">

            {editingId === dept.id ? (
              <div className="flex gap-2 flex-1 mr-4">
                <input
                  className="border p-1 rounded w-full"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  onClick={() => saveEdit(dept.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded text-sm font-bold"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded text-sm font-bold"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-bold">{dept.name}</h3>

                <div className="flex gap-2">
                  <button
                    onClick={() => startEditing(dept)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteDepartment(dept.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}

          </div>

          <ul className="list-disc ml-8 space-y-2">
            {dept.courses?.map((course) => (
              <li key={course.id} className="text-sm">
                {editingCourseId === course.id ? (
                  <div className="flex gap-2 items-center">
                    <input
                      className="border p-1 rounded text-xs"
                      value={editCourseValue}
                      onChange={(e) => setEditCourseValue(e.target.value)}
                    />
                    <button
                      onClick={() => saveCourseEdit(dept.id, course.id)}
                      className="text-green-600 font-bold"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingCourseId(null)}
                      className="text-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-between items-center group">
                    <span>{course.name}</span>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => startEditingCourse(course)}
                        className="text-blue-500 text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDeleteCourse(dept.id, course.id)}
                        className="text-red-500 text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}