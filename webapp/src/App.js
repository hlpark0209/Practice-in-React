import React, { Component } from 'react';

// 사용자 정의 태그 생성, 재사용가능
class Subject extends Component{
  render(){
    return (
      <header>
        <h1>WEB이란?</h1>
        World Wide Web
      </header>
    )
  }
}

class TOC extends Component{
  render(){
    return (
      <nav>
        <ol>
          <li><a href ="1.html">HTML</a></li>
          <li><a href ="2.html">CSS</a></li>
          <li><a href ="3.html">JAVASCRIPT</a></li>
        </ol>
      </nav>
    )
  }
}


class Contents extends Component{
  render(){
    return (
      <article>
        <h2> welcome</h2>
        Hello React !
      </article>
    )
  }
}





class App extends Component {
  render(){
    return (
      <div className="App">
        
        <Subject></Subject>

        <TOC></TOC>

        <Contents></Contents>





      </div>
    );
  } 
}

export default App;
