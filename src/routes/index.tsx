import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Jumbotron from '~/components/jumbotron/jumbotron';

export default component$(() => {
  return (
    <>
      <Jumbotron />
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
