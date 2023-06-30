export const getVerificationString = (user) => {
    return `Bearer ${user.token} ${user.refreshToken}`
}