import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";
import Link from "./Link";

const Footer = () => {
  return (
    <p>
      Show : <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        COMPLETED
      </FilterLink>
    </p>
  );
};

export default Footer;
