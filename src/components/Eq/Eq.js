import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EqBar from './EqBar'
import { times } from 'lodash'
import './Eq.css'

export default class Eq extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }
  static defaultProps = {
    width: 100,
  }

  constructor(props) {
    super(props)
    this.state = {
      someState: true,
    }
  }

  renderBars() {
    const count = Math.floor(this.props.width / 10)
    return times(count, i => {
       return <EqBar pos={i} key={i} />
    })
  }

  render() {
    let styles = {
      position: 'relative',
      width: this.props.width,
      height: this.props.height,
      backgroundColor: 'white',
      border: "1px solid blue",
    }
    return (
      <div>
        <div style={styles}>{this.renderBars()}</div>
      </div>
    )
  }
}
