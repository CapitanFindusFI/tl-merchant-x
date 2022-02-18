
import { NextFunction, Request, Response } from "express";
import GenericHttpError from "../exceptions/generic-error";
import HttpException from "../exceptions/http-exception";

export default (
    error: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) => {
    const isHttpException = (object: any): object is HttpException => {
        return "errorCode" in object;
    }

    if (error && isHttpException(error)) {
        return res.status(error.httpStatus).send({
            code: error.errorCode,
            error: error.message,
        });
    }

    const defaultError = new GenericHttpError("There was an error while executing your request. Try again later.")
    return res.status(defaultError.httpStatus).send({
        code: defaultError.errorCode,
        error: defaultError.message,
    });
};
