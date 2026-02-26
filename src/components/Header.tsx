import Navlink from "./Navlink"

const Header = () => {
  return (
    <div className="bg-indigo-900 text-white flex justify-between items-center">
        <h1>My website</h1>
      <Navlink />
    </div>
  )
}

export default Header
