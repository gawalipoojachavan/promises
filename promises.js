const posts=[{title:' post one',body:'this is post one'},
{title:'post two',body:'this is post two'}];
function getPost(){
    let output=''
    setTimeout(()=>{
        posts.forEach((post)=>{
            output+=`<li>${post.title} is created</li>`
            document.body.innerHTML=output
        })
    },1000)
}
function createPost(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error=false;
        if(!error){
            resolve();
        }
        else{
            reject('error')
        }
    },1000)
})
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop()
            const error=true;
            if(!error){
                resolve();
            }
            else{
                reject('error: Array is empty now')
            }
        },2000)
    })
}
//getPost()
createPost({title:'post four',body:'this is post four'}).then(getPost).catch(err=>console.log(err))
for(let i=1;i<4;i++){
deletePost().then(getPost).catch(err=>console.log(err))}