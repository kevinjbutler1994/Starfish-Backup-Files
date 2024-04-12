import React from 'react'

function SkillListItem({ skill }) {

  return (
    <li className="skillListItem">
      <p>{skill.name}</p>
      <button className="level">Level: {skill.level}</button>
    </li>
  )
}

export default SkillListItem