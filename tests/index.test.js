import Router from 'svelte-page';

const { newApp } = global;

newApp();

it('should be at home', () => {
  expect(document.title).toBe('Home');
});

it('should go to listCharacters page', () => {
  Router.go('/listCharacters');
  expect(document.title).toBe('ListCharacters');
});
