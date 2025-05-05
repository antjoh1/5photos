<script> 
  let { active } = $props()
</script>

<svg
  class="w-full h-full scale-[0.5] "
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
    stroke={active ? "#000" : "#fff"}
    stroke-width={active ? "1" : "1"}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
    stroke={active ? "#000" : "#fff"}
    stroke-width={active ? "1" : "1"}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>