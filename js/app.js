let texto=document.getElementById('resultado')

const setText=data=>{
    texto.textContent=data
    console.log(typeof(data))
    console.log(data)
    texto.textContent=data
}

const getData=()=>{
    return new Promise((resuelve, rechaza)=>{  
    setTimeout(()=>{
        resuelve(true)
    }, 1000)
})
}

const showData=(arrayNotas)=>{
    return new Promise ((resuelve1,rechaza)=>{
        setText('Esperando Autorizacion')
        resuelve1={}
        for (let index = 0; index < arrayNotas.length; index++) {
            resuelve1[index]=arrayNotas[index]
            
        }

        setTimeout(() => {
            calcularProm(resuelve1)
        }, 2000);
    })
}



const calcularProm=(objetoNotas)=>{
    return new Promise ((resuelve2,rechaza)=>{
        resuelve2=objetoNotas[0]+objetoNotas[1]+objetoNotas[2]
        let resuFinal=resuelve2/3
        setText(`El promedio es: ${resuFinal}`)

    })
}

function miNota(nota1,nota2,nota3){

    let arrayNotas=[]
    arrayNotas.push(parseFloat(nota1))
    arrayNotas.push(parseFloat(nota2))
    arrayNotas.push(parseFloat(nota3))

    getData().then(valor=>{
        if(valor){
            return showData(arrayNotas)
        }}).then(tal=>{
            setText(tal)
        })
    
}

    



