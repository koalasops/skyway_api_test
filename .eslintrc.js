module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        // Customize rules here
        "no-unused-vars": "off",
        'vue/multi-word-component-names': 'off'
        /** eslint-disable */
    },
    env: {
        browser: true,
        node: true
    }
};