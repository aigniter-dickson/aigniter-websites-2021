import * as React from 'react'

function SvgJarvixCapitalLogoSquircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} {...props}>
      <defs>
        <clipPath id="jarvix-capital-logo-squircle_svg__a">
          <path d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#jarvix-capital-logo-squircle_svg__a)">
        <path
          d="M111.324.553h290.457A110.218 110.218 0 01512 110.771v290.457a110.218 110.218 0 01-110.219 110.219H111.324A110.218 110.218 0 011.106 401.228V110.771A110.218 110.218 0 01111.324.553z"
          fill="#1cb1b7"
        />
        <path
          d="M271.473 390.84c45.438 0 85.288-20.411 110.072-52.485l-40.579-32.56c-15.065 22.6-39.85 36.691-69.737 36.691-47.868 0-84.8-36.2-84.8-84.8 0-48.84 36.934-84.8 84.8-84.8 29.887 0 54.672 13.85 69.737 36.448l40.579-32.56c-24.784-32.075-64.634-52.486-110.072-52.486-77.269 0-137.53 57.588-137.53 133.4 0 75.568 60.261 133.152 137.53 133.152z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}

export default SvgJarvixCapitalLogoSquircle
