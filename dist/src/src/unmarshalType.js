"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const belt_1 = require("@tendermint/belt");
const decodeType = require("./decodeType");
/**
 * Unmarshal a `MultiStoreProofOp` object from Amino
 *
 * @param   amino          - Amino-encoded `MultiStoreProofOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MultiStoreProofOp` object
 * @throws  will throw if decoding fails
 */
function unmarshalMultiStoreProofOp(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMultiStoreProofOp(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMultiStoreProofOp = unmarshalMultiStoreProofOp;
/**
 * Unmarshal a `IAVLAbsenceOp` object from Amino
 *
 * @param   amino          - Amino-encoded `IAVLAbsenceOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `IAVLAbsenceOp` object
 * @throws  will throw if decoding fails
 */
function unmarshalIAVLAbsenceOp(amino, lengthPrefixed = true) {
    const json = decodeType.decodeIAVLAbsenceOp(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalIAVLAbsenceOp = unmarshalIAVLAbsenceOp;
/**
 * Unmarshal a `IAVLValueOp` object from Amino
 *
 * @param   amino          - Amino-encoded `IAVLValueOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `IAVLValueOp` object
 * @throws  will throw if decoding fails
 */
function unmarshalIAVLValueOp(amino, lengthPrefixed = true) {
    const json = decodeType.decodeIAVLValueOp(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalIAVLValueOp = unmarshalIAVLValueOp;
/**
 * Unmarshal a `PrivKeyLedgerSecp256k1` object from Amino
 *
 * @param   amino          - Amino-encoded `PrivKeyLedgerSecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PrivKeyLedgerSecp256k1` object
 * @throws  will throw if decoding fails
 */
function unmarshalPrivKeyLedgerSecp256k1(amino, lengthPrefixed = true) {
    const json = decodeType.decodePrivKeyLedgerSecp256k1(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPrivKeyLedgerSecp256k1 = unmarshalPrivKeyLedgerSecp256k1;
/**
 * Unmarshal a `Info` object from Amino
 *
 * @param   amino          - Amino-encoded `Info` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Info` object
 * @throws  will throw if decoding fails
 */
function unmarshalInfo(amino, lengthPrefixed = true) {
    const json = decodeType.decodeInfo(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalInfo = unmarshalInfo;
/**
 * Unmarshal a `BIP44Params` object from Amino
 *
 * @param   amino          - Amino-encoded `BIP44Params` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BIP44Params` object
 * @throws  will throw if decoding fails
 */
function unmarshalBIP44Params(amino, lengthPrefixed = true) {
    const json = decodeType.decodeBIP44Params(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalBIP44Params = unmarshalBIP44Params;
/**
 * Unmarshal a `LocalInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `LocalInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `LocalInfo` object
 * @throws  will throw if decoding fails
 */
function unmarshalLocalInfo(amino, lengthPrefixed = true) {
    const json = decodeType.decodeLocalInfo(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalLocalInfo = unmarshalLocalInfo;
/**
 * Unmarshal a `LedgerInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `LedgerInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `LedgerInfo` object
 * @throws  will throw if decoding fails
 */
function unmarshalLedgerInfo(amino, lengthPrefixed = true) {
    const json = decodeType.decodeLedgerInfo(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalLedgerInfo = unmarshalLedgerInfo;
/**
 * Unmarshal a `OfflineInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `OfflineInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `OfflineInfo` object
 * @throws  will throw if decoding fails
 */
function unmarshalOfflineInfo(amino, lengthPrefixed = true) {
    const json = decodeType.decodeOfflineInfo(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalOfflineInfo = unmarshalOfflineInfo;
/**
 * Unmarshal a `MultiInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `MultiInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MultiInfo` object
 * @throws  will throw if decoding fails
 */
function unmarshalMultiInfo(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMultiInfo(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMultiInfo = unmarshalMultiInfo;
/**
 * Unmarshal a `Msg` object from Amino
 *
 * @param   amino          - Amino-encoded `Msg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Msg` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsg(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsg(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsg = unmarshalMsg;
/**
 * Unmarshal a `Tx` object from Amino
 *
 * @param   amino          - Amino-encoded `Tx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Tx` object
 * @throws  will throw if decoding fails
 */
function unmarshalTx(amino, lengthPrefixed = true) {
    const json = decodeType.decodeTx(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalTx = unmarshalTx;
/**
 * Unmarshal a `Account` object from Amino
 *
 * @param   amino          - Amino-encoded `Account` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Account` object
 * @throws  will throw if decoding fails
 */
function unmarshalAccount(amino, lengthPrefixed = true) {
    const json = decodeType.decodeAccount(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalAccount = unmarshalAccount;
/**
 * Unmarshal a `VestingAccount` object from Amino
 *
 * @param   amino          - Amino-encoded `VestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `VestingAccount` object
 * @throws  will throw if decoding fails
 */
function unmarshalVestingAccount(amino, lengthPrefixed = true) {
    const json = decodeType.decodeVestingAccount(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalVestingAccount = unmarshalVestingAccount;
/**
 * Unmarshal a `BaseAccount` object from Amino
 *
 * @param   amino          - Amino-encoded `BaseAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BaseAccount` object
 * @throws  will throw if decoding fails
 */
function unmarshalBaseAccount(amino, lengthPrefixed = true) {
    const json = decodeType.decodeBaseAccount(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalBaseAccount = unmarshalBaseAccount;
/**
 * Unmarshal a `BaseVestingAccount` object from Amino
 *
 * @param   amino          - Amino-encoded `BaseVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BaseVestingAccount` object
 * @throws  will throw if decoding fails
 */
function unmarshalBaseVestingAccount(amino, lengthPrefixed = true) {
    const json = decodeType.decodeBaseVestingAccount(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalBaseVestingAccount = unmarshalBaseVestingAccount;
/**
 * Unmarshal a `ContinuousVestingAccount` object from Amino
 *
 * @param   amino          - Amino-encoded `ContinuousVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `ContinuousVestingAccount` object
 * @throws  will throw if decoding fails
 */
function unmarshalContinuousVestingAccount(amino, lengthPrefixed = true) {
    const json = decodeType.decodeContinuousVestingAccount(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalContinuousVestingAccount = unmarshalContinuousVestingAccount;
/**
 * Unmarshal a `DelayedVestingAccount` object from Amino
 *
 * @param   amino          - Amino-encoded `DelayedVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `DelayedVestingAccount` object
 * @throws  will throw if decoding fails
 */
function unmarshalDelayedVestingAccount(amino, lengthPrefixed = true) {
    const json = decodeType.decodeDelayedVestingAccount(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalDelayedVestingAccount = unmarshalDelayedVestingAccount;
/**
 * Unmarshal a `StdTx` object from Amino
 *
 * @param   amino          - Amino-encoded `StdTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `StdTx` object
 * @throws  will throw if decoding fails
 */
function unmarshalStdTx(amino, lengthPrefixed = true) {
    const json = decodeType.decodeStdTx(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalStdTx = unmarshalStdTx;
/**
 * Unmarshal a `MsgSend` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgSend` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgSend(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgSend(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgSend = unmarshalMsgSend;
/**
 * Unmarshal a `MsgMultiSend` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgMultiSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgMultiSend` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgMultiSend(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgMultiSend(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgMultiSend = unmarshalMsgMultiSend;
/**
 * Unmarshal a `MsgVerifyInvariant` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgVerifyInvariant` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgVerifyInvariant` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgVerifyInvariant(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgVerifyInvariant(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgVerifyInvariant = unmarshalMsgVerifyInvariant;
/**
 * Unmarshal a `MsgWithdrawDelegatorReward` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgWithdrawDelegatorReward` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgWithdrawDelegatorReward` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgWithdrawDelegatorReward(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgWithdrawDelegatorReward(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgWithdrawDelegatorReward = unmarshalMsgWithdrawDelegatorReward;
/**
 * Unmarshal a `MsgWithdrawValidatorCommission` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgWithdrawValidatorCommission` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgWithdrawValidatorCommission` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgWithdrawValidatorCommission(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgWithdrawValidatorCommission(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgWithdrawValidatorCommission = unmarshalMsgWithdrawValidatorCommission;
/**
 * Unmarshal a `MsgSetWithdrawAddress` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgSetWithdrawAddress` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgSetWithdrawAddress` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgSetWithdrawAddress(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgSetWithdrawAddress(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgSetWithdrawAddress = unmarshalMsgSetWithdrawAddress;
/**
 * Unmarshal a `Content` object from Amino
 *
 * @param   amino          - Amino-encoded `Content` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Content` object
 * @throws  will throw if decoding fails
 */
function unmarshalContent(amino, lengthPrefixed = true) {
    const json = decodeType.decodeContent(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalContent = unmarshalContent;
/**
 * Unmarshal a `MsgSubmitProposal` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgSubmitProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgSubmitProposal` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgSubmitProposal(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgSubmitProposal(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgSubmitProposal = unmarshalMsgSubmitProposal;
/**
 * Unmarshal a `MsgDeposit` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgDeposit` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgDeposit` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgDeposit(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgDeposit(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgDeposit = unmarshalMsgDeposit;
/**
 * Unmarshal a `MsgVote` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgVote` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgVote(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgVote(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgVote = unmarshalMsgVote;
/**
 * Unmarshal a `TextProposal` object from Amino
 *
 * @param   amino          - Amino-encoded `TextProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `TextProposal` object
 * @throws  will throw if decoding fails
 */
function unmarshalTextProposal(amino, lengthPrefixed = true) {
    const json = decodeType.decodeTextProposal(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalTextProposal = unmarshalTextProposal;
/**
 * Unmarshal a `SoftwareUpgradeProposal` object from Amino
 *
 * @param   amino          - Amino-encoded `SoftwareUpgradeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `SoftwareUpgradeProposal` object
 * @throws  will throw if decoding fails
 */
function unmarshalSoftwareUpgradeProposal(amino, lengthPrefixed = true) {
    const json = decodeType.decodeSoftwareUpgradeProposal(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalSoftwareUpgradeProposal = unmarshalSoftwareUpgradeProposal;
/**
 * Unmarshal a `MsgIBCTransfer` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgIBCTransfer` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgIBCTransfer` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgIBCTransfer(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgIBCTransfer(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgIBCTransfer = unmarshalMsgIBCTransfer;
/**
 * Unmarshal a `MsgIBCReceive` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgIBCReceive` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgIBCReceive` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgIBCReceive(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgIBCReceive(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgIBCReceive = unmarshalMsgIBCReceive;
/**
 * Unmarshal a `ParameterChangeProposal` object from Amino
 *
 * @param   amino          - Amino-encoded `ParameterChangeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `ParameterChangeProposal` object
 * @throws  will throw if decoding fails
 */
function unmarshalParameterChangeProposal(amino, lengthPrefixed = true) {
    const json = decodeType.decodeParameterChangeProposal(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalParameterChangeProposal = unmarshalParameterChangeProposal;
/**
 * Unmarshal a `MsgUnjail` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgUnjail` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgUnjail` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgUnjail(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgUnjail(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgUnjail = unmarshalMsgUnjail;
/**
 * Unmarshal a `MsgCreateValidator` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgCreateValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgCreateValidator` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgCreateValidator(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgCreateValidator(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgCreateValidator = unmarshalMsgCreateValidator;
/**
 * Unmarshal a `MsgEditValidator` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgEditValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgEditValidator` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgEditValidator(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgEditValidator(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgEditValidator = unmarshalMsgEditValidator;
/**
 * Unmarshal a `MsgDelegate` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgDelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgDelegate` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgDelegate(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgDelegate(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgDelegate = unmarshalMsgDelegate;
/**
 * Unmarshal a `MsgUndelegate` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgUndelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgUndelegate` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgUndelegate(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgUndelegate(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgUndelegate = unmarshalMsgUndelegate;
/**
 * Unmarshal a `MsgBeginRedelegate` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgBeginRedelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgBeginRedelegate` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgBeginRedelegate(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgBeginRedelegate(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgBeginRedelegate = unmarshalMsgBeginRedelegate;
/**
 * Unmarshal a `BlockchainMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BlockchainMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BlockchainMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalBlockchainMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeBlockchainMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalBlockchainMessage = unmarshalBlockchainMessage;
/**
 * Unmarshal a `BcBlockRequestMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BcBlockRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BcBlockRequestMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalBcBlockRequestMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeBcBlockRequestMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalBcBlockRequestMessage = unmarshalBcBlockRequestMessage;
/**
 * Unmarshal a `BcBlockResponseMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BcBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BcBlockResponseMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalBcBlockResponseMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeBcBlockResponseMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalBcBlockResponseMessage = unmarshalBcBlockResponseMessage;
/**
 * Unmarshal a `BcNoBlockResponseMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BcNoBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BcNoBlockResponseMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalBcNoBlockResponseMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeBcNoBlockResponseMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalBcNoBlockResponseMessage = unmarshalBcNoBlockResponseMessage;
/**
 * Unmarshal a `BcStatusResponseMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BcStatusResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BcStatusResponseMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalBcStatusResponseMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeBcStatusResponseMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalBcStatusResponseMessage = unmarshalBcStatusResponseMessage;
/**
 * Unmarshal a `BcStatusRequestMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BcStatusRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BcStatusRequestMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalBcStatusRequestMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeBcStatusRequestMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalBcStatusRequestMessage = unmarshalBcStatusRequestMessage;
/**
 * Unmarshal a `ConsensusMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `ConsensusMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `ConsensusMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalConsensusMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeConsensusMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalConsensusMessage = unmarshalConsensusMessage;
/**
 * Unmarshal a `NewRoundStepMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `NewRoundStepMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `NewRoundStepMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalNewRoundStepMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeNewRoundStepMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalNewRoundStepMessage = unmarshalNewRoundStepMessage;
/**
 * Unmarshal a `NewValidBlockMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `NewValidBlockMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `NewValidBlockMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalNewValidBlockMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeNewValidBlockMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalNewValidBlockMessage = unmarshalNewValidBlockMessage;
/**
 * Unmarshal a `ProposalMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `ProposalMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `ProposalMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalProposalMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeProposalMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalProposalMessage = unmarshalProposalMessage;
/**
 * Unmarshal a `ProposalPOLMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `ProposalPOLMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `ProposalPOLMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalProposalPOLMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeProposalPOLMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalProposalPOLMessage = unmarshalProposalPOLMessage;
/**
 * Unmarshal a `BlockPartMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BlockPartMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BlockPartMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalBlockPartMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeBlockPartMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalBlockPartMessage = unmarshalBlockPartMessage;
/**
 * Unmarshal a `VoteMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `VoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `VoteMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalVoteMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeVoteMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalVoteMessage = unmarshalVoteMessage;
/**
 * Unmarshal a `HasVoteMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `HasVoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `HasVoteMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalHasVoteMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeHasVoteMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalHasVoteMessage = unmarshalHasVoteMessage;
/**
 * Unmarshal a `VoteSetMaj23Message` object from Amino
 *
 * @param   amino          - Amino-encoded `VoteSetMaj23Message` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `VoteSetMaj23Message` object
 * @throws  will throw if decoding fails
 */
function unmarshalVoteSetMaj23Message(amino, lengthPrefixed = true) {
    const json = decodeType.decodeVoteSetMaj23Message(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalVoteSetMaj23Message = unmarshalVoteSetMaj23Message;
/**
 * Unmarshal a `VoteSetBitsMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `VoteSetBitsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `VoteSetBitsMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalVoteSetBitsMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeVoteSetBitsMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalVoteSetBitsMessage = unmarshalVoteSetBitsMessage;
/**
 * Unmarshal a `WALMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `WALMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `WALMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalWALMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeWALMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalWALMessage = unmarshalWALMessage;
/**
 * Unmarshal a `MsgInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgInfo` object
 * @throws  will throw if decoding fails
 */
function unmarshalMsgInfo(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMsgInfo(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMsgInfo = unmarshalMsgInfo;
/**
 * Unmarshal a `TimeoutInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `TimeoutInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `TimeoutInfo` object
 * @throws  will throw if decoding fails
 */
function unmarshalTimeoutInfo(amino, lengthPrefixed = true) {
    const json = decodeType.decodeTimeoutInfo(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalTimeoutInfo = unmarshalTimeoutInfo;
/**
 * Unmarshal a `EndHeightMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `EndHeightMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EndHeightMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalEndHeightMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEndHeightMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEndHeightMessage = unmarshalEndHeightMessage;
/**
 * Unmarshal a `PubKey` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKey` object
 * @throws  will throw if decoding fails
 */
function unmarshalPubKey(amino, lengthPrefixed = true) {
    const json = decodeType.decodePubKey(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPubKey = unmarshalPubKey;
/**
 * Unmarshal a `PrivKey` object from Amino
 *
 * @param   amino          - Amino-encoded `PrivKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PrivKey` object
 * @throws  will throw if decoding fails
 */
function unmarshalPrivKey(amino, lengthPrefixed = true) {
    const json = decodeType.decodePrivKey(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPrivKey = unmarshalPrivKey;
/**
 * Unmarshal a `PubKeyEd25519` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKeyEd25519` object
 * @throws  will throw if decoding fails
 */
function unmarshalPubKeyEd25519(amino, lengthPrefixed = true) {
    const json = decodeType.decodePubKeyEd25519(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPubKeyEd25519 = unmarshalPubKeyEd25519;
/**
 * Unmarshal a `PrivKeyEd25519` object from Amino
 *
 * @param   amino          - Amino-encoded `PrivKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PrivKeyEd25519` object
 * @throws  will throw if decoding fails
 */
function unmarshalPrivKeyEd25519(amino, lengthPrefixed = true) {
    const json = decodeType.decodePrivKeyEd25519(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPrivKeyEd25519 = unmarshalPrivKeyEd25519;
/**
 * Unmarshal a `PubKeySecp256k1` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKeySecp256k1` object
 * @throws  will throw if decoding fails
 */
function unmarshalPubKeySecp256k1(amino, lengthPrefixed = true) {
    const json = decodeType.decodePubKeySecp256k1(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPubKeySecp256k1 = unmarshalPubKeySecp256k1;
/**
 * Unmarshal a `PrivKeySecp256k1` object from Amino
 *
 * @param   amino          - Amino-encoded `PrivKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PrivKeySecp256k1` object
 * @throws  will throw if decoding fails
 */
function unmarshalPrivKeySecp256k1(amino, lengthPrefixed = true) {
    const json = decodeType.decodePrivKeySecp256k1(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPrivKeySecp256k1 = unmarshalPrivKeySecp256k1;
/**
 * Unmarshal a `PubKeyMultisigThreshold` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKeyMultisigThreshold` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKeyMultisigThreshold` object
 * @throws  will throw if decoding fails
 */
function unmarshalPubKeyMultisigThreshold(amino, lengthPrefixed = true) {
    const json = decodeType.decodePubKeyMultisigThreshold(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPubKeyMultisigThreshold = unmarshalPubKeyMultisigThreshold;
/**
 * Unmarshal a `EvidenceMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `EvidenceMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EvidenceMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalEvidenceMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEvidenceMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEvidenceMessage = unmarshalEvidenceMessage;
/**
 * Unmarshal a `EvidenceListMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `EvidenceListMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EvidenceListMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalEvidenceListMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEvidenceListMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEvidenceListMessage = unmarshalEvidenceListMessage;
/**
 * Unmarshal a `MempoolMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `MempoolMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MempoolMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalMempoolMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMempoolMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMempoolMessage = unmarshalMempoolMessage;
/**
 * Unmarshal a `TxMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `TxMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `TxMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalTxMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodeTxMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalTxMessage = unmarshalTxMessage;
/**
 * Unmarshal a `Packet` object from Amino
 *
 * @param   amino          - Amino-encoded `Packet` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Packet` object
 * @throws  will throw if decoding fails
 */
function unmarshalPacket(amino, lengthPrefixed = true) {
    const json = decodeType.decodePacket(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPacket = unmarshalPacket;
/**
 * Unmarshal a `PacketPing` object from Amino
 *
 * @param   amino          - Amino-encoded `PacketPing` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PacketPing` object
 * @throws  will throw if decoding fails
 */
function unmarshalPacketPing(amino, lengthPrefixed = true) {
    const json = decodeType.decodePacketPing(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPacketPing = unmarshalPacketPing;
/**
 * Unmarshal a `PacketPong` object from Amino
 *
 * @param   amino          - Amino-encoded `PacketPong` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PacketPong` object
 * @throws  will throw if decoding fails
 */
function unmarshalPacketPong(amino, lengthPrefixed = true) {
    const json = decodeType.decodePacketPong(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPacketPong = unmarshalPacketPong;
/**
 * Unmarshal a `PacketMsg` object from Amino
 *
 * @param   amino          - Amino-encoded `PacketMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PacketMsg` object
 * @throws  will throw if decoding fails
 */
function unmarshalPacketMsg(amino, lengthPrefixed = true) {
    const json = decodeType.decodePacketMsg(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPacketMsg = unmarshalPacketMsg;
/**
 * Unmarshal a `PexMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `PexMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PexMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalPexMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodePexMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPexMessage = unmarshalPexMessage;
/**
 * Unmarshal a `PexRequestMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `PexRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PexRequestMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalPexRequestMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodePexRequestMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPexRequestMessage = unmarshalPexRequestMessage;
/**
 * Unmarshal a `PexAddrsMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `PexAddrsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PexAddrsMessage` object
 * @throws  will throw if decoding fails
 */
function unmarshalPexAddrsMessage(amino, lengthPrefixed = true) {
    const json = decodeType.decodePexAddrsMessage(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPexAddrsMessage = unmarshalPexAddrsMessage;
/**
 * Unmarshal a `RemoteSignerMsg` object from Amino
 *
 * @param   amino          - Amino-encoded `RemoteSignerMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `RemoteSignerMsg` object
 * @throws  will throw if decoding fails
 */
function unmarshalRemoteSignerMsg(amino, lengthPrefixed = true) {
    const json = decodeType.decodeRemoteSignerMsg(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalRemoteSignerMsg = unmarshalRemoteSignerMsg;
/**
 * Unmarshal a `PubKeyRequest` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKeyRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKeyRequest` object
 * @throws  will throw if decoding fails
 */
function unmarshalPubKeyRequest(amino, lengthPrefixed = true) {
    const json = decodeType.decodePubKeyRequest(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPubKeyRequest = unmarshalPubKeyRequest;
/**
 * Unmarshal a `PubKeyResponse` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKeyResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKeyResponse` object
 * @throws  will throw if decoding fails
 */
function unmarshalPubKeyResponse(amino, lengthPrefixed = true) {
    const json = decodeType.decodePubKeyResponse(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPubKeyResponse = unmarshalPubKeyResponse;
/**
 * Unmarshal a `SignVoteRequest` object from Amino
 *
 * @param   amino          - Amino-encoded `SignVoteRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `SignVoteRequest` object
 * @throws  will throw if decoding fails
 */
function unmarshalSignVoteRequest(amino, lengthPrefixed = true) {
    const json = decodeType.decodeSignVoteRequest(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalSignVoteRequest = unmarshalSignVoteRequest;
/**
 * Unmarshal a `SignedVoteResponse` object from Amino
 *
 * @param   amino          - Amino-encoded `SignedVoteResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `SignedVoteResponse` object
 * @throws  will throw if decoding fails
 */
function unmarshalSignedVoteResponse(amino, lengthPrefixed = true) {
    const json = decodeType.decodeSignedVoteResponse(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalSignedVoteResponse = unmarshalSignedVoteResponse;
/**
 * Unmarshal a `SignProposalRequest` object from Amino
 *
 * @param   amino          - Amino-encoded `SignProposalRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `SignProposalRequest` object
 * @throws  will throw if decoding fails
 */
function unmarshalSignProposalRequest(amino, lengthPrefixed = true) {
    const json = decodeType.decodeSignProposalRequest(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalSignProposalRequest = unmarshalSignProposalRequest;
/**
 * Unmarshal a `SignedProposalResponse` object from Amino
 *
 * @param   amino          - Amino-encoded `SignedProposalResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `SignedProposalResponse` object
 * @throws  will throw if decoding fails
 */
function unmarshalSignedProposalResponse(amino, lengthPrefixed = true) {
    const json = decodeType.decodeSignedProposalResponse(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalSignedProposalResponse = unmarshalSignedProposalResponse;
/**
 * Unmarshal a `PingRequest` object from Amino
 *
 * @param   amino          - Amino-encoded `PingRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PingRequest` object
 * @throws  will throw if decoding fails
 */
function unmarshalPingRequest(amino, lengthPrefixed = true) {
    const json = decodeType.decodePingRequest(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPingRequest = unmarshalPingRequest;
/**
 * Unmarshal a `PingResponse` object from Amino
 *
 * @param   amino          - Amino-encoded `PingResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PingResponse` object
 * @throws  will throw if decoding fails
 */
function unmarshalPingResponse(amino, lengthPrefixed = true) {
    const json = decodeType.decodePingResponse(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalPingResponse = unmarshalPingResponse;
/**
 * Unmarshal a `TMEventData` object from Amino
 *
 * @param   amino          - Amino-encoded `TMEventData` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `TMEventData` object
 * @throws  will throw if decoding fails
 */
function unmarshalTMEventData(amino, lengthPrefixed = true) {
    const json = decodeType.decodeTMEventData(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalTMEventData = unmarshalTMEventData;
/**
 * Unmarshal a `EventDataNewBlock` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataNewBlock` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataNewBlock` object
 * @throws  will throw if decoding fails
 */
function unmarshalEventDataNewBlock(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEventDataNewBlock(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEventDataNewBlock = unmarshalEventDataNewBlock;
/**
 * Unmarshal a `EventDataNewBlockHeader` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataNewBlockHeader` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataNewBlockHeader` object
 * @throws  will throw if decoding fails
 */
function unmarshalEventDataNewBlockHeader(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEventDataNewBlockHeader(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEventDataNewBlockHeader = unmarshalEventDataNewBlockHeader;
/**
 * Unmarshal a `EventDataTx` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataTx` object
 * @throws  will throw if decoding fails
 */
function unmarshalEventDataTx(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEventDataTx(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEventDataTx = unmarshalEventDataTx;
/**
 * Unmarshal a `EventDataRoundState` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataRoundState` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataRoundState` object
 * @throws  will throw if decoding fails
 */
function unmarshalEventDataRoundState(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEventDataRoundState(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEventDataRoundState = unmarshalEventDataRoundState;
/**
 * Unmarshal a `EventDataNewRound` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataNewRound` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataNewRound` object
 * @throws  will throw if decoding fails
 */
function unmarshalEventDataNewRound(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEventDataNewRound(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEventDataNewRound = unmarshalEventDataNewRound;
/**
 * Unmarshal a `EventDataCompleteProposal` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataCompleteProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataCompleteProposal` object
 * @throws  will throw if decoding fails
 */
function unmarshalEventDataCompleteProposal(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEventDataCompleteProposal(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEventDataCompleteProposal = unmarshalEventDataCompleteProposal;
/**
 * Unmarshal a `EventDataVote` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataVote` object
 * @throws  will throw if decoding fails
 */
function unmarshalEventDataVote(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEventDataVote(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEventDataVote = unmarshalEventDataVote;
/**
 * Unmarshal a `EventDataValidatorSetUpdates` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataValidatorSetUpdates` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataValidatorSetUpdates` object
 * @throws  will throw if decoding fails
 */
function unmarshalEventDataValidatorSetUpdates(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEventDataValidatorSetUpdates(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEventDataValidatorSetUpdates = unmarshalEventDataValidatorSetUpdates;
/**
 * Unmarshal a `EventDataString` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataString` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataString` object
 * @throws  will throw if decoding fails
 */
function unmarshalEventDataString(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEventDataString(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEventDataString = unmarshalEventDataString;
/**
 * Unmarshal a `Evidence` object from Amino
 *
 * @param   amino          - Amino-encoded `Evidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Evidence` object
 * @throws  will throw if decoding fails
 */
function unmarshalEvidence(amino, lengthPrefixed = true) {
    const json = decodeType.decodeEvidence(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalEvidence = unmarshalEvidence;
/**
 * Unmarshal a `DuplicateVoteEvidence` object from Amino
 *
 * @param   amino          - Amino-encoded `DuplicateVoteEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `DuplicateVoteEvidence` object
 * @throws  will throw if decoding fails
 */
function unmarshalDuplicateVoteEvidence(amino, lengthPrefixed = true) {
    const json = decodeType.decodeDuplicateVoteEvidence(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalDuplicateVoteEvidence = unmarshalDuplicateVoteEvidence;
/**
 * Unmarshal a `MockGoodEvidence` object from Amino
 *
 * @param   amino          - Amino-encoded `MockGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MockGoodEvidence` object
 * @throws  will throw if decoding fails
 */
function unmarshalMockGoodEvidence(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMockGoodEvidence(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMockGoodEvidence = unmarshalMockGoodEvidence;
/**
 * Unmarshal a `MockRandomGoodEvidence` object from Amino
 *
 * @param   amino          - Amino-encoded `MockRandomGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MockRandomGoodEvidence` object
 * @throws  will throw if decoding fails
 */
function unmarshalMockRandomGoodEvidence(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMockRandomGoodEvidence(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMockRandomGoodEvidence = unmarshalMockRandomGoodEvidence;
/**
 * Unmarshal a `MockBadEvidence` object from Amino
 *
 * @param   amino          - Amino-encoded `MockBadEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MockBadEvidence` object
 * @throws  will throw if decoding fails
 */
function unmarshalMockBadEvidence(amino, lengthPrefixed = true) {
    const json = decodeType.decodeMockBadEvidence(amino, lengthPrefixed);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalMockBadEvidence = unmarshalMockBadEvidence;
function unmarshalValidatorSigningInfo(amino) {
    const json = decodeType.decodeValidatorSigningInfo(amino);
    return belt_1.bytesToJSON(json);
}
exports.unmarshalValidatorSigningInfo = unmarshalValidatorSigningInfo;
