describe('Página inicial', () => {
  it('Deve renderizar o título principal com o texto correto', () => {
    cy.visit('http://localhost:3000');
    // Podemos utilizar o h1 porem o data-test é mais recomendado.
    // cy.get('h1').contains(
    //   'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    // );
    cy.get('[data-test="titulo-principal"]').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});
