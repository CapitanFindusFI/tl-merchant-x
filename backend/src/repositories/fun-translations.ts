import HttpClient from '../lib/http-client';
import Logger from '../lib/logger';
import { TranslationResponse } from '../types/translations';

export default () => {
    const logger = Logger.getLogger().child({
        repository: "translation"
    });

    const httpClient = HttpClient.getClient();

    const getTranslation = async (text: string): Promise<string> => {
        try {
            const { data } = await httpClient.post<TranslationResponse>("https://api.funtranslations.com/translate", { text });
            const { success, contents } = data;
            if (success.total !== 1) {
                throw new Error("Unable to retrieve translation");
            }

            return contents.translated;
        } catch (e) {
            logger.error(e);
            throw e;
        }
    }

    return {
        getTranslation
    }
};
