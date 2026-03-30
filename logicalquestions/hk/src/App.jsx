import React from 'react'
import Task1 from './TASKS/Task1'
import Task2 from './TASKS/Task2'
import Task3 from './TASKS/Task3'
import Task4 from './TASKS/Task4'
import Task5 from './TASKS/Task5'
import Task6 from './TASKS/Task6'
import Task7 from './TASKS/Task7'
import Task8 from './TASKS/Task8'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10 space-y-12">
      <h1 className="text-3xl font-bold text-center mb-8">React Logical Practice Tasks</h1>

      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-blue-600">Task 1: Counter with Limits</h2>
        <Task1 />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-blue-600">Task 2: Mode Switcher</h2>
        <Task2 />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-blue-600">Task 3: Selection Toggle</h2>
        <Task3 />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-blue-600">Task 4: Dynamic Search Filter</h2>
        <Task4 />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-blue-600">Task 5: Select All Checkbox</h2>
        <Task5 />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-blue-600">Task 6: Character & Word Counter</h2>
        <Task6 />
      </section>
      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-blue-600">Task 7: Alert when form fill</h2>
        <Task7 />
      </section>
      <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-blue-600">Task 7: Todo with Delete</h2>
        <Task8 />
      </section>
    </div>
  )
}

export default App