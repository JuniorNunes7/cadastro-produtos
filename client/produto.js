import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './produto.html';

var produtos
Template.hello.onCreated(function helloOnCreated() {
  // Declara uma variavel reativa com o valor: "array vazio"
  //produtos = new ReactiveVar( [] )
});

Template.hello.helpers({
  produtos() {
    return Produto.find()
  }
});

Template.hello.events({
  'click #add'() {
    let element = document.querySelector('#name')
    // Pega valor do campo com id NAME
    let data = element.value
    
    // Pego o array produtos
    // let produtosNovo = produtos.get()

    // Adiciona um novo produto no array
    // produtosNovo.push({ name: data })

    // Insere o novo valor na variavel reativa (produtos)
    // produtos.set( produtosNovo )

    // Chama a função add no servidor (que vai adicionar um elemento no collection produtos)
    Meteor.call('add', data)

    element.value = ''
  },

  'click .remove'() {
    /**
     * e = evento do javascript (ou seja, click)
     * e.target = Elemento clicado
     * e.target.dataset = os atributos "data" do elemento
     * e.target.dataset.index = index definido na view
     */
    // let index = e.target.dataset.index

    // let produtosNovo = produtos.get()

    // Remove o elemento do array correpondente ao index passado, 
    // o segundo argumento é a quantidade de elementos a serem removidos
    // produtosNovo.splice(index, 1)

    // produtos.set(produtosNovo)
    Meteor.call('remove', this._id)
  },

  'keydown #name'(e) {
    if(e.keyCode == 13) {
      document.querySelector('#add').click()
    }
  }



});
