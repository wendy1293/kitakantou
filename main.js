// =========ヘッダーの下辺に中央から左右に伸びるボーダー
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('#header');
  header.classList.add('active');
});

// =========ヘッダーの下辺に中央から左右に伸びるボーダー


// =========ハンバーガーメニュー
// ハンバーガーボタン（.openbtn4）がクリックされたときの動作
$(".openbtn4").click(function () {
  // ハンバーガーボタンに"active"クラスの有無をトグル（切り替え）する
  // これにより、ボタンのデザインが「メニュー」から「閉じる」に変わる
  $(this).toggleClass("active");

  // ナビゲーション(#g-nav)に"panelactive"クラスの有無をトグルする
  // これにより、ナビゲーションが表示・非表示を切り替える
  $("#g-nav").toggleClass("panelactive");
});

// ナビゲーションのリンク（#g-nav a）がクリックされたときの動作
$("#g-nav a").click(function () {
  // ハンバーガーボタンから"active"クラスを削除する
  // これにより、ボタンのデザインが「閉じる」から「メニュー」に戻る
  $(".openbtn4").removeClass("active");

  // ナビゲーションから"panelactive"クラスを削除する
  // これにより、ナビゲーションが非表示になる
  $("#g-nav").removeClass("panelactive");
});
// =========ハンバーガーメニュー

// =========動画再生
$(document).ready(function(){
  var player = $('#player').get(0);
  player.muted = true; // 動画をミュートにする

  // 動画が終了したら再度再生を開始し、またその動作が終了したらDOMから削除する
  player.addEventListener('ended', function() {
      player.play(); // 動画を再び再生する
  });

  player.play(); // 動画の初回再生を開始する
});
// =========動画再生


// =========ページトップリンク
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  $("#page-top").addClass("UpMove");
  $("#page-top").removeClass("DownMove");
});

// #page-topをクリックした際の設定
$("#page-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0, //ページトップまでスクロール
    },
    500
  ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false; //リンク自体の無効化
});

// =========ページトップリンク


// =========じわっと出現
$(document).ready(function(){
  $(".blurTrigger").addClass("blur");
});
// =========じわっと出現


// =========ボーダーが伸びる
document.addEventListener('DOMContentLoaded', function() {
  const elementsToAnimate = ['#news', '#faq','#access', '#company'];
  elementsToAnimate.forEach(selector => {
    const element = document.querySelector(selector);
    window.addEventListener('scroll', function() {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('active');
      } else {
          element.classList.remove('active');
      }
    });
  });
});

// =========ボーダーが伸びる


// =========アコーディオン
//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
  }else{//それ以外は
    $(this).addClass('close');//クラス名closeを付与
  }
});
// =========アコーディオン

// =========コース紹介ページでボーダーが伸びる
window.addEventListener("scroll", function() {
  const descriptions = document.querySelectorAll(".course-description, .voice-container");
  const curriculum = document.querySelector(".curriculum");

  descriptions.forEach((desc) => {
    const top = desc.getBoundingClientRect().top;
    const bottom = desc.getBoundingClientRect().bottom;

    // 要素が画面の上部に来たら、その要素に.active-borderクラスを追加
    if (top <= 0 && bottom >= 0) {
      desc.classList.add("active-border");
    } else {
      desc.classList.remove("active-border");
    }
  });

  const curriculumTop = curriculum.getBoundingClientRect().top;
  // curriculumが画面内に入ったときに.active-borderクラスを追加
  if (curriculumTop <= window.innerHeight && curriculumTop >= 0) {
    curriculum.classList.add("active-border");
  } else {
    curriculum.classList.remove("active-border");
  }
});
// =========コース紹介ページでボーダーが伸びる


// =========卒業生の声スライダー
$(document).ready(function() {
  var currentSlide = 0;

  $('.slider-button.next').on('click', function() {
      if (currentSlide < $('.slick').length - 1) {
          currentSlide++;
      } else {
          currentSlide = 0;  // 最後のslickを超えたら最初に戻る
      }
      updateSlider();
  });

  $('.slider-button.prev').on('click', function() {
      if (currentSlide > 0) {
          currentSlide--;
      } else {
          currentSlide = $('.slick').length - 1;  // 最初のslickより前に行ったら最後のslickに移動
      }
      updateSlider();
  });

  function updateSlider() {
      var moveX = -100 * currentSlide;
      $('.slider').css('transform', 'translateX(' + moveX + '%)');
  }
});
// =========卒業生の声スライダー