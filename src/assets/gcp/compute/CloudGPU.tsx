import { IconInterface } from '@/assets/iconInterface'
import React from 'react'

function CloudGPU({ className }: IconInterface){
    return(
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    className={className}
  >
    <defs>
      <style>{".cls-1{fill:#4285f4;}"}</style>
    </defs>
    <title>{"Icon_24px_GPU_Color"}</title>
    <g data-name="Product Icons">
      <path
        className="cls-1"
        d="M15.33,2V4.38H13.17V2H10.83V4.38H8.67V2H6.29V4.38A2,2,0,0,0,4.38,6.29H2V8.67H4.38v2.14H2v2.38H4.38v2.14H2v2.38H4.38a2,2,0,0,0,1.91,1.91V22H8.67V19.62h2.16V22h2.34V19.62h2.16V22h2.38V19.62a2,2,0,0,0,1.91-1.91H22V15.33H19.62V13.19H22V10.81H19.62V8.67H22V6.29H19.62a2,2,0,0,0-1.91-1.91V2Zm1.53,15.24H7.14a.38.38,0,0,1-.38-.38V7.14a.38.38,0,0,1,.38-.38h9.72a.38.38,0,0,1,.38.38v9.72A.38.38,0,0,1,16.86,17.24Z"
      />
      <polygon
        className="cls-1"
        points="12.83 7.54 12.83 11.12 14.79 11.12 11.29 15.98 11.29 12.35 9.22 12.35 12.83 7.54"
      />
    </g>
  </svg>
    )
}

export default React.memo(CloudGPU)