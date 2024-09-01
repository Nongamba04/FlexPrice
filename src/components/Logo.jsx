import {useState} from "react"


export default function Logo() {
return (
<>
            <a href="#" className="p-3 md:pl-8 flex items-center gap-3">
              <svg
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20"
                viewBox="0 0 54 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0C8.27956 0 15 6.7609 15 15.0903V64H0V0ZM21 23C29.8315 23 37 29.7431 37 38.0506V64C28.1685 64 21 57.2569 21 48.9494V23ZM58 15.0903C58 6.7609 51.2796 0 43 0V48.9097C43 57.2391 49.7204 64 58 64V15.0903Z"
                  fill="white"
                />
              </svg>
              <span className="self-center text-[1.75rem] font-semibold whitespace-nowrap text-white">
                FlexPrice
              </span>
            </a>

</>
)
};