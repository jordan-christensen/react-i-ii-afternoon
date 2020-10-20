import React, { Component } from 'react';

class Roster extends Component{

  render(){
    console.log(this.props)
    const {data, index} = this.props
    return(
    <div className="rosterWrap">
      <h1 className="id"> {(index +1)}/{data.length} </h1>
      <div className="infoWrap">
        <br/>
        <br/>
        <h1 id="name"> {data[index].name.first} {data[index].name.last} </h1>
        <div className="info">
          <div className="row from">
            <p className="label">From: </p>
            <p className="normal"> {data[index].city}, {data[index].country} </p>
          </div>
          <div className="row title">
            <p className="label">Job Title: </p>
            <p className="normal">{data[index].title}</p>
          </div>
          <div className="row employer">
            <p className="label">Employer: </p>
            <p className="normal">{data[index].employer}</p>
          </div>
          <div className="box moviesList">
            <p className="label">Favorite Movies: </p>
            <div className="moviesBox indent">
              <p className="normal">1. {data[index].favoriteMovies[0]}</p>
              <p className="normal">2. {data[index].favoriteMovies[1]}</p>
              <p className="normal">3. {data[index].favoriteMovies[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    )
  }
}

export default Roster;