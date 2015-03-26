 $(document).ready(function() {
    $.get(‘/assets/cards/10C.svg’, function(data) {
      $(‘.card’).html(data);
        $(‘#path7992′).click(function() {
           alert(‘You clicked the thingamabob!’);
        });
    });
  });
