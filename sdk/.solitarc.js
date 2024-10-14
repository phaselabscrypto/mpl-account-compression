// @ts-check
const path = require('path');
const programDir = path.join(__dirname, '..', 'programs', 'account-compression');
const idlDir = path.join(__dirname, 'idl');
const sdkDir = path.join(__dirname, 'src', 'generated');
const binaryInstallDir = path.join(__dirname, '..', 'target', 'solita');

module.exports = {
    idlGenerator: 'anchor',
    programName: 'mpl_account_compression',
    programId: 'mcmt6YrQEMKw8Mw43FmpRLmf7BqRnFMKmAcbxE3xkAW',
    idlDir,
    sdkDir,
    binaryInstallDir,
    programDir,
};
