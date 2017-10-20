function startTheClimb() { 
    // POST to create new collection
    $.post(
        "/collection",
        $.param({
            "topLevelTargets": basecamp_mei_file
        })
    ).done(function(data, textStatus, xhr) { 
        // POST to collection's createAnnoStateUri
        createAnnoStateUri = $.parseHTML(data)[0].getAttribute("href");
        $.post(
            createAnnoStateUri
        ).done(function(data, textStatus, xhr) { 
            // open new annostate in viewer
            window.location.href = baseuri + "/viewer?annostate=" + xhr.getResponseHeader("Location");
        });
    });
}
