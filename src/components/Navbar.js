import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useLocation, Link } from "react-router-dom";
import { DarkThemeToggle } from "flowbite-react";

function NavbarComponent() {
  const path = useLocation().pathname;
  return (
    <Navbar fluid>
      <Navbar.Brand href="/home">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          NotifiMe
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle className="mx-3" />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/home"} as={"div"}>
          <Link to="/home">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/privacy"} as={"div"}>
          <Link to="/privacy">Privacy</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
