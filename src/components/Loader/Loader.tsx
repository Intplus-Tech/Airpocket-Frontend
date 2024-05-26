const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute border-4 border-blue-500 border-t-transparent rounded-full w-full h-full spin-clockwise"></div>
        <div className="absolute border-4 border-green-500 border-t-transparent rounded-full w-2/3 h-2/3 spin-counterclockwise"></div>
        <div className="absolute border-4 border-red-500 border-t-transparent rounded-full w-1/3 h-1/3 spin-clockwise"></div>
      </div>
    </div>
  );
};

{
  /* <div className="flex h-[100vh] items-center justify-center text-4xl font-bold">
            Loading...
          </div> */
}

export default Loader;

// export const FetchLoader = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="relative w-64 h-32 bg-white border border-gray-300">
//         <div className="line-animation absolute w-full h-full"></div>
//       </div>
//     </div>
//   );
// };
