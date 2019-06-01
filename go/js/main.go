package main

import (
	"github.com/gopherjs/gopherjs/js"
	"github.com/jordansexton/amino-js/go/src"
)

func main() {
	exports := js.Module.Get("exports")

	// @formatter:off
	// Bech32
	exports.Set("encodeBech32", src.EncodeBech32)
	exports.Set("decodeBech32", src.DecodeBech32)

	// Basic encoding
	exports.Set("encodeByte",      src.EncodeByte)
	exports.Set("encodeByteSlice", src.EncodeByteSlice)
	exports.Set("encodeInt8",      src.EncodeInt8)
	exports.Set("encodeInt16",     src.EncodeInt16)
	exports.Set("encodeInt32",     src.EncodeInt32)
	exports.Set("encodeInt64",     src.EncodeInt64)
	exports.Set("encodeVarint",    src.EncodeVarint)
	exports.Set("encodeUint8",     src.EncodeUint8)
	exports.Set("encodeUint16",    src.EncodeUint16)
	exports.Set("encodeUint32",    src.EncodeUint32)
	exports.Set("encodeUint64",    src.EncodeUint64)
	exports.Set("encodeUvarint",   src.EncodeUvarint)
	exports.Set("encodeFloat32",   src.EncodeFloat32)
	exports.Set("encodeFloat64",   src.EncodeFloat64)
	exports.Set("encodeBool",      src.EncodeBool)
	exports.Set("encodeString",    src.EncodeString)
	exports.Set("encodeTime",      src.EncodeTime)

	// Basic decoding
	exports.Set("decodeByte",      src.DecodeByte)
	exports.Set("decodeByteSlice", src.DecodeByteSlice)
	exports.Set("decodeInt8",      src.DecodeInt8)
	exports.Set("decodeInt16",     src.DecodeInt16)
	exports.Set("decodeInt32",     src.DecodeInt32)
	exports.Set("decodeInt64",     src.DecodeInt64)
	exports.Set("decodeVarint",    src.DecodeVarint)
	exports.Set("decodeUint8",     src.DecodeUint8)
	exports.Set("decodeUint16",    src.DecodeUint16)
	exports.Set("decodeUint32",    src.DecodeUint32)
	exports.Set("decodeUint64",    src.DecodeUint64)
	exports.Set("decodeUvarint",   src.DecodeUvarint)
	exports.Set("decodeFloat32",   src.DecodeFloat32)
	exports.Set("decodeFloat64",   src.DecodeFloat64)
	exports.Set("decodeBool",      src.DecodeBool)
	exports.Set("decodeString",    src.DecodeString)
	exports.Set("decodeTime",      src.DecodeTime)

	// Meta
	exports.Set("decodeDisambPrefixBytes", src.DecodeDisambPrefixBytes)
	exports.Set("nameToDisfix",            src.NameToDisfix)
	exports.Set("byteSliceSize",           src.ByteSliceSize)
	exports.Set("uvarintSize",             src.UvarintSize)
	exports.Set("varintSize",              src.VarintSize)

	// Typed encoding
	exports.Set("encodeMultiStoreProofOp",              src.EncodeMultiStoreProofOp)
	exports.Set("encodeIAVLAbsenceOp",                  src.EncodeIAVLAbsenceOp)
	exports.Set("encodeIAVLValueOp",                    src.EncodeIAVLValueOp)
	exports.Set("encodePrivKeyLedgerSecp256k1",         src.EncodePrivKeyLedgerSecp256k1)
	exports.Set("encodeInfo",                           src.EncodeInfo)
	exports.Set("encodeBIP44Params",                    src.EncodeBIP44Params)
	exports.Set("encodeLocalInfo",                      src.EncodeLocalInfo)
	exports.Set("encodeLedgerInfo",                     src.EncodeLedgerInfo)
	exports.Set("encodeOfflineInfo",                    src.EncodeOfflineInfo)
	exports.Set("encodeMultiInfo",                      src.EncodeMultiInfo)
	exports.Set("encodeMsg",                            src.EncodeMsg)
	exports.Set("encodeTx",                             src.EncodeTx)
	exports.Set("encodeAccount",                        src.EncodeAccount)
	exports.Set("encodeVestingAccount",                 src.EncodeVestingAccount)
	exports.Set("encodeBaseAccount",                    src.EncodeBaseAccount)
	exports.Set("encodeBaseVestingAccount",             src.EncodeBaseVestingAccount)
	exports.Set("encodeContinuousVestingAccount",       src.EncodeContinuousVestingAccount)
	exports.Set("encodeDelayedVestingAccount",          src.EncodeDelayedVestingAccount)
	exports.Set("encodeStdTx",                          src.EncodeStdTx)
	exports.Set("encodeMsgSend",                        src.EncodeMsgSend)
	exports.Set("encodeMsgMultiSend",                   src.EncodeMsgMultiSend)
	exports.Set("encodeMsgVerifyInvariant",             src.EncodeMsgVerifyInvariant)
	exports.Set("encodeMsgWithdrawDelegatorReward",     src.EncodeMsgWithdrawDelegatorReward)
	exports.Set("encodeMsgWithdrawValidatorCommission", src.EncodeMsgWithdrawValidatorCommission)
	exports.Set("encodeMsgSetWithdrawAddress",          src.EncodeMsgSetWithdrawAddress)
	exports.Set("encodeContent",                        src.EncodeContent)
	exports.Set("encodeMsgSubmitProposal",              src.EncodeMsgSubmitProposal)
	exports.Set("encodeMsgDeposit",                     src.EncodeMsgDeposit)
	exports.Set("encodeMsgVote",                        src.EncodeMsgVote)
	exports.Set("encodeTextProposal",                   src.EncodeTextProposal)
	exports.Set("encodeSoftwareUpgradeProposal",        src.EncodeSoftwareUpgradeProposal)
	exports.Set("encodeMsgIBCTransfer",                 src.EncodeMsgIBCTransfer)
	exports.Set("encodeMsgIBCReceive",                  src.EncodeMsgIBCReceive)
	exports.Set("encodeParameterChangeProposal",        src.EncodeParameterChangeProposal)
	exports.Set("encodeMsgUnjail",                      src.EncodeMsgUnjail)
	exports.Set("encodeMsgCreateValidator",             src.EncodeMsgCreateValidator)
	exports.Set("encodeMsgEditValidator",               src.EncodeMsgEditValidator)
	exports.Set("encodeMsgDelegate",                    src.EncodeMsgDelegate)
	exports.Set("encodeMsgUndelegate",                  src.EncodeMsgUndelegate)
	exports.Set("encodeMsgBeginRedelegate",             src.EncodeMsgBeginRedelegate)
	exports.Set("encodeBlockchainMessage",              src.EncodeBlockchainMessage)
	exports.Set("encodeBcBlockRequestMessage",          src.EncodeBcBlockRequestMessage)
	exports.Set("encodeBcBlockResponseMessage",         src.EncodeBcBlockResponseMessage)
	exports.Set("encodeBcNoBlockResponseMessage",       src.EncodeBcNoBlockResponseMessage)
	exports.Set("encodeBcStatusResponseMessage",        src.EncodeBcStatusResponseMessage)
	exports.Set("encodeBcStatusRequestMessage",         src.EncodeBcStatusRequestMessage)
	exports.Set("encodeConsensusMessage",               src.EncodeConsensusMessage)
	exports.Set("encodeNewRoundStepMessage",            src.EncodeNewRoundStepMessage)
	exports.Set("encodeNewValidBlockMessage",           src.EncodeNewValidBlockMessage)
	exports.Set("encodeProposalMessage",                src.EncodeProposalMessage)
	exports.Set("encodeProposalPOLMessage",             src.EncodeProposalPOLMessage)
	exports.Set("encodeBlockPartMessage",               src.EncodeBlockPartMessage)
	exports.Set("encodeVoteMessage",                    src.EncodeVoteMessage)
	exports.Set("encodeHasVoteMessage",                 src.EncodeHasVoteMessage)
	exports.Set("encodeVoteSetMaj23Message",            src.EncodeVoteSetMaj23Message)
	exports.Set("encodeVoteSetBitsMessage",             src.EncodeVoteSetBitsMessage)
	exports.Set("encodeWALMessage",                     src.EncodeWALMessage)
	exports.Set("encodeMsgInfo",                        src.EncodeMsgInfo)
	exports.Set("encodeTimeoutInfo",                    src.EncodeTimeoutInfo)
	exports.Set("encodeEndHeightMessage",               src.EncodeEndHeightMessage)
	exports.Set("encodePubKey",                         src.EncodePubKey)
	exports.Set("encodePrivKey",                        src.EncodePrivKey)
	exports.Set("encodePubKeyEd25519",                  src.EncodePubKeyEd25519)
	exports.Set("encodePrivKeyEd25519",                 src.EncodePrivKeyEd25519)
	exports.Set("encodePubKeySecp256k1",                src.EncodePubKeySecp256k1)
	exports.Set("encodePrivKeySecp256k1",               src.EncodePrivKeySecp256k1)
	exports.Set("encodePubKeyMultisigThreshold",        src.EncodePubKeyMultisigThreshold)
	exports.Set("encodeEvidenceMessage",                src.EncodeEvidenceMessage)
	exports.Set("encodeEvidenceListMessage",            src.EncodeEvidenceListMessage)
	exports.Set("encodeMempoolMessage",                 src.EncodeMempoolMessage)
	exports.Set("encodeTxMessage",                      src.EncodeTxMessage)
	exports.Set("encodePacket",                         src.EncodePacket)
	exports.Set("encodePacketPing",                     src.EncodePacketPing)
	exports.Set("encodePacketPong",                     src.EncodePacketPong)
	exports.Set("encodePacketMsg",                      src.EncodePacketMsg)
	exports.Set("encodePexMessage",                     src.EncodePexMessage)
	exports.Set("encodePexRequestMessage",              src.EncodePexRequestMessage)
	exports.Set("encodePexAddrsMessage",                src.EncodePexAddrsMessage)
	exports.Set("encodeRemoteSignerMsg",                src.EncodeRemoteSignerMsg)
	exports.Set("encodePubKeyRequest",                  src.EncodePubKeyRequest)
	exports.Set("encodePubKeyResponse",                 src.EncodePubKeyResponse)
	exports.Set("encodeSignVoteRequest",                src.EncodeSignVoteRequest)
	exports.Set("encodeSignedVoteResponse",             src.EncodeSignedVoteResponse)
	exports.Set("encodeSignProposalRequest",            src.EncodeSignProposalRequest)
	exports.Set("encodeSignedProposalResponse",         src.EncodeSignedProposalResponse)
	exports.Set("encodePingRequest",                    src.EncodePingRequest)
	exports.Set("encodePingResponse",                   src.EncodePingResponse)
	exports.Set("encodeTMEventData",                    src.EncodeTMEventData)
	exports.Set("encodeEventDataNewBlock",              src.EncodeEventDataNewBlock)
	exports.Set("encodeEventDataNewBlockHeader",        src.EncodeEventDataNewBlockHeader)
	exports.Set("encodeEventDataTx",                    src.EncodeEventDataTx)
	exports.Set("encodeEventDataRoundState",            src.EncodeEventDataRoundState)
	exports.Set("encodeEventDataNewRound",              src.EncodeEventDataNewRound)
	exports.Set("encodeEventDataCompleteProposal",      src.EncodeEventDataCompleteProposal)
	exports.Set("encodeEventDataVote",                  src.EncodeEventDataVote)
	exports.Set("encodeEventDataValidatorSetUpdates",   src.EncodeEventDataValidatorSetUpdates)
	exports.Set("encodeEventDataString",                src.EncodeEventDataString)
	exports.Set("encodeEvidence",                       src.EncodeEvidence)
	exports.Set("encodeDuplicateVoteEvidence",          src.EncodeDuplicateVoteEvidence)
	exports.Set("encodeMockGoodEvidence",               src.EncodeMockGoodEvidence)
	exports.Set("encodeMockRandomGoodEvidence",         src.EncodeMockRandomGoodEvidence)
	exports.Set("encodeMockBadEvidence",                src.EncodeMockBadEvidence)

	// Typed decoding
	exports.Set("decodeMultiStoreProofOp",              src.DecodeMultiStoreProofOp)
	exports.Set("decodeIAVLAbsenceOp",                  src.DecodeIAVLAbsenceOp)
	exports.Set("decodeIAVLValueOp",                    src.DecodeIAVLValueOp)
	exports.Set("decodePrivKeyLedgerSecp256k1",         src.DecodePrivKeyLedgerSecp256k1)
	exports.Set("decodeInfo",                           src.DecodeInfo)
	exports.Set("decodeBIP44Params",                    src.DecodeBIP44Params)
	exports.Set("decodeLocalInfo",                      src.DecodeLocalInfo)
	exports.Set("decodeLedgerInfo",                     src.DecodeLedgerInfo)
	exports.Set("decodeOfflineInfo",                    src.DecodeOfflineInfo)
	exports.Set("decodeMultiInfo",                      src.DecodeMultiInfo)
	exports.Set("decodeMsg",                            src.DecodeMsg)
	exports.Set("decodeTx",                             src.DecodeTx)
	exports.Set("decodeAccount",                        src.DecodeAccount)
	exports.Set("decodeVestingAccount",                 src.DecodeVestingAccount)
	exports.Set("decodeBaseAccount",                    src.DecodeBaseAccount)
	exports.Set("decodeBaseVestingAccount",             src.DecodeBaseVestingAccount)
	exports.Set("decodeContinuousVestingAccount",       src.DecodeContinuousVestingAccount)
	exports.Set("decodeDelayedVestingAccount",          src.DecodeDelayedVestingAccount)
	exports.Set("decodeStdTx",                          src.DecodeStdTx)
	exports.Set("decodeMsgSend",                        src.DecodeMsgSend)
	exports.Set("decodeMsgMultiSend",                   src.DecodeMsgMultiSend)
	exports.Set("decodeMsgVerifyInvariant",             src.DecodeMsgVerifyInvariant)
	exports.Set("decodeMsgWithdrawDelegatorReward",     src.DecodeMsgWithdrawDelegatorReward)
	exports.Set("decodeMsgWithdrawValidatorCommission", src.DecodeMsgWithdrawValidatorCommission)
	exports.Set("decodeMsgSetWithdrawAddress",          src.DecodeMsgSetWithdrawAddress)
	exports.Set("decodeContent",                        src.DecodeContent)
	exports.Set("decodeMsgSubmitProposal",              src.DecodeMsgSubmitProposal)
	exports.Set("decodeMsgDeposit",                     src.DecodeMsgDeposit)
	exports.Set("decodeMsgVote",                        src.DecodeMsgVote)
	exports.Set("decodeTextProposal",                   src.DecodeTextProposal)
	exports.Set("decodeSoftwareUpgradeProposal",        src.DecodeSoftwareUpgradeProposal)
	exports.Set("decodeMsgIBCTransfer",                 src.DecodeMsgIBCTransfer)
	exports.Set("decodeMsgIBCReceive",                  src.DecodeMsgIBCReceive)
	exports.Set("decodeParameterChangeProposal",        src.DecodeParameterChangeProposal)
	exports.Set("decodeMsgUnjail",                      src.DecodeMsgUnjail)
	exports.Set("decodeMsgCreateValidator",             src.DecodeMsgCreateValidator)
	exports.Set("decodeMsgEditValidator",               src.DecodeMsgEditValidator)
	exports.Set("decodeMsgDelegate",                    src.DecodeMsgDelegate)
	exports.Set("decodeMsgUndelegate",                  src.DecodeMsgUndelegate)
	exports.Set("decodeMsgBeginRedelegate",             src.DecodeMsgBeginRedelegate)
	exports.Set("decodeBlockchainMessage",              src.DecodeBlockchainMessage)
	exports.Set("decodeBcBlockRequestMessage",          src.DecodeBcBlockRequestMessage)
	exports.Set("decodeBcBlockResponseMessage",         src.DecodeBcBlockResponseMessage)
	exports.Set("decodeBcNoBlockResponseMessage",       src.DecodeBcNoBlockResponseMessage)
	exports.Set("decodeBcStatusResponseMessage",        src.DecodeBcStatusResponseMessage)
	exports.Set("decodeBcStatusRequestMessage",         src.DecodeBcStatusRequestMessage)
	exports.Set("decodeConsensusMessage",               src.DecodeConsensusMessage)
	exports.Set("decodeNewRoundStepMessage",            src.DecodeNewRoundStepMessage)
	exports.Set("decodeNewValidBlockMessage",           src.DecodeNewValidBlockMessage)
	exports.Set("decodeProposalMessage",                src.DecodeProposalMessage)
	exports.Set("decodeProposalPOLMessage",             src.DecodeProposalPOLMessage)
	exports.Set("decodeBlockPartMessage",               src.DecodeBlockPartMessage)
	exports.Set("decodeVoteMessage",                    src.DecodeVoteMessage)
	exports.Set("decodeHasVoteMessage",                 src.DecodeHasVoteMessage)
	exports.Set("decodeVoteSetMaj23Message",            src.DecodeVoteSetMaj23Message)
	exports.Set("decodeVoteSetBitsMessage",             src.DecodeVoteSetBitsMessage)
	exports.Set("decodeWALMessage",                     src.DecodeWALMessage)
	exports.Set("decodeMsgInfo",                        src.DecodeMsgInfo)
	exports.Set("decodeTimeoutInfo",                    src.DecodeTimeoutInfo)
	exports.Set("decodeEndHeightMessage",               src.DecodeEndHeightMessage)
	exports.Set("decodePubKey",                         src.DecodePubKey)
	exports.Set("decodePrivKey",                        src.DecodePrivKey)
	exports.Set("decodePubKeyEd25519",                  src.DecodePubKeyEd25519)
	exports.Set("decodePrivKeyEd25519",                 src.DecodePrivKeyEd25519)
	exports.Set("decodePubKeySecp256k1",                src.DecodePubKeySecp256k1)
	exports.Set("decodePrivKeySecp256k1",               src.DecodePrivKeySecp256k1)
	exports.Set("decodePubKeyMultisigThreshold",        src.DecodePubKeyMultisigThreshold)
	exports.Set("decodeEvidenceMessage",                src.DecodeEvidenceMessage)
	exports.Set("decodeEvidenceListMessage",            src.DecodeEvidenceListMessage)
	exports.Set("decodeMempoolMessage",                 src.DecodeMempoolMessage)
	exports.Set("decodeTxMessage",                      src.DecodeTxMessage)
	exports.Set("decodePacket",                         src.DecodePacket)
	exports.Set("decodePacketPing",                     src.DecodePacketPing)
	exports.Set("decodePacketPong",                     src.DecodePacketPong)
	exports.Set("decodePacketMsg",                      src.DecodePacketMsg)
	exports.Set("decodePexMessage",                     src.DecodePexMessage)
	exports.Set("decodePexRequestMessage",              src.DecodePexRequestMessage)
	exports.Set("decodePexAddrsMessage",                src.DecodePexAddrsMessage)
	exports.Set("decodeRemoteSignerMsg",                src.DecodeRemoteSignerMsg)
	exports.Set("decodePubKeyRequest",                  src.DecodePubKeyRequest)
	exports.Set("decodePubKeyResponse",                 src.DecodePubKeyResponse)
	exports.Set("decodeSignVoteRequest",                src.DecodeSignVoteRequest)
	exports.Set("decodeSignedVoteResponse",             src.DecodeSignedVoteResponse)
	exports.Set("decodeSignProposalRequest",            src.DecodeSignProposalRequest)
	exports.Set("decodeSignedProposalResponse",         src.DecodeSignedProposalResponse)
	exports.Set("decodePingRequest",                    src.DecodePingRequest)
	exports.Set("decodePingResponse",                   src.DecodePingResponse)
	exports.Set("decodeTMEventData",                    src.DecodeTMEventData)
	exports.Set("decodeEventDataNewBlock",              src.DecodeEventDataNewBlock)
	exports.Set("decodeEventDataNewBlockHeader",        src.DecodeEventDataNewBlockHeader)
	exports.Set("decodeEventDataTx",                    src.DecodeEventDataTx)
	exports.Set("decodeEventDataRoundState",            src.DecodeEventDataRoundState)
	exports.Set("decodeEventDataNewRound",              src.DecodeEventDataNewRound)
	exports.Set("decodeEventDataCompleteProposal",      src.DecodeEventDataCompleteProposal)
	exports.Set("decodeEventDataVote",                  src.DecodeEventDataVote)
	exports.Set("decodeEventDataValidatorSetUpdates",   src.DecodeEventDataValidatorSetUpdates)
	exports.Set("decodeEventDataString",                src.DecodeEventDataString)
	exports.Set("decodeEvidence",                       src.DecodeEvidence)
	exports.Set("decodeDuplicateVoteEvidence",          src.DecodeDuplicateVoteEvidence)
	exports.Set("decodeMockGoodEvidence",               src.DecodeMockGoodEvidence)
	exports.Set("decodeMockRandomGoodEvidence",         src.DecodeMockRandomGoodEvidence)
	exports.Set("decodeMockBadEvidence",                src.DecodeMockBadEvidence)
	// @formatter:on
}
