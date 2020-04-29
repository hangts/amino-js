"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const belt_1 = require("@tendermint/belt");
const encodeType = require("./encodeType");
/**
 * Marshal a `MultiStoreProofOp` object to Amino
 *
 * @param   o              - `MultiStoreProofOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MultiStoreProofOp` object
 * @throws  will throw if encoding fails
 */
function marshalMultiStoreProofOp(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMultiStoreProofOp(json, lengthPrefixed);
}
exports.marshalMultiStoreProofOp = marshalMultiStoreProofOp;
/**
 * Marshal a `IAVLAbsenceOp` object to Amino
 *
 * @param   o              - `IAVLAbsenceOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `IAVLAbsenceOp` object
 * @throws  will throw if encoding fails
 */
function marshalIAVLAbsenceOp(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeIAVLAbsenceOp(json, lengthPrefixed);
}
exports.marshalIAVLAbsenceOp = marshalIAVLAbsenceOp;
/**
 * Marshal a `IAVLValueOp` object to Amino
 *
 * @param   o              - `IAVLValueOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `IAVLValueOp` object
 * @throws  will throw if encoding fails
 */
function marshalIAVLValueOp(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeIAVLValueOp(json, lengthPrefixed);
}
exports.marshalIAVLValueOp = marshalIAVLValueOp;
/**
 * Marshal a `PrivKeyLedgerSecp256k1` object to Amino
 *
 * @param   o              - `PrivKeyLedgerSecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeyLedgerSecp256k1` object
 * @throws  will throw if encoding fails
 */
function marshalPrivKeyLedgerSecp256k1(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePrivKeyLedgerSecp256k1(json, lengthPrefixed);
}
exports.marshalPrivKeyLedgerSecp256k1 = marshalPrivKeyLedgerSecp256k1;
/**
 * Marshal a `Info` object to Amino
 *
 * @param   o              - `Info` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Info` object
 * @throws  will throw if encoding fails
 */
function marshalInfo(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeInfo(json, lengthPrefixed);
}
exports.marshalInfo = marshalInfo;
/**
 * Marshal a `BIP44Params` object to Amino
 *
 * @param   o              - `BIP44Params` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BIP44Params` object
 * @throws  will throw if encoding fails
 */
function marshalBIP44Params(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeBIP44Params(json, lengthPrefixed);
}
exports.marshalBIP44Params = marshalBIP44Params;
/**
 * Marshal a `LocalInfo` object to Amino
 *
 * @param   o              - `LocalInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `LocalInfo` object
 * @throws  will throw if encoding fails
 */
function marshalLocalInfo(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeLocalInfo(json, lengthPrefixed);
}
exports.marshalLocalInfo = marshalLocalInfo;
/**
 * Marshal a `LedgerInfo` object to Amino
 *
 * @param   o              - `LedgerInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `LedgerInfo` object
 * @throws  will throw if encoding fails
 */
function marshalLedgerInfo(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeLedgerInfo(json, lengthPrefixed);
}
exports.marshalLedgerInfo = marshalLedgerInfo;
/**
 * Marshal a `OfflineInfo` object to Amino
 *
 * @param   o              - `OfflineInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `OfflineInfo` object
 * @throws  will throw if encoding fails
 */
function marshalOfflineInfo(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeOfflineInfo(json, lengthPrefixed);
}
exports.marshalOfflineInfo = marshalOfflineInfo;
/**
 * Marshal a `MultiInfo` object to Amino
 *
 * @param   o              - `MultiInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MultiInfo` object
 * @throws  will throw if encoding fails
 */
function marshalMultiInfo(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMultiInfo(json, lengthPrefixed);
}
exports.marshalMultiInfo = marshalMultiInfo;
/**
 * Marshal a `Msg` object to Amino
 *
 * @param   o              - `Msg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Msg` object
 * @throws  will throw if encoding fails
 */
function marshalMsg(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsg(json, lengthPrefixed);
}
exports.marshalMsg = marshalMsg;
/**
 * Marshal a `Tx` object to Amino
 *
 * @param   o              - `Tx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Tx` object
 * @throws  will throw if encoding fails
 */
function marshalTx(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeTx(json, lengthPrefixed);
}
exports.marshalTx = marshalTx;
/**
 * Marshal a `Account` object to Amino
 *
 * @param   o              - `Account` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Account` object
 * @throws  will throw if encoding fails
 */
