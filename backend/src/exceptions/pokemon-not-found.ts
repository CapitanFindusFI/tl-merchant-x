import HttpException from "./http-exception";

class PokemonNotFound extends HttpException {
    constructor(msg?: string) {
        super(msg);

        this.httpStatus = 404;
        this.errorCode = "pokemon_not_found"
    }
}

export default PokemonNotFound;