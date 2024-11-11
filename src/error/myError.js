export default class MyError extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}