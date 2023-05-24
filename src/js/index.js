
const urlBase = "https://platzi-avo.vercel.app"
const url = "https://platzi-avo.vercel.app/api/avo"

const appNode = document.querySelector("#app")

const formatPrice = (price) => {

  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: "currency",
    currency: "USD",
  }).format(price)

  return newPrice;
}

// web api

window.fetch(url)
  // Procesar la respuesta y convertirla en JSON
  .then(respuesta => respuesta.json())
  // JSON -> DATA -> renderizar info en browser
  .then(responseJson => {
    const todosLosItem = []
    responseJson.data.forEach(item => {
      //crear imagen
      const imagen = document.createElement('img');
      imagen.src = `${urlBase}${item.image}`
      imagen.className = ' rounded-br-lg '

      //crear titulo
      const titulo = document.createElement('h');
      titulo.textContent = item.name
      titulo.className = 'pt-6 text-xl text-indigo-600 text-center font-bold'

      //crear precio
      const precio = document.createElement('div');

      // precio.textContent = `$${item.price}`
      precio.textContent = formatPrice(item.price)
      precio.className = 'text-2xl font-medium'

      //crear contenedor
      const contenedor = document.createElement('div');
      contenedor.className = 'text-center border-solid border-2 inline-block bg-blue-50 '
      contenedor.append(imagen, titulo, precio)

      todosLosItem.push(contenedor)
    });

    appNode.append(...todosLosItem)

  })












// -> asi se consume una api con primise  

// const url = "https://platzi-avo.vercel.app/api/avo"

// // web api
// // conectrnos al server
// //->promise
// window.fetch(url)
//   // Procesar la respuesta y convertirla en JSON
//   .then(respuesta => respuesta.json())
//   // JSON -> DATA -> renderizar info en browser
//   .then(responseJson => {
//     console.log(responseJson);
//     responseJson.data.forEach(item => {
//       console.log(item.name)
//     });

//   })



// // -> asi se consume una api con async-await
// const url = "https://platzi-avo.vercel.app/api/avo"

// //web api
// async function fetchData() {
//   const respuesta = await fetch(url)
//   const respuestaJson = await respuesta.json();
//   console.log(respuestaJson);

//   const todosLosItems = []

//   respuestaJson.data.forEach(item => {
//     const imagen = document.createElement('img')
//     const titulo = document.createElement('h2')
//     const precio = document.createElement('div')
//     const contenedor = document.createElement('div')

//     contenedor.append(imagen, titulo, precio)

//     todosLosItems.push(contenedor)

//   })
//   document.body.append(...todosLosItems)


// }

// fetchData()