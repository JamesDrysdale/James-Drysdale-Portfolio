import { component$, useStylesScoped$ } from "@builder.io/qwik";
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
            </div>
        </div> 
    );
});