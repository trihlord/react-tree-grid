/** @type {import('stylelint').Config} */
module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
    rules: {
        'selector-class-pattern': [
            '^[a-z][a-zA-Z0-9]+$',
            {
                message: (selector) =>
                    `Expected class selector "${selector}" to be lowerCamelCase`,
            },
        ],
    },
}
