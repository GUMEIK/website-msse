<template>
  <div class="video_player">
    <video :src="srcUrl" class="video"></video>
    <div class="menu">
      <div class="play">播放</div>
      <div class="time">0:00/0:00</div>
      <div class="progress_bar">
        <div></div>
        <i></i>
      </div>
      <div class="quick">倍速</div>
      <div class="quick_list">
        <ul>
          <li>正常</li>
          <li>x 1.25</li>
          <li>x 1.5</li>
          <li>x 2.0</li>
        </ul>
      </div>
      <div class="vol_add">音量+</div>
      <div class="vol_red">音量-</div>
      <div class="full_screen">全屏</div>
      <div class="out_screen">退出全屏</div>
    </div>
  </div>
</template>

<script>
var srcUrl = require("./assets/shanhai.mp4");
var srcUrl2 = require("./assets/vue.mp4");

export default {
  // mounted(){
  //     this.bindEvent('./assets/shanhai.mp4')
  // },

  // beforeDestory() {
  // this.bindEvent('./assets/shanhai.mp4')
  // },
  methods: {
    changeVideo(index) {
      switch (index) {
        case 0:
          this.srcUrl = srcUrl2;
          break;
        case 1:
          this.srcUrl = srcUrl;
          break;
      }
    },
    bindEvent() {
      // if (path == null) {
      //     videoPlayer.style.display = 'none';

      // }else{

      var videoPlayer = document.getElementsByClassName("video_player")[0];
      var menu = document.getElementsByClassName("menu")[0];
      var play = document.getElementsByClassName("play")[0];
      var video = videoPlayer.getElementsByTagName("video")[0];
      var time = document.getElementsByClassName("time")[0];
      var progressBar = document.getElementsByClassName("progress_bar")[0];
      var quick = document.getElementsByClassName("quick")[0];
      var quickList = document.getElementsByClassName("quick_list")[0];
      var vol_add = document.getElementsByClassName("vol_add")[0];
      var vol_red = document.getElementsByClassName("vol_red")[0];

      var full_screen = document.getElementsByClassName("full_screen")[0];
      var out_screen = document.getElementsByClassName("out_screen")[0];

      // video.src = path;
      // console.log(video.src)

      videoPlayer.onmouseenter = function() {
        // if(path != null){
        menu.style.display = "block";
        // }

        console.log("enter");
      };
      // 鼠标移动使全屏的进度条出现
      videoPlayer.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        menu.style.display = "block";
      };
      videoPlayer.onmouseleave = function() {
        menu.style.display = "none";
      };

      play.onclick = function(e) {
        if (video.paused) {
          video.play();
          play.innerHTML = "暂停";
        } else {
          video.pause();
          play.innerHTML = "播放";
        }
      };
      progressBar.onmouseenter = function() {
        progressBar.style.height = "14px";
        progressBar.style.top = "-14px";

        progressBar.getElementsByTagName("div")[0].style.height = "16px";
        progressBar.getElementsByTagName("i")[0].style.height = "18px";
      };

      progressBar.onmouseleave = function() {
        progressBar.style.height = "2px";
        progressBar.style.top = "-2px";

        progressBar.getElementsByTagName("div")[0].style.height = "2px";
        progressBar.getElementsByTagName("i")[0].style.height = "6px";
      };

      progressBar.onclick = function(e) {
        var location = e.layerX;
        var width = progressBar.clientWidth;
        var targetTime = (location / width) * video.duration;
        video.currentTime = targetTime;
      };

      quick.onclick = function() {
        quickList.style.display = "block";
      };
      quickList.onmouseleave = function() {
        quickList.style.display = "none";
      };

      var liList = quickList
        .getElementsByTagName("ul")[0]
        .getElementsByTagName("li");
      for (var i = 0; i < liList.length; i++) {
        liList[i].index = i;
        liList[i].onclick = function() {
          if (this.index == 0) {
            // 速率
            video.playbackRate = 1;
            quick.innerHTML = "倍速";
          } else if (this.index == 1) {
            video.playbackRate = 1.25;
            quick.innerHTML = "x 1.25";
          } else if (this.index == 2) {
            video.playbackRate = 1.5;
            quick.innerHTML = "x 1.5";
          } else if (this.index == 3) {
            video.playbackRate = 2;
            quick.innerHTML = "x 2";
          }
        };
      }

      vol_add.onclick = function() {
        video.volume = video.volume + 0.1 >= 1 ? 1 : video.volume + 0.1;
      };
      vol_red.onclick = function() {
        video.volume = video.volume - 0.1 <= 0 ? 0 : video.volume - 0.1;
      };
      var self = this;
      full_screen.onclick = function(e) {
        // var dom = document.documentElement;
        // self.$store.commit('setFullScreen',true)
        // 全屏展示浏览器
        // dom.requestFullscreen();
        var element = document.documentElement;
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        }

        videoPlayer.style.width = window.screen.width + "px";
        videoPlayer.style.height = window.screen.height + "px";
        video.style.width = window.screen.width + "px";
        video.style.height = window.screen.height + "px";
      };

      out_screen.onclick = function() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }

        videoPlayer.style.width = "1000px";
        videoPlayer.style.height = "500px";
        video.style.width = "1000px";
        video.style.height = "500px";
      };

      setInterval(function() {
        var total = video.duration;
        var nowTime = video.currentTime;
        time.innerHTML =
          +parseInt(nowTime / 60) +
          ":" +
          parseInt(nowTime % 60) +
          " / " +
          parseInt(total / 60) +
          ":" +
          parseInt(total % 60);
        var width = (nowTime / total) * progressBar.clientWidth;
        progressBar.getElementsByTagName("div")[0].style.width = width + "px";
        progressBar.getElementsByTagName("i")[0].style.left = width + "px";
      }, 1);
      // }
    }
  },
  data() {
    return {
      srcUrl
    };
  },
  computed: {
    // srcUrl(){
    //     // return ;
    // }
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0;
}

