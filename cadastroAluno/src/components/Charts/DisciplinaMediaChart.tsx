import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

type ChartData = {
  disciplina: string;
  media: number;
};

type Props = {
  data: ChartData[];
};

export const DisciplinaMediaChart = ({ data }: Props) => (
  <div className="w-full h-72 bg-white p-4 rounded-2xl shadow-md">
    <h4 className="text-center font-bold text-gray-800 mb-4">📈 Gráfico de Média por Matéria</h4>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="disciplina" />
        <YAxis domain={[0, 10]} />
        <Tooltip />
        <Bar dataKey="media" fill="#f87171" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
