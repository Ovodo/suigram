import * as React from "react"
const FilterSvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.358 13.412H3.503"
    />
    <path
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.404 13.413c0 1.531.51 2.041 2.041 2.041 1.53 0 2.041-.51 2.041-2.041s-.51-2.041-2.041-2.041c-1.53 0-2.041.51-2.041 2.04Z"
      clipRule="evenodd"
    />
    <path
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.632 5.546h4.854"
    />
    <path
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.586 5.545c0-1.53-.51-2.042-2.04-2.042-1.532 0-2.043.511-2.043 2.042 0 1.531.51 2.041 2.042 2.041 1.53 0 2.041-.51 2.041-2.041Z"
      clipRule="evenodd"
    />
  </svg>
)
export default FilterSvgComponent
