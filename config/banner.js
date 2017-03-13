var pack = require('../package.json')

module.exports = '/*!\n' + ' * ' + pack.name + ' v' + pack.version + '\n'
  + ' * (c) ' + new Date().getFullYear() + ' ' + pack.author.name + '\n'
  + ' * Released under the ' + pack.license + ' License.\n'
  + ' */'
