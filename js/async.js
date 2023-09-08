//promesas con async-await
let texto = document.getElementById('resultado');
let boton = document.querySelector('#boton');

boton.addEventListener('click', async () => {
    try {
      const resultado = await miPromesa();
      console.log(resultado);
      if (resultado) {
        const nombre = await miSegundaPromesa();
        console.log(nombre);
        if(nombre){
            const apellido=await miTercerPromesa();
            console.log(apellido)
        }
      }

    } catch (error) {
      console.log('error');
    }
  });
  
const miPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('El evento de promesa funciona :D');
    }, 2000);
  });
};

const miSegundaPromesa=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Camilo Estevan Tacue Salazar')
        },2000)
    })
}

const miTercerPromesa=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tacue Salazar Camilo Estevan')
        },2000);
    
    })
}