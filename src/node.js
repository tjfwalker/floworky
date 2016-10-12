// @flow
class Node {
  item: ?Object
  children: Array<Object>
  constructor( item : ?Object = null ) {
    this.item = item
    this.children = []
  }

  insert( node ) {
    if( this.item.id === node.item.parent_id ) {
      this.children.push( node )
    } else {
      this.children.find( child => {
        return child.item.id === node.item.parent_id
      }).insert( node )
    }
  }
}

module.exports = Node
