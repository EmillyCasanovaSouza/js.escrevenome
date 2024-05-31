let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
  
}

function palavraAleatoria () {
  let palavras = ["Hello Kitty", "Kuromi", "My Melody"];
  return random(palavras);
}

function inicializaCores() {
  background("black");
  fill("pink");
  textSize(64);
  textAlign(CENTER, CENTER)
}

function palavraParcial (minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  return parcial;
}