.video_player {
  position: relative;
  width: 1000px;
  height: 500px;
  margin: 0px auto;
}

video {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.menu {
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: none;
}

.menu:hover {
  display: block;
}

.play {
  position: absolute;
  width: 60px;
  height: 30px;
  border: 1px solid orange;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 10px;
  margin-left: 20px;
  top: 50%;
  margin-top: -15px;
  cursor: pointer;
}

.time {
  position: absolute;
  width: 100px;
  height: 30px;
  /* border: 1px solid orange; */
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 10px;
  margin-left: 120px;
  top: 50%;
  margin-top: -15px;
  cursor: pointer;
}

.progress_bar {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: green;
  left: 0;
  top: -2px;
}

.progress_bar div {
  position: absolute;
  width: 120px;
  height: 2px;
  background-color: orange;
  left: 0;
  top: 0;
}

.progress_bar i {
  position: absolute;
  height: 6px;
  width: 6px;
  border-radius: 3px;
  background-color: white;
  left: 120px;
  top: -2px;
}

.quick {
  position: absolute;
  width: 60px;
  height: 30px;
  border: 1px solid orange;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 10px;
  /* margin-left: 200px; */
  right: 250px;
  top: 50%;
  margin-top: -15px;
  cursor: pointer;
}

.quick_list {
  display: none;
  position: absolute;
  width: 80px;
  height: 120px;
  /* background-color: pink; */
  right: 250px;
  top: -120px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}

.quick_list li {
  position: relative;
  height: 30px;
  width: 100%;
  text-align: center;
  line-height: 30px;
  list-style: none;
  cursor: pointer;
}

.quick_list li:hover {
  color: orange;
}

.vol_add {
  position: absolute;
  width: 60px;
  height: 30px;
  border: 1px solid orange;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 10px;
  /* margin-left: 200px; */
  right: 470px;
  top: 50%;
  margin-top: -15px;
  cursor: pointer;
}

.vol_red {
  position: absolute;
  width: 60px;
  height: 30px;
  border: 1px solid orange;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 10px;
  /* margin-left: 200px; */
  right: 400px;
  top: 50%;
  margin-top: -15px;
  cursor: pointer;
}

.full_screen {
  position: absolute;
  width: 60px;
  height: 30px;
  border: 1px solid orange;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 10px;
  /* margin-left: 200px; */
  right: 120px;
  top: 50%;
  margin-top: -15px;
  cursor: pointer;
}

.out_screen {
  position: absolute;
  width: 80px;
  height: 30px;
  border: 1px solid orange;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 10px;
  /* margin-left: 200px; */
  right: 30px;
  top: 50%;
  margin-top: -15px;
  cursor: pointer;
}
</style>
