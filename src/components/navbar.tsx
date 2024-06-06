import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const routes = [
  {
    index: 10,
    name: "/animacje",
    route: "/animation",
  },
];

export default function Navbar() {
  return (
    <header className="flex justify-between p-4">
      <nav className="flex gap-6">
        <Link to={"/"}>
          <Button variant="ghost" className="text-lg">
            /home
          </Button>
        </Link>

        {routes.map((route) => (
          <Link key={route.index} to={route.route}>
            <Button variant="ghost" className="text-lg">
              {route.name}, zad. {route.index}
            </Button>
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </header>
  );
}
