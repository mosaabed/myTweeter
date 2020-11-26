



const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

function delet_post(delet_buttom)
{
    const postId = $(delet_buttom).parent().data().id
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
}
function uploadPost()
{
    text = $("input").val()
    tweeter.addPost(text)
    text = $("input").val("")
    renderer.renderPosts(tweeter.getPosts())
}

function delet_comment(deleted_comment){
    const commentId = $(deleted_comment).parent().data().id
    const postId = $(deleted_comment).parent().parent().data().id
    tweeter.removeComment(postId , commentId)
    renderer.renderPosts(tweeter.getPosts())
}

function uploadComment(comment_button)
{   
    const postId = $(comment_button).parent().data().id
    const text = $(comment_button).parent().find(".myComment").val()
    
   
    tweeter.addComment(text , postId)

    renderer.renderPosts(tweeter.getPosts())
}