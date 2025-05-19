import { render, screen } from "@testing-library/react";
import { AlunoMediaCard } from "../AlunoMediaCard";

describe("AlunoMediaCard", () => {
  it("renderiza o nome, disciplina, média e status correto", () => {
    const { rerender } = render(
      <AlunoMediaCard nome="Amanda" disciplina="Matemática" media={8} />
    );

    expect(screen.getByText("Amanda")).toBeInTheDocument();
    expect(screen.getByText(/Matemática/i)).toBeInTheDocument();
    expect(screen.getByText(/Média: 8.00/)).toBeInTheDocument();
    expect(screen.getByText(/Aprovado/i)).toBeInTheDocument();

    rerender(
      <AlunoMediaCard nome="Carlos" disciplina="História" media={5} />
    );

    expect(screen.getByText("Carlos")).toBeInTheDocument();
    expect(screen.getByText(/Reprovado/i)).toBeInTheDocument();
  });

    it("exibe nome, disciplina e média", () => {
    render(<AlunoMediaCard nome="Carla" disciplina="Física" media={7.5} />);

    expect(screen.getByText("Carla")).toBeInTheDocument();
    expect(screen.getByText(/Física - Média: 7.50/)).toBeInTheDocument();
  });

  it("exibe status Aprovado", () => {
    render(<AlunoMediaCard nome="Lucas" disciplina="História" media={6.1} />);
    expect(screen.getByText(/Aprovado/i)).toBeInTheDocument();
  });

  it("exibe status Reprovado", () => {
    render(<AlunoMediaCard nome="Joana" disciplina="Química" media={4.9} />);
    expect(screen.getByText(/Reprovado/i)).toBeInTheDocument();
  });

});