const HttpResponse = require('../helprs/http_response')

module.exports = class LoginRouter {
  constructor (authUseCase) {
    this.authUseCase = authUseCase
  }

  route (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return HttpResponse.badRequest('email')
      }
      if (!password) {
        return HttpResponse.badRequest('password')
      }
      const accessToken = this.authUseCase.auth(email, password)
      if (!accessToken) {
        return HttpResponse.anauthorizedErro()
      }
      return HttpResponse.ok({ accessToken })
    } catch (error) {
      // console.error(error)
      return HttpResponse.serverError()
    }
  }
}
