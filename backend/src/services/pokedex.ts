import { PokemonResponse, PokemonSpeciesResponse } from './../types/pokeapi';
import Logger from "../lib/logger";
import funTranslations from "../repositories/fun-translations";
import pokeapi from "../repositories/pokeapi"

export default () => {
    const logger = Logger.getLogger().child({
        service: 'pokedex'
    });

    const pokeapiRepository = pokeapi();
    const translationRepository = funTranslations();

    const extractDescription = (pokemon: PokemonSpeciesResponse): string => {
        const { flavor_text_entries } = pokemon;

        const fullENDescription = flavor_text_entries.filter(({ language }) => language.name === "en")
        const fullDescription = fullENDescription.map(item => item.flavor_text).join(" ");

        return fullDescription
    }

    const fetchTranslation = async (description: string): Promise<string> => {
        try {
            const response = await translationRepository.getTranslation(description);
            return response
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    const fetchPokemon = async (name: string): Promise<[PokemonResponse, PokemonSpeciesResponse]> => {
        try {
            const [pokemon, pokemonSpecies] = await Promise.all([
                pokeapiRepository.getPokemon(name),
                pokeapiRepository.getPokemonSpecies(name)
            ]);
            return [pokemon, pokemonSpecies];
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    const getPokemon = async (name: string) => {
        let pokemon, species, description;
        try {
            [pokemon, species] = await fetchPokemon(name);
            description = extractDescription(species);
        } catch (e) {
            logger.error(e);
            throw e;
        }

        let translated;
        try {
            translated = await fetchTranslation(description);
        } catch (e) {
            logger.error(e);
            throw e;
        }

        return {
            name: pokemon.name,
            sprite: pokemon.sprites.front_default,
            description: translated
        }
    }

    return {
        getPokemon
    }

}