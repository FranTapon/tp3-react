import logo from './logo.svg';
import './App.css';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={calcularVocales}>
        <p>Ingrese texto:
           <input type="textarea" name="texto1" />
        </p>
        <p>
          <input type="submit" value="Cantidad de vocales" />
        </p>
      </form>
    </div>
  );
}

function calcularVocales(e) {
e.preventDefault();
let texto=e.target.texto1.value;
let contarVocales=0;
let vocales=['a','e','i','o','u','A','E','I','O','U'];


for(let i=0;i<texto.length;i++){


  for(let s=0;s<vocales.length;s++){
    if(texto.charAt(i)==vocales[s]||texto.charAt(i)==vocales[s]){
      contarVocales++;
    }
  }
}
alert(contarVocales)
}

