// //promesas con async-await
const texto = document.getElementById('resultado');
const boton = document.querySelector('#boton');
const limpiar = document.querySelector('#limpiar');
const tablaNotas = document.getElementById('tablaNotas');

boton.addEventListener('click', async() => {
    try {
        const notas = await recibirValorNotas();
        console.log(notas);
        if (notas) {
            const calculo = await realizarCalculo(notas)
            console.log(calculo)

            if (calculo) {
                agregarFilaATabla(notas, calculo);
                texto.textContent = 'Realizando el calculo'
                setTimeout(() => {
                    texto.textContent = calculo.toString();
                }, 3000);

            }
        }

    } catch (error) {
        console.error('Error:', error);
    }

});

function agregarFilaATabla(notas, resultado) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${notas.nota1}</td>
      <td>${notas.nota2}</td>
      <td>${notas.nota3}</td>
      <td>${resultado}</td>
      <td><button>Editar</button></td>
      <td><button>Eliminar</button></td>
  `;
    tablaNotas.querySelector('tbody').appendChild(fila);
}


const recibirValorNotas = () => {
    return new Promise((resolve, reject) => {
        const nota1 = parseFloat(document.querySelector('#nota1').value);
        const nota2 = parseFloat(document.querySelector('#nota2').value);
        const nota3 = parseFloat(document.querySelector('#nota3').value);

        if (nota1 && nota2 && nota3) {
            resolve({ nota1, nota2, nota3 });
        } else {
            texto.textContent = 'Porfavor rellena todos los campos'
            reject(console.log('error adquisicion de notas'));
        }
    });
}
const realizarCalculo = (notas) => {
    return new Promise((resolve, reject) => {
        if (notas) {
            const dividendo = 3;
            const suma = (notas.nota1 + notas.nota2 + notas.nota3) / dividendo;
            resolve(suma);
        } else {

            reject(console.log('errors en calculo'))
        }
    });
}

limpiar.addEventListener('click', () => {

        document.querySelector('#nota1').value = '';
        document.querySelector('#nota2').value = '';
        document.querySelector('#nota3').value = '';
        texto.textContent = '';




    })
    //--------------------------------------------------------------------------------------------
    // //promesas con async-await(practica)
    // let texto = document.getElementById('resultado');
    // let boton = document.querySelector('#boton');

// boton.addEventListener('click', async () => {
//     try {
//       const resultado = await miPromesa();
//       console.log(resultado);
//       if (resultado) {
//         const nombre = await miSegundaPromesa();
//         console.log(nombre);
//         if(nombre){
//             const apellido=await miTercerPromesa();
//             console.log(apellido)
//         }
//       }

//     } catch (error) {
//       console.log('error');
//     }
//   });

// const miPromesa = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('El evento de promesa funciona :D');
//     }, 2000);
//   });
// };

// const miSegundaPromesa=()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('Camilo Estevan Tacue Salazar')
//         },2000)
//     })
// }

// const miTercerPromesa=()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Tacue Salazar Camilo Estevan')
//         },2000);

//     })
// }