import './css/styles.css';

const footerElement = document.querySelector('.footerbar');

const addConteudo = () => {
  const element = document.createElement('div');
  element.innerHTML = 'Curso WebPack';

  return element;
};

footerElement.appendChild(addConteudo());
