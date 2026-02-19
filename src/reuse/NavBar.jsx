import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Logo from "../components/Logo";

export const NavBar = () => {
  return (
    <Navbar fluid rounded className="!bg-red-800 py-8 mb-5">
      <NavbarBrand as={Link} to="/">
        <Logo size="small" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <NavbarLink as={Link} to="/" className="mx-4 !text-white text-xl">
          Home
        </NavbarLink>
        {/* <NavbarLink as={Link} to="/auto-detailing" className="mx-4 !text-white text-base">
          Auto Detailing
        </NavbarLink>
        <NavbarLink as={Link} to="/cleaning" className="mx-4 !text-white text-base">
          Cleaning
        </NavbarLink>
        <NavbarLink as={Link} to="/landscaping" className="mx-4 !text-white text-base">
          Landscaping
        </NavbarLink>
        <NavbarLink as={Link} to="/condo" className="mx-4 !text-white text-base">
          Condo
        </NavbarLink>
        <NavbarLink as={Link} to="/contact-me" className="mx-4 !text-white text-base">
          Contact Me
        </NavbarLink> */}
      </NavbarCollapse>
    </Navbar>
  );
};