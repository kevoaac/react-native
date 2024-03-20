import { useCallback, useState } from "react";
import { fetchPokemon } from "../services/fetchPokemon";
export function usePokemon(id) {
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPokemon = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      setError(null);
      const parsedId = id.toLowerCase();
      const myPokemon = await fetchPokemon(parsedId);
      setPokemon(myPokemon);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  return { pokemon, setPokemon, getPokemon, loading, error };
}
