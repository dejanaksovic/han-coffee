export const getGoogleURL = () => {
    const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth'

    const options = {
        redirect_uri: import.meta.env.VITE_GOOGLE_AUTH_URL,
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        acess_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ].join(' ')
    }

    const qs = new URLSearchParams(options)

    return `${rootURL}?${qs.toString()}`
}