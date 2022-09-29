var scroll,
  handleDrag,
  sliderDrag,
  digitalLines,
  digitalLineScroll,
  heroHead,
  serviceBoxWrapper,
  servicesDraggerKnob,
  serviceBoxWidth,
  partSlider = $(".partSlider"),
  progressBarIndex = 0,
  time = 1,
  tick,
  percentTime,
  pageWidth = $(window).width(),
  pageHeight = $(window).height(),
  $status = $(".pagingInfo"),
  circleTl = new TimelineLite({ paused: true }),
  whoWeAreHeading = new TimelineLite({ paused: true }),
  innerHeadingAni = new TimelineLite({ paused: true }),
  contactTl = gsap.timeline({ paused: true }),
  contactTl2 = gsap.timeline({ paused: true }),
  $clientHeading = $(".animate-heading, .popup-heading, .hero-heading"),
  mySplitText = new SplitText($clientHeading, { type: "chars" }),
  partnerLogos = new TimelineLite({ paused: true }),
  pageLoad = gsap.timeline({ paused: true }),
  mPageLoad = gsap.timeline({ paused: true }),
  contactDrag,
  contactIntervalTL,
  elements = document.querySelectorAll(".rolling-text"),
  partnerLogosSlider,
  whoWeAreTextSlider,
  objectiveSlider = $(".objective-slider"),
  iphoneSlider = $(".iphone-slider"),
  prevPage = new TimelineLite({ paused: true }),
  menuAnimation = new TimelineLite({ paused: true }),
  menuItemImages = new TimelineLite({ paused: true }),
  gllApp,
  splitImgs =
    $(".caseStudyBg").length &&
    $(".caseStudyBg").attr("data-images").split(","),
  memberAnimate = new TimelineLite({ paused: true }),
  diamondText = $(".cText, .mText, .dText, .dRightTxt");
var isLaptop = function () {
  return $(window).width() > 1199.98;
};
var isPhone = function () {
  return $(window).width() < 575;
};
function generatePixiCanvas(objName, img) {
  if ($(".caseStudyBg").length) {
    gllApp = new PIXI.Application({
      //autoResize: true,
      resolution: devicePixelRatio,
      backgroundColor: 0x191817,
      antialias: true,
      width: $(window).width(),
      height: $(window).height(),
    });
    $(".caseStudyBg").append(gllApp.view);
    const radius = 180;
    const blurSize = 4;
    gllApp.loader.add(objName, img);
    gllApp.loader.load(setup);

    function setup(loader, resources) {
      var textures = [];
      splitImgs.forEach(function (item, index) {
        textures.push(PIXI.Texture.from(item));
      });
      const background = new PIXI.Sprite(textures[0]);
      gllApp.stage.addChild(background);
      background.width = gllApp.screen.width;
      background.height = gllApp.screen.height;

      const circle = new PIXI.Graphics()
        .beginFill(0xff0000)
        .drawCircle(radius + blurSize, radius + blurSize, radius)
        .endFill();
      circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

      const bounds = new PIXI.Rectangle(
        0,
        0,
        (radius + blurSize) * 2,
        (radius + blurSize) * 2
      );
      const texture = gllApp.renderer.generateTexture(
        circle,
        PIXI.SCALE_MODES.NEAREST,
        10,
        bounds
      );
      const focus = new PIXI.Sprite(texture);

      gllApp.stage.addChild(focus);
      background.mask = focus;

      gllApp.stage.interactive = true;
      gllApp.stage.on("mousemove", pointerMove);

      function pointerMove(event) {
        focus.position.x = event.data.global.x - focus.width / 2;
        focus.position.y = event.data.global.y - focus.height / 2;
      }

      $(document).on("changePixiTexture", function (e, param) {
        background.texture = textures[param];
      });
    }

    // Listen for window resize events
    window.addEventListener("resize", resize);

    // Resize function window
    function resize() {
      gllApp.renderer.resize(window.innerWidth, window.innerHeight);
    }

    resize();
  }
}

function animateElements() {
  if ($(".animate").length > 0) {
    $(".animate").bind("inview", function (event, isInView) {
      if (isInView) {
        var animate = $(this).attr("data-animation");
        var speedDuration = $(this).attr("data-duration");
        var $t = $(this);
        setTimeout(function () {
          $t.addClass(animate + " animated");
        }, speedDuration);
      }
    });
  }
}

/* IE Popup Start */
function iePopup() {
  if ($("html").hasClass("ie")) {
    $("#iePopup").modal("show");
  }
}

/* IE Popup End */

/* Circle Animation Start */
function circleAnimation() {
  // scroll.stop();
  if (!$("html").hasClass("cont-scroll")) {
    scroll.scrollTo(".client-section", 0, 1000);
  }
  setTimeout(function () {
    circleTl.play();
  }, 300);
}

/* Circle Animation End */

/* Circle Animation Start */
function textLeftAnimate() {
  if ($(".who-we-are-heading").length > 0) {
    $(".who-we-are-heading > span > div").each(function (index, el) {
      whoWeAreHeading.to(
        $(el),
        { y: "0%", rotation: "0deg", ease: Back.easeOut },
        0.05 * index
      );
    });
  }
  whoWeAreHeading.play();
}

/* Circle Animation End */

/* Circle Animation Start */
function innerHeadingAnimate() {
  if ($(".innerHeading").length > 0) {
    $(".innerHeading > span > div").each(function (index, el) {
      innerHeadingAni.to(
        $(el),
        { y: "0%", rotation: "0deg", ease: Back.easeOut },
        0.02 * index
      );
    });
  }
  innerHeadingAni.play();
}

/* Circle Animation End */

/* Circle Animation Start */
function aboutLeftAnimate() {
  if ($(".about-text").length > 0) {
    TweenMax.to(".about-text", {
      x: 0,
      autoAlpha: 1,
      visibility: "visible",
      ease: "power2.out",
    });
  }
}

/* Circle Animation End */

/* Partner Logo Timeline Start */
function partnerLogoTimline() {
  if ($(".partner-slider").length > 0) {
    $(".partner-slider .swiper-slide a").each(function (index, el) {
      partnerLogos.fromTo(
        $(el),
        1,
        { autoAlpha: 0, visibility: "hidden" },
        {
          autoAlpha: 1,
          visibility: "visible",
        },
        0.05 * index
      );
    });
    $(".partner-slider .swiper-slide a span").each(function (index, el) {
      partnerLogos.fromTo(
        $(el),
        1,
        { y: "100%", rotation: "15deg", ease: Back.easeOut },
        {
          y: "0%",
          rotation: "0deg",
          ease: Back.easeOut,
        },
        0.05 * index
      );
    });
  }
}

/* Partner Logo Timeline End */

/* Logo Item Animation Start */
function logoAnimation() {
  setTimeout(function () {
    partnerLogos.play();
  }, 500);
}

/* Logo Item Animation End */

/* Service Box Hover Effect Start */
function serviceIconHover() {
  $(".service-box, .caseIcon").hover(
    function () {
      if ($(this).find("lottie-player").length) {
        $(this).find("lottie-player").get(0).play();
      }
    },
    function () {
      if ($(this).find("lottie-player").length) {
        $(this).find("lottie-player").get(0).stop();
      }
    }
  );
}

/* Service Box Hover Effect End */

/* Service Box Dragger Start */
function draggableSlider() {
  if ($(".services-box-wrapper").length > 0) {
    serviceBoxWrapper = $(".services-box-wrapper").get(0);
    servicesDraggerKnob = $(".dragger .handle").get(0);
    //create the serviceBoxWrapper Draggable
    serviceBoxWidth = $(".services-box-inner").outerWidth() - $(window).width();
    sliderDrag = Draggable.create(serviceBoxWrapper, {
      type: "x",
      throwProps: true,
      edgeResistance: 1,
      inertia: false,
      bounds: { minX: -serviceBoxWidth, maxX: 0 },
      onDragStart: function () {
        TweenLite.killTweensOf([".services-box-wrapper", ".handle"]);
      },
      onDrag: function (e) {
        var Xpercent = Math.round((this.x / serviceBoxWidth) * 100);
        var draggerWidth = $(".dragger").width();
        var x = (draggerWidth * -Xpercent) / 100;
        TweenMax.to(".draggable-box .dragger-progress", {
          width: -Xpercent + "%",
        });
        TweenLite.to(".handle", { x: x, y: 0 });
      },
      onThrowUpdate: function (e) {
        var Xpercent = Math.round((this.x / serviceBoxWidth) * 100);
        var draggerWidth = $(".dragger").width();
        var x = (draggerWidth * -Xpercent) / 100;
        TweenMax.to(".draggable-box .dragger-progress", {
          width: -Xpercent + "%",
        });
        TweenLite.to(".handle", { x: x, y: 0 });
      },
    });
    //create the servicesDraggerKnob Draggable
    handleDrag = Draggable.create(servicesDraggerKnob, {
      type: "x",
      throwProps: true,
      edgeResistance: 1,
      inertia: false,
      bounds: { minX: 0, maxX: $(".dragger").width() },
      onDragStart: function () {
        TweenLite.killTweensOf([".services-box-wrapper", ".handle"]);
      },
      onDrag: function () {
        var Xpercent = Math.round((this.x / $(".dragger").width()) * 100);
        var draggerWidth = serviceBoxWidth;
        var x = (draggerWidth * -Xpercent) / 100;
        $(".draggable-box .dragger-progress").width(Xpercent + "%");
        TweenLite.to(".services-box-wrapper", { x: x, y: 0 });
      },
      onThrowUpdate: function () {
        var Xpercent = Math.round((this.x / $(".dragger").width()) * 100);
        var draggerWidth = serviceBoxWidth;
        var x = (draggerWidth * -Xpercent) / 100;
        $(".draggable-box .dragger-progress").width(Xpercent + "%");
        TweenLite.to(".services-box-wrapper", { x: x, y: 0 });
      },
    });
    $(window).on("resize", function () {
      setTimeout(function () {
        sliderDrag[0].kill();
        handleDrag[0].kill();
        draggableSlider();
      }, 1000);
    });
  }
}

