import axios from "axios";
import PokemonNotFound from "../exceptions/pokemon-not-found";
import HttpClient from "../lib/http-client";
import pokeapi from "./pokeapi";

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("../lib/http-client", () => jest.fn());
HttpClient.getClient = jest.fn(() => mockedAxios);

describe('pokeapi repository test', () => {
    const repository = pokeapi();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should throw a generic error while retrieving pokemon', async () => {
        const mockedResponse = { data: {}, response: { status: 500 } }
        mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedResponse))

        try {
            await repository.getPokemon("foo");
        } catch (e) {
            expect(e).toBeDefined();
        }
    })

    it('should throw a pokemon not found error while retrieving pokemon', async () => {
        const mockedResponse = { data: {}, response: { status: 404 } }
        mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedResponse))
        mockedAxios.isAxiosError.mockImplementationOnce(() => true)

        try {
            await repository.getPokemon("foo");
        } catch (e) {
            expect(e).toBeInstanceOf(PokemonNotFound);

            expect(e).toHaveProperty('httpStatus');
            expect((e as PokemonNotFound).httpStatus).toBe(404);
            expect(e).toHaveProperty('errorCode');
            expect((e as PokemonNotFound).errorCode).toBe("pokemon_not_found");
        }
    })

    it('should throw a generic error while retrieving pokemon species', async () => {
        const mockedResponse = { data: {}, response: { status: 500 } }
        mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedResponse))

        try {
            await repository.getPokemonSpecies("foo");
        } catch (e) {
            expect(e).toBeDefined();
        }
    })

    it('should throw a pokemon not found error while retrieving pokemon species', async () => {
        const mockedResponse = { data: {}, response: { status: 404 } }
        mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedResponse))
        mockedAxios.isAxiosError.mockImplementationOnce(() => true)

        try {
            await repository.getPokemonSpecies("foo");
        } catch (e) {
            expect(e).toBeInstanceOf(PokemonNotFound);

            expect(e).toHaveProperty('httpStatus');
            expect((e as PokemonNotFound).httpStatus).toBe(404);
            expect(e).toHaveProperty('errorCode');
            expect((e as PokemonNotFound).errorCode).toBe("pokemon_not_found");
        }
    })

    it('should return a pokemon sprite with "getPokemonSpecies"', async () => {
        const mockedResponse = {
            data: {
                name: "nicholas",
                is_legendary: true,
                flavor_text_entries: [{
                    language: "en",
                    flavor_text: "omg"
                }]
            }, status: 200
        }

        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(mockedResponse));
        const response = await repository.getPokemonSpecies("nicholas");

        expect(response).toHaveProperty("name");
        expect(response).toHaveProperty("is_legendary");
        expect(response).toHaveProperty("flavor_text_entries");

        const { name, is_legendary, flavor_text_entries } = response;
        expect(name).toBe("nicholas")
        expect(is_legendary).toBeTruthy();
        expect(flavor_text_entries).toHaveLength(1);

        const flavor_target = flavor_text_entries[0];
        expect(flavor_target.flavor_text).toBe("omg");
    })

    it('should return a pokemon sprite with "getPokemon"', async () => {
        const mockedResponse = {
            data: {
                name: "nicholas",
                sprites: {
                    back_default: "https://www.placecage.com/300/300"
                }
            }, status: 200
        }

        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(mockedResponse));
        const response = await repository.getPokemon("nicholas");

        expect(response).toHaveProperty("sprites");
        expect(response).toHaveProperty("name");

        const { sprites, name } = response;
        expect(sprites).toHaveProperty("back_default")
        expect(name).toBe("nicholas")

        const { back_default } = sprites;
        expect(back_default).toBe("https://www.placecage.com/300/300")
    })
})