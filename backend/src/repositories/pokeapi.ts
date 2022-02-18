import HttpClient from "../lib/http-client"
import Logger from "../lib/logger";
import { PokemonResponse, PokemonSpeciesResponse } from "../types/pokeapi";

export default () => {
    const logger = Logger.getLogger().child({
        repository: "pokeapi"
    });

    const httpClient = HttpClient.getClient();
    const APIBaseUrl = "https://pokeapi.co/api/v2/";

    const getPokemon = async (name: string) => {
        try {
            const { data } = await httpClient.get<PokemonResponse>(`${APIBaseUrl}/pokemon/${name}`);
            return data;
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    const getPokemonSpecies = async (name: string): Promise<PokemonSpeciesResponse> => {
        try {
            const { data } = await httpClient.get<PokemonSpeciesResponse>(`${APIBaseUrl}/pokemon-species/${name}`)
            return data;
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    return {
        getPokemon,
        getPokemonSpecies,
    }
}