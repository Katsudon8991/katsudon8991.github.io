import React from "react";

import './css/layout.css';
import { StyledNav, StyledLink} from "./style/StyledLayout";

function Nav(){
    return(
        <StyledNav>
            <ul>
                <li>
                    <StyledLink to="/postList">
                        <h2>Blog Posts</h2>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="/portfolio">
                        <h2>Portfolio</h2>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="/cv">
                        <h2>CV</h2>
                    </StyledLink>
                </li>
            </ul>
        </StyledNav>
    );
}

export default Nav;