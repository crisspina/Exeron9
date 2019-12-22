import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="black" light expand="md">
        <NavbarBrand href="https://exeron.com/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://exeron.com/">
                <img class="nav__logo black" src="../static/images/logo-black.png" alt="Exeron Logo"></img>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                What is EXERON
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  This is EXERON
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Videos
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Power Range
                </DropdownItem> 
                <DropdownItem>
                &#8594; X&#60;24Wx
                </DropdownItem>
                <DropdownItem>
                &#8594; X&#62;24Wx
                </DropdownItem>
                <DropdownItem>
                &#8594; Costomized X
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                  Configurator
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                  ees Award
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                  X Around the World
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Applications</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Benefits</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Downloads</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">About IPS</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;