function marshalAccount(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeAccount(json, lengthPrefixed);
}
exports.marshalAccount = marshalAccount;
/**
 * Marshal a `VestingAccount` object to Amino
 *
 * @param   o              - `VestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VestingAccount` object
 * @throws  will throw if encoding fails
 */
function marshalVestingAccount(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeVestingAccount(json, lengthPrefixed);
}
exports.marshalVestingAccount = marshalVestingAccount;
/**
 * Marshal a `BaseAccount` object to Amino
 *
 * @param   o              - `BaseAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BaseAccount` object
 * @throws  will throw if encoding fails
 */
function marshalBaseAccount(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeBaseAccount(json, lengthPrefixed);
}
exports.marshalBaseAccount = marshalBaseAccount;
/**
 * Marshal a `BaseVestingAccount` object to Amino
 *
 * @param   o              - `BaseVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BaseVestingAccount` object
 * @throws  will throw if encoding fails
 */
function marshalBaseVestingAccount(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeBaseVestingAccount(json, lengthPrefixed);
}
exports.marshalBaseVestingAccount = marshalBaseVestingAccount;
/**
 * Marshal a `ContinuousVestingAccount` object to Amino
 *
 * @param   o              - `ContinuousVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ContinuousVestingAccount` object
 * @throws  will throw if encoding fails
 */
function marshalContinuousVestingAccount(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeContinuousVestingAccount(json, lengthPrefixed);
}
exports.marshalContinuousVestingAccount = marshalContinuousVestingAccount;
/**
 * Marshal a `DelayedVestingAccount` object to Amino
 *
 * @param   o              - `DelayedVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `DelayedVestingAccount` object
 * @throws  will throw if encoding fails
 */
function marshalDelayedVestingAccount(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeDelayedVestingAccount(json, lengthPrefixed);
}
exports.marshalDelayedVestingAccount = marshalDelayedVestingAccount;
/**
 * Marshal a `StdTx` object to Amino
 *
 * @param   o              - `StdTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `StdTx` object
 * @throws  will throw if encoding fails
 */
function marshalStdTx(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeStdTx(json, lengthPrefixed);
}
exports.marshalStdTx = marshalStdTx;
/**
 * Marshal a `MsgSend` object to Amino
 *
 * @param   o              - `MsgSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSend` object
 * @throws  will throw if encoding fails
 */
function marshalMsgSend(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgSend(json, lengthPrefixed);
}
exports.marshalMsgSend = marshalMsgSend;
/**
 * Marshal a `MsgMultiSend` object to Amino
 *
 * @param   o              - `MsgMultiSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgMultiSend` object
 * @throws  will throw if encoding fails
 */
function marshalMsgMultiSend(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgMultiSend(json, lengthPrefixed);
}
exports.marshalMsgMultiSend = marshalMsgMultiSend;
/**
 * Marshal a `MsgVerifyInvariant` object to Amino
 *
 * @param   o              - `MsgVerifyInvariant` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgVerifyInvariant` object
 * @throws  will throw if encoding fails
 */
function marshalMsgVerifyInvariant(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgVerifyInvariant(json, lengthPrefixed);
}
exports.marshalMsgVerifyInvariant = marshalMsgVerifyInvariant;
/**
 * Marshal a `MsgWithdrawDelegatorReward` object to Amino
 *
 * @param   o              - `MsgWithdrawDelegatorReward` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgWithdrawDelegatorReward` object
 * @throws  will throw if encoding fails
 */
function marshalMsgWithdrawDelegatorReward(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgWithdrawDelegatorReward(json, lengthPrefixed);
}
exports.marshalMsgWithdrawDelegatorReward = marshalMsgWithdrawDelegatorReward;
/**
 * Marshal a `MsgWithdrawValidatorCommission` object to Amino
 *
 * @param   o              - `MsgWithdrawValidatorCommission` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgWithdrawValidatorCommission` object
 * @throws  will throw if encoding fails
 */
function marshalMsgWithdrawValidatorCommission(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgWithdrawValidatorCommission(json, lengthPrefixed);
}
exports.marshalMsgWithdrawValidatorCommission = marshalMsgWithdrawValidatorCommission;
/**
 * Marshal a `MsgSetWithdrawAddress` object to Amino
 *
 * @param   o              - `MsgSetWithdrawAddress` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSetWithdrawAddress` object
 * @throws  will throw if encoding fails
 */
function marshalMsgSetWithdrawAddress(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgSetWithdrawAddress(json, lengthPrefixed);
}
exports.marshalMsgSetWithdrawAddress = marshalMsgSetWithdrawAddress;
/**
 * Marshal a `Content` object to Amino
 *
 * @param   o              - `Content` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Content` object
 * @throws  will throw if encoding fails
 */
