const Footer = () => {
  return (
    <div className="flex flex-col w-auto my-0 mx-10 bg-white py-2">
      <div className="flex space-x-4">
        <p className="text-xs text-gray-500 hover:underline hover:cursor-pointer">
          Bosnian
        </p>
        <p className="text-xs text-gray-500 hover:underline hover:cursor-pointer">
          English (US)
        </p>
        <p className="text-xs text-gray-500 hover:underline hover:cursor-pointer">
          Italiano
        </p>
        <p className="text-xs text-gray-500 hover:underline hover:cursor-pointer">
          Deutsch
        </p>
        <p className="text-xs text-gray-500 hover:underline hover:cursor-pointer">
          Espanol
        </p>
      </div>
      <hr className="border-gray-300 my-2" />
      <div className="flex space-x-4">
        <p className="text-xs text-gray-500 hover:underline hover:cursor-pointer">
          Register
        </p>
        <p className="text-xs text-gray-500 hover:underline hover:cursor-pointer">
          Sign in
        </p>
        <p className="text-xs text-gray-500 hover:underline hover:cursor-pointer">
          Messenger
        </p>
        <p className="text-xs text-gray-500 hover:underline hover:cursor-pointer">
          Watch
        </p>
        <p className="text-xs text-gray-500 hover:underline hover:cursor-pointer">
          Facebook Pay
        </p>
      </div>
    </div>
  )
}

export default Footer
