let $up = $('.up'),
  $pageOne = $('.page_one'),
  $pageTwo = $('.page_two'),
  $pageThree = $('.page_three'),
  $pageFour = $('.page_four'),
  $pageFive = $('.page_five'),
  $pageSix = $('.page_six'),
  $pageSeven = $('.page_seven'),
  $topTitle = $('.top_title'),
  $ind = $topTitle.children('.ind'),
  $title = $('.title'),
  $titleInd = $('.four_ind'),
  $titleHide = $('.four_hide'),
  $bottomBg = $('.bottom_bg'),
  $bell = $('#bell')[0],
  $mic = $('.mic'),
  $music = $('.music'),
  $musicOff = $('.musicOff')

// 加载页面
function loading() {
  let $progressBar = $('.progressBar'),
    $loadingBox = $('.loadingBox');
  let ary = ['musicon.png', 'up.png', 'page_user1.png', 'page_user2.png', 'left.jpg', 'head.jpg', 'my.png', 'phone.png', 'wechat.png', 'email.png', 'home-fill.png', 'time-circle-fill.png', 'address.png', 'bg.jpg', 'bg2.jpg', 'ruler.png', 'em.png', 'iphone.png', 'computer.png', 'memo.png', 'key.png', 'bg3.jpg', '@.png', 'upp.png', 'a8a55c60951fbfb99c26f27ae618037b.png', 'light.png', 'tab.png', 'wechat2.png', 'hand.png'];
  let n = 0;
  ary.forEach(item => {
    let temp = new Image();
    temp.src = './img/' + item;
    temp.onload = load;
  })

  function load() {
    n++;
    if (n === ary.length) {
      $progressBar.css({
        width: '100%'
      })
      $loadingBox.css({
        opacity: 0
      });
      let timer = setTimeout(() => {
        clearTimeout(timer);
        $loadingBox.css({
          display: 'none'
        });
        pageOne();
        bell.play();
      }, 10);
    } else {
      $progressBar.css({
        width: n / ary.length * 100 + '%'
      })
    }
  }
}
loading()
// 音乐按键
$mic.tap(function () {
  music()
})
let flag = false;

function music() {
  if (!flag) {
    console.log(flag)
    $music.css({
      display: 'none'
    })
    $musicOff.css({
      display: 'block'
    })
    $bell.pause();
    flag = true
  } else {
    $music.css({
      display: 'block'
    })
    $musicOff.css({
      display: 'none'
    })
    bell.play();
    flag = false;
  }
}