/* Service Box Dragger End */

/* Contact Us Link Click */
function contactMenuLink() {
  contactTl2.fromTo(
    "#contact-popup",
    {
      visibility: "hidden",
      duration: 1,
      ease: "power1.inOut",
    },
    { visibility: "visible", duration: 1, ease: "power1.inOut" },
    0.5,
    "-=0.5"
  );
  contactTl2.fromTo(
    ".c-primary-bg",
    { height: "0%", duration: 0.5, ease: "power1.inOut" },
    {
      height: "100%",
      duration: 0.5,
      ease: "power1.inOut",
    },
    "-=0.5"
  );
  contactTl2.fromTo(
    ".c-secondary-bg",
    { height: "0%", duration: 0.5, ease: "power1.inOut" },
    {
      height: "100%",
      duration: 0.5,
      ease: "power1.inOut",
    },
    "-=0.2"
  );
  contactTl2.fromTo(
    ".c-popup-body",
    { visibility: "hidden", duration: 1, ease: "power1.inOut" },
    {
      visibility: "visible",
      duration: 1,
      ease: "power1.inOut",
    },
    1.5,
    "-=0.5"
  );
  $(".popup-heading > span > div").each(function (index, el) {
    contactTl2.fromTo(
      $(el),
      { y: "100%", rotation: "15deg", ease: Back.easeOut },
      {
        y: "0%",
        rotation: "0deg",
        ease: Back.easeOut,
      },
      0.05 * index + 2
    );
  });
  $(".popup-slide-up").each(function (index, el) {
    contactTl2.fromTo(
      $(el),
      { y: "15px", autoAlpha: 0, visibility: "hidden", ease: "power1.inOut" },
      {
        y: "0",
        autoAlpha: 1,
        visibility: "visible",
        ease: "power1.inOut",
      },
      0.25 * index + 3.5
    );
  });
  contactTl2.fromTo(
    ".c-popup-close",
    {
      x: "100px",
      autoAlpha: 0,
      visibility: "hidden",
      duration: 1,
      ease: "linear.none",
    },
    {
      x: "0",
      autoAlpha: 1,
      visibility: "visible",
      duration: 1,
      ease: "linear.none",
    },
    "-=.5"
  );
  $(".contactOpenPopup").on("click", function () {
    contactTl2.play();
  });
  $(".c-popup-close").on("click", function () {
    contactTl2.reverse();
  });
}

/* Contact Us Link Click */

/* Contact Popup Start */
function contactPopup() {
  contactTl.staggerTo(
    ".brand-side-logo svg path",
    1,
    { autoAlpha: 1, fill: "#0BD46E" },
    0.1
  );
  contactTl.fromTo(
    "#contact-popup",
    {
      visibility: "hidden",
      duration: 1,
      ease: "power1.inOut",
    },
    { visibility: "visible", duration: 1, ease: "power1.inOut" },
    0.5,
    "-=0.5"
  );
  contactTl.fromTo(
    ".c-primary-bg",
    { height: "0%", duration: 0.5, ease: "power1.inOut" },
    {
      height: "100%",
      duration: 0.5,
      ease: "power1.inOut",
    },
    "-=0.5"
  );
  contactTl.fromTo(
    ".c-secondary-bg",
    { height: "0%", duration: 0.5, ease: "power1.inOut" },
    {
      height: "100%",
      duration: 0.5,
      ease: "power1.inOut",
    },
    "-=0.2"
  );
  contactTl.fromTo(
    ".c-popup-body",
    { visibility: "hidden", duration: 1, ease: "power1.inOut" },
    {
      visibility: "visible",
      duration: 1,
      ease: "power1.inOut",
    },
    1.5,
    "-=0.5"
  );
  $(".popup-heading > span > div").each(function (index, el) {
    contactTl.fromTo(
      $(el),
      { y: "100%", rotation: "15deg", ease: Back.easeOut },
      {
        y: "0%",
        rotation: "0deg",
        ease: Back.easeOut,
      },
      0.05 * index + 2
    );
  });
  $(".popup-slide-up").each(function (index, el) {
    contactTl.fromTo(
      $(el),
      { y: "15px", autoAlpha: 0, visibility: "hidden", ease: "power1.inOut" },
      {
        y: "0",
        autoAlpha: 1,
        visibility: "visible",
        ease: "power1.inOut",
      },
      0.25 * index + 3.5
    );
  });
  contactTl.fromTo(
    ".c-popup-close",
    {
      x: "100px",
      autoAlpha: 0,
      visibility: "hidden",
      duration: 1,
      ease: "linear.none",
    },
    {
      x: "0",
      autoAlpha: 1,
      visibility: "visible",
      duration: 1,
      ease: "linear.none",
    },
    "-=.5"
  );
  $(".c-popup-o").on("click", function () {
    contactTl.play();
  });
  $(".c-popup-close").on("click", function () {
    contactTl.reverse().then(function () {
      var draggerWidth = $(".g-dragger").width();
      var defaultPos = (draggerWidth * 70) / 100;
      var Xpercent = Math.round((defaultPos / draggerWidth) * 100);
      TweenLite.to(".logo-drag, .logo-drag-2", {
        x: defaultPos,
        y: 0,
        ease: Linear.easeNone,
        duration: 1,
      });
      TweenLite.to(".contact-us-btn-2", {
        width: 100 - Xpercent + "%",
        ease: Linear.easeNone,
        duration: 1,
      }).then(function () {
        $(".logo-drag, .logo-drag-2").removeClass("no-touch-class");
      });
    });
  });
}

/* Contact Popup End */

/* Ticker Section Start */
function tickerSection() {
  if ($(".tickerwrapper").length > 0) {
    var innerX = 0;
    var innerY = 0;
    var prevInnerX = 0;
    var prevInnerY = 0;
    var cImg = $(".ticker-img");
    var brightness = 1;
    var rotate = 0;
    TweenMax.to({}, 0.1, {
      repeat: -1,
      onRepeat: function () {
        TweenMax.to(".ticker-img", 1, {
          css: {
            left: innerX,
            top: innerY,
            x: "-50%",
            y: "-50%",
            transform: function () {
              if (innerX != prevInnerX) {
                if (innerX > prevInnerX) {
                  rotate = rotate > 2 ? rotate : rotate + 5;
                } else {
                  rotate = rotate < -2 ? rotate : rotate - 5;
                }
              } else {
                rotate = 0;
              }
              return "rotate(" + rotate + "deg) skew(" + rotate + "deg)";
            },
            filter: function () {
              if (innerX != prevInnerX && innerY != prevInnerY) {
                brightness = brightness > 1 ? brightness : brightness + 1;
              } else {
                brightness = 1;
              }
              prevInnerX = innerX;
              prevInnerY = innerY;
              return "brightness(" + brightness + ")";
            },
          },
        });
      },
    });
    $(".tickerwrapper").each(function (ix, ex) {
      var $tickerWrapper = $(ex);
      var $list = $tickerWrapper.find("ul.headingList");
      var $clonedList = $list.clone();
      var listWidth = 10;
      $list.find("li").each(function (i) {
        listWidth += $(this, i).outerWidth(true);
      });
      var endPos = $tickerWrapper.width() - listWidth;
      $list.add($clonedList).css({
        width: listWidth + "px",
      });
      $clonedList.addClass("cloned").appendTo($tickerWrapper);

      var mod = 0.5;
      if (ix === 0) {
        mod = -0.3;
      } else if (ix === 1) {
        mod = 0.3;
      } else if (ix === 2) {
        mod = -0.5;
      } else if (ix === 3) {
        mod = 0.7;
      }
      listWidth = mod > 0 ? listWidth : -listWidth;

      //TimelineMax
      var infinite = new TimelineMax({ repeat: -1, paused: true });
      var time = 10 / Math.abs(mod);

      infinite
        .fromTo(
          $list,
          time,
          { rotation: 0.01, x: 0 },
          {
            force3D: true,
            x: -listWidth,
            ease: Linear.easeNone,
          },
          0
        )
        .fromTo(
          $clonedList,
          time,
          { rotation: 0.01, x: listWidth },
          {
            force3D: true,
            x: 0,
            ease: Linear.easeNone,
          },
          0
        )
        .set($list, { force3D: true, rotation: 0.01, x: listWidth })
        .to(
          $clonedList,
          time,
          {
            force3D: true,
            rotation: 0.01,
            x: -listWidth,
            ease: Linear.easeNone,
          },
          time
        )
        .to(
          $list,
          time,
          { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone },
          time
        )
        .progress(1)
        .progress(0)
        .play();
      //Pause/Play
      $tickerWrapper
        .find("li a")
        .on("mouseenter", function () {
          infinite.pause();
          $(".tickerwrapper").removeAttr("style");
          $(this).closest(".tickerwrapper").css("z-index", 3);
          cImg.find("img").attr("src", $(this).data("img"));
          TweenMax.to(cImg, {
            autoAlpha: 1,
            visibility: "visible",
          });
        })
        .on("mouseleave", function () {
          infinite.play();
          // $("ul.headingList li").removeAttr("style");
          // $(this).closest("li").css("z-index", 1);
          cImg.find("img").attr("src", $(this).data("img"));
          TweenMax.to(cImg, {
            autoAlpha: 0,
            visibility: "hidden",
          });
        })
        .on("mousemove", function (e) {
          innerX = e.clientX;
          innerY = e.clientY - $(".headings-section").offset().top;
        });
    });
  }
}

