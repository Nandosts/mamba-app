import Router from 'svelte-page';

const { newApp } = global;

newApp();

it('should be at home', () => {
  expect(document.title).toBe('Home');
});

it('should go to Blank page', () => {
  Router.go('/Blank');
  expect(document.title).toBe('Blank');
});
