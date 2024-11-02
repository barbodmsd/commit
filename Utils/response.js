class Response {
    constructor(res, status, data) {
        this.res = res;
        this.status = status;
        this.dataPayload = data; // Renamed to avoid conflict with method name
    }

    send() {
        return this.res.status(this.status).json({
            status: String(this.status).startsWith('2') ? 'success' : 'error',
            ...this.dataPayload,
        });
    }
}

export default Response;