/* Ticker Section End */

/* Custom Cursor Start */
function customCursor() {
  var cursor = $(".cursor"),
    follower = $(".cursor-follower");
  var posX = 0,
    posY = 0;
  var mouseX = 0,
    mouseY = 0;
  TweenMax.to({}, 0.01, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      TweenMax.set(follower, {
        css: {
          left: posX - 0,
          top: posY - 0,
        },
      });

      TweenMax.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    },
  });
  $(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  $("a[href]").on("mouseenter", function () {
    cursor.addClass("hovered");
    follower.addClass("hovered");
  });
  $("a[href]").on("mouseleave", function () {
    cursor.removeClass("hovered");
    follower.removeClass("hovered");
  });
}

/* Custom Cursor End */

/* Client Section Mouse Over Start */
function clientSecMouseOver() {
  if ($(".client-logos").length > 0) {
    var innerX = 0;
    var innerY = 0;
    var cImg = $(".c-image");
    $(".client-logos li a[data-video]").each(function (index) {
      $(this).data("index", index);
      var video = document.createElement("video");
      var source = document.createElement("source");
      video.appendChild(source);
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      source.src = $(this).data("video");
      video.autoplay = true;
      video.preload = "none";
      video.muted = "true";
      video.loop = "true";
      video.classList = "video-index-" + index;
      $(cImg).append(video);
      video.load();
      video.play();
    });
    $(".client-logos li a").on("mouseenter", function () {
      if (typeof $(this).data("video") != "undefined") {
        cImg.find("video").fadeOut();
        cImg
          .find("video.video-index-" + $(this).data("index"))
          .fadeIn()
          .get(0)
          .play();
        cImg.find("img").attr("src", "");
      } else {
        cImg.find("video").fadeOut();
        cImg.find("img").attr("src", $(this).data("img"));
      }
      $(".client-logos li").removeAttr("style");
      $(this).closest("li").css("z-index", 1);
      TweenMax.to(cImg, {
        scale: 1,
      });
    });
    $(".client-logos li a").on("mouseleave", function () {
      TweenMax.to(cImg, {
        scale: 0,
      });
    });
    TweenMax.to({}, 0.1, {
      repeat: -1,
      onRepeat: function () {
        TweenMax.to(cImg, {
          css: {
            left: innerX,
            top: innerY,
          },
        });
      },
    });
    $(".client-logos li a").on("mousemove", function (e) {
      innerX = e.clientX;
      innerY = e.clientY - $(".client-section").offset().top;
    });
  }
}

/* Client Section Mouse Over End */

/* Partner Logos Start */
function partnerLogoSlider() {
  if ($(".partner-slider").length > 0) {
    partnerLogosSlider = new Swiper(".partner-slider", {
      slidesPerView: 1.8,
      slidesPerColumn: 1,
      spaceBetween: 0,
      lazy: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          centeredSlides: true,
        },
        768: {
          slidesPerView: 3,
          slidesPerColumn: 2,
        },
        1024: {
          slidesPerView: 4,
          slidesPerColumn: 2,
        },
      },
    });
  }
}

/* Partner Logos End */

