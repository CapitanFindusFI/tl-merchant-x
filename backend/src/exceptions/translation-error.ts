import HttpException from "./http-exception";

class PokemonNotFound extends Error implements HttpException {
    private _httpStatus!: number;
    private _errorCode!: string;

    public get httpStatus(): number {
        return this._httpStatus;
    }
    public set httpStatus(value: number) {
        this._httpStatus = value;
    }
    public get errorCode(): string {
        return this._errorCode;
    }
    public set errorCode(value: string) {
        this._errorCode = value;
    }

    constructor(msg?: string) {
        super(msg);

        this.httpStatus = 500;
        this.errorCode = "translation_error";
    }
}

export default PokemonNotFound;