interface HttpException {
    httpStatus: number;
    errorCode: string;
    message?: string;
}

export default HttpException;