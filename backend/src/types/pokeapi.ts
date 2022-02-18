export type PokdexAPIEntryType = {
    name: string;
    url: string;
};

export type PokedexAPITextItemType = {
    flavor_text: string;
    language: PokdexAPIEntryType;
    version: PokdexAPIEntryType;
};

export type PokedexAPIResponse = {
    is_legendary: boolean;
    name: string;
    habitat: PokdexAPIEntryType;
    flavor_text_entries: PokedexAPITextItemType[];
};
