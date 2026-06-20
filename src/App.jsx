import { useState } from 'react'
import './App.css'

const STARTER_TASKS = [
  { id: 1, text: 'เปิด VS Code แล้วลองรันโปรเจกต์นี้ดู', done: true },
  { id: 2, text: 'เพิ่มสิ่งที่ต้องทำของวันนี้', done: false },
  { id: 3, text: 'ติ๊กถูกเมื่อทำสำเร็จ', done: false },
]

function App() {
  const [tasks, setTasks] = useState(STARTER_TASKS)
  const [draft, setDraft] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }])
    setDraft('')
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    )
  }

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const remaining = tasks.filter((task) => !task.done).length

  return (
    <div className="page">
      <div className="notebook">
        <div className="notebook__margin" aria-hidden="true" />

        <header className="notebook__header">
          <h1>สมุดทำสิ่งนี้</h1>
          <p className="notebook__subtitle">
            {remaining === 0
              ? 'ทำครบทุกอย่างแล้ว เก่งมาก'
              : `เหลืออีก ${remaining} อย่างที่ยังไม่เสร็จ`}
          </p>
        </header>

        <form className="add-row" onSubmit={addTask}>
          <input
            className="add-row__input"
            type="text"
            placeholder="วันนี้ต้องทำอะไรบ้าง..."
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            aria-label="เพิ่มสิ่งที่ต้องทำใหม่"
          />
          <button className="add-row__button" type="submit">
            เพิ่ม
          </button>
        </form>

        <ul className="task-list">
          {tasks.length === 0 && (
            <li className="task-list__empty">หน้านี้ยังว่างอยู่ ลองเพิ่มสิ่งแรกดูสิ</li>
          )}
          {tasks.map((task) => (
            <li key={task.id} className={`task ${task.done ? 'task--done' : ''}`}>
              <button
                className="task__check"
                onClick={() => toggleTask(task.id)}
                aria-label={task.done ? 'ทำเครื่องหมายว่ายังไม่เสร็จ' : 'ทำเครื่องหมายว่าเสร็จแล้ว'}
                aria-pressed={task.done}
              >
                {task.done ? '✓' : ''}
              </button>
              <span className="task__text">{task.text}</span>
              <button
                className="task__remove"
                onClick={() => removeTask(task.id)}
                aria-label="ลบรายการนี้"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
