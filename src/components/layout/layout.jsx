import React from "react";

// Component Imports
import {
  PokemonBanner,
  PokemonCompare,
  PokemonModal,
} from "components/pokemon";

// Style Imports
import { LayoutWrapper } from "styles/layout";
import { bodyBgColor } from "styles/global";

function Layout({ children }) {
  return (
    <LayoutWrapper color={bodyBgColor}>
      <PokemonBanner />
      {children}
      <PokemonCompare />
      <PokemonModal />
    </LayoutWrapper>
  );
}

export default Layout;
