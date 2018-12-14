#!/bin/sh -l

set -eu

# Install danger cli on the machine
yarn global add danger

# Run danger
danger --dangerfile "mattyfresh/poc-github-actions/danger-js/dangerfile.ts" ci