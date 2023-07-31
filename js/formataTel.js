// Retorna o número com o formato (12) 34567-8901

function formataTel(input) {
  input = input.replace(/\D/g, ""); // Remove caracteres não numéricos
  var tam = input.length;
  console.log(tam);
  if (tam > 0) {
    input = "(" + input;
  }
  if (tam > 2) {
    input = input.slice(0, 3) + ") " + input.slice(3, 12);
  }
  if (tam > 7) {
    input = input.slice(0, 10) + "-" + input.slice(10);
  }
  return input;
}
