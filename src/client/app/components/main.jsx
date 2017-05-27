import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import ContentMain from './contentMain.jsx';
import Result from './result.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      questions: [
         {
          id: 1,
          text: 'What is your name?',
          choices: [
           {
            id: 'a',
            text: 'Michael'
           },
           {
            id: 'b',
            text: 'Brad'
           },
           {
            id: 'c',
            text: 'Steven'
           }
          ],
          correct: 'b'
         },
         {
          id: 2,
          text: 'What is your mothers name?',
          choices: [
           {
            id: 'a',
            text: 'Sara'
           },
           {
            id: 'b',
            text: 'Sue'
           },
           {
            id: 'c',
            text: 'Donna'
           }
          ],
          correct: 'c'
         },
         {
          id: 3,
          text: 'What is your fathers name?',
          choices: [
           {
            id: 'a',
            text: 'Bobby'
           },
           {
            id: 'b',
            text: 'Harry'
           },
           {
            id: 'c',
            text: 'Wayne'
           }
          ],
          correct: 'c'
         },
         {
          id: 4,
          text: 'What is your friends name?',
          choices: [
           {
            id: 'a',
            text: 'John'
           },
           {
            id: 'b',
            text: 'Paul'
           },
           {
            id: 'c',
            text: 'Jose'
           }
          ],
          correct: 'a'
         }
        ],
      count: 1,
      score:0
    };
  }
  
  updateCounter(incrementScore) {
    this.setState({count: this.state.count+1}, function() {
       console.log("Score is ", this.state.score);
    });
    if(incrementScore) {
      var score = this.state.score + 1;
      this.setState({score: score});
    }
   
  }
  renderUserMessage() {
     console.log("Entering");
    if(this.state.count <= 4) {
      return <ContentMain score={this.state.score} count ={this.state.count} questions={this.state.questions} updateCounter={this.updateCounter.bind(this)}/>
    } else {
      return  <Result count={this.state.count - 1} score={this.state.score}/>
    }
   
  }
  render() {
    return (
      <div>
        <Header headerText="A simple Quiz Application written in React.js"/>
        {this.renderUserMessage()}
      </div>
    )
  } 
}

export default Main;