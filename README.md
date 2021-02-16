# Welcome to encrypt-everything 👋

[![Version](https://img.shields.io/npm/v/encrypt-everything.svg)](https://www.npmjs.com/package/encrypt-everything)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)

> Encrypt everything like JSON, Strings, Numbers, Objects,...

## Install

```sh
npm install encrypt-everything
```

## Usage

#### Require

```javascript
const tsf = require("encrypt-everything");
```

#### Encrypt

```javascript
const number = 123;
const string = "encrypt";
const object = {
  name: "justholdmybeer",
  id: 123,
};
tsf.transform(object).then((res) => {
  console.log(res); // O!-+~3&*z*#$-+}{-+^+b*']i!=).....
});
```

#### Decrypt

```javascript
const encryptText = "^+b*']i!=),Fm0(-z*.'%<#$#$jj";

tsf.transformBack(encryptText).then((res) => {
  console.log(res); // justholdmybeer
});
```

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
