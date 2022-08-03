<script>
	import Contador from './componentes/Contador.svelte';
	import Hijo from './componentes/Hijo.svelte';
	//define la variable name
	let name = "coso";
	//mensaje de alerta simple
	const alertaClick = () => {
		alert("Acabo de ser pulsado 🍆🙈");
	}
	//renderizado condicional
	let renderizado = false;
	const renderizar = () => {
		renderizado === true ? renderizado = false : renderizado = true ;
	}
	//loops
	const listado = [
		{ fruta: 'Manzana🍏', color: 'Verde🟩' },
		{ fruta: 'Plátano🍌', color: 'Amarillo🟨' },
		{ fruta: 'Uvas🍇', color: 'Moradas🟪' },
	]

	export let sergio
</script>


<nav style="padding: 0em 2% 0em 5%; top: 0; position: sticky; background-color:black; background-color: rgba(0, 0, 0, 0.1); backdrop-filter: blur(2px); ">
	<ul>
    		
  	</ul>
	<ul>
		<li><strong><code>Svelte APP</code></strong></li>
	</ul>
	<ul>

	</ul>
</nav>

<main>
	<h1>👋 Hola {name}, {sergio}!</h1>
	<p>Documentación para hacer estos ejemplos: <br>
	
	* <a href="https://svelte.dev/tutorial">[TUTORIAL DE LA WEB DE SVELTE.DEV]</a><br>
	* <a href="https://docs.google.com/document/d/1ZelzT_O5gy0uzY0aegsirkjK_aggkfJYNHcHQXBUSvs/edit?usp=sharing">[Newsletter de Nate Murray de Newline]</a> y su <a href="https://www.newline.co/courses/fullstack-svelte">curso asociado</a>.
	</p>

	<p>
	En esta ocasión como framework de CSS he usado la versión <a href="https://picocss.com/docs/classless.html">sin clases</a> de PICO.<br>
	Para las parrillas he usado <a href="https://rsms.me/raster/">RSGS</a>.
	</p>
	<section>
		<article>
			<hgroup>
				<h2>Ejemplo de "Hola Mundo"</h2>
				<h3>Llama a la función alertaClick()</h3>
			</hgroup>
			<button on:click="{alertaClick}">¿Me pulsas?</button>
		</article>
	</section>
	
	<section>
		<p><button on:click="{renderizar}">¿Es magia?</button><br>{#if renderizado}<div>¿Magia🪄🪄🐇🐇? <br> <h6>No: es un ejemplo del renderizado conficional <a href="https://svelte.dev/docs#template-syntax-if">#if</a> de Svelte</h6></div>{/if}</p>
	</section>

	<section>
	<article>
			<hgroup>
				<h2>Ejemplo de "#EACH"</h2>
				<h3>Mira la documentación de este sencillo ejemplo <a href="https://svelte.dev/docs#template-syntax-each">aquí</a>.</h3>
			</hgroup>
		<table>
		<thead>
			<th>Índice</th>
			<th>Fruta</th>
			<th>Color</th>
		</thead>
		<tbody>
			<!--loop de frutas-->
			{#each listado as columna, i}
				<tr>
					<td>{i}</td>
					<td>{columna.fruta}</td>
					<td>{columna.color}</td>
				<tr>
			{/each}
		</tbody>
		</table>
	
	</article>
	</section>

	<section>
		<Contador></Contador>
		<details>
			<summary>Detalles</summary>
		Tanto el botón como el código que modifica el contador, se están importando de Componente.
		</details>
		<details open>
			<summary>Nombre del comonente:</summary>
		<code>Contador.svelte</code>
		</details>
	</section>

	<section>
	<article>
		<hgroup>
			<h1>Props</h1>
			<h3>Ejemplo pasar parámetro por <code>PROP</code></h3>
		</hgroup>
		Nombre del componente: <ins>Hijo.Svelte</ins><br><br>
		📤Mando
		<code style="width:100%">
			prop = 'Hijo prop=`prop`'
		<br>cosito = 'cosito'</code> <br>
		<hr>📥Recibo
		<blockquote style="width:100%">
			<Hijo prop="<Hijo prop=`prop`>" cosito="cosito" />
		</blockquote>	
	</article>
	</section>

	<section>
		<figure>
		<hgroup>
			<h2>Columnas Raster</h2>
			<h3>r-grid columns=6 s-columns=2y r-cell span= r-span</h3>
			<p>🟥Uso: <a href="https://rsms.me/raster/">Possible span= values</a><br><br>

				2-5<br>
				start in column 2, end in column 5.<br><br>
				2+3<br>
				start in column 2, span 3 columns.<br><br>
				2..<br>
				start in column 2, span remainder of row.<br><br>
				2<br>
				start in next column, span 2 columns.<br><br>
				row<br>
				span a full row</p>
		</hgroup>
		<r-grid columns=8 style="min-width: 600px; ">
			<r-cell style="border: 1px solid red"></r-cell>
			<r-cell style="border: 1px solid red" span=3>3</r-cell>
			<r-cell style="border: 1px solid red"></r-cell>
			<r-cell style="border: 1px solid red" span=7-8>7-8</r-cell>
			<r-cell style="border: 1px solid red" span=2+2>2+2</r-cell>
			<r-cell style="border: 1px solid red" span=5-8>5-8</r-cell>
			<r-cell style="border: 1px solid red" span=1-4>1-4</r-cell>
			<r-cell style="border: 1px solid red" span=6..>6..</r-cell>
			<r-cell style="border: 1px solid red" span=2..>2..</r-cell>
			<r-cell style="border: 1px solid red" span=4..>4..</r-cell>
			<r-cell style="border: 1px solid red" span=1-2>1-2</r-cell>
			<r-cell style="border: 1px solid red" span=4-5>4-5</r-cell>
		  </r-grid>
		<hr>
		<hgroup>
			<h3>Raster Mobile</h3>
			<p>usando columns-s o span-s</p>
		</hgroup> 
		<p>🟨tipo1</p> 
		<r-grid columns=6>
			<r-cell style="border:1px solid yellow"span=2 span-s=row>span=2 span-s=row</r-cell>
			<r-cell style="border:1px solid yellow"span=3-6 span-s=row>span=3-6 span-s=row</r-cell>
			<r-cell style="border:1px solid yellow"span=1-2 span-s=1>span=1-2 span-s=1</r-cell>
			<r-cell style="border:1px solid yellow"span=3.. span-s=2..>span=3.. span-s=2..</r-cell>
		  </r-grid> <br>
		<p>🟪tipo 2</p>
		  <r-grid columns=6 columns-s=3>
			<r-cell></r-cell>
			<r-cell style="border:1px solid violet"span=2>span2</r-cell>
			<r-cell></r-cell>
			<r-cell style="border:1px solid violet"span=2>span2</r-cell>
		</r-grid>
		</figure>
	</section>
</main>

<footer>
	<ul></ul>
<r-grid columns=3>
	<r-cell></r-cell>
	<r-cell></r-cell>
	<r-cell><strong>COMOVAS.ES</strong><hr><a href="https://cosasdev.comovas.es">🔙 VOLVER A COSASDEV</a></r-cell>
	
</r-grid>	
</footer>