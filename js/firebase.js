window.onload = (event) => {
    var peersGrid = document.getElementById("peers_grid");//gets the peers grid so that dynamic HTML code can be appended to the web page.
    var selectionBlock = document.createElement("div");//this is the div block which will store the dynamic HTML code, and can be appended as a child to the peers grid.
    const app = firebase.app(); //connects the script to the firebase application.
    const db = firebase.firestore();//connects with the firestore database.

    /*  The following code queries the collection named 'Users' from the previously retrieved database.
        Which returns the promise from which we access the documents(profiles) to display them  on the page.
        The document returns the list of all the profiles, which will be iterated using for each loop and display individual profile on the webpage.
    */
    db.collection("Users")
        .get()//Query the collection users.
        .then(function (users) {
            //iterated over all the user profiles.
            users.forEach(function (doc) {
                user = doc.data();//stores the individual user profile into variable user.
                var HTMLBlock =
                    "<div class='selection " + user.Dicipline + " year" + user.Year + " " + user.University + "'>" +
                        "<figure>" +
                            "<svg enable-background='new 0 0 26 26' id='Слой_1'version='1.1'viewBox='0 0 26 26' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
                                "<path d='M25,13c0-6.6166992-5.3828125-12-12-12S1,6.3833008,1,13c0,3.383606,1.413208,6.4386597,3.673645,8.6222534  c0.0529175,0.0689087,0.1156006,0.1247559,0.1889648,0.171814C7.0038452,23.7769165,9.8582764,25,13,25  s5.9961548-1.2230835,8.1373901-3.2059326c0.0733643-0.0470581,0.1360474-0.1029053,0.1889648-0.171814  C23.586792,19.4386597,25,16.383606,25,13z M13,2.5c5.7900391,0,10.5,4.7104492,10.5,10.5  c0,2.4549561-0.8532715,4.7108154-2.2702637,6.5008545c-0.6505127-2.0978394-2.5076294-3.7401123-5.0281372-4.4957886  c1.3735962-0.9940796,2.2720337-2.6046143,2.2720337-4.4244995c0-3.0141602-2.4550781-5.4663086-5.4736328-5.4663086  s-5.4736328,2.4521484-5.4736328,5.4663086c0,1.8198853,0.8984375,3.4304199,2.2720337,4.4244995  c-2.5205078,0.7556763-4.3776245,2.3979492-5.0281372,4.4957886C3.3532715,17.7108154,2.5,15.4549561,2.5,13  C2.5,7.2104492,7.2099609,2.5,13,2.5z M9.0263672,10.5805664c0-2.1870117,1.7822266-3.9663086,3.9736328-3.9663086  s3.9736328,1.7792969,3.9736328,3.9663086S15.1914063,14.546875,13,14.546875S9.0263672,12.7675781,9.0263672,10.5805664z   M6.0307617,20.8319702C6.2562256,18.0820313,9.1723633,16.046875,13,16.046875s6.7437744,2.0351563,6.9692383,4.7850952  C18.1130981,22.4855347,15.6757202,23.5,13,23.5S7.8869019,22.4855347,6.0307617,20.8319702z' fill='#1D1D1B'/>" +
                            "</svg>" +
                        "</figure>" +
                        "<div class='selection_content'>" +
                            "<h2>" + user.Name + "</h2>" +
                            "<h3>Year " + user.Year + "</h3>" +
                            "<h3>" + user.Dicipline + "</h3>" +
                            "<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet natus quasi velit consequatur. </p>" +
                        "</div>" +
                        "<div class='selection_button'>" +
                            "<a href=''>" +
                                "<svg height='32px' id='Layer_1' style='enable-background: new 0 0 32 32' version='1.1' viewBox='0 0 32 32' width='32px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
                                "<path d='M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z'/>" +
                                "</svg>" +
                            "</a>" +
                        "</div>" +
                    "</div>";//This variable stores an HTML template which was created previously, and it gets the values of Name, Dicipline, and Year.
                selectionBlock.innerHTML += HTMLBlock; //This operation adds the HTMLBlock after every iteration, so that all the newly created profiles can be added to the webpage.
                peersGrid.appendChild(selectionBlock);//All the dynamically generated user profiles are added to the peers grid, reflecting on the weeb page.
            });
        });
};
