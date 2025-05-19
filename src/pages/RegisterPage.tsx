import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlunoAutoPreenchido } from "../hooks/useAlunoAutoPreenchido";
import { InputStudentId } from "../components/Inputs/InputStudentId";
import { InputStudentName } from "../components/Inputs/InputStudentName";
import { SelectDisciplina } from "../components/Selects/SelectMatters";
import { NotasFields } from "../Forms/NotasFields";
import { salvarAluno } from '../services/studentSaveAndSearch';
import { HomePageButton } from "../components/Buttons/HomePageButton";
import { SaveRegisterPageButton } from "../components/Buttons/SaveRegisterPageButton";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [registro, setRegistro] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [erroNotas, setErroNotas] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const {
    nomeAtualizado,
    registroAtualizado,
    nomeValido,
    registroValido
  } = useAlunoAutoPreenchido(nome, registro);

  const disciplinas = ["Matemática", "Português", "História", "Física", "Química", "Artes", "Educação Física", "Filosofia", "Sociologia"];

  const resetarCampos = () => {
    setNome("");
    setRegistro("");
    setDisciplina("");
    setNota1("");
    setNota2("");
    setNota3("");
    setErroNotas("");
  };

  const validarNotas = () => {
    const notas = [nota1, nota2, nota3].map(Number);
    return notas.every(nota =>
      !isNaN(nota) && nota >= 0 && nota <= 10 && /^\d{1,2}(\.\d{1,2})?$/.test(nota.toString())
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!nomeValido || !registroValido) {
      alert("O nome e o registro não correspondem.");
      setLoading(false);
      return;
    }

    if (!validarNotas()) {
      setErroNotas("As notas devem estar entre 0 e 10 com até 2 casas decimais.");
      setLoading(false);
      return;
    }

    try {
      await salvarAluno({
        nome: nomeAtualizado,
        registro: registroAtualizado,
        disciplina,
        notas: [Number(nota1), Number(nota2), Number(nota3)]
      });

      setMensagemSucesso("✅ Aluno cadastrado com sucesso!");
      resetarCampos();
      setTimeout(() => setMensagemSucesso(""), 3000);
    } catch (err) {
      console.error(err);
      setMensagemSucesso("❌ Erro ao salvar aluno.");
      setTimeout(() => setMensagemSucesso(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner message="Salvando aluno..." />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-yellow-100 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl border border-red-200 animate-scale-up">
        <h2 className="text-2xl font-extrabold text-red-600 text-center mb-6">📚 Cadastrar novo aluno</h2>

        {mensagemSucesso && (
          <div className="mb-4 text-center text-green-700 font-semibold bg-green-100 border border-green-300 px-4 py-2 rounded-xl animate-fade-in">
            {mensagemSucesso}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputStudentId value={registro} onChange={(e) => setRegistro(e.target.value)} />
          {!registroValido && <p className="text-red-600 text-sm mt-1">Registro não encontrado.</p>}

          <InputStudentName value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome" />
          {!nomeValido && <p className="text-red-600 text-sm mt-1">Nome não encontrado.</p>}

          <SelectDisciplina value={disciplina} onChange={(e) => setDisciplina(e.target.value)} options={disciplinas} />

          <NotasFields
            nota1={nota1} nota2={nota2} nota3={nota3}
            onChangeNota1={(e) => setNota1(e.target.value)}
            onChangeNota2={(e) => setNota2(e.target.value)}
            onChangeNota3={(e) => setNota3(e.target.value)}
            erro={erroNotas}
          />

          <div className="flex justify-center gap-4 pt-4">
            <SaveRegisterPageButton type="submit">💾 Salvar</SaveRegisterPageButton>
            <HomePageButton type="button" onClick={() => navigate("/")} className={""}>🏠 Página Inicial</HomePageButton>
          </div>
        </form>
      </div>
    </div>
  );
};
