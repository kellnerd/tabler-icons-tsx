function IconHttpHead({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-http-head"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width={stroke}
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 16v-8" />
      <path d="M7 8v8" />
      <path d="M3 12h4" />
      <path d="M14 8h-4v8h4" />
      <path d="M10 12h2.5" />
      <path d="M17 16v-6a2 2 0 1 1 4 0v6" />
      <path d="M17 13h4" />
    </svg>
  );
}
export default IconHttpHead;
