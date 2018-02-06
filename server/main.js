import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {  

  Meteor.methods({
    // Adiciona produto
    'add'(produto) {

      Produto.insert({name: produto})
    },

    // Remove produto
    'remove'(produto) {

      Produto.remove(produto)
    }
  })

});