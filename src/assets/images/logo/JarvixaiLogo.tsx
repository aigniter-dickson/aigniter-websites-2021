import * as React from 'react'

function SvgJarvixaiLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" {...props}>
      <rect width={360} height={360} rx={60} ry={60} fill="#00c1fd" />
      <path
        d="M292.584 245h-75.056l37.528-65zM142.472 115L67.416 245h150.112zm112.584 65l37.528-65h-75.056z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgJarvixaiLogo
