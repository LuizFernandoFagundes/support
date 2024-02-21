const inputs = document.querySelectorAll('.inputs');
const span = document.querySelectorAll('span');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   verificaCampos();
})

function verificaCampos() {
   inputs.forEach((itens, index) => {


      if (itens.value == '') {
         span[index].classList.add('camposObrigatorio');
         itens.classList.add('camposEmBranco');
      }
      else {
         span[index].classList.remove('camposObrigatorio');
         itens.classList.remove('camposEmBranco');
         itens.classList.add('verificada');

      }


   });
}