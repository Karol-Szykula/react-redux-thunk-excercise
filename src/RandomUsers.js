import React from 'react'

import { connect } from 'react-redux'

import { fetchUsersAsyncAction } from './state/randomUsers'

const RandomUsers = (props) => (
    <div>
        {
            props._users.map(
                user => <div
                    key={user.name.first}
                >
                    {
                        user.name.first
                    }
                </div>
            )
        }
    </div>
)

const mapStateToProps = state => ({
    _users: state.randomUsers.users,
    _isError: state.randomUsers.isError,
    _isFetching: state.randomUsers.isFetching
})

const mapDispatchToProps = dispatch => ({
    _setUsers: () => dispatch(fetchUsersAsyncAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RandomUsers)