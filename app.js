const signinbtn= document.getElementById('signinbtn');

if(signinbtn){
signinbtn.addEventListener('click',  function(){
    window.location.href= 'home.html'
});}


const form = document.getElementById('vacancyform');
const feed = document. querySelector('.feed');

if(form){
form.addEventListener('submit', function(e){
    e.preventDefault();

    const price= document.getElementById('price').value;
    const details= document.getElementById('details').value;
    const addimage = document.getElementById('addimage').value;

    let post =JSON.parse( localStorage.getItem('post'))|| [];
    post.push({price,details,addimage});
    localStorage.setItem('post', JSON.stringify(post));

    const newpost= document.createElement('div');
    newpost.classList.add('post');

    newpost.innerHTML=
    `<h4>${price}</h4>
    <p>${details}</p>
    <p>${addimage}</p>`;

    if(feed){
    feed.appendChild(newpost);}
    form.reset();
})
}

if(feed){
    let post = JSON.parse(localStorage.getItem('post')) ||[];

    post.forEach(post=>{
        const newpost= document.createElement('div');
        newpost.classList.add('post');
       
        newpost.innerHTML=
        `<h4>${post.price}<h4>
        <p>${post.details}<p>
        <p>${post.addimage}</p>`;

        feed.appendChild(newpost);
    })
}

function gohome(){
    window.location.href= 'home.html';
}

function gochat(){
    window.location.href= 'chat.html';
}

function gopost(){
    window.location.href= 'post.html';
}

function gowallet(){
    window.location.href= 'wallet.html';
}

function goprofile(){
    window.location.href= 'profile.html';
}