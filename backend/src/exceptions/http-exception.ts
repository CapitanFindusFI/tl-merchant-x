class HttpException extends Error {
    private _httpStatus!: number;

    public get httpStatus(): number {
        return this._httpStatus;
    }
    public set httpStatus(value: number) {
        this._httpStatus = value;
    }

    private _errorCode!: string;

    public get errorCode(): string {
        return this._errorCode;
    }
    public set errorCode(value: string) {
        this._errorCode = value;
    }

    constructor(msg?: string) {
        super(msg);
    }
}

export default HttpException;