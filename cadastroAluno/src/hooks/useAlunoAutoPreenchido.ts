import { useEffect, useState } from "react";
import { buscarAlunoPorNome, buscarAlunoPorRegistro } from "../services/studentSaveAndSearch";

const DEBOUNCE_DELAY = 500;

export function useAlunoAutoPreenchido(nome: string, registro: string) {
  const [nomeValido, setNomeValido] = useState(true);
  const [registroValido, setRegistroValido] = useState(true);
  const [debouncedNome, setDebouncedNome] = useState(nome);
  const [debouncedRegistro, setDebouncedRegistro] = useState(registro);
  const [nomeAtualizado, setNomeAtualizado] = useState(nome);
  const [registroAtualizado, setRegistroAtualizado] = useState(registro);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedRegistro(registro), DEBOUNCE_DELAY);
    return () => clearTimeout(timer);
  }, [registro]);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedNome(nome), DEBOUNCE_DELAY);
    return () => clearTimeout(timer);
  }, [nome]);

  useEffect(() => {
    const fetch = async () => {
      if (!debouncedRegistro) return;
      const aluno = await buscarAlunoPorRegistro(debouncedRegistro);
      if (aluno) {
        setNomeAtualizado(aluno.nome);
        setNomeValido(true);
        setRegistroValido(true);
      } else {
        setNomeValido(false);
      }
    };
    fetch();
  }, [debouncedRegistro]);

  useEffect(() => {
    const fetch = async () => {
      if (!debouncedNome) return;
      const aluno = await buscarAlunoPorNome(debouncedNome);
      if (aluno) {
        setRegistroAtualizado(aluno.registro);
        setNomeValido(true);
        setRegistroValido(true);
      } else {
        setRegistroValido(false);
      }
    };
    fetch();
  }, [debouncedNome]);

  return {
    nomeAtualizado,
    registroAtualizado,
    nomeValido,
    registroValido,
    setNomeValido,
    setRegistroValido,
  };
}