/* Who Icon Slider Start */
function whoIconSlider() {
  if ($(".who-we-are-slider").length > 0) {
    whoWeAreTextSlider = new Swiper(".who-we-are-slider", {
      slidesPerView: 1,
      allowTouchMove: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

/* Who Icon Slider End */

/* Circle TimeLine Start */
function circleTimeline() {
  if ($(".circle-box").length > 0) {
    circleTl.staggerTo($(".circle-box ul li"), 2, {
      y: "+=70%",
      ease: "expo.out",
    });
    circleTl.staggerTo(
      $(".circle-box ul li"),
      0.05,
      { autoAlpha: 1, ease: "expo.out" },
      0.05,
      "-=.5"
    );
    circleTl.to($(".circle-box"), { autoAlpha: 0, ease: "expo.out" });
    $(".animate-heading > span > div").each(function (index, el) {
      circleTl.fromTo(
        $(el),
        1,
        { y: "100%", rotation: "15deg", ease: Back.easeOut },
        {
          y: "0%",
          rotation: "0deg",
          ease: Back.easeOut,
        },
        0.05 * index + 1
      );
    });
    circleTl.to($(".circle-box"), { visibility: "hidden", ease: "expo.out" });
    $(".client-logos li a").each(function (index, el) {
      circleTl.fromTo(
        $(el),
        1,
        { visibility: "hidden" },
        { visibility: "visible" },
        0.05 * index + 2.5
      );
    });
    $(".client-logos li a .c-logo-img .c-l").each(function (index, el) {
      circleTl.fromTo(
        $(el),
        1,
        { y: "100%", rotation: "15deg", ease: Back.easeOut },
        {
          y: "0%",
          rotation: "0deg",
          ease: Back.easeOut,
        },
        0.05 * index + 2.5
      );
    });
  }
}

/* Circle TimeLine End */

/* Mobile Menu Start */
function mobileMenuOpen() {
  $("a[data-page-scroll-link]").click(function () {
    var link = $(this).data("page-scroll-link");
    $("html").removeClass("overflow-hidden");
    $("body").removeClass("overflow-hidden");
    $("html, body").animate({ scrollTop: $(link).offset().top }, "slow");
    return false;
  });
}

/* Mobile Menu End */

/* Digital Lines Start */
digitalLineScroll = gsap.timeline({ paused: true });

function digitalLinesFunc() {
  if ($(".homePage").length > 0) {
    digitalLines = gsap.timeline({ paused: true });
    $(".digital-lines ul li").each(function (index, el) {
      var total = $(".digital-lines ul li").length;
      digitalLines.to(
        $(el),
        1,
        { duration: 1, autoAlpha: 1, ease: "expo.out" },
        0.05 * index
      );
      digitalLines.to(
        $(el),
        1,
        {
          duration: 1,
          y: (index / total) * 70 + "%",
          ease: "expo.out",
        },
        0.05 * total + 0.25
      );
    });
    digitalLines.then(function () {
      if (scroll && typeof scroll.start !== "undefined") {
        scroll.start();
      }
    });

    digitalLineScroll.to(".digital-lines ul", {
      duration: 1,
      rotation: "60deg",
      ease: "linear",
    });
    digitalLineScroll.to(
      ".digital-lines  ul li",
      { duration: 1, rotation: "-60deg", ease: "linear" },
      0
    );
    digitalLineScroll.to(
      ".digital-lines  ul li",
      { duration: 0.5, scaleX: -1, ease: "power1.inOut" },
      0
    );
  }
}

digitalLineRightScroll = gsap.timeline({ paused: true });

function digitalLinesWrapperFunc() {
  if ($(".digital-lines-wrapper").length > 0) {
    digitalLinesRight = gsap.timeline({ paused: true });
    $(".digital-lines-wrapper ul li").each(function (index, el) {
      var total = $(".digital-lines-wrapper ul li").length;
      digitalLinesRight.to(
        $(el),
        1,
        { duration: 1, autoAlpha: 1, ease: "expo.out" },
        0.05 * index
      );
      digitalLinesRight.to(
        $(el),
        1,
        {
          duration: 1,
          x: (index / total) * 100 + "%",
          ease: "expo.out",
        },
        0.05 * total + 0.25
      );
    });
    digitalLinesRight.then(function () {
      if (scroll && typeof scroll.start !== "undefined") {
        scroll.start();
      }
    });
    digitalLineRightScroll.to(".digital-lines-wrapper ul", {
      duration: 1,
      rotation: "100deg",
      ease: "linear",
    });
    digitalLineRightScroll.to(
      ".digital-lines-wrapper  ul li",
      {
        duration: 1,
        rotation: "-100deg",
        ease: "linear",
      },
      0
    );
    digitalLineRightScroll.to(
      ".digital-lines-wrapper  ul li",
      { duration: 0.5, scaleY: -1, ease: "power1.inOut" },
      0
    );
  }
}

/* Digital Lines Start */

/* Hero Heading Animate Start */
function heroHeadingFunc() {
  var color = $(".light-logo").length ? "#fff" : "#191817";
  if ($(".homePage").length > 0) {
    heroHead = gsap.timeline({
      paused: true,
      onComplete: function () {
        $(".o-letter-animate").addClass("loaded");
      },
    });
    heroHead.set(".header-logo", { visibility: "hidden" }, 0);
    heroHead.set(".tc-top-logo", { y: "100%", autoAlpha: 0 }, 0);
    heroHead.to(".text-hover", { overflow: "visible", duration: 0 });
    heroHead.to(".o-letter-animate", {
      scale: 1,
      autoAlpha: 1,
      duration: 1,
      visibility: "visible",
    });
    heroHead.to(
      ".text-hover",
      {
        overflow: "hidden",
        duration: 0,
      },
      1
    );
    heroHead.to(".static-header", {
      y: "0%",
      autoAlpha: 1,
      visibility: "visible",
      ease: Back.easeOut,
    });
    heroHead.to(".header-logo", { visibility: "visible", duration: 0 }, "-=1");
    heroHead.to(".logo-circle-box", {
      x: "0%",
      duration: 1,
      ease: "power1.inOut",
    });
    heroHead.to(
      ".logo-text",
      { width: "100%", fill: color, duration: 1, ease: "power1.inOut" },
      "-=0.3"
    );
    heroHead.to(
      ".logo-circle-box .labs-text",
      { autoAlpha: 1, duration: 1, ease: "power1.inOut" },
      "-=1"
    );
    heroHead.to(".tc-top-logo", { y: 0, autoAlpha: 1, ease: "none" });
    heroHead.fromTo(
      ".scroll-to-explore",
      { autoAlpha: 0, y: "50%", ease: "power1.inOut" },
      { autoAlpha: 1, y: "0%" }
    );
    $(".hero-heading > span > div").each(function (index, el) {
      heroHead.fromTo(
        $(el),
        { y: "100%", autoAlpha: 0, rotation: "15deg", ease: Back.easeOut },
        {
          y: "0%",
          autoAlpha: 1,
          rotation: "0deg",
        },
        0.05 * index + 1
      );
    });
  } else {
    heroHeadInner = gsap.timeline({ paused: true });
    heroHeadInner.set(".tc-top-logo", { y: "100%", autoAlpha: 0 }, 0);
    heroHeadInner.to(".static-header", {
      y: "0%",
      autoAlpha: 1,
      visibility: "visible",
      ease: Back.easeOut,
    });
    heroHeadInner.to(
      ".header-logo",
      { visibility: "visible", duration: 0 },
      "-=1"
    );
    heroHeadInner.to(".logo-circle-box", {
      x: "0%",
      duration: 1,
      ease: "power1.inOut",
    });
    heroHeadInner.to(
      ".logo-text",
      { width: "100%", fill: color, duration: 1, ease: "power1.inOut" },
      "-=0.3"
    );
    heroHeadInner.to(
      ".logo-circle-box .labs-text",
      { autoAlpha: 1, duration: 1, ease: "power1.inOut" },
      "-=1"
    );
    heroHeadInner.to(".tc-top-logo", { y: 0, autoAlpha: 1, ease: "none" });
    heroHeadInner.fromTo(
      ".scroll-to-explore",
      { autoAlpha: 0, y: "50%", ease: "power1.inOut" },
      {
        autoAlpha: 1,
        y: "0%",
      }
    );
  }
}

/* Hero Heading Animate End */

/* Page Loading Start */
function PageLoading() {
  pageLoad.set(".static-header", {
    y: "-100%",
    autoAlpha: 0,
    visibility: "hidden",
  });
  pageLoad.to(".loader-img", 1, {
    y: "50px",
    duration: 1,
    autoAlpha: 0,
    ease: "power1.inOut",
  });
  pageLoad.to(
    ".loading-bg-black",
    1,
    { top: "0%", duration: 1, ease: "power1.inOut" },
    0.5
  );
  pageLoad.to("#loader-wrapper", 1, {
    y: "100%",
    duration: 1,
    ease: "power1.inOut",
  });
  if ($(".homePage").length > 0) {
    pageLoad
      .play()
      .timeScale(1.4)
      .then(function () {
        heroHead
          .play()
          .timeScale(1.4)
          .then(function () {
            digitalLines.play().timeScale(1.4);
            animateElements();
          });
      });
  } else {
    pageLoad
      .play()
      .timeScale(1.4)
      .then(function () {
        heroHeadInner.play();
        if ($(".digital-lines-wrapper").length) {
          digitalLinesRight.play().timeScale(1.4);
        }
        animateElements();
        innerHeadingAnimate();
      });
  }
}

/* Page Loading End */

/* Page Loading Start */
function mobilePageLoading() {
  mPageLoad.to(".loader-img", 1, {
    y: "50px",
    duration: 1,
    autoAlpha: 0,
    ease: "power1.inOut",
  });
  mPageLoad.to(
    ".loading-bg-black",
    1,
    { top: "0%", duration: 1, ease: "power1.inOut" },
    0.5
  );
  mPageLoad.to("#loader-wrapper", 1, {
    y: "100%",
    duration: 1,
    ease: "power1.inOut",
  });
  mPageLoad.play();
}

/* Page Loading End */

/* Image effect PIXIJS */
function pixiHoverEffect() {
  let img = splitImgs[0];
  generatePixiCanvas("someNameHere", img);
}

/* Image effect PIXIJS */

/* Page Smooth Scroll Start  */
function pageScroll() {
  scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: $("html").hasClass("ie") ? false : true,
    getDirection: true,
    smoothMobile: true,
  });
  $("body").on("mouseenter", ".bootstrap-select .dropdown-menu", function () {
    scroll.stop();
  });
  $("body").on("mouseleave", ".bootstrap-select .dropdown-menu", function () {
    if (scroll && typeof scroll.start !== "undefined") {
      scroll.start();
    }
  });
  scroll.on("scroll", function (obj) {
    console.log(obj);
    if ($(".digital-lines").length > 0) {
      digitalLineScroll.seek(obj.scroll.y / 2000);
    }
    if ($(".digital-lines-wrapper").length > 0) {
      digitalLineRightScroll.seek(obj.scroll.y / 2000);
    }
    var thiss = $(".fixed-header");
    if (obj.scroll.y > $(window).height()) {
      thiss.addClass("is-sticky");
    } else {
      thiss.removeClass("is-sticky");
    }
    if (!$(".homePage").length > 0) {
      var that = $("body");
      var windowHeight = $(".current-vacancies");
      if (
        obj.scroll.y > windowHeight.height() &&
        obj.scroll.y < windowHeight.height() + windowHeight.height()
      ) {
        that.attr("data-theme", "dark-theme");
      } else {
        that.attr("data-theme", "");
      }
      if (obj.scroll.y > windowHeight.height() + windowHeight.height()) {
        that.attr("data-theme", "");
      }
    }
    var currIndex;
    $(".caseListing li").each(function (index, item) {
      if (obj.scroll.y > $(item).position().top - $(window).height() / 3) {
        $(".caseListing li").removeClass("active");
        $(this).addClass("active");
        currIndex = index;
      }
    });
    $(document).trigger("changePixiTexture", [currIndex]);
  });
  scroll.on("call", function (func) {
    eval(func)();
    $(document).trigger(func);
  });
  $("a[data-page-scroll-link]").click(function () {
    $("html").addClass("cont-scroll");
    scroll.scrollTo(
      $(this).data("page-scroll-link"),
      $(this).data("page-scroll-link-offset"),
      1000,
      [0.25, 0.0, 0.35, 1.0],
      true,
      function () {
        $("html").removeClass("cont-scroll");
      }
    );
  });
  if ($(".homePage").length > 0) {
    scroll.stop();
  } else {
  }
}

/* Page Smooth Scroll End  */

/* Mobile Client Logo Slider Start */
function MobileClientLogoSlider() {
  if ($(".mobile-client-logo").length > 0) {
    new Swiper(".mobile-client-logo", {
      slidesPerView: 1.8,
      spaceBetween: 0,
      // pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true,
      // },
      pagination: false,
      breakpoints: {
        0: {
          centeredSlides: true,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
}

/* Mobile Client Logo Slider End */

/* Text Link Hover Start */
function textHover() {
  elements.forEach(function (element) {
    var innerText = element.innerText;
    element.innerHTML = "";
    let textContainer = document.createElement("span");
    textContainer.classList.add("block");
    for (var i = 0; i < innerText.length; i++) {
      var letter = innerText[i];
      var span = document.createElement("span");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      span.classList.add("letter");
      textContainer.appendChild(span);
    }
    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
  });
  elements.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      element.classList.remove("play");
    });
  });
}

/* Text Link Hover End */
function contactDragTimeLine() {
  $(".g-dragger").width($(".contact-us-btn span").width());
  var draggerVal, draggerMinBound;
  if (isLaptop()) {
    draggerVal = 37;
    draggerMinBound = -350;
  } else if (isPhone()) {
    draggerVal = 25;
    draggerMinBound = -68;
  } else {
    //tablet
    if (window.matchMedia("(orientation: portrait)").matches) {
      // you're in PORTRAIT mode
      draggerVal = 27;
      draggerMinBound = -70;
    } else {
      draggerVal = 32;
      draggerMinBound = -123;
    }
  }
  var draggerWidth = $(".g-dragger").width();
  var defaultPos = (draggerWidth * 70) / 100;
  var maxMinus = (-draggerWidth * draggerVal) / 100;
  var Xpercent = Math.round((defaultPos / draggerWidth) * 100);
  contactDrag = Draggable.create(".logo-drag-2", {
    type: "x",
    throwProps: true,
    edgeResistance: 1,
    dragResistance: 0.25,
    throwResistance: 5000,
    // inertia: true,
    bounds: { minX: draggerMinBound, maxX: draggerWidth - 100 },
    snap: {
      x: function (value) {
        if ((value / draggerWidth) * 100 > 15) {
          return defaultPos;
        }
        return Math.round(maxMinus); //otherwise don't change anything.
      },
    },
    onPressInit: function (e) {
      contactIntervalTL.pause();
    },
    onDrag: function (e) {
      var Xpercent = Math.round((this.x / draggerWidth) * 100);
      TweenLite.to(".logo-drag", {
        x: this.x,
        y: 0,
        ease: Linear.easeNone,
        duration: 0,
      });
      TweenLite.to(".contact-us-btn-2", {
        width: 100 - Xpercent + "%",
        ease: Linear.easeNone,
        duration: 0,
      });
      contactIntervalTL.pause();
    },
    onThrowUpdate: function (e) {
      var Xpercent = Math.round((this.x / draggerWidth) * 100);
      TweenLite.to(".logo-drag", {
        x: this.x,
        y: 0,
        ease: Linear.easeNone,
        duration: 0,
      });
      TweenLite.to(".contact-us-btn-2", {
        width: 100 - Xpercent + "%",
        ease: Linear.easeNone,
        duration: 0,
      });
      if (this.x <= Math.round(maxMinus)) {
        $(".logo-drag, .logo-drag-2").addClass("no-touch-class");
        contactIntervalTL.pause();
        contactTl.play();
      }
    },
  });

  var animationWidth = 120;
  var Xpercent2 = Math.round(
    ((defaultPos - animationWidth) / draggerWidth) * 100
  );
  contactIntervalTL = gsap.timeline({
    paused: true,
    repeat: -1,
    yoyo: true,
  });
  contactIntervalTL.fromTo(
    ".logo-drag",
    { x: defaultPos, ease: "none" },
    {
      x: defaultPos - animationWidth,
      ease: "none",
    },
    0
  );
  contactIntervalTL.fromTo(
    ".logo-drag-2",
    { x: defaultPos, ease: "none" },
    {
      x: defaultPos - animationWidth,
      ease: "none",
    },
    0
  );
  contactIntervalTL.fromTo(
    ".contact-us-btn-2",
    {
      width: 100 - Xpercent + "%",
      ease: "none",
    },
    { width: 100 - Xpercent2 + "%", ease: "none" },
    0
  );
  contactIntervalTL.timeScale(0.3).play();

  $(".g-dragger").on("mouseenter", function () {
    // contactIntervalTL.pause();
  });
  $(".g-dragger").on("mouseleave", function () {
    // contactIntervalTL.play();
  });
}

/* Author Slider */
function authorSliderFunc() {
  if (partSlider.length > 0) {
    partSlider
      .on("init", function (event, slick) {
        $(".hero-banner-nav .hero-nav-item").eq(0).addClass("active");
      })
      .on(
        "init reInit afterChange",
        function (event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.html(+i + " / " + slick.slideCount);
        }
      )
      .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".hero-banner-nav .hero-nav-item").removeClass("active");
        $(".hero-banner-nav .hero-nav-item").eq(nextSlide).addClass("active");

        partSlider.find(".animate").off("inview");
        var currentElem = slick.$slides[nextSlide],
          $currentSlideElem = $(currentElem);
        var $elem = $currentSlideElem.find(".authSlideAnimate").children();
        $($elem).each(function (i, v) {
          if ($(v).hasClass("animated")) {
            $(v).removeClass("fadeInUp animated");
            $(v).removeClass("lineTextAnimate animated");
            $(v).removeClass("fadeInLeft animated");
            $(v).removeClass("fadeInRight animated");
            $(v).removeClass("fadeInDown animated");
          }
          $(v).addClass("animate");
        });
        partSlider.find(".animate").each(function () {
          $(this).bind("inview", function (event, isInView) {
            if (isInView) {
              var animate = $(this).attr("data-animation");
              var speedDuration = $(this).attr("data-duration");
              var $t = $(this);
              setTimeout(function () {
                $t.addClass(animate + " animated");
              }, speedDuration);
            }
          });
        });
        partSlider.find(".animate").trigger("inview", [true]);
      })
      .slick({
        dots: false,
        arrows: true,
        appendArrows: ".partThumbArrow",
        prevArrow:
          "<a href='javascript:' class='career-arrow career-left-arrow' aria-label='slick prev'><i class='icon-left-arrow'></i></a>",
        nextArrow:
          "<a href='javascript:' class='career-arrow career-right-arrow' aria-label='slick next'><i class='icon-right-arrow1'></i></a>",
        speed: 300,
        fade: true,
        swipe: false,
        responsive: [
          {
            breakpoint: 1199.98,
            settings: {
              swipe: true,
            },
          },
          {
            breakpoint: 991.98,
            settings: {
              swipe: true,
            },
          },
          {
            breakpoint: 767.98,
            settings: {
              swipe: true,
              arrows: false,
              fade: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ],
      });

    $(".hero-banner-nav .nav-progressbar").each(function (index) {
      var progress = "<div class='inProgress inProgress" + index + "'></div>";
      $(this).html(progress);
    });

    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      tick = setInterval(interval, 10);
    }

    function interval() {
      if (
        partSlider
          .find('.slick-track div[data-slick-index="' + progressBarIndex + '"]')
          .attr("aria-hidden") === "true"
      ) {
        progressBarIndex = partSlider
          .find('.slick-track div[aria-hidden="false"]')
          .data("slickIndex");
        startProgressbar();
      } else {
        percentTime += 1 / (time + 5);
        $(".inProgress" + progressBarIndex).css({
          width: percentTime + "%",
        });
        if (percentTime >= 100) {
          partSlider.slick("slickNext");
          progressBarIndex++;
          if (progressBarIndex > 2) {
            progressBarIndex = 0;
          }
          startProgressbar();
        }
      }
    }

    function resetProgressbar() {
      $(".inProgress").css({
        width: 0 + "%",
      });
      clearInterval(tick);
    }

    startProgressbar();
    $(".hero-banner-nav .hero-nav-item").click(function () {
      clearInterval(tick);
      var goToThisIndex = $(this).find("span").data("slickIndex");
      partSlider.slick("slickGoTo", goToThisIndex, false);
      startProgressbar();
    });
  }
}

/* Objective Slider */
function objectiveSliderFunc() {
  if (objectiveSlider.length > 0) {
    objectiveSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767.98,
          settings: {
            variableWidth: true,
            slidesToShow: 1,
          },
        },
      ],
    });
  }
}

