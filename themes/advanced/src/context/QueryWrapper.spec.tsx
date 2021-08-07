import QueryWrapper from "./QueryWrapper";

describe("context QueryWrapper", () => {
  it("renders correctly", () => {
    expect.assertions(1);

    const ret = QueryWrapper({ element: "Test" });

    expect(ret).toMatchSnapshot();
  });
});
