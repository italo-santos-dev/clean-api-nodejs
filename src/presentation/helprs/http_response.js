const MissingParamError = require('./missing_param_error')
const AnauthorizedErro = require('./anauthorized_error')
const ServerError = require('./server_error')

module.exports = class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }

  static anauthorizedErro () {
    return {
      statusCode: 401,
      body: new AnauthorizedErro()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
