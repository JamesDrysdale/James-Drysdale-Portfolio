import { component$, useStylesScoped$, useSignal, $ } from "@builder.io/qwik";
import { scrollToSection } from "~/utils/utils";
import STYLE from './header.scss?inline';

export default component$(() => {
    useStylesScoped$(STYLE);
    const activeNav = useSignal("home");

    const handleNavClick = $((elementId: string) => {
        scrollToSection(elementId);
        activeNav.value = elementId;
    });

    return(
        <header>
            <div class="headerbar">
                <div class="container animate__animated animate__fadeInDown">
                    <div class="headerbar-inner">
                        <div class="logo">
                            <a href="#">
                                <img src="images/logo.png" alt="James Drysdale Brand Logo" height={68} width={68}/>
                            </a>
                        </div>
                        <div class="navigation-menu">
                            <ul>
                                <li class={{ current: activeNav.value === "home" }}>
                                    <button onclick$={() => handleNavClick("home")}>Home</button>
                                </li>
                                <li class={{ current: activeNav.value === "about" }}>
                                    <button onclick$={() => handleNavClick("about")}>About</button>
                                </li>
                                <li class={{ current: activeNav.value === "articles" }}>
                                    <button onclick$={() => handleNavClick("articles")}>Articles</button>
                                </li>
                                <li class={{ current: activeNav.value === "services" }}>
                                    <button onclick$={() => handleNavClick("services")}>Services</button>
                                </li>
                                <li class={{ current: activeNav.value === "projects" }}>
                                    <button onclick$={() => handleNavClick("projects")}>Projects</button>
                                </li>
                                <li class={{ current: activeNav.value === "connect" }}>
                                    <button onclick$={() => handleNavClick("connect")}>Connect</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
});