import loadHomePage from './modules/home';
import loadMenuPage from './modules/menu';
import loadContactPage from './modules/contact';
const mainContainer = document.getElementById('id');
const header = document.createElement('ul');
document.body.appendChild(header);
document.body.appendChild(mainContainer);
const topListChildButton = (text) => {
    const link = document.createElement('button');
    link.innerHTML = text;
    return link;
};

// create clear function for the maincontainer
function clearBox() {
    console.log('CLEAR')
    document.getElementById('id').innerHTML = "";
};

// Create the header part
function CreateHeader() {
    console.log('HEADER')
    // home link button
    const buttonItem = topListChildButton('Home');
    buttonItem.className = 'btn text-white orange-color';
    const liItem = document.createElement('li');;
    liItem.id = 'Home';
    liItem.className = 'header-li';
    liItem.appendChild(buttonItem);
    header.className = 'header-ul';
    header.appendChild(liItem);
    
    // menu link button
    const buttonItem1 = topListChildButton('Menu');
    buttonItem1.className = 'btn text-white orange-color';
    const liItem1 = document.createElement('li');;
    liItem1.id = 'Menu';
    liItem1.className = 'header-li';
    liItem1.appendChild(buttonItem1);
    header.appendChild(liItem1);
    
    // contact link button
    const buttonItem2 = topListChildButton('Contact');
    buttonItem2.className = 'btn text-white orange-color';
    const liItem2 = document.createElement('li');;
    liItem2.id = 'Contact';
    liItem2.className = 'header-li';
    liItem2.appendChild(buttonItem2);
    header.appendChild(liItem2);
};

// Create the footer
function CreateFooter(){
    console.log('FOOTER');
    const footer = document.createElement('footer');
    const footerText = document.createElement('h4');
    footerText.innerHTML = 'Made by Igor';
    footer.appendChild(footerText);
    mainContainer.appendChild(footer);
};
CreateHeader();
loadHomePage();
CreateFooter();

document.getElementById('Home').addEventListener('click', () => {
    clearBox();
    loadHomePage();
    CreateFooter();
});

document.getElementById('Menu').addEventListener('click', () => {
    clearBox();
    loadMenuPage();
    CreateFooter();
});

document.getElementById('Contact').addEventListener('click', () => {
    clearBox();
    loadContactPage();
    CreateFooter();
});
