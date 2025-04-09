const ENVIRONMENT = {
    env: import.meta.env.VITE_ENV,
    backend_url: import.meta.env.VITE_BACKEND_URL,
}

Object.freeze(ENVIRONMENT)

export {ENVIRONMENT}