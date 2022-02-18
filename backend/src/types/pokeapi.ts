export type BasePokemonResponse = {
    name: string;
}

export type PokemonResponse = BasePokemonResponse & {
    sprites: {
        back_default: string
        back_female: string
        back_shiny: string
        back_shiny_female: string
        front_default: string
        front_female: string
        front_shiny: string
        front_shiny_female: string
    }
}

export type PokdexAPIEntryType = {
    name: string;
    url: string;
};

export type PokedexAPITextItemType = {
    flavor_text: string;
    language: PokdexAPIEntryType;
    version: PokdexAPIEntryType;
};

export type PokemonSpeciesResponse = BasePokemonResponse & {
    is_legendary: boolean;
    habitat: PokdexAPIEntryType;
    flavor_text_entries: PokedexAPITextItemType[];
}