import { useState } from 'react'

function NewSkillForm({ addSkill }) {

  const [formData, setFormData] = useState({
    name: "",
    level: 3
  })

  function handleChange(e) {
    const { name, value } = e.target
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    addSkill(formData)
    setFormData({
      name: "",
      level: 3
    })
  }

  return (
    <form className='newSkillForm' onSubmit={handleSubmit}>
      <label htmlFor="skill">Skill</label>
      <input
        id="skill"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        autoComplete="off"
      />
      <label htmlFor="level">Level</label>
      <select
        id="level"
        name="level"
        value={formData.level}
        onChange={handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type='submit'>ADD SKILL</button>
    </form>
  )
}

export default NewSkillForm