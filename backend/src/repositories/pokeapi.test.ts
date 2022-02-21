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

    it('should throw a generic error while retrieving pokemon', () => {
        const mockedResponse = { data: {}, status: 500 }
        mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedResponse))

        expect(async () => {
            await repository.getPokemon("foo");
        }).rejects.toThrow();
    })

    it('should throw a pokemon not found error while retrieving pokemon', () => {
        const mockedResponse = { data: {}, status: 404, isAxiosError: true }
        mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedResponse))

        expect(async () => {
            await repository.getPokemon("foo");
        }).rejects.toBeInstanceOf(PokemonNotFound)
    })

    it('should throw a generic error while retrieving pokemon species', () => {
        const mockedResponse = { data: {}, status: 500 }
        mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedResponse))

        expect(async () => {
            await repository.getPokemonSpecies("foo");
        }).rejects.toThrow();
    })

    it('should throw a pokemon not found error while retrieving pokemon species', () => {
        const mockedResponse = { data: {}, status: 404, isAxiosError: true }
        mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedResponse))

        expect(async () => {
            await repository.getPokemonSpecies("foo");
        }).rejects.toBeInstanceOf(PokemonNotFound)
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