import SkillList from './SkillList.jsx'
import NewSkillForm from './NewSkillForm.jsx'
import { useState } from 'react'
import './App.css'

function App() {

  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])

  function addSkill(newSkill) {
    setSkills((prevSkills) => ([...prevSkills, newSkill]) )
  }

  return (
    <div className='app'>
      <h1 className='teal-text'>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm addSkill={addSkill} />
    </div>
  )
}
 export default App