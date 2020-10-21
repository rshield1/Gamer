import React, { useState } from 'react'
// import {useSelector, useDispatch} from 'react-redux'

// useSelector = mapStateStateToProps
// useDispatch = mapDispatchProps

const Button = (props) => {
    const [upvote, setUpvote] = useState(0)
    const [title, setTitle] = useState("")

  
        return (
            <div onClick={() => setUpvote(upvote + 1)}>
                {upvote}
            </div>
        )
}

export default Button