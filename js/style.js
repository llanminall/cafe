$(function () {
  $("#visual .txt").css({ opacity: "1" });

  $("#visual .txt p:first")
    .delay(500)
    .animate({ opacity: 1, transform: "translateY(0)" }, 1000);

  $("#visual .txt p:nth-child(2)").delay(1000).animate(
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    1000
  );
  $("#visual .txt h2").delay(2000).animate(
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    1000
  );
  $("#visual .txt p:last").delay(3000).animate(
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    1000
  );

  // header스크롤
  let header = $("header").offset().top;
  let visual = $("#visual").offset().top;
  let con01 = $(".con01").offset().top;
  let footer = $("footer").offset().top;
  console.log(header, con01, visual);
  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    console.log(sc);

    if (sc >= header && sc < footer) {
      $("header").addClass("on");
    }
  });

  //header
  $(".gnb li").on("mouseenter", function () {
    $(this).children(".gnb_s").slideDown();
  });
  $(".gnb li").on("mouseleave", function () {
    $(this).children(".gnb_s").slideUp();
  });
  $(".gnb_s li").on("mouseenter", function () {
    $(this).parents(".gnb li").css({ "background-color": " #313a6b" });
  });
  $(".gnb_s li").on("mouseleave", function () {
    $(this).parents(".gnb li").css({ "background-color": "transparent" });
  });

  // 모달창
  $(".bars").on("click", function () {
    $("#modalBox").addClass("on");
  });
  $("#close").on("click", function () {
    $("#modalBox").removeClass("on");
  });

  //header 모바일 메뉴

  $(".bars01").on("click", function () {
    $(".mobileMenu").show();
  });
  $("#close01").on("click", function () {
    $(".mobileMenu").hide();
  });
  $(".but").on("click", function () {
    let isOn = $(this).find(".minus02").hasClass("on");
    $(".minus02").removeClass("on");
    $(".gnb_s01").hide();
    if (!isOn) {
      $(this).find(".minus02").addClass("on");
      $(this).parents("li").find(".gnb_s01").show();
    }
  });

  //con01
  $(".right li").on("mouseenter", function () {
    $(this).find("img").addClass("on");
  });
  $(".right li").on("mouseleave", function () {
    $(this).find("img").removeClass("on");
  });

  $(".arrow").on("click", function () {
    $(".right ul").animate({ "margin-left": "-100%" });
  });
  $(".arrow01").on("click", function () {
    $(".right ul").animate({ "margin-left": "0%" });
  });

  // con02 이미지 움직임
  $(".con02 li").on("mouseenter", function () {
    $(this).find("img").addClass("on");
  });
  $(".con02 li").on("mouseleave", function () {
    $(this).find("img").removeClass("on");
  });

  // con02 박스 움직임
  $(".view").on("mouseenter", function () {
    $(".view").addClass("on");
  });
  $(".view").on("mouseleave", function () {
    $(".view").removeClass("on");
  });

  $(".view02").on("mouseenter", function () {
    $(".view02").addClass("on");
  });
  $(".view02").on("mouseleave", function () {
    $(".view02").removeClass("on");
  });

  $(".view01").on("mouseenter", function () {
    $(".view01").addClass("on");
  });
  $(".view01").on("mouseleave", function () {
    $(".view01").removeClass("on");
  });

  //con02 모바일 내비버튼

  $(".navibar li:last-child").on("click", function () {
    $(".wrap02").stop().animate({ "margin-left": "-100%" });
  });
  $(".navibar li:first-child").on("click", function () {
    $(".wrap02").animate({ "margin-left": "0%" });
  });

  $(".navibar li").on("click", function () {
    let s = $(this).index();
    $(".navibar li").removeClass("on");
    $(".navibar li").eq(s).addClass("on");
  });

  // con03 슬라이드 버튼
  let total = $(".story01 li").length;

  console.log(total);

  let j = 0;
  list();

  function list() {
    stop = setInterval(function () {
      if (j == total - 1) {
        j = 0;
      } else {
        j++;
      }
      fade();
    }, 6000);
  }

  $(".right02").on("click", function () {
    clearInterval(stop);
    if (j == total - 1) {
      j = 0;
    } else {
      j++;
    }
    fade();
    list();
  });

  $(".left02").on("click", function () {
    clearInterval(stop);
    if (j == 0) {
      j = total - 1;
    } else {
      j--;
    }
    fade();
    list();
  });
  $(".navibar01 li").on("click", function () {
    clearInterval(stop);
    j = $(this).index();

    fade();
    list();
  });

  function fade() {
    $(".story01 li").stop().fadeOut();
    $(".story01  li ").eq(j).fadeIn();
    $(".navibar01 li").removeClass("on");
    $(".navibar01  li").eq(j).addClass("on");
  }
  // con03 버튼
  $(".view04").on("mouseenter", function () {
    $(".view04").addClass("on");
  });
  $(".view04").on("mouseleave", function () {
    $(".view04").removeClass("on");
  });

  //co005 이미지모션
  $(".right01 li").on("mouseenter", function () {
    $(this).find(".bg08").addClass("on");
  });
  $(".right01 li").on("mouseleave", function () {
    $(this).find(".bg08").removeClass("on");
  });
  $(".right01 li").on("mouseenter", function () {
    $(this).find(".bg09").addClass("on");
  });
  $(".right01 li").on("mouseleave", function () {
    $(this).find(".bg09").removeClass("on");
  });
  $(".right01 li").on("mouseenter", function () {
    $(this).find(".bg10").addClass("on");
  });
  $(".right01 li").on("mouseleave", function () {
    $(this).find(".bg10").removeClass("on");
  });
  $(".right01 li").on("mouseenter", function () {
    $(this).find(".bg11").addClass("on");
  });
  $(".right01 li").on("mouseleave", function () {
    $(this).find(".bg11").removeClass("on");
  });

  //con06 슬라이드버튼

  let i = 0;
  let start = setInterval(function () {
    if (i === 3) {
      i = 0;
    } else {
      i++;
    }
    $(".con06 .insta")
      .stop()
      .animate({ "margin-left": "-100%" }, 2000, function () {
        $(".insta li:first-child").appendTo(".con06 .insta");
        $(".con06 .insta").css({ "margin-left": "0" });
      });
  }, 3000);

  $(".next").on("click", function () {
    clearInterval(start);
    if (i === 3) {
      i = 0;
    } else {
      i++;
    }

    $(".con06 .insta").animate({ "margin-left": "-100%" }, 1000, function () {
      $(".con06 .insta li:first-child").appendTo(".con06 .insta");
      $(".con06 .insta").css({ "margin-left": "0" });
    });
  });

  $(".prev").on("click", function () {
    clearInterval(start);
    if (i === 0) {
      i = 3;
    } else {
      i--;
    }
    $(".insta li:last-child").prependTo(".con06 .insta");
    $(".con06 .insta").css({ "margin-left": "-100%" });
    $(".con06 .insta").animate({ "margin-left": "0" });
  });
  $(".navibar02 li").on("click", function () {
    clearInterval(start);
    let target = $(this).index();
    $(".con06 .insta")
      .stop()
      .animate({ "margin-left": `-${target * 100}%` });

    $(".navibar02 li").removeClass("on");
    $(".navibar02 li").eq(target).addClass("on");
  });

  // con06인스타그램 버튼
  $(".box").on("mouseenter", function () {
    $(".go03").addClass("on");
  });
  $(".box").on("mouseleave", function () {
    $(".go03").removeClass("on");
  });
  $(".box").on("mouseenter", function () {
    $(this).find(".go04").addClass("on");
  });
  $(".box").on("mouseleave", function () {
    $(this).find(".go04").removeClass("on");
  });
});
