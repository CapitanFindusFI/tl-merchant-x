import axios from "axios";
import TranslationError from "../exceptions/translation-error";
import HttpClient from "../lib/http-client";
import funTranslations from "./fun-translations"

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("../lib/http-client", () => jest.fn());
HttpClient.getClient = jest.fn(() => mockedAxios);

describe('fun translation repository test', () => {
    const repository = funTranslations();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should throw a translation error', () => {
        const mockedResponse = { data: {}, status: 500 }
        mockedAxios.post.mockImplementationOnce(() => Promise.reject(mockedResponse))

        expect(async () => {
            await repository.getTranslation("foo");
        }).rejects.toBeInstanceOf(TranslationError)
    })

    it('should throw another translation error due to missing translation', () => {
        const mockedResponse = {
            data: {
                success: { total: 0 },
                contents: {}
            }, status: 200
        }
        mockedAxios.post.mockImplementationOnce(() => Promise.resolve(mockedResponse))

        expect(async () => {
            await repository.getTranslation("foo");
        }).rejects.toBeInstanceOf(TranslationError)
    })

    it('should return a translation', async () => {
        const mockedResponse = {
            data: {
                success: { total: 1 },
                contents: {
                    translated: 'bar',
                    text: '',
                    translation: '',
                }
            }, status: 200
        }

        mockedAxios.post.mockImplementationOnce(() => Promise.resolve(mockedResponse))

        const response = await repository.getTranslation("foo");
        expect(response).toBe("bar")
    })
})