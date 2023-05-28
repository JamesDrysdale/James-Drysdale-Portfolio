import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import About from '~/components/about/about';
import Jumbotron from '~/components/jumbotron/jumbotron';

export default component$(() => {
  return (
    <>
      <Jumbotron />
      <About />
    </>
  );
});

export const head: DocumentHead = {
  title: 'James Drysdale',
  meta: [
    {
      name: 'description',
      content: 'Portfolio for Software developer, UX enthusiast, mentor and artist, James Drysdale',
    },
  ],
};
