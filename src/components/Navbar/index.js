import React from "react";
import { Container, DropdownStyles } from "./styles";
import { DropdownOption, DropdownProvider } from "../Dropdown";
import { Products, Developers, Company } from "../Content";

export function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
              ></DropdownOption>
            </li>
            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
              ></DropdownOption>
            </li>
            <li>
              <DropdownOption name="Empresa" content={Company}></DropdownOption>
            </li>
          </ul>
        </Container>
      </DropdownStyles>
    </DropdownProvider>
  );
}
