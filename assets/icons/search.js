import * as React from "react"
const SearchSvgComponent = (props) => (
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
      d="M8.457 2.036a6.42 6.42 0 1 1 0 12.841 6.42 6.42 0 0 1 0-12.841ZM14.924 13.866a1.058 1.058 0 1 1 0 2.116 1.058 1.058 0 0 1 0-2.116Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SearchSvgComponent
