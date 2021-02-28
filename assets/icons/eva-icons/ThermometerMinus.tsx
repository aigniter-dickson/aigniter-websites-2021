import * as React from 'react'

function SvgThermometerMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g data-name="Layer 2">
        <g data-name="thermometer-minus">
          <rect x={2} y={5} width={6} height={2} rx={1} ry={1} />
          <path d="M14 22a5 5 0 01-3-9V5a3 3 0 013-3 3 3 0 013 3v8a5 5 0 01-3 9zm1-12.46V5a.93.93 0 00-.29-.69A1 1 0 0014 4a1 1 0 00-1 1v4.54z" />
        </g>
      </g>
    </svg>
  )
}

export default SvgThermometerMinus
