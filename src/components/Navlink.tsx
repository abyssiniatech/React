import { Link } from "react-router-dom"

const Navlink = () => {
  return (
    <div className="bg-indigo-900 text-white p-4 flex items-center gap-4 justify-between hover:bg-indigo-700">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/product'>Product</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/hooks'>
          hooks
      </Link>
    </div>
  )
}

export default Navlink
