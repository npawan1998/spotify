//context API
export const initialState = {
    user: null,
    playlist:[],
    playing: false,
    item:null,
 //token:null,
 //TODO: remove this after developing
// token: "BQBguxrYXwpGjC0-5fCBMwP1ooB0EHs8s1w80AxZlsOppDBUazbOzj6SDcp8Op9UY8vXWwgmYa3YmRv-x6GhrotR04pt--l2rFOKJB2wxgRx_PVgup8hoGfYnwrDMQOCZbPUSv8WA0rpKkt23czxOQMTrLYg2RWuDbIIagfIWfZ_BJ1y",

}

//state- how it lookes like
//action - set the user, set the currently laying etc



export const reducer = (state,action) =>{

    console.log(action);
    //Action -> type,[payload]

    switch(action.type){
        case 'SET_USER':
            return{ //new state 
                ...state,
                user: action.user 
            }

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists : action.playlists,

            }

        case 'SET_DISCOVER_WEEKLY':
             return{
                 ...state,
                discover_weekly: action.discover_weekly, 
             }
        default:
            return state;
    }
}

export default reducer;