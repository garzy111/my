window.onload=function(){
    const params= new URLSearchParams(window.location.search);
    const id= params.get('id');

    const savedPosts = JSON.parse(localStorage.getItem('allPosts'))||[];

    if(savedPosts[id]){
        const post = savedPosts[id];

        document.getElementById('display-img').src=post.images[0];
        document.getElementById('display-price').innerText=post.price;
       // document.getElementById('display-location').innerText=post.location;
        document.getElementById('res-bedroom').innerText=post.details;
        document.getElementById('res-washroom').innerText=post.washrooms;
        document.getElementById('res-location').innerText=post.location;
       // document.getElementById('res-toilet').innerText=post.toilet ||'N/A';
        
       // document.getElementById('display-desc').innerText=post.details;

        const gallery = document.getElementById('image-gallery');
        gallery.innerHTM="";

        post.images.forEach((imgSrc)=>{
            const newImg = document.createElement('img');
            newImg.src=imgSrc;
            newImg.classList.add('gallery-item');


            gallery.appendChild(newImg);
            
        });
    }
    else{
        alert('posts not found');
        window.location.href='home.html';
    }
}