import { $ } from "@builder.io/qwik";

export const scrollToSection = $((elementId: string) => {
    const targetSection = document.getElementById(elementId);

    targetSection?.scrollIntoView({ behavior: 'smooth' });
})