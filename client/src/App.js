import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Result from './components/Result';
import Saved from './components/Saved';
import helper from './helper';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      searchQuery:{
        topic:"",
        startYear:"",
        endYear:""
      },
      results:[],
      savedArticles:[]
    }
    this.setQuery=this.setQuery.bind(this);
    this.saveOneArticle=this.saveOneArticle.bind(this);
  };

  componentDidUpdate() {
    console.log("component did update!");
    //make NYT article api and store the api result to results array
    helper.getNytArticles(this.state.searchQuery.topic,this.state.searchQuery.startYear,this.state.searchQuery.endYear).then(res =>{
      console.log(res);
      if(res)
        {
          this.setState({results:res});
        }
     }
    );
 }

  setQuery(searchQuery){
    //console.log("current article search input: "+ searchQuery);
    this.setState({searchQuery:searchQuery});
  };

  saveOneArticle(article){
    console.log("save one article");
    this.setState({savedArticles:[...this.state.savedArticles,article]})
  }

  render() {
    return (
      <div className="mdl-grid App">
        <div className="mdl-cell--12-col App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>New York Time Article Scrubber</h2>
        </div>
            
            <div className="mdl-cell--2-offset mdl-cell--8-col">
              <Search setQuery={this.setQuery}/>
            </div>
      
            <div className="mdl-cell--2-offset mdl-cell--8-col">
              <Result results={this.state.results} saveArticle={this.saveOneArticle}/>
            </div>
        
            <div className="mdl-cell--2-offset mdl-cell--8-col">
              <Saved />
            </div>
          
        
      </div>
     
 
    );
  }
}

export default App;
