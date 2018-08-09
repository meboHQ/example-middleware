const Mebo = require('mebo');

@Mebo.grant('web') // it's going to be available through a middleware: Get: http://localhost:8080/sum?a=1&b=2
@Mebo.register('sum')
class Sum  extends Mebo.Action{
  constructor(){
    super();
    this.createInput('a: numeric');
    this.createInput('b: numeric');
  }

  _perform(data){
    return Promise.resolve(data.a + data.b);
  }
}

module.exports = Sum;
