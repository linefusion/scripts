#!/usr/bin/env sh

INSTALL_SOURCE=${1:-${INSTALL_SOURCE:-"https://github.com/linefusion/scripts"}}
INSTALL_LOCATION=${INSTALL_LOCATION:-"https://l8n.sh"}
INSTALL_PREFIX=${INSTALL_PREFIX:-""}
INSTALL_ARGS=(${INSTALL_ARGS:-""})

deno install --force ${INSTALL_ARGS[@]} --location "${INSTALL_LOCATION}/kv" --name ${INSTALL_PREFIX}kv "${INSTALL_SOURCE}/kv.ts"

