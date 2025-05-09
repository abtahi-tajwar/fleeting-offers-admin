<script>
  export let color = '#000000'
  export let scale = 1
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width={scale * 24}
  height={scale * 24}
  {color}
  fill="none"
>
  <path
    {scale}
    d="M17 17L21 21"
    stroke="#000000"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>
  <path
    {scale}
    d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
    stroke="#000000"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>
</svg>
