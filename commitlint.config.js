const Configuration = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-atom",
  formatter: "@commitlint/format",
  rules: {
    "header-pattern": [
      2, // Error level (reject commits that don't match)
      "always",
      "^([A-Za-z0-9]+)-([0-9]+)\\s", // Regex for ProjectName-TaskNumber
    ],
    "type-enum": [2, "always", ["feat", "fix", "chore"]],
  },
};

export default Configuration;
