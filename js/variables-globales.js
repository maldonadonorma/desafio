var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  ["&lt;html&gt; &lt;/html&gt;", "&lt;!DOCTYPE html&gt;"],
  ["&lt;head&gt; &lt;/head&gt;", "&lt;body&gt; &lt;/body&gt;"],
  ["&lt;title&gt; &lt;/title&gt;", "&lt;h1&gt; &lt;/h1&gt;", "&lt;p&gt; &lt;/p&gt;", "&lt;meta&gt; &lt;/meta&gt;"],
  ["&lt;a&gt; &lt;/a&gt;", "&lt;br&gt; &lt;/br&gt;", "&lt;img&gt; &lt;/img&gt;", "&lt;h2&gt; &lt;/h2&gt;"],
  ['charset="UTF=8"', 'href=" "', 'src=" "', 'lang="es"']
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60
  }
];
