import React from "react";

const SliderTest = () => {
  return (
    <div>
      <div id="rounded-drawer-nav" className="mb-8 md:mb-12">
        <div className="relative mb-3 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="line-clamp-1 text-xl font-medium">Rounded Drawer Nav</h4>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-xl transition-colors hover:text-indigo-600">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </button>
            <a
              className="flex items-center gap-1 font-medium text-indigo-600 hover:underline"
              href="/pricing"
            >
              <span>Get the code</span>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div
            // style="display: block;"
            style={{display:"block"}}
            className="no-scrollbar relative w-full overflow-hidden overflow-y-scroll border border-neutral-300 bg-white"
          >
            <div className="bg-neutral-950">
              <nav className="bg-neutral-950 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <svg
                      width="40"
                      height="auto"
                      viewBox="0 0 50 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-neutral-50"
                    >
                      <path
                        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                        stop-color="#000000"
                      ></path>
                      <path
                        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                        stop-color="#000000"
                      ></path>
                    </svg>
                    <div className="ml-9 mt-0.5 hidden md:block">
                      <div className="flex gap-6">
                        <span className="cursor-pointer text-neutral-50 transition-colors hover:text-neutral-400">
                          Product
                        </span>
                        <span className="cursor-pointer text-neutral-50 transition-colors hover:text-neutral-400">
                          Solutions
                        </span>
                        <span className="cursor-pointer text-neutral-50 transition-colors hover:text-neutral-400">
                          Documentation
                        </span>
                        <span className="cursor-pointer text-neutral-50 transition-colors hover:text-neutral-400">
                          Media
                        </span>
                        <span className="cursor-pointer text-neutral-50 transition-colors hover:text-neutral-400">
                          Pricing
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="hidden rounded-md bg-indigo-500 px-3 py-1.5 text-sm text-neutral-50 transition-colors hover:bg-indigo-600 md:block">
                    <span className="font-bold">Get started - </span> no CC required
                  </button>
                  <button className="mt-0.5 block text-2xl text-neutral-50 md:hidden">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </nav>
              <main
                className="bg-neutral-950 px-2 pb-2"
                // style="transform: none; transform-origin: 50% 50% 0px;"
                style={{transform:"none", transformOrigin:"50% 50% 0px"}}
              >
                <div className="bg-white rounded-3xl">
                  <div className="flex flex-col items-center justify-center px-12 py-32">
                    <p className="text-center">
                      Your hero section content goes here :
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div
            className="relative border border-neutral-300 bg-neutral-900 p-4 pt-0"
            // style="display: none;"
            style={{display:"none"}}
          >
            <div className="-ml-4 -mr-4 mb-4 flex items-center justify-between border-b border-neutral-700 bg-neutral-900 pr-4 text-sm">
              <div className="flex items-center font-medium"></div>
              <div className="relative cursor-pointer text-xs text-neutral-50">
                <select className="w-[120px] cursor-pointer text-ellipsis bg-transparent pr-6 focus:outline-none"></select>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="pointer-events-none absolute right-0 top-[2px] cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="7 13 12 18 17 13"></polyline>
                  <polyline points="7 6 12 11 17 6"></polyline>
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 z-40 grid place-content-center bg-neutral-900/50 backdrop-blur">
              <a href="/pricing">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="mx-auto mb-2 text-4xl font-semibold text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                </svg>
                <span className="text-sm font-medium text-white">
                  Go pro to access this content
                </span>
              </a>
            </div>
            <div className="no-scrollbar relative max-h-[445px] w-full overflow-scroll"></div>
            <button className="absolute right-2 top-[60px] rounded bg-neutral-600 p-3 text-lg text-neutral-50 transition-colors hover:bg-neutral-500">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTest;
