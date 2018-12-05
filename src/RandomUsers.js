import React from 'react'

import { connect } from 'react-redux'
import { fetchUsersAsyncAction } from './state/randomUsers'

class RandomUsers extends React.Component {

    componentDidMount() {
        this.props._fetchUsersAsyncAction(
            'https://ranadomuser.me/api'
        )
    }

    handleErrorButton = () => {
        this.props._fetchUsersAsyncAction(
            'https://randomuser.me/api'
        )
    }

    render() {
        return (
            <div>
                {
                    this.props._isError ?
                        <div>

                            <h1>Error</h1>
                            <button
                                onClick={this.handleErrorButton}
                            >
                                Try again
                            </button>

                        </div>
                        :
                        this.props._isFetching ?
                            'Loading...'
                            :

                            this.props._users.map(
                                user => <div
                                    key={user.name.first}
                                >
                                    {
                                        user.name.first
                                    }
                                </div>
                            )
                }
            </div >
        )
    }
}

const mapStateToProps = state => ({
    _users: state.randomUsers.users,
    _isError: state.randomUsers.isError,
    _isFetching: state.randomUsers.isFetching
})

const mapDispatchToProps = dispatch => ({
    _fetchUsersAsyncAction: (url) => dispatch(fetchUsersAsyncAction(url))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RandomUsers)