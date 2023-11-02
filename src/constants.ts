export const ALL_GENRES = [
    "science fiction",
    "fantasy",
    "supernatural",
    "superhero",
    "horror",
    "romance",
    "dystopian",
    "mystery",
    "adventure"
];

export const SIGNUP_OPTIONS = {
    authorizationParams: { redirect_uri: import.meta.env.VITE.SIGNUP_REDIRECT }
}

export const LOGIN_OPTIONS = {
    authorizationParams: { redirect_uri: import.meta.env.VITE.SIGNUP_REDIRECT }
}