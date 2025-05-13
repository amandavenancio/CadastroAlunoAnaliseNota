import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { InputStudentId } from "../components/InputStudentId";
import { InputStudentName } from "../components/InputStudentName";
import { SelectDisciplina } from "../components/SelectMatters";
import InputNota from "../components/InputNotaAluno";
import { salvarAluno } from '../services/alunoService'


export const RegisterPage = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [registro, setRegistro] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");

  const disciplinas = ["Matemática", "Português", "História", "Física", "Química", "Artes", "Educação Física", "Filosofia", "Sociologia"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await salvarAluno({ nome, idade: Number(idade), disciplina, notas })
      alert('Aluno cadastrado com sucesso!')
    } catch (err) {
      console.error(err)
      alert('Erro ao salvar aluno')
    }
  }

  return (
    <div>
      <h2>Cadastrar novo aluno</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};