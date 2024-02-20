import React from 'react'

export default function Footer() {
  return (
      <footer className="px-[25px] bg-white dark:bg-box-dark">
          <div className="flex justify-between flex-wrap py-[22px] gap-x-[30px] gap-y-[15px] max-ssm:gap-y-[8px] items-center max-md:flex-col">
              <div className="flex items-center gap-[4px] text-[14px] font-medium max-md:text-center text-body dark:text-subtitle-dark">
                  © <span className="current-year">
                        2024
                    </span>{" "}
                  <a href="https://movie.wikukarno.com" className="text-primary">
                      movie.wikukarno.com
                  </a>
              </div>

              <div className="justify-end md:justify-center items-center flex gap-[15px]">
                  <a
                      href="#"
                      className="text-body dark:text-subtitle-dark text-[14px] hover:text-primary dark:hover:text-title-dark"
                  >
                      About
                  </a>
                  <a
                      href="#"
                      className="text-body dark:text-subtitle-dark text-[14px] hover:text-primary dark:hover:text-title-dark"
                  >
                      Team
                  </a>
                  <a
                      href="#"
                      className="text-body dark:text-subtitle-dark text-[14px] hover:text-primary dark:hover:text-title-dark"
                  >
                      Contact
                  </a>
              </div>
          </div>
      </footer>
  );
}
