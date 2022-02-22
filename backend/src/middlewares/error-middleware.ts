
import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/http-exception";
import handleError from "../lib/error-handler";

export default (
    error: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) => {
    const errorObject: HttpException = handleError(error);
    return res.status(errorObject.httpStatus).send({
        code: errorObject.errorCode,
        error: errorObject.message,
    });
};
