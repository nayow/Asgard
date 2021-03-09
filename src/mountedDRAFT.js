  mounted() {
    let tl2 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=100%"
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        // }
      }
    });
    // add animations and labels to the timeline
    tl2
      .from(".box p", { scale: 0.3, rotation: 45, autoAlpha: 0 })
      .from(".box", { backgroundColor: "#28a92b" })
      .to(".box", { rotation: 360 });
  }