import Image from "next/image"
import Link from "next/link"
import logo from "../assets/Group 2.png"
import boy from "../assets/boy.jpg"
import "./login.css"

const Login = () => {
  return (
    <div className="bg-green py-10 lg:h-screen">
      <div className="w-[85%] mx-auto bg-white p-8 rounded-md lg:flex justify-evenly items-center lg:space-y-0 space-x-6">
        <div>
          <div className="mb-16">
            <Link href="/">
              <Image
                src={logo}
                placeholder="blur"
                alt="logo"
              />
            </Link>

          </div>
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-left mb-8">Login your account</h1>
            <form className="w-full max-w-md">
              <h1 className="text-center text-3xl font-bold"></h1>

              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
                className="mt-6 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
              />

              <button type="submit" className="mt-8 block w-full px-4 py-3 bg-black text-white rounded-md text-sm hover:font-semibold hover:text-black hover:bg-green transition all-ease duration-300">sign in</button>
              <button type="submit" className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md text-sm font-semibold hover:bg-green transition all-ease duration-300">sign up</button>
            </form>
          </div>
        </div>
        <div>
          <Image
            src={boy}
            placeholder="blur"
            alt="boy"
            height={500}
            className="object-fill bg-blend-darken brightness-50 rounded-md "
          />
          <div className="absolute bottom-20 w-[30%] m-auto p-4">
            <hr className="w-[20%] h-6 pb-2 border-green" />
            <p className='text-[10px] text-center text-white'>Recent global estimates by UNICEF and partners indicate that at least 340 million children under 5 (one in two) suffer from hidden hunger. In the Western Africa UN sub-region 67% of children under 5 suffer from hidden hunger.</p>
            <div className="flex items-right justify-end pt-2" >
              <hr className="w-[20%] border-green" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login

