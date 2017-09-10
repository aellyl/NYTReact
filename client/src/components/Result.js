import React, { Component } from 'react';
import helper from '../helper';

class Result extends Component {
    render() {
        return (
            <div className="mdl-card mdl-shadow--4dp">
                <div className="mdl-card__title mdl-card--border">
                    <h2 className="mdl-card__title-text">Results</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {this.props.results.map((one, key) => <Article key={key} oneArticle={one} saveArticle={this.props.saveArticle}/>)}
                </div>

            </div>


        );
    }
}

class Article extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            date:"",
            url:"",
            snippet:"",
            saveDT:Date.now()
        }
      
        this.handleSave=this.handleSave.bind(this);
    }

    handleSave(e){
        console.log("in handleSave");
        console.log(this.props);
        e.preventDefault();

        var currArticle={
            title:this.props.oneArticle.headline.main,
            date:this.props.oneArticle.pub_date,
            url:this.props.oneArticle.web_url,
            snippet:this.props.oneArticle.snippet
        };
        helper.saveAnArticle(currArticle);
        
    }

    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp result">

                <div className="mdl-card__title mdl-card--border">
                    <h4 className="mdl-card__title-text"> <a href={this.props.oneArticle.web_url} target="_blank">{this.props.oneArticle.headline.main}</a></h4>
                </div>

                <div className="mdl-card__supporting-text">
                    <p>{this.props.oneArticle.snippet}</p>
                </div>
                <div className="mdl-card__menu">
                    <button className="mdl-button mdl-js-button mdl-button--icon" data-article={this.props.oneArticle.headline.main} onClick={this.handleSave}><i className="material-icons">save</i></button>
                </div>
            </div>
        );
    }
}

export default Result;