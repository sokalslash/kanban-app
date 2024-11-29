module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'One interface for props in component',
      recommended: 'error',
    },
    schema: [],
  },
  create: function (context) {
    const array = []
    return {
      TSInterfaceDeclaration(node) {
        if (node.id.name.endsWith('Props')) {
          array.push(node.id.name)
        }
        if (array.length > 1) {
          context.report({
            node,
            message: 'One interface for props in component',
          })
        }
      },
    }
  },
}
