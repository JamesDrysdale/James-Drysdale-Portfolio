import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { scrollToSection } from "~/utils/utils";
import STYLE from './jumbotron.scss?inline';

export default component$(() => {
    useStylesScoped$(STYLE);

    return (
        <div class="jumbotron" id="home">
            <div class="background">
                <div class="image">
                    <div class="overlay">

                    </div>
                </div>
            </div>
            <div class="content">
                <div class="avatar-wrapper animate__animated animate__zoomIn">
                    <div class="avatar"></div>
                </div>
                <h3 class="client-name animate__animated animate__fadeInDown animate__delay-1s">
                    James <span>Drysdale</span>
                </h3>
                <p class="profession animate__animated animate__fadeInUp animate__delay-1s">
                    Software developer, UX/UI designer, mentor, artist and dog dad.
                </p>
            </div>
            <div class="arrow-wrap animate__animated animate__bounce animate__infinite animate__delay-3s">
                <button onClick$={() => scrollToSection("about")}>
                    <i class="fa-solid fa-angles-down"></i>
                </button>
            </div>
        </div> 
    );
});