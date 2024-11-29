const path = require('path')

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: '"Props" suffix for interface names related to component props',
      recommended: 'error',
    },
    fixable: 'code',
    schema: [],
  },
  create: function (context) {
    return {
      TSInterfaceDeclaration(node) {
        const filename = context.getFilename()
        const fileExtension = path.extname(filename)
        if (!node.id.name.endsWith('Props') && fileExtension === '.tsx') {
          context.report({
            node,
            message: '"Props" suffix for interface names related to component props',
            fix(fixer) {
              return fixer.replaceText(node.id, `${node.id.name}Props`)
            },
          })
        }
      },
    }
  },
}
