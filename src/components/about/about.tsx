import { component$, useStylesScoped$ } from "@builder.io/qwik";
import STYLE from './about.scss?inline';

export default component$(() => {
    useStylesScoped$(STYLE);

    return (
        <div class="about" id="about">
            <div class="container">
                <div class="main-title">
                    <span>Biography</span>
                    <h3>About Me</h3> 
                </div>
                <div class="about-content">
                    <div class="left">
                        <div class="about-image-wrapper">
                            <img src="/images/jamesdrysdale.jpg" alt="Portrait of James Drysdale" width={250} height={250} />
                            <div class="portrait-frame"></div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="about-title">
                            <h3>I'm James Drysdale and I am a{" "} <span class="highlight">software developer</span></h3>
                            
                        </div>
                        <div class="about-details">
                            <p>
                                Hi! My name is <span>James Drysdale</span>. I am a software developer, UX/UI designer, and mentor. Having worked in various roles, from front-end developer, and UX/UI designer to technical support engineer. I now teach software development, and UX to career-changing adults. And I also provide mentorship to help students, career-changers and those stuck in a rut to help them grow and flourish.
                            </p>
                        </div>
                        <div class="about-details-list-wrapper">
                            <ul>
                                <li>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>
                                        <label>Location:</label> 
                                        <a class="animated-link" href="#">Edinburgh, UK</a>
                                    </span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-palette"></i>
                                    <span>
                                        <label>Interests:</label> Painting, Writing, Walking
                                    </span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-book"></i>
                                    <span>
                                        <label>Study:</label> 
                                        <a class="animated-link" href="https://www.codeclan.com/" target="_blank">
                                            CodeClan <i class="external-link-icon fa-solid fa-up-right-from-square"></i>
                                        </a> 
                                    </span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-graduation-cap"></i>
                                    <span>
                                        <label>Subject:</label> 
                                            Professional Software Development 
                                    </span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-envelope"></i>
                                    <span>
                                        <label>Email:</label> 
                                        <a class="animated-link" href="mailto:jamesdrysdale84@gmail.com" target="_blank">
                                            jamesdrysdale84@gmail.com 
                                        </a>
                                    </span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-phone"></i>
                                    <span>
                                        <label>Phone:</label>
                                            +44 7565 506 022
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="default-button">
                            <a href="#" download="#">
                                <span>Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