// 第一页
function pageOne() {
  $pageTwo.css({
    index: 10
  })
  let $circle = $('.one_circle'),
    $userJ = $('.one_user_j'),
    $userE = $('.one_user_e'),
    $bottom = $('.one_bottom'),
    $mid = $('.one_mid')
  $circle.css({
    opacity: 1,
    transition: 'all 2s'
  })
  let timer1 = setTimeout(() => {
    clearTimeout(timer1);
    $userJ.css({
      transform: 'translateY(3rem)',
      transition: 'all 1s',
      opacity: 1
    })
    $userE.css({
      transform: 'translateX(2rem)',
      transition: 'all 2s',
      opacity: 1
    })
  }, 1000);
  let timer2 = setTimeout(() => {
    clearTimeout(timer2)
    $bottom.css({
      transform: 'translateY(3rem)',
      transition: 'all 2s',
      opacity: 1
    })
    $mid.css({
      transform: 'translateY(3rem)',
      transition: 'all 3s',
      opacity: 1
    })
  }, 2000);
  $up.tap(function () {
    $pageOne.css({
      display: 'none',
    })
    pageTwo()
  })
}
// 第二页
function pageTwo() {
  let $twoLeft = $pageTwo.children('.two_left'),
    $twoHead = $pageTwo.children('.two_head'),
    $pic = $pageTwo.find('.pic'),
    $desc = $pageTwo.find('.desc');
  topTitle();
  twoLeft();
  twoHead();
  Ul();

  function twoLeft() {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      $twoLeft.css({
        transform: 'translateX(2.9rem)',
        opacity: '1',
        transition: 'all 1.5s',
      })
    }, 1000);
  }

  function twoHead() {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      $twoHead.css({
        transform: 'rotate(360deg)',
        transition: 'all 2s',
        opacity: 1
      })
    }, 1000);
  }

  function Ul() {

    let timer = setTimeout(() => {
      clearTimeout(timer)
      $pic.css({
        transform: 'translateX(1rem)',
        transition: 'all 2s',
        opacity: 1
      })
      $desc.css({
        transform: 'translateX(-5rem)',
        transition: 'all 2s',
        opacity: 1
      })
    }, 1000);
  }
  $up.tap(function () {
    $pageTwo.css({
      display: 'none',
    })
    topTitleHide()
    pageThree()
  })
}
// 第三页
function pageThree() {
  $threeCircle = $pageThree.children('.three_circle'),
    $job = $pageThree.find('.job'),
    $post = $pageThree.find('.post')
  $threeCircle.css({
    transform: 'scale(1)',
    transition: 'all 2s',
  })
  let timer = setTimeout(() => {
    clearTimeout(timer)
    $job.css({
      transform: 'scale(1)',
      transition: 'all 2s',
      opacity: 1
    })
    $post.css({
      transform: 'scale(1)',
      transition: 'all 2s',
      opacity: 1
    })
  }, 700);
  $up.tap(function () {
    $pageThree.css({
      display: 'none',
    })
    console.log(1)
    pageFour()
  })
}
// 第四页
function pageFour() {
  $fourUp = $pageFour.children('.four_up'),
    $fourBg = $pageFour.children('.four_bg'),
    $fourDesc = $pageFour.children('.four_desc');
  $fourBg.css({
    opacity: 1,
    transition: 'all 1s'
  })
  fourUp()
  title()
  fourDesc()

  function fourUp() {
    let timer = setTimeout(() => {
      $fourUp.css({
        opacity: 1,
        transition: 'all 2s'
      })
    }, 700);
  }

  function fourDesc() {
    $fourDesc.css({
      transform: 'translateY(-7rem)',
      transition: 'all 2s'
    })
  }
  $up.tap(function () {
    $pageFour.css({
      display: 'none',
    })
    titleHide()
    pageFive()
  })
}
// 第五页
function pageFive() {
  //  $fiveLeftLine = $('.five_left_line'),
  // $fiveLeftCircle = $('.five_left_circle'),
  let $fiveDesc = $('.five_desc');
  // $fiveLeftLine.css({
  //   transform: 'translateY(12rem)',
  //   transition: 'all 2s'
  // })
  topTitle();
  // fiveLeftCircle();
  fiveDesc()
  bottomBg()

  // function fiveLeftCircle() {
  //   let timer = setTimeout(() => {
  //     $fiveLeftCircle.css({
  //       opacity: 1,
  //       transition: 'all 2s'
  //     })
  //   }, 2000);
  // }

  function fiveDesc() {
    let timer = setTimeout(() => {
      $fiveDesc.css({
        opacity: 1,
        transition: 'all 2s'
      })
    }, 1000);
  }
  $up.tap(function () {
    $pageFive.css({
      display: 'none',
    })
    bottomBgHide()
    pageSix()
  })
}
// 第六页 
function pageSix() {
  let $sixBg = $pageSix.children('.six_bg'),
    $sixBottom = $pageSix.children('.six_bottom'),
    $sixLeft = $pageSix.find('.six_left'),
    $sixRight = $pageSix.find('.six_right');
  $sixBg.css({
    opacity: 1,
    transition: 'all 1s'
  })
  title()
  sixBottom()
  bottomBg()

  function sixBottom() {
    let timer = setTimeout(() => {
      $sixRight.css({
        opacity: 1,
        transform: 'scale(1)',
        transition: 'all 4s'
      })
      $sixLeft.css({
        transform: 'scale(1)',
        opacity: 1,
        transition: 'all 2s'
      })
    }, 1000);
  }
  $up.tap(function () {
    $pageSix.css({
      display: 'none',
    })
    pageSeven()
  })
}
// 第七页
function pageSeven() {
  let $sevenCircle = $pageSeven.children('.seven_circle'),
    $sevenTab = $pageSeven.children('.seven_tab'),
    $sevenS = $sevenTab.children('span'),
    $sevenDesc = $pageSeven.children('.seven_desc'),
    $sevenHand = $pageSeven.children('.seven_hand');
  $up.css({
    display: 'none'
  })
  $sevenTab.css({
    transform: 'scale(1)',
    opacity: 1,
    transition: 'all 2s'
  })
  $sevenS.css({
    opacity: 1,
    transition: 'all 2s'
  })
  $sevenCircle.css({
    transform: 'scale(1)',
    opacity: 1,
    transition: 'all 3s'
  })
  sevenDesc()
  sevenHand()

  function sevenDesc() {
    $sevenDesc.css({
      transform: 'translateY(1.5rem)',
      opacity: 1,
      transition: 'all 1.5s',
    })
  }

  function sevenHand() {
    $sevenHand.css({
      transform: 'translateX(-4.5rem)',
      opacity: 1,
      transition: 'all 1.5s',
    })
  }
}


// 竖标签
function topTitle() {
  $topTitle.css({
    transform: 'translateX(-1.8rem)',
    transition: 'all 1.5s',
  })
  $ind.css({
    transform: 'translateY(4.5rem)',
    transition: 'all 1.5s',
  })
}

function topTitleHide() {
  $topTitle.css({
    transform: 'translateX(1.8rem)',
  })
  $ind.css({
    transform: 'translateY(-4.5rem)',
  })
}
// 横标签
function title() {
  let timer = setTimeout(() => {
    $title.css({
      opacity: 1,
      transition: 'all 2s'
    })
    $titleInd.css({
      transform: 'scale(1)',
      opacity: 1,
      transition: 'all 2s'
    })
    $titleHide.css({
      opacity: 0,
      transition: 'all 2s'
    })
  }, 1000);
}

function titleHide() {
  $title.css({
    opacity: 0,
  })
  $titleInd.css({
    transform: 'scale(0.1)',
    opacity: 0,
  })
  $titleHide.css({
    opacity: 1,
  })
}

// 底部背景
function bottomBg() {
  let timer = setTimeout(() => {
    $bottomBg.css({
      transform: 'translateY(-3rem)',
      opacity: 1,
      transition: 'all 1.5s'
    })
  }, 2500);
}

function bottomBgHide() {
  $bottomBg.css({
    transform: 'translateY(3rem)',
    opacity: 0,
  })
}
