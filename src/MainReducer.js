const MainReducer = (state = { todos : [] , posts: [], userId: ""}, action) =>
{
    switch(action.type)
    {
        case 'ShowDetails':
            // return {...state, todos : action.payload.todos, posts : action.payload.posts}
            return {...state, posts : action.payload.posts, todos : action.payload.todos, userId: action.payload.userId}

        
        default:
            return state;
    }
}


export default MainReducer;