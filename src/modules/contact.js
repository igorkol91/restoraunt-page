const mainContainer = document.getElementById('id');

const loadContactPage = () => {
  const section = document.createElement('section');
  section.className = 'menu-page';
  const sectionH1 = document.createElement('h1');
  sectionH1.innerHTML = 'Contact us';
  sectionH1.className = 'home-header';
  section.appendChild(sectionH1);

  // create first article
  const article1 = document.createElement('article');
  article1.className = 'menu-page-article';
  const article1Title = document.createElement('h4');
  article1Title.innerHTML = 'Manager';
  article1.appendChild(article1Title);
  const article1P = document.createElement('p');
  article1P.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est';
  article1.appendChild(article1P);
  const article1Phone = document.createElement('h4');
  article1Phone.innerHTML = '111-222-3333';
  article1.appendChild(article1Phone);
  const article1img = document.createElement('img');
  article1img.src = 'https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg';
  article1.appendChild(article1img);
  section.appendChild(article1);

  // create second article
  const article2 = document.createElement('article');
  article2.className = 'menu-page-article';
  const article2Title = document.createElement('h4');
  article2Title.innerHTML = 'Office';
  article2.appendChild(article2Title);
  const article2P = document.createElement('p');
  article2P.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est';
  article2.appendChild(article2P);
  const article2Phone = document.createElement('h4');
  article2Phone.innerHTML = '222-333-4444';
  article2.appendChild(article2Phone);
  const article2img = document.createElement('img');
  article2img.src = 'https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg';
  article2.appendChild(article2img);
  section.appendChild(article2);

  // create third article
  const article3 = document.createElement('article');
  article3.className = 'menu-page-article';
  const article3Title = document.createElement('h4');
  article3Title.innerHTML = 'Head waiter';
  article3.appendChild(article3Title);
  const article3P = document.createElement('p');
  article3P.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a est';
  article3.appendChild(article3P);
  const article3Phone = document.createElement('h4');
  article3Phone.innerHTML = '333-444-5555';
  article3.appendChild(article3Phone);
  const article3img = document.createElement('img');
  article3img.src = 'https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg';
  article3.appendChild(article3img);
  section.appendChild(article3);
  mainContainer.appendChild(section);
};

export default loadContactPage;