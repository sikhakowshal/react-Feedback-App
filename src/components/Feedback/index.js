import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {count: 3}

  thankCustomer = () => {
    this.setState({count: 0})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const {count} = this.state

    if (count === 0) {
      return (
        <div className="container">
          <div className="feedback-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="thank-text"> Thank You </h1>
            <p className="feedback">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="reactions-container">
          <h1 className="heading">
            How satisfied are you with our <br /> customer support performance
          </h1>
          <ul className="reaction-card">
            {emojis.map(emoji => (
              <li className="emoji-item" key={emoji.id}>
                <img
                  src={emoji.imageUrl}
                  className="emoji"
                  alt={emoji.name}
                  onClick={this.thankCustomer}
                />
                <p className="emoji-title">{emoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
