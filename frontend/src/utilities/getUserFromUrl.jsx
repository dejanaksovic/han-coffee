export const getUserFromUrl = () => {
    const items = new URL(document.location).searchParams

    const token = items.get('accessToken') || undefined
    const refreshToken = items.get('refreshToken') || undefined
    const email = items.get('email') || undefined
    const role = items.get('role') || undefined
    const phoneNumberVerified = items.get('phoneNumberVerified') || undefined

    if(token && refreshToken && email && role)
        return {
            token,
            refreshToken,
            email,
            role,
            phoneNumberVerified
        }

    return null
}