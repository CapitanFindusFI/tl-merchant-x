import axios from "axios";
import PokemonNotFound from "../exceptions/pokemon-not-found";
import HttpClient from "../lib/http-client"
import Logger from "../lib/logger";
import { PokemonResponse, PokemonSpeciesResponse } from "../types/pokeapi";

export default () => {
    const logger = Logger.getLogger().child({
        repository: "pokeapi"
    });

    const httpClient = HttpClient.getClient();
    const baseAPIUrl = "https://pokeapi.co/api/v2/";

    const getPokemon = async (name: string) => {
        try {
            logger.debug(`Retrieving pokemon data for ${name}`);
            const { data } = await httpClient.get<PokemonResponse>(`${baseAPIUrl}/pokemon/${name}`);
            return data;
        } catch (e) {
            logger.error(e);
            if (axios.isAxiosError(e)) {
                const status = e.response?.status;
                if (status) {
                    switch (status) {
                        case 404:
                            throw new PokemonNotFound(`Pokemon ${name} not found`);
                    }
                }
            }
            throw e;
        }
    }

    const getPokemonSpecies = async (name: string): Promise<PokemonSpeciesResponse> => {
        try {
            logger.debug(`Retrieving pokemon species data for ${name}`);
            const { data } = await httpClient.get<PokemonSpeciesResponse>(`${baseAPIUrl}/pokemon-species/${name}`)
            return data;
        } catch (e) {
            logger.error(e);
            if (axios.isAxiosError(e)) {
                const status = e.response?.status;
                if (status) {
                    switch (status) {
                        case 404:
                            throw new PokemonNotFound(`Pokemon ${name} not found`);
                    }
                }
            }
            throw e;
        }
    }

    return {
        getPokemon,
        getPokemonSpecies,
    }
}