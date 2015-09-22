var tape = require("tape"),
    clamp = require("..");


tape("clamp(x: Number, min: Number, max: Number) should clamp number between min and max", function(assert) {

    assert.equal(clamp(0, -1, 1), 0);
    assert.equal(clamp(2, -1, 1), 1);
    assert.equal(clamp(-2, -1, 1), -1);
    assert.equal(clamp(1, -1, 1), 1);
    assert.equal(clamp(-1, -1, 1), -1);

    assert.end();
});
