import Link from "next/link";
import { gsap,Elastic,Power3 } from "gsap";
import { useEffect,useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const ServicesSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const subtitle = useRef();
  const title = useRef();
  const cardContainer = useRef();
  useEffect(() => {
    gsap.to(subtitle.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Elastic.easeOut,scrollTrigger:subtitle.current})
    gsap.to(title.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Elastic.easeOut,scrollTrigger:title.current})
    gsap.to(cardContainer.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer.current})
  }, [])
  
  const cards = [
    {
      title: "Marketing Des Reseaux Sociaux",
      text: "On utilise les reseaux sociaux pour vous faire de la publicité et augmenter votre visibilité sur le marché !",
      link: "/marketting",
      icon: (
        <svg className="md:h-24 md:w-24 h-16 w-16 " id="Capa_1" viewBox="0 0 512 512">
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="23.821"
            x2="459.531"
            y1="345.893"
            y2="94.336"
          >
            <stop offset="0" stopColor="#dcfdee" stopOpacity="0" />
            <stop offset=".6288" stopColor="#d2f3e4" />
          </linearGradient>
          <g>
            <g>
              <path
                d="m16.074 305.505c18.727 64.003 72.707 194.564 163.922 182.845 91.486-11.755 55.759-129.725 139.508-145.894 36.867-7.118 61.857 56.689 98.806 54.704 47.588-2.557 71.81-49.663 85.108-89.264 28.197-83.968-14.029-226.352-112.859-251.012-86.244-21.519-96.332 83.855-171.322 53.248-42.149-17.203-37.938-68.576-89.272-78.942-155.298-31.359-138.81 189.15-113.891 274.315z"
                fill="url(#SVGID_1_)"
              />
            </g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <path
                        d="m455.47 454.758h-398.94c-8.284 0-15-6.716-15-15v-314.267c0-8.284 6.716-15 15-15h398.94c8.284 0 15 6.716 15 15v314.266c0 8.285-6.715 15.001-15 15.001z"
                        fill="#2626bc"
                        opacity=".1"
                      />
                      <path
                        d="m455.47 430.758h-398.94c-8.284 0-15-6.716-15-15v-314.267c0-8.284 6.716-15 15-15h398.94c8.284 0 15 6.716 15 15v314.266c0 8.285-6.715 15.001-15 15.001z"
                        fill="#fff"
                      />
                      <path
                        d="m455.47 86.491h-246.651v344.266h246.651c8.284 0 15-6.716 15-15v-314.266c0-8.284-6.715-15-15-15z"
                        fill="#9fb0fe"
                      />
                      <ellipse cx="336.908" cy="385.322" fill="#8399fe" rx="114.032" ry="10.847" />
                      <path
                        d="m470.47 155.804v-54.313c0-8.284-6.716-15-15-15h-398.94c-8.284 0-15 6.716-15 15v54.313z"
                        fill="#6583fe"
                      />
                      <path
                        d="m455.471 435.757h-398.942c-11.028 0-20-8.972-20-20v-314.265c0-11.028 8.972-20 20-20h398.941c11.028 0 20 8.972 20 20v314.266c.001 11.028-8.971 19.999-19.999 19.999zm-398.942-344.265c-5.514 0-10 4.486-10 10v314.266c0 5.514 4.486 10 10 10h398.941c5.514 0 10-4.486 10-10v-314.266c0-5.514-4.486-10-10-10z"
                        fill="#2626bc"
                      />
                    </g>
                    <g>
                      <g>
                        <circle cx="85.623" cy="123.392" fill="#ff5ba8" r="10.901" />
                        <circle cx="120.424" cy="123.392" fill="#fff" r="10.901" />
                        <circle cx="155.224" cy="123.392" fill="#02ffb3" r="10.901" />
                      </g>
                      <path
                        d="m432.277 135.64h-136.158v-24.496h136.159c2.761 0 5 2.239 5 5v14.496c-.001 2.761-2.239 5-5.001 5z"
                        fill="#d2deff"
                      />
                      <path
                        d="m296.789 111.456c-5.286-5.286-13.887-5.286-19.173 0s-5.286 13.887 0 19.173c4.037 4.037 10.003 4.98 14.953 2.852l4.348 4.348c1.952 1.952 5.119 1.952 7.071 0s1.952-5.119 0-7.071l-4.348-4.348c2.129-4.951 1.186-10.917-2.851-14.954zm-12.102 7.071c1.387-1.387 3.644-1.387 5.031 0s1.387 3.644 0 5.031-3.644 1.387-5.031 0c-1.387-1.388-1.387-3.644 0-5.031z"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        d="m107.94 215.177h-29.681c-2.761 0-5-2.239-5-5s2.239-5 5-5h29.681c2.761 0 5 2.239 5 5s-2.239 5-5 5z"
                        fill="#ff7eb8"
                      />
                    </g>
                    <g>
                      <path
                        d="m146.94 232.634h-68.681c-2.761 0-5-2.239-5-5s2.239-5 5-5h68.681c2.761 0 5 2.239 5 5s-2.239 5-5 5z"
                        fill="#02ffb3"
                      />
                    </g>
                    <g>
                      <path
                        d="m176.94 287.997h-98.681c-2.761 0-5-2.239-5-5s2.239-5 5-5h98.681c2.761 0 5 2.239 5 5s-2.239 5-5 5z"
                        fill="#8399fe"
                      />
                    </g>
                    <g>
                      <path
                        d="m176.94 270.541h-98.681c-2.761 0-5-2.239-5-5s2.239-5 5-5h98.681c2.761 0 5 2.239 5 5s-2.239 5-5 5z"
                        fill="#8399fe"
                      />
                    </g>
                    <g>
                      <path
                        d="m176.94 305.454h-98.681c-2.761 0-5-2.239-5-5s2.239-5 5-5h98.681c2.761 0 5 2.239 5 5s-2.239 5-5 5z"
                        fill="#8399fe"
                      />
                    </g>
                    <g>
                      <path
                        d="m155.94 322.911h-77.681c-2.761 0-5-2.239-5-5s2.239-5 5-5h77.681c2.761 0 5 2.239 5 5s-2.239 5-5 5z"
                        fill="#8399fe"
                      />
                    </g>
                  </g>
                  <path
                    d="m134.096 374.201h-51.733c-5.028 0-9.104-4.076-9.104-9.104 0-5.028 4.076-9.104 9.104-9.104h51.733c5.028 0 9.104 4.076 9.104 9.104 0 5.028-4.076 9.104-9.104 9.104z"
                    fill="#ff7eb8"
                  />
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        d="m280.099 186.685h-14.681c-2.761 0-5-2.239-5-5s2.239-5 5-5h14.681c2.761 0 5 2.239 5 5s-2.239 5-5 5z"
                        fill="#6583fe"
                      />
                    </g>
                    <g>
                      <path
                        d="m331.908 186.685h-14.681c-2.761 0-5-2.239-5-5s2.239-5 5-5h14.681c2.761 0 5 2.239 5 5s-2.239 5-5 5z"
                        fill="#6583fe"
                      />
                    </g>
                    <g>
                      <path
                        d="m383.717 186.685h-14.681c-2.761 0-5-2.239-5-5s2.239-5 5-5h14.681c2.761 0 5 2.239 5 5s-2.239 5-5 5z"
                        fill="#6583fe"
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="m435.526 186.685h-14.681c-2.761 0-5-2.239-5-5s2.239-5 5-5h14.681c2.761 0 5 2.239 5 5s-2.239 5-5 5z"
                      fill="#6583fe"
                    />
                  </g>
                </g>
                <g>
                  <path
                    d="m371.766 378.496h-3.496v-42.801h-13.29v18.93c0 4.474-3.626 8.1-8.1 8.1-4.473 0-8.1-3.626-8.1-8.1v-18.93h-13.3v42.801h-3.49c-2.631 0-4.764 2.133-4.764 4.764s2.133 4.764 4.764 4.764h49.776c2.631 0 4.764-2.133 4.764-4.764s-2.133-4.764-4.764-4.764z"
                    fill="#4369fd"
                  />
                  <path
                    d="m428.698 344.949h-163.64c-2.761 0-5-2.239-5-5v-98.215c0-2.761 2.239-5 5-5h163.64c2.761 0 5 2.239 5 5v98.215c0 2.762-2.239 5-5 5z"
                    fill="#6583fe"
                  />
                  <path
                    d="m433.698 327.815v-86.081c0-2.761-2.239-5-5-5h-163.64c-2.761 0-5 2.239-5 5v86.081z"
                    fill="#97ffd2"
                  />
                  <path
                    d="m331.373 262.638h-39.14c-5.468 0-9.9-4.432-9.9-9.9v-6.103c0-5.468 4.432-9.9 9.9-9.9h39.14c5.468 0 9.9 4.432 9.9 9.9v6.103c0 5.467-4.432 9.9-9.9 9.9z"
                    fill="#02ffb3"
                  />
                  <path
                    d="m281.267 389.087h-34.15c-3.866 0-7-3.134-7-7v-66.789c0-3.866 3.134-7 7-7h34.15c3.866 0 7 3.134 7 7v66.789c0 3.866-3.134 7-7 7z"
                    fill="#4369fd"
                  />
                  <path d="m240.118 322.911h48.15v51.564h-48.15z" fill="#97ffd2" />
                </g>
                <path
                  d="m331.373 251.418h-39.14c-5.468 0-9.9-4.432-9.9-9.9v-6.103c0-5.468 4.432-9.9 9.9-9.9h39.14c5.468 0 9.9 4.432 9.9 9.9v6.103c0 5.468-4.432 9.9-9.9 9.9z"
                  fill="#ff5ba8"
                />
                <g>
                  <g>
                    <path
                      d="m412.628 284.125h-26.895c-2.022 0-3.846-1.218-4.619-3.086-.774-1.869-.347-4.019 1.084-5.449l13.447-13.448c1.951-1.952 5.119-1.952 7.07 0 1.953 1.953 1.953 5.119 0 7.071l-4.912 4.912h14.824c2.762 0 5 2.239 5 5s-2.237 5-4.999 5z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m399.181 314.211c-1.279 0-2.56-.488-3.535-1.464-1.953-1.953-1.953-5.119 0-7.071l4.912-4.912h-14.824c-2.762 0-5-2.239-5-5s2.238-5 5-5h26.895c2.022 0 3.846 1.218 4.619 3.086.774 1.869.347 4.019-1.084 5.449l-13.447 13.448c-.977.976-2.257 1.464-3.536 1.464z"
                      fill="#fff"
                    />
                  </g>
                </g>
              </g>
              <path
                d="m222.876 51.495c-7.88 0-14.291-6.411-14.291-14.291 0-7.881 6.411-14.292 14.291-14.292 7.881 0 14.292 6.411 14.292 14.292 0 7.879-6.411 14.291-14.292 14.291zm0-18.583c-2.366 0-4.291 1.926-4.291 4.292s1.925 4.291 4.291 4.291 4.292-1.925 4.292-4.291-1.926-4.292-4.292-4.292z"
                fill="#01eca5"
              />
              <path
                d="m73.622 485.045c-2.762 0-5-2.238-5-5 0-3.309-2.691-6-6-6-2.762 0-5-2.238-5-5s2.238-5 5-5c3.309 0 6-2.691 6-6 0-2.762 2.238-5 5-5s5 2.238 5 5c0 3.309 2.691 6 6 6 2.762 0 5 2.238 5 5s-2.238 5-5 5c-3.309 0-6 2.691-6 6 0 2.762-2.238 5-5 5z"
                fill="#6583fe"
              />
              <path
                d="m450.939 62.495c-2.762 0-5-2.238-5-5 0-3.309-2.691-6-6-6-2.762 0-5-2.238-5-5s2.238-5 5-5c3.309 0 6-2.691 6-6 0-2.762 2.238-5 5-5s5 2.238 5 5c0 3.309 2.691 6 6 6 2.762 0 5 2.238 5 5s-2.238 5-5 5c-3.309 0-6 2.691-6 6 0 2.761-2.238 5-5 5z"
                fill="#6583fe"
              />
              <g fill="#ff5ba8">
                <path d="m122.761 478.754c-2.762 0-5-2.238-5-5 0-3.309-2.691-6-6-6-2.762 0-5-2.238-5-5s2.238-5 5-5c3.309 0 6-2.691 6-6 0-2.762 2.238-5 5-5s5 2.238 5 5c0 3.309 2.691 6 6 6 2.762 0 5 2.238 5 5s-2.238 5-5 5c-3.309 0-6 2.691-6 6 0 2.762-2.239 5-5 5z" />
                <path d="m272.8 65.452c-7.88 0-14.291-6.411-14.291-14.291 0-7.881 6.411-14.292 14.291-14.292 7.881 0 14.292 6.411 14.292 14.292 0 7.879-6.411 14.291-14.292 14.291zm0-18.583c-2.366 0-4.291 1.926-4.291 4.292s1.925 4.291 4.291 4.291 4.292-1.925 4.292-4.291-1.926-4.292-4.292-4.292z" />
              </g>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "Marketing Des Reseaux Sociaux",
      text: "On utilise les reseaux sociaux pour vous faire de la publicité et augmenter votre visibilité sur le marché !",
      link: "/marketting",
      icon: (
      <svg className="md:h-24 md:w-24 h-16 w-16" viewBox="0 0 512 512" ><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="27.58" x2="504.532" y1="396.562" y2="121.194"><stop offset="0" stopColor="#dcfdee" stopOpacity="0"/><stop offset=".6288" stopColor="#d2f3e4"/></linearGradient><g><g><path d="m4.896 331.392c17.448 172.872 292.417 167.143 420.804 136.265 82.47-19.834 87.596-59.472 86.106-144.001-.96-54.486 3.443-198.725-32.004-244.123-54.448-69.733-103.228-25.998-170.656-3.235-86.488 29.197-120.189-22.932-202.476-21.38-120.641 2.278-110.779 187.252-101.774 276.474z" fill="url(#SVGID_1_)"/></g><g><g><g><g><path d="m455.47 459.267h-398.94c-8.284 0-15-6.716-15-15v-314.267c0-8.284 6.716-15 15-15h398.94c8.284 0 15 6.716 15 15v314.266c0 8.285-6.715 15.001-15 15.001z" fill="#2626bc" opacity=".1"/><path d="m455.47 435.267h-398.94c-8.284 0-15-6.716-15-15v-314.267c0-8.284 6.716-15 15-15h398.94c8.284 0 15 6.716 15 15v314.266c0 8.285-6.715 15.001-15 15.001z" fill="#fff"/><path d="m470.47 160.313v-54.313c0-8.284-6.716-15-15-15h-398.94c-8.284 0-15 6.716-15 15v54.313z" fill="#ff7eb8"/><path d="m455.471 440.266h-398.942c-11.028 0-20-8.972-20-20v-314.266c0-11.028 8.972-20 20-20h398.941c11.028 0 20 8.972 20 20v314.266c.001 11.028-8.971 20-19.999 20zm-398.942-344.266c-5.514 0-10 4.486-10 10v314.266c0 5.514 4.486 10 10 10h398.941c5.514 0 10-4.486 10-10v-314.266c0-5.514-4.486-10-10-10z" fill="#2626bc"/></g><g><g><circle cx="85.623" cy="127.901" fill="#ff5ba8" r="10.901"/><circle cx="120.424" cy="127.901" fill="#fff" r="10.901"/><circle cx="155.224" cy="127.901" fill="#02ffb3" r="10.901"/></g><path d="m432.277 140.149h-136.158v-24.496h136.159c2.761 0 5 2.239 5 5v14.496c-.001 2.761-2.239 5-5.001 5z" fill="#ffdbed"/><path d="m296.789 115.965c-5.286-5.286-13.887-5.286-19.173 0s-5.286 13.887 0 19.173c4.037 4.037 10.003 4.98 14.953 2.852l4.348 4.348c1.952 1.952 5.119 1.952 7.071 0s1.952-5.119 0-7.071l-4.348-4.348c2.129-4.951 1.186-10.918-2.851-14.954zm-12.102 7.071c1.387-1.387 3.644-1.387 5.031 0s1.387 3.644 0 5.031-3.644 1.387-5.031 0c-1.387-1.388-1.387-3.644 0-5.031z" fill="#fff"/></g></g><g><path d="m173.469 265.324h-98.77c-2.761 0-5-2.239-5-5v-74.288c0-2.761 2.239-5 5-5h98.77c2.761 0 5 2.239 5 5v74.288c0 2.761-2.239 5-5 5z" fill="#02ffb3"/><path d="m305.385 265.324h-98.77c-2.761 0-5-2.239-5-5v-74.288c0-2.761 2.239-5 5-5h98.77c2.761 0 5 2.239 5 5v74.288c0 2.761-2.239 5-5 5z" fill="#8399fe"/><path d="m437.301 265.324h-98.77c-2.761 0-5-2.239-5-5v-74.288c0-2.761 2.239-5 5-5h98.77c2.761 0 5 2.239 5 5v74.288c0 2.761-2.239 5-5 5z" fill="#02ffb3"/></g><path d="m437.301 410.165h-362.602c-2.761 0-5-2.239-5-5v-116.391c0-2.761 2.239-5 5-5h362.601c2.761 0 5 2.239 5 5v116.391c.001 2.761-2.238 5-4.999 5z" fill="#8399fe"/><path d="m164.836 283.774h-90.137c-2.761 0-5 2.239-5 5v116.391c0 2.761 2.239 5 5 5h90.136v-126.391z" fill="#ffa8cf"/><g><path d="m188 303.017h53.181c2.761 0 5 2.239 5 5s-2.239 5-5 5h-53.181c-2.761 0-5-2.239-5-5s2.239-5 5-5z" fill="#fff"/><path d="m396.819 303.017h17.181c2.761 0 5 2.239 5 5s-2.239 5-5 5h-17.181c-2.761 0-5-2.239-5-5s2.239-5 5-5z" fill="#fff"/><g><path d="m188.003 323.505h83.177c2.761 0 5 2.239 5 5s-2.239 5-5 5h-83.177c-2.761 0-5-2.239-5-5s2.239-5 5-5z" fill="#fff"/></g><path d="m188.003 343.992h225.997c2.761 0 5 2.239 5 5s-2.239 5-5 5h-225.997c-2.761 0-5-2.239-5-5s2.239-5 5-5z" fill="#fff"/><g><path d="m188.003 364.48h225.997c2.761 0 5 2.239 5 5s-2.239 5-5 5h-225.997c-2.761 0-5-2.239-5-5s2.239-5 5-5z" fill="#fff"/></g><path d="m188.003 394.968c-2.761 0-5-2.239-5-5s2.239-5 5-5h225.997c2.761 0 5 2.239 5 5s-2.239 5-5 5" fill="#fff"/></g></g><path d="m360.721 66.362c-7.881 0-14.292-6.411-14.292-14.292 0-7.88 6.411-14.291 14.292-14.291 7.88 0 14.291 6.411 14.291 14.291 0 7.881-6.411 14.292-14.291 14.292zm0-18.583c-2.366 0-4.292 1.925-4.292 4.291s1.926 4.292 4.292 4.292 4.291-1.926 4.291-4.292-1.925-4.291-4.291-4.291z" fill="#6583fe"/><path d="m155.225 72.939c-7.881 0-14.292-6.411-14.292-14.291 0-7.881 6.411-14.292 14.292-14.292 7.88 0 14.291 6.411 14.291 14.292 0 7.88-6.412 14.291-14.291 14.291zm0-18.583c-2.366 0-4.292 1.926-4.292 4.292s1.926 4.291 4.292 4.291 4.291-1.925 4.291-4.291-1.925-4.292-4.291-4.292z" fill="#6583fe"/><path d="m268.469 484.889c-7.88 0-14.291-6.411-14.291-14.292 0-7.88 6.411-14.291 14.291-14.291 7.881 0 14.292 6.411 14.292 14.291 0 7.881-6.411 14.292-14.292 14.292zm0-18.583c-2.366 0-4.291 1.925-4.291 4.291s1.925 4.292 4.291 4.292 4.292-1.926 4.292-4.292-1.926-4.291-4.292-4.291z" fill="#01eca5"/><g fill="#ff5ba8"><path d="m314.486 54.694c-2.762 0-5-2.238-5-5 0-3.309-2.692-6-6.001-6-2.762 0-5-2.238-5-5s2.238-5 5-5c3.309 0 6.001-2.691 6.001-6 0-2.762 2.238-5 5-5s5 2.238 5 5c0 3.309 2.691 6 5.999 6 2.762 0 5 2.238 5 5s-2.238 5-5 5c-3.308 0-5.999 2.691-5.999 6 0 2.762-2.238 5-5 5z"/><path d="m214.084 489.306c-2.762 0-5-2.238-5-5 0-3.309-2.691-6-6-6-2.762 0-5-2.238-5-5s2.238-5 5-5c3.309 0 6-2.691 6-6 0-2.762 2.238-5 5-5s5 2.238 5 5c0 3.309 2.691 6 6 6 2.762 0 5 2.238 5 5s-2.238 5-5 5c-3.309 0-6 2.691-6 6 0 2.762-2.238 5-5 5z"/></g></g></g></svg>
      ),
    },
    {
      title: "Marketing Des Reseaux Sociaux",
      text: "On utilise les reseaux sociaux pour vous faire de la publicité et augmenter votre visibilité sur le marché !",
      link: "/marketting",
      icon: (
<svg className="md:h-24 md:w-24 h-16 w-16"  viewBox="0 0 512 512"  ><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="23.821" x2="459.531" y1="336.331" y2="84.774"><stop offset="0" stopColor="#dcfdee" stopOpacity="0"/><stop offset=".6288" stopColor="#d2f3e4"/></linearGradient><g><g><path d="m16.074 295.943c18.727 64.003 72.707 194.564 163.922 182.845 91.486-11.755 55.759-129.725 139.508-145.894 36.867-7.118 61.857 56.689 98.806 54.704 47.588-2.557 71.81-49.663 85.108-89.264 28.197-83.968-14.029-226.352-112.859-251.012-86.244-21.519-96.332 83.855-171.322 53.248-42.149-17.203-37.938-68.576-89.272-78.942-155.298-31.359-138.81 189.15-113.891 274.315z" fill="url(#SVGID_1_)"/></g><g><g><g><g><path d="m350.232 493.402h-188.464c-16.569 0-30-13.431-30-30v-380.679c0-16.569 13.431-30 30-30h188.464c16.569 0 30 13.431 30 30v380.678c0 16.569-13.431 30.001-30 30.001z" fill="#2626bc" opacity=".1"/><path d="m350.232 469.402h-188.464c-16.569 0-30-13.431-30-30v-380.679c0-16.569 13.431-30 30-30h188.464c16.569 0 30 13.431 30 30v380.678c0 16.569-13.431 30.001-30 30.001z" fill="#6583fe"/><path d="m131.77 71.632h248.46v354.86h-248.46z" fill="#2d58e0"/><path d="m239.225 201.915h-50.943c-5.523 0-10-4.477-10-10v-47.011c0-5.523 4.477-10 10-10h50.943c5.523 0 10 4.477 10 10v47.011c0 5.523-4.477 10-10 10z" fill="#1f50c9"/><path d="m324.144 201.633h-50.943c-5.523 0-10-4.477-10-10v-47.011c0-5.523 4.477-10 10-10h50.943c5.523 0 10 4.477 10 10v47.011c0 5.523-4.477 10-10 10z" fill="#1f50c9"/><g><path d="m379.948 134.622v67.01h-21.55c-5.52 0-10-4.48-10-10v-47.01c0-5.52 4.48-10 10-10z" fill="#1f50c9"/></g><g><path d="m309.84 93.061h-107.68c-2.761 0-5 2.239-5 5s2.239 5 5 5h107.68c2.761 0 5-2.239 5-5s-2.238-5-5-5z" fill="#fff"/></g><g><g><path d="m239.225 191.403h-50.943c-5.523 0-10-4.477-10-10v-47.011c0-5.523 4.477-10 10-10h50.943c5.523 0 10 4.477 10 10v47.011c0 5.523-4.477 10-10 10z" fill="#ff7eb8"/><g fill="#fff"><path d="m228.594 170.507h-20.681c-2.761 0-5 2.239-5 5s2.239 5 5 5h20.681c2.761 0 5-2.239 5-5s-2.239-5-5-5z"/><path d="m228.594 154.177h-5.681c-2.761 0-5 2.239-5 5s2.239 5 5 5h5.681c2.761 0 5-2.239 5-5s-2.239-5-5-5z"/></g></g><g><path d="m324.144 191.122h-50.943c-5.523 0-10-4.477-10-10v-47.012c0-5.523 4.477-10 10-10h50.943c5.523 0 10 4.477 10 10v47.011c0 5.523-4.477 10.001-10 10.001z" fill="#02ffb3"/><g fill="#fff"><path d="m313.513 170.226h-20.681c-2.761 0-5 2.239-5 5s2.239 5 5 5h20.681c2.761 0 5-2.239 5-5s-2.239-5-5-5z"/><path d="m313.513 153.895h-5.681c-2.761 0-5 2.239-5 5s2.239 5 5 5h5.681c2.761 0 5-2.239 5-5s-2.239-5-5-5z"/></g></g><g><path d="m379.948 124.111v67.01h-21.55c-5.52 0-10-4.48-10-10v-47.01c0-5.52 4.48-10 10-10z" fill="#9fb0fe"/></g></g><path d="m131.77 426.492v-184.74c0-13.8 11.19-25 25-25h198.46c13.81 0 25 11.2 25 25v184.74z" fill="#fff"/><path d="m350.232 474.401h-188.464c-19.299 0-35-15.701-35-35v-380.677c0-19.299 15.701-35 35-35h188.464c19.299 0 35 15.701 35 35v380.678c0 19.298-15.701 34.999-35 34.999zm-188.464-440.677c-13.785 0-25 11.215-25 25v380.678c0 13.785 11.215 25 25 25h188.464c13.785 0 25-11.215 25-25v-380.678c0-13.785-11.215-25-25-25z" fill="#2626bc"/><g><path d="m273.483 56.094h-34.966c-2.761 0-5-2.239-5-5s2.239-5 5-5h34.966c2.761 0 5 2.239 5 5s-2.239 5-5 5z" fill="#b7c5ff"/></g><circle cx="296.813" cy="51.092" fill="#b7c5ff" r="5.002"/></g></g><g><g><path d="m234.594 249.062h-20.681c-2.761 0-5 2.239-5 5s2.239 5 5 5h20.681c2.761 0 5-2.239 5-5s-2.239-5-5-5z" fill="#00d890"/><path d="m336.594 269.335h-122.681c-2.761 0-5 2.239-5 5s2.239 5 5 5h122.681c2.761 0 5-2.239 5-5s-2.239-5-5-5z" fill="#9fb0fe"/></g><path d="m184.926 279.335h-20.272c-2.761 0-5-2.239-5-5v-20.272c0-2.761 2.239-5 5-5h20.272c2.761 0 5 2.239 5 5v20.272c0 2.761-2.239 5-5 5z" fill="#02ffb3"/></g><g><g><path d="m234.594 311.006h-20.681c-2.761 0-5 2.239-5 5s2.239 5 5 5h20.681c2.761 0 5-2.239 5-5s-2.239-5-5-5z" fill="#ff5ba8"/><path d="m336.594 331.278h-122.681c-2.761 0-5 2.239-5 5s2.239 5 5 5h122.681c2.761 0 5-2.239 5-5s-2.239-5-5-5z" fill="#9fb0fe"/></g><path d="m184.926 341.278h-20.272c-2.761 0-5-2.239-5-5v-20.272c0-2.761 2.239-5 5-5h20.272c2.761 0 5 2.239 5 5v20.272c0 2.761-2.239 5-5 5z" fill="#ff7eb8"/></g><g><g><path d="m234.594 372.949h-20.681c-2.761 0-5 2.239-5 5s2.239 5 5 5h20.681c2.761 0 5-2.239 5-5s-2.239-5-5-5z" fill="#6583fe"/><path d="m336.594 393.221h-122.681c-2.761 0-5 2.239-5 5s2.239 5 5 5h122.681c2.761 0 5-2.239 5-5s-2.239-5-5-5z" fill="#9fb0fe"/></g><path d="m184.926 403.221h-20.272c-2.761 0-5-2.239-5-5v-20.272c0-2.761 2.239-5 5-5h20.272c2.761 0 5 2.239 5 5v20.272c0 2.761-2.239 5-5 5z" fill="#9fb0fe"/></g></g><path d="m418.336 397.24c-7.88 0-14.291-6.411-14.291-14.292s6.411-14.292 14.291-14.292 14.291 6.411 14.291 14.292-6.411 14.292-14.291 14.292zm0-18.583c-2.366 0-4.291 1.925-4.291 4.292s1.925 4.292 4.291 4.292 4.291-1.925 4.291-4.292-1.925-4.292-4.291-4.292z" fill="#6583fe"/><path d="m82.919 184.409c-2.761 0-5-2.239-5-5 0-3.309-2.691-6-6-6-2.761 0-5-2.239-5-5s2.239-5 5-5c3.309 0 6-2.691 6-6 0-2.761 2.239-5 5-5s5 2.239 5 5c0 3.309 2.691 6 6 6 2.761 0 5 2.239 5 5s-2.239 5-5 5c-3.309 0-6 2.691-6 6 0 2.761-2.239 5-5 5z" fill="#01eca5"/><path d="m432.652 442.493c-2.762 0-5-2.239-5-5 0-3.309-2.691-6-6-6-2.762 0-5-2.239-5-5s2.238-5 5-5c3.309 0 6-2.691 6-6 0-2.761 2.238-5 5-5s5 2.239 5 5c0 3.309 2.691 6 6 6 2.762 0 5 2.239 5 5s-2.238 5-5 5c-3.309 0-6 2.691-6 6 0 2.761-2.238 5-5 5z" fill="#01eca5"/><g fill="#ff5ba8"><path d="m443.652 150.622c-2.762 0-5-2.239-5-5 0-3.309-2.691-6-6-6-2.762 0-5-2.239-5-5s2.238-5 5-5c3.309 0 6-2.691 6-6 0-2.761 2.238-5 5-5s5 2.239 5 5c0 3.309 2.691 6 6 6 2.762 0 5 2.239 5 5s-2.238 5-5 5c-3.309 0-6 2.691-6 6 0 2.761-2.238 5-5 5z"/><path d="m72.627 233.706c-2.761 0-5-2.239-5-5 0-3.309-2.691-6-6-6-2.761 0-5-2.239-5-5s2.239-5 5-5c3.309 0 6-2.691 6-6 0-2.761 2.239-5 5-5s5 2.239 5 5c0 3.309 2.691 6 6 6 2.761 0 5 2.239 5 5s-2.239 5-5 5c-3.309 0-6 2.691-6 6 0 2.761-2.238 5-5 5z"/></g></g></g></svg>
      ),
    },
  ];
  return (
    // outer most container
    <section className="md:h-[calc(100vh-5rem)]  w-full px-8 py-16 ">
      <div className="h-full w-full overflow-hidden flex flex-col items-center gap-y-2 ">
        <p ref={subtitle} className="text-xl translate-y-4 opacity-0 bg-gradient-to-r font-medium text-transparent from-purple-600 to-blue-600 bg-clip-text ">
          SERVICES POPULAIRES
        </p>
        <h3 ref={title} className="sm:text-5xl translate-y-16 opacity-0 text-3xl text-center font-extrabold text-slate-900">Nous aidons les marques avec</h3>
        {/* cards container */}
        <div ref={cardContainer} className="h-full opacity-0 translate-y-52 max-w-7xl mt-12 w-full gap-12 [grid-template-columns:_repeat(_auto-fit,_minmax(16rem,_1fr)_);] sm:[grid-template-columns:_repeat(_auto-fit,_minmax(20rem,_1fr)_);] grid">
          {cards.map((item, index) => (
            <Card item={item} key={index} />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// creating one card component
const Card = ({ item }) => {
  return (
    <div className="md:h-96 h-80 relative overflow-hidden hover:-translate-y-3   group transition-all duration-500 ease-in-out  py-4 outline outline-2 outline-sky-100 rounded-xl from-white to-white w-full  px-4 shadow-lg">
      <div className="h-full z-[0] opacity-0 transition-all druation-500 ease-in-out group-hover:opacity-100 absolute bg-gradient-to-tr from-purple-400 to-sky-400 w-full inset-0"></div>
      <div className="gap-y-4 relative z-[1] flex flex-col items-center">
        {item.icon}
        <p className="sm:text-2xl text-xl  transition-colors ease-in-out duration-75 group-hover:text-white text-slate-700 sm:w-72 text-center font-bold capitalize">{item.title}</p>
        <p className="md:text-lg font-medium text-center transition-colors ease-in-out duration-75 group-hover:text-white text-slate-600">{item.text}</p>
        <Link href={item.link} className="md:text-xl text-lg mt-2 font-bold transition-colors ease-in-out duration-75 group-hover:text-white text-slate-900">
          En savoir plus
        </Link>
      </div>
    </div>
  );
};