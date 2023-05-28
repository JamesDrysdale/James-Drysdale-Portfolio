import { component$, useStylesScoped$ } from "@builder.io/qwik";
import STYLE from './header.scss?inline';

export default component$(() => {
    useStylesScoped$(STYLE);

    return(
        <header>
            <div class="headerbar">
                <div class="container">
                    <div class="headerbar-inner">
                        <div class="logo">
                            <a href="#">
                                <img src="images/logo.png" alt="James Drysdale Brand Logo" height={68} width={68}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
});