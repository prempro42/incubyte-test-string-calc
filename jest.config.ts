// export default {
//     preset: 'ts-jest',
//     testEnvironment: 'jest-environment-jsdom',
//     transform: {
//         "^.+\\.tsx?$": "ts-jest" 
//     // process `*.tsx` files with `ts-jest`
//     },
//     rootDir: "src",
//     moduleNameMapper: {
//         '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
//     },
// }

export default {
    testEnvironment: "jsdom",
    preset: 'ts-jest',
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  };