const calcular= () => {
    //1+1000+20
   const formulainput = document.getElementById('formula').value;
   const arreiglonumero = formulainput.split('+')
   console.log(arreiglonumero)
let sumar = 0;
  for (let index = 0; index < arreiglonumero.length; index++) {
    sumar=Number(arreiglonumero[index]) + sumar;
    
  }
  console.log(sumar)
  const resultadodiv = document.getElementById('resultado');
   resultadodiv.innerHTML = "resultado" + sumar
}
