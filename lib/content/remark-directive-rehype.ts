import { visit } from "unist-util-visit"

/**
 * Remark plugin to map directives to custom rehype nodes.
 */
export function remarkDirectiveRehype() {
  return (tree: any) => {
    visit(tree, (node) => {
      // Directives: textDirective (:), leafDirective (::), containerDirective (:::)
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        const data = node.data || (node.data = {})
        const attributes = node.attributes || {}

        // Map it to a custom rehype element name like <custom-dropdown>
        data.hName = `custom-${node.name}`
        data.hProperties = { ...attributes }
      }
    })
  }
}
