import React, { Component } from 'react'

class NewTweet extends Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state

    console.log('New tweet: ', text)

    this.setState(() => ({
      text: ''
    }))
  }

  render() {
    const { text } = this.state
    const tweetLeft = 280 - text.length

    //todo: redirect to / if subitted

    return (
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button
            className='button'
            type='submit'
            disabled={text === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }

}

export default NewTweet