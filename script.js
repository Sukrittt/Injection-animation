const measureTimeline = gsap.timeline();

measureTimeline.from(".measurement-animation", {
  scaleY: 0,
  stagger: 0.3,
  repeat: -1,
  yoyo: true,
});

const starTimeline = gsap.timeline({
  defaults: { duration: 5, repeat: -1, yoyo: true },
});

starTimeline
  .to(".star-animation", { y: 75, rotate: 20 })
  .to(".injection", { y: 25, duration: 1 }, "-=5");

const injectionTimeline = gsap.timeline({
  defaults: { duration: 4, repeat: -1, yoyo: true },
});

injectionTimeline
  .to(".injection-animation", { x: -120 })
  .to(".handle-thin", { scaleX: 0 }, "-=4")
  .from(".thin-animation-2", { scaleX: 0, transformOrigin: "right" }, "-=4");

const bodyTimeline = gsap.timeline();
bodyTimeline.to(".injection-body", {
  scaleX: 0,
  duration: 4,
  repeat: -1,
  yoyo: true,
});
