# MPL Noop Rust SDK

This crate provides a wrapper for invoking `mpl-noop`, which does nothing. Its primary use is circumventing log truncation when emitting application data by `invoke`-ing `spl-noop` with event data.

`mpl-noop` and this crate's implementation are targeted towards supporting [account-compression](../..) and may be subject to change.