function marshalContent(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeContent(json, lengthPrefixed);
}
exports.marshalContent = marshalContent;
/**
 * Marshal a `MsgSubmitProposal` object to Amino
 *
 * @param   o              - `MsgSubmitProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSubmitProposal` object
 * @throws  will throw if encoding fails
 */
function marshalMsgSubmitProposal(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgSubmitProposal(json, lengthPrefixed);
}
exports.marshalMsgSubmitProposal = marshalMsgSubmitProposal;
/**
 * Marshal a `MsgDeposit` object to Amino
 *
 * @param   o              - `MsgDeposit` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgDeposit` object
 * @throws  will throw if encoding fails
 */
function marshalMsgDeposit(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgDeposit(json, lengthPrefixed);
}
exports.marshalMsgDeposit = marshalMsgDeposit;
/**
 * Marshal a `MsgVote` object to Amino
 *
 * @param   o              - `MsgVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgVote` object
 * @throws  will throw if encoding fails
 */
function marshalMsgVote(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgVote(json, lengthPrefixed);
}
exports.marshalMsgVote = marshalMsgVote;
/**
 * Marshal a `TextProposal` object to Amino
 *
 * @param   o              - `TextProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TextProposal` object
 * @throws  will throw if encoding fails
 */
function marshalTextProposal(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeTextProposal(json, lengthPrefixed);
}
exports.marshalTextProposal = marshalTextProposal;
/**
 * Marshal a `SoftwareUpgradeProposal` object to Amino
 *
 * @param   o              - `SoftwareUpgradeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SoftwareUpgradeProposal` object
 * @throws  will throw if encoding fails
 */
function marshalSoftwareUpgradeProposal(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeSoftwareUpgradeProposal(json, lengthPrefixed);
}
exports.marshalSoftwareUpgradeProposal = marshalSoftwareUpgradeProposal;
/**
 * Marshal a `MsgIBCTransfer` object to Amino
 *
 * @param   o              - `MsgIBCTransfer` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgIBCTransfer` object
 * @throws  will throw if encoding fails
 */
function marshalMsgIBCTransfer(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgIBCTransfer(json, lengthPrefixed);
}
exports.marshalMsgIBCTransfer = marshalMsgIBCTransfer;
/**
 * Marshal a `MsgIBCReceive` object to Amino
 *
 * @param   o              - `MsgIBCReceive` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgIBCReceive` object
 * @throws  will throw if encoding fails
 */
function marshalMsgIBCReceive(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgIBCReceive(json, lengthPrefixed);
}
exports.marshalMsgIBCReceive = marshalMsgIBCReceive;
/**
 * Marshal a `ParameterChangeProposal` object to Amino
 *
 * @param   o              - `ParameterChangeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ParameterChangeProposal` object
 * @throws  will throw if encoding fails
 */
function marshalParameterChangeProposal(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeParameterChangeProposal(json, lengthPrefixed);
}
exports.marshalParameterChangeProposal = marshalParameterChangeProposal;
/**
 * Marshal a `MsgUnjail` object to Amino
 *
 * @param   o              - `MsgUnjail` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgUnjail` object
 * @throws  will throw if encoding fails
 */
function marshalMsgUnjail(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgUnjail(json, lengthPrefixed);
}
exports.marshalMsgUnjail = marshalMsgUnjail;
/**
 * Marshal a `MsgCreateValidator` object to Amino
 *
 * @param   o              - `MsgCreateValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgCreateValidator` object
 * @throws  will throw if encoding fails
 */
function marshalMsgCreateValidator(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgCreateValidator(json, lengthPrefixed);
}
exports.marshalMsgCreateValidator = marshalMsgCreateValidator;
/**
 * Marshal a `MsgEditValidator` object to Amino
 *
 * @param   o              - `MsgEditValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgEditValidator` object
 * @throws  will throw if encoding fails
 */
function marshalMsgEditValidator(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgEditValidator(json, lengthPrefixed);
}
exports.marshalMsgEditValidator = marshalMsgEditValidator;
/**
 * Marshal a `MsgDelegate` object to Amino
 *
 * @param   o              - `MsgDelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgDelegate` object
 * @throws  will throw if encoding fails
 */
function marshalMsgDelegate(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgDelegate(json, lengthPrefixed);
}
exports.marshalMsgDelegate = marshalMsgDelegate;
/**
 * Marshal a `MsgUndelegate` object to Amino
 *
 * @param   o              - `MsgUndelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgUndelegate` object
 * @throws  will throw if encoding fails
 */
