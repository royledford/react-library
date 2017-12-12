// requires Frappe Charts see https://frappe.github.io/charts/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Frappe from 'frappe-charts/dist/frappe-charts.min.esm'
import 'frappe-charts/dist/frappe-charts.min.css'

export default class ChartFrappe extends Component {
  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.shape({
      labels: PropTypes.arrayOf(PropTypes.string.isRequired),
      datasets: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          color: PropTypes.string,
          values: PropTypes.arrayOf(PropTypes.number).isRequired,
        })
      ),
    }).isRequired,
    type: PropTypes.string,
    height: PropTypes.number,
    onSelect: PropTypes.func,
    colors: PropTypes.arrayOf(PropTypes.string),
    format_tooltip_x: PropTypes.func,
    format_tooltip_y: PropTypes.func,
    show_dots: PropTypes.bool,
    heatline: PropTypes.bool,
    region_fill: PropTypes.bool,
    is_navigable: PropTypes.bool,
  }
  static defaultProps = {
    title: '',
    data: {},
    onSelect: {},
  }

  componentDidMount() {
    const { title, data, type = 'bar', height = 250, onSelect, ...rest } = this.props
    this.c = new Frappe({
      parent: this.chart,
      title,
      data,
      type,
      height,
      is_navigable: !!onSelect,
      ...rest,
    })
    if (onSelect) {
      this.c.parent.addEventListener('data-select', onSelect)
    }
  }

  componentWillReceiveProps(props) {
    this.c.update_values(props.data.datasets, props.data.labels)
  }

  componentWillUnmount() {
    const { onSelect } = this.props
    if (onSelect) this.c.parent.removeEventListener('data-select', onSelect)
  }

  render() {
    return <div ref={chart => (this.chart = chart)} />
  }
}
