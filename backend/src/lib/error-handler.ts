import GenericHttpError from "../exceptions/generic-error";
import HttpException from "../exceptions/http-exception";

export default (error: Error) => {
    const isHttpException = (object: object): object is HttpException => {
        return "errorCode" in object;
    }

    if (error && isHttpException(error)) {
        return error;
    }

    return new GenericHttpError("There was an error while executing your request. Try again later.");
}