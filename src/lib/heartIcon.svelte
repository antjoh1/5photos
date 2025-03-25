<script>
    let { filled } = $props()
</script>

<svg
	stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=1
    viewBox="-3 0 32 32"
    fill-opacity={filled ? '1' : '0'}
>
    <path
        class="heart {filled ? "isFilled" : ""} "
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    />
</svg>


<style>
    .heart { 
        transition: 250ms;
    }

    .heart.isFilled {
        fill: #F19AC8;
    }

</style>