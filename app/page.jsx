import Image from "next/image";

export default function Home() {
  return (
    <>
        <div className="container mx-auto shadow-md mb-10">
          <div className="grid grid-cols-3 mt-32">
            <div className="col-span-2">
                <img src="./banner2.png" className="w-full" alt="logo" />
            </div>
            <div className="flex h-full items-cente justify-center border rounded-md">
                <div className="w-full p-10 rounded-md">
                    <div className="mb-5">
                        <label for="email" className="block text-center mb-2 text-xl font-medium text-gray-900 dark:text-white">Log In</label>
                    </div>  
                    <div className="mb-5">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@mediatamaweb.com" />
                    </div>  
                    <div className="mb-5">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                        </div>
                        <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    <div className="mt-5">
                      <span>Lupa Password</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </>
  );
}
