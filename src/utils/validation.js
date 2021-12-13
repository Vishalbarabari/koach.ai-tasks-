export function validateEmail(mail) {
    const regex = /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,15}$/
    if (regex.test(mail)) {
      return true
    }
    return false
  }