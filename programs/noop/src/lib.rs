use solana_program::{
    account_info::AccountInfo, declare_id, entrypoint::ProgramResult, instruction::Instruction,
    pubkey::Pubkey,
};

declare_id!("mnoopTCrg4p8ry25e4bcWA9XZjbNjMTfgYVGGEdRsf3");

#[cfg(not(feature = "no-entrypoint"))]
solana_program::entrypoint!(noop);

pub fn noop(
    _program_id: &Pubkey,
    _accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    Ok(())
}

pub fn instruction(data: Vec<u8>) -> Instruction {
    Instruction {
        program_id: crate::id(),
        accounts: vec![],
        data,
    }
}
