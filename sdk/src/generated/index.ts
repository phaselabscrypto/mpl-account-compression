import { PublicKey } from '@solana/web3.js'
export * from './errors'
export * from './instructions'

/**
 * Program address
 *
 * @category constants
 * @category generated
 */
export const PROGRAM_ADDRESS = 'mcmt6YrQEMKw8Mw43FmpRLmf7BqRnFMKmAcbxE3xkAW'

/**
 * Program public key
 *
 * @category constants
 * @category generated
 */
export const PROGRAM_ID = new PublicKey(PROGRAM_ADDRESS)
