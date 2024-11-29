module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'props rules',
      recommended: 'error',
    },
    schema: [],
  },
  create: function (context) {
    return {
      JSXAttribute(node) {
        if (node.value && node.value.type === 'JSXExpressionContainer') {
          if (node.value.expression.type === 'Literal' && typeof node.value.expression.value === 'string') {
            context.report({
              node,
              message: 'not use {} in string prop',
            })
          }
          if (node.value.expression.value) {
            context.report({
              node: node.value.expression,
              message: 'not use true in prop',
            })
          }
        }
      },
    }
  },
}
