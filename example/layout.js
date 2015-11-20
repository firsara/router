define(['hbs!views/header', 'hbs!views/content', 'jquery'], function(header, content, $){
  return {
    header: $(header()),
    content: $(content())
  };
});
