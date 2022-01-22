import { useState } from "react";

// setToDO() : todo 값을 수정하는 함수
//  todo : input의 value값과 연결, todo 값을 수정하면 input의 value도 수정됨

function App() {
  const [todo, setToDO] = useState("");
  // 여러개의 todo를 받을 수 있는 배열생성
  // todo를 추가할떄 해당배열에 추가됨
  const [todos, setToDOs] = useState([]);
  const onChange = (e) => setToDO(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault()
    if (todo === ''){
      alert("Please Write your to do !");
      return; // 함수 동작 중지
    }
    // useState([])에 todos를 추가하는 방법 (todos를 직접적으로 수정할수 X)
    // 1. setToDOs 함수를 생성하여 첫번째 argument로 현재의 state를 보냄 (currenArray)
    // -> 현재 state를 계산하거나 새로운 state를 만드는데 사용함
    // 2. 새로운 todo의 array를 생성하여 return
    // 3. 해당 array에는 이전에 작성한 currenArray와 현재작성한 todo가 담김
      setToDOs( currenArray => [...currenArray, todo]);
      setToDO("");
  };
  console.log(todos);
    


  return (
    <div>
      <h2>1. My Todo List ({todos.length}) </h2>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" placeholder='Write text what to do' />
        <button> ➕ Add </button>
      </form>
      

      {/* 배열의 각 요소를 component로 생성후 new 배열을 생성 */}
      <ul>
        {todos.map( (item, index) => 
          (<li key={index}>{item}</li> ))}
      </ul>
      <hr />

    </div>
  );
};

export default App;
