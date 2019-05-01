import React, { Component } from 'react';
import {connect} from 'react-redux'

import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';

import {requestReddit} from '../../ducks/hackerNewsReducer'



class Reddit extends Component {
  componentDidMount(){
    this.props.requestReddit()
  }

  render() {
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./redditLogo.png" alt="" style={styles.logo} />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, {requestReddit})(Reddit)


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}