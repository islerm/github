/** @babel */

export default class FileDiff {
  constructor (oldPath, newPath, status, hunks) {
    this.oldPath = oldPath
    this.newPath = newPath
    this.status = status
    this.hunks = hunks
  }

  getOldPath () {
    return this.oldPath
  }

  getNewPath () {
    return this.newPath
  }

  getStatus () {
    return this.status
  }

  getHunks () {
    return this.hunks
  }

  toString () {
    return this.getHunks().map(h => h.toString()).join('\n')
  }
}