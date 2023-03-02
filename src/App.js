import React from 'react';

import {ThemeProvider} from './useContext/ThemeContext'
import FunctionComp from './useContext/FunctionComponent';

import MemoComp from './useMemo/useMemoComp';

import CallbackDemo from './useCallback/CallBackDemo';

import Counter from './useReducer/Counter';
import ToDoComp from './useReducer/ToDoComp';

import UseTransisitionComp from './useTransition/useTransition';

import UseDeferredComp from './useDeferred/useDeferred';

function App() {
  return (
    <div style={{marginLeft: '0.5rem'}}>
    <ThemeProvider>
      <FunctionComp/>
    </ThemeProvider>
    <hr/>
    <p>useMemo Demo, Above and Below Component are separate and don't share any state between them </p>
    <MemoComp/>

    <hr/>
    <p>useCallBack Demo, Above and Below Component are separate and don't share any state between them </p>
    <CallbackDemo/>

    <hr/>
    <p>useReducer Demo, Above and Below Component are separate and don't share any state between them </p>
    <Counter/>
    <ToDoComp/>

    <hr/>
    <p>useTransistion Demo, Above and Below Component are separate and don't share any state between them </p>
    <UseTransisitionComp/>

    <hr/>
    <p>useDeferred Demo, Above and Below Component are separate and don't share any state between them </p>
    <UseDeferredComp/>
    </div>
  );
}

export default App;


// const [darkTheme, setDarkTheme] = useState(false);

//   function toggleDarkTheme() {
//     setDarkTheme(!darkTheme);
//   }
  
//   return (
//     <ThemeContext.Provider value= {darkTheme}>
//     <div className="App">
//       <button style = {{margin: '1rem', padding: '0.5rem'}} onClick={toggleDarkTheme} >Toggle Theme</button>
//       <ClassBasedComp/>
//       <FunctionComp/>
//     </div>
//     </ThemeContext.Provider>
//   );
// }