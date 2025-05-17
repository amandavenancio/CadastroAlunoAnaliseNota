import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DisciplinaMediaCard } from "../components/DisciplinaMediaCard";
import { calcularMedia } from "../utils/media";
import { AlunoMediaCard } from "../components/AlunoMediaCard";
import { buscarAlunos } from '../services/studentSaveAndSearch'
import { HomePageButton } from "../components/Buttons/HomePageButton";
import { DisciplinaMediaChart } from "../components/Charts/DisciplinaMediaChart";
import { LoadingSpinner } from "../components/LoadingSpinner";


type Aluno = {
  registro: string;
  nome: string;
  disciplina: string;
  notas: number[];
};

type AlunoAgrupado = {
  registro: string;
  nome: string;
  disciplinas: {
    nome: string;
    media: number;
  }[];
};

export const StudentsPerformancePage = () => {
  const navigate = useNavigate();
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [filtroDisciplina, setFiltroDisciplina] = useState<string>("");
  const [loading, setLoading] = useState(true);

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

  const alunosAgrupados: AlunoAgrupado[] = [];

  alunosFiltrados.forEach((aluno) => {
    const media = calcularMedia(aluno.notas);
    const existente = alunosAgrupados.find(a => a.registro === aluno.registro);

    if (existente) {
      existente.disciplinas.push({ nome: aluno.disciplina, media });
    } else {
      alunosAgrupados.push({
        registro: aluno.registro,
        nome: aluno.nome,
        disciplinas: [{ nome: aluno.disciplina, media }],
      });
    }
  });

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const alunosSupabase = await buscarAlunos();
        setAlunos(alunosSupabase);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // ← aqui desativa o loading
      }
    };

    fetchAlunos();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center p-6">
        <LoadingSpinner />
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center p-6 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-red-200 max-w-5xl w-full p-8 animate-scale-up">

        <h2 className="text-3xl font-extrabold text-red-600 text-center mb-10 animate-fade-in">
          📊 Desempenho dos Alunos
        </h2>

        <div className="mb-6 flex justify-center animate-scale-up delay-[100ms]">
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
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center animate-fade-in">
            🎓 Desempenho por aluno
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {alunosAgrupados.map((aluno) => (
              <AlunoMediaCard
                key={aluno.registro}
                nome={aluno.nome}
                registro={aluno.registro}
                disciplinas={aluno.disciplinas}
              />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center animate-fade-in">
            📚 Média geral por matéria
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(mediasPorDisciplina).map(([disciplina, medias], index) => {
              const mediaGeral = calcularMedia(medias);
              return (
                <div
                  key={disciplina}
                  className="animate-scale-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards"
                  }}
                >
                  <DisciplinaMediaCard
                    disciplina={disciplina}
                    mediaGeral={mediaGeral}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <div className="animate-fade-in delay-[300ms]">
          <DisciplinaMediaChart data={chartData} />
        </div>

        <div className="flex justify-center animate-scale-up delay-[400ms]">
          <HomePageButton
            className="mt-8"
            onClick={() => navigate("/")}
            type="button"
          >
            🏠 Página Inicial
          </HomePageButton>
        </div>
      </div>
    </div>
  );
};