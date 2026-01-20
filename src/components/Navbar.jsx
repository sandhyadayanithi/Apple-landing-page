import { navLinks } from "../constants"

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src='/logo.svg' alt='Apple-logo'></img>

        <ul>
          {navLinks.map(({label})=>{
            return <li key={label}>
              <a href={label}>{label}</a>
            </li>
          })}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg"></img>
          </button>
          <button>
            <img src="/cart.svg"></img>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
