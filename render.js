function Renderer()
{
   
    function renderPosts(Posts){
        postsElem = $("#posts")
        postsElem.empty()
        for(post of Posts){
            
            postBody = $(`<div data-id = ${post.id} class="post">${post.text}</div>`)
            postBody.append(`<span class="delete" onclick = "delet_post(this)">Delet Post</span>`)
            for (comment of post.comments){
                comment_body = $(`<div data-id = ${comment.id} class="comments">${comment.text}</div>`)
                comment_body.append(`<span class="delete-comment" onclick = "delet_comment(this)">X</span>`)
                postBody.append(comment_body)
            }
            new_comment = (`<input type="text" placeholder="comment!" class = "myComment" >
            <div  onclick= "uploadComment(this)" class = "myComUp">comment</div>`)
            postBody.append(new_comment)
            postsElem.append(postBody)
        }
    }
    return{
        renderPosts:renderPosts
    }
}