/* Iphone Slider */
function iphoneSliderFunc() {
  if (iphoneSlider.length > 0) {
    iphoneSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: 0,
      centerMode: true,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      swipe: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
}

/* Previous and Next */
function prevNextTimeline() {
  if ($(".pagePagination").length > 0) {
    $(".pageNext li a .case-logo .case-l").each(function (index, el) {
      prevPage.fromTo(
        $(el),
        1,
        { y: "100%", rotation: "15deg", ease: Back.easeOut },
        {
          y: "0%",
          rotation: "0deg",
          ease: Back.easeOut,
        },
        0.05 * index + 2.5
      );
    });
    var innerX = 0;
    var innerY = 0;
    var cNextImg = $(".next-c-image");
    $(".pageNext li a[data-video]").each(function (index) {
      $(this).data("index", index);
      var video = document.createElement("video");
      var source = document.createElement("source");
      video.appendChild(source);
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      source.src = $(this).data("video");
      video.autoplay = true;
      video.preload = "none";
      video.muted = "true";
      video.loop = "true";
      video.classList = "video-index-" + index;
      $(cNextImg).append(video);
      video.load();
      video.play();
    });
    $(".pageNext li a").on("mouseenter", function () {
      if (typeof $(this).data("video") != "undefined") {
        cNextImg.find("video").fadeOut();
        cNextImg
          .find("video.video-index-" + $(this).data("index"))
          .fadeIn()
          .get(0)
          .play();
        cNextImg.find("img").attr("src", "");
      } else {
        cNextImg.find("video").fadeOut();
        cNextImg.find("img").attr("src", $(this).data("img"));
      }
      $(".pageNext li").removeAttr("style");
      $(this).closest("li").css("z-index", 1);
      TweenMax.to(cNextImg, {
        scale: 1,
      });
    });
    $(".pageNext li a").on("mouseleave", function () {
      TweenMax.to(cNextImg, {
        scale: 0,
      });
    });
    TweenMax.to({}, 0.1, {
      repeat: -1,
      onRepeat: function () {
        TweenMax.to(cNextImg, {
          css: {
            left: innerX,
            top: innerY,
          },
        });
      },
    });
    $(".pageNext li a").on("mousemove", function (e) {
      innerX = e.clientX;
      innerY = e.clientY - $(".next-prev-section").offset().top;
    });
  }
}

function laptopTL() {
  scroll.on("scroll", ScrollTrigger.update);
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed",
  });
  // --- ORANGE PANEL ---
  var sc;
  if (isLaptop()) {
    sc = 2.1;
  } else if (isPhone()) {
    sc = 7;
  } else {
    sc = 4;
  }
  gsap.from(".laptopWrapper", {
    scrollTrigger: {
      trigger: ".clockWrapper",
      scroller: "[data-scroll-container]",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
    scale: sc,
    transformOrigin: "50% 50%",
    ease: "none",
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  //watch the free video on how this demo was made
  // https://www.snorkl.tv/scrolltrigger-smooth-scroll/
}

function caseStudyImageSection() {
  if (!$("html").hasClass("cont-scroll")) {
    scroll.scrollTo(".caseStudyBanner", 0, 1000);
  }
}

/* Menu Animation Start */

function menuAnim() {
  i = gsap.timeline({ delay: 0 });
  CustomEase.create(
    "custom",
    "M0,0,C0,0,0.001,0,0.001,0,0.8,0,0.122,0.999,0.996,0.999,0.997,1,0.998,1,1,1"
  );

  initMenuAnim();
  $(".btn-menu").on("click", function () {
    toggleMenu();
  });
}

/* Menu Animation Start */

function toggleMenu() {
  if ($(".main-menu").hasClass("opened")) {
    closeMenu();
    if ($(window).width() > 1199.98) {
      scroll.start();
    }
  } else {
    if ($(window).width() > 1199.98) {
      scroll.stop();
    }
    openMenu();
  }
}

var thisDOTdom = document,
  thisDOTmenuBtn = thisDOTdom.querySelector(".btn-menu"),
  thisDOTmenuDom = thisDOTdom.querySelector(".main-menu"),
  thisDOTmenuBack = thisDOTmenuDom.querySelector(".background .back"),
  thisDOTblackCircle = thisDOTmenuDom.querySelector(".circle.black"),
  thisDOTwhiteCircle = thisDOTmenuDom.querySelector(".circle.white"),
  thisDOTmenuOpen = 0,
  thisDOTtransDom = document.body.querySelector(".main-transition"),
  thisDOTtransBack = thisDOTtransDom.querySelector(".background .back"),
  thisDOTtransBlackCircle = thisDOTtransDom.querySelector(".circle.black"),
  thisDOTtransWhiteCircle = thisDOTtransDom.querySelector(".circle.white"),
  menuOpenTL,
  app;

function initMenuAnim() {
  app = {
    $window: $(window),
    $html: $("html"),
    $document: $(document),
    $body: $(document.body),
    $container: $("#main"),
    w: window.innerWidth,
    h: window.innerHeight,
    mobile: window.innerWidth <= 768,
    d: Math.sqrt(
      window.innerWidth * window.innerWidth +
        window.innerHeight * window.innerHeight
    ),
    /*
            _onUpdate: new n.Signal,
            _onResize: new n.Signal,
        */
    mouseX: 0.5 * window.innerWidth,
    mouseY: 0.5 * window.innerHeight,
  };
  var t = app.d;
  (thisDOTblackCircle.style.width = thisDOTwhiteCircle.style.width = t + "px"),
    (thisDOTblackCircle.style.height = thisDOTwhiteCircle.style.height =
      t + "px"),
    (thisDOTtransBlackCircle.style.width = thisDOTtransWhiteCircle.style.width =
      t + "px"),
    (thisDOTtransBlackCircle.style.height =
      thisDOTtransWhiteCircle.style.height =
        t + "px");
  var e = 0.5 * t;
  (thisDOTblackCircle.style.marginLeft = thisDOTwhiteCircle.style.marginLeft =
    -e + "px"),
    (thisDOTblackCircle.style.marginTop = thisDOTwhiteCircle.style.marginTop =
      -e + "px"),
    (thisDOTtransBlackCircle.style.marginLeft =
      thisDOTtransWhiteCircle.style.marginLeft =
        -e + "px"),
    (thisDOTtransBlackCircle.style.marginTop =
      thisDOTtransWhiteCircle.style.marginTop =
        -e + "px");
}

function menuAniFunc() {
  menuAnimation.fromTo(
    ".hd-banner",
    { autoAlpha: 0, visibility: "hidden", y: "-100%" },
    {
      autoAlpha: 1,
      visibility: "visible",
      y: 0,
      duration: 0.5,
      ease: "power4.out",
    },
    -0.1
  );
  menuAnimation.fromTo(
    ".menuWrapper",
    { autoAlpha: 0, visibility: "hidden" },
    {
      autoAlpha: 1,
      visibility: "visible",
      ease: "power4.out",
    },
    0
  );
  $(".menuData li a").each(function (index, el) {
    menuAnimation.fromTo(
      $(el),
      { y: "100%", autoAlpha: 0, visibility: "hidden", ease: "power4.out" },
      {
        y: "0%",
        visibility: "visible",
        autoAlpha: 1,
        duration: 0.5,
      },
      0.05 * index + 0.5
    );
  });
  menuAnimation.fromTo(
    ".heading-in-1 span",
    { y: "100%", autoAlpha: 0, visibility: "hidden" },
    {
      y: "0%",
      autoAlpha: 1,
      visibility: "visible",
      duration: 1,
      ease: "power4.out",
    },
    1
  );
  $(".addressBox ul li .address-data").each(function (index, el) {
    menuAnimation.fromTo(
      $(el),
      { y: "100%", autoAlpha: 0, visibility: "hidden", ease: "power4.out" },
      {
        y: "0%",
        visibility: "visible",
        autoAlpha: 1,
        duration: 0.5,
      },
      0.05 * index + 1.2
    );
  });
  menuAnimation.fromTo(
    ".heading-in-2 span",
    { y: "100%", autoAlpha: 0, visibility: "hidden" },
    {
      y: "0%",
      autoAlpha: 1,
      visibility: "visible",
      duration: 1,
      ease: "power4.out",
    },
    1.4
  );
  $(".teleNumBox ul li .address-data").each(function (index, el) {
    menuAnimation.fromTo(
      $(el),
      { y: "100%", autoAlpha: 0, visibility: "hidden", ease: "power4.out" },
      {
        y: "0%",
        visibility: "visible",
        autoAlpha: 1,
        duration: 0.5,
      },
      0.05 * index + 1.6
    );
  });
  menuAnimation.fromTo(
    ".hd-connect-box nav",
    { autoAlpha: 0, visibility: "hidden", y: "100%" },
    {
      autoAlpha: 1,
      visibility: "visible",
      y: 0,
      ease: "power4.out",
    },
    1.7
  );
}

function openMenu() {
  $("html").addClass("locked");
  $(".main-menu").addClass("opened");
  (thisDOTmenuOpen = !0), thisDOTmenuDom.classList.remove("locked");
  gsap.killTweensOf(thisDOTmenuDom),
    CustomEase.create(
      "custom",
      "M0,0,C0,0,0.001,0,0.001,0,0.8,0,0.122,0.999,0.996,0.999,0.997,1,0.998,1,1,1"
    );
  menuOpenTL = gsap.timeline({});
  menuOpenTL.set(thisDOTmenuDom, { autoAlpha: 1 }, 0),
    menuOpenTL.set(thisDOTblackCircle, { autoAlpha: 1 }, 0),
    menuOpenTL.fromTo(
      thisDOTmenuBack,
      { autoAlpha: 0 },
      { autoAlpha: 0.5, duration: 1.5, ease: "power2.out" },
      0
    ),
    menuOpenTL.fromTo(
      thisDOTblackCircle,
      { x: 0.5 * -app.w, y: 0.5 * app.d + 0.5 * app.h },
      {
        x: 0,
        y: 0,
        duration: 1.4,
        ease: "custom",
      },
      0.2
    ),
    menuOpenTL.fromTo(
      thisDOTwhiteCircle,
      { x: 0.5 * app.w, y: 0.5 * -app.d - 0.5 * app.h },
      {
        x: 0,
        y: 0,
        duration: 1.4,
        ease: "custom",
      },
      0.2
    ),
    menuOpenTL.then(function () {
      menuAnimation.play();
    });
}

function closeMenu() {
  $(".main-menu").removeClass("opened");
  menuAnimation.reverse().then(function () {
    menuOpenTL.reverse();
    $("html").removeClass("locked");
  });
}

function showCaseSlider() {
  if ($(".showCaseSlider").length) {
    $(".showCaseSlider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      centerMode: true,
      centerPadding: 0,
      autoplay: true,
      variableWidth: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
}

function memberAnimation() {
  if ($(".img-marquee-wrapper").length > 0) {
    var w = window.innerWidth;
    memberAnimate.to(".img-marquee-wrapper", {
      duration: 1,
      autoAlpha: 1,
      visibility: "visible",
      ease: "power2.out",
    });
    $(".img-marquee .marquee-img").each(function (index, el) {
      memberAnimate.fromTo(
        $(el),
        1,
        {
          x: Math.random() * w,
          transformOrigin: "center",
          scaleX: 0,
          autoAlpha: 0,
          visibility: "hidden",
          ease: "power2.out",
        },
        {
          x: "0",
          transformOrigin: "center",
          scaleX: 1,
          autoAlpha: 1,
          visibility: "visible",
          ease: "power2.out",
        },
        0.05 * index + 1
      );
    });
    memberAnimate.fromTo(
      $(".memberName"),
      0.5,
      {
        autoAlpha: 0,
        visibility: "hidden",
        ease: "power2.out",
      },
      { autoAlpha: 1, visibility: "visible", ease: "power2.out" }
    );
  }
  memberAnimate.play().then(function () {
    TweenMax.to($(".overlyDiv"), {
      duration: 1,
      autoAlpha: 0,
      visibility: "hidden",
      ease: "power2.out",
    });
  });
}

/* Double Diamond Animation Start */
function doubleDiamondSection() {
  //scroll.stop();
  if (!$("html").hasClass("cont-scroll")) {
    scroll.scrollTo(".diamondWrapper", 0, 1000);
  }
}

function scrollTriggerDiamond() {
  scroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed",
  });
  var lineTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".diamondWrapper",
      scroller: "[data-scroll-container]",
      scrub: 2,
      pin: true,
      start: "-=100 top",
      end: "+=100%",
    },
    ease: Linear.easeNone,
  });
  lineTl.to(".drawLine", 5, { drawSVG: "0% 100%", ease: "power4.out" });
  lineTl.to(
    ".diamondCircle .fillOne",
    0.5,
    {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 50%",
      ease: Linear.easeInOut,
    },
    "<1"
  );
  lineTl.to(
    ".diamondCircle .fillTwo",
    0.5,
    {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 50%",
      ease: Linear.easeInOut,
    },
    "<0.5"
  );
  lineTl.to(
    ".diamondCircle .fillThree",
    0.5,
    {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 50%",
      ease: Linear.easeInOut,
    },
    "<0.2"
  );
  $(".cText > div").each(function (index, el) {
    lineTl.to(
      $(el),
      { y: "0%", rotation: "0deg", ease: Back.easeOut, delay: 2 },
      0.02 * index
    );
  });
  $(".midCol .mText > div").each(function (index, el) {
    lineTl.to($(el), { y: "0%", ease: "Circ.easeOut", delay: 2 }, 0.05 * index);
  });
  $(".dLeftTxt .dText > div").each(function (index, el) {
    lineTl.to($(el), { y: "0%", ease: "Circ.easeOut", delay: 2 }, 0.02 * index);
  });
  $(".dRightTxt .dText > div").each(function (index, el) {
    lineTl.to($(el), { y: "0%", ease: "Circ.easeOut", delay: 2 }, 0.02 * index);
  });
  lineTl.to(".diamondInnerWrapper", 1.5, {
    x: "20%",
    scale: 1.1,
    ease: "power4.out",
  });
  lineTl.to(".midCol", 1, {
    y: -220,
    scale: 0.5,
    color: "#2E2E2E",
    ease: "power4.out",
  });
  lineTl.to(".circleBorder", { scale: 1 });
  lineTl.to(".diamondIcon", { scale: 1 });
  lineTl.to(".diamondIcon .normal-icon", { opacity: 1 });
  lineTl.to(".diamondIconText", { opacity: 1, y: 0 });
  lineTl.to(".green-arrow", { scale: 1 });
  lineTl.to(".green-arrow.arrow-one .hover-icon", { opacity: 1 });
  lineTl.to(".green-arrow.arrow-two .normal-icon", { opacity: 1 });

  lineTl.to(".diamondInnerWrapper", { x: "-20%", scale: 1.1 });
  lineTl.to(".green-arrow.arrow-one .hover-icon", { opacity: 0 });
  lineTl.to(".green-arrow.arrow-one .normal-icon", { opacity: 1 });
  lineTl.to(".green-arrow.arrow-two .normal-icon", { opacity: 0 });
  lineTl.to(".green-arrow.arrow-two .hover-icon", { opacity: 1 });

  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();
}

