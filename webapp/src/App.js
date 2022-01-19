import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';

// 사용자 정의 태그 생성, 재사용가능
class Subject extends Component{
  render(){
    return (
      <header>
        <h1><a href='/' onClick={function (e){
          e.preventDefault();
          this.props.onClick();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    )
  }
}

class TOC extends Component{
  render(){
     // var list = [
    //   <li><a href ="1.html">HTML</a></li>,
    //   <li><a href ="2.html">CSS</a></li>,
    //   <li><a href ="3.html">JAVASCRIPT</a></li>,
    // ];

    var list =[];
    var i = 0;
    while( i < this.props.data.length){
      var data = this.props.data[i];
      // 배열을 기반으로 하여 생성된 태그들은 고유의 속성값을 주어야함
      list.push(
      <li key={data.id}>
        <a href ={data.id + ".html"} onClick={function(id, e){  //onClick 대문자로 작성
          e.preventDefault();
          // .bind()를 생성해야 함수안에서도 this 사용이 가능함 ( 함수안에서의 this는 사용불가)
          this.props.onSelect(id);
        }.bind(this, data.id)}>
          {data.title}
        </a>
      </li>);
      i++;
    }

    return (
      <nav>
        <ol>
          {list}
        </ol>
      </nav>
    )
  }
}


class Contents extends Component{
  render(){
    return (
      <article>
        <h2> {this.props.data.title}</h2>
        {this.props.data.desc}
      </article>
    )
  }
}


class Create extends Component{
  state = {
    title : '',
    desc : ''
  }
  onChangeForm(e){
    this.setState({[e.target.name] : e.target.value});
  }
  render(){
    return (
      <article>
        <form onSubmit={function(e){
          e.preventDefault();
          this.props.onSubmit(this.state);
          }.bind(this)}>
          <p><input
            type="text" placeholder='Write title'
            name = 'title'
            value={this.state.title}
            onChange={this.onChangeForm.bind(this)}></input></p>
          <p><textarea
              placeholder='Write description'
              name = 'desc'
              value={this.state.desc}
              onChange={this.onChangeForm.bind(this)}
              ></textarea></p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    );
  }
}
class App extends Component {
  lastContentId = 3;
  // 배열을 가진 객체 생성
  state = {
    mode :'read',
    seleccted_content_id : 3,
    contents : [
      {id : 1, title : 'HTML', desc : 'HTML is for information'},
      {id : 2, title : 'CSS', desc : 'CSS is for design'},
      {id : 3, title : 'JAVASCRIPT', desc : 'JAVASCRIPT is for interaction'},
    ]
  }
  getSelected(){
    var i = 0;
    while( i < this.state.contents.length){
      var data = this.state.contents[i];
      if(this.state.seleccted_content_id === data.id){
        return data;
      }
      i++;
    }
  }
  getContentComponent(){
    if( this.state.mode === 'read' ){
      return <Contents data = {this.getSelected()}></Contents>
    } else if ( this.state.mode === 'welcome' ){
      return <Contents data ={{
        title : 'welcome to WEB WORLD!',
        desc : 'HELLO REACT !'
      }}></Contents>
    } else if( this.state.mode === 'create'){
      return <Create onSubmit={function(formData){
        console.log(formData);
        this.lastContentId = this.lastContentId + 1;
        formData.id = this.lastContentId;
        //내용복사
        var newContents = Object.assign([], this.state.contents);
        newContents.push(formData);
        this.setState({
          contents:newContents,
          seleccted_content_id : this.lastContentId,
          mode:'read'
        });
      }.bind(this)}></Create>
    }
    
  }

  getControlBtn(){
    return [
      <a key ="1" href='/create' onClick={function(e){
        e.preventDefault();
        this.setState({ mode : 'create'});
      }.bind(this)}>create</a>,
      <a key ="2" href='/update'  onClick={function(e){
        e.preventDefault();
        
      }.bind()}>update</a>,
      <input key ="3" type="button" onClick={function(){
        var newContents = this.state.contents.filter(function(el){
          if(el.id !== this.state.seleccted_content_id){
            return el;
          }
        }.bind(this));
        this.setState({
          contents : newContents,
          mode : 'welcome'
        });
      }.bind(this)} value="delete"></input>,
    ];
  }

  render(){
    var content = this.getSelected();
    return (
      <div className="App">
        
        <Subject onClick = {function(){
          this.setState({mode: 'welcome'});
        }.bind(this)}title="WEB이란 무엇인가" sub="World Wide Web 알아보기"></Subject>
        <TOC onSelect={function(id){
          //this.sstate.seleccted_content_id의 값을 id값으로 바꾸어라
          this.setState({
            seleccted_content_id : id,
            mode : 'read'
          });
        }.bind(this)} 
        data={this.state.contents}></TOC>



        {/* 수정/삭제버튼 생성 */}
        {this.getControlBtn()}


        {this.getContentComponent()}

      </div>
    );
  } 
}

export default App;
