import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { InitialMessage } from "../components/InitialMessage"
import { AllNotesButton } from "../components/AllNotesButton";
import { RegisterButton } from "../components/RegisterButton";

import { buscarAlunos } from "../services/studentSaveAndSearch";

export const LandPage = () => {

  const [alunoQuantity, setAlunoQuantity] = useState(0);
  const [initialMessage, setInitialMessage] = useState('');
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
    if (alunoQuantity > 0) {
      setInitialMessage(`Há ${alunoQuantity} alunos cadastrados.`);
    } else {
      setInitialMessage("Não há alunos cadastrados.");
    }
  }, [alunoQuantity]);


  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col max-w-md rounded-xl p-8 shadow-md items-center content-center place-content-center bg-red-100 gap-4 border-2 border-red-500">

        <InitialMessage message={initialMessage} />

        <div className="flex justify-between gap-2 mt-4">
          <RegisterButton
            onClick={() => navigate("/register")}
          >Registrar aluno
          </RegisterButton>

          <AllNotesButton
            onClick={() => navigate("/performance")}
          >Verificar notas
          </AllNotesButton>

        </div>
      </div>
    </div>
  )
}