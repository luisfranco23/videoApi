const responseAuto = ({
    res,
    code,
    message,
    body,
    token,
    length
}) => {
    res.status(code).json({
        message,
        body,
        token,
        length
    })
}

module.exports = {responseAuto}