import React from 'react';

class QuestionCheckbox extends React.Component {
  onClick() {
    console.log("Clicked");
    var incrementScore = false;
    this.refs.radiobutton.checked = false;
    if(this.props.choice.id === this.props.question.correct) {
      incrementScore = true;
    };
    this.props.updateCounter(incrementScore);
  }
  render() {
    return (
       <li className="list-group-item">
         {this.props.choice.id} 
         <input type="radio" ref="radiobutton"  name= {this.props.choice.id} value={this.props.choice} onClick={this.onClick.bind(this)} />
         <span>{this.props.choice.text}</span>
       </li>
    );
  }
}
export default QuestionCheckbox;