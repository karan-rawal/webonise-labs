module.exports = {
    "extends": "airbnb",
    "globals": {
        document: true,
        describe: true,
        it: true,
        fetch: true,
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-max-props-per-line": [2, { "maximum": 1, "when": "always" }],
        "react/jsx-first-prop-new-line": [2, "always" ]
    },
};