$(document).ready(function () {
  $("#header_options").click(function () {
    alert(
      "This button shows the options which allows users to access other fearures of the app."
    );
  });
  $("#header_search").click(function () {
    alert(
      "This is the search bar allowing users to serach other users, projects, events, etc within the app."
    );
  });
  $("#header_profile").click(function () {
    alert(
      "This is the profile option allowing users to access profile settings and features in the app."
    );
  });
  $("#newsfeed").click(function () {
    alert(
      "This is the newsfeed button allowing users to see their daily social feed of their connections in the app."
    );
  });
  $("#direct").click(function () {
    alert(
      "This is the direct message option allowing users to personally chat with other users in the app."
    );
  });
  $("#filters_apply_fudge").click(function () {
    alert(
      "This will apply the selected filters to the page and show the listing relevant to the selected filters."
    );
    $("#filters").hide();
    $("#filter_button").show();
  })
  $("#filters_reset_fudge").click(function () {
    alert("This will uncheck all the filters and show the original listing.");
    $("#filters").hide();
    $("#filter_button").show();
  });
  $("#create_post").click(function () {
    alert("Creates the new project/post");
  });
});