function imageMarquee() {
  if ($(".img-marquee-wrapper").length) {
    var wrapperWidth = $(".img-marquee-wrapper").innerWidth();
    $(".img-marquee-wrapper").each(function () {
      var wrapper = $(this);
      var noOfBoxes = wrapper.find(".marquee-img").length;
      var boxWidth = wrapper.find(".marquee-img").outerWidth(),
        totalWidth = boxWidth * noOfBoxes, //  * n of boxes
        no02 = wrapper.find(".img-marquee .marquee-img"),
        dirFromLeft = "+=" + totalWidth,
        dirFromRight = "-=" + totalWidth;
      if (totalWidth >= wrapperWidth + boxWidth) {
        wrapper.addClass("marquee-slider-init");
        gsap.set(wrapper, { xPercent: -50 });
        var mod = gsap.utils.wrap(0, totalWidth);

        function marquee(which, time, direction) {
          gsap.set(which, {
            x: function (i) {
              return i * boxWidth;
            },
          });
          var action = gsap.timeline().to(which, {
            x: direction,
            modifiers: {
              //x: x => mod(parseFloat(x)) + "px"
              x: function (x) {
                return mod(parseFloat(x)) + "px";
              },
            },
            duration: time,
            ease: "none",
            repeat: -1,
          });
          return action;
        }

        var master = gsap.timeline().add(marquee(no02, 40, dirFromLeft), 2);
        wrapper.hover(
          function () {
            master.pause();
          },
          function () {
            master.resume();
          }
        );
      }
    });

    var imageMask = $(".marquee-img").find(".linePath").attr("data-id");
    var imageBgMask = $(".marquee-img").find("clipPath").attr("data-id");
    var divLength = $(".img-marquee .marquee-img");
    divLength.each(function (index) {
      $(this)
        .find(".linePath")
        .attr("id", imageMask + index);
      $(this)
        .find(".xLink")
        .attr("xlink:href", "#" + imageMask + index);
      $(this)
        .find("clipPath")
        .attr("id", imageBgMask + index);
      $(this)
        .find(".imgBgClipMask")
        .css("clip-path", "url(#" + imageBgMask + index + ")");
    });
  }
}

