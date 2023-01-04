import rateLimit from 'express-rate-limit'

const applyMiddleware = (middleware: any) => (request: any, response: any) =>
    new Promise((resolve, reject) => {
        middleware(request, response, (result: any) =>
            result instanceof Error ? reject(result) : resolve(result)
        )
    })

export const getIP = (request: any) => {
    const ip = request.ip ||
    request.headers['x-forwarded-for'] ||
    request.headers['x-real-ip'] ||
    request.connection.remoteAddress

    return ip;
}

export const getIP1 = (request: any) => {
    return request.ip
}

export const getIP2 = (request: any) => {
    return request.headers['x-forwarded-for']
}

export const getIP3 = (request: any) => {
    return request.headers['x-real-ip']
}
export const getIP4 = (request: any) => {
    return request.connection.remoteAddress
}

export const getRateLimitMiddlewares = ({
    limit = 1,
    windowMs = 3600 * 1000 * 24,
} = {}) => [
        rateLimit({ keyGenerator: getIP, windowMs, max: limit }),
    ]

const middlewares = getRateLimitMiddlewares()

async function applyRateLimit(request: any, response: any) {
    await Promise.all(
        middlewares
            .map(applyMiddleware)
            .map(middleware => middleware(request, response))
    )
}

export default applyRateLimit