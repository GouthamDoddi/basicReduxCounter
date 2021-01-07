import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut } from '../actions/index';

const Post = () => {
// componentWillMount () {
//     fetch('http://localhost:3000/SMSLogin')
//         .then(res => res.json())
//         .then(data => this.setState());
// }

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.isLogged);

    return (
        <div>

            <h1>Posts  { counter } </h1>
            <button onClick ={() => dispatch(increment()) } > Increment </button>
            <button onClick ={() => dispatch(decrement()) } > Decrement </button>

            <br />

            { isLogged
                ? <button onClick={() => dispatch(signOut()) } > Sign Out </button>
                : <button onClick = {() => dispatch(signIn()) } >Sign In</button>
            }

            { isLogged
                ? <h3>Welcome to the secrete</h3>
                : <h2>Sign in to see the secrete info.</h2> }


        </div>);
};

export default Post;
