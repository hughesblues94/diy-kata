const { boolean } = require("yargs");
const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns 'yes' when passed true", () => {
    expect(booleanToWord(true)).toBe('Yes')
    expect(booleanToWord(false)).toBe('No')
    
  });
});
