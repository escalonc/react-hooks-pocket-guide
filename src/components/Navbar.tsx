import { Link } from "react-router-dom";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex text-white font-sans text-lg justify-center bg-sky-700">
        <Link to="useState">
          <NavItem>useState</NavItem>
        </Link>
        <Link to="useEffect">
          <NavItem>useEffect</NavItem>
        </Link>
        <Link to="useContext">
          <NavItem>useContext</NavItem>
        </Link>
        <Link to="useReducer">
          <NavItem>useReducer</NavItem>
        </Link>
        <Link to="useMemo">
          <NavItem>useMemo</NavItem>
        </Link>
        <Link to="useCallback">
          <NavItem>useCallback</NavItem>
        </Link>
        <Link to="useId">
          <NavItem>useId</NavItem>
        </Link>
      </ul>
    </nav>
  );
}
