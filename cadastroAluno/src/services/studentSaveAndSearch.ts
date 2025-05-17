import { supabase } from '../supabaseClient'

export const salvarAluno = async (aluno: {
  registro: string
  nome: string
  disciplina: string
  notas: number[]
}) => {
  const { data, error } = await supabase
    .from('alunos')
    .insert([{ ...aluno }])

  if (error) throw error
  return data
}

export const buscarAlunos = async () => {
  const { data, error } = await supabase
    .from('alunos')
    .select('*')

  if (error) throw error
  return data
}

export const buscarAlunoPorRegistro = async (registro: string) => {
  const { data, error } = await supabase
    .from("alunos")
    .select("*")
    .eq("registro", registro)
    .limit(1)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // nenhum registro
    throw error;
  }

  return data;
};

export const buscarAlunoPorNome = async (nome: string) => {
  const { data, error } = await supabase
    .from("alunos")
    .select("*")
    .ilike("nome", nome)
    .limit(1)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    throw error;
  }

  return data;
};