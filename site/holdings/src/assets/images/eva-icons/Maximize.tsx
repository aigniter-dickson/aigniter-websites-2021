import * as React from 'react'

function SvgMaximize(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g data-name="Layer 2">
        <path
          d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0019 11a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1 1 0 001.42 0 1 1 0 000-1.42zM13 12h-1v1a1 1 0 01-2 0v-1H9a1 1 0 010-2h1V9a1 1 0 012 0v1h1a1 1 0 010 2z"
          data-name="maximize"
        />
      </g>
    </svg>
  )
}

export default SvgMaximize