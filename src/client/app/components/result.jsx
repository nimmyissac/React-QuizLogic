import React from 'react';
class Result extends React.Component {
  calculateResult() {
     var percentage = (this.props.score/this.props.count) * 100;
     return percentage;
  }
  
  render() {
    return (
       <div className="container">
         <div className="panel panel-default">
           <div className="panel-heading">
             <div className="container page-header">
                <h3>Your Result</h3>
             </div>
           </div>
           <div className="panel-body">
                       <div> <span className="resultText"> You Scored </span><span className="result">  {this.calculateResult()}% </span> </div>

           </div>
        </div>
       </div>
    );

  }
}

export default Result;

