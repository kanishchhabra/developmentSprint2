$(document).ready(function () {
  var filterList1 = document.querySelectorAll(".filter_options1");//gets all the filters from filter options list 1
  var filterList2 = document.querySelectorAll(".filter_options2");//gets all the filters from filter options list 2
  var filteredList1 = [];//this will store the the filtered options from filter list 1
  var filteredList2 = [];//this will store the the filtered options from filter list 2

  /*
    The following function creates functionality to display only the profiles which matches to the selected filters.
    The logic behind this is to display the all the profiles which matches either of the filters from list1 and either of the filters from list2.
  */
  function applyingFilters() {
    for (let i = 0; i < filterList1.length; i++) {
      const filter = filterList1[i];
      if (filter.checked) {
        $(".selection").hide();//hides the existing selections
        filteredList1.push("." + filter.getAttribute("id"));/*this basically puts the . followed by the id name because id names of the filters and class names of the selections are same.
        This helps to select only those selections with the same class names as the filter's id name using jQuery.*/
      }
    }//iterates through the filter options list 1 and pushes only the checked filters to the filtered list 1 array.
    for (let i = 0; i < filterList2.length; i++) {
      const filter = filterList2[i];
      if (filter.checked) {
        $(".selection").hide();//hides the existing selections
        filteredList2.push("." + filter.getAttribute("id"));/*this basically puts the . followed by the id name because id names of the filters and class names of the selections are same.
        This helps to select only those selections with the same class names as the filter's id name using jQuery.*/
      }
    }////iterates through the filter options list 2 and pushes only the checked filters to the filtered list 2 array.

    /*
      Following if else statements basically determine which algorithm to follow for filtering results depending upon the selected filters.
      This is so because in order to properly filter the results, the filtered profiles must either of the selected filters from list 1 && either of the selected filters from list 2.
    */
    if ((filteredList1.length > 0) && (filteredList2.length > 0)) {
      filteredList1.forEach(filter1 => {
        filteredList2.forEach(filter2 => {
          $(filter1 + filter2).show();
        });
      });//this algorithm will be followed if the filters are selected from both the lists
    }
    else if (filteredList1.length <= 0) {
      filteredList2.forEach(filter2 => {
        $(filter2).show();
      });
    }// this algorithm will be followed is no filter is selected from filter list 1
    else {
      filteredList1.forEach(filter1 => {
        $(filter1).show();
      });
    } // this algorithm will be followed is no filter is selected from filter list 2

    $("#filters").hide();
    $("#filter_button").show();

    filteredList1 = [];//resets the filtered list.
    filteredList2 = [];//resets the filtered list.
  }

  $("#filters_apply").click(function () {
    applyingFilters();
  });//when the apply button is clicked, it calls the appltying filters functions defined above.

  $("#filter_heading1").click(function () {
    $("#filter_list1").slideToggle();
  });
  $("#filter_heading2").click(function () {
    $("#filter_list2").slideToggle();
  });
  $("#filter_heading3").click(function () {
    $("#filter_list3").slideToggle();
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
