export type TranslationContent = {
    translated: string;
    text: string;
    translation: string;
};

export type TranslationResponse = {
    success: { total: number };
    contents: TranslationContent;
};
