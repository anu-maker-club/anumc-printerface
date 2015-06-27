#!/usr/bin/env sh

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    echo You need to source this script'!' Running it by itself won\'t help.
fi

export PATH=.cabal-sandbox/bin:$PATH
