/**
 * Guess what!?
 * @param  {String}  text
 * @param  {Boolean} [debug=true]
 */
export const warn = function (text, debug = true) {
  if (!debug) {
    return
  }

  /* eslint-disable */
  console.warn(`[vue-i18n-utils] ${text}`)
  /* eslint-enable */
}
