module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "globals": {
      "it": true,
      "expect": true,
      "describe": true,
      "spyOn": true,
      "jasmine": true,
      "afterEach": true,
      "beforeEach": true,
      "Printer": true,
      "Bank": true,
      "Transaction": true,
      "TransactionHistory": true
    }
};
