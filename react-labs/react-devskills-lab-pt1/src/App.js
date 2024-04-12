import SkillList from "./SkillList"
import NewSkillForm from "./NewSkillForm"
import SkillListItem from "./SkillListItem"




import './App.css';

function App() {
  return (
    <div className="App">
        <h1>React Dev Skills</h1>
        <SkillList/>
        <hr></hr>
        <NewSkillForm/>         
        <SkillListItem/>
    </div>
  );
}

export default App;
