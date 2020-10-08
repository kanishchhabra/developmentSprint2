window.onload = (event) => {
    var projectsGrid = document.getElementById('projects_grid');
    var selectionBlock = document.createElement('div');
    const app = firebase.app();
    const db = firebase.firestore();
    db.collection('Projects')
        .get()
        .then(function (projects) {
            projects.forEach(function (doc) {
                project = doc.data();
                console.log(project);
                var HTMLBlock =
                "<div class='selection project_selection'>"+
                "<figure class='project_figure'>"+
                  "<svg id='Layer_1' style='enable-background: new 0 0 50 50' version='1.1' viewBox='0 0 50 50' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>"+
                    "<g id='Layer_1_1_'>"+
                      "<path d='M1,43h48V7H1V43z M3,41v-7.586l11-11l10,10l17-17l6,6V41H3z M47,9v9.586l-6-6l-17,17l-10-10l-11,11V9H47z'/>"+
                      "<path d='M24,22c2.757,0,5-2.243,5-5s-2.243-5-5-5s-5,2.243-5,5S21.243,22,24,22z M24,14c1.654,0,3,1.346,3,3s-1.346,3-3,3   s-3-1.346-3-3S22.346,14,24,14z'/>"+
                    "</g>"+
                  "</svg>"+
                "</figure>"+
                "<div class='selection_content'>"+
                  "<h2>"+project.Name+"</h2>"+
                  "<h3>"+project.Discipline+"</h3>"+
                  "<h3>"+project.University+"</h3>"+
                  "<p>"
                    +project.Description+
                  "</p>"+
                "</div>"+
                "<div class='engagements'>"+
                  "<a href=''>"+
                    "<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>"+
                      "<title />"+
                      "<g data-name='1' id='_1'>"+
                        "<path d='M348.45,432.7H261.8a141.5,141.5,0,0,1-49.52-8.9l-67.5-25.07a15,15,0,0,1,10.45-28.12l67.49,25.07a111.79,111.79,0,0,0,39.08,7h86.65a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30H368.9a14.21,14.21,0,1,0,0-28.42,15,15,0,0,1,0-30h20.44a14.21,14.21,0,0,0,10.05-24.26,14.08,14.08,0,0,0-10.05-4.16,15,15,0,0,1,0-30h20.45a14.21,14.21,0,0,0,10-24.26,14.09,14.09,0,0,0-10-4.17H268.15A15,15,0,0,1,255,176.74a100.2,100.2,0,0,0,9.2-29.33c3.39-21.87-.79-41.64-12.42-58.76a12.28,12.28,0,0,0-22.33,7c.49,51.38-23.25,88.72-68.65,108a15,15,0,1,1-11.72-27.61c18.72-8,32.36-19.75,40.55-35.08,6.68-12.51,10-27.65,9.83-45C199.31,77,211,61,229.18,55.34s36.81.78,47.45,16.46c24.71,36.36,20.25,74.1,13.48,97.21H409.79a44.21,44.21,0,0,1,19.59,83.84,44.27,44.27,0,0,1-20.44,58.42,44.27,44.27,0,0,1-20.45,58.43,44.23,44.23,0,0,1-40,63Z'/>"+
                        "<path d='M155,410.49H69.13a15,15,0,0,1-15-15V189.86a15,15,0,0,1,15-15H155a15,15,0,0,1,15,15V395.49A15,15,0,0,1,155,410.49Zm-70.84-30H140V204.86H84.13Z'/>"+
                      "</g>"+
                    "</svg>"+
                    "<caption>"+
                      "Like"+
                    "</caption>"+
                  "</a>"+
                  "<a href=''>"+
                    "<svg id='Outlined' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>"+
                      "<title />"+
                      "<g id='Fill'>"+
                        "<path d='M26,12H24V6a3,3,0,0,0-3-3H6A3,3,0,0,0,3,6V24.41l5.12-5.12A1.05,1.05,0,0,1,8.83,19H12v3a3,3,0,0,0,3,3h8.17a1.05,1.05,0,0,1,.71.29L29,30.41V15A3,3,0,0,0,26,12ZM12,15v2H8.83a3,3,0,0,0-2.12.88L5,19.59V6A1,1,0,0,1,6,5H21a1,1,0,0,1,1,1v6H15A3,3,0,0,0,12,15ZM27,25.59l-1.71-1.71A3,3,0,0,0,23.17,23H15a1,1,0,0,1-1-1V15a1,1,0,0,1,1-1H26a1,1,0,0,1,1,1Z'/>"+
                      "</g>"+
                    "</svg>"+
                    "<caption>"+
                      "Comment"+
                    "</caption>"+
                  "</a>"+
                  "<a href=''>"+
                    "<svg height='32px' id='Layer_1' style='enable-background: new 0 0 32 32' version='1.1' viewBox='0 0 32 32' width='32px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>"+
                      "<path d='M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z'/>"+
                    "</svg>"+
                    "<caption>"+
                      "Join"+
                    "</caption>"+
                  "</a>"+
                  "<a href=''>"+
                    "<svg style='enable-background: new 0 0 64 64' version='1.1' viewBox='0 0 64 64' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>"+
                     " <style type='text/css'>"+
                        ".st0 {fill: black;}"+
                      "</style>"+
                      "<g id='GUIDES_64' />"+
                      "<g id='Layer_3' />"+
                      "<g id='Layer_2'>"+
                        "<path class='st0' d='M56.4,8.2l-51.2,20c-1.7,0.6-1.6,3,0.1,3.5l9.7,2.9c2.1,0.6,3.8,2.2,4.4,4.3l3.8,12.1c0.5,1.6,2.5,2.1,3.7,0.9   l5.2-5.3c0.9-0.9,2.2-1,3.2-0.3l11.5,8.4c1.6,1.2,3.9,0.3,4.3-1.7l8.7-41.8C60.4,9.1,58.4,7.4,56.4,8.2z M50,17.4L29.4,35.6   c-1.1,1-1.9,2.4-2,3.9c-0.2,1.5-2.3,1.7-2.8,0.3l-0.9-3c-0.7-2.2,0.2-4.5,2.1-5.7l23.5-14.6C49.9,16.1,50.5,16.9,50,17.4z'/>"+
                      "</g>"+
                    "</svg>"+
                    "<caption>"+
                      "Direct"+
                    "</caption>"+
                  "</a>"+
                  "<a href=''>"+
                    "<svg enable-background='new 0 0 26 26' id='Слой_1' version='1.1' viewBox='0 0 26 26' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>"+
                      "<path d='M24.9628906,10.2412109C24.875,9.9697266,24.640625,9.7714844,24.3574219,9.7304688l-7.3828125-1.0732422  l-3.3017578-6.6943359c-0.2539063-0.5117188-1.0917969-0.5117188-1.3457031,0L9.0253906,8.6572266L1.6425781,9.7304688  C1.359375,9.7714844,1.125,9.9697266,1.0371094,10.2412109c-0.0888672,0.2714844-0.0146484,0.5693359,0.1894531,0.7685547  l5.3427734,5.2109375L5.3076172,23.578125C5.2597656,23.859375,5.375,24.1445313,5.6064453,24.3115234  c0.2294922,0.1689453,0.5351563,0.1894531,0.7900391,0.0576172L13,20.8955078l6.6035156,3.4736328  c0.1103516,0.0576172,0.2304688,0.0859375,0.3496094,0.0859375c0.0068359,0.0009766,0.0146484,0.0009766,0.0195313,0  c0.4150391,0,0.75-0.3359375,0.75-0.75c0-0.1035156-0.0205078-0.203125-0.0585938-0.2929688l-1.2333984-7.1914063  l5.3427734-5.2109375C24.9775391,10.8105469,25.0517578,10.5126953,24.9628906,10.2412109z M18.1015625,15.421875  c-0.1767578,0.1728516-0.2578125,0.4208984-0.2158203,0.6640625l1.0712891,6.2480469l-5.6074219-2.9501953  C13.2402344,19.3261719,13.1201172,19.2978516,13,19.2978516s-0.2402344,0.0283203-0.3496094,0.0859375l-5.6074219,2.9501953  l1.0712891-6.2480469c0.0419922-0.2431641-0.0390625-0.4912109-0.2158203-0.6640625l-4.5371094-4.4257813l6.2695313-0.9111328  c0.2451172-0.0351563,0.4560547-0.1894531,0.5654297-0.4101563L13,3.9902344l2.8037109,5.6845703  c0.109375,0.2207031,0.3203125,0.375,0.5654297,0.4101563l6.2695313,0.9111328L18.1015625,15.421875z' fill='#1D1D1B'/>"+
                    "</svg>"+
                    "<caption>"+
                      "Favorite"+
                    "</caption>"+
                  "</a>"+
                "</div>"+
              "</div>";
                selectionBlock.innerHTML += HTMLBlock;
                projectsGrid.appendChild(selectionBlock);
            });
        });
};
