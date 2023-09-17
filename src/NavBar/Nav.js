import React, { useState } from "react";
import styled from "styled-components";

const navbar = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  {
    name: "Our Products",
    id: "product",
    child: [
      { name: "Product 1", id: "p1" },
      { name: "Product 2", id: "p2" },
      { name: "Product 3", id: "p3" },
      { name: "Product 4", id: "p4" },
    ],
  },
  { name: "Contact Us", id: "contact" },
];

const Nav = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);

  const handleMenuItemClick = (id) => {
    setSelectedMenuItem(id);
    setSelectedSubMenu(null);
  };

  const handleSubMenuClick = (id) => {
    setSelectedSubMenu(id);
  };

  return (
    <HeaderSection>
      <div className="topMenu">
        {navbar.map((item) => (
          <MenuItem
            key={item.id}
            className={selectedMenuItem === item.id ? "selected" : ""}
            onClick={() => handleMenuItemClick(item.id)}
          >
            <a href={`#${item.id}`}>{item.name}</a>
            {item.child && (
              <SubMenu
                className={selectedMenuItem === item.id ? "visible" : ""}
              >
                {item.child.map((subItem) => (
                  <li
                    key={subItem.id}
                    className={selectedSubMenu === subItem.id ? "selected" : ""}
                    onClick={() => handleSubMenuClick(subItem.id)}
                  >
                    <a href={`#${subItem.id}`}>{subItem.name}</a>
                  </li>
                ))}
              </SubMenu>
            )}
          </MenuItem>
        ))}
      </div>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  max-width: 1400px;

  color: white;

  .topMenu {
    display: flex;
    gap: 30px;
  }
  @media (max-width: 576px) {
    min-height: 245vh;
    display: flex;
    flex-direction: row-reverse;
    .topMenu {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: black;
      align-items: center;
    }
  }
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  position: relative;

  a {
    text-decoration: none;
    color: white;
  }

  &.selected a {
    border-bottom: 2px solid white;
  }
`;

const SubMenu = styled.ul`
  list-style: none;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  display: none;

  &.visible {
    display: block;
  }

  li {
    padding: 10px 20px;
    list-style: none;
  }
  @media (max-width: 576px) {
    &.visible {
      display: flex;
      line-height: 0.05;
    }
  }
`;

export default Nav;
