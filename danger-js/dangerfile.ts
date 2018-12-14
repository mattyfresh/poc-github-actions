// @ts-ignore
import { danger, fail } from "danger"

const {
    pr: { title, body, head },
} = danger.github

const { modified_files } = danger.git

// ensure PR has a title and a description
if (body === '' || title === '' || body.length < 10) {
    fail(
        'Pull Requests require both a title and a description with meaningful content, please update your PR'
    )
}

const currentBranch = head.ref

const isRelease = currentBranch.startsWith('release/')

if (isRelease) {
    // ensure the CHANGELOG was updated
    // @ts-ignore
    if (!includes(modified_files, 'CHANGELOG.md')) {
        fail('All release branches require an update to `CHANGELOG.md`')
    }

    // ensure semver format like: `release/1.2.3`
    const semverMatch = /release\/\d\.\d\.\d$/.exec(currentBranch)
    const isSemverCompliant = semverMatch !== null
    if (!isSemverCompliant) {
        fail(
            '`release` branches must be in the format: `release/MAJOR.MINOR.PATCH`'
        )
    }
}
