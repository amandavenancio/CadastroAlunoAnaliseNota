import { supabase } from '../supabaseClient'

export const salvarAluno = async (aluno: {
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