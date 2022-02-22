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

    it('should throw a translation error', async () => {
        const mockedResponse = { data: {}, response: { status: 500 } }
        mockedAxios.post.mockImplementationOnce(() => Promise.reject(mockedResponse))

        try {
            await repository.getTranslation("foo");
        } catch (e) {
            expect(e).toBeInstanceOf(TranslationError);
            expect(e).toHaveProperty("httpStatus");
            expect((e as TranslationError).httpStatus).toBe(500);
            expect(e).toHaveProperty("errorCode");
            expect((e as TranslationError).errorCode).toBe("translation_error");
        }
    })

    it('should throw another translation error due to missing translation', async () => {
        const mockedResponse = {
            data: {
                success: { total: 0 },
                contents: {}
            }, status: 200
        }
        mockedAxios.post.mockImplementationOnce(() => Promise.resolve(mockedResponse))

        try {
            await repository.getTranslation("foo");
        } catch (e) {
            expect(e).toBeInstanceOf(TranslationError);
        }
    })

    it('should return a translation', async () => {
        const mockedResponse = {
            data: {
                success: { total: 1 },
                contents: {
                    translated: 'bar',
                    text: 'foo',
                    translation: 'shakespeare',
                }
            }, status: 200
        }

        mockedAxios.post.mockImplementationOnce(() => Promise.resolve(mockedResponse))

        const response = await repository.getTranslation("foo");
        expect(response).toBe("bar")
    })
})