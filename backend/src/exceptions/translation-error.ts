import HttpException from "./http-exception";

class TranslationError extends HttpException {
    constructor(msg?: string) {
        super(msg);

        this.errorCode = "translation_error";
        this.httpStatus = 500;
    }
}

export default TranslationError;