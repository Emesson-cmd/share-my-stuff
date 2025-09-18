import { getUserSession } from '@/lib/session';
import ButtonLogout from '@/app/components/features/ButtonLogout';
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarToggle,
} from 'flowbite-react';
import NavLinks from './NavLinks';

export default async function Navbar() {
  const user = await getUserSession();

  if (!user) {
    return (
      <FlowbiteNavbar>
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Share My Stuff
          </span>
        </NavbarBrand>
      </FlowbiteNavbar>
    );
  }

  return (
    <FlowbiteNavbar>
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Share My Stuff
        </span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img={user.image || '/vercel.svg'}
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">{user.name}</span>
            <span className="block truncate text-xs font-medium">
              {user.email}
            </span>
          </DropdownHeader>
          <DropdownItem>Settings</DropdownItem>
          <DropdownDivider />
          <ButtonLogout />
        </Dropdown>
        <NavbarToggle />
      </div>

      <NavLinks />
    </FlowbiteNavbar>
  );
}
