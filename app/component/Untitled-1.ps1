 {/* <div className="bg-white lg:w-[80%] lg:mx-auto mx-5 lg:px-24 px-5 lg:pt-24 pt-5 pb-10 mt-20 rounded-xl">
        <div className="flex justify-center">
          <button className="text-lg font-bold flex justify-center text-center p-3 rounded-xl text-[#0B5CFF] w-48  bg-[#D3E2FF]">
            CAR DETAILS
          </button>
        </div>
        <div className="bg-[#F6F7F9] p-2 rounded-xl lg:text-lg text-sm w-full font-bold lg:pl-8 pl-4 text-[#313131] mt-5">
          Fundamentals
        </div>
        {/* fundamentals */}
        <div className="  ">
          {CarDetail.map((item) => (
            <>
              <div className="mb-4 grid grid-cols-2 lg:w-[600px] lg:ml-8 lg:ml-4 ml-2">
                <p className="lg:text-lg text-xs mt-5  text-[#90A3BF]">
                  {item.key}
                </p>
                <p className="lg:text-lg text-xs  mt-5  text-[#90A3BF] text-start font-light">
                  {item.value}
                </p>
              </div>
              <hr />
            </>
          ))}
        </div>
        {/* style */}
        <div className="bg-[#F6F7F9] p-2 rounded-xl lg:text-lg text-sm w-full font-bold lg:pl-8 pl-4 text-[#313131] mt-14">
          Style
        </div>

        <div className="  ">
          {style.map((item) => (
            <>
              <div className="mb-4 grid grid-cols-2 lg:w-[600px] lg:ml-8 lg:ml-4 ml-2">
                <p className="lg:text-lg text-xs mt-5  text-[#90A3BF]">
                  {item.key}
                </p>
                <p className="lg:text-lg text-xs  mt-5  text-[#90A3BF] text-start font-light">
                  {item.value}
                </p>
              </div>
              <hr />
            </>
          ))}
        </div>
        {/* Performance */}
        <div className="bg-[#F6F7F9] p-2 rounded-xl lg:text-lg text-sm w-full font-bold lg:pl-8 pl-4 text-[#313131] mt-14">
          Performance
        </div>

        <div className="  ">
          {performence.map((item) => (
            <>
              <div className="mb-4 grid grid-cols-2 lg:w-[600px] lg:ml-8 lg:ml-4 ml-2">
                <p className="lg:text-lg text-xs mt-5  text-[#90A3BF]">
                  {item.key}
                </p>
                <p className="lg:text-lg text-xs  mt-5  text-[#90A3BF] text-start font-light">
                  {item.value}
                </p>
              </div>
              <hr />
            </>
          ))}
        </div>
        {/* Performance */}
        <div className="bg-[#F6F7F9] p-2 rounded-xl lg:text-lg text-sm w-full font-bold lg:pl-8 pl-4 text-[#313131] mt-14">
          Features
        </div>

        <div className="  ">
          {features.map((item) => (
            <>
              <div className="mb-4 grid lg:grid-cols-6 grid-cols-2  lg:ml-8 lg:ml-4 ml-2">
                <p className="lg:text-lg text-xs mt-5  lg:col-span-2 text-[#90A3BF]">
                  {item.key}
                </p>
                <p className="lg:text-lg text-xs mt-5 lg:col-span-4 text-[#90A3BF] text-start font-light">
                  {item.value}
                </p>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
      <div className="flex items-center mt-5 bg-white mx-5 rounded-xl p-3 justify-between lg:w-[80%] lg:mx-auto">
        <div className=" ">
          <div className="flex gap-2 items-center ">
            <Image
              src="/redLogo.png"
              alt="image"
              width={44}
              height={44}
              className=""
            />
            <div>
              <h1 className=" flex items-center gap-1 font-bold lg:text-sm text-[9px] text-[#1A202C]">
                DealerShip
                <Link href="/dealership">
                  <RxExternalLink className="text-[#90A3BF] lg:text-lg text-sm " />
                </Link>
              </h1>
              <h1 className="text-[#90A3BF]  lg:text-sm text-[9px] font-medium">
                Sunshine Honda
              </h1>
            </div>
          </div>
        </div>
        <div className="flex  items-center space-x-1">
          <PiMedalFill className="lg:text-sm text-sm text-[#90A3BF] text-2xl " />
          <p className="lg:text-sm text-[7px] text-[#90A3BF] ">4.0</p>
          <IoMdStar className=" text-[#FBAD39] lg:text-sm text-[7px]" />
          <IoMdStar className=" text-[#FBAD39] lg:text-sm text-[7px]" />
          <IoMdStar className=" text-[#FBAD39] lg:text-sm text-[7px]" />
          <IoMdStar className=" text-[#FBAD39] lg:text-sm text-[7px]" />
          <IoMdStar className=" focus:text-[#FBAD39]  lg:text-sm text-[7px] text-[#90A3BF]" />
          <p className="lg:text-sm text-[7px] text-[#90A3BF]">(32 reviews)</p>
        </div>
      </div>
      <div>
        <Reviews grid={3} column={"lg:grid-cols-3"} />
      </div>
      <Link href="/dealership">
        <div className="flex justify-center mb-40 mt-16">
          <button className="bg-[#0B5CFF] hover:bg-opacity-90 cursor-pointer md:w-96 w-60 md:text-xl text-sm font-medium rounded-xl md:p-5 p-3  mx-auto text-center text-white">
            More Cars from this Dealership
          </button>
        </div>
      </Link>