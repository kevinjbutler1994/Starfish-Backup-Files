import Sidebar from "./Sidebar";
import TopBox1 from "./TopBox1";
import TopBox2 from "./TopBox2";
import TopBox3 from "./TopBox3";
import BottomBox from "./BottomBox";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="4boxes">
        <div className="3boxes">
          <TopBox1 />
          <TopBox2 />
          <TopBox3 />
        </div>
        <BottomBox />
      </div>
    </div>
  );
}

export default App;
