import React from "react";
import { TweenMax, Power1 } from "gsap";
import { useDarkMode } from "../../contexts/DarkModeContext";
import styles from "./styles.module.css";
import "./styles.css";
import profile from "../../assets/images/general/profile.webp";

const Showcase = () => {
  setTimeout(() => {
    var options = {
      imgSrc: profile,
      containerName: "placeholder",
      rows: 5,
      columns: 5,
      margin: 2.5,
      animTime: 0.3,
    };

    function ImageGrid(defaults) {
      var r = defaults.rows;
      var c = defaults.columns;
      var margin = defaults.margin;

      var placeholder = document.getElementsByClassName(
        defaults.containerName
      )[0];
      var container = document.createElement("div");
      container.className = "gridContainer";
      placeholder.appendChild(container);

      var gridTile;

      var w = container.offsetWidth / c - margin;
      var h = container.offsetHeight / r - margin;
      var arr = [];

      for (var i = 0, l = r * c; i < l; i++) {
        gridTile = document.createElement("div");
        gridTile.className = "gridTile";
        gridTile.style.backgroundImage = "url(" + defaults.imgSrc + ")";

        arr = [
          (w + margin) * (i % c),
          (h + margin) * Math.floor(i / c),
          (w + margin) * (i % c) + w - margin,
          (h + margin) * Math.floor(i / c),
          (w + margin) * (i % c) + w - margin,
          (h + margin) * Math.floor(i / c) + h - margin,
          (w + margin) * (i % c),
          (h + margin) * Math.floor(i / c) + h - margin,
        ];

        // console.log(i + " ====>>> " + arr + " ||||| " + i%c  + " |||||| " + i/c);

        TweenMax.set(gridTile, {
          webkitClipPath:
            "polygon(" +
            arr[0] +
            "px " +
            arr[1] +
            "px," +
            arr[2] +
            "px " +
            arr[3] +
            "px, " +
            arr[4] +
            "px " +
            arr[5] +
            "px, " +
            arr[6] +
            "px " +
            arr[7] +
            "px)",
          clipPath:
            "polygon(" +
            arr[0] +
            "px " +
            arr[1] +
            "px," +
            arr[2] +
            "px " +
            arr[3] +
            "px, " +
            arr[4] +
            "px " +
            arr[5] +
            "px, " +
            arr[6] +
            "px " +
            arr[7] +
            "px)",
        });

        container.appendChild(gridTile);

        fixTilePosition(gridTile, i);
      }

      placeholder.addEventListener("mouseover", function (e) {
        var allTiles = e.currentTarget.querySelectorAll(".gridTile");
        for (var t = 0, le = allTiles.length; t < le; t++) {
          TweenMax.to(allTiles[t], defaults.animTime, {
            css: { backgroundPosition: "0px 0px" },
            ease: Power1.easeOut,
          });
        }
      });

      placeholder.addEventListener("mouseleave", function (e) {
        var allTiles = e.currentTarget.querySelectorAll(".gridTile");
        for (var ti = 0, len = allTiles.length; ti < len; ti++) {
          fixTilePosition(allTiles[ti], ti, defaults.animTime);
        }
      });

      function fixTilePosition(tile, ind, time) {
        if (time == null) time = 0;
        var centr, centrCol, centrRow, offsetW, offsetH, left, top;

        centr = Math.floor((c * r) / 2);
        centrCol = Math.ceil(centr / c);
        centrRow = Math.ceil(centr / r);

        offsetW = w / centrCol;
        offsetH = h / centrRow;

        left = Math.round(((ind % c) - centrCol + 1) * offsetW);
        top = Math.round((Math.floor(ind / c) - centrRow + 1) * offsetH);

        //console.log(left, top)

        TweenMax.to(tile, time, {
          css: { backgroundPosition: left + "px " + top + "px" },
          ease: Power1.easeOut,
        });
      }
    }

    ImageGrid(options);
  }, 50);

  const { isDarkMode } = useDarkMode();

  return (
    <div className={styles.showcase}>
      <div className={styles.showcaseContainer}>
        <div className={styles.showcaseContainer2}>
          <div
            className={`${styles.about} ${
              isDarkMode ? styles.aboutDark : styles.aboutLight
            }`}
          >
            <div className={styles.container}>
              <div className={styles.container2}>
                <img
                  src={profile}
                  alt=""
                  className={styles.responsiveProfile}
                />
              </div>
            </div>
            Merhaba ben Alperen, bilgisayar mühendisliğinden mezunum. Tutkulu
            bir frontend developer olarak modern, kullanıcı dostu ve performans
            odaklı web arayüzleri geliştiriyorum. Güncel web teknolojilerini
            takip ediyor, kendimi geliştirerek yetkinliğimi artırıyorum.
            Edindiğim bilgileri pratikte yaptığım uygulamalarla pekiştiriyor,
            her projede deneyimimi ileri taşıyorum.
          </div>
          <div className={`placeholder ${styles.profile}`}></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Showcase);
