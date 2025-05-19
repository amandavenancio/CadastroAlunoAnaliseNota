import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { RegisterPage } from "../RegisterPage";

// Mock do Supabase
const mockSalvarAluno = jest.fn().mockResolvedValue(undefined);

jest.mock("../../services/studentSaveAndSearch", () => ({
  salvarAluno: (...args: unknown[]) => mockSalvarAluno(...args),
}));

describe("RegisterPage", () => {
  it("preenche e envia o formulário", async () => {
    render(
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/número de registro/i), {
      target: { value: "123" },
    });

    fireEvent.change(screen.getByPlaceholderText(/nome do aluno/i), {
      target: { value: "Amanda" },
    });

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Matemática" },
    });

    fireEvent.change(screen.getByPlaceholderText(/nota 1/i), {
      target: { value: "8" },
    });
    fireEvent.change(screen.getByPlaceholderText(/nota 2/i), {
      target: { value: "9" },
    });
    fireEvent.change(screen.getByPlaceholderText(/nota 3/i), {
      target: { value: "10" },
    });

    const botaoSalvar = screen.getByRole("button", { name: /salvar/i });
    fireEvent.click(botaoSalvar);

    expect(mockSalvarAluno).toHaveBeenCalledWith({
      registro: "123",
      nome: "Amanda",
      disciplina: "Matemática",
      notas: [8, 9, 10],
    });
  });
});
