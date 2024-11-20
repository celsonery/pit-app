export default httpClient => ({
  register: async ({ name, email, password, password_confirmation }) => {
    const response = await httpClient.post('/auth/register', {
      name,
      email,
      password,
      password_confirmation
    })
    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  },

  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', {
      email,
      password
    })
    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  },

  user: async () => {
    const response = await httpClient.get('/auth/user')
    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }
    return {
      data: response.data,
      errors
    }
  }
})
