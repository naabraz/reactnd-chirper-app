import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import TweetPage  from './TweetPage'
import NewTweet from './NewTweet'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <TweetPage match={{params: {id: '2mb6re13q842wu8n106bhk'}}}/>
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)