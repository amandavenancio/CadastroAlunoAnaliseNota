import { calcularMedia } from "../media";

describe("calcularMedia", () => {
  it("deve calcular a média correta", () => {
    expect(calcularMedia([7, 8, 9])).toBeCloseTo(8);
    expect(calcularMedia([0, 10])).toBeCloseTo(5);
    expect(calcularMedia([])).toBe(0);
  });
});