const mainContainer = document.getElementById('id');
// Create the home page
function loadHomePage() {
    /* <section class="menu-page">
    <h1 class="home-header">My Awesome Restoraunt</h1>
    <article class="home-page-article">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est ipsum officiis iure alias quisquam, nemo pariatur eligendi unde ullam delectus rerum blanditiis similique doloribus. Asperiores saepe ex pariatur.</p>
    <h6>Igor</h6>
    </article>
    <article class="home-page-article">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est ipsum officiis iure alias quisquam, nemo pariatur eligendi unde ullam delectus rerum blanditiis similique doloribus. Asperiores saepe ex pariatur.</p>
    <h6>Naumce</h6>
    </article>
    <article class="home-page-article">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est ipsum officiis iure alias quisquam, nemo pariatur eligendi unde ullam delectus rerum blanditiis similique doloribus. Asperiores saepe ex pariatur.</p>
    <h6>Vanco</h6>
    </article>
    </section>
    */
   
   const section = document.createElement('section');
   section.className = 'menu-page';
   const sectionHeader = document.createElement('h1');
   sectionHeader.className = 'home-header'
   sectionHeader.innerHTML = 'My Awesome Restoraunt'
   section.appendChild(sectionHeader);
   
   //first article
   const article1 = document.createElement('article');
   article1.className = 'home-page-article';
   const article1P = document.createElement('p');
   article1P.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est ipsum officiis iure alias quisquam, nemo pariatur eligendi unde ullam delectus rerum blanditiis similique doloribus. Asperiores saepe ex pariatur.';
   article1.appendChild(article1P);
   const article1H6 = document.createElement('h6');
   article1H6.innerHTML = 'Igor';
   article1.appendChild(article1H6);
   section.appendChild(article1);
   
   //second article
   const article2 = document.createElement('article');
   article2.className = 'home-page-article';
   const article2P = document.createElement('p');
   article2P.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est ipsum officiis iure alias quisquam, nemo pariatur eligendi unde ullam delectus rerum blanditiis similique doloribus. Asperiores saepe ex pariatur.';
   article2.appendChild(article2P);
   const article2H6 = document.createElement('h6');
   article2H6.innerHTML = 'Naumce';
   article2.appendChild(article2H6);
   section.appendChild(article2);
   
   // third article
   const article3 = document.createElement('article');
   article3.className = 'home-page-article';
   const article3P = document.createElement('p');
   article3P.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est ipsum officiis iure alias quisquam, nemo pariatur eligendi unde ullam delectus rerum blanditiis similique doloribus. Asperiores saepe ex pariatur.';
   article3.appendChild(article3P);
   const article3H6 = document.createElement('h6');
   article3H6.innerHTML = 'Vanco';
   article3.appendChild(article3H6);
   section.appendChild(article3);

   // append on the main container
   mainContainer.appendChild(section);
};

export default loadHomePage;