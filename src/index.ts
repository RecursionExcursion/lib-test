export type TestMe = {
  msg: string;
};

export type TestParam = { msg: string };

export function testFn(p: TestParam): TestMe {
  return {
    msg: p.msg,
  };
}

export const testPOJO = {
  a: "foo",
  b: 1,
  c: {} as TestMe,
};
