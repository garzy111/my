const signinbtn= document.getElementById('signinbtn');

if(signinbtn){
signinbtn.addEventListener('click',  function(){
    window.location.href= 'home.html'
});}


const feed = document.querySelector('.feed');

if(feed){
    let post= JSON.parse(localStorage.getItem('post'))|| [];

    post.forEach(function(post){
        const postDIV= document.createElement('div');
        postDIV.className='post';

        postDIV.onclick=function(){
            localStorage.setItem('selectedPostIndex', index);
            window.location.href='details.html'
        };

        postDIV.innerHTML = `
        <div class="image-container">
         <img src="${post.image}" style="width: 100%">
        </div>

        <div class="card-tag">
         <div class="card-details">
          <h4 class="price">${post.price} /month.</h4>
          <p class="details">${post.details}.</p>
         </div> 
         <p class="location">${post.location}</p>
        </div> 
        `;

        feed.appendChild(postDIV);

        console.log('Posts', post);
    });
}

const form = document.getElementById('vacancyform');
if(form){
form.addEventListener('submit', function(e){
    e.preventDefault();

    const price= document.getElementById('price').value;
    const details= document.getElementById('details').value;
    const location= document.getElementById('location').value;
    const file = document.getElementById('addimage').files[0];

    const reader = new FileReader();

    reader.onload=function(){
        let Posts= JSON.parse(localStorage.getItem('post'))||[];

        Posts.push({
            price: price,
            details: details,
            location: location,
            image: reader.result,
        });

        localStorage.setItem('post', JSON.stringify(Posts));
        form.reset();
        window.location.href= 'home.html';
    };

    reader.readAsDataURL(file);});}


   

function gohome(){
    window.location.href= 'home.html'};

function gochat(){
    window.location.href= 'chat.html'};

function gopost(){
    window.location.href= 'post.html'};

function gowallet(){
    window.location.href= 'wallet.html'
};

function goprofile(){
    window.location.href= 'profile.html'}