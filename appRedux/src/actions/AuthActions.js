export const editEmail = (email) => {
  return {
    type: 'EDIT_EMAIL',
    payload: {
      email: email
    }
  }
}

export const editPassword = (password) => {
  return {
    type: 'EDIT_PASSWORD',
    payload: {
      password: password
    }
  }
}