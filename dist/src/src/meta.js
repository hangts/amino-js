"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Amino = require("../lib/Amino");
var Amino_1 = require("../lib/Amino");
exports.nameToDisfix = Amino_1.nameToDisfix;
exports.byteSliceSize = Amino_1.byteSliceSize;
exports.uvarintSize = Amino_1.uvarintSize;
exports.varintSize = Amino_1.varintSize;
/**
 * Decode disambiguation bytes, prefix bytes, and byte length from Amino
 *
 * @param   amino - Amino-encoded bytes
 *
 * @returns tuple of disambiguation bytes (or null if none), prefix bytes (or null if none), and byte length
 * @throws  will throw if decoding fails
 */
function decodeDisambPrefixBytes(amino) {
    const [disamb, hasDisamb, prefix, hasPrefix, length] = Amino.decodeDisambPrefixBytes(amino);
    return [
        hasDisamb ? disamb : null,
        hasPrefix ? prefix : null,
        length
    ];
}
exports.decodeDisambPrefixBytes = decodeDisambPrefixBytes;
