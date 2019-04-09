'use strict'

const Controller = require('trails/controller')

module.exports = class ViewController extends Controller {
  helloWorld(req, res) {
    res.status(200).send('Hello Trails.js !')
  }

  login(req,res){
    return res.sendFile('login.html', {root: './public'});
  }

  home(req,res){
    return res.sendFile('home.html', {root: './public'});
  }
}
