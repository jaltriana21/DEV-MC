import { sum } from "../core/sum";

test('sum two numbers',()=>{
    const a = 1;
    const b = 2;
    const expected = 3;
    const result = sum(a,b)
    expect(result).toBe(expected);
})