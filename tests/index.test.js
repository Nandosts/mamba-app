import Router from 'svelte-page';

const { newApp } = global;

newApp();

it('should be at home', () => {
  expect(document.title).toBe('Home');
});

it('should go to PersonDetails page', () => {
  Router.go('/PersonDetails');
  expect(document.title).toBe('PersonDetails');
});

});
