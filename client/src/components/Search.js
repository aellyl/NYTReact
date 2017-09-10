import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            topic:"",
            startYear:"",
            endYear:""
        }
        this.setTopic=this.setTopic.bind(this);
        this.setStartYear=this.setStartYear.bind(this);
        this.setEndYear=this.setEndYear.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    };

    setTopic(event){
        this.setState({topic:event.target.value});
    };

    setStartYear(event){
        this.setState({startYear:event.target.value});
    };

    setEndYear(event){
        this.setState({endYear:event.target.value});
    };

    handleSubmit(event){
        event.preventDefault();

        this.props.setQuery(this.state);
        this.setState({topic:"",startYear:"",endYear:""});
    };

  render() {
    return (
        <div className="mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title mdl-card--border">
          <h2 className="mdl-card__title-text">Search an Article</h2>
        </div>
        <div className="mdl-card__supporting-text">
            <form onSubmit={this.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="topic" onChange={this.setTopic} value={this.state.topic}/>
                <label className="mdl-textfield__label" for="topic">Article Topic</label>
            </div> 
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="startYear" onChange={this.setStartYear} value={this.state.startYear}/>
                <label className="mdl-textfield__label" for="startYear">Start Year</label>
            </div> 
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="endYear" onChange={this.setEndYear} value={this.state.endYear}/>
                <label className="mdl-textfield__label" for="endYear">End Year</label>
            </div>   
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect" type="submit">
                           Search <i className="material-icons">search</i>
            </button>
            </form>
        </div>
       
      </div>
     
 
    );
  }
}

export default Search;