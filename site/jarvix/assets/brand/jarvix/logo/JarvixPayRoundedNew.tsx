import * as React from 'react'

function SvgJarvixPayRoundedNew(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={32} fill="#5b4acd" />
      <path d="M32 9.967v14.689l12.721-7.344z" fill="#fff" />
      <path
        d="M19.279 17.312L32 24.656V9.967zM44.721 17.311L32 24.655 44.721 32V17.311z"
        fill="#fff"
        opacity={0.77}
      />
      <path d="M19.279 32v14.689L32 39.345z" fill="#fff" opacity={0.24} />
      <path d="M19.279 32L32 39.345v-14.69z" fill="#fff" opacity={0.38} />
      <path d="M32 24.655v14.689l12.721-7.345z" fill="#fff" opacity={0.62} />
      <path d="M19.279 46.689L32 54.034V39.345z" fill="#fff" opacity={0.15} />
    </svg>
  )
}

export default SvgJarvixPayRoundedNew
