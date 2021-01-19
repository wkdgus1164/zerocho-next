const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://pbs.twimg.com/media/EIlWXnoUEAAM7cy?format=jpg&name=large'
        }, {
            src: 'https://t1.daumcdn.net/cfile/tistory/99A219465DBAE16213'
        }, {
            src: 'https://pbs.twimg.com/media/EK5jJ41XUAAMuX_?format=jpg&name=4096x4096'
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 개정판이 나왔군요~',
        }, {
            User: {
                nickname: 'nero',
            },
            content: '우와 개정판이 나왔군요~',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST
};

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true
            }
        default:
            return state;
    }
};

export default reducer;