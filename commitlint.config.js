export default Configuration;
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        "header-pattern": [
          2,
          "always",
          "^([A-Za-z0-9]+)-([0-9]+)\\s",
        ],
        "type-enum": [2, "always", ["feat", "fix", "chore"]],
      },
  };