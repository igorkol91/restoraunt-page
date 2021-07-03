const mainContainer = document.getElementById('id');

/*     <section class="menu-page">
    <h1 class="home-header">Menu</h1>
    <article class="menu-page-article">
        <h4>Drinks</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est ipsum officiis iure alias quisquam</p>
        <h4>6$</h4>
        <img class="menu-img" src="https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" alt="">
    </article>
    <article class="menu-page-article">
        <h4>Deserts</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est ipsum officiis iure alias quisquam</p>
        <h4>2$</h4>
        <img class="menu-img" src="https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" alt="">
    </article>
    <article class="menu-page-article">
        <h4>Main-courses</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est ipsum officiis iure alias quisquam</p>
        <h4>10$</h4>
        <img class="menu-img" src="https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" alt="">
    </article>
</section>
*/

function loadMenuPage() {
    const section = document.createElement('section');
    section.className = 'menu-page';
    const sectionH1 = document.createElement('h1');
    sectionH1.innerHTML = 'Menu'
    sectionH1.className = 'home-header';
    section.appendChild(sectionH1);

    //first article
    const article1 = document.createElement('article');
    article1.className = 'menu-page-article';
    const article1Title = document.createElement('h4');
    article1Title.innerHTML = 'Drinks';
    article1.appendChild(article1Title);
    const article1P = document.createElement('p');
    article1P.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est ipsum officiis iure alias quisquam';
    article1.appendChild(article1P);
    const article1Phone = document.createElement('h4');
    article1Phone.innerHTML = '3$';
    article1.appendChild(article1Phone);
    const article1img = document.createElement('img');
    article1img.className = 'menu-img'
    article1img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBXNQ76lNyB6HjTQb_jpRB2GtoZm3sfvxnw&usqp=CAU'
    article1.appendChild(article1img);
    section.appendChild(article1);

    // create second article
    const article2 = document.createElement('article');
    article2.className = 'menu-page-article';
    const article2Title = document.createElement('h4');
    article2Title.innerHTML = 'Main course';
    article2.appendChild(article2Title);
    const article2P = document.createElement('p');
    article2P.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est';
    article2.appendChild(article2P);
    const article2Phone = document.createElement('h4');
    article2Phone.innerHTML = '10$';
    article2.appendChild(article2Phone);
    const article2img = document.createElement('img');
    article2img.className = 'menu-img'
    article2img.src = 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387918756116.jpeg'
    article2.appendChild(article2img);
    section.appendChild(article2);

    // create third article
    const article3 = document.createElement('article');
    article3.className = 'menu-page-article';
    const article3Title = document.createElement('h4');
    article3Title.innerHTML = 'Deserts';
    article3.appendChild(article3Title);
    const article3P = document.createElement('p');
    article3P.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est';
    article3.appendChild(article3P);
    const article3Price = document.createElement('h4');
    article3Price.innerHTML = '4$';
    article3.appendChild(article3Price);
    const article3img = document.createElement('img');
    article3img.className = 'menu-img'
    article3img.src = 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/33731c6a8f5f4704a9dce477f6d40237/BFV11286_3IngredientDesserts2.jpg?output-format=auto&output-quality=auto'
    article3.appendChild(article3img);
    section.appendChild(article3);
    mainContainer.appendChild(section);
}

export default loadMenuPage;