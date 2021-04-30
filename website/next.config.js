const withTM = require('next-transpile-modules')(['@wh/shared'], {
    debug: true,
})

module.exports = withTM({
    future: {
        webpack5: true,
    },
})
