import js from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import stylistic from "@stylistic/eslint-plugin";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import github from "eslint-plugin-github";
import html from "eslint-plugin-html";
import perfectionist from "eslint-plugin-perfectionist";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import prettier from "eslint-plugin-prettier";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import ts from "typescript-eslint";

const eslintConfig = [
    js.configs.recommended,
    ...ts.configs.recommended,
    prettierRecommended,
    perfectionist.configs["recommended-natural"],
    preferArrowFunctions.configs.all,
    {
        plugins: {
            "@next/next": pluginNext,
            "@stylistic": stylistic,
            "@typescript-eslint": typescriptEslint,
            github,
            html,
            prettier,
            react,
            "unused-imports": unusedImports,
        },
        rules: {
            "@stylistic/array-bracket-spacing": [ "error", "always" ],
            "@stylistic/arrow-spacing": [ "warn", { after: true, before: true } ],
            "@stylistic/comma-dangle": [ "error", "always-multiline" ],
            "@stylistic/comma-spacing": "error",
            "@stylistic/comma-style": "error",
            "@stylistic/dot-location": [ "error", "property" ],
            "@stylistic/indent": [ "error", 4, { SwitchCase: 1 } ],
            "@stylistic/jsx-quotes": [ "error", "prefer-double" ],
            "@stylistic/key-spacing": [ "error" ],
            "@stylistic/keyword-spacing": [ "error", { after: true, before: true } ],
            "@stylistic/max-statements-per-line": [ "error", { max: 2 } ],
            "@stylistic/no-floating-decimal": "error",
            "@stylistic/no-multi-spaces": [ "error" ],
            "@stylistic/no-trailing-spaces": [ "error" ],
            "@stylistic/object-curly-spacing": [ "error", "always", { arraysInObjects: true, objectsInObjects: false } ],
            "@stylistic/quotes": [
                "error",
                "double",
                {
                    allowTemplateLiterals: true,
                    avoidEscape: true,
                },
            ],
            "@stylistic/space-before-blocks": "error",
            "@stylistic/space-in-parens": "error",
            "@stylistic/space-infix-ops": "error",
            "@stylistic/space-unary-ops": "error",
            "@stylistic/spaced-comment": "error",
            "@stylistic/template-curly-spacing": [ "error", "always" ],
            "@stylistic/type-annotation-spacing": [ "error", { after: true, before: false, overrides: { arrow: { after: true, before: true }}} ],
            "@stylistic/wrap-regex": "error",
            "@typescript-eslint/consistent-type-definitions": "error",
            "@typescript-eslint/no-restricted-types": [
                "error",
                {
                    types: {
                        Boolean: {
                            message: "Use `boolean` instead.",
                        },
                        Function: {
                            message: "Avoid using Function; consider typing more explicitly.",
                        },
                        Number: {
                            message: "Use `number` instead.",
                        },
                        Object: {
                            message: "Use `object` instead.",
                        },
                        String: {
                            message: "Use `string` instead.",
                        },
                        Symbol: {
                            message: "Use `symbol` instead.",
                        },
                        "{}": {
                            message: "{} is ambiguous; consider using a more specific type.",
                        },
                    },
                },
            ],
            "@typescript-eslint/no-unused-vars": "off",
            curly: [ "error", "multi-line", "consistent" ],
            "github/array-foreach": 2,
            "github/no-implicit-buggy-globals": 2,
            "max-nested-callbacks": [ "error", { max: 4 } ],
            "no-console": 1,
            "no-empty-function": "error",
            "no-inline-comments": "error",
            "no-lonely-if": "error",
            "no-multiple-empty-lines": [ "error", { max: 2, maxBOF: 0, maxEOF: 1 } ],
            "no-shadow": [ "error", { allow: [ "err", "resolve", "reject" ] } ],
            "no-unused-vars": "off",
            "no-var": "error",
            "prefer-const": "error",
            "prettier/prettier": "off",
            "react/jsx-curly-spacing": [
                "error",
                {
                    "spacing": {
                        "objectLiterals": "never",
                    },
                    "when": "always",
                },
            ],
            "react/jsx-key": "off",
            "react/no-unknown-property": "off",
            "react/prop-types": [ "off" ],
            semi: [ "error", "always" ],
            "space-before-function-paren": [
                "error",
                {
                    anonymous: "never",
                    asyncArrow: "always",
                    named: "never",
                },
            ],
            "tailwindcss/no-custom-classname": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    args: "after-used",
                    argsIgnorePattern: "^_",
                    vars: "all",
                    varsIgnorePattern: "^_",
                },
            ],
            yoda: "error",
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs["core-web-vitals"].rules,
            "@typescript-eslint/no-require-imports": [
                "error",
                {
                    allow: [ "tailwindcss-animate" ],
                },
            ],
        },
    },
];

export default eslintConfig;
