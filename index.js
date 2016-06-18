var koa = require('koa');
var app = koa();

app.use(function *() {
  this.body = 'hello, world';
});

app.listen(process.env.PORT || 8080);
