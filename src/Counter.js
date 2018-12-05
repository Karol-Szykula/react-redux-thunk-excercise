import React from 'react'
import { connect } from 'react-redux'

import { inc, dec } from './state/counter'

const Counter = (props) => (
    <div>
        <h1>
            {props.counter.number}
        </h1>
        <button
            onClick={() => { props.increment(1) }}
        >
            +
    </button>
        <button
            onClick={() => { props.decrement(1) }}
        >
            -
    </button>
    </div>
)

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    increment: (number) => dispatch(inc(number)),
    decrement: (number) => dispatch(dec(number))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)