describe("saludar", function() {
  beforeEach(setUpFakeConsole)
  
  it("deberia imprimir los saludos de una persona", function() {
    saludar(["Jorge"])
    assert.equal(fakeConsole.toString(), "hola Jorge\n")
  });
  
  it("deberia imprimir los saludos de dos personas", function() {
    saludar(["Joana", "Gladys"])
    assert.equal(fakeConsole.toString(), "hola Joana\nhola Gladys\n")
  });
  
  it("deberia imprimir los saludos de tres personas", function() {
    saludar(["Graciela", "Ana", "Tito"])
    assert.equal(fakeConsole.toString(), "hola Graciela\nhola Ana\nhola Tito\n")
  });
  
  it("no deberia retornar nada", function() {
    assert(saludar(["Jorge"]) === undefined);
  });
})