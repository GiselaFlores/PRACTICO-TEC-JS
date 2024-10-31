// callback asincronismo

function accionCualquiera(){
    console.log("esto es un proceso");
}

setTimeout(accionCualquiera, 4000); //2seg


// corto

const tareaUno = setTimeout(()=> console.log("es un proceso corto"), 2000);
tareaUno();


const tareaDos = (tareaMensaje)=>{
    console.log("notificacion de tarea a dos segudos");
    setTimeout(()=>{
        tareaMensaje();
    }, 3000);
}

tareaDos(accionCualquiera());

// Promesas

// lo que evaluo de la promesa es se cumpla o no se cumpla

//.then la promesa cumplida
//.catch la promesa rechazada //try intenta de hacer esto mientras se cumpla
//.then(resolve, reject) la promesa se cumpla o se rechace
//finally analiza la ejecución de salir del estado pendiente 

// La comunicación con la api externa

const url = "https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1";

fetch("https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1")
.then(response => {
    return response.json();  // convertir local en objetos tipo json
})

.then(data =>{
    data = response.json();
    console.log(data); // objeto procesado
})

.catch(error => {
    console.error("ocurrio un errror número: ", error);
})

.finally(()=>console.log("proceso cumplido"));

// async / await

async function asincro() {
    const  response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1");
    const data = await response.json();
    return data; 
}

await asincro();

// otra async await

const request = async ()=>{
    try{
        const  response = await fetch("url");
        const data = await response.json();
        return data; 
    }

    catch(error) {console.error("ocurrio un error número: ", error);
    }
}

