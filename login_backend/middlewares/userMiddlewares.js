export const checkAuthentication = (req, res, next) => {
    if (req.session.user) {
        next();
    }
}