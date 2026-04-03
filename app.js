const signInBtn =document.getElementById('signinbtn');
if (signInBtn){
    signInBtn.onclick = function(){location.href = 'home.html'}
}


function savePost(){
    const price= document.getElementById('price').value;
    const details = document.getElementById('details').value;
    const location = document.getElementById('location').value;
    const washrooms = document.getElementById('washrooms').value;
    const imageInput = document.getElementById('addimage');

    const files = Array.from(imageInput.files); 

    if(!price|| !details|| !location|| files.length===0){
        alert('fill in all form');
        return
    }

    const imagePromises = files.map(file=>{
        return new Promise((resolve)=>{
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);

    });
}) 
Promise.all(imagePromises).then(base64Images=>{
    const newPost = {
        price:'$'+ price + '/month', 
        details:'' + details,
       // bedrooms: bedrooms,
        washrooms: washrooms,
      //  porch: porch,
        location,
        images:base64Images
    };
    
    let posts = JSON.parse(localStorage.getItem('allPosts'))||[];
    posts.push(newPost);

    localStorage.setItem('allPosts', JSON.stringify(posts));
    window.location.href='home.html';
 
});
}

window.onload = function(){
    const feed = document.querySelector('.feed');

    if (feed){
    const savedPosts = JSON.parse(localStorage.getItem('allPosts')) ||[];

    if (savedPosts){
        savedPosts.forEach((postData, index)=>{
        const postHTML=` 
    <a href='details.html?id=${index}' class='post-link'>
        <div class='post'>
         
        <section class='prop-card'>
         <img src='${postData.images[0]}' class='img' >
         <span class='card-price'><strong><p>${postData.price}</strong></p></span>
        </section>
        
      <div class='card-details'> 
         <p><i class='fas fa-bed'></i>
         ${postData.details}</p>
         <p class='wash'>
         <i class='fas fa-bath'></i>
         ${postData.washrooms}</p>
         </div>
         
         <p class='location'><i class='fas fa-map-marker-alt'>
         </i>${postData.location}</p>
         </div>
      </div>
    </a>`;

         feed.innerHTML = postHTML + feed.innerHTML;
        });
    }
}

}



function gohome(){
    window.location.href= 'home.html'};

function gochat(){
    window.location.href= 'chat.html'};

function gopost(){
    window.location.href= 'post.html'};

function gowallet(){
    window.location.href= 'wallet.html'};

function goprofile(){
        window.location.href= 'profile.html'}


