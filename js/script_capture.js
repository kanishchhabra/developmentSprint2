window.onload = (event) => {
  var postForm = document.getElementById('post_form');
  function capture() {
    var width = 360;
    var height = 0;

    var streaming = false;

    var video = null;
    var canvas = null;
    var photo = null;
    var startbutton = null;
    var resetbutton = null;

    function startup() {
      video = document.getElementById("video");
      canvas = document.getElementById("canvas");
      photo = document.getElementById("photo");
      startbutton = document.getElementById("startbutton");
      resetbutton = document.getElementById("resetbutton");
      output = document.getElementById("photo_output");

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(function (stream) {
          video.srcObject = stream;
          video.play();
        })
        .catch(function (err) {
          console.log("An error occurred: " + err);
        });
      video.addEventListener(
        "canplay",
        function (evt) {
          if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);

            video.setAttribute("width", width);
            video.setAttribute("height", height);
            canvas.setAttribute("width", width);
            canvas.setAttribute("width", width);
            streaming = true;
          }
        },
        false
      );
      startbutton.addEventListener(
        "click",
        function (evt) {
          takepicture();
          evt.preventDefault();

          resetbutton.setAttribute("style", "display: unset");
          startbutton.setAttribute("style", "display: none");

          output.setAttribute("style", "display: unset");
          video.setAttribute("style", "display: none");
        },
        false
      );
      resetbutton.addEventListener(
        "click",
        function (evt) {
          resetbutton.setAttribute("style", "display: none");
          startbutton.setAttribute("style", "display: unset");

          output.setAttribute("style", "display: none");
          video.setAttribute("style", "display: unset");
        },
        false
      );
      clearphoto();
    }
    function clearphoto() {
      var context = canvas.getContext("2d");
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, canvas.width, canvas.height);

      var data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);
    }
    function takepicture() {
      var context = canvas.getContext("2d");
      if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        var data = canvas.toDataURL("image/png");
        photo.setAttribute("src", data);
      } else {
        clearphoto();
      }
    }
    startup();
  }
  function createProject() {
    var name = document.getElementById('project_name');
    var discipline = document.getElementById('discipline');
    var description = document.getElementById('project_description');
    var university = document.getElementById('university');

    const app = firebase.app();
    const db = firebase.firestore();
    console.log(name.value);
    console.log(discipline.value);
    console.log(description.value);
    console.log(university.value);
    db.collection('Projects')
      .add({
        Name: "" + name.value,
        Description: "" + description.value,
        Discipline: "" + discipline.value,
        University: "" + university.value,
      })
  }
  capture();
  $("#create_post").click(function () {
    createProject();
  });
}
