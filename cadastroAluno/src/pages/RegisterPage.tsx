import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { InputStudentId } from "../components/Inputs/InputStudentId.tsx";
import { InputStudentName } from "../components/Inputs/InputStudentName.tsx";
import { SelectDisciplina } from "../components/Selects/SelectMatters.tsx";
import InputNota from "../components/Inputs/InputNotaAluno.tsx";
import { salvarAluno } from '../services/studentSaveAndSearch.ts'
import { HomePageButton } from "../components/Buttons/HomePageButton.tsx";
import { SaveRegisterPageButton } from "../components/Buttons/SaveRegisterPageButton.tsx";


export const RegisterPage = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [registro, setRegistro] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");

  const disciplinas = [
    "Matemática", "Português", "História", "Física",
    "Química", "Artes", "Educação Física", "Filosofia", "Sociologia"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await salvarAluno({
        registro,
        nome,
        disciplina,
        notas: [Number(nota1), Number(nota2), Number(nota3)]
      });
      alert('Aluno cadastrado com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao salvar aluno');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-yellow-100 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl border border-red-200">
        <h2 className="text-2xl font-extrabold text-red-600 text-center mb-6">
          📚 Cadastrar novo aluno
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputStudentId
            value={registro}
            onChange={(e) => setRegistro(e.target.value)}
          />
          <InputStudentName
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do aluno"
          />
          <SelectDisciplina
            value={disciplina}
            onChange={(e) => setDisciplina(e.target.value)}
            options={disciplinas}
          />
          <InputNota
            nota1={nota1}
            nota2={nota2}
            nota3={nota3}
            onChangeNota1={(e) => setNota1(e.target.value)}
            onChangeNota2={(e) => setNota2(e.target.value)}
            onChangeNota3={(e) => setNota3(e.target.value)}
          />

          <div className="flex justify-center gap-4 pt-4">
            <SaveRegisterPageButton type="submit">💾 Salvar</SaveRegisterPageButton>
            <HomePageButton 
            type='button'
            className=""
            onClick={() => navigate("/")}>
              🏠 Página Inicial
            </HomePageButton>
          </div>
        </form>
      </div>
    </div>
  );
};