function marshalMsgUndelegate(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgUndelegate(json, lengthPrefixed);
}
exports.marshalMsgUndelegate = marshalMsgUndelegate;
/**
 * Marshal a `MsgBeginRedelegate` object to Amino
 *
 * @param   o              - `MsgBeginRedelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgBeginRedelegate` object
 * @throws  will throw if encoding fails
 */
function marshalMsgBeginRedelegate(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgBeginRedelegate(json, lengthPrefixed);
}
exports.marshalMsgBeginRedelegate = marshalMsgBeginRedelegate;
/**
 * Marshal a `BlockchainMessage` object to Amino
 *
 * @param   o              - `BlockchainMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BlockchainMessage` object
 * @throws  will throw if encoding fails
 */
function marshalBlockchainMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeBlockchainMessage(json, lengthPrefixed);
}
exports.marshalBlockchainMessage = marshalBlockchainMessage;
/**
 * Marshal a `BcBlockRequestMessage` object to Amino
 *
 * @param   o              - `BcBlockRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcBlockRequestMessage` object
 * @throws  will throw if encoding fails
 */
function marshalBcBlockRequestMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeBcBlockRequestMessage(json, lengthPrefixed);
}
exports.marshalBcBlockRequestMessage = marshalBcBlockRequestMessage;
/**
 * Marshal a `BcBlockResponseMessage` object to Amino
 *
 * @param   o              - `BcBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcBlockResponseMessage` object
 * @throws  will throw if encoding fails
 */
function marshalBcBlockResponseMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeBcBlockResponseMessage(json, lengthPrefixed);
}
exports.marshalBcBlockResponseMessage = marshalBcBlockResponseMessage;
/**
 * Marshal a `BcNoBlockResponseMessage` object to Amino
 *
 * @param   o              - `BcNoBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcNoBlockResponseMessage` object
 * @throws  will throw if encoding fails
 */
function marshalBcNoBlockResponseMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeBcNoBlockResponseMessage(json, lengthPrefixed);
}
exports.marshalBcNoBlockResponseMessage = marshalBcNoBlockResponseMessage;
/**
 * Marshal a `BcStatusResponseMessage` object to Amino
 *
 * @param   o              - `BcStatusResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcStatusResponseMessage` object
 * @throws  will throw if encoding fails
 */
function marshalBcStatusResponseMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeBcStatusResponseMessage(json, lengthPrefixed);
}
exports.marshalBcStatusResponseMessage = marshalBcStatusResponseMessage;
/**
 * Marshal a `BcStatusRequestMessage` object to Amino
 *
 * @param   o              - `BcStatusRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcStatusRequestMessage` object
 * @throws  will throw if encoding fails
 */
function marshalBcStatusRequestMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeBcStatusRequestMessage(json, lengthPrefixed);
}
exports.marshalBcStatusRequestMessage = marshalBcStatusRequestMessage;
/**
 * Marshal a `ConsensusMessage` object to Amino
 *
 * @param   o              - `ConsensusMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ConsensusMessage` object
 * @throws  will throw if encoding fails
 */
function marshalConsensusMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeConsensusMessage(json, lengthPrefixed);
}
exports.marshalConsensusMessage = marshalConsensusMessage;
/**
 * Marshal a `NewRoundStepMessage` object to Amino
 *
 * @param   o              - `NewRoundStepMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `NewRoundStepMessage` object
 * @throws  will throw if encoding fails
 */
function marshalNewRoundStepMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeNewRoundStepMessage(json, lengthPrefixed);
}
exports.marshalNewRoundStepMessage = marshalNewRoundStepMessage;
/**
 * Marshal a `NewValidBlockMessage` object to Amino
 *
 * @param   o              - `NewValidBlockMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `NewValidBlockMessage` object
 * @throws  will throw if encoding fails
 */
function marshalNewValidBlockMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeNewValidBlockMessage(json, lengthPrefixed);
}
exports.marshalNewValidBlockMessage = marshalNewValidBlockMessage;
/**
 * Marshal a `ProposalMessage` object to Amino
 *
 * @param   o              - `ProposalMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ProposalMessage` object
 * @throws  will throw if encoding fails
 */
function marshalProposalMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeProposalMessage(json, lengthPrefixed);
}
exports.marshalProposalMessage = marshalProposalMessage;
/**
 * Marshal a `ProposalPOLMessage` object to Amino
 *
 * @param   o              - `ProposalPOLMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ProposalPOLMessage` object
 * @throws  will throw if encoding fails
 */
function marshalProposalPOLMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeProposalPOLMessage(json, lengthPrefixed);
}
exports.marshalProposalPOLMessage = marshalProposalPOLMessage;
/**
 * Marshal a `BlockPartMessage` object to Amino
 *
 * @param   o              - `BlockPartMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BlockPartMessage` object
 * @throws  will throw if encoding fails
 */
function marshalBlockPartMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeBlockPartMessage(json, lengthPrefixed);
}
exports.marshalBlockPartMessage = marshalBlockPartMessage;
/**
 * Marshal a `VoteMessage` object to Amino
 *
 * @param   o              - `VoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteMessage` object
 * @throws  will throw if encoding fails
 */
function marshalVoteMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeVoteMessage(json, lengthPrefixed);
}
exports.marshalVoteMessage = marshalVoteMessage;
/**
 * Marshal a `HasVoteMessage` object to Amino
 *
 * @param   o              - `HasVoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `HasVoteMessage` object
 * @throws  will throw if encoding fails
 */
function marshalHasVoteMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeHasVoteMessage(json, lengthPrefixed);
}
exports.marshalHasVoteMessage = marshalHasVoteMessage;
/**
 * Marshal a `VoteSetMaj23Message` object to Amino
 *
 * @param   o              - `VoteSetMaj23Message` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteSetMaj23Message` object
 * @throws  will throw if encoding fails
 */
function marshalVoteSetMaj23Message(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeVoteSetMaj23Message(json, lengthPrefixed);
}
exports.marshalVoteSetMaj23Message = marshalVoteSetMaj23Message;
/**
 * Marshal a `VoteSetBitsMessage` object to Amino
 *
 * @param   o              - `VoteSetBitsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteSetBitsMessage` object
 * @throws  will throw if encoding fails
 */
function marshalVoteSetBitsMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeVoteSetBitsMessage(json, lengthPrefixed);
}
exports.marshalVoteSetBitsMessage = marshalVoteSetBitsMessage;
/**
 * Marshal a `WALMessage` object to Amino
 *
 * @param   o              - `WALMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `WALMessage` object
 * @throws  will throw if encoding fails
 */
function marshalWALMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeWALMessage(json, lengthPrefixed);
}
exports.marshalWALMessage = marshalWALMessage;
/**
 * Marshal a `MsgInfo` object to Amino
 *
 * @param   o              - `MsgInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgInfo` object
 * @throws  will throw if encoding fails
 */
function marshalMsgInfo(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMsgInfo(json, lengthPrefixed);
}
exports.marshalMsgInfo = marshalMsgInfo;
/**
 * Marshal a `TimeoutInfo` object to Amino
 *
 * @param   o              - `TimeoutInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TimeoutInfo` object
 * @throws  will throw if encoding fails
 */
function marshalTimeoutInfo(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeTimeoutInfo(json, lengthPrefixed);
}
exports.marshalTimeoutInfo = marshalTimeoutInfo;
/**
 * Marshal a `EndHeightMessage` object to Amino
 *
 * @param   o              - `EndHeightMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EndHeightMessage` object
 * @throws  will throw if encoding fails
 */
function marshalEndHeightMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEndHeightMessage(json, lengthPrefixed);
}
exports.marshalEndHeightMessage = marshalEndHeightMessage;
/**
 * Marshal a `PubKey` object to Amino
 *
 * @param   o              - `PubKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKey` object
 * @throws  will throw if encoding fails
 */
function marshalPubKey(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePubKey(json, lengthPrefixed);
}
exports.marshalPubKey = marshalPubKey;
/**
 * Marshal a `PrivKey` object to Amino
 *
 * @param   o              - `PrivKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKey` object
 * @throws  will throw if encoding fails
 */
function marshalPrivKey(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePrivKey(json, lengthPrefixed);
}
exports.marshalPrivKey = marshalPrivKey;
/**
 * Marshal a `PubKeyEd25519` object to Amino
 *
 * @param   o              - `PubKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyEd25519` object
 * @throws  will throw if encoding fails
 */
function marshalPubKeyEd25519(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePubKeyEd25519(json, lengthPrefixed);
}
exports.marshalPubKeyEd25519 = marshalPubKeyEd25519;
/**
 * Marshal a `PrivKeyEd25519` object to Amino
 *
 * @param   o              - `PrivKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeyEd25519` object
 * @throws  will throw if encoding fails
 */
