export const loginAction = (userId, token, login, logout, isAuth) => ({type: 'login', payload: {userId, token, login, logout, isAuth}})