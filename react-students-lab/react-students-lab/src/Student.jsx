import react from 'react';
import Score from './Score';

const Student = props => (
<div>
    <h1>Name:{props.name}</h1>
    <p>{props.bio}</p>

    
    {props.scores.map((score, idx) => (
      <Score key={idx} date={score.date} score={score.score} />
    ))}
    
    </div>
);

export default Student;
