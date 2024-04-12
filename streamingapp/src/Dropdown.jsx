import React from "react";
// import "./App.css";

// function App() {
//     return (
//       <div className="p-10">
//         <h1 className="font-semibold text-3xl py-2">ReactJS Dropdown</h1>
//         <p>Click on a dropdown to see the dropdown component in action!</p>
//         <div className="my-10 flex flex-wrap">
//           <Dropdown>
//             <Dropdown.Button>Dropdown 1</Dropdown.Button>
//             <Dropdown.Content>
//               <Dropdown.List>
//                 <Dropdown.Item>Dropdown Menu Item 1</Dropdown.Item>
//                 <Dropdown.Item>Dropdown Menu Item 2</Dropdown.Item>
//                 <Dropdown.Item>Dropdown Menu Item 3</Dropdown.Item>
//                 <Dropdown.Item>Dropdown Menu Item 4</Dropdown.Item>
//                 <Dropdown.Item>Dropdown Menu Item 5</Dropdown.Item>
//               </Dropdown.List>
//             </Dropdown.Content>
//           </Dropdown>
//           <Dropdown>
//             <Dropdown.Button>Dropdown 2</Dropdown.Button>
//             <Dropdown.Content>
//               <Dropdown.List>
//                 <Dropdown.Item>Another Menu Item 1</Dropdown.Item>
//                 <Dropdown.Item>Another Menu Item 2</Dropdown.Item>
//                 <Dropdown.Item>Another Menu Item 3</Dropdown.Item>
//               </Dropdown.List>
//             </Dropdown.Content>
//           </Dropdown>
//           <Dropdown>
//             <Dropdown.Button>Dropdown 3</Dropdown.Button>
//             <Dropdown.Content>
//               <div className="p-5 w-64">
//                 <p className="font-bold mb-2">Surprise!!! 🎉</p>
//                 <p>Your dropdown doesn't have to be a menu. You could have a form in here, or a search, or anything your heart desires.</p>
//               </div>
//             </Dropdown.Content>
//           </Dropdown>
//         </div>
//        </div>
//       )
//   }
  
//   // dropdown context for open state
//   const DropdownContext = React.createContext({
//       open: false,
//       setOpen: () => {},
//   });
  
//   // dropdown component for wrapping and providing context
//   function Dropdown({ children, ...props }) {
//     const [open, setOpen] = React.useState(false);
//     const dropdownRef = React.useRef(null);
    
//     // click listeners for closing dropdown
//     React.useEffect(() => {
//       // close dropdown if click outside
//       function close(e) {
//         if (!dropdownRef.current.contains(e.target)) {
//           setOpen(false);
//         }
//       };
//       // add or remove event listener
//       if (open) {
//         window.addEventListener("click", close);
//       }
//       // cleanup
//       return function removeListener() {
//         window.removeEventListener("click", close);
//       }
//     }, [open]); // only run if open state changes
    
//     return (
//        <DropdownContext.Provider value={{ open, setOpen }}>
//          <div ref={dropdownRef} className="relative m-1">{children}</div>
//        </DropdownContext.Provider>
//     );
//   };
  
//   // dropdown button for triggering open
//   function DropdownButton({ children, ...props }) {
//     const { open, setOpen } = React.useContext(DropdownContext); // get the context
    
//     // to open and close the dropdown
//     function toggleOpen() {
//       setOpen(!open);
//     };
    
//     return (
//       <button onClick={toggleOpen} className="rounded px-4 py-2 font-bold text-white bg-gray-800 flex items-center">
//         { children }
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={15} height={15} strokeWidth={4} stroke="currentColor" className={`ml-2 ${open ? "rotate-180" : "rotate-0"}`}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//         </svg>
//       </button>
//     );
//   };
  
//   // dropdown content for displaying dropdown
//   function DropdownContent({ children }) {
//     const { open } = React.useContext(DropdownContext); // get the context
    
//     return (
//       <div className={`absolute z-20 rounded border border-gray-300 bg-white overflow-hidden my-1 overflow-y-auto ${ open ? "shadow-md" : "hidden"}`}>
//         { children }
//       </div>
//     );
//   };
  
//   // dropdown list for dropdown menus
//   function DropdownList({ children, ...props }) {
//     const { setOpen } = React.useContext(DropdownContext); // get the context
    
//     return (
//       <ul onClick={() => setOpen(false)} className="divide-y divide-gray-200 text-gray-700" {...props}>
//         { children }  
//       </ul>
//     );
//   };
  
//   // dropdown items for dropdown menus
//   function DropdownItem({ children, ...props }) {
//     return (
//       <li>
//         <button className="py-3 px-5 whitespace-nowrap hover:underline" {...props}>{ children }</button> 
//       </li>
//     );
//   };
  
  
//   // optional - but I like this pattern to know it must be a child of Dropdown
//   Dropdown.Button = DropdownButton;
//   Dropdown.Content = DropdownContent;
//   Dropdown.List = DropdownList;
//   Dropdown.Item = DropdownItem;
  
  
  
  
//   // ========================================
  
//   ReactDOM.render(
//     <App />,
//     document.getElementById('app')
//   );
  
//   export default App;