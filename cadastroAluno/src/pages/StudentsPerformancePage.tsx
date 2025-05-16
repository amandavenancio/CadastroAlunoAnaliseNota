import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DisciplinaMediaCard } from "../components/DisciplinaMediaCard";
import { calcularMedia } from "../utils/media";
import { AlunoMediaCard } from "../components/AlunoMediaCard";
import { buscarAlunos } from '../services/studentSaveAndSearch'
import { HomePageButton } from "../components/Buttons/HomePageButton";
import { DisciplinaMediaChart } from "../components/Charts/DisciplinaMediaChart";


type Aluno = {
  id: string;
  nome: string;
  disciplina: string;
  notas: number[];
};

export const StudentsPerformancePage = () => {
  const navigate = useNavigate();
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [filtroDisciplina, setFiltroDisciplina] = useState<string>("");

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const alunosSupabase = await buscarAlunos();
        setAlunos(alunosSupabase);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAlunos();
  }, []);

  const mediasPorDisciplina: { [disciplina: string]: number[] } = {};
  alunos.forEach((aluno) => {
    const media = calcularMedia(aluno.notas);
    if (!mediasPorDisciplina[aluno.disciplina]) {
      mediasPorDisciplina[aluno.disciplina] = [];
    }
    mediasPorDisciplina[aluno.disciplina].push(media);
  });

  const chartData = Object.entries(mediasPorDisciplina).map(([disciplina, medias]) => ({
    disciplina,
    media: calcularMedia(medias)
  }));

  const alunosFiltrados = filtroDisciplina
    ? alunos.filter((aluno) => aluno.disciplina === filtroDisciplina)
    : alunos;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl border border-red-200 max-w-5xl w-full p-8">

        <h2 className="text-3xl font-extrabold text-red-600 text-center mb-10">📊 Desempenho dos Alunos</h2>

        <div className="mb-6 flex justify-center">
          <select
            value={filtroDisciplina}
            onChange={(e) => setFiltroDisciplina(e.target.value)}
            className="px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            <option value="">Todas as disciplinas</option>
            {Object.keys(mediasPorDisciplina).map((disciplina) => (
              <option key={disciplina} value={disciplina}>
                {disciplina}
              </option>
            ))}
          </select>
        </div>

        <section className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">🎓 Média por aluno</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {alunosFiltrados.map((aluno) => (
              <AlunoMediaCard
                key={aluno.id}
                nome={aluno.nome}
                disciplina={aluno.disciplina}
                media={calcularMedia(aluno.notas)}
              />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">📚 Média geral por matéria</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(mediasPorDisciplina).map(([disciplina, medias]) => {
              const mediaGeral = calcularMedia(medias);
              return (
                <DisciplinaMediaCard
                  key={disciplina}
                  disciplina={disciplina}
                  mediaGeral={mediaGeral}
                />
              );
            })}
          </div>
        </section>

        <DisciplinaMediaChart data={chartData} />

        <div className="flex justify-center">
          <HomePageButton
            className="mt-8"
            onClick={() => navigate("/")} type="button">
            🏠 Voltar para a Página Inicial
          </HomePageButton>
        </div>

      </div>
    </div>
  );
};