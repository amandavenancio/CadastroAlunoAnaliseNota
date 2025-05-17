import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LandPage } from "../LandPage";

// Mock do Supabase
jest.mock("../../services/studentSaveAndSearch", () => ({
  buscarAlunos: jest.fn().mockResolvedValue([
    { id: "1", nome: "Ana", disciplina: "Matemática", notas: [7, 8, 9] },
    { id: "2", nome: "João", disciplina: "História", notas: [6, 5, 7] },
  ]),
}));

describe("LandPage", () => {
  it("exibe mensagem com quantidade de alunos", async () => {
    render(
      <MemoryRouter>
        <LandPage />
      </MemoryRouter>
    );

    const mensagem = await screen.findByText("Há 2 alunos cadastrados.");
    expect(mensagem).toBeInTheDocument();
  });

  it("exibe botões de navegação", async () => {
    render(
      <MemoryRouter>
        <LandPage />
      </MemoryRouter>
    );

    const botaoRegistrar = screen.getByRole("button", { name: /registrar aluno/i });
    const botaoVerNotas = screen.getByRole("button", { name: /verificar notas/i });

    expect(botaoRegistrar).toBeInTheDocument();
    expect(botaoVerNotas).toBeInTheDocument();
  });
});
