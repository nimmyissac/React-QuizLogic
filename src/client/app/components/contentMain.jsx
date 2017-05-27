import React from 'react';
import QuestionCheckbox from './questionCheckbox.jsx';

class ContentMain extends React.Component {
  
   constructor(props) {
     super(props);
   }

  render() {
     console.log("Count = ", this.props.count);
     var question = this.props.questions[this.props.count-1];
     var choices = question ? question.choices : [];
     var that = this;         
     return (
       <div className="container">

         <div className="panel panel-default">
           <div className="panel-body">
             <div className="status">Question {this.props.count} out of 4</div>
             <div className="score"><strong>Score: {this.props.score}</strong></div>
           </div>
         </div>

         <div className="panel panel-default">
           <div className="panel-heading">
             <div className="container page-header">
                <h3>{question ? question.text : ""}</h3>
             </div>
           </div>
           <div className="panel-body">
             <ul className="list-group">
               {
                   choices.map(function(choice) {
                     return <QuestionCheckbox question={question} choice={choice} updateCounter={that.props.updateCounter} key={choice.id}/>
                   })
               }
             </ul>
           </div>
         </div>

       </div>
     );
   }
}

export default ContentMain;