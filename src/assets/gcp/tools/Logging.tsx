import { IconInterface } from '@/assets/iconInterface'
import React from 'react'

function Logging({ className }: IconInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      className={className}
    >
      <defs>
        <style>
          {
            '.cls-1{fill:#4285f4;}.cls-2{fill:none;}.cls-3{fill:#669df6;}.cls-4{fill:#aecbfa;}'
          }
        </style>
      </defs>
      <title>{'Icon_24px_Logging_Color'}</title>
      <g data-name="Product Icons">
        <rect className="cls-1" x={6} y={11} width={4} height={2} />
        <rect className="cls-1" x={4} y={18} width={6} height={2} />
        <g data-name="colored-32/logs">
          <rect className="cls-2" width={24} height={24} />
          <g>
            <polygon
              id="Fill-3"
              className="cls-1"
              points="4 18 6 18 6 6 4 6 4 18"
            />
            <polygon
              id="Fill-4"
              className="cls-3"
              points="9 7 22 7 22 3 9 3 9 7"
            />
            <polygon
              id="Fill-4-2"
              data-name="Fill-4"
              className="cls-3"
              points="9 14 22 14 22 10 9 10 9 14"
            />
            <polygon
              id="Fill-4-3"
              data-name="Fill-4"
              className="cls-3"
              points="9 21 22 21 22 17 9 17 9 21"
            />
            <polygon
              id="Fill-7"
              className="cls-4"
              points="2 8 8 8 8 2 2 2 2 8"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
export default React.memo(Logging)