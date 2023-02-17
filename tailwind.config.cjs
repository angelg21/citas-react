/** @type {import('tailwindcss').Config} */
module.exports = {
  //Los ** y *.jsx quieren decir que todos esos archivos .jsx van a utilizar tailwind css
  //Cuando se hacen cambios en este tipo de archivos de configuracion se recomeinda reiniciar el servidor para ello:
  //Se accede a la terminal
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}
