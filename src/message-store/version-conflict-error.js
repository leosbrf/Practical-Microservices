function VersionConflictError (stream, expected, actual) {
    Error.captureStackTrace(this, this.constructor)
    const message = [
        'VersionConflict: stream',
        stream,
        'expected version',
        expected,
        'but was at version',
        actual
    ].join(' ')
}

VersionConflictError.prototype = Object.create(Error.prototype)
VersionConflictError.prototype.constructor = VersionConflictError

module.exports = VersionConflictError