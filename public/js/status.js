var sp = new StatusPage.page({ page : '8g7xbc4zyc5l' });
  sp.components({
    success: function(data) {

            var index, len;
            for (index = 0, len = data.components.length; index < len; ++index) {

              if (data.components[index].name == "Web Hosting") {
                $('.status-description').text(data.components[index].status);
                $('.statusPage-widget').addClass(data.components[index].status);
                $('.status-page-name').text(data.components[index].name);
              }
            }

    }
  });  
