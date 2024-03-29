import { ImAndroid } from "react-icons/im";
import { ImAppleinc } from "react-icons/im";

function Product({ data, theme }) {

  function openLink(link = "") {
    window.open(link);
  }

  return (
    <>
      <div
        className={`overflow-hidden hover:scale-105 hover:ease-in-out duration-200 z-10 shadow-xl flex-col max-sm:m-10 md:m-2  xl:m-6 max-xl:my-2 rounded-3xl font-sans flex items-center ${theme.bgcolor}`}
      >
        <img
          src={data.coverImage}
          alt="logo"
          width={800}
          className="pb-4 max-sm:pb-2 rounded-lg h-full "
        />
        <div className="p-2 w-full">
          <div className="flex justify-start items-center mb-6 max-sm:mb-2">
            <img className='rounded-2xl mx-4' src={data.logo} alt="logo" width={80} />
            <h3 className="font-bold text-2xl max-sm:text-lg lg:mr-10 xl:mr-1 sm:mr-2 text-white">
              {data.name}
            </h3>
          </div>
        </div>

        <div className={`bg-transparent font-bold justify-between flex text-wh	`}>
          <div className="bg-gray-200 rounded-xl p-3 max-sm:p-2 mb-4 hover:scale-90 hover:ease-in-out duration-200">
            {data.iosLink ? (<button onClick={() => openLink(data.iosLink)} >
              <div className="flex items-center">
                <ImAppleinc className="mr-2 max-sm:mr-1" size={20} />
                <div className="flex-col items-center text-sm max-sm:text-xs">
                  <h1>Get it on</h1>
                  <h1><b>Apple Store</b></h1>
                </div>
              </div>
            </button>
            )
              : null}
          </div>

          <div className="max-sm:ms-1 ms-3 bg-gray-200 rounded-xl p-3 max-sm:p-2 mb-4 hover:scale-90 hover:ease-in-out duration-200 ">
            {data.androidLink ? (
              <button onClick={() => openLink(data.androidLink)}>
                <div className="flex items-center">
                  <ImAndroid className="mr-2 max-sm:mr-1" size={20} />
                  <div className="flex-col items-center text-sm max-sm:text-xs">
                    <h1>Get it on</h1>
                    <h1><b>Google Play</b></h1>
                  </div>
                </div>
              </button>
            ) : null}
          </div>
        </div>

      </div>
    </>
  );
}

export default Product;