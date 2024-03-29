import jwt from 'jsonwebtoken'

const auth = (req, _res, next) => {
    try {
        let token = req.headers.authorization.split(" ")[1]
        let decodeData = jwt.verify(token, 'test')
        req.userId = decodeData?.id
        next()
    } catch (error) {
        console.log(error);
    }
}

export default auth