function marshalPrivKeyEd25519(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePrivKeyEd25519(json, lengthPrefixed);
}
exports.marshalPrivKeyEd25519 = marshalPrivKeyEd25519;
/**
 * Marshal a `PubKeySecp256k1` object to Amino
 *
 * @param   o              - `PubKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeySecp256k1` object
 * @throws  will throw if encoding fails
 */
function marshalPubKeySecp256k1(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePubKeySecp256k1(json, lengthPrefixed);
}
exports.marshalPubKeySecp256k1 = marshalPubKeySecp256k1;
/**
 * Marshal a `PrivKeySecp256k1` object to Amino
 *
 * @param   o              - `PrivKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeySecp256k1` object
 * @throws  will throw if encoding fails
 */
function marshalPrivKeySecp256k1(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePrivKeySecp256k1(json, lengthPrefixed);
}
exports.marshalPrivKeySecp256k1 = marshalPrivKeySecp256k1;
/**
 * Marshal a `PubKeyMultisigThreshold` object to Amino
 *
 * @param   o              - `PubKeyMultisigThreshold` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyMultisigThreshold` object
 * @throws  will throw if encoding fails
 */
function marshalPubKeyMultisigThreshold(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePubKeyMultisigThreshold(json, lengthPrefixed);
}
exports.marshalPubKeyMultisigThreshold = marshalPubKeyMultisigThreshold;
/**
 * Marshal a `EvidenceMessage` object to Amino
 *
 * @param   o              - `EvidenceMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EvidenceMessage` object
 * @throws  will throw if encoding fails
 */
function marshalEvidenceMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEvidenceMessage(json, lengthPrefixed);
}
exports.marshalEvidenceMessage = marshalEvidenceMessage;
/**
 * Marshal a `EvidenceListMessage` object to Amino
 *
 * @param   o              - `EvidenceListMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EvidenceListMessage` object
 * @throws  will throw if encoding fails
 */
function marshalEvidenceListMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEvidenceListMessage(json, lengthPrefixed);
}
exports.marshalEvidenceListMessage = marshalEvidenceListMessage;
/**
 * Marshal a `MempoolMessage` object to Amino
 *
 * @param   o              - `MempoolMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MempoolMessage` object
 * @throws  will throw if encoding fails
 */
function marshalMempoolMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMempoolMessage(json, lengthPrefixed);
}
exports.marshalMempoolMessage = marshalMempoolMessage;
/**
 * Marshal a `TxMessage` object to Amino
 *
 * @param   o              - `TxMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TxMessage` object
 * @throws  will throw if encoding fails
 */
function marshalTxMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeTxMessage(json, lengthPrefixed);
}
exports.marshalTxMessage = marshalTxMessage;
/**
 * Marshal a `Packet` object to Amino
 *
 * @param   o              - `Packet` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Packet` object
 * @throws  will throw if encoding fails
 */
function marshalPacket(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePacket(json, lengthPrefixed);
}
exports.marshalPacket = marshalPacket;
/**
 * Marshal a `PacketPing` object to Amino
 *
 * @param   o              - `PacketPing` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketPing` object
 * @throws  will throw if encoding fails
 */
function marshalPacketPing(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePacketPing(json, lengthPrefixed);
}
exports.marshalPacketPing = marshalPacketPing;
/**
 * Marshal a `PacketPong` object to Amino
 *
 * @param   o              - `PacketPong` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketPong` object
 * @throws  will throw if encoding fails
 */
function marshalPacketPong(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePacketPong(json, lengthPrefixed);
}
exports.marshalPacketPong = marshalPacketPong;
/**
 * Marshal a `PacketMsg` object to Amino
 *
 * @param   o              - `PacketMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketMsg` object
 * @throws  will throw if encoding fails
 */
function marshalPacketMsg(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePacketMsg(json, lengthPrefixed);
}
exports.marshalPacketMsg = marshalPacketMsg;
/**
 * Marshal a `PexMessage` object to Amino
 *
 * @param   o              - `PexMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexMessage` object
 * @throws  will throw if encoding fails
 */
function marshalPexMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePexMessage(json, lengthPrefixed);
}
exports.marshalPexMessage = marshalPexMessage;
/**
 * Marshal a `PexRequestMessage` object to Amino
 *
 * @param   o              - `PexRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexRequestMessage` object
 * @throws  will throw if encoding fails
 */
function marshalPexRequestMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePexRequestMessage(json, lengthPrefixed);
}
exports.marshalPexRequestMessage = marshalPexRequestMessage;
/**
 * Marshal a `PexAddrsMessage` object to Amino
 *
 * @param   o              - `PexAddrsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexAddrsMessage` object
 * @throws  will throw if encoding fails
 */
function marshalPexAddrsMessage(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePexAddrsMessage(json, lengthPrefixed);
}
exports.marshalPexAddrsMessage = marshalPexAddrsMessage;
/**
 * Marshal a `RemoteSignerMsg` object to Amino
 *
 * @param   o              - `RemoteSignerMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `RemoteSignerMsg` object
 * @throws  will throw if encoding fails
 */
function marshalRemoteSignerMsg(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeRemoteSignerMsg(json, lengthPrefixed);
}
exports.marshalRemoteSignerMsg = marshalRemoteSignerMsg;
/**
 * Marshal a `PubKeyRequest` object to Amino
 *
 * @param   o              - `PubKeyRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyRequest` object
 * @throws  will throw if encoding fails
 */
function marshalPubKeyRequest(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePubKeyRequest(json, lengthPrefixed);
}
exports.marshalPubKeyRequest = marshalPubKeyRequest;
/**
 * Marshal a `PubKeyResponse` object to Amino
 *
 * @param   o              - `PubKeyResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyResponse` object
 * @throws  will throw if encoding fails
 */
function marshalPubKeyResponse(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePubKeyResponse(json, lengthPrefixed);
}
exports.marshalPubKeyResponse = marshalPubKeyResponse;
/**
 * Marshal a `SignVoteRequest` object to Amino
 *
 * @param   o              - `SignVoteRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignVoteRequest` object
 * @throws  will throw if encoding fails
 */
function marshalSignVoteRequest(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeSignVoteRequest(json, lengthPrefixed);
}
exports.marshalSignVoteRequest = marshalSignVoteRequest;
/**
 * Marshal a `SignedVoteResponse` object to Amino
 *
 * @param   o              - `SignedVoteResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignedVoteResponse` object
 * @throws  will throw if encoding fails
 */
function marshalSignedVoteResponse(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeSignedVoteResponse(json, lengthPrefixed);
}
exports.marshalSignedVoteResponse = marshalSignedVoteResponse;
/**
 * Marshal a `SignProposalRequest` object to Amino
 *
 * @param   o              - `SignProposalRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignProposalRequest` object
 * @throws  will throw if encoding fails
 */
function marshalSignProposalRequest(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeSignProposalRequest(json, lengthPrefixed);
}
exports.marshalSignProposalRequest = marshalSignProposalRequest;
/**
 * Marshal a `SignedProposalResponse` object to Amino
 *
 * @param   o              - `SignedProposalResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignedProposalResponse` object
 * @throws  will throw if encoding fails
 */
function marshalSignedProposalResponse(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeSignedProposalResponse(json, lengthPrefixed);
}
exports.marshalSignedProposalResponse = marshalSignedProposalResponse;
/**
 * Marshal a `PingRequest` object to Amino
 *
 * @param   o              - `PingRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PingRequest` object
 * @throws  will throw if encoding fails
 */
function marshalPingRequest(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePingRequest(json, lengthPrefixed);
}
exports.marshalPingRequest = marshalPingRequest;
/**
 * Marshal a `PingResponse` object to Amino
 *
 * @param   o              - `PingResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PingResponse` object
 * @throws  will throw if encoding fails
 */
function marshalPingResponse(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodePingResponse(json, lengthPrefixed);
}
exports.marshalPingResponse = marshalPingResponse;
/**
 * Marshal a `TMEventData` object to Amino
 *
 * @param   o              - `TMEventData` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TMEventData` object
 * @throws  will throw if encoding fails
 */
function marshalTMEventData(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeTMEventData(json, lengthPrefixed);
}
exports.marshalTMEventData = marshalTMEventData;
/**
 * Marshal a `EventDataNewBlock` object to Amino
 *
 * @param   o              - `EventDataNewBlock` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewBlock` object
 * @throws  will throw if encoding fails
 */
function marshalEventDataNewBlock(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEventDataNewBlock(json, lengthPrefixed);
}
exports.marshalEventDataNewBlock = marshalEventDataNewBlock;
/**
 * Marshal a `EventDataNewBlockHeader` object to Amino
 *
 * @param   o              - `EventDataNewBlockHeader` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewBlockHeader` object
 * @throws  will throw if encoding fails
 */
function marshalEventDataNewBlockHeader(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEventDataNewBlockHeader(json, lengthPrefixed);
}
exports.marshalEventDataNewBlockHeader = marshalEventDataNewBlockHeader;
/**
 * Marshal a `EventDataTx` object to Amino
 *
 * @param   o              - `EventDataTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataTx` object
 * @throws  will throw if encoding fails
 */
function marshalEventDataTx(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEventDataTx(json, lengthPrefixed);
}
exports.marshalEventDataTx = marshalEventDataTx;
/**
 * Marshal a `EventDataRoundState` object to Amino
 *
 * @param   o              - `EventDataRoundState` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataRoundState` object
 * @throws  will throw if encoding fails
 */
function marshalEventDataRoundState(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEventDataRoundState(json, lengthPrefixed);
}
exports.marshalEventDataRoundState = marshalEventDataRoundState;
/**
 * Marshal a `EventDataNewRound` object to Amino
 *
 * @param   o              - `EventDataNewRound` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewRound` object
 * @throws  will throw if encoding fails
 */
function marshalEventDataNewRound(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEventDataNewRound(json, lengthPrefixed);
}
exports.marshalEventDataNewRound = marshalEventDataNewRound;
/**
 * Marshal a `EventDataCompleteProposal` object to Amino
 *
 * @param   o              - `EventDataCompleteProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataCompleteProposal` object
 * @throws  will throw if encoding fails
 */
function marshalEventDataCompleteProposal(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEventDataCompleteProposal(json, lengthPrefixed);
}
exports.marshalEventDataCompleteProposal = marshalEventDataCompleteProposal;
/**
 * Marshal a `EventDataVote` object to Amino
 *
 * @param   o              - `EventDataVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataVote` object
 * @throws  will throw if encoding fails
 */
function marshalEventDataVote(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEventDataVote(json, lengthPrefixed);
}
exports.marshalEventDataVote = marshalEventDataVote;
/**
 * Marshal a `EventDataValidatorSetUpdates` object to Amino
 *
 * @param   o              - `EventDataValidatorSetUpdates` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataValidatorSetUpdates` object
 * @throws  will throw if encoding fails
 */
function marshalEventDataValidatorSetUpdates(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEventDataValidatorSetUpdates(json, lengthPrefixed);
}
exports.marshalEventDataValidatorSetUpdates = marshalEventDataValidatorSetUpdates;
/**
 * Marshal a `EventDataString` object to Amino
 *
 * @param   o              - `EventDataString` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataString` object
 * @throws  will throw if encoding fails
 */
function marshalEventDataString(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEventDataString(json, lengthPrefixed);
}
exports.marshalEventDataString = marshalEventDataString;
/**
 * Marshal a `Evidence` object to Amino
 *
 * @param   o              - `Evidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Evidence` object
 * @throws  will throw if encoding fails
 */
function marshalEvidence(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeEvidence(json, lengthPrefixed);
}
exports.marshalEvidence = marshalEvidence;
/**
 * Marshal a `DuplicateVoteEvidence` object to Amino
 *
 * @param   o              - `DuplicateVoteEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `DuplicateVoteEvidence` object
 * @throws  will throw if encoding fails
 */
function marshalDuplicateVoteEvidence(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeDuplicateVoteEvidence(json, lengthPrefixed);
}
exports.marshalDuplicateVoteEvidence = marshalDuplicateVoteEvidence;
/**
 * Marshal a `MockGoodEvidence` object to Amino
 *
 * @param   o              - `MockGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockGoodEvidence` object
 * @throws  will throw if encoding fails
 */
function marshalMockGoodEvidence(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMockGoodEvidence(json, lengthPrefixed);
}
exports.marshalMockGoodEvidence = marshalMockGoodEvidence;
/**
 * Marshal a `MockRandomGoodEvidence` object to Amino
 *
 * @param   o              - `MockRandomGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockRandomGoodEvidence` object
 * @throws  will throw if encoding fails
 */
function marshalMockRandomGoodEvidence(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMockRandomGoodEvidence(json, lengthPrefixed);
}
exports.marshalMockRandomGoodEvidence = marshalMockRandomGoodEvidence;
/**
 * Marshal a `MockBadEvidence` object to Amino
 *
 * @param   o              - `MockBadEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockBadEvidence` object
 * @throws  will throw if encoding fails
 */
function marshalMockBadEvidence(o, lengthPrefixed = true) {
    const json = belt_1.jsonToBytes(o);
    return encodeType.encodeMockBadEvidence(json, lengthPrefixed);
}
exports.marshalMockBadEvidence = marshalMockBadEvidence;
