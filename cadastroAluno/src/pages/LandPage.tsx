import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { InitialMessage } from "../components/InitialMessage"
import { AllNotesButton } from "../components/Buttons/AllNotesButton";
import { RegisterButton } from "../components/Buttons/RegisterButton";

import { buscarAlunos } from "../services/studentSaveAndSearch";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const LandPage = () => {

  const [alunoQuantity, setAlunoQuantity] = useState(0);
  const [initialMessage, setInitialMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const alunos = await buscarAlunos(); // <- busca os alunos do Supabase
        setAlunoQuantity(alunos.length); // <- atualiza a quantidade
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      }
    };

    fetchAlunos(); // <- executa ao montar o componente
  }, []);

  useEffect(() => {
    setInitialMessage(
      alunoQuantity > 0
        ? `🎓 Há ${alunoQuantity} aluno(s) cadastrados.`
        : "📭 Nenhum aluno cadastrado ainda."
    );
  }, [alunoQuantity]);

  useEffect(() => {
  const fetchAlunos = async () => {
    try {
      const alunos = await buscarAlunos();
      setAlunoQuantity(alunos.length);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchAlunos();
}, []);

  if (loading) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LoadingSpinner message="Carregando alunos..." />
    </div>
  );
}

  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-yellow-100 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center border border-red-300">
        <h1 className="text-3xl font-extrabold text-red-600 mb-6">Sistema de Cadastro de Alunos</h1>

        <InitialMessage message={initialMessage} />

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <RegisterButton onClick={() => navigate("/register")}>
            📋 Registrar Aluno
          </RegisterButton>

          <AllNotesButton onClick={() => navigate("/performance")}>
            📊 Verificar Notas
          </AllNotesButton>
        </div>
      </div>
    </div>
  )
}