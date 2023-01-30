export default function BackArrow(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        style={{
          fill: '#f59e0b',
        }}
        d='M255.962 438.464 14.639 256 255.962 73.536v129.491h247.209v105.946H255.962z'
      />
      <path
        style={{
          fill: '#252727',
        }}
        d='M503.171 203.027H255.962V73.536L14.639 256h488.532z'
      />
      <path d='M264.791 456.207 0 256 264.791 55.793v138.405H512v123.604H264.791v138.405zM29.278 256l217.855 164.72V300.144h247.209v-88.289h-247.21V91.28L29.278 256z' />
      <path
        transform='scale(-1) rotate(52.697 421.81 -320.726)'
        style={{
          fill: '#fff',
        }}
        d='M150.014 131.214h17.657v155.38h-17.657z'
      />
    </svg>
  );
}
