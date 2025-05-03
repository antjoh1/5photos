<script>
    import { base } from '$app/paths'
</script>

<div class='flex flex-col gap-5 w-1/4 m-auto'>
    <h1 class="text-center font-extralight text-2xl"> Welcome! </h1>
    <a class="bg-black text-white text-center font-extralight p-4 border border-black hover:bg-white hover:text-black transition-all duration-250 ease-in-out" href="{base}/uploadPost" > Upload new post  </a>
    <a class="bg-gray-300 text-black text-center font-extralight p-4 border border-black hover:bg-white hover:text-black transition-all duration-250 ease-in-out" href="{base}/deletePost" > Delete old post  </a>
</div>