function mobileAndTabletBGTransition() {
  if (!isLaptop()) {
    if (!$(".current-vacancies").length) return;
    $(window).on("scroll", function (e) {
      if (
        $(window).scrollTop() >=
        $(".current-vacancies").position().top +
          $(".current-vacancies").outerHeight() -
          $(window).height() / 2
      ) {
        $("body").attr("data-theme", "light-theme");
      } else if (
        $(window).scrollTop() >=
        $(".current-vacancies").position().top - $(window).height() + 100
      ) {
        $("body").attr("data-theme", "dark-theme");
      } else {
        $("body").attr("data-theme", "light-theme");
      }
    });
  }
}

$(document).ready(function () {
  partnerLogoSlider();
  whoIconSlider();
  draggableSlider();
  contactPopup();
  tickerSection();
  customCursor();
  iePopup();
  authorSliderFunc();
  objectiveSliderFunc();
  iphoneSliderFunc();
  showCaseSlider();
  mobileAndTabletBGTransition();
  $('input[type="file"]').inputfile({
    uploadText: "Select file",
    removeText: " ",
    restoreText: "",
    uploadButtonClass: "btn-custom",
    removeButtonClass: "btn btn-default",
  });
  var d = new Date();
  $("#year").text(d.getFullYear());
  $(".upload-button-remove").append(
    '<label for="checkLabel" class="label-hide">adsf</label>'
  );
  $(".upload-button-remove")
    .find('input[type="checkbox"]')
    .attr("id", "checkLabel");
  $(".upload-button-link").attr("aria-label", "Upload Link");
  $(".objective-box").hover(
    function () {
      $(this).find(".hide-content").stop().slideDown();
    },
    function () {
      $(this).find(".hide-content").stop().slideUp();
    }
  );
  pixiHoverEffect();
  imageMarquee();

  if ($(".diamondIconsList").length) {
    function highlight(items, index) {
      index = index % items.length;
      items.removeClass("active");
      items.eq(index).addClass("active");
      setTimeout(function () {
        highlight(items, index + 1);
      }, 3000);
    }
    highlight($(".diamondOne li"), 0);
    highlight($(".diamondTwo li"), 0);
  }
});

