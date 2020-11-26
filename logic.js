const a = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]


function Tweeter()
{
    const  _posts = a
    let _postIdCounter = 3
    let _commentIdCounter = 7
    function _getPostById(id)
    {
        for (let i = 0; i < _posts.length; i++) {
            if(_posts[i].id == id){
                return i
            }
        }
        return -1
    }
    function _creatNewPost(text){
        return{
            text: text,
            id: "p" + _postIdCounter ,
            comments: []
        }
    }
    function getPosts(){
        return _posts
    }
    function addPost(text){
        const new_post = _creatNewPost(text)
        _posts.push(new_post)
        _postIdCounter++
    }

    function removePost(id){
        const index = _getPostById(id)
        if (index == -1){return -1}
        _posts.splice(index ,1)
        //_posts.indexOf()
    }
    function addComment(text , id ){
        const index  = _getPostById(id)
        if(index == -1){return -1}
        _posts[index].comments.push(
            {id: "p" + _commentIdCounter, text :text})
            _commentIdCounter++
    }
    function removeComment(postId , commentId){
        const postIndex = _getPostById(postId)
        if(postIndex == -1){return -1}
        for (let i = 0; i < _posts[postIndex].comments.length; i++) {
            if(_posts[postIndex].comments[i].id == commentId){
                _posts[postIndex].comments.splice(i,1)
                return 1
            }
        }
        return-1
    }
    return{
        getPosts : getPosts,
        addPost : addPost, 
        addComment : addComment, 
        removeComment : removeComment,
        removePost : removePost
    }
}
