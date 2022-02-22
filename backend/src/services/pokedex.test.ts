import PokemonNotFound from "../exceptions/pokemon-not-found";
import TranslationError from "../exceptions/translation-error";
import pokedex from "./pokedex"

const defaultPokemonResponse = {
    name: "celebi",
    sprites: {
        front_default: "https://www.placecage.com/200/200"
    }
}

const defaultSpeciesResponse = {
    name: "celebi",
    is_legendary: true,
    flavor_text_entries: [{
        flavor_text: "Never gonna give you up",
        language: {
            name: "en",
            url: "https://www.example.com",
        },
        version: {
            name: "foo",
            url: "https://www.example.com",
        }
    }, {
        flavor_text: "Details are not the details",
        language: {
            name: "en",
            url: "https://www.example.com",
        },
        version: {
            name: "foo",
            url: "https://www.example.com",
        }
    }]
}

jest.mock('../repositories/fun-translations', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getTranslation: () => Promise.resolve("never gonna let you down")
        }
    })
});

jest.mock('../repositories/pokeapi', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getPokemon: () => defaultPokemonResponse,
            getPokemonSpecies: () => defaultSpeciesResponse
        }
    })
});

describe('pokedex service test suite', () => {
    const service = pokedex();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return a translated pokemon response', async () => {
        const response = await service.getPokemon("celebi");
        expect(response).toHaveProperty("description");
        expect(response).toHaveProperty("sprite");
        expect(response).toHaveProperty("name");

        const { description, sprite, name } = response;

        expect(description).toBe("never gonna let you down");
        expect(sprite).toBe("https://www.placecage.com/200/200");
        expect(name).toBe("celebi");
    })

    it('should check for a cleared string', async () => {
        jest.mock('../repositories/fun-translations', () => {
            return jest.fn().mockImplementation(() => {
                return {
                    getTranslation: () => Promise.resolve("never\n gonna  let\f you down")
                }
            })
        });

        const response = await service.getPokemon("celebi");
        expect(response.description).toBe("never gonna let you down")
    })

    it('should return a cleared string', async () => {
        jest.mock('../repositories/pokeapi', () => {
            return jest.fn().mockImplementation(() => {
                return {
                    getPokemon: () => Promise.reject(new PokemonNotFound()),
                    getPokemonSpecies: () => Promise.reject(new PokemonNotFound())
                }
            })
        });
    })

    it('should throw a pokemon not found error coming from repository', async () => {
        jest.mock('../repositories/pokeapi', () => {
            return jest.fn().mockImplementation(() => {
                return {
                    getPokemon: () => Promise.reject(new PokemonNotFound()),
                    getPokemonSpecies: () => Promise.reject(new PokemonNotFound())
                }
            })
        });

        try {
            await service.getPokemon("celebi");
        } catch (e) {
            expect(e).toBeInstanceOf(PokemonNotFound);
        }
    })

    it('should throw a missing translation error coming from repository', async () => {
        jest.mock('../repositories/fun-translations', () => {
            return jest.fn().mockImplementation(() => {
                return {
                    getTranslation: () => Promise.reject(new TranslationError())
                }
            })
        });

        try {
            await service.getPokemon("celebi");
        } catch (e) {
            expect(e).toBeInstanceOf(TranslationError);
        }
    })
})