$(document).ready(function () {
  var filterList1 = document.querySelectorAll(".filter_options1");//gets all the filters from filter options list 1
  console.log(filterList1);
  var filteredList1 = [];//this will store the the filtered options from filter list 1

  /*
    The following function creates functionality to display only the profiles which matches to the selected filters.
  */
  function applyingFilters() {
    for (let i = 0; i < filterList1.length; i++) {
      const filter = filterList1[i];
      if (filter.checked) {
        $(".selection").hide();//hides the existing selections
        filteredList1.push("." + filter.getAttribute("id"));
        /*this basically puts the . followed by the id name because id names of the filters and class names of the selections are same.
        This helps to select only those selections with the same class names as the filter's id name using jQuery.*/
      }
    }//iterates through the filter options list 1 and pushes only the checked filters to the filtered list 1 array.
    console.log(filteredList1);

    filteredList1.forEach(filter1 => {
      $(filter1).show();
    });//this algorithm will be followed to show the filtered results.

    $("#filters").hide();
    $("#filter_button").show();

    filteredList1 = [];//resets the filtered list.
  }

  $("#filters_apply").click(function () {
    applyingFilters();
  });//when the apply button is clicked, it calls the appltying filters functions defined above.

  $("#filter_heading1").click(function () {
    $("#filter_list1").slideToggle();
  });
  $("#filters_reset").click(function () {
    $("#filters").hide();
    $("#filter_button").show();
    $(".selection").show();
  });
  $("#close_filters").click(function () {
    $("#filters").hide();
    $("#filter_button").show();
  });
  $("#filter_button").click(function () {
    $("#filters").show();
    $("#filter_button").hide();
  });
});
