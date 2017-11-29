import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './EqBar.css'

export default class EqBar extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    someProp: PropTypes.string,
  }
  static defaultProps = {
    someProp: 'someValue',
  }

  constructor(props) {
    super(props)
    this.state = {
      someState: true,
    }
  }

  render() {
    const width = 10

    let styles = {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 1,
      height: 10,
    }

    let invisStyles = {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 10,
    }

    let leftPos = 0
    if (this.props.pos > 0) {
      // leftPos = this.props.pos * width + spacing * this.props.pos
      leftPos = this.props.pos * width
    } else {
      leftPos = this.props.pos * width
    }

    styles.left = leftPos
    invisStyles.left = leftPos

    return (
      <div>
        <div className="barInvis" style={invisStyles} />
        <div className="bar" style={styles} />
      </div>
    )
  }
}
