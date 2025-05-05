<script>
    let { active } = $props()
</script>

<svg
  class="w-full h-full scale-[0.5] stroke-black"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" 
  stroke={active ? "#000" : "#fff"}
  stroke-width={active ? "1" : "1"}
  />
  <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" 
  stroke={active ? "#000" : "#fff"}
  stroke-width={active ? "1" : "1"}
  />

  <circle cx="18" cy="6" r="1" 
  fill={active ? "#000" : "#fff"}/>
</svg>

