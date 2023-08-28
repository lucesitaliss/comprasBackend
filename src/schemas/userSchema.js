const zod = require('zod')

const postUser = zod.object({
  name: zod.string(),
  password: zod.string(),
})

const validationPostUser = (userCredentials) => {
  return postUser.safeParse(userCredentials)
}

const updateUser = zod.object({
  user: zod.string(),
  id: zod.number().int().positive(),
})

const validationUpdateUser = (user) => {
  return updateUser.safeParse(user)
}

module.exports = {
  validationPostUser,
  validationUpdateUser,
}
