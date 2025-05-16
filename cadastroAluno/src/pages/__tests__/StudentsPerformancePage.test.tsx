import { render, screen, fireEvent } from "@testing-library/react";
import { StudentsPerformancePage } from "../StudentsPerformancePage";
import { MemoryRouter } from "react-router-dom";

// Mock da busca de alunos
jest.mock("../../services/studentSaveAndSearch", () => ({
  buscarAlunos: jest.fn().mockResolvedValue([
    { id: "1", nome: "Ana", disciplina: "Matemática", notas: [7, 8, 9] },
    { id: "2", nome: "João", disciplina: "História", notas: [5, 6, 4] },
  ]),
}));

jest.mock("../../components/Charts/DisciplinaMediaChart", () => ({
  DisciplinaMediaChart: () => <div data-testid="mock-chart" />,
}));

describe("StudentsPerformancePage filtro", () => {
  it("filtra alunos pela disciplina selecionada", async () => {
    render(
      <MemoryRouter>
        <StudentsPerformancePage />
      </MemoryRouter>
    );

    const ana = await screen.findByText("Ana");
    expect(ana).toBeInTheDocument();

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Matemática" } });

    expect(screen.getByText("Ana")).toBeInTheDocument();
    expect(screen.queryByText("João")).not.toBeInTheDocument();
  });
});
