import React, { Component } from 'react';
import {connect} from 'react-redux'

import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';

import {requestArticles, requestMedium} from '../../ducks/hackerNewsReducer'


class Medium extends Component {
  componentDidMount(){
    this.props.requestMedium()
  }
  render() {
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./mediumLogo.png" style={styles.logo} alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, {requestMedium})(Medium);

const styles = {
  logo: { width: '250px' }
}