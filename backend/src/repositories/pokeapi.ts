import HttpClient from "../lib/http-client"
import Logger from "../lib/logger";
import { PokedexAPIResponse } from "../types/pokeapi";

export default () => {
    const logger = Logger.getLogger().child({
        repository: "pokeapi"
    });

    const httpClient = HttpClient.getClient();

    const getSpecies = async (name: string): Promise<PokedexAPIResponse> => {
        try {
            const { data } = await httpClient.get<PokedexAPIResponse>(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            return data;
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    return {
        getSpecies,
    }
}