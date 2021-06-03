module.exports = class AnauthorizedErro extends Error {
    constructor (paramName) {
      super(`AnauthorizedErro`)
      this.name = 'AnauthorizedErro'
    }
  } 