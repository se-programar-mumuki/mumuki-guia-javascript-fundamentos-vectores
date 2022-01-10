describe("", function() {
  it("trasladar mueve el elemento especificado de una lista de tres elementos a una de dos elementos", function() {
    var unArray = [1, 2, 3];
    var otroArray = [4, 5];

    trasladar(unArray, otroArray, 2);

    assert.deepEqual(unArray, [1, 3]);
    assert.deepEqual(otroArray, [4, 5, 2]);
  })
  
  it("trasladar mueve el elemento especificado de una lista de cuatro elementos a otra de cuatro elementos", function() {
    var unArray = [10, 20, 30, 40];
    var otroArray = [4, 5, 6, 7];

    trasladar(unArray, otroArray, 10);

    assert.deepEqual(unArray, [20, 30, 40]);
    assert.deepEqual(otroArray, [4, 5, 6, 7, 10]);
  })
})