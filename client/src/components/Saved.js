import React, { Component } from 'react';

class Saved extends Component {
  render() {
    return (
        <div className="mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title mdl-card--border">
          <h2 className="mdl-card__title-text">Saved Articles</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <ArticleR />
        </div>

      </div>
     
 
    );
  }
}

class ArticleR extends Component{
    render(){
        return(
            <div className="mdl-grid">
                <div className="mdl-cell--8-col">
                    Article Title
                </div>
                <div className="mdl-cell-4-col">
                    <button className="mdl-button mdl-js-button mdl-button--icon" data-article="Article Title"><i className="material-icons">delete</i></button>
                </div>
            </div>
        );
    }
}

export default Saved;