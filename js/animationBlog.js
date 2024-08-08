/* ----------- revelar animação ----------- */
let sr = ScrollReveal({
    duration:2500,
    distance:"60px",
});

sr.reveal(".nav",{origin:"bottom", delay:600});
sr.reveal(".blog-header",{ origin:"left", delay:700});

sr.reveal("#animation-timeline",{ origin:"top", delay:700});

sr.reveal("#animation-responsive",{ origin:"top", delay:700});
sr.reveal("#animation-carrosel",{ origin:"left", delay:700});
sr.reveal(".services_container",{ origin:"top", delay:700});
sr.reveal(".footer",{ origin:"bottom", delay:700});