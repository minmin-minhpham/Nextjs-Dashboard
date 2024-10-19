import Link from "next/link";

export default function ForgotPassPage() {
  return (
    <div className="bg-white shadow-lg px-10 py-12">
      <div className="px-5 pb-5 text-center text-gray-500">
        <p>You forgot your password?</p>
        <p>Here you can easily retrieve a new password.</p>
      </div>

      <form className="">
        <div className="mb-4">
          <label htmlFor="email" className="text-[1rem] block text-gray-700">
            Email
          </label>

          <div className="relative mt-1">
            <input
              id="email"
              type="email"
              className="w-full border border-stroke px-3 py-2 text-black outline-none focus:border-blue-400 focus-visible:shadow-none dark:border-[#3d4d60] dark:bg-[#1d2a39] dark:text-white dark:focus:border-primary"
              placeholder="Email"
            />

            <span className="absolute inset-y-0 right-3 flex items-center">
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                    fill=""
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div className="mb-12">
          <button
            className="w-full cursor-pointer  border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            type="submit"
          >
            New password
          </button>
        </div>
      </form>
      <div className="flex flex-col">
        <Link href="/signin" className="text-primary">
          Login
        </Link>
        <Link href="/signup" className="text-primary">
          Register a new membership
        </Link>
      </div>
    </div>
  );
}
