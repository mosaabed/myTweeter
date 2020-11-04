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



const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}
