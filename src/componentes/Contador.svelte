<script>
    let count = 0;

    const hacerClick = () => {
        //count += 1;
        count = count +1;
    }

</script>

<button on:click={hacerClick}>

    Has pulsado el botón {count} {count === 1 ? 'vez' : 'veces'}

</button>