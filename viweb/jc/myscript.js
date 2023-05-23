const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calcIMC = () => {
  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    let classification = '';
    let imagem = '';

    if (imc < 18.5) {
      classification = 'Abaixo do Peso';
      imagem = 'img/abaixodopeso.png';
    } else if (imc < 25) {
      classification = 'Peso Normal';
      imagem = 'img/pesonormal.png';
    } else if (imc < 30) {
      classification = 'Acima do Peso';
      imagem = 'img/acimadopeso.png';
    } else if (imc < 35) {
      classification = 'Obesidade Grau I';
      imagem = 'img/grau1.png';
    } else if (imc < 41) {
      classification = 'Obesidade Grau II';
      imagem = 'img/grau2.png';
    }

    resultado.innerHTML = `IMC: ${imc} (${classification})<br><img src="${imagem}" alt="${classification}">`;
  } else {
    resultado.innerHTML = 'Preencha os campos';
  }
};

