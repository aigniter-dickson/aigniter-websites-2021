import * as React from 'react'

function SvgMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g data-name="Layer 2">
        <path d="M19 13H5a1 1 0 010-2h14a1 1 0 010 2z" data-name="minus" />
      </g>
    </svg>
  )
}

export default SvgMinus