function menuTicker() {
  if ($(".menuItemTicker").length > 0) {
    $(".menuItemTicker").each(function (ix, ex) {
      var $tickerWrapper = $(ex);
      var $list = $tickerWrapper.find("ul.headingList");
      var $clonedList = $list.clone();
      var listWidth = 10;
      $list.find("li").each(function (i) {
        listWidth += $(this, i).outerWidth(true);
      });
      var endPos = $tickerWrapper.width() - listWidth;
      $list.add($clonedList).css({
        width: listWidth + "px",
      });
      $clonedList.addClass("cloned").appendTo($tickerWrapper);

      var mod = -0.5;
      if (ix === 0) {
        mod = -0.3;
      } else if (ix === 1) {
        mod = -0.17;
      } else if (ix === 2) {
        mod = -0.23;
      } else if (ix === 3) {
        mod = -0.34;
      } else if (ix === 4) {
        mod = -0.23;
      }
      listWidth = mod > 0 ? listWidth : -listWidth;

      //TimelineMax
      var infinite = new TimelineMax({ repeat: -1, paused: true });
      var time = 10 / Math.abs(mod);

      infinite
        .fromTo(
          $list,
          time,
          { rotation: 0.01, x: 0 },
          {
            force3D: true,
            x: -listWidth,
            ease: Linear.easeNone,
          },
          0
        )
        .fromTo(
          $clonedList,
          time,
          { rotation: 0.01, x: listWidth },
          {
            force3D: true,
            x: 0,
            ease: Linear.easeNone,
          },
          0
        )
        .set($list, { force3D: true, rotation: 0.01, x: listWidth })
        .to(
          $clonedList,
          time,
          {
            force3D: true,
            rotation: 0.01,
            x: -listWidth,
            ease: Linear.easeNone,
          },
          time
        )
        .to(
          $list,
          time,
          { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone },
          time
        )
        .progress(1)
        .progress(0)
        .play();
    });
  }
}

function menuItems() {
  var menuTitle = $(".menuData > li");
  $(".menuData .headingList").find("li").remove();
  for (var i = 1; i < 9; i++) {
    $(".menuData .headingList").append(
      '<li><a href="javascript:" class="menuTitle"></a></li>'
    );
  }
  menuTitle.each(function () {
    var dataItem = $(this).attr("data-title");
    var hrefVal = $(this).find("a").attr("href");
    var linkClass = $(this).find("a").attr("class");
    $(this).find(".headingList .menuTitle").append(dataItem);
    $(this).find(".headingList .menuTitle").attr("href", hrefVal);
    $(this).find(".headingList .menuTitle").attr("class", linkClass);
  });
  menuTicker();
  contactMenuLink();
}

function tabActive() {
  if ($(".servicesNav").length > 0) {
    $(".servicesNav li a.active").find("lottie-player").get(0).play();
    $(".servicesNav li a").click(function () {
      $(".nav-tabs .nav-item").each(function (i) {
        $(".servicesNav li a").find("lottie-player").get(i).stop();
      });
      $(this).find("lottie-player").get(0).play();
    });
  }
}

function sameHeight() {
  var maxHeight = 0;
  if ($(".objective-box").length > 0) {
    $(".objective-box").each(function () {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });
    $(".objective-box").css("min-height", maxHeight);
  }
}

function caseStudyCircle() {
  if ($(".case-study-image").length > 0) {
    setTimeout(function () {
      $(".case-study-image").find("lottie-player").get(0).play();
    }, 500);
  }
}

$(window).on("resize", function () {
  if ($(".homePage").length > 0) {
    setTimeout(function () {
      sliderDrag[0].kill();
      handleDrag[0].kill();
      draggableSlider();
    }, 1000);
  }
  initMenuAnim();
  sameHeight();
});
$(window).on("load", function () {
  menuAniFunc();
  menuAnim();
  if ($(".video-bg video").length > 0) {
    $(".video-bg video").width(pageWidth).height(pageHeight);
  }

  $(".blog-data-load").click(function () {
    $(".bolgList li").removeClass("d-none");
    window.dispatchEvent(new Event("resize"));
  });
  if ($(window).width() > 1199.98) {
    diamondSplitText = new SplitText(diamondText, { type: "chars" });
    var innerHeadingLetter = $(".who-we-are-heading, .innerHeading");
    mySplitText = new SplitText(innerHeadingLetter, { type: "chars" });
    window.dispatchEvent(new Event("resize"));
    TweenMax.set(".innerHeading > span > div", {
      y: "100%",
      rotation: "15deg",
      duration: 0,
    });
    TweenMax.set(".who-we-are-heading > span > div", {
      y: "100%",
      rotation: "15deg",
      duration: 0,
    });
    TweenMax.set(".about-text", {
      x: "-100%",
      autoAlpha: 0,
      visibility: "hidden",
      ease: "power2.out",
    });
    TweenMax.set(".img-marquee-wrapper", {
      autoAlpha: 0,
      visibility: "hidden",
      ease: "power2.out",
    });

    TweenMax.set(".cText > div", { y: "100%", rotation: "15deg", duration: 0 });
    TweenMax.set(".midCol .mText > div", { y: "100%", duration: 0 });
    TweenMax.set(".dLeftTxt .dText > div", { y: "100%", duration: 0 });
    TweenMax.set(".dRightTxt .dText > div", { y: "100%", duration: 0 });
    TweenMax.set(
      ".diamondCircle .fillOne, .diamondCircle .fillTwo, .diamondCircle .fillThree",
      {
        scale: 0,
        opacity: 0,
        transformOrigin: "50% 50%",
      }
    );
    TweenMax.set(".circleBorder", { scale: 0 });
    TweenMax.set(".diamondIcon", { scale: 0 });
    TweenMax.set(".diamondIcon .normal-icon", { opacity: 0 });
    TweenMax.set(".diamondIconText", { y: 15, opacity: 0 });
    TweenMax.set(".green-arrow", { scale: 0 });
    TweenMax.set(".green-arrow.arrow-one .normal-icon", { opacity: 0 });
    TweenMax.set(".green-arrow.arrow-one .hover-icon", { opacity: 0 });
    TweenMax.set(".green-arrow.arrow-two .normal-icon", { opacity: 0 });
    TweenMax.set(".green-arrow.arrow-two .hover-icon", { opacity: 0 });
    PageLoading();
    pageScroll();
    laptopTL();
    heroHeadingFunc();
    digitalLinesFunc();
    clientSecMouseOver();
    circleTimeline();
    textHover();
    partnerLogoTimline();
    contactDragTimeLine();
    serviceIconHover();
    digitalLinesWrapperFunc();
    prevNextTimeline();
    menuItems();
    tabActive();
    scrollTriggerDiamond();
    /*$('.menuData > li').stop().hover(function () {
            TweenMax.fromTo('.menuLine span', {height: '0'}, {height: '100%'})
            if ($(this).find('.menu-side-box').length) {
                $(this).find('.menu-side-box').fadeIn();
                for (var i = 0; i < $(this).find('lottie-player').length; i++) {
                    $(this).find('lottie-player').get(i).play();
                }
            }
            TweenMax.staggerTo(".brand-gll svg .fillAnimate", 1, {autoAlpha: 1, fill: '#0BD46E'}, 0.1)
        }, function () {
            if ($(this).find('.menu-side-box').length) {
                $(this).find('.menu-side-box').fadeOut();
            }
            TweenMax.staggerFrom(".brand-gll svg .fillAnimate", 1, {autoAlpha: 1, fill: 'transparent'}, 0.1)
        })*/
  } else {
    if ($(".case-study-page").length) {
      pageScroll();
      laptopTL();
    }
    mobilePageLoading();
    MobileClientLogoSlider();
    contactMenuLink();
    contactDragTimeLine();
    if ($(".case-study-image").length > 0) {
      $(".case-study-image").find("lottie-player").get(0).play();
    }
  }
  setTimeout(function () {
    scrollTo(0, -1);
  }, 0);
  sameHeight();
});
$(window).scroll(function () {
  if ($(window).width() <= 1200) {
    var thiss = $(".fixed-header");
    if ($(window).scrollTop() > $(".hero-text-section").height()) {
      thiss.addClass("is-sticky");
    } else {
      thiss.removeClass("is-sticky");
    }
  }
});
$(document).keydown(function (event) {
  if (
    event.ctrlKey == true &&
    (event.which == "61" ||
      event.which == "107" ||
      event.which == "173" ||
      event.which == "109" ||
      event.which == "187" ||
      event.which == "189")
  ) {
    event.preventDefault();
  }
});
$(window).bind("mousewheel DOMMouseScroll", function (event) {
  if (event.ctrlKey == true) {
    event.preventDefault();
  }
});

if ($(window).width() >= 1000) {
  $(".mobileText").remove();
}

$(window).resize(function () {
  if ($(window).width() >= 1000) {
    $(".mobileText").remove();
  }
});
