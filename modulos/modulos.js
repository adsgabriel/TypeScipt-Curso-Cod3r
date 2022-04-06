"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaRetangulo } from "./retangulo";
// import { areaCircunferencia } from "./circunferencia";
const circunferencia_1 = require("./circunferencia");
const retangulo_1 = __importDefault(require("./retangulo"));
console.log('modulo carregado ');
console.log((0, circunferencia_1.areaCircunferencia)(2));
console.log((0, retangulo_1.default)(7, 5));
const { digaOi } = require('./novo');
console.log(digaOi(' Ana'));
