import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-row">
        <div className="w-1/2 hidden lg:block h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A beautiful landscape"
            width={1650}
            height={1080}
            className="object-cover object-bottom w-full h-full"
          />
        </div>
        <div className="flex lg:w-1/2 w-full h-full justify-center xl:py-60 xl:px-40 lg:py-20 lg:px-20 px-3 py-32">
          <div className="flex flex-col w-full border rounded-lg shadow-lg p-6 border-neutral-300">
            <div className="flex flex-col gap-0.5">
              <h1 className="font-bold text-2xl">Sign In</h1>
              <p className="text-gray-500 font-md">Choose your preferred way to sign in</p>
            </div>
            <div className="flex flex-row gap-6 my-4">
              <Link
                href="#"
                className="p-2 border border-neutral-300 shadow-md rounded-md w-full text-center"
              >
                Google
              </Link>
              <Link
                href="#"
                className="p-2 border border-neutral-300 shadow-md rounded-md w-full text-center"
              >
                GitHub
              </Link>
            </div>
            <div className="flex items-center gap-1 my-2">
              <p className="flex-grow border-b border-neutral-300"></p>
              <p className="px-2 text-sm text-gray-500">OR CONTINUE WITH</p>
              <p className="flex-grow border-b border-neutral-300"></p>
            </div>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="hello999@ecommerce.com"
                  className="w-full border border-neutral-300 rounded-md p-2 "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  className="w-full border border-neutral-300 rounded-md py-2 px-3 placeholder:items-"
                />
              </div>
              <button className="bg-black p-2 text-white rounded-md hover:bg-zinc-900">
                Sign In
              </button>
            </form>
            <div className="flex-grow"></div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-xs text-gray-500 md:text-sm">
                Don't have an account?{"  "}
                <Link href="/dashboard" className="text-black underline">
                  Sign Up
                </Link>
              </p>
              <Link href="#" className="text-black hover:underline text-xs md:text-sm">
                Reset Password
              </Link>
            </div>
          </div>
      </div>
        
    </main>
  );
}
