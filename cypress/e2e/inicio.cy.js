describe('Página inicial', () => {
  it('Deve renderizar o título principal com o texto correto', () => {
    cy.visit('http://localhost:3000');
    // Dessa forma utilizamos o comando personalizado
    cy.getByData('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
    // Podemos utilizar o h1 porem o data-test é mais recomendado.
    // cy.get('h1').contains(
    //   'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    // );
    // Podemos utilizar o get com o data-test
    // cy.get('[data-test="titulo-principal"]').contains(
    //   'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    // );
  });
});
