export default function DepartmentList({ departments, onDeleteDepartment }) {
  return (
    <div>
      <h2 className="font-semibold mb-3">Departments</h2>

      {departments.map((dept) => (
        <div key={dept.id} className="border rounded p-3 mb-3">

          <div className="flex justify-between items-center">
            <h3 className="font-bold">{dept.name}</h3>

            <button
              onClick={() => onDeleteDepartment(dept.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>

          <ul className="list-disc ml-5 mt-2">
            {dept.courses.map((course) => (
              <li key={course.id}>{course.name}</li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}