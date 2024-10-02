export const a4=[

    function (e, t, n) {
        (function (e) {
          "use strict";
          var t =
              "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
                "_"
              ),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [
              /^ene/i,
              /^feb/i,
              /^mar/i,
              /^abr/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^ago/i,
              /^sep/i,
              /^oct/i,
              /^nov/i,
              /^dic/i,
            ],
            i =
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
          e.defineLocale("es-us", {
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort: function (e, r) {
              return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex:
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex:
              /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
              "_"
            ),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "MM/DD/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY h:mm A",
              LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextDay: function () {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[el] dddd [pasado a la" +
                  (1 !== this.hours() ? "s" : "") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              w: "una semana",
              ww: "%d semanas",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 0, doy: 6 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n, r) {
            var i = {
              s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
              ss: [e + "sekundi", e + "sekundit"],
              m: ["ühe minuti", "üks minut"],
              mm: [e + " minuti", e + " minutit"],
              h: ["ühe tunni", "tund aega", "üks tund"],
              hh: [e + " tunni", e + " tundi"],
              d: ["ühe päeva", "üks päev"],
              M: ["kuu aja", "kuu aega", "üks kuu"],
              MM: [e + " kuu", e + " kuud"],
              y: ["ühe aasta", "aasta", "üks aasta"],
              yy: [e + " aasta", e + " aastat"],
            };
            return t ? (i[n][2] ? i[n][2] : i[n][1]) : r ? i[n][0] : i[n][1];
          }
          e.defineLocale("et", {
            months:
              "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
                "_"
              ),
            monthsShort:
              "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
                "_"
              ),
            weekdays:
              "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
                "_"
              ),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[Täna,] LT",
              nextDay: "[Homme,] LT",
              nextWeek: "[Järgmine] dddd LT",
              lastDay: "[Eile,] LT",
              lastWeek: "[Eelmine] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s pärast",
              past: "%s tagasi",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: "%d päeva",
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("eu", {
            months:
              "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
                "_"
              ),
            monthsShort:
              "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
                "_"
              ),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY[ko] MMMM[ren] D[a]",
              LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
              LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
              l: "YYYY-M-D",
              ll: "YYYY[ko] MMM D[a]",
              lll: "YYYY[ko] MMM D[a] HH:mm",
              llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
            },
            calendar: {
              sameDay: "[gaur] LT[etan]",
              nextDay: "[bihar] LT[etan]",
              nextWeek: "dddd LT[etan]",
              lastDay: "[atzo] LT[etan]",
              lastWeek: "[aurreko] dddd LT[etan]",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s barru",
              past: "duela %s",
              s: "segundo batzuk",
              ss: "%d segundo",
              m: "minutu bat",
              mm: "%d minutu",
              h: "ordu bat",
              hh: "%d ordu",
              d: "egun bat",
              dd: "%d egun",
              M: "hilabete bat",
              MM: "%d hilabete",
              y: "urte bat",
              yy: "%d urte",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "۱",
              2: "۲",
              3: "۳",
              4: "۴",
              5: "۵",
              6: "۶",
              7: "۷",
              8: "۸",
              9: "۹",
              0: "۰",
            },
            n = {
              "۱": "1",
              "۲": "2",
              "۳": "3",
              "۴": "4",
              "۵": "5",
              "۶": "6",
              "۷": "7",
              "۸": "8",
              "۹": "9",
              "۰": "0",
            };
          e.defineLocale("fa", {
            months:
              "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
                "_"
              ),
            monthsShort:
              "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
                "_"
              ),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
              "_"
            ),
            weekdaysShort:
              "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
              return /بعد از ظهر/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
            },
            calendar: {
              sameDay: "[امروز ساعت] LT",
              nextDay: "[فردا ساعت] LT",
              nextWeek: "dddd [ساعت] LT",
              lastDay: "[دیروز ساعت] LT",
              lastWeek: "dddd [پیش] [ساعت] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "در %s",
              past: "%s پیش",
              s: "چند ثانیه",
              ss: "%d ثانیه",
              m: "یک دقیقه",
              mm: "%d دقیقه",
              h: "یک ساعت",
              hh: "%d ساعت",
              d: "یک روز",
              dd: "%d روز",
              M: "یک ماه",
              MM: "%d ماه",
              y: "یک سال",
              yy: "%d سال",
            },
            preparse: function (e) {
              return e
                .replace(/[۰-۹]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: { dow: 6, doy: 12 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t =
              "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(
                " "
              ),
            n = [
              "nolla",
              "yhden",
              "kahden",
              "kolmen",
              "neljän",
              "viiden",
              "kuuden",
              t[7],
              t[8],
              t[9],
            ];
          function r(e, r, i, s) {
            var a = "";
            switch (i) {
              case "s":
                return s ? "muutaman sekunnin" : "muutama sekunti";
              case "ss":
                a = s ? "sekunnin" : "sekuntia";
                break;
              case "m":
                return s ? "minuutin" : "minuutti";
              case "mm":
                a = s ? "minuutin" : "minuuttia";
                break;
              case "h":
                return s ? "tunnin" : "tunti";
              case "hh":
                a = s ? "tunnin" : "tuntia";
                break;
              case "d":
                return s ? "päivän" : "päivä";
              case "dd":
                a = s ? "päivän" : "päivää";
                break;
              case "M":
                return s ? "kuukauden" : "kuukausi";
              case "MM":
                a = s ? "kuukauden" : "kuukautta";
                break;
              case "y":
                return s ? "vuoden" : "vuosi";
              case "yy":
                a = s ? "vuoden" : "vuotta";
            }
            return (a =
              (function (e, r) {
                return e < 10 ? (r ? n[e] : t[e]) : e;
              })(e, s) +
              " " +
              a);
          }
          e.defineLocale("fi", {
            months:
              "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
                "_"
              ),
            monthsShort:
              "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
                "_"
              ),
            weekdays:
              "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
                "_"
              ),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "Do MMMM[ta] YYYY",
              LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
              LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
              l: "D.M.YYYY",
              ll: "Do MMM YYYY",
              lll: "Do MMM YYYY, [klo] HH.mm",
              llll: "ddd, Do MMM YYYY, [klo] HH.mm",
            },
            calendar: {
              sameDay: "[tänään] [klo] LT",
              nextDay: "[huomenna] [klo] LT",
              nextWeek: "dddd [klo] LT",
              lastDay: "[eilen] [klo] LT",
              lastWeek: "[viime] dddd[na] [klo] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s päästä",
              past: "%s sitten",
              s: r,
              ss: r,
              m: r,
              mm: r,
              h: r,
              hh: r,
              d: r,
              dd: r,
              M: r,
              MM: r,
              y: r,
              yy: r,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("fil", {
            months:
              "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
                "_"
              ),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
              "_"
            ),
            weekdays:
              "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "MM/D/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY HH:mm",
              LLLL: "dddd, MMMM DD, YYYY HH:mm",
            },
            calendar: {
              sameDay: "LT [ngayong araw]",
              nextDay: "[Bukas ng] LT",
              nextWeek: "LT [sa susunod na] dddd",
              lastDay: "LT [kahapon]",
              lastWeek: "LT [noong nakaraang] dddd",
              sameElse: "L",
            },
            relativeTime: {
              future: "sa loob ng %s",
              past: "%s ang nakalipas",
              s: "ilang segundo",
              ss: "%d segundo",
              m: "isang minuto",
              mm: "%d minuto",
              h: "isang oras",
              hh: "%d oras",
              d: "isang araw",
              dd: "%d araw",
              M: "isang buwan",
              MM: "%d buwan",
              y: "isang taon",
              yy: "%d taon",
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("fo", {
            months:
              "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
              "_"
            ),
            weekdays:
              "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
                "_"
              ),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D. MMMM, YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Í dag kl.] LT",
              nextDay: "[Í morgin kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[Í gjár kl.] LT",
              lastWeek: "[síðstu] dddd [kl] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "um %s",
              past: "%s síðani",
              s: "fá sekund",
              ss: "%d sekundir",
              m: "ein minuttur",
              mm: "%d minuttir",
              h: "ein tími",
              hh: "%d tímar",
              d: "ein dagur",
              dd: "%d dagar",
              M: "ein mánaður",
              MM: "%d mánaðir",
              y: "eitt ár",
              yy: "%d ár",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t =
              /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
            n = [
              /^janv/i,
              /^févr/i,
              /^mars/i,
              /^avr/i,
              /^mai/i,
              /^juin/i,
              /^juil/i,
              /^août/i,
              /^sept/i,
              /^oct/i,
              /^nov/i,
              /^déc/i,
            ];
          e.defineLocale("fr", {
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            monthsRegex: t,
            monthsShortRegex: t,
            monthsStrictRegex:
              /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
            monthsShortStrictRegex:
              /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
              "_"
            ),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Aujourd’hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              ss: "%d secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              w: "une semaine",
              ww: "%d semaines",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, t) {
              switch (t) {
                case "D":
                  return e + (1 === e ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                  return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                  return e + (1 === e ? "re" : "e");
              }
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("fr-ca", {
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
              "_"
            ),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Aujourd’hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              ss: "%d secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
              switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                  return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                  return e + (1 === e ? "re" : "e");
              }
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("fr-ch", {
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
              "_"
            ),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Aujourd’hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              ss: "%d secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
              switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                  return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                  return e + (1 === e ? "re" : "e");
              }
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t =
              "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
                "_"
              ),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
          e.defineLocale("fy", {
            months:
              "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
                "_"
              ),
            monthsShort: function (e, r) {
              return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split(
              "_"
            ),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[hjoed om] LT",
              nextDay: "[moarn om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[juster om] LT",
              lastWeek: "[ôfrûne] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "oer %s",
              past: "%s lyn",
              s: "in pear sekonden",
              ss: "%d sekonden",
              m: "ien minút",
              mm: "%d minuten",
              h: "ien oere",
              hh: "%d oeren",
              d: "ien dei",
              dd: "%d dagen",
              M: "ien moanne",
              MM: "%d moannen",
              y: "ien jier",
              yy: "%d jierren",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("ga", {
            months: [
              "Eanáir",
              "Feabhra",
              "Márta",
              "Aibreán",
              "Bealtaine",
              "Meitheamh",
              "Iúil",
              "Lúnasa",
              "Meán Fómhair",
              "Deireadh Fómhair",
              "Samhain",
              "Nollaig",
            ],
            monthsShort: [
              "Ean",
              "Feabh",
              "Márt",
              "Aib",
              "Beal",
              "Meith",
              "Iúil",
              "Lún",
              "M.F.",
              "D.F.",
              "Samh",
              "Noll",
            ],
            monthsParseExact: !0,
            weekdays: [
              "Dé Domhnaigh",
              "Dé Luain",
              "Dé Máirt",
              "Dé Céadaoin",
              "Déardaoin",
              "Dé hAoine",
              "Dé Sathairn",
            ],
            weekdaysShort: [
              "Domh",
              "Luan",
              "Máirt",
              "Céad",
              "Déar",
              "Aoine",
              "Sath",
            ],
            weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Inniu ag] LT",
              nextDay: "[Amárach ag] LT",
              nextWeek: "dddd [ag] LT",
              lastDay: "[Inné ag] LT",
              lastWeek: "dddd [seo caite] [ag] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "i %s",
              past: "%s ó shin",
              s: "cúpla soicind",
              ss: "%d soicind",
              m: "nóiméad",
              mm: "%d nóiméad",
              h: "uair an chloig",
              hh: "%d uair an chloig",
              d: "lá",
              dd: "%d lá",
              M: "mí",
              MM: "%d míonna",
              y: "bliain",
              yy: "%d bliain",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
              return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("gd", {
            months: [
              "Am Faoilleach",
              "An Gearran",
              "Am Màrt",
              "An Giblean",
              "An Cèitean",
              "An t-Ògmhios",
              "An t-Iuchar",
              "An Lùnastal",
              "An t-Sultain",
              "An Dàmhair",
              "An t-Samhain",
              "An Dùbhlachd",
            ],
            monthsShort: [
              "Faoi",
              "Gear",
              "Màrt",
              "Gibl",
              "Cèit",
              "Ògmh",
              "Iuch",
              "Lùn",
              "Sult",
              "Dàmh",
              "Samh",
              "Dùbh",
            ],
            monthsParseExact: !0,
            weekdays: [
              "Didòmhnaich",
              "Diluain",
              "Dimàirt",
              "Diciadain",
              "Diardaoin",
              "Dihaoine",
              "Disathairne",
            ],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[An-diugh aig] LT",
              nextDay: "[A-màireach aig] LT",
              nextWeek: "dddd [aig] LT",
              lastDay: "[An-dè aig] LT",
              lastWeek: "dddd [seo chaidh] [aig] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ann an %s",
              past: "bho chionn %s",
              s: "beagan diogan",
              ss: "%d diogan",
              m: "mionaid",
              mm: "%d mionaidean",
              h: "uair",
              hh: "%d uairean",
              d: "latha",
              dd: "%d latha",
              M: "mìos",
              MM: "%d mìosan",
              y: "bliadhna",
              yy: "%d bliadhna",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
              return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("gl", {
            months:
              "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split(
                "_"
              ),
            monthsShort:
              "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
            },
            calendar: {
              sameDay: function () {
                return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
              },
              nextDay: function () {
                return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
              },
              nextWeek: function () {
                return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
              },
              lastDay: function () {
                return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return 0 === e.indexOf("un") ? "n" + e : "en " + e;
              },
              past: "hai %s",
              s: "uns segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "unha hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un ano",
              yy: "%d anos",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n, r) {
            var i = {
              s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
              ss: [e + " सॅकंडांनी", e + " सॅकंड"],
              m: ["एका मिणटान", "एक मिनूट"],
              mm: [e + " मिणटांनी", e + " मिणटां"],
              h: ["एका वरान", "एक वर"],
              hh: [e + " वरांनी", e + " वरां"],
              d: ["एका दिसान", "एक दीस"],
              dd: [e + " दिसांनी", e + " दीस"],
              M: ["एका म्हयन्यान", "एक म्हयनो"],
              MM: [e + " म्हयन्यानी", e + " म्हयने"],
              y: ["एका वर्सान", "एक वर्स"],
              yy: [e + " वर्सांनी", e + " वर्सां"],
            };
            return r ? i[n][0] : i[n][1];
          }
          e.defineLocale("gom-deva", {
            months: {
              standalone:
                "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
                  "_"
                ),
              format:
                "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split(
                  "_"
                ),
              isFormat: /MMMM(\s)+D[oD]?/,
            },
            monthsShort:
              "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split(
              "_"
            ),
            weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
            weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "A h:mm [वाजतां]",
              LTS: "A h:mm:ss [वाजतां]",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY A h:mm [वाजतां]",
              LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
              llll: "ddd, D MMM YYYY, A h:mm [वाजतां]",
            },
            calendar: {
              sameDay: "[आयज] LT",
              nextDay: "[फाल्यां] LT",
              nextWeek: "[फुडलो] dddd[,] LT",
              lastDay: "[काल] LT",
              lastWeek: "[फाटलो] dddd[,] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s",
              past: "%s आदीं",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
            ordinal: function (e, t) {
              switch (t) {
                case "D":
                  return e + "वेर";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                  return e;
              }
            },
            week: { dow: 0, doy: 3 },
            meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "राती" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "सकाळीं" === t
                  ? e
                  : "दनपारां" === t
                  ? e > 12
                    ? e
                    : e + 12
                  : "सांजे" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "राती"
                : e < 12
                ? "सकाळीं"
                : e < 16
                ? "दनपारां"
                : e < 20
                ? "सांजे"
                : "राती";
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n, r) {
            var i = {
              s: ["thoddea sekondamni", "thodde sekond"],
              ss: [e + " sekondamni", e + " sekond"],
              m: ["eka mintan", "ek minut"],
              mm: [e + " mintamni", e + " mintam"],
              h: ["eka voran", "ek vor"],
              hh: [e + " voramni", e + " voram"],
              d: ["eka disan", "ek dis"],
              dd: [e + " disamni", e + " dis"],
              M: ["eka mhoinean", "ek mhoino"],
              MM: [e + " mhoineamni", e + " mhoine"],
              y: ["eka vorsan", "ek voros"],
              yy: [e + " vorsamni", e + " vorsam"],
            };
            return r ? i[n][0] : i[n][1];
          }
          e.defineLocale("gom-latn", {
            months: {
              standalone:
                "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
                  "_"
                ),
              format:
                "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split(
                  "_"
                ),
              isFormat: /MMMM(\s)+D[oD]?/,
            },
            monthsShort:
              "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split(
              "_"
            ),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "A h:mm [vazta]",
              LTS: "A h:mm:ss [vazta]",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY A h:mm [vazta]",
              LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
              llll: "ddd, D MMM YYYY, A h:mm [vazta]",
            },
            calendar: {
              sameDay: "[Aiz] LT",
              nextDay: "[Faleam] LT",
              nextWeek: "[Fuddlo] dddd[,] LT",
              lastDay: "[Kal] LT",
              lastWeek: "[Fattlo] dddd[,] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s",
              past: "%s adim",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (e, t) {
              switch (t) {
                case "D":
                  return e + "er";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                  return e;
              }
            },
            week: { dow: 0, doy: 3 },
            meridiemParse: /rati|sokallim|donparam|sanje/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "rati" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "sokallim" === t
                  ? e
                  : "donparam" === t
                  ? e > 12
                    ? e
                    : e + 12
                  : "sanje" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "rati"
                : e < 12
                ? "sokallim"
                : e < 16
                ? "donparam"
                : e < 20
                ? "sanje"
                : "rati";
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "૧",
              2: "૨",
              3: "૩",
              4: "૪",
              5: "૫",
              6: "૬",
              7: "૭",
              8: "૮",
              9: "૯",
              0: "૦",
            },
            n = {
              "૧": "1",
              "૨": "2",
              "૩": "3",
              "૪": "4",
              "૫": "5",
              "૬": "6",
              "૭": "7",
              "૮": "8",
              "૯": "9",
              "૦": "0",
            };
          e.defineLocale("gu", {
            months:
              "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split(
                "_"
              ),
            monthsShort:
              "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split(
              "_"
            ),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
              LT: "A h:mm વાગ્યે",
              LTS: "A h:mm:ss વાગ્યે",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm વાગ્યે",
              LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે",
            },
            calendar: {
              sameDay: "[આજ] LT",
              nextDay: "[કાલે] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ગઇકાલે] LT",
              lastWeek: "[પાછલા] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s મા",
              past: "%s પહેલા",
              s: "અમુક પળો",
              ss: "%d સેકંડ",
              m: "એક મિનિટ",
              mm: "%d મિનિટ",
              h: "એક કલાક",
              hh: "%d કલાક",
              d: "એક દિવસ",
              dd: "%d દિવસ",
              M: "એક મહિનો",
              MM: "%d મહિનો",
              y: "એક વર્ષ",
              yy: "%d વર્ષ",
            },
            preparse: function (e) {
              return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "રાત" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "સવાર" === t
                  ? e
                  : "બપોર" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "સાંજ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "રાત"
                : e < 10
                ? "સવાર"
                : e < 17
                ? "બપોર"
                : e < 20
                ? "સાંજ"
                : "રાત";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("he", {
            months:
              "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
                "_"
              ),
            monthsShort:
              "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split(
                "_"
              ),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [ב]MMMM YYYY",
              LLL: "D [ב]MMMM YYYY HH:mm",
              LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
              l: "D/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd, D MMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[היום ב־]LT",
              nextDay: "[מחר ב־]LT",
              nextWeek: "dddd [בשעה] LT",
              lastDay: "[אתמול ב־]LT",
              lastWeek: "[ביום] dddd [האחרון בשעה] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "בעוד %s",
              past: "לפני %s",
              s: "מספר שניות",
              ss: "%d שניות",
              m: "דקה",
              mm: "%d דקות",
              h: "שעה",
              hh: function (e) {
                return 2 === e ? "שעתיים" : e + " שעות";
              },
              d: "יום",
              dd: function (e) {
                return 2 === e ? "יומיים" : e + " ימים";
              },
              M: "חודש",
              MM: function (e) {
                return 2 === e ? "חודשיים" : e + " חודשים";
              },
              y: "שנה",
              yy: function (e) {
                return 2 === e
                  ? "שנתיים"
                  : e % 10 == 0 && 10 !== e
                  ? e + " שנה"
                  : e + " שנים";
              },
            },
            meridiemParse:
              /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (e) {
              return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 5
                ? "לפנות בוקר"
                : e < 10
                ? "בבוקר"
                : e < 12
                ? n
                  ? 'לפנה"צ'
                  : "לפני הצהריים"
                : e < 18
                ? n
                  ? 'אחה"צ'
                  : "אחרי הצהריים"
                : "בערב";
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "१",
              2: "२",
              3: "३",
              4: "४",
              5: "५",
              6: "६",
              7: "७",
              8: "८",
              9: "९",
              0: "०",
            },
            n = {
              "१": "1",
              "२": "2",
              "३": "3",
              "४": "4",
              "५": "5",
              "६": "6",
              "७": "7",
              "८": "8",
              "९": "9",
              "०": "0",
            },
            r = [
              /^जन/i,
              /^फ़र|फर/i,
              /^मार्च/i,
              /^अप्रै/i,
              /^मई/i,
              /^जून/i,
              /^जुल/i,
              /^अग/i,
              /^सितं|सित/i,
              /^अक्टू/i,
              /^नव|नवं/i,
              /^दिसं|दिस/i,
            ];
          e.defineLocale("hi", {
            months: {
              format:
                "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
                  "_"
                ),
              standalone:
                "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split(
                  "_"
                ),
            },
            monthsShort:
              "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
                "_"
              ),
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split(
              "_"
            ),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
              LT: "A h:mm बजे",
              LTS: "A h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, A h:mm बजे",
            },
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: [
              /^जन/i,
              /^फ़र/i,
              /^मार्च/i,
              /^अप्रै/i,
              /^मई/i,
              /^जून/i,
              /^जुल/i,
              /^अग/i,
              /^सित/i,
              /^अक्टू/i,
              /^नव/i,
              /^दिस/i,
            ],
            monthsRegex:
              /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
            monthsShortRegex:
              /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
            monthsStrictRegex:
              /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
            monthsShortStrictRegex:
              /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[कल] LT",
              nextWeek: "dddd, LT",
              lastDay: "[कल] LT",
              lastWeek: "[पिछले] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s में",
              past: "%s पहले",
              s: "कुछ ही क्षण",
              ss: "%d सेकंड",
              m: "एक मिनट",
              mm: "%d मिनट",
              h: "एक घंटा",
              hh: "%d घंटे",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महीने",
              MM: "%d महीने",
              y: "एक वर्ष",
              yy: "%d वर्ष",
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "रात" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "सुबह" === t
                  ? e
                  : "दोपहर" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "शाम" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "रात"
                : e < 10
                ? "सुबह"
                : e < 17
                ? "दोपहर"
                : e < 20
                ? "शाम"
                : "रात";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n) {
            var r = e + " ";
            switch (n) {
              case "ss":
                return (r +=
                  1 === e
                    ? "sekunda"
                    : 2 === e || 3 === e || 4 === e
                    ? "sekunde"
                    : "sekundi");
              case "m":
                return t ? "jedna minuta" : "jedne minute";
              case "mm":
                return (r +=
                  1 === e
                    ? "minuta"
                    : 2 === e || 3 === e || 4 === e
                    ? "minute"
                    : "minuta");
              case "h":
                return t ? "jedan sat" : "jednog sata";
              case "hh":
                return (r +=
                  1 === e
                    ? "sat"
                    : 2 === e || 3 === e || 4 === e
                    ? "sata"
                    : "sati");
              case "dd":
                return (r += 1 === e ? "dan" : "dana");
              case "MM":
                return (r +=
                  1 === e
                    ? "mjesec"
                    : 2 === e || 3 === e || 4 === e
                    ? "mjeseca"
                    : "mjeseci");
              case "yy":
                return (r +=
                  1 === e
                    ? "godina"
                    : 2 === e || 3 === e || 4 === e
                    ? "godine"
                    : "godina");
            }
          }
          e.defineLocale("hr", {
            months: {
              format:
                "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
                  "_"
                ),
              standalone:
                "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
                  "_"
                ),
            },
            monthsShort:
              "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
                "_"
              ),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "Do MMMM YYYY",
              LLL: "Do MMMM YYYY H:mm",
              LLLL: "dddd, Do MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[jučer u] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[prošlu] [nedjelju] [u] LT";
                  case 3:
                    return "[prošlu] [srijedu] [u] LT";
                  case 6:
                    return "[prošle] [subote] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "par sekundi",
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: "dan",
              dd: t,
              M: "mjesec",
              MM: t,
              y: "godinu",
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t =
            "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(
              " "
            );
          function n(e, t, n, r) {
            var i = e;
            switch (n) {
              case "s":
                return r || t ? "néhány másodperc" : "néhány másodperce";
              case "ss":
                return i + (r || t) ? " másodperc" : " másodperce";
              case "m":
                return "egy" + (r || t ? " perc" : " perce");
              case "mm":
                return i + (r || t ? " perc" : " perce");
              case "h":
                return "egy" + (r || t ? " óra" : " órája");
              case "hh":
                return i + (r || t ? " óra" : " órája");
              case "d":
                return "egy" + (r || t ? " nap" : " napja");
              case "dd":
                return i + (r || t ? " nap" : " napja");
              case "M":
                return "egy" + (r || t ? " hónap" : " hónapja");
              case "MM":
                return i + (r || t ? " hónap" : " hónapja");
              case "y":
                return "egy" + (r || t ? " év" : " éve");
              case "yy":
                return i + (r || t ? " év" : " éve");
            }
            return "";
          }
          function r(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]";
          }
          e.defineLocale("hu", {
            months:
              "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
                "_"
              ),
            monthsShort:
              "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split(
              "_"
            ),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "YYYY.MM.DD.",
              LL: "YYYY. MMMM D.",
              LLL: "YYYY. MMMM D. H:mm",
              LLLL: "YYYY. MMMM D., dddd H:mm",
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
              return "u" === e.charAt(1).toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (!0 === n ? "de" : "DE") : !0 === n ? "du" : "DU";
            },
            calendar: {
              sameDay: "[ma] LT[-kor]",
              nextDay: "[holnap] LT[-kor]",
              nextWeek: function () {
                return r.call(this, !0);
              },
              lastDay: "[tegnap] LT[-kor]",
              lastWeek: function () {
                return r.call(this, !1);
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "%s múlva",
              past: "%s",
              s: n,
              ss: n,
              m: n,
              mm: n,
              h: n,
              hh: n,
              d: n,
              dd: n,
              M: n,
              MM: n,
              y: n,
              yy: n,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("hy-am", {
            months: {
              format:
                "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
                  "_"
                ),
              standalone:
                "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split(
                  "_"
                ),
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split(
              "_"
            ),
            weekdays:
              "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
                "_"
              ),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY թ.",
              LLL: "D MMMM YYYY թ., HH:mm",
              LLLL: "dddd, D MMMM YYYY թ., HH:mm",
            },
            calendar: {
              sameDay: "[այսօր] LT",
              nextDay: "[վաղը] LT",
              lastDay: "[երեկ] LT",
              nextWeek: function () {
                return "dddd [օրը ժամը] LT";
              },
              lastWeek: function () {
                return "[անցած] dddd [օրը ժամը] LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "%s հետո",
              past: "%s առաջ",
              s: "մի քանի վայրկյան",
              ss: "%d վայրկյան",
              m: "րոպե",
              mm: "%d րոպե",
              h: "ժամ",
              hh: "%d ժամ",
              d: "օր",
              dd: "%d օր",
              M: "ամիս",
              MM: "%d ամիս",
              y: "տարի",
              yy: "%d տարի",
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (e) {
              return /^(ցերեկվա|երեկոյան)$/.test(e);
            },
            meridiem: function (e) {
              return e < 4
                ? "գիշերվա"
                : e < 12
                ? "առավոտվա"
                : e < 17
                ? "ցերեկվա"
                : "երեկոյան";
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (e, t) {
              switch (t) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                  return 1 === e ? e + "-ին" : e + "-րդ";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("id", {
            months:
              "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
                "_"
              ),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split(
              "_"
            ),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t
                  ? e
                  : "siang" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "sore" === t || "malam" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Besok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kemarin pukul] LT",
              lastWeek: "dddd [lalu pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lalu",
              s: "beberapa detik",
              ss: "%d detik",
              m: "semenit",
              mm: "%d menit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e) {
            return e % 100 == 11 || e % 10 != 1;
          }
          function n(e, n, r, i) {
            var s = e + " ";
            switch (r) {
              case "s":
                return n || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
              case "ss":
                return t(e)
                  ? s + (n || i ? "sekúndur" : "sekúndum")
                  : s + "sekúnda";
              case "m":
                return n ? "mínúta" : "mínútu";
              case "mm":
                return t(e)
                  ? s + (n || i ? "mínútur" : "mínútum")
                  : n
                  ? s + "mínúta"
                  : s + "mínútu";
              case "hh":
                return t(e)
                  ? s + (n || i ? "klukkustundir" : "klukkustundum")
                  : s + "klukkustund";
              case "d":
                return n ? "dagur" : i ? "dag" : "degi";
              case "dd":
                return t(e)
                  ? n
                    ? s + "dagar"
                    : s + (i ? "daga" : "dögum")
                  : n
                  ? s + "dagur"
                  : s + (i ? "dag" : "degi");
              case "M":
                return n ? "mánuður" : i ? "mánuð" : "mánuði";
              case "MM":
                return t(e)
                  ? n
                    ? s + "mánuðir"
                    : s + (i ? "mánuði" : "mánuðum")
                  : n
                  ? s + "mánuður"
                  : s + (i ? "mánuð" : "mánuði");
              case "y":
                return n || i ? "ár" : "ári";
              case "yy":
                return t(e)
                  ? s + (n || i ? "ár" : "árum")
                  : s + (n || i ? "ár" : "ári");
            }
          }
          e.defineLocale("is", {
            months:
              "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
                "_"
              ),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split(
              "_"
            ),
            weekdays:
              "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
                "_"
              ),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] H:mm",
              LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
            },
            calendar: {
              sameDay: "[í dag kl.] LT",
              nextDay: "[á morgun kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[í gær kl.] LT",
              lastWeek: "[síðasta] dddd [kl.] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "eftir %s",
              past: "fyrir %s síðan",
              s: n,
              ss: n,
              m: n,
              mm: n,
              h: "klukkustund",
              hh: n,
              d: n,
              dd: n,
              M: n,
              MM: n,
              y: n,
              yy: n,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("it", {
            months:
              "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
                "_"
              ),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
              "_"
            ),
            weekdays:
              "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: function () {
                return (
                  "[Oggi a" +
                  (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                  "]LT"
                );
              },
              nextDay: function () {
                return (
                  "[Domani a" +
                  (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                  "]LT"
                );
              },
              nextWeek: function () {
                return (
                  "dddd [a" +
                  (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                  "]LT"
                );
              },
              lastDay: function () {
                return (
                  "[Ieri a" +
                  (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                  "]LT"
                );
              },
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return (
                      "[La scorsa] dddd [a" +
                      (this.hours() > 1
                        ? "lle "
                        : 0 === this.hours()
                        ? " "
                        : "ll'") +
                      "]LT"
                    );
                  default:
                    return (
                      "[Lo scorso] dddd [a" +
                      (this.hours() > 1
                        ? "lle "
                        : 0 === this.hours()
                        ? " "
                        : "ll'") +
                      "]LT"
                    );
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "tra %s",
              past: "%s fa",
              s: "alcuni secondi",
              ss: "%d secondi",
              m: "un minuto",
              mm: "%d minuti",
              h: "un'ora",
              hh: "%d ore",
              d: "un giorno",
              dd: "%d giorni",
              w: "una settimana",
              ww: "%d settimane",
              M: "un mese",
              MM: "%d mesi",
              y: "un anno",
              yy: "%d anni",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("it-ch", {
            months:
              "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
                "_"
              ),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
              "_"
            ),
            weekdays:
              "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Oggi alle] LT",
              nextDay: "[Domani alle] LT",
              nextWeek: "dddd [alle] LT",
              lastDay: "[Ieri alle] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[la scorsa] dddd [alle] LT";
                  default:
                    return "[lo scorso] dddd [alle] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
              },
              past: "%s fa",
              s: "alcuni secondi",
              ss: "%d secondi",
              m: "un minuto",
              mm: "%d minuti",
              h: "un'ora",
              hh: "%d ore",
              d: "un giorno",
              dd: "%d giorni",
              M: "un mese",
              MM: "%d mesi",
              y: "un anno",
              yy: "%d anni",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("ja", {
            eras: [
              {
                since: "2019-05-01",
                offset: 1,
                name: "令和",
                narrow: "㋿",
                abbr: "R",
              },
              {
                since: "1989-01-08",
                until: "2019-04-30",
                offset: 1,
                name: "平成",
                narrow: "㍻",
                abbr: "H",
              },
              {
                since: "1926-12-25",
                until: "1989-01-07",
                offset: 1,
                name: "昭和",
                narrow: "㍼",
                abbr: "S",
              },
              {
                since: "1912-07-30",
                until: "1926-12-24",
                offset: 1,
                name: "大正",
                narrow: "㍽",
                abbr: "T",
              },
              {
                since: "1873-01-01",
                until: "1912-07-29",
                offset: 6,
                name: "明治",
                narrow: "㍾",
                abbr: "M",
              },
              {
                since: "0001-01-01",
                until: "1873-12-31",
                offset: 1,
                name: "西暦",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "紀元前",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            eraYearOrdinalRegex: /(元|\d+)年/,
            eraYearOrdinalParse: function (e, t) {
              return "元" === t[1] ? 1 : parseInt(t[1] || e, 10);
            },
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
              "_"
            ),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日 dddd HH:mm",
              l: "YYYY/MM/DD",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日(ddd) HH:mm",
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
              return "午後" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "午前" : "午後";
            },
            calendar: {
              sameDay: "[今日] LT",
              nextDay: "[明日] LT",
              nextWeek: function (e) {
                return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT";
              },
              lastDay: "[昨日] LT",
              lastWeek: function (e) {
                return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT";
              },
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function (e, t) {
              switch (t) {
                case "y":
                  return 1 === e ? "元年" : e + "年";
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "数秒",
              ss: "%d秒",
              m: "1分",
              mm: "%d分",
              h: "1時間",
              hh: "%d時間",
              d: "1日",
              dd: "%d日",
              M: "1ヶ月",
              MM: "%dヶ月",
              y: "1年",
              yy: "%d年",
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("jv", {
            months:
              "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
                "_"
              ),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split(
              "_"
            ),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "enjing" === t
                  ? e
                  : "siyang" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "sonten" === t || "ndalu" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "enjing"
                : e < 15
                ? "siyang"
                : e < 19
                ? "sonten"
                : "ndalu";
            },
            calendar: {
              sameDay: "[Dinten puniko pukul] LT",
              nextDay: "[Mbenjang pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kala wingi pukul] LT",
              lastWeek: "dddd [kepengker pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "wonten ing %s",
              past: "%s ingkang kepengker",
              s: "sawetawis detik",
              ss: "%d detik",
              m: "setunggal menit",
              mm: "%d menit",
              h: "setunggal jam",
              hh: "%d jam",
              d: "sedinten",
              dd: "%d dinten",
              M: "sewulan",
              MM: "%d wulan",
              y: "setaun",
              yy: "%d taun",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("ka", {
            months:
              "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
                "_"
              ),
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split(
              "_"
            ),
            weekdays: {
              standalone:
                "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
                  "_"
                ),
              format:
                "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split(
                  "_"
                ),
              isFormat: /(წინა|შემდეგ)/,
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[დღეს] LT[-ზე]",
              nextDay: "[ხვალ] LT[-ზე]",
              lastDay: "[გუშინ] LT[-ზე]",
              nextWeek: "[შემდეგ] dddd LT[-ზე]",
              lastWeek: "[წინა] dddd LT-ზე",
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return e.replace(
                  /(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/,
                  function (e, t, n) {
                    return "ი" === n ? t + "ში" : t + n + "ში";
                  }
                );
              },
              past: function (e) {
                return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
                  ? e.replace(/(ი|ე)$/, "ის წინ")
                  : /წელი/.test(e)
                  ? e.replace(/წელი$/, "წლის წინ")
                  : e;
              },
              s: "რამდენიმე წამი",
              ss: "%d წამი",
              m: "წუთი",
              mm: "%d წუთი",
              h: "საათი",
              hh: "%d საათი",
              d: "დღე",
              dd: "%d დღე",
              M: "თვე",
              MM: "%d თვე",
              y: "წელი",
              yy: "%d წელი",
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
              return 0 === e
                ? e
                : 1 === e
                ? e + "-ლი"
                : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
                ? "მე-" + e
                : e + "-ე";
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші",
          };
          e.defineLocale("kk", {
            months:
              "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
                "_"
              ),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split(
              "_"
            ),
            weekdays:
              "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Бүгін сағат] LT",
              nextDay: "[Ертең сағат] LT",
              nextWeek: "dddd [сағат] LT",
              lastDay: "[Кеше сағат] LT",
              lastWeek: "[Өткен аптаның] dddd [сағат] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ішінде",
              past: "%s бұрын",
              s: "бірнеше секунд",
              ss: "%d секунд",
              m: "бір минут",
              mm: "%d минут",
              h: "бір сағат",
              hh: "%d сағат",
              d: "бір күн",
              dd: "%d күн",
              M: "бір ай",
              MM: "%d ай",
              y: "бір жыл",
              yy: "%d жыл",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
              return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "១",
              2: "២",
              3: "៣",
              4: "៤",
              5: "៥",
              6: "៦",
              7: "៧",
              8: "៨",
              9: "៩",
              0: "០",
            },
            n = {
              "១": "1",
              "២": "2",
              "៣": "3",
              "៤": "4",
              "៥": "5",
              "៦": "6",
              "៧": "7",
              "៨": "8",
              "៩": "9",
              "០": "0",
            };
          e.defineLocale("km", {
            months:
              "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
                "_"
              ),
            monthsShort:
              "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
                "_"
              ),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function (e) {
              return "ល្ងាច" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ព្រឹក" : "ល្ងាច";
            },
            calendar: {
              sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
              nextDay: "[ស្អែក ម៉ោង] LT",
              nextWeek: "dddd [ម៉ោង] LT",
              lastDay: "[ម្សិលមិញ ម៉ោង] LT",
              lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sទៀត",
              past: "%sមុន",
              s: "ប៉ុន្មានវិនាទី",
              ss: "%d វិនាទី",
              m: "មួយនាទី",
              mm: "%d នាទី",
              h: "មួយម៉ោង",
              hh: "%d ម៉ោង",
              d: "មួយថ្ងៃ",
              dd: "%d ថ្ងៃ",
              M: "មួយខែ",
              MM: "%d ខែ",
              y: "មួយឆ្នាំ",
              yy: "%d ឆ្នាំ",
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function (e) {
              return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "೧",
              2: "೨",
              3: "೩",
              4: "೪",
              5: "೫",
              6: "೬",
              7: "೭",
              8: "೮",
              9: "೯",
              0: "೦",
            },
            n = {
              "೧": "1",
              "೨": "2",
              "೩": "3",
              "೪": "4",
              "೫": "5",
              "೬": "6",
              "೭": "7",
              "೮": "8",
              "೯": "9",
              "೦": "0",
            };
          e.defineLocale("kn", {
            months:
              "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split(
                "_"
              ),
            monthsShort:
              "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            calendar: {
              sameDay: "[ಇಂದು] LT",
              nextDay: "[ನಾಳೆ] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ನಿನ್ನೆ] LT",
              lastWeek: "[ಕೊನೆಯ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ನಂತರ",
              past: "%s ಹಿಂದೆ",
              s: "ಕೆಲವು ಕ್ಷಣಗಳು",
              ss: "%d ಸೆಕೆಂಡುಗಳು",
              m: "ಒಂದು ನಿಮಿಷ",
              mm: "%d ನಿಮಿಷ",
              h: "ಒಂದು ಗಂಟೆ",
              hh: "%d ಗಂಟೆ",
              d: "ಒಂದು ದಿನ",
              dd: "%d ದಿನ",
              M: "ಒಂದು ತಿಂಗಳು",
              MM: "%d ತಿಂಗಳು",
              y: "ಒಂದು ವರ್ಷ",
              yy: "%d ವರ್ಷ",
            },
            preparse: function (e) {
              return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "ರಾತ್ರಿ" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ಬೆಳಿಗ್ಗೆ" === t
                  ? e
                  : "ಮಧ್ಯಾಹ್ನ" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "ಸಂಜೆ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ರಾತ್ರಿ"
                : e < 10
                ? "ಬೆಳಿಗ್ಗೆ"
                : e < 17
                ? "ಮಧ್ಯಾಹ್ನ"
                : e < 20
                ? "ಸಂಜೆ"
                : "ರಾತ್ರಿ";
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function (e) {
              return e + "ನೇ";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
              "_"
            ),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "YYYY.MM.DD.",
              LL: "YYYY년 MMMM D일",
              LLL: "YYYY년 MMMM D일 A h:mm",
              LLLL: "YYYY년 MMMM D일 dddd A h:mm",
              l: "YYYY.MM.DD.",
              ll: "YYYY년 MMMM D일",
              lll: "YYYY년 MMMM D일 A h:mm",
              llll: "YYYY년 MMMM D일 dddd A h:mm",
            },
            calendar: {
              sameDay: "오늘 LT",
              nextDay: "내일 LT",
              nextWeek: "dddd LT",
              lastDay: "어제 LT",
              lastWeek: "지난주 dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s 후",
              past: "%s 전",
              s: "몇 초",
              ss: "%d초",
              m: "1분",
              mm: "%d분",
              h: "한 시간",
              hh: "%d시간",
              d: "하루",
              dd: "%d일",
              M: "한 달",
              MM: "%d달",
              y: "일 년",
              yy: "%d년",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "일";
                case "M":
                  return e + "월";
                case "w":
                case "W":
                  return e + "주";
                default:
                  return e;
              }
            },
            meridiemParse: /오전|오후/,
            isPM: function (e) {
              return "오후" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "오전" : "오후";
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "١",
              2: "٢",
              3: "٣",
              4: "٤",
              5: "٥",
              6: "٦",
              7: "٧",
              8: "٨",
              9: "٩",
              0: "٠",
            },
            n = {
              "١": "1",
              "٢": "2",
              "٣": "3",
              "٤": "4",
              "٥": "5",
              "٦": "6",
              "٧": "7",
              "٨": "8",
              "٩": "9",
              "٠": "0",
            },
            r = [
              "کانونی دووەم",
              "شوبات",
              "ئازار",
              "نیسان",
              "ئایار",
              "حوزەیران",
              "تەمموز",
              "ئاب",
              "ئەیلوول",
              "تشرینی یەكەم",
              "تشرینی دووەم",
              "كانونی یەکەم",
            ];
          e.defineLocale("ku", {
            months: r,
            monthsShort: r,
            weekdays:
              "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split(
                "_"
              ),
            weekdaysShort:
              "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function (e) {
              return /ئێواره‌/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "به‌یانی" : "ئێواره‌";
            },
            calendar: {
              sameDay: "[ئه‌مرۆ كاتژمێر] LT",
              nextDay: "[به‌یانی كاتژمێر] LT",
              nextWeek: "dddd [كاتژمێر] LT",
              lastDay: "[دوێنێ كاتژمێر] LT",
              lastWeek: "dddd [كاتژمێر] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "له‌ %s",
              past: "%s",
              s: "چه‌ند چركه‌یه‌ك",
              ss: "چركه‌ %d",
              m: "یه‌ك خوله‌ك",
              mm: "%d خوله‌ك",
              h: "یه‌ك كاتژمێر",
              hh: "%d كاتژمێر",
              d: "یه‌ك ڕۆژ",
              dd: "%d ڕۆژ",
              M: "یه‌ك مانگ",
              MM: "%d مانگ",
              y: "یه‌ك ساڵ",
              yy: "%d ساڵ",
            },
            preparse: function (e) {
              return e
                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү",
          };
          e.defineLocale("ky", {
            months:
              "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
                "_"
              ),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split(
              "_"
            ),
            weekdays:
              "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Бүгүн саат] LT",
              nextDay: "[Эртең саат] LT",
              nextWeek: "dddd [саат] LT",
              lastDay: "[Кечээ саат] LT",
              lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ичинде",
              past: "%s мурун",
              s: "бирнече секунд",
              ss: "%d секунд",
              m: "бир мүнөт",
              mm: "%d мүнөт",
              h: "бир саат",
              hh: "%d саат",
              d: "бир күн",
              dd: "%d күн",
              M: "бир ай",
              MM: "%d ай",
              y: "бир жыл",
              yy: "%d жыл",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (e) {
              return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n, r) {
            var i = {
              m: ["eng Minutt", "enger Minutt"],
              h: ["eng Stonn", "enger Stonn"],
              d: ["een Dag", "engem Dag"],
              M: ["ee Mount", "engem Mount"],
              y: ["ee Joer", "engem Joer"],
            };
            return t ? i[n][0] : i[n][1];
          }
          function n(e) {
            if (((e = parseInt(e, 10)), isNaN(e))) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
              var t = e % 10;
              return n(0 === t ? e / 10 : t);
            }
            if (e < 1e4) {
              for (; e >= 10; ) e /= 10;
              return n(e);
            }
            return n((e /= 1e3));
          }
          e.defineLocale("lb", {
            months:
              "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            monthsShort:
              "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
                "_"
              ),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm [Auer]",
              LTS: "H:mm:ss [Auer]",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm [Auer]",
              LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
            },
            calendar: {
              sameDay: "[Haut um] LT",
              sameElse: "L",
              nextDay: "[Muer um] LT",
              nextWeek: "dddd [um] LT",
              lastDay: "[Gëschter um] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 2:
                  case 4:
                    return "[Leschten] dddd [um] LT";
                  default:
                    return "[Leschte] dddd [um] LT";
                }
              },
            },
            relativeTime: {
              future: function (e) {
                return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
              },
              past: function (e) {
                return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
              },
              s: "e puer Sekonnen",
              ss: "%d Sekonnen",
              m: t,
              mm: "%d Minutten",
              h: t,
              hh: "%d Stonnen",
              d: t,
              dd: "%d Deeg",
              M: t,
              MM: "%d Méint",
              y: t,
              yy: "%d Joer",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("lo", {
            months:
              "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
                "_"
              ),
            monthsShort:
              "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
                "_"
              ),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "ວັນdddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (e) {
              return "ຕອນແລງ" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
            },
            calendar: {
              sameDay: "[ມື້ນີ້ເວລາ] LT",
              nextDay: "[ມື້ອື່ນເວລາ] LT",
              nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
              lastDay: "[ມື້ວານນີ້ເວລາ] LT",
              lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ອີກ %s",
              past: "%sຜ່ານມາ",
              s: "ບໍ່ເທົ່າໃດວິນາທີ",
              ss: "%d ວິນາທີ",
              m: "1 ນາທີ",
              mm: "%d ນາທີ",
              h: "1 ຊົ່ວໂມງ",
              hh: "%d ຊົ່ວໂມງ",
              d: "1 ມື້",
              dd: "%d ມື້",
              M: "1 ເດືອນ",
              MM: "%d ເດືອນ",
              y: "1 ປີ",
              yy: "%d ປີ",
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (e) {
              return "ທີ່" + e;
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus",
          };
          function n(e, t, n, r) {
            return t ? i(n)[0] : r ? i(n)[1] : i(n)[2];
          }
          function r(e) {
            return e % 10 == 0 || (e > 10 && e < 20);
          }
          function i(e) {
            return t[e].split("_");
          }
          function s(e, t, s, a) {
            var o = e + " ";
            return 1 === e
              ? o + n(0, t, s[0], a)
              : t
              ? o + (r(e) ? i(s)[1] : i(s)[0])
              : a
              ? o + i(s)[1]
              : o + (r(e) ? i(s)[1] : i(s)[2]);
          }
          e.defineLocale("lt", {
            months: {
              format:
                "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
                  "_"
                ),
              standalone:
                "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
                  "_"
                ),
              isFormat:
                /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split(
              "_"
            ),
            weekdays: {
              format:
                "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
                  "_"
                ),
              standalone:
                "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
                  "_"
                ),
              isFormat: /dddd HH:mm/,
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY [m.] MMMM D [d.]",
              LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
              LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
              l: "YYYY-MM-DD",
              ll: "YYYY [m.] MMMM D [d.]",
              lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
              llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
            },
            calendar: {
              sameDay: "[Šiandien] LT",
              nextDay: "[Rytoj] LT",
              nextWeek: "dddd LT",
              lastDay: "[Vakar] LT",
              lastWeek: "[Praėjusį] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "po %s",
              past: "prieš %s",
              s: function (e, t, n, r) {
                return t
                  ? "kelios sekundės"
                  : r
                  ? "kelių sekundžių"
                  : "kelias sekundes";
              },
              ss: s,
              m: n,
              mm: s,
              h: n,
              hh: s,
              d: n,
              dd: s,
              M: n,
              MM: s,
              y: n,
              yy: s,
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
              return e + "-oji";
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_"),
          };
          function n(e, t, n) {
            return n
              ? t % 10 == 1 && t % 100 != 11
                ? e[2]
                : e[3]
              : t % 10 == 1 && t % 100 != 11
              ? e[0]
              : e[1];
          }
          function r(e, r, i) {
            return e + " " + n(t[i], e, r);
          }
          function i(e, r, i) {
            return n(t[i], e, r);
          }
          e.defineLocale("lv", {
            months:
              "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
                "_"
              ),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split(
              "_"
            ),
            weekdays:
              "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
                "_"
              ),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY.",
              LL: "YYYY. [gada] D. MMMM",
              LLL: "YYYY. [gada] D. MMMM, HH:mm",
              LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
            },
            calendar: {
              sameDay: "[Šodien pulksten] LT",
              nextDay: "[Rīt pulksten] LT",
              nextWeek: "dddd [pulksten] LT",
              lastDay: "[Vakar pulksten] LT",
              lastWeek: "[Pagājušā] dddd [pulksten] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "pēc %s",
              past: "pirms %s",
              s: function (e, t) {
                return t ? "dažas sekundes" : "dažām sekundēm";
              },
              ss: r,
              m: i,
              mm: r,
              h: i,
              hh: r,
              d: i,
              dd: r,
              M: i,
              MM: r,
              y: i,
              yy: r,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
            words: {
              ss: ["sekund", "sekunda", "sekundi"],
              m: ["jedan minut", "jednog minuta"],
              mm: ["minut", "minuta", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              dd: ["dan", "dana", "dana"],
              MM: ["mjesec", "mjeseca", "mjeseci"],
              yy: ["godina", "godine", "godina"],
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function (e, n, r) {
              var i = t.words[r];
              return 1 === r.length
                ? n
                  ? i[0]
                  : i[1]
                : e + " " + t.correctGrammaticalCase(e, i);
            },
          };
          e.defineLocale("me", {
            months:
              "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays:
              "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
                "_"
              ),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sjutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[juče u] LT",
              lastWeek: function () {
                return [
                  "[prošle] [nedjelje] [u] LT",
                  "[prošlog] [ponedjeljka] [u] LT",
                  "[prošlog] [utorka] [u] LT",
                  "[prošle] [srijede] [u] LT",
                  "[prošlog] [četvrtka] [u] LT",
                  "[prošlog] [petka] [u] LT",
                  "[prošle] [subote] [u] LT",
                ][this.day()];
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "nekoliko sekundi",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "dan",
              dd: t.translate,
              M: "mjesec",
              MM: t.translate,
              y: "godinu",
              yy: t.translate,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("mi", {
            months:
              "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split(
                "_"
              ),
            monthsShort:
              "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
                "_"
              ),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [i] HH:mm",
              LLLL: "dddd, D MMMM YYYY [i] HH:mm",
            },
            calendar: {
              sameDay: "[i teie mahana, i] LT",
              nextDay: "[apopo i] LT",
              nextWeek: "dddd [i] LT",
              lastDay: "[inanahi i] LT",
              lastWeek: "dddd [whakamutunga i] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "i roto i %s",
              past: "%s i mua",
              s: "te hēkona ruarua",
              ss: "%d hēkona",
              m: "he meneti",
              mm: "%d meneti",
              h: "te haora",
              hh: "%d haora",
              d: "he ra",
              dd: "%d ra",
              M: "he marama",
              MM: "%d marama",
              y: "he tau",
              yy: "%d tau",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("mk", {
            months:
              "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
                "_"
              ),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split(
              "_"
            ),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split(
              "_"
            ),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[Денес во] LT",
              nextDay: "[Утре во] LT",
              nextWeek: "[Во] dddd [во] LT",
              lastDay: "[Вчера во] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[Изминатата] dddd [во] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[Изминатиот] dddd [во] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "за %s",
              past: "пред %s",
              s: "неколку секунди",
              ss: "%d секунди",
              m: "една минута",
              mm: "%d минути",
              h: "еден час",
              hh: "%d часа",
              d: "еден ден",
              dd: "%d дена",
              M: "еден месец",
              MM: "%d месеци",
              y: "една година",
              yy: "%d години",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
              var t = e % 10,
                n = e % 100;
              return 0 === e
                ? e + "-ев"
                : 0 === n
                ? e + "-ен"
                : n > 10 && n < 20
                ? e + "-ти"
                : 1 === t
                ? e + "-ви"
                : 2 === t
                ? e + "-ри"
                : 7 === t || 8 === t
                ? e + "-ми"
                : e + "-ти";
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("ml", {
            months:
              "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
                "_"
              ),
            monthsShort:
              "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
                "_"
              ),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
              LT: "A h:mm -നു",
              LTS: "A h:mm:ss -നു",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm -നു",
              LLLL: "dddd, D MMMM YYYY, A h:mm -നു",
            },
            calendar: {
              sameDay: "[ഇന്ന്] LT",
              nextDay: "[നാളെ] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ഇന്നലെ] LT",
              lastWeek: "[കഴിഞ്ഞ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s കഴിഞ്ഞ്",
              past: "%s മുൻപ്",
              s: "അൽപ നിമിഷങ്ങൾ",
              ss: "%d സെക്കൻഡ്",
              m: "ഒരു മിനിറ്റ്",
              mm: "%d മിനിറ്റ്",
              h: "ഒരു മണിക്കൂർ",
              hh: "%d മണിക്കൂർ",
              d: "ഒരു ദിവസം",
              dd: "%d ദിവസം",
              M: "ഒരു മാസം",
              MM: "%d മാസം",
              y: "ഒരു വർഷം",
              yy: "%d വർഷം",
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                ("രാത്രി" === t && e >= 4) ||
                "ഉച്ച കഴിഞ്ഞ്" === t ||
                "വൈകുന്നേരം" === t
                  ? e + 12
                  : e
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "രാത്രി"
                : e < 12
                ? "രാവിലെ"
                : e < 17
                ? "ഉച്ച കഴിഞ്ഞ്"
                : e < 20
                ? "വൈകുന്നേരം"
                : "രാത്രി";
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n, r) {
            switch (n) {
              case "s":
                return t ? "хэдхэн секунд" : "хэдхэн секундын";
              case "ss":
                return e + (t ? " секунд" : " секундын");
              case "m":
              case "mm":
                return e + (t ? " минут" : " минутын");
              case "h":
              case "hh":
                return e + (t ? " цаг" : " цагийн");
              case "d":
              case "dd":
                return e + (t ? " өдөр" : " өдрийн");
              case "M":
              case "MM":
                return e + (t ? " сар" : " сарын");
              case "y":
              case "yy":
                return e + (t ? " жил" : " жилийн");
              default:
                return e;
            }
          }
          e.defineLocale("mn", {
            months:
              "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
                "_"
              ),
            monthsShort:
              "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY оны MMMMын D",
              LLL: "YYYY оны MMMMын D HH:mm",
              LLLL: "dddd, YYYY оны MMMMын D HH:mm",
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function (e) {
              return "ҮХ" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ҮӨ" : "ҮХ";
            },
            calendar: {
              sameDay: "[Өнөөдөр] LT",
              nextDay: "[Маргааш] LT",
              nextWeek: "[Ирэх] dddd LT",
              lastDay: "[Өчигдөр] LT",
              lastWeek: "[Өнгөрсөн] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s дараа",
              past: "%s өмнө",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + " өдөр";
                default:
                  return e;
              }
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "१",
              2: "२",
              3: "३",
              4: "४",
              5: "५",
              6: "६",
              7: "७",
              8: "८",
              9: "९",
              0: "०",
            },
            n = {
              "१": "1",
              "२": "2",
              "३": "3",
              "४": "4",
              "५": "5",
              "६": "6",
              "७": "7",
              "८": "8",
              "९": "9",
              "०": "0",
            };
          function r(e, t, n, r) {
            var i = "";
            if (t)
              switch (n) {
                case "s":
                  i = "काही सेकंद";
                  break;
                case "ss":
                  i = "%d सेकंद";
                  break;
                case "m":
                  i = "एक मिनिट";
                  break;
                case "mm":
                  i = "%d मिनिटे";
                  break;
                case "h":
                  i = "एक तास";
                  break;
                case "hh":
                  i = "%d तास";
                  break;
                case "d":
                  i = "एक दिवस";
                  break;
                case "dd":
                  i = "%d दिवस";
                  break;
                case "M":
                  i = "एक महिना";
                  break;
                case "MM":
                  i = "%d महिने";
                  break;
                case "y":
                  i = "एक वर्ष";
                  break;
                case "yy":
                  i = "%d वर्षे";
              }
            else
              switch (n) {
                case "s":
                  i = "काही सेकंदां";
                  break;
                case "ss":
                  i = "%d सेकंदां";
                  break;
                case "m":
                  i = "एका मिनिटा";
                  break;
                case "mm":
                  i = "%d मिनिटां";
                  break;
                case "h":
                  i = "एका तासा";
                  break;
                case "hh":
                  i = "%d तासां";
                  break;
                case "d":
                  i = "एका दिवसा";
                  break;
                case "dd":
                  i = "%d दिवसां";
                  break;
                case "M":
                  i = "एका महिन्या";
                  break;
                case "MM":
                  i = "%d महिन्यां";
                  break;
                case "y":
                  i = "एका वर्षा";
                  break;
                case "yy":
                  i = "%d वर्षां";
              }
            return i.replace(/%d/i, e);
          }
          e.defineLocale("mr", {
            months:
              "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
                "_"
              ),
            monthsShort:
              "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split(
              "_"
            ),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
              LT: "A h:mm वाजता",
              LTS: "A h:mm:ss वाजता",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm वाजता",
              LLLL: "dddd, D MMMM YYYY, A h:mm वाजता",
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[उद्या] LT",
              nextWeek: "dddd, LT",
              lastDay: "[काल] LT",
              lastWeek: "[मागील] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sमध्ये",
              past: "%sपूर्वी",
              s: r,
              ss: r,
              m: r,
              mm: r,
              h: r,
              hh: r,
              d: r,
              dd: r,
              M: r,
              MM: r,
              y: r,
              yy: r,
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "पहाटे" === t || "सकाळी" === t
                  ? e
                  : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t
                  ? e >= 12
                    ? e
                    : e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e >= 0 && e < 6
                ? "पहाटे"
                : e < 12
                ? "सकाळी"
                : e < 17
                ? "दुपारी"
                : e < 20
                ? "सायंकाळी"
                : "रात्री";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("ms", {
            months:
              "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
                "_"
              ),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
              "_"
            ),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t
                  ? e
                  : "tengahari" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "petang" === t || "malam" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "pagi"
                : e < 15
                ? "tengahari"
                : e < 19
                ? "petang"
                : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Esok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kelmarin pukul] LT",
              lastWeek: "dddd [lepas pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              ss: "%d saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("ms-my", {
            months:
              "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
                "_"
              ),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
              "_"
            ),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t
                  ? e
                  : "tengahari" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "petang" === t || "malam" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "pagi"
                : e < 15
                ? "tengahari"
                : e < 19
                ? "petang"
                : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Esok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kelmarin pukul] LT",
              lastWeek: "dddd [lepas pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              ss: "%d saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("mt", {
            months:
              "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split(
                "_"
              ),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split(
              "_"
            ),
            weekdays:
              "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split(
                "_"
              ),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Illum fil-]LT",
              nextDay: "[Għada fil-]LT",
              nextWeek: "dddd [fil-]LT",
              lastDay: "[Il-bieraħ fil-]LT",
              lastWeek: "dddd [li għadda] [fil-]LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "f’ %s",
              past: "%s ilu",
              s: "ftit sekondi",
              ss: "%d sekondi",
              m: "minuta",
              mm: "%d minuti",
              h: "siegħa",
              hh: "%d siegħat",
              d: "ġurnata",
              dd: "%d ġranet",
              M: "xahar",
              MM: "%d xhur",
              y: "sena",
              yy: "%d sni",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "၁",
              2: "၂",
              3: "၃",
              4: "၄",
              5: "၅",
              6: "၆",
              7: "၇",
              8: "၈",
              9: "၉",
              0: "၀",
            },
            n = {
              "၁": "1",
              "၂": "2",
              "၃": "3",
              "၄": "4",
              "၅": "5",
              "၆": "6",
              "၇": "7",
              "၈": "8",
              "၉": "9",
              "၀": "0",
            };
          e.defineLocale("my", {
            months:
              "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
                "_"
              ),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split(
              "_"
            ),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split(
              "_"
            ),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[ယနေ.] LT [မှာ]",
              nextDay: "[မနက်ဖြန်] LT [မှာ]",
              nextWeek: "dddd LT [မှာ]",
              lastDay: "[မနေ.က] LT [မှာ]",
              lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
              sameElse: "L",
            },
            relativeTime: {
              future: "လာမည့် %s မှာ",
              past: "လွန်ခဲ့သော %s က",
              s: "စက္ကန်.အနည်းငယ်",
              ss: "%d စက္ကန့်",
              m: "တစ်မိနစ်",
              mm: "%d မိနစ်",
              h: "တစ်နာရီ",
              hh: "%d နာရီ",
              d: "တစ်ရက်",
              dd: "%d ရက်",
              M: "တစ်လ",
              MM: "%d လ",
              y: "တစ်နှစ်",
              yy: "%d နှစ်",
            },
            preparse: function (e) {
              return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("nb", {
            months:
              "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
              "_"
            ),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] HH:mm",
              LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
            },
            calendar: {
              sameDay: "[i dag kl.] LT",
              nextDay: "[i morgen kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[i går kl.] LT",
              lastWeek: "[forrige] dddd [kl.] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "%s siden",
              s: "noen sekunder",
              ss: "%d sekunder",
              m: "ett minutt",
              mm: "%d minutter",
              h: "en time",
              hh: "%d timer",
              d: "en dag",
              dd: "%d dager",
              w: "en uke",
              ww: "%d uker",
              M: "en måned",
              MM: "%d måneder",
              y: "ett år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "१",
              2: "२",
              3: "३",
              4: "४",
              5: "५",
              6: "६",
              7: "७",
              8: "८",
              9: "९",
              0: "०",
            },
            n = {
              "१": "1",
              "२": "2",
              "३": "3",
              "४": "4",
              "५": "5",
              "६": "6",
              "७": "7",
              "८": "8",
              "९": "9",
              "०": "0",
            };
          e.defineLocale("ne", {
            months:
              "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
                "_"
              ),
            monthsShort:
              "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split(
              "_"
            ),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "Aको h:mm बजे",
              LTS: "Aको h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, Aको h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे",
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "राति" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "बिहान" === t
                  ? e
                  : "दिउँसो" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "साँझ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 3
                ? "राति"
                : e < 12
                ? "बिहान"
                : e < 16
                ? "दिउँसो"
                : e < 20
                ? "साँझ"
                : "राति";
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[भोलि] LT",
              nextWeek: "[आउँदो] dddd[,] LT",
              lastDay: "[हिजो] LT",
              lastWeek: "[गएको] dddd[,] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sमा",
              past: "%s अगाडि",
              s: "केही क्षण",
              ss: "%d सेकेण्ड",
              m: "एक मिनेट",
              mm: "%d मिनेट",
              h: "एक घण्टा",
              hh: "%d घण्टा",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महिना",
              MM: "%d महिना",
              y: "एक बर्ष",
              yy: "%d बर्ष",
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t =
              "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
                "_"
              ),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [
              /^jan/i,
              /^feb/i,
              /^maart|mrt.?$/i,
              /^apr/i,
              /^mei$/i,
              /^jun[i.]?$/i,
              /^jul[i.]?$/i,
              /^aug/i,
              /^sep/i,
              /^okt/i,
              /^nov/i,
              /^dec/i,
            ],
            i =
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
          e.defineLocale("nl", {
            months:
              "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
                "_"
              ),
            monthsShort: function (e, r) {
              return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex:
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex:
              /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays:
              "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
                "_"
              ),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[vandaag om] LT",
              nextDay: "[morgen om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[gisteren om] LT",
              lastWeek: "[afgelopen] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              ss: "%d seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              w: "één week",
              ww: "%d weken",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t =
              "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
                "_"
              ),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [
              /^jan/i,
              /^feb/i,
              /^maart|mrt.?$/i,
              /^apr/i,
              /^mei$/i,
              /^jun[i.]?$/i,
              /^jul[i.]?$/i,
              /^aug/i,
              /^sep/i,
              /^okt/i,
              /^nov/i,
              /^dec/i,
            ],
            i =
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
          e.defineLocale("nl-be", {
            months:
              "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
                "_"
              ),
            monthsShort: function (e, r) {
              return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex:
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex:
              /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays:
              "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
                "_"
              ),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[vandaag om] LT",
              nextDay: "[morgen om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[gisteren om] LT",
              lastWeek: "[afgelopen] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              ss: "%d seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("nn", {
            months:
              "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split(
              "_"
            ),
            weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] H:mm",
              LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
            },
            calendar: {
              sameDay: "[I dag klokka] LT",
              nextDay: "[I morgon klokka] LT",
              nextWeek: "dddd [klokka] LT",
              lastDay: "[I går klokka] LT",
              lastWeek: "[Føregåande] dddd [klokka] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "%s sidan",
              s: "nokre sekund",
              ss: "%d sekund",
              m: "eit minutt",
              mm: "%d minutt",
              h: "ein time",
              hh: "%d timar",
              d: "ein dag",
              dd: "%d dagar",
              w: "ei veke",
              ww: "%d veker",
              M: "ein månad",
              MM: "%d månader",
              y: "eit år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("oc-lnc", {
            months: {
              standalone:
                "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split(
                  "_"
                ),
              format:
                "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split(
                  "_"
                ),
              isFormat: /D[oD]?(\s)+MMMM/,
            },
            monthsShort:
              "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [de] YYYY",
              ll: "D MMM YYYY",
              LLL: "D MMMM [de] YYYY [a] H:mm",
              lll: "D MMM YYYY, H:mm",
              LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
              llll: "ddd D MMM YYYY, H:mm",
            },
            calendar: {
              sameDay: "[uèi a] LT",
              nextDay: "[deman a] LT",
              nextWeek: "dddd [a] LT",
              lastDay: "[ièr a] LT",
              lastWeek: "dddd [passat a] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "d'aquí %s",
              past: "fa %s",
              s: "unas segondas",
              ss: "%d segondas",
              m: "una minuta",
              mm: "%d minutas",
              h: "una ora",
              hh: "%d oras",
              d: "un jorn",
              dd: "%d jorns",
              M: "un mes",
              MM: "%d meses",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
              var n =
                1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
              return ("w" !== t && "W" !== t) || (n = "a"), e + n;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "੧",
              2: "੨",
              3: "੩",
              4: "੪",
              5: "੫",
              6: "੬",
              7: "੭",
              8: "੮",
              9: "੯",
              0: "੦",
            },
            n = {
              "੧": "1",
              "੨": "2",
              "੩": "3",
              "੪": "4",
              "੫": "5",
              "੬": "6",
              "੭": "7",
              "੮": "8",
              "੯": "9",
              "੦": "0",
            };
          e.defineLocale("pa-in", {
            months:
              "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
                "_"
              ),
            monthsShort:
              "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
                "_"
              ),
            weekdays:
              "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
              LT: "A h:mm ਵਜੇ",
              LTS: "A h:mm:ss ਵਜੇ",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
              LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ",
            },
            calendar: {
              sameDay: "[ਅਜ] LT",
              nextDay: "[ਕਲ] LT",
              nextWeek: "[ਅਗਲਾ] dddd, LT",
              lastDay: "[ਕਲ] LT",
              lastWeek: "[ਪਿਛਲੇ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ਵਿੱਚ",
              past: "%s ਪਿਛਲੇ",
              s: "ਕੁਝ ਸਕਿੰਟ",
              ss: "%d ਸਕਿੰਟ",
              m: "ਇਕ ਮਿੰਟ",
              mm: "%d ਮਿੰਟ",
              h: "ਇੱਕ ਘੰਟਾ",
              hh: "%d ਘੰਟੇ",
              d: "ਇੱਕ ਦਿਨ",
              dd: "%d ਦਿਨ",
              M: "ਇੱਕ ਮਹੀਨਾ",
              MM: "%d ਮਹੀਨੇ",
              y: "ਇੱਕ ਸਾਲ",
              yy: "%d ਸਾਲ",
            },
            preparse: function (e) {
              return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "ਰਾਤ" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ਸਵੇਰ" === t
                  ? e
                  : "ਦੁਪਹਿਰ" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "ਸ਼ਾਮ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ਰਾਤ"
                : e < 10
                ? "ਸਵੇਰ"
                : e < 17
                ? "ਦੁਪਹਿਰ"
                : e < 20
                ? "ਸ਼ਾਮ"
                : "ਰਾਤ";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t =
              "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
                "_"
              ),
            n =
              "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
                "_"
              ),
            r = [
              /^sty/i,
              /^lut/i,
              /^mar/i,
              /^kwi/i,
              /^maj/i,
              /^cze/i,
              /^lip/i,
              /^sie/i,
              /^wrz/i,
              /^paź/i,
              /^lis/i,
              /^gru/i,
            ];
          function i(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
          }
          function s(e, t, n) {
            var r = e + " ";
            switch (n) {
              case "ss":
                return r + (i(e) ? "sekundy" : "sekund");
              case "m":
                return t ? "minuta" : "minutę";
              case "mm":
                return r + (i(e) ? "minuty" : "minut");
              case "h":
                return t ? "godzina" : "godzinę";
              case "hh":
                return r + (i(e) ? "godziny" : "godzin");
              case "ww":
                return r + (i(e) ? "tygodnie" : "tygodni");
              case "MM":
                return r + (i(e) ? "miesiące" : "miesięcy");
              case "yy":
                return r + (i(e) ? "lata" : "lat");
            }
          }
          e.defineLocale("pl", {
            months: function (e, r) {
              return e ? (/D MMMM/.test(r) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split(
              "_"
            ),
            monthsParse: r,
            longMonthsParse: r,
            shortMonthsParse: r,
            weekdays:
              "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
                "_"
              ),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Dziś o] LT",
              nextDay: "[Jutro o] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[W niedzielę o] LT";
                  case 2:
                    return "[We wtorek o] LT";
                  case 3:
                    return "[W środę o] LT";
                  case 6:
                    return "[W sobotę o] LT";
                  default:
                    return "[W] dddd [o] LT";
                }
              },
              lastDay: "[Wczoraj o] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[W zeszłą niedzielę o] LT";
                  case 3:
                    return "[W zeszłą środę o] LT";
                  case 6:
                    return "[W zeszłą sobotę o] LT";
                  default:
                    return "[W zeszły] dddd [o] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "%s temu",
              s: "kilka sekund",
              ss: s,
              m: s,
              mm: s,
              h: s,
              hh: s,
              d: "1 dzień",
              dd: "%d dni",
              w: "tydzień",
              ww: s,
              M: "miesiąc",
              MM: s,
              y: "rok",
              yy: s,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("pt", {
            months:
              "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
                "_"
              ),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
              "_"
            ),
            weekdays:
              "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
                "_"
              ),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY HH:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Hoje às] LT",
              nextDay: "[Amanhã às] LT",
              nextWeek: "dddd [às] LT",
              lastDay: "[Ontem às] LT",
              lastWeek: function () {
                return 0 === this.day() || 6 === this.day()
                  ? "[Último] dddd [às] LT"
                  : "[Última] dddd [às] LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "em %s",
              past: "há %s",
              s: "segundos",
              ss: "%d segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              w: "uma semana",
              ww: "%d semanas",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("pt-br", {
            months:
              "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
                "_"
              ),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
              "_"
            ),
            weekdays:
              "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
                "_"
              ),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
            weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
            },
            calendar: {
              sameDay: "[Hoje às] LT",
              nextDay: "[Amanhã às] LT",
              nextWeek: "dddd [às] LT",
              lastDay: "[Ontem às] LT",
              lastWeek: function () {
                return 0 === this.day() || 6 === this.day()
                  ? "[Último] dddd [às] LT"
                  : "[Última] dddd [às] LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "em %s",
              past: "há %s",
              s: "poucos segundos",
              ss: "%d segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            invalidDate: "Data inválida",
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n) {
            var r = " ";
            return (
              (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (r = " de "),
              e +
                r +
                {
                  ss: "secunde",
                  mm: "minute",
                  hh: "ore",
                  dd: "zile",
                  ww: "săptămâni",
                  MM: "luni",
                  yy: "ani",
                }[n]
            );
          }
          e.defineLocale("ro", {
            months:
              "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
                "_"
              ),
            monthsShort:
              "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[azi la] LT",
              nextDay: "[mâine la] LT",
              nextWeek: "dddd [la] LT",
              lastDay: "[ieri la] LT",
              lastWeek: "[fosta] dddd [la] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "peste %s",
              past: "%s în urmă",
              s: "câteva secunde",
              ss: t,
              m: "un minut",
              mm: t,
              h: "o oră",
              hh: t,
              d: "o zi",
              dd: t,
              w: "o săptămână",
              ww: t,
              M: "o lună",
              MM: t,
              y: "un an",
              yy: t,
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n) {
            var r, i;
            return "m" === n
              ? t
                ? "минута"
                : "минуту"
              : e +
                  " " +
                  ((r = +e),
                  (i = {
                    ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    ww: "неделя_недели_недель",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет",
                  }[n].split("_")),
                  r % 10 == 1 && r % 100 != 11
                    ? i[0]
                    : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20)
                    ? i[1]
                    : i[2]);
          }
          var n = [
            /^янв/i,
            /^фев/i,
            /^мар/i,
            /^апр/i,
            /^ма[йя]/i,
            /^июн/i,
            /^июл/i,
            /^авг/i,
            /^сен/i,
            /^окт/i,
            /^ноя/i,
            /^дек/i,
          ];
          e.defineLocale("ru", {
            months: {
              format:
                "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
                  "_"
                ),
              standalone:
                "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
                  "_"
                ),
            },
            monthsShort: {
              format:
                "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
                  "_"
                ),
              standalone:
                "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
                  "_"
                ),
            },
            weekdays: {
              standalone:
                "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
                  "_"
                ),
              format:
                "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
                  "_"
                ),
              isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex:
              /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex:
              /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex:
              /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex:
              /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., H:mm",
              LLLL: "dddd, D MMMM YYYY г., H:mm",
            },
            calendar: {
              sameDay: "[Сегодня, в] LT",
              nextDay: "[Завтра, в] LT",
              lastDay: "[Вчера, в] LT",
              nextWeek: function (e) {
                if (e.week() === this.week())
                  return 2 === this.day()
                    ? "[Во] dddd, [в] LT"
                    : "[В] dddd, [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В следующее] dddd, [в] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[В следующий] dddd, [в] LT";
                  case 3:
                  case 5:
                  case 6:
                    return "[В следующую] dddd, [в] LT";
                }
              },
              lastWeek: function (e) {
                if (e.week() === this.week())
                  return 2 === this.day()
                    ? "[Во] dddd, [в] LT"
                    : "[В] dddd, [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В прошлое] dddd, [в] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[В прошлый] dddd, [в] LT";
                  case 3:
                  case 5:
                  case 6:
                    return "[В прошлую] dddd, [в] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "через %s",
              past: "%s назад",
              s: "несколько секунд",
              ss: t,
              m: t,
              mm: t,
              h: "час",
              hh: t,
              d: "день",
              dd: t,
              w: "неделя",
              ww: t,
              M: "месяц",
              MM: t,
              y: "год",
              yy: t,
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
              return /^(дня|вечера)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                  return e + "-й";
                case "D":
                  return e + "-го";
                case "w":
                case "W":
                  return e + "-я";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = [
              "جنوري",
              "فيبروري",
              "مارچ",
              "اپريل",
              "مئي",
              "جون",
              "جولاءِ",
              "آگسٽ",
              "سيپٽمبر",
              "آڪٽوبر",
              "نومبر",
              "ڊسمبر",
            ],
            n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
          e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd، D MMMM YYYY HH:mm",
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
              return "شام" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "صبح" : "شام";
            },
            calendar: {
              sameDay: "[اڄ] LT",
              nextDay: "[سڀاڻي] LT",
              nextWeek: "dddd [اڳين هفتي تي] LT",
              lastDay: "[ڪالهه] LT",
              lastWeek: "[گزريل هفتي] dddd [تي] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s پوء",
              past: "%s اڳ",
              s: "چند سيڪنڊ",
              ss: "%d سيڪنڊ",
              m: "هڪ منٽ",
              mm: "%d منٽ",
              h: "هڪ ڪلاڪ",
              hh: "%d ڪلاڪ",
              d: "هڪ ڏينهن",
              dd: "%d ڏينهن",
              M: "هڪ مهينو",
              MM: "%d مهينا",
              y: "هڪ سال",
              yy: "%d سال",
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("se", {
            months:
              "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
                "_"
              ),
            monthsShort:
              "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
                "_"
              ),
            weekdays:
              "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
                "_"
              ),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "MMMM D. [b.] YYYY",
              LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
              LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
            },
            calendar: {
              sameDay: "[otne ti] LT",
              nextDay: "[ihttin ti] LT",
              nextWeek: "dddd [ti] LT",
              lastDay: "[ikte ti] LT",
              lastWeek: "[ovddit] dddd [ti] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s geažes",
              past: "maŋit %s",
              s: "moadde sekunddat",
              ss: "%d sekunddat",
              m: "okta minuhta",
              mm: "%d minuhtat",
              h: "okta diimmu",
              hh: "%d diimmut",
              d: "okta beaivi",
              dd: "%d beaivvit",
              M: "okta mánnu",
              MM: "%d mánut",
              y: "okta jahki",
              yy: "%d jagit",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("si", {
            months:
              "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
                "_"
              ),
            monthsShort:
              "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays:
              "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
                "_"
              ),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "a h:mm",
              LTS: "a h:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY MMMM D",
              LLL: "YYYY MMMM D, a h:mm",
              LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss",
            },
            calendar: {
              sameDay: "[අද] LT[ට]",
              nextDay: "[හෙට] LT[ට]",
              nextWeek: "dddd LT[ට]",
              lastDay: "[ඊයේ] LT[ට]",
              lastWeek: "[පසුගිය] dddd LT[ට]",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sකින්",
              past: "%sකට පෙර",
              s: "තත්පර කිහිපය",
              ss: "තත්පර %d",
              m: "මිනිත්තුව",
              mm: "මිනිත්තු %d",
              h: "පැය",
              hh: "පැය %d",
              d: "දිනය",
              dd: "දින %d",
              M: "මාසය",
              MM: "මාස %d",
              y: "වසර",
              yy: "වසර %d",
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function (e) {
              return e + " වැනි";
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (e) {
              return "ප.ව." === e || "පස් වරු" === e;
            },
            meridiem: function (e, t, n) {
              return e > 11 ? (n ? "ප.ව." : "පස් වරු") : n ? "පෙ.ව." : "පෙර වරු";
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t =
              "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
                "_"
              ),
            n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
          function r(e) {
            return e > 1 && e < 5;
          }
          function i(e, t, n, i) {
            var s = e + " ";
            switch (n) {
              case "s":
                return t || i ? "pár sekúnd" : "pár sekundami";
              case "ss":
                return t || i ? s + (r(e) ? "sekundy" : "sekúnd") : s + "sekundami";
              case "m":
                return t ? "minúta" : i ? "minútu" : "minútou";
              case "mm":
                return t || i ? s + (r(e) ? "minúty" : "minút") : s + "minútami";
              case "h":
                return t ? "hodina" : i ? "hodinu" : "hodinou";
              case "hh":
                return t || i ? s + (r(e) ? "hodiny" : "hodín") : s + "hodinami";
              case "d":
                return t || i ? "deň" : "dňom";
              case "dd":
                return t || i ? s + (r(e) ? "dni" : "dní") : s + "dňami";
              case "M":
                return t || i ? "mesiac" : "mesiacom";
              case "MM":
                return t || i
                  ? s + (r(e) ? "mesiace" : "mesiacov")
                  : s + "mesiacmi";
              case "y":
                return t || i ? "rok" : "rokom";
              case "yy":
                return t || i ? s + (r(e) ? "roky" : "rokov") : s + "rokmi";
            }
          }
          e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split(
              "_"
            ),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[dnes o] LT",
              nextDay: "[zajtra o] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v nedeľu o] LT";
                  case 1:
                  case 2:
                    return "[v] dddd [o] LT";
                  case 3:
                    return "[v stredu o] LT";
                  case 4:
                    return "[vo štvrtok o] LT";
                  case 5:
                    return "[v piatok o] LT";
                  case 6:
                    return "[v sobotu o] LT";
                }
              },
              lastDay: "[včera o] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[minulú nedeľu o] LT";
                  case 1:
                  case 2:
                    return "[minulý] dddd [o] LT";
                  case 3:
                    return "[minulú stredu o] LT";
                  case 4:
                  case 5:
                    return "[minulý] dddd [o] LT";
                  case 6:
                    return "[minulú sobotu o] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "pred %s",
              s: i,
              ss: i,
              m: i,
              mm: i,
              h: i,
              hh: i,
              d: i,
              dd: i,
              M: i,
              MM: i,
              y: i,
              yy: i,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n, r) {
            var i = e + " ";
            switch (n) {
              case "s":
                return t || r ? "nekaj sekund" : "nekaj sekundami";
              case "ss":
                return (i +=
                  1 === e
                    ? t
                      ? "sekundo"
                      : "sekundi"
                    : 2 === e
                    ? t || r
                      ? "sekundi"
                      : "sekundah"
                    : e < 5
                    ? t || r
                      ? "sekunde"
                      : "sekundah"
                    : "sekund");
              case "m":
                return t ? "ena minuta" : "eno minuto";
              case "mm":
                return (i +=
                  1 === e
                    ? t
                      ? "minuta"
                      : "minuto"
                    : 2 === e
                    ? t || r
                      ? "minuti"
                      : "minutama"
                    : e < 5
                    ? t || r
                      ? "minute"
                      : "minutami"
                    : t || r
                    ? "minut"
                    : "minutami");
              case "h":
                return t ? "ena ura" : "eno uro";
              case "hh":
                return (i +=
                  1 === e
                    ? t
                      ? "ura"
                      : "uro"
                    : 2 === e
                    ? t || r
                      ? "uri"
                      : "urama"
                    : e < 5
                    ? t || r
                      ? "ure"
                      : "urami"
                    : t || r
                    ? "ur"
                    : "urami");
              case "d":
                return t || r ? "en dan" : "enim dnem";
              case "dd":
                return (i +=
                  1 === e
                    ? t || r
                      ? "dan"
                      : "dnem"
                    : 2 === e
                    ? t || r
                      ? "dni"
                      : "dnevoma"
                    : t || r
                    ? "dni"
                    : "dnevi");
              case "M":
                return t || r ? "en mesec" : "enim mesecem";
              case "MM":
                return (i +=
                  1 === e
                    ? t || r
                      ? "mesec"
                      : "mesecem"
                    : 2 === e
                    ? t || r
                      ? "meseca"
                      : "mesecema"
                    : e < 5
                    ? t || r
                      ? "mesece"
                      : "meseci"
                    : t || r
                    ? "mesecev"
                    : "meseci");
              case "y":
                return t || r ? "eno leto" : "enim letom";
              case "yy":
                return (i +=
                  1 === e
                    ? t || r
                      ? "leto"
                      : "letom"
                    : 2 === e
                    ? t || r
                      ? "leti"
                      : "letoma"
                    : e < 5
                    ? t || r
                      ? "leta"
                      : "leti"
                    : t || r
                    ? "let"
                    : "leti");
            }
          }
          e.defineLocale("sl", {
            months:
              "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split(
              "_"
            ),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danes ob] LT",
              nextDay: "[jutri ob] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v] [nedeljo] [ob] LT";
                  case 3:
                    return "[v] [sredo] [ob] LT";
                  case 6:
                    return "[v] [soboto] [ob] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[v] dddd [ob] LT";
                }
              },
              lastDay: "[včeraj ob] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[prejšnjo] [nedeljo] [ob] LT";
                  case 3:
                    return "[prejšnjo] [sredo] [ob] LT";
                  case 6:
                    return "[prejšnjo] [soboto] [ob] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prejšnji] dddd [ob] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "čez %s",
              past: "pred %s",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("sq", {
            months:
              "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
                "_"
              ),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split(
              "_"
            ),
            weekdays:
              "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
                "_"
              ),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (e) {
              return "M" === e.charAt(0);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "PD" : "MD";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Sot në] LT",
              nextDay: "[Nesër në] LT",
              nextWeek: "dddd [në] LT",
              lastDay: "[Dje në] LT",
              lastWeek: "dddd [e kaluar në] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "në %s",
              past: "%s më parë",
              s: "disa sekonda",
              ss: "%d sekonda",
              m: "një minutë",
              mm: "%d minuta",
              h: "një orë",
              hh: "%d orë",
              d: "një ditë",
              dd: "%d ditë",
              M: "një muaj",
              MM: "%d muaj",
              y: "një vit",
              yy: "%d vite",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
            words: {
              ss: ["sekunda", "sekunde", "sekundi"],
              m: ["jedan minut", "jedne minute"],
              mm: ["minut", "minute", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              dd: ["dan", "dana", "dana"],
              MM: ["mesec", "meseca", "meseci"],
              yy: ["godina", "godine", "godina"],
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function (e, n, r) {
              var i = t.words[r];
              return 1 === r.length
                ? n
                  ? i[0]
                  : i[1]
                : e + " " + t.correctGrammaticalCase(e, i);
            },
          };
          e.defineLocale("sr", {
            months:
              "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split(
              "_"
            ),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D. M. YYYY.",
              LL: "D. MMMM YYYY.",
              LLL: "D. MMMM YYYY. H:mm",
              LLLL: "dddd, D. MMMM YYYY. H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedelju] [u] LT";
                  case 3:
                    return "[u] [sredu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[juče u] LT",
              lastWeek: function () {
                return [
                  "[prošle] [nedelje] [u] LT",
                  "[prošlog] [ponedeljka] [u] LT",
                  "[prošlog] [utorka] [u] LT",
                  "[prošle] [srede] [u] LT",
                  "[prošlog] [četvrtka] [u] LT",
                  "[prošlog] [petka] [u] LT",
                  "[prošle] [subote] [u] LT",
                ][this.day()];
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "pre %s",
              s: "nekoliko sekundi",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "dan",
              dd: t.translate,
              M: "mesec",
              MM: t.translate,
              y: "godinu",
              yy: t.translate,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
            words: {
              ss: ["секунда", "секунде", "секунди"],
              m: ["један минут", "једне минуте"],
              mm: ["минут", "минуте", "минута"],
              h: ["један сат", "једног сата"],
              hh: ["сат", "сата", "сати"],
              dd: ["дан", "дана", "дана"],
              MM: ["месец", "месеца", "месеци"],
              yy: ["година", "године", "година"],
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function (e, n, r) {
              var i = t.words[r];
              return 1 === r.length
                ? n
                  ? i[0]
                  : i[1]
                : e + " " + t.correctGrammaticalCase(e, i);
            },
          };
          e.defineLocale("sr-cyrl", {
            months:
              "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split(
                "_"
              ),
            monthsShort:
              "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split(
              "_"
            ),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D. M. YYYY.",
              LL: "D. MMMM YYYY.",
              LLL: "D. MMMM YYYY. H:mm",
              LLLL: "dddd, D. MMMM YYYY. H:mm",
            },
            calendar: {
              sameDay: "[данас у] LT",
              nextDay: "[сутра у] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[у] [недељу] [у] LT";
                  case 3:
                    return "[у] [среду] [у] LT";
                  case 6:
                    return "[у] [суботу] [у] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[у] dddd [у] LT";
                }
              },
              lastDay: "[јуче у] LT",
              lastWeek: function () {
                return [
                  "[прошле] [недеље] [у] LT",
                  "[прошлог] [понедељка] [у] LT",
                  "[прошлог] [уторка] [у] LT",
                  "[прошле] [среде] [у] LT",
                  "[прошлог] [четвртка] [у] LT",
                  "[прошлог] [петка] [у] LT",
                  "[прошле] [суботе] [у] LT",
                ][this.day()];
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "за %s",
              past: "пре %s",
              s: "неколико секунди",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "дан",
              dd: t.translate,
              M: "месец",
              MM: t.translate,
              y: "годину",
              yy: t.translate,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("ss", {
            months:
              "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
                "_"
              ),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split(
              "_"
            ),
            weekdays:
              "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
                "_"
              ),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Namuhla nga] LT",
              nextDay: "[Kusasa nga] LT",
              nextWeek: "dddd [nga] LT",
              lastDay: "[Itolo nga] LT",
              lastWeek: "dddd [leliphelile] [nga] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "nga %s",
              past: "wenteka nga %s",
              s: "emizuzwana lomcane",
              ss: "%d mzuzwana",
              m: "umzuzu",
              mm: "%d emizuzu",
              h: "lihora",
              hh: "%d emahora",
              d: "lilanga",
              dd: "%d emalanga",
              M: "inyanga",
              MM: "%d tinyanga",
              y: "umnyaka",
              yy: "%d iminyaka",
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (e, t, n) {
              return e < 11
                ? "ekuseni"
                : e < 15
                ? "emini"
                : e < 19
                ? "entsambama"
                : "ebusuku";
            },
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "ekuseni" === t
                  ? e
                  : "emini" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "entsambama" === t || "ebusuku" === t
                  ? 0 === e
                    ? 0
                    : e + 12
                  : void 0
              );
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("sv", {
            months:
              "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
                "_"
              ),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
              "_"
            ),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
              "_"
            ),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [kl.] HH:mm",
              LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd D MMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Idag] LT",
              nextDay: "[Imorgon] LT",
              lastDay: "[Igår] LT",
              nextWeek: "[På] dddd LT",
              lastWeek: "[I] dddd[s] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "för %s sedan",
              s: "några sekunder",
              ss: "%d sekunder",
              m: "en minut",
              mm: "%d minuter",
              h: "en timme",
              hh: "%d timmar",
              d: "en dag",
              dd: "%d dagar",
              M: "en månad",
              MM: "%d månader",
              y: "ett år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? ":e"
                  : 1 === t
                  ? ":a"
                  : 2 === t
                  ? ":a"
                  : ":e")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("sw", {
            months:
              "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
                "_"
              ),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split(
              "_"
            ),
            weekdays:
              "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
                "_"
              ),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "hh:mm A",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[leo saa] LT",
              nextDay: "[kesho saa] LT",
              nextWeek: "[wiki ijayo] dddd [saat] LT",
              lastDay: "[jana] LT",
              lastWeek: "[wiki iliyopita] dddd [saat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s baadaye",
              past: "tokea %s",
              s: "hivi punde",
              ss: "sekunde %d",
              m: "dakika moja",
              mm: "dakika %d",
              h: "saa limoja",
              hh: "masaa %d",
              d: "siku moja",
              dd: "siku %d",
              M: "mwezi mmoja",
              MM: "miezi %d",
              y: "mwaka mmoja",
              yy: "miaka %d",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
              1: "௧",
              2: "௨",
              3: "௩",
              4: "௪",
              5: "௫",
              6: "௬",
              7: "௭",
              8: "௮",
              9: "௯",
              0: "௦",
            },
            n = {
              "௧": "1",
              "௨": "2",
              "௩": "3",
              "௪": "4",
              "௫": "5",
              "௬": "6",
              "௭": "7",
              "௮": "8",
              "௯": "9",
              "௦": "0",
            };
          e.defineLocale("ta", {
            months:
              "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
                "_"
              ),
            monthsShort:
              "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
                "_"
              ),
            weekdays:
              "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
                "_"
              ),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split(
              "_"
            ),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, HH:mm",
              LLLL: "dddd, D MMMM YYYY, HH:mm",
            },
            calendar: {
              sameDay: "[இன்று] LT",
              nextDay: "[நாளை] LT",
              nextWeek: "dddd, LT",
              lastDay: "[நேற்று] LT",
              lastWeek: "[கடந்த வாரம்] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s இல்",
              past: "%s முன்",
              s: "ஒரு சில விநாடிகள்",
              ss: "%d விநாடிகள்",
              m: "ஒரு நிமிடம்",
              mm: "%d நிமிடங்கள்",
              h: "ஒரு மணி நேரம்",
              hh: "%d மணி நேரம்",
              d: "ஒரு நாள்",
              dd: "%d நாட்கள்",
              M: "ஒரு மாதம்",
              MM: "%d மாதங்கள்",
              y: "ஒரு வருடம்",
              yy: "%d ஆண்டுகள்",
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
              return e + "வது";
            },
            preparse: function (e) {
              return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e, t, n) {
              return e < 2
                ? " யாமம்"
                : e < 6
                ? " வைகறை"
                : e < 10
                ? " காலை"
                : e < 14
                ? " நண்பகல்"
                : e < 18
                ? " எற்பாடு"
                : e < 22
                ? " மாலை"
                : " யாமம்";
            },
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "யாமம்" === t
                  ? e < 2
                    ? e
                    : e + 12
                  : "வைகறை" === t || "காலை" === t
                  ? e
                  : "நண்பகல்" === t && e >= 10
                  ? e
                  : e + 12
              );
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("te", {
            months:
              "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
                "_"
              ),
            monthsShort:
              "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
                "_"
              ),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            calendar: {
              sameDay: "[నేడు] LT",
              nextDay: "[రేపు] LT",
              nextWeek: "dddd, LT",
              lastDay: "[నిన్న] LT",
              lastWeek: "[గత] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s లో",
              past: "%s క్రితం",
              s: "కొన్ని క్షణాలు",
              ss: "%d సెకన్లు",
              m: "ఒక నిమిషం",
              mm: "%d నిమిషాలు",
              h: "ఒక గంట",
              hh: "%d గంటలు",
              d: "ఒక రోజు",
              dd: "%d రోజులు",
              M: "ఒక నెల",
              MM: "%d నెలలు",
              y: "ఒక సంవత్సరం",
              yy: "%d సంవత్సరాలు",
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "రాత్రి" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ఉదయం" === t
                  ? e
                  : "మధ్యాహ్నం" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "సాయంత్రం" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "రాత్రి"
                : e < 10
                ? "ఉదయం"
                : e < 17
                ? "మధ్యాహ్నం"
                : e < 20
                ? "సాయంత్రం"
                : "రాత్రి";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("tet", {
            months:
              "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
                "_"
              ),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
              "_"
            ),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Ohin iha] LT",
              nextDay: "[Aban iha] LT",
              nextWeek: "dddd [iha] LT",
              lastDay: "[Horiseik iha] LT",
              lastWeek: "dddd [semana kotuk] [iha] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "iha %s",
              past: "%s liuba",
              s: "segundu balun",
              ss: "segundu %d",
              m: "minutu ida",
              mm: "minutu %d",
              h: "oras ida",
              hh: "oras %d",
              d: "loron ida",
              dd: "loron %d",
              M: "fulan ida",
              MM: "fulan %d",
              y: "tinan ida",
              yy: "tinan %d",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум",
          };
          e.defineLocale("tg", {
            months: {
              format:
                "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split(
                  "_"
                ),
              standalone:
                "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
                  "_"
                ),
            },
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
              "_"
            ),
            weekdays:
              "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Имрӯз соати] LT",
              nextDay: "[Фардо соати] LT",
              lastDay: "[Дирӯз соати] LT",
              nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
              lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "баъди %s",
              past: "%s пеш",
              s: "якчанд сония",
              m: "як дақиқа",
              mm: "%d дақиқа",
              h: "як соат",
              hh: "%d соат",
              d: "як рӯз",
              dd: "%d рӯз",
              M: "як моҳ",
              MM: "%d моҳ",
              y: "як сол",
              yy: "%d сол",
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "шаб" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "субҳ" === t
                  ? e
                  : "рӯз" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "бегоҳ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "шаб"
                : e < 11
                ? "субҳ"
                : e < 16
                ? "рӯз"
                : e < 19
                ? "бегоҳ"
                : "шаб";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function (e) {
              return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("th", {
            months:
              "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
                "_"
              ),
            monthsShort:
              "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY เวลา H:mm",
              LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm",
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (e) {
              return "หลังเที่ยง" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
            },
            calendar: {
              sameDay: "[วันนี้ เวลา] LT",
              nextDay: "[พรุ่งนี้ เวลา] LT",
              nextWeek: "dddd[หน้า เวลา] LT",
              lastDay: "[เมื่อวานนี้ เวลา] LT",
              lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "อีก %s",
              past: "%sที่แล้ว",
              s: "ไม่กี่วินาที",
              ss: "%d วินาที",
              m: "1 นาที",
              mm: "%d นาที",
              h: "1 ชั่วโมง",
              hh: "%d ชั่วโมง",
              d: "1 วัน",
              dd: "%d วัน",
              w: "1 สัปดาห์",
              ww: "%d สัปดาห์",
              M: "1 เดือน",
              MM: "%d เดือน",
              y: "1 ปี",
              yy: "%d ปี",
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
            1: "'inji",
            5: "'inji",
            8: "'inji",
            70: "'inji",
            80: "'inji",
            2: "'nji",
            7: "'nji",
            20: "'nji",
            50: "'nji",
            3: "'ünji",
            4: "'ünji",
            100: "'ünji",
            6: "'njy",
            9: "'unjy",
            10: "'unjy",
            30: "'unjy",
            60: "'ynjy",
            90: "'ynjy",
          };
          e.defineLocale("tk", {
            months:
              "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split(
                "_"
              ),
            monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split(
              "_"
            ),
            weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split(
              "_"
            ),
            weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
            weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[bugün sagat] LT",
              nextDay: "[ertir sagat] LT",
              nextWeek: "[indiki] dddd [sagat] LT",
              lastDay: "[düýn] LT",
              lastWeek: "[geçen] dddd [sagat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s soň",
              past: "%s öň",
              s: "birnäçe sekunt",
              m: "bir minut",
              mm: "%d minut",
              h: "bir sagat",
              hh: "%d sagat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir aý",
              MM: "%d aý",
              y: "bir ýyl",
              yy: "%d ýyl",
            },
            ordinal: function (e, n) {
              switch (n) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                  return e;
                default:
                  if (0 === e) return e + "'unjy";
                  var r = e % 10;
                  return e + (t[r] || t[(e % 100) - r] || t[e >= 100 ? 100 : null]);
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("tl-ph", {
            months:
              "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
                "_"
              ),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
              "_"
            ),
            weekdays:
              "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "MM/D/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY HH:mm",
              LLLL: "dddd, MMMM DD, YYYY HH:mm",
            },
            calendar: {
              sameDay: "LT [ngayong araw]",
              nextDay: "[Bukas ng] LT",
              nextWeek: "LT [sa susunod na] dddd",
              lastDay: "LT [kahapon]",
              lastWeek: "LT [noong nakaraang] dddd",
              sameElse: "L",
            },
            relativeTime: {
              future: "sa loob ng %s",
              past: "%s ang nakalipas",
              s: "ilang segundo",
              ss: "%d segundo",
              m: "isang minuto",
              mm: "%d minuto",
              h: "isang oras",
              hh: "%d oras",
              d: "isang araw",
              dd: "%d araw",
              M: "isang buwan",
              MM: "%d buwan",
              y: "isang taon",
              yy: "%d taon",
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
          function n(e, n, r, i) {
            var s = (function (e) {
              var n = Math.floor((e % 1e3) / 100),
                r = Math.floor((e % 100) / 10),
                i = e % 10,
                s = "";
              n > 0 && (s += t[n] + "vatlh");
              r > 0 && (s += ("" !== s ? " " : "") + t[r] + "maH");
              i > 0 && (s += ("" !== s ? " " : "") + t[i]);
              return "" === s ? "pagh" : s;
            })(e);
            switch (r) {
              case "ss":
                return s + " lup";
              case "mm":
                return s + " tup";
              case "hh":
                return s + " rep";
              case "dd":
                return s + " jaj";
              case "MM":
                return s + " jar";
              case "yy":
                return s + " DIS";
            }
          }
          e.defineLocale("tlh", {
            months:
              "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
                "_"
              ),
            monthsShort:
              "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[DaHjaj] LT",
              nextDay: "[wa’leS] LT",
              nextWeek: "LLL",
              lastDay: "[wa’Hu’] LT",
              lastWeek: "LLL",
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                var t = e;
                return (t =
                  -1 !== e.indexOf("jaj")
                    ? t.slice(0, -3) + "leS"
                    : -1 !== e.indexOf("jar")
                    ? t.slice(0, -3) + "waQ"
                    : -1 !== e.indexOf("DIS")
                    ? t.slice(0, -3) + "nem"
                    : t + " pIq");
              },
              past: function (e) {
                var t = e;
                return (t =
                  -1 !== e.indexOf("jaj")
                    ? t.slice(0, -3) + "Hu’"
                    : -1 !== e.indexOf("jar")
                    ? t.slice(0, -3) + "wen"
                    : -1 !== e.indexOf("DIS")
                    ? t.slice(0, -3) + "ben"
                    : t + " ret");
              },
              s: "puS lup",
              ss: n,
              m: "wa’ tup",
              mm: n,
              h: "wa’ rep",
              hh: n,
              d: "wa’ jaj",
              dd: n,
              M: "wa’ jar",
              MM: n,
              y: "wa’ DIS",
              yy: n,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı",
          };
          e.defineLocale("tr", {
            months:
              "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
                "_"
              ),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split(
              "_"
            ),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split(
              "_"
            ),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "öö" : "ÖÖ") : n ? "ös" : "ÖS";
            },
            meridiemParse: /öö|ÖÖ|ös|ÖS/,
            isPM: function (e) {
              return "ös" === e || "ÖS" === e;
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[yarın saat] LT",
              nextWeek: "[gelecek] dddd [saat] LT",
              lastDay: "[dün] LT",
              lastWeek: "[geçen] dddd [saat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s önce",
              s: "birkaç saniye",
              ss: "%d saniye",
              m: "bir dakika",
              mm: "%d dakika",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              w: "bir hafta",
              ww: "%d hafta",
              M: "bir ay",
              MM: "%d ay",
              y: "bir yıl",
              yy: "%d yıl",
            },
            ordinal: function (e, n) {
              switch (n) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                  return e;
                default:
                  if (0 === e) return e + "'ıncı";
                  var r = e % 10;
                  return e + (t[r] || t[(e % 100) - r] || t[e >= 100 ? 100 : null]);
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n, r) {
            var i = {
              s: ["viensas secunds", "'iensas secunds"],
              ss: [e + " secunds", e + " secunds"],
              m: ["'n míut", "'iens míut"],
              mm: [e + " míuts", e + " míuts"],
              h: ["'n þora", "'iensa þora"],
              hh: [e + " þoras", e + " þoras"],
              d: ["'n ziua", "'iensa ziua"],
              dd: [e + " ziuas", e + " ziuas"],
              M: ["'n mes", "'iens mes"],
              MM: [e + " mesen", e + " mesen"],
              y: ["'n ar", "'iens ar"],
              yy: [e + " ars", e + " ars"],
            };
            return r ? i[n][0] : t ? i[n][0] : i[n][1];
          }
          e.defineLocale("tzl", {
            months:
              "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
                "_"
              ),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split(
              "_"
            ),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split(
              "_"
            ),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM [dallas] YYYY",
              LLL: "D. MMMM [dallas] YYYY HH.mm",
              LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
              return "d'o" === e.toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
            },
            calendar: {
              sameDay: "[oxhi à] LT",
              nextDay: "[demà à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[ieiri à] LT",
              lastWeek: "[sür el] dddd [lasteu à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "osprei %s",
              past: "ja%s",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("tzm", {
            months:
              "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
                "_"
              ),
            monthsShort:
              "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
                "_"
              ),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
              "_"
            ),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
              "_"
            ),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
              nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
              nextWeek: "dddd [ⴴ] LT",
              lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
              lastWeek: "dddd [ⴴ] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
              past: "ⵢⴰⵏ %s",
              s: "ⵉⵎⵉⴽ",
              ss: "%d ⵉⵎⵉⴽ",
              m: "ⵎⵉⵏⵓⴺ",
              mm: "%d ⵎⵉⵏⵓⴺ",
              h: "ⵙⴰⵄⴰ",
              hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
              d: "ⴰⵙⵙ",
              dd: "%d oⵙⵙⴰⵏ",
              M: "ⴰⵢoⵓⵔ",
              MM: "%d ⵉⵢⵢⵉⵔⵏ",
              y: "ⴰⵙⴳⴰⵙ",
              yy: "%d ⵉⵙⴳⴰⵙⵏ",
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("tzm-latn", {
            months:
              "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
                "_"
              ),
            monthsShort:
              "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
                "_"
              ),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
              "_"
            ),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
              "_"
            ),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[asdkh g] LT",
              nextDay: "[aska g] LT",
              nextWeek: "dddd [g] LT",
              lastDay: "[assant g] LT",
              lastWeek: "dddd [g] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dadkh s yan %s",
              past: "yan %s",
              s: "imik",
              ss: "%d imik",
              m: "minuḍ",
              mm: "%d minuḍ",
              h: "saɛa",
              hh: "%d tassaɛin",
              d: "ass",
              dd: "%d ossan",
              M: "ayowr",
              MM: "%d iyyirn",
              y: "asgas",
              yy: "%d isgasn",
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("ug-cn", {
            months:
              "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
                "_"
              ),
            monthsShort:
              "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
                "_"
              ),
            weekdays:
              "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
              LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
              LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t
                  ? e
                  : "چۈشتىن كېيىن" === t || "كەچ" === t
                  ? e + 12
                  : e >= 11
                  ? e
                  : e + 12
              );
            },
            meridiem: function (e, t, n) {
              var r = 100 * e + t;
              return r < 600
                ? "يېرىم كېچە"
                : r < 900
                ? "سەھەر"
                : r < 1130
                ? "چۈشتىن بۇرۇن"
                : r < 1230
                ? "چۈش"
                : r < 1800
                ? "چۈشتىن كېيىن"
                : "كەچ";
            },
            calendar: {
              sameDay: "[بۈگۈن سائەت] LT",
              nextDay: "[ئەتە سائەت] LT",
              nextWeek: "[كېلەركى] dddd [سائەت] LT",
              lastDay: "[تۆنۈگۈن] LT",
              lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s كېيىن",
              past: "%s بۇرۇن",
              s: "نەچچە سېكونت",
              ss: "%d سېكونت",
              m: "بىر مىنۇت",
              mm: "%d مىنۇت",
              h: "بىر سائەت",
              hh: "%d سائەت",
              d: "بىر كۈن",
              dd: "%d كۈن",
              M: "بىر ئاي",
              MM: "%d ئاي",
              y: "بىر يىل",
              yy: "%d يىل",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "-كۈنى";
                case "w":
                case "W":
                  return e + "-ھەپتە";
                default:
                  return e;
              }
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          function t(e, t, n) {
            var r, i;
            return "m" === n
              ? t
                ? "хвилина"
                : "хвилину"
              : "h" === n
              ? t
                ? "година"
                : "годину"
              : e +
                " " +
                ((r = +e),
                (i = {
                  ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                  mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                  hh: t ? "година_години_годин" : "годину_години_годин",
                  dd: "день_дні_днів",
                  MM: "місяць_місяці_місяців",
                  yy: "рік_роки_років",
                }[n].split("_")),
                r % 10 == 1 && r % 100 != 11
                  ? i[0]
                  : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20)
                  ? i[1]
                  : i[2]);
          }
          function n(e) {
            return function () {
              return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
            };
          }
          e.defineLocale("uk", {
            months: {
              format:
                "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
                  "_"
                ),
              standalone:
                "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
                  "_"
                ),
            },
            monthsShort:
              "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: function (e, t) {
              var n = {
                nominative:
                  "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
                    "_"
                  ),
                accusative:
                  "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split(
                    "_"
                  ),
                genitive:
                  "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split(
                    "_"
                  ),
              };
              return !0 === e
                ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1))
                : e
                ? n[
                    /(\[[ВвУу]\]) ?dddd/.test(t)
                      ? "accusative"
                      : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
                      ? "genitive"
                      : "nominative"
                  ][e.day()]
                : n.nominative;
            },
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY р.",
              LLL: "D MMMM YYYY р., HH:mm",
              LLLL: "dddd, D MMMM YYYY р., HH:mm",
            },
            calendar: {
              sameDay: n("[Сьогодні "),
              nextDay: n("[Завтра "),
              lastDay: n("[Вчора "),
              nextWeek: n("[У] dddd ["),
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return n("[Минулої] dddd [").call(this);
                  case 1:
                  case 2:
                  case 4:
                    return n("[Минулого] dddd [").call(this);
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "за %s",
              past: "%s тому",
              s: "декілька секунд",
              ss: t,
              m: t,
              mm: t,
              h: "годину",
              hh: t,
              d: "день",
              dd: t,
              M: "місяць",
              MM: t,
              y: "рік",
              yy: t,
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (e) {
              return /^(дня|вечора)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                  return e + "-й";
                case "D":
                  return e + "-го";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          var t = [
              "جنوری",
              "فروری",
              "مارچ",
              "اپریل",
              "مئی",
              "جون",
              "جولائی",
              "اگست",
              "ستمبر",
              "اکتوبر",
              "نومبر",
              "دسمبر",
            ],
            n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
          e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd، D MMMM YYYY HH:mm",
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
              return "شام" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "صبح" : "شام";
            },
            calendar: {
              sameDay: "[آج بوقت] LT",
              nextDay: "[کل بوقت] LT",
              nextWeek: "dddd [بوقت] LT",
              lastDay: "[گذشتہ روز بوقت] LT",
              lastWeek: "[گذشتہ] dddd [بوقت] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s بعد",
              past: "%s قبل",
              s: "چند سیکنڈ",
              ss: "%d سیکنڈ",
              m: "ایک منٹ",
              mm: "%d منٹ",
              h: "ایک گھنٹہ",
              hh: "%d گھنٹے",
              d: "ایک دن",
              dd: "%d دن",
              M: "ایک ماہ",
              MM: "%d ماہ",
              y: "ایک سال",
              yy: "%d سال",
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("uz", {
            months:
              "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
                "_"
              ),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
              "_"
            ),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split(
              "_"
            ),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "D MMMM YYYY, dddd HH:mm",
            },
            calendar: {
              sameDay: "[Бугун соат] LT [да]",
              nextDay: "[Эртага] LT [да]",
              nextWeek: "dddd [куни соат] LT [да]",
              lastDay: "[Кеча соат] LT [да]",
              lastWeek: "[Утган] dddd [куни соат] LT [да]",
              sameElse: "L",
            },
            relativeTime: {
              future: "Якин %s ичида",
              past: "Бир неча %s олдин",
              s: "фурсат",
              ss: "%d фурсат",
              m: "бир дакика",
              mm: "%d дакика",
              h: "бир соат",
              hh: "%d соат",
              d: "бир кун",
              dd: "%d кун",
              M: "бир ой",
              MM: "%d ой",
              y: "бир йил",
              yy: "%d йил",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("uz-latn", {
            months:
              "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
                "_"
              ),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split(
              "_"
            ),
            weekdays:
              "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
                "_"
              ),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "D MMMM YYYY, dddd HH:mm",
            },
            calendar: {
              sameDay: "[Bugun soat] LT [da]",
              nextDay: "[Ertaga] LT [da]",
              nextWeek: "dddd [kuni soat] LT [da]",
              lastDay: "[Kecha soat] LT [da]",
              lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
              sameElse: "L",
            },
            relativeTime: {
              future: "Yaqin %s ichida",
              past: "Bir necha %s oldin",
              s: "soniya",
              ss: "%d soniya",
              m: "bir daqiqa",
              mm: "%d daqiqa",
              h: "bir soat",
              hh: "%d soat",
              d: "bir kun",
              dd: "%d kun",
              M: "bir oy",
              MM: "%d oy",
              y: "bir yil",
              yy: "%d yil",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("vi", {
            months:
              "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
                "_"
              ),
            monthsShort:
              "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (e) {
              return /^ch$/i.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "sa" : "SA") : n ? "ch" : "CH";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [năm] YYYY",
              LLL: "D MMMM [năm] YYYY HH:mm",
              LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
              l: "DD/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd, D MMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Hôm nay lúc] LT",
              nextDay: "[Ngày mai lúc] LT",
              nextWeek: "dddd [tuần tới lúc] LT",
              lastDay: "[Hôm qua lúc] LT",
              lastWeek: "dddd [tuần trước lúc] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s tới",
              past: "%s trước",
              s: "vài giây",
              ss: "%d giây",
              m: "một phút",
              mm: "%d phút",
              h: "một giờ",
              hh: "%d giờ",
              d: "một ngày",
              dd: "%d ngày",
              w: "một tuần",
              ww: "%d tuần",
              M: "một tháng",
              MM: "%d tháng",
              y: "một năm",
              yy: "%d năm",
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("x-pseudo", {
            months:
              "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split(
                "_"
              ),
            monthsShort:
              "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split(
                "_"
              ),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[T~ódá~ý át] LT",
              nextDay: "[T~ómó~rró~w át] LT",
              nextWeek: "dddd [át] LT",
              lastDay: "[Ý~ést~érdá~ý át] LT",
              lastWeek: "[L~ást] dddd [át] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "í~ñ %s",
              past: "%s á~gó",
              s: "á ~féw ~sécó~ñds",
              ss: "%d s~écóñ~ds",
              m: "á ~míñ~úté",
              mm: "%d m~íñú~tés",
              h: "á~ñ hó~úr",
              hh: "%d h~óúrs",
              d: "á ~dáý",
              dd: "%d d~áýs",
              M: "á ~móñ~th",
              MM: "%d m~óñt~hs",
              y: "á ~ýéár",
              yy: "%d ý~éárs",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("yo", {
            months:
              "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split(
                "_"
              ),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split(
              "_"
            ),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Ònì ni] LT",
              nextDay: "[Ọ̀la ni] LT",
              nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
              lastDay: "[Àna ni] LT",
              lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ní %s",
              past: "%s kọjá",
              s: "ìsẹjú aayá die",
              ss: "aayá %d",
              m: "ìsẹjú kan",
              mm: "ìsẹjú %d",
              h: "wákati kan",
              hh: "wákati %d",
              d: "ọjọ́ kan",
              dd: "ọjọ́ %d",
              M: "osù kan",
              MM: "osù %d",
              y: "ọdún kan",
              yy: "ọdún %d",
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("zh-cn", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
              "_"
            ),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日Ah点mm分",
              LLLL: "YYYY年M月D日ddddAh点mm分",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : e >= 11
                  ? e
                  : e + 12
              );
            },
            meridiem: function (e, t, n) {
              var r = 100 * e + t;
              return r < 600
                ? "凌晨"
                : r < 900
                ? "早上"
                : r < 1130
                ? "上午"
                : r < 1230
                ? "中午"
                : r < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天]LT",
              nextDay: "[明天]LT",
              nextWeek: function (e) {
                return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT";
              },
              lastDay: "[昨天]LT",
              lastWeek: function (e) {
                return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT";
              },
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "周";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s后",
              past: "%s前",
              s: "几秒",
              ss: "%d 秒",
              m: "1 分钟",
              mm: "%d 分钟",
              h: "1 小时",
              hh: "%d 小时",
              d: "1 天",
              dd: "%d 天",
              w: "1 周",
              ww: "%d 周",
              M: "1 个月",
              MM: "%d 个月",
              y: "1 年",
              yy: "%d 年",
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("zh-hk", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
              "_"
            ),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "中午" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              var r = 100 * e + t;
              return r < 600
                ? "凌晨"
                : r < 900
                ? "早上"
                : r < 1200
                ? "上午"
                : 1200 === r
                ? "中午"
                : r < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天]LT",
              nextDay: "[明天]LT",
              nextWeek: "[下]ddddLT",
              lastDay: "[昨天]LT",
              lastWeek: "[上]ddddLT",
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "週";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "幾秒",
              ss: "%d 秒",
              m: "1 分鐘",
              mm: "%d 分鐘",
              h: "1 小時",
              hh: "%d 小時",
              d: "1 天",
              dd: "%d 天",
              M: "1 個月",
              MM: "%d 個月",
              y: "1 年",
              yy: "%d 年",
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("zh-mo", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
              "_"
            ),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
              l: "D/M/YYYY",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "中午" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              var r = 100 * e + t;
              return r < 600
                ? "凌晨"
                : r < 900
                ? "早上"
                : r < 1130
                ? "上午"
                : r < 1230
                ? "中午"
                : r < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天] LT",
              nextDay: "[明天] LT",
              nextWeek: "[下]dddd LT",
              lastDay: "[昨天] LT",
              lastWeek: "[上]dddd LT",
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "週";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s內",
              past: "%s前",
              s: "幾秒",
              ss: "%d 秒",
              m: "1 分鐘",
              mm: "%d 分鐘",
              h: "1 小時",
              hh: "%d 小時",
              d: "1 天",
              dd: "%d 天",
              M: "1 個月",
              MM: "%d 個月",
              y: "1 年",
              yy: "%d 年",
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        (function (e) {
          "use strict";
          e.defineLocale("zh-tw", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
              "_"
            ),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "中午" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              var r = 100 * e + t;
              return r < 600
                ? "凌晨"
                : r < 900
                ? "早上"
                : r < 1130
                ? "上午"
                : r < 1230
                ? "中午"
                : r < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天] LT",
              nextDay: "[明天] LT",
              nextWeek: "[下]dddd LT",
              lastDay: "[昨天] LT",
              lastWeek: "[上]dddd LT",
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "週";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "幾秒",
              ss: "%d 秒",
              m: "1 分鐘",
              mm: "%d 分鐘",
              h: "1 小時",
              hh: "%d 小時",
              d: "1 天",
              dd: "%d 天",
              M: "1 個月",
              MM: "%d 個月",
              y: "1 年",
              yy: "%d 年",
            },
          });
        })(n(0));
      },
      function (e, t, n) {
        n(198), n(531), (e.exports = n(532));
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        n(199);
        var r = n(5),
          i = n.n(r);
        function s(e, t) {
          0;
        }
        function a(e) {
          return Object.prototype.toString.call(e).indexOf("Error") > -1;
        }
        var o = {
          name: "router-view",
          functional: !0,
          props: { name: { type: String, default: "default" } },
          render: function (e, t) {
            var n = t.props,
              r = t.children,
              i = t.parent,
              s = t.data;
            s.routerView = !0;
            for (
              var a = i.$createElement,
                o = n.name,
                u = i.$route,
                l = i._routerViewCache || (i._routerViewCache = {}),
                c = 0,
                d = !1;
              i && i._routerRoot !== i;
    
            )
              i.$vnode && i.$vnode.data.routerView && c++,
                i._inactive && (d = !0),
                (i = i.$parent);
            if (((s.routerViewDepth = c), d)) return a(l[o], s, r);
            var f = u.matched[c];
            if (!f) return (l[o] = null), a();
            var _ = (l[o] = f.components[o]);
            (s.registerRouteInstance = function (e, t) {
              var n = f.instances[o];
              ((t && n !== e) || (!t && n === e)) && (f.instances[o] = t);
            }),
              ((s.hook || (s.hook = {})).prepatch = function (e, t) {
                f.instances[o] = t.componentInstance;
              });
            var m = (s.props = (function (e, t) {
              switch (typeof t) {
                case "undefined":
                  return;
                case "object":
                  return t;
                case "function":
                  return t(e);
                case "boolean":
                  return t ? e.params : void 0;
                default:
                  0;
              }
            })(u, f.props && f.props[o]));
            if (m) {
              m = s.props = (function (e, t) {
                for (var n in t) e[n] = t[n];
                return e;
              })({}, m);
              var p = (s.attrs = s.attrs || {});
              for (var h in m)
                (_.props && h in _.props) || ((p[h] = m[h]), delete m[h]);
            }
            return a(_, s, r);
          },
        };
        var u = /[!'()*]/g,
          l = function (e) {
            return "%" + e.charCodeAt(0).toString(16);
          },
          c = /%2C/g,
          d = function (e) {
            return encodeURIComponent(e).replace(u, l).replace(c, ",");
          },
          f = decodeURIComponent;
        function _(e) {
          var t = {};
          return (e = e.trim().replace(/^(\?|#|&)/, ""))
            ? (e.split("&").forEach(function (e) {
                var n = e.replace(/\+/g, " ").split("="),
                  r = f(n.shift()),
                  i = n.length > 0 ? f(n.join("=")) : null;
                void 0 === t[r]
                  ? (t[r] = i)
                  : Array.isArray(t[r])
                  ? t[r].push(i)
                  : (t[r] = [t[r], i]);
              }),
              t)
            : t;
        }
        function m(e) {
          var t = e
            ? Object.keys(e)
                .map(function (t) {
                  var n = e[t];
                  if (void 0 === n) return "";
                  if (null === n) return d(t);
                  if (Array.isArray(n)) {
                    var r = [];
                    return (
                      n.forEach(function (e) {
                        void 0 !== e &&
                          (null === e ? r.push(d(t)) : r.push(d(t) + "=" + d(e)));
                      }),
                      r.join("&")
                    );
                  }
                  return d(t) + "=" + d(n);
                })
                .filter(function (e) {
                  return e.length > 0;
                })
                .join("&")
            : null;
          return t ? "?" + t : "";
        }
        var p = /\/?$/;
        function h(e, t, n, r) {
          var i = r && r.options.stringifyQuery,
            s = t.query || {};
          try {
            s = v(s);
          } catch (e) {}
          var a = {
            name: t.name || (e && e.name),
            meta: (e && e.meta) || {},
            path: t.path || "/",
            hash: t.hash || "",
            query: s,
            params: t.params || {},
            fullPath: g(t, i),
            matched: e
              ? (function (e) {
                  var t = [];
                  for (; e; ) t.unshift(e), (e = e.parent);
                  return t;
                })(e)
              : [],
          };
          return n && (a.redirectedFrom = g(n, i)), Object.freeze(a);
        }
        function v(e) {
          if (Array.isArray(e)) return e.map(v);
          if (e && "object" == typeof e) {
            var t = {};
            for (var n in e) t[n] = v(e[n]);
            return t;
          }
          return e;
        }
        var y = h(null, { path: "/" });
        function g(e, t) {
          var n = e.path,
            r = e.query;
          void 0 === r && (r = {});
          var i = e.hash;
          return void 0 === i && (i = ""), (n || "/") + (t || m)(r) + i;
        }
        function b(e, t) {
          return t === y
            ? e === t
            : !!t &&
                (e.path && t.path
                  ? e.path.replace(p, "") === t.path.replace(p, "") &&
                    e.hash === t.hash &&
                    M(e.query, t.query)
                  : !(!e.name || !t.name) &&
                    e.name === t.name &&
                    e.hash === t.hash &&
                    M(e.query, t.query) &&
                    M(e.params, t.params));
        }
        function M(e, t) {
          if ((void 0 === e && (e = {}), void 0 === t && (t = {}), !e || !t))
            return e === t;
          var n = Object.keys(e),
            r = Object.keys(t);
          return (
            n.length === r.length &&
            n.every(function (n) {
              var r = e[n],
                i = t[n];
              return "object" == typeof r && "object" == typeof i
                ? M(r, i)
                : String(r) === String(i);
            })
          );
        }
        var L,
          k = [String, Object],
          w = [String, Array],
          x = {
            name: "router-link",
            props: {
              to: { type: k, required: !0 },
              tag: { type: String, default: "a" },
              exact: Boolean,
              append: Boolean,
              replace: Boolean,
              activeClass: String,
              exactActiveClass: String,
              event: { type: w, default: "click" },
            },
            render: function (e) {
              var t = this,
                n = this.$router,
                r = this.$route,
                i = n.resolve(this.to, r, this.append),
                s = i.location,
                a = i.route,
                o = i.href,
                u = {},
                l = n.options.linkActiveClass,
                c = n.options.linkExactActiveClass,
                d = null == l ? "router-link-active" : l,
                f = null == c ? "router-link-exact-active" : c,
                _ = null == this.activeClass ? d : this.activeClass,
                m = null == this.exactActiveClass ? f : this.exactActiveClass,
                v = s.path ? h(null, s, null, n) : a;
              (u[m] = b(r, v)),
                (u[_] = this.exact
                  ? u[m]
                  : (function (e, t) {
                      return (
                        0 ===
                          e.path.replace(p, "/").indexOf(t.path.replace(p, "/")) &&
                        (!t.hash || e.hash === t.hash) &&
                        (function (e, t) {
                          for (var n in t) if (!(n in e)) return !1;
                          return !0;
                        })(e.query, t.query)
                      );
                    })(r, v));
              var y = function (e) {
                  Y(e) && (t.replace ? n.replace(s) : n.push(s));
                },
                g = { click: Y };
              Array.isArray(this.event)
                ? this.event.forEach(function (e) {
                    g[e] = y;
                  })
                : (g[this.event] = y);
              var M = { class: u };
              if ("a" === this.tag) (M.on = g), (M.attrs = { href: o });
              else {
                var k = (function e(t) {
                  if (t)
                    for (var n, r = 0; r < t.length; r++) {
                      if ("a" === (n = t[r]).tag) return n;
                      if (n.children && (n = e(n.children))) return n;
                    }
                })(this.$slots.default);
                if (k) {
                  k.isStatic = !1;
                  var w = L.util.extend;
                  ((k.data = w({}, k.data)).on = g),
                    ((k.data.attrs = w({}, k.data.attrs)).href = o);
                } else M.on = g;
              }
              return e(this.tag, M, this.$slots.default);
            },
          };
        function Y(e) {
          if (
            !(
              e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              e.shiftKey ||
              e.defaultPrevented ||
              (void 0 !== e.button && 0 !== e.button)
            )
          ) {
            if (e.currentTarget && e.currentTarget.getAttribute) {
              var t = e.currentTarget.getAttribute("target");
              if (/\b_blank\b/i.test(t)) return;
            }
            return e.preventDefault && e.preventDefault(), !0;
          }
        }
        function T(e) {
          if (!T.installed || L !== e) {
            (T.installed = !0), (L = e);
            var t = function (e) {
                return void 0 !== e;
              },
              n = function (e, n) {
                var r = e.$options._parentVnode;
                t(r) &&
                  t((r = r.data)) &&
                  t((r = r.registerRouteInstance)) &&
                  r(e, n);
              };
            e.mixin({
              beforeCreate: function () {
                t(this.$options.router)
                  ? ((this._routerRoot = this),
                    (this._router = this.$options.router),
                    this._router.init(this),
                    e.util.defineReactive(
                      this,
                      "_route",
                      this._router.history.current
                    ))
                  : (this._routerRoot =
                      (this.$parent && this.$parent._routerRoot) || this),
                  n(this, this);
              },
              destroyed: function () {
                n(this);
              },
            }),
              Object.defineProperty(e.prototype, "$router", {
                get: function () {
                  return this._routerRoot._router;
                },
              }),
              Object.defineProperty(e.prototype, "$route", {
                get: function () {
                  return this._routerRoot._route;
                },
              }),
              e.component("router-view", o),
              e.component("router-link", x);
            var r = e.config.optionMergeStrategies;
            r.beforeRouteEnter =
              r.beforeRouteLeave =
              r.beforeRouteUpdate =
                r.created;
          }
        }
        var D = "undefined" != typeof window;
        function j(e, t, n) {
          var r = e.charAt(0);
          if ("/" === r) return e;
          if ("?" === r || "#" === r) return t + e;
          var i = t.split("/");
          (n && i[i.length - 1]) || i.pop();
          for (var s = e.replace(/^\//, "").split("/"), a = 0; a < s.length; a++) {
            var o = s[a];
            ".." === o ? i.pop() : "." !== o && i.push(o);
          }
          return "" !== i[0] && i.unshift(""), i.join("/");
        }
        function S(e) {
          return e.replace(/\/\//g, "/");
        }
        var C =
            Array.isArray ||
            function (e) {
              return "[object Array]" == Object.prototype.toString.call(e);
            },
          O = U,
          E = R,
          H = function (e, t) {
            return F(R(e, t));
          },
          A = F,
          P = B,
          $ = new RegExp(
            [
              "(\\\\.)",
              "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
            ].join("|"),
            "g"
          );
        function R(e, t) {
          for (
            var n, r = [], i = 0, s = 0, a = "", o = (t && t.delimiter) || "/";
            null != (n = $.exec(e));
    
          ) {
            var u = n[0],
              l = n[1],
              c = n.index;
            if (((a += e.slice(s, c)), (s = c + u.length), l)) a += l[1];
            else {
              var d = e[s],
                f = n[2],
                _ = n[3],
                m = n[4],
                p = n[5],
                h = n[6],
                v = n[7];
              a && (r.push(a), (a = ""));
              var y = null != f && null != d && d !== f,
                g = "+" === h || "*" === h,
                b = "?" === h || "*" === h,
                M = n[2] || o,
                L = m || p;
              r.push({
                name: _ || i++,
                prefix: f || "",
                delimiter: M,
                optional: b,
                repeat: g,
                partial: y,
                asterisk: !!v,
                pattern: L ? W(L) : v ? ".*" : "[^" + I(M) + "]+?",
              });
            }
          }
          return s < e.length && (a += e.substr(s)), a && r.push(a), r;
        }
        function N(e) {
          return encodeURI(e).replace(/[\/?#]/g, function (e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase();
          });
        }
        function F(e) {
          for (var t = new Array(e.length), n = 0; n < e.length; n++)
            "object" == typeof e[n] &&
              (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
          return function (n, r) {
            for (
              var i = "",
                s = n || {},
                a = (r || {}).pretty ? N : encodeURIComponent,
                o = 0;
              o < e.length;
              o++
            ) {
              var u = e[o];
              if ("string" != typeof u) {
                var l,
                  c = s[u.name];
                if (null == c) {
                  if (u.optional) {
                    u.partial && (i += u.prefix);
                    continue;
                  }
                  throw new TypeError('Expected "' + u.name + '" to be defined');
                }
                if (C(c)) {
                  if (!u.repeat)
                    throw new TypeError(
                      'Expected "' +
                        u.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(c) +
                        "`"
                    );
                  if (0 === c.length) {
                    if (u.optional) continue;
                    throw new TypeError(
                      'Expected "' + u.name + '" to not be empty'
                    );
                  }
                  for (var d = 0; d < c.length; d++) {
                    if (((l = a(c[d])), !t[o].test(l)))
                      throw new TypeError(
                        'Expected all "' +
                          u.name +
                          '" to match "' +
                          u.pattern +
                          '", but received `' +
                          JSON.stringify(l) +
                          "`"
                      );
                    i += (0 === d ? u.prefix : u.delimiter) + l;
                  }
                } else {
                  if (
                    ((l = u.asterisk
                      ? encodeURI(c).replace(/[?#]/g, function (e) {
                          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                        })
                      : a(c)),
                    !t[o].test(l))
                  )
                    throw new TypeError(
                      'Expected "' +
                        u.name +
                        '" to match "' +
                        u.pattern +
                        '", but received "' +
                        l +
                        '"'
                    );
                  i += u.prefix + l;
                }
              } else i += u;
            }
            return i;
          };
        }
        function I(e) {
          return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
        }
        function W(e) {
          return e.replace(/([=!:$\/()])/g, "\\$1");
        }
        function z(e, t) {
          return (e.keys = t), e;
        }
        function q(e) {
          return e.sensitive ? "" : "i";
        }
        function B(e, t, n) {
          C(t) || ((n = t || n), (t = []));
          for (
            var r = (n = n || {}).strict, i = !1 !== n.end, s = "", a = 0;
            a < e.length;
            a++
          ) {
            var o = e[a];
            if ("string" == typeof o) s += I(o);
            else {
              var u = I(o.prefix),
                l = "(?:" + o.pattern + ")";
              t.push(o),
                o.repeat && (l += "(?:" + u + l + ")*"),
                (s += l =
                  o.optional
                    ? o.partial
                      ? u + "(" + l + ")?"
                      : "(?:" + u + "(" + l + "))?"
                    : u + "(" + l + ")");
            }
          }
          var c = I(n.delimiter || "/"),
            d = s.slice(-c.length) === c;
          return (
            r || (s = (d ? s.slice(0, -c.length) : s) + "(?:" + c + "(?=$))?"),
            (s += i ? "$" : r && d ? "" : "(?=" + c + "|$)"),
            z(new RegExp("^" + s, q(n)), t)
          );
        }
        function U(e, t, n) {
          return (
            C(t) || ((n = t || n), (t = [])),
            (n = n || {}),
            e instanceof RegExp
              ? (function (e, t) {
                  var n = e.source.match(/\((?!\?)/g);
                  if (n)
                    for (var r = 0; r < n.length; r++)
                      t.push({
                        name: r,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        partial: !1,
                        asterisk: !1,
                        pattern: null,
                      });
                  return z(e, t);
                })(e, t)
              : C(e)
              ? (function (e, t, n) {
                  for (var r = [], i = 0; i < e.length; i++)
                    r.push(U(e[i], t, n).source);
                  return z(new RegExp("(?:" + r.join("|") + ")", q(n)), t);
                })(e, t, n)
              : (function (e, t, n) {
                  return B(R(e, n), t, n);
                })(e, t, n)
          );
        }
        (O.parse = E),
          (O.compile = H),
          (O.tokensToFunction = A),
          (O.tokensToRegExp = P);
        var J = Object.create(null);
        function V(e, t, n) {
          try {
            return (J[e] || (J[e] = O.compile(e)))(t || {}, { pretty: !0 });
          } catch (e) {
            return "";
          }
        }
        function G(e, t, n, r) {
          var i = t || [],
            s = n || Object.create(null),
            a = r || Object.create(null);
          e.forEach(function (e) {
            !(function e(t, n, r, i, s, a) {
              var o = i.path;
              var u = i.name;
              0;
              var l = i.pathToRegexpOptions || {};
              var c = (function (e, t, n) {
                n || (e = e.replace(/\/$/, ""));
                if ("/" === e[0]) return e;
                if (null == t) return e;
                return S(t.path + "/" + e);
              })(o, s, l.strict);
              "boolean" == typeof i.caseSensitive &&
                (l.sensitive = i.caseSensitive);
              var d = {
                path: c,
                regex: (function (e, t) {
                  var n = O(e, [], t);
                  return n;
                })(c, l),
                components: i.components || { default: i.component },
                instances: {},
                name: u,
                parent: s,
                matchAs: a,
                redirect: i.redirect,
                beforeEnter: i.beforeEnter,
                meta: i.meta || {},
                props:
                  null == i.props
                    ? {}
                    : i.components
                    ? i.props
                    : { default: i.props },
              };
              i.children &&
                i.children.forEach(function (i) {
                  var s = a ? S(a + "/" + i.path) : void 0;
                  e(t, n, r, i, d, s);
                });
              if (void 0 !== i.alias) {
                var f = Array.isArray(i.alias) ? i.alias : [i.alias];
                f.forEach(function (a) {
                  var o = { path: a, children: i.children };
                  e(t, n, r, o, s, d.path || "/");
                });
              }
              n[d.path] || (t.push(d.path), (n[d.path] = d));
              u && (r[u] || (r[u] = d));
            })(i, s, a, e);
          });
          for (var o = 0, u = i.length; o < u; o++)
            "*" === i[o] && (i.push(i.splice(o, 1)[0]), u--, o--);
          return { pathList: i, pathMap: s, nameMap: a };
        }
        function K(e, t, n, r) {
          var i = "string" == typeof e ? { path: e } : e;
          if (i.name || i._normalized) return i;
          if (!i.path && i.params && t) {
            (i = Z({}, i))._normalized = !0;
            var s = Z(Z({}, t.params), i.params);
            if (t.name) (i.name = t.name), (i.params = s);
            else if (t.matched.length) {
              var a = t.matched[t.matched.length - 1].path;
              i.path = V(a, s, t.path);
            } else 0;
            return i;
          }
          var o = (function (e) {
              var t = "",
                n = "",
                r = e.indexOf("#");
              r >= 0 && ((t = e.slice(r)), (e = e.slice(0, r)));
              var i = e.indexOf("?");
              return (
                i >= 0 && ((n = e.slice(i + 1)), (e = e.slice(0, i))),
                { path: e, query: n, hash: t }
              );
            })(i.path || ""),
            u = (t && t.path) || "/",
            l = o.path ? j(o.path, u, n || i.append) : u,
            c = (function (e, t, n) {
              void 0 === t && (t = {});
              var r,
                i = n || _;
              try {
                r = i(e || "");
              } catch (e) {
                r = {};
              }
              for (var s in t) r[s] = t[s];
              return r;
            })(o.query, i.query, r && r.options.parseQuery),
            d = i.hash || o.hash;
          return (
            d && "#" !== d.charAt(0) && (d = "#" + d),
            { _normalized: !0, path: l, query: c, hash: d }
          );
        }
        function Z(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function Q(e, t) {
          var n = G(e),
            r = n.pathList,
            i = n.pathMap,
            s = n.nameMap;
          function a(e, n, a) {
            var o = K(e, n, !1, t),
              l = o.name;
            if (l) {
              var c = s[l];
              if (!c) return u(null, o);
              var d = c.regex.keys
                .filter(function (e) {
                  return !e.optional;
                })
                .map(function (e) {
                  return e.name;
                });
              if (
                ("object" != typeof o.params && (o.params = {}),
                n && "object" == typeof n.params)
              )
                for (var f in n.params)
                  !(f in o.params) &&
                    d.indexOf(f) > -1 &&
                    (o.params[f] = n.params[f]);
              if (c) return (o.path = V(c.path, o.params)), u(c, o, a);
            } else if (o.path) {
              o.params = {};
              for (var _ = 0; _ < r.length; _++) {
                var m = r[_],
                  p = i[m];
                if (X(p.regex, o.path, o.params)) return u(p, o, a);
              }
            }
            return u(null, o);
          }
          function o(e, n) {
            var r = e.redirect,
              i = "function" == typeof r ? r(h(e, n, null, t)) : r;
            if (
              ("string" == typeof i && (i = { path: i }),
              !i || "object" != typeof i)
            )
              return u(null, n);
            var o = i,
              l = o.name,
              c = o.path,
              d = n.query,
              f = n.hash,
              _ = n.params;
            if (
              ((d = o.hasOwnProperty("query") ? o.query : d),
              (f = o.hasOwnProperty("hash") ? o.hash : f),
              (_ = o.hasOwnProperty("params") ? o.params : _),
              l)
            ) {
              s[l];
              return a(
                { _normalized: !0, name: l, query: d, hash: f, params: _ },
                void 0,
                n
              );
            }
            if (c) {
              var m = (function (e, t) {
                return j(e, t.parent ? t.parent.path : "/", !0);
              })(c, e);
              return a(
                { _normalized: !0, path: V(m, _), query: d, hash: f },
                void 0,
                n
              );
            }
            return u(null, n);
          }
          function u(e, n, r) {
            return e && e.redirect
              ? o(e, r || n)
              : e && e.matchAs
              ? (function (e, t, n) {
                  var r = a({ _normalized: !0, path: V(n, t.params) });
                  if (r) {
                    var i = r.matched,
                      s = i[i.length - 1];
                    return (t.params = r.params), u(s, t);
                  }
                  return u(null, t);
                })(0, n, e.matchAs)
              : h(e, n, r, t);
          }
          return {
            match: a,
            addRoutes: function (e) {
              G(e, r, i, s);
            },
          };
        }
        function X(e, t, n) {
          var r = t.match(e);
          if (!r) return !1;
          if (!n) return !0;
          for (var i = 1, s = r.length; i < s; ++i) {
            var a = e.keys[i - 1],
              o = "string" == typeof r[i] ? decodeURIComponent(r[i]) : r[i];
            a && (n[a.name] = o);
          }
          return !0;
        }
        var ee = Object.create(null);
        function te() {
          window.history.replaceState({ key: _e() }, ""),
            window.addEventListener("popstate", function (e) {
              var t;
              re(), e.state && e.state.key && ((t = e.state.key), (de = t));
            });
        }
        function ne(e, t, n, r) {
          if (e.app) {
            var i = e.options.scrollBehavior;
            i &&
              e.app.$nextTick(function () {
                var e = (function () {
                    var e = _e();
                    if (e) return ee[e];
                  })(),
                  s = i(t, n, r ? e : null);
                s &&
                  ("function" == typeof s.then
                    ? s
                        .then(function (t) {
                          oe(t, e);
                        })
                        .catch(function (e) {
                          0;
                        })
                    : oe(s, e));
              });
          }
        }
        function re() {
          var e = _e();
          e && (ee[e] = { x: window.pageXOffset, y: window.pageYOffset });
        }
        function ie(e) {
          return ae(e.x) || ae(e.y);
        }
        function se(e) {
          return {
            x: ae(e.x) ? e.x : window.pageXOffset,
            y: ae(e.y) ? e.y : window.pageYOffset,
          };
        }
        function ae(e) {
          return "number" == typeof e;
        }
        function oe(e, t) {
          var n,
            r = "object" == typeof e;
          if (r && "string" == typeof e.selector) {
            var i = document.querySelector(e.selector);
            if (i) {
              var s = e.offset && "object" == typeof e.offset ? e.offset : {};
              t = (function (e, t) {
                var n = document.documentElement.getBoundingClientRect(),
                  r = e.getBoundingClientRect();
                return { x: r.left - n.left - t.x, y: r.top - n.top - t.y };
              })(i, (s = { x: ae((n = s).x) ? n.x : 0, y: ae(n.y) ? n.y : 0 }));
            } else ie(e) && (t = se(e));
          } else r && ie(e) && (t = se(e));
          t && window.scrollTo(t.x, t.y);
        }
        var ue,
          le =
            D &&
            ((-1 === (ue = window.navigator.userAgent).indexOf("Android 2.") &&
              -1 === ue.indexOf("Android 4.0")) ||
              -1 === ue.indexOf("Mobile Safari") ||
              -1 !== ue.indexOf("Chrome") ||
              -1 !== ue.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
          ce =
            D && window.performance && window.performance.now
              ? window.performance
              : Date,
          de = fe();
        function fe() {
          return ce.now().toFixed(3);
        }
        function _e() {
          return de;
        }
        function me(e, t) {
          re();
          var n = window.history;
          try {
            t
              ? n.replaceState({ key: de }, "", e)
              : ((de = fe()), n.pushState({ key: de }, "", e));
          } catch (n) {
            window.location[t ? "replace" : "assign"](e);
          }
        }
        function pe(e) {
          me(e, !0);
        }
        function he(e, t, n) {
          var r = function (i) {
            i >= e.length
              ? n()
              : e[i]
              ? t(e[i], function () {
                  r(i + 1);
                })
              : r(i + 1);
          };
          r(0);
        }
        function ve(e) {
          return function (t, n, r) {
            var i = !1,
              s = 0,
              o = null;
            ye(e, function (e, t, n, u) {
              if ("function" == typeof e && void 0 === e.cid) {
                (i = !0), s++;
                var l,
                  c = Me(function (t) {
                    var i;
                    ((i = t).__esModule ||
                      (be && "Module" === i[Symbol.toStringTag])) &&
                      (t = t.default),
                      (e.resolved = "function" == typeof t ? t : L.extend(t)),
                      (n.components[u] = t),
                      --s <= 0 && r();
                  }),
                  d = Me(function (e) {
                    var t = "Failed to resolve async component " + u + ": " + e;
                    o || ((o = a(e) ? e : new Error(t)), r(o));
                  });
                try {
                  l = e(c, d);
                } catch (e) {
                  d(e);
                }
                if (l)
                  if ("function" == typeof l.then) l.then(c, d);
                  else {
                    var f = l.component;
                    f && "function" == typeof f.then && f.then(c, d);
                  }
              }
            }),
              i || r();
          };
        }
        function ye(e, t) {
          return ge(
            e.map(function (e) {
              return Object.keys(e.components).map(function (n) {
                return t(e.components[n], e.instances[n], e, n);
              });
            })
          );
        }
        function ge(e) {
          return Array.prototype.concat.apply([], e);
        }
        var be =
          "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        function Me(e) {
          var t = !1;
          return function () {
            for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            if (!t) return (t = !0), e.apply(this, n);
          };
        }
        var Le = function (e, t) {
          (this.router = e),
            (this.base = (function (e) {
              if (!e)
                if (D) {
                  var t = document.querySelector("base");
                  e = (e = (t && t.getAttribute("href")) || "/").replace(
                    /^https?:\/\/[^\/]+/,
                    ""
                  );
                } else e = "/";
              "/" !== e.charAt(0) && (e = "/" + e);
              return e.replace(/\/$/, "");
            })(t)),
            (this.current = y),
            (this.pending = null),
            (this.ready = !1),
            (this.readyCbs = []),
            (this.readyErrorCbs = []),
            (this.errorCbs = []);
        };
        function ke(e, t, n, r) {
          var i = ye(e, function (e, r, i, s) {
            var a = (function (e, t) {
              "function" != typeof e && (e = L.extend(e));
              return e.options[t];
            })(e, t);
            if (a)
              return Array.isArray(a)
                ? a.map(function (e) {
                    return n(e, r, i, s);
                  })
                : n(a, r, i, s);
          });
          return ge(r ? i.reverse() : i);
        }
        function we(e, t) {
          if (t)
            return function () {
              return e.apply(t, arguments);
            };
        }
        (Le.prototype.listen = function (e) {
          this.cb = e;
        }),
          (Le.prototype.onReady = function (e, t) {
            this.ready
              ? e()
              : (this.readyCbs.push(e), t && this.readyErrorCbs.push(t));
          }),
          (Le.prototype.onError = function (e) {
            this.errorCbs.push(e);
          }),
          (Le.prototype.transitionTo = function (e, t, n) {
            var r = this,
              i = this.router.match(e, this.current);
            this.confirmTransition(
              i,
              function () {
                r.updateRoute(i),
                  t && t(i),
                  r.ensureURL(),
                  r.ready ||
                    ((r.ready = !0),
                    r.readyCbs.forEach(function (e) {
                      e(i);
                    }));
              },
              function (e) {
                n && n(e),
                  e &&
                    !r.ready &&
                    ((r.ready = !0),
                    r.readyErrorCbs.forEach(function (t) {
                      t(e);
                    }));
              }
            );
          }),
          (Le.prototype.confirmTransition = function (e, t, n) {
            var r = this,
              i = this.current,
              o = function (e) {
                a(e) &&
                  (r.errorCbs.length
                    ? r.errorCbs.forEach(function (t) {
                        t(e);
                      })
                    : (s(), console.error(e))),
                  n && n(e);
              };
            if (b(e, i) && e.matched.length === i.matched.length)
              return this.ensureURL(), o();
            var u = (function (e, t) {
                var n,
                  r = Math.max(e.length, t.length);
                for (n = 0; n < r && e[n] === t[n]; n++);
                return {
                  updated: t.slice(0, n),
                  activated: t.slice(n),
                  deactivated: e.slice(n),
                };
              })(this.current.matched, e.matched),
              l = u.updated,
              c = u.deactivated,
              d = u.activated,
              f = [].concat(
                (function (e) {
                  return ke(e, "beforeRouteLeave", we, !0);
                })(c),
                this.router.beforeHooks,
                (function (e) {
                  return ke(e, "beforeRouteUpdate", we);
                })(l),
                d.map(function (e) {
                  return e.beforeEnter;
                }),
                ve(d)
              );
            this.pending = e;
            var _ = function (t, n) {
              if (r.pending !== e) return o();
              try {
                t(e, i, function (e) {
                  !1 === e || a(e)
                    ? (r.ensureURL(!0), o(e))
                    : "string" == typeof e ||
                      ("object" == typeof e &&
                        ("string" == typeof e.path || "string" == typeof e.name))
                    ? (o(),
                      "object" == typeof e && e.replace ? r.replace(e) : r.push(e))
                    : n(e);
                });
              } catch (e) {
                o(e);
              }
            };
            he(f, _, function () {
              var n = [];
              he(
                (function (e, t, n) {
                  return ke(e, "beforeRouteEnter", function (e, r, i, s) {
                    return (function (e, t, n, r, i) {
                      return function (s, a, o) {
                        return e(s, a, function (e) {
                          o(e),
                            "function" == typeof e &&
                              r.push(function () {
                                !(function e(t, n, r, i) {
                                  n[r]
                                    ? t(n[r])
                                    : i() &&
                                      setTimeout(function () {
                                        e(t, n, r, i);
                                      }, 16);
                                })(e, t.instances, n, i);
                              });
                        });
                      };
                    })(e, i, s, t, n);
                  });
                })(d, n, function () {
                  return r.current === e;
                }).concat(r.router.resolveHooks),
                _,
                function () {
                  if (r.pending !== e) return o();
                  (r.pending = null),
                    t(e),
                    r.router.app &&
                      r.router.app.$nextTick(function () {
                        n.forEach(function (e) {
                          e();
                        });
                      });
                }
              );
            });
          }),
          (Le.prototype.updateRoute = function (e) {
            var t = this.current;
            (this.current = e),
              this.cb && this.cb(e),
              this.router.afterHooks.forEach(function (n) {
                n && n(e, t);
              });
          });
        var xe = (function (e) {
          function t(t, n) {
            var r = this;
            e.call(this, t, n);
            var i = t.options.scrollBehavior;
            i && te();
            var s = Ye(this.base);
            window.addEventListener("popstate", function (e) {
              var n = r.current,
                a = Ye(r.base);
              (r.current === y && a === s) ||
                r.transitionTo(a, function (e) {
                  i && ne(t, e, n, !0);
                });
            });
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.go = function (e) {
              window.history.go(e);
            }),
            (t.prototype.push = function (e, t, n) {
              var r = this,
                i = this.current;
              this.transitionTo(
                e,
                function (e) {
                  me(S(r.base + e.fullPath)), ne(r.router, e, i, !1), t && t(e);
                },
                n
              );
            }),
            (t.prototype.replace = function (e, t, n) {
              var r = this,
                i = this.current;
              this.transitionTo(
                e,
                function (e) {
                  pe(S(r.base + e.fullPath)), ne(r.router, e, i, !1), t && t(e);
                },
                n
              );
            }),
            (t.prototype.ensureURL = function (e) {
              if (Ye(this.base) !== this.current.fullPath) {
                var t = S(this.base + this.current.fullPath);
                e ? me(t) : pe(t);
              }
            }),
            (t.prototype.getCurrentLocation = function () {
              return Ye(this.base);
            }),
            t
          );
        })(Le);
        function Ye(e) {
          var t = window.location.pathname;
          return (
            e && 0 === t.indexOf(e) && (t = t.slice(e.length)),
            (t || "/") + window.location.search + window.location.hash
          );
        }
        var Te = (function (e) {
          function t(t, n, r) {
            e.call(this, t, n),
              (r &&
                (function (e) {
                  var t = Ye(e);
                  if (!/^\/#/.test(t))
                    return window.location.replace(S(e + "/#" + t)), !0;
                })(this.base)) ||
                De();
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.setupListeners = function () {
              var e = this,
                t = this.router.options.scrollBehavior,
                n = le && t;
              n && te(),
                window.addEventListener(
                  le ? "popstate" : "hashchange",
                  function () {
                    var t = e.current;
                    De() &&
                      e.transitionTo(je(), function (r) {
                        n && ne(e.router, r, t, !0), le || Oe(r.fullPath);
                      });
                  }
                );
            }),
            (t.prototype.push = function (e, t, n) {
              var r = this,
                i = this.current;
              this.transitionTo(
                e,
                function (e) {
                  Ce(e.fullPath), ne(r.router, e, i, !1), t && t(e);
                },
                n
              );
            }),
            (t.prototype.replace = function (e, t, n) {
              var r = this,
                i = this.current;
              this.transitionTo(
                e,
                function (e) {
                  Oe(e.fullPath), ne(r.router, e, i, !1), t && t(e);
                },
                n
              );
            }),
            (t.prototype.go = function (e) {
              window.history.go(e);
            }),
            (t.prototype.ensureURL = function (e) {
              var t = this.current.fullPath;
              je() !== t && (e ? Ce(t) : Oe(t));
            }),
            (t.prototype.getCurrentLocation = function () {
              return je();
            }),
            t
          );
        })(Le);
        function De() {
          var e = je();
          return "/" === e.charAt(0) || (Oe("/" + e), !1);
        }
        function je() {
          var e = window.location.href,
            t = e.indexOf("#");
          return -1 === t ? "" : e.slice(t + 1);
        }
        function Se(e) {
          var t = window.location.href,
            n = t.indexOf("#");
          return (n >= 0 ? t.slice(0, n) : t) + "#" + e;
        }
        function Ce(e) {
          le ? me(Se(e)) : (window.location.hash = e);
        }
        function Oe(e) {
          le ? pe(Se(e)) : window.location.replace(Se(e));
        }
        var Ee = (function (e) {
            function t(t, n) {
              e.call(this, t, n), (this.stack = []), (this.index = -1);
            }
            return (
              e && (t.__proto__ = e),
              (t.prototype = Object.create(e && e.prototype)),
              (t.prototype.constructor = t),
              (t.prototype.push = function (e, t, n) {
                var r = this;
                this.transitionTo(
                  e,
                  function (e) {
                    (r.stack = r.stack.slice(0, r.index + 1).concat(e)),
                      r.index++,
                      t && t(e);
                  },
                  n
                );
              }),
              (t.prototype.replace = function (e, t, n) {
                var r = this;
                this.transitionTo(
                  e,
                  function (e) {
                    (r.stack = r.stack.slice(0, r.index).concat(e)), t && t(e);
                  },
                  n
                );
              }),
              (t.prototype.go = function (e) {
                var t = this,
                  n = this.index + e;
                if (!(n < 0 || n >= this.stack.length)) {
                  var r = this.stack[n];
                  this.confirmTransition(r, function () {
                    (t.index = n), t.updateRoute(r);
                  });
                }
              }),
              (t.prototype.getCurrentLocation = function () {
                var e = this.stack[this.stack.length - 1];
                return e ? e.fullPath : "/";
              }),
              (t.prototype.ensureURL = function () {}),
              t
            );
          })(Le),
          He = function (e) {
            void 0 === e && (e = {}),
              (this.app = null),
              (this.apps = []),
              (this.options = e),
              (this.beforeHooks = []),
              (this.resolveHooks = []),
              (this.afterHooks = []),
              (this.matcher = Q(e.routes || [], this));
            var t = e.mode || "hash";
            switch (
              ((this.fallback = "history" === t && !le && !1 !== e.fallback),
              this.fallback && (t = "hash"),
              D || (t = "abstract"),
              (this.mode = t),
              t)
            ) {
              case "history":
                this.history = new xe(this, e.base);
                break;
              case "hash":
                this.history = new Te(this, e.base, this.fallback);
                break;
              case "abstract":
                this.history = new Ee(this, e.base);
                break;
              default:
                0;
            }
          },
          Ae = { currentRoute: { configurable: !0 } };
        function Pe(e, t) {
          return (
            e.push(t),
            function () {
              var n = e.indexOf(t);
              n > -1 && e.splice(n, 1);
            }
          );
        }
        (He.prototype.match = function (e, t, n) {
          return this.matcher.match(e, t, n);
        }),
          (Ae.currentRoute.get = function () {
            return this.history && this.history.current;
          }),
          (He.prototype.init = function (e) {
            var t = this;
            if ((this.apps.push(e), !this.app)) {
              this.app = e;
              var n = this.history;
              if (n instanceof xe) n.transitionTo(n.getCurrentLocation());
              else if (n instanceof Te) {
                var r = function () {
                  n.setupListeners();
                };
                n.transitionTo(n.getCurrentLocation(), r, r);
              }
              n.listen(function (e) {
                t.apps.forEach(function (t) {
                  t._route = e;
                });
              });
            }
          }),
          (He.prototype.beforeEach = function (e) {
            return Pe(this.beforeHooks, e);
          }),
          (He.prototype.beforeResolve = function (e) {
            return Pe(this.resolveHooks, e);
          }),
          (He.prototype.afterEach = function (e) {
            return Pe(this.afterHooks, e);
          }),
          (He.prototype.onReady = function (e, t) {
            this.history.onReady(e, t);
          }),
          (He.prototype.onError = function (e) {
            this.history.onError(e);
          }),
          (He.prototype.push = function (e, t, n) {
            this.history.push(e, t, n);
          }),
          (He.prototype.replace = function (e, t, n) {
            this.history.replace(e, t, n);
          }),
          (He.prototype.go = function (e) {
            this.history.go(e);
          }),
          (He.prototype.back = function () {
            this.go(-1);
          }),
          (He.prototype.forward = function () {
            this.go(1);
          }),
          (He.prototype.getMatchedComponents = function (e) {
            var t = e ? (e.matched ? e : this.resolve(e).route) : this.currentRoute;
            return t
              ? [].concat.apply(
                  [],
                  t.matched.map(function (e) {
                    return Object.keys(e.components).map(function (t) {
                      return e.components[t];
                    });
                  })
                )
              : [];
          }),
          (He.prototype.resolve = function (e, t, n) {
            var r = K(e, t || this.history.current, n, this),
              i = this.match(r, t),
              s = i.redirectedFrom || i.fullPath;
            return {
              location: r,
              route: i,
              href: (function (e, t, n) {
                var r = "hash" === n ? "#" + t : t;
                return e ? S(e + "/" + r) : r;
              })(this.history.base, s, this.mode),
              normalizedTo: r,
              resolved: i,
            };
          }),
          (He.prototype.addRoutes = function (e) {
            this.matcher.addRoutes(e),
              this.history.current !== y &&
                this.history.transitionTo(this.history.getCurrentLocation());
          }),
          Object.defineProperties(He.prototype, Ae),
          (He.install = T),
          (He.version = "3.0.1"),
          D && window.Vue && window.Vue.use(He);
        var $e = He,
          Re = n(203),
          Ne = n.n(Re),
          Fe = n(204),
          Ie = n.n(Fe),
          We = n(205),
          ze = n.n(We);
        var qe = {
            use: function () {
              i.a.component("app-layout", n(206)),
                i.a.component("doc-item", n(214)),
                i.a.component("columns", n(225)),
                i.a.component("dependencies", n(230)),
                i.a.component("parameters", n(235)),
                i.a.component("related-terms", n(240)),
                i.a.component("relations", n(243)),
                i.a.component("sql-script", n(248)),
                i.a.component("schema-script", n(251)),
                i.a.component("term-data-links", n(254)),
                i.a.component("timestamps", n(259)),
                i.a.component("triggers", n(264)),
                i.a.component("unique-keys", n(269)),
                i.a.component("lookup-values", n(272)),
                i.a.component("lookup-linked-terms", n(277)),
                i.a.component("lookup-linked-columns", n(282)),
                i.a.component("term-lookups", n(287)),
                i.a.component("domain-links", n(292)),
                i.a.component("breadcrumb", n(297)),
                i.a.component("v-button", n(302)),
                i.a.component("collapsible", n(307)),
                i.a.component("custom-field", n(312)),
                i.a.component("dropdown", n(317)),
                i.a.component("ext-transition", n(322)),
                i.a.component("filter-highlight", n(327)),
                i.a.component("item-link", n(332)),
                i.a.component("items-table", n(337)),
                i.a.component("object-icon", n(340)),
                i.a.component("plain-text", n(343)),
                i.a.component("references-finder", n(348)),
                i.a.component("search", n(353)),
                i.a.component("side-nav", n(358)),
                i.a.component("source-code", n(363)),
                i.a.component("summary-table", n(368)),
                i.a.component("svg2erd", n(373)),
                i.a.component("term", n(378)),
                i.a.component("tooltip", n(383)),
                i.a.component("tree-nav", n(388)),
                i.a.component("tree-nav-node", n(396)),
                i.a.component("hierarchical-name", n(401)),
                i.a.component("domain-items-table", n(406));
            },
          },
          Be = n(6),
          Ue = n(18),
          Je = n(10),
          Ve = n.n(Je);
        function Ge(e) {
          var t,
            r = this;
          return (
            (t = Ve.a.mark(function t() {
              return Ve.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt("return", n(409)("./" + e + ".vue"));
                      case 1:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                r
              );
            })),
            function () {
              var e = t.apply(this, arguments);
              return new Promise(function (t, n) {
                return (function r(i, s) {
                  try {
                    var a = e[i](s),
                      o = a.value;
                  } catch (e) {
                    return void n(e);
                  }
                  if (!a.done)
                    return Promise.resolve(o).then(
                      function (e) {
                        r("next", e);
                      },
                      function (e) {
                        r("throw", e);
                      }
                    );
                  t(o);
                })("next");
              });
            }
          );
        }
        var Ke = [
            {
              path: "/",
              component: Ge("docs"),
              children: [
                { path: "", component: Ge("docs/repository") },
                {
                  path: "doc/:id/*",
                  component: Ge("docs-object"),
                  meta: { checkObjectExistence: !0 },
                },
              ],
            },
            {
              path: "/fragments",
              component: Ge("fragments"),
              children: [
                {
                  path: "table/:id",
                  component: Ge("fragments/table"),
                  meta: { checkObjectExistence: !0 },
                },
                {
                  path: "table-essential/:id",
                  component: Ge("fragments/table-essential"),
                  meta: { checkObjectExistence: !0 },
                },
                {
                  path: "structure/:id",
                  component: Ge("fragments/structure"),
                  meta: { checkObjectExistence: !0 },
                },
                {
                  path: "structure-essential/:id",
                  component: Ge("fragments/structure-essential"),
                  meta: { checkObjectExistence: !0 },
                },
                {
                  path: "module-diagram/:id",
                  component: Ge("fragments/module-diagram"),
                  meta: { checkObjectExistence: !0 },
                },
                {
                  path: "tables/:id",
                  component: Ge("fragments/tables"),
                  meta: { checkObjectExistence: !0 },
                },
                {
                  path: "structures/:id",
                  component: Ge("fragments/structures"),
                  meta: { checkObjectExistence: !0 },
                },
              ],
            },
            { path: "*", component: Ge("not-found") },
          ],
          Ze = n(0),
          Qe = n.n(Ze),
          Xe = n(528),
          et = n.n(Xe),
          tt = n(529),
          nt = n.n(tt);
        et.a.registerLanguage("sql", nt.a),
          (window.$ = ze.a),
          (window.jQuery = ze.a),
          n(530),
          (window._ = Ie.a),
          (window.hljs = et.a),
          (window.moment = Qe.a),
          i.a.use($e),
          i.a.use(Ne.a),
          qe.use(),
          i.a.mixin({
            data: function () {
              return { lo_: Ie.a };
            },
            methods: {
              _dot: function (e, t) {
                try {
                  var n = e();
                  return null === n || void 0 === n ? t : n;
                } catch (e) {
                  return t;
                }
              },
            },
          });
        var rt = new $e({ routes: Ke });
        Ue.a.dispatch("repository/import", window.repository),
          rt.beforeEach(function (e, t, n) {
            n(), e.params.id && Be.a.showItemInTree(e.params.id);
          }),
          rt.beforeEach(function (e, t, n) {
            var r = !1;
            return (
              e.matched.forEach(function (e) {
                void 0 !== e.meta.checkObjectExistence &&
                  (r = e.meta.checkObjectExistence);
              }),
              r && void 0 === Ue.a.state.repository.structureById[e.params.id]
                ? (alert(
                    "The page was not found, you will be redirected to the main page."
                  ),
                  n("/"))
                : n()
            );
          }),
          new i.a({ store: Ue.a, router: rt })
            .$mount(".app")
            .$nextTick(function () {
              document.documentElement.className =
                document.documentElement.className.replace(
                  "is-booting",
                  "is-booted"
                );
            });
      },
      function (e, t, n) {
        "use strict";
        e.exports = n(200).polyfill();
      },
      function (e, t, n) {
        (function (t, n) {
          var r;
          (r = function () {
            "use strict";
            function e(e) {
              return "function" == typeof e;
            }
            var r = Array.isArray
                ? Array.isArray
                : function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                  },
              i = 0,
              s = void 0,
              a = void 0,
              o = function (e, t) {
                (m[i] = e), (m[i + 1] = t), 2 === (i += 2) && (a ? a(p) : b());
              };
            var u = "undefined" != typeof window ? window : void 0,
              l = u || {},
              c = l.MutationObserver || l.WebKitMutationObserver,
              d =
                "undefined" == typeof self &&
                void 0 !== t &&
                "[object process]" === {}.toString.call(t),
              f =
                "undefined" != typeof Uint8ClampedArray &&
                "undefined" != typeof importScripts &&
                "undefined" != typeof MessageChannel;
            function _() {
              var e = setTimeout;
              return function () {
                return e(p, 1);
              };
            }
            var m = new Array(1e3);
            function p() {
              for (var e = 0; e < i; e += 2) {
                (0, m[e])(m[e + 1]), (m[e] = void 0), (m[e + 1] = void 0);
              }
              i = 0;
            }
            var h,
              v,
              y,
              g,
              b = void 0;
            function M(e, t) {
              var n = this,
                r = new this.constructor(w);
              void 0 === r[k] && $(r);
              var i = n._state;
              if (i) {
                var s = arguments[i - 1];
                o(function () {
                  return A(i, r, s, n._result);
                });
              } else E(n, r, e, t);
              return r;
            }
            function L(e) {
              if (e && "object" == typeof e && e.constructor === this) return e;
              var t = new this(w);
              return j(t, e), t;
            }
            d
              ? (b = function () {
                  return t.nextTick(p);
                })
              : c
              ? ((v = 0),
                (y = new c(p)),
                (g = document.createTextNode("")),
                y.observe(g, { characterData: !0 }),
                (b = function () {
                  g.data = v = ++v % 2;
                }))
              : f
              ? (((h = new MessageChannel()).port1.onmessage = p),
                (b = function () {
                  return h.port2.postMessage(0);
                }))
              : (b =
                  void 0 === u
                    ? (function () {
                        try {
                          var e = Function("return this")().require("vertx");
                          return void 0 !== (s = e.runOnLoop || e.runOnContext)
                            ? function () {
                                s(p);
                              }
                            : _();
                        } catch (e) {
                          return _();
                        }
                      })()
                    : _());
            var k = Math.random().toString(36).substring(2);
            function w() {}
            var x = void 0,
              Y = 1,
              T = 2;
            function D(t, n, r) {
              n.constructor === t.constructor &&
              r === M &&
              n.constructor.resolve === L
                ? (function (e, t) {
                    t._state === Y
                      ? C(e, t._result)
                      : t._state === T
                      ? O(e, t._result)
                      : E(
                          t,
                          void 0,
                          function (t) {
                            return j(e, t);
                          },
                          function (t) {
                            return O(e, t);
                          }
                        );
                  })(t, n)
                : void 0 === r
                ? C(t, n)
                : e(r)
                ? (function (e, t, n) {
                    o(function (e) {
                      var r = !1,
                        i = (function (e, t, n, r) {
                          try {
                            e.call(t, n, r);
                          } catch (e) {
                            return e;
                          }
                        })(
                          n,
                          t,
                          function (n) {
                            r || ((r = !0), t !== n ? j(e, n) : C(e, n));
                          },
                          function (t) {
                            r || ((r = !0), O(e, t));
                          },
                          e._label
                        );
                      !r && i && ((r = !0), O(e, i));
                    }, e);
                  })(t, n, r)
                : C(t, n);
            }
            function j(e, t) {
              if (e === t)
                O(e, new TypeError("You cannot resolve a promise with itself"));
              else if (
                ((i = typeof (r = t)),
                null === r || ("object" !== i && "function" !== i))
              )
                C(e, t);
              else {
                var n = void 0;
                try {
                  n = t.then;
                } catch (t) {
                  return void O(e, t);
                }
                D(e, t, n);
              }
              var r, i;
            }
            function S(e) {
              e._onerror && e._onerror(e._result), H(e);
            }
            function C(e, t) {
              e._state === x &&
                ((e._result = t),
                (e._state = Y),
                0 !== e._subscribers.length && o(H, e));
            }
            function O(e, t) {
              e._state === x && ((e._state = T), (e._result = t), o(S, e));
            }
            function E(e, t, n, r) {
              var i = e._subscribers,
                s = i.length;
              (e._onerror = null),
                (i[s] = t),
                (i[s + Y] = n),
                (i[s + T] = r),
                0 === s && e._state && o(H, e);
            }
            function H(e) {
              var t = e._subscribers,
                n = e._state;
              if (0 !== t.length) {
                for (
                  var r = void 0, i = void 0, s = e._result, a = 0;
                  a < t.length;
                  a += 3
                )
                  (r = t[a]), (i = t[a + n]), r ? A(n, r, i, s) : i(s);
                e._subscribers.length = 0;
              }
            }
            function A(t, n, r, i) {
              var s = e(r),
                a = void 0,
                o = void 0,
                u = !0;
              if (s) {
                try {
                  a = r(i);
                } catch (e) {
                  (u = !1), (o = e);
                }
                if (n === a)
                  return void O(
                    n,
                    new TypeError(
                      "A promises callback cannot return that same promise."
                    )
                  );
              } else a = i;
              n._state !== x ||
                (s && u
                  ? j(n, a)
                  : !1 === u
                  ? O(n, o)
                  : t === Y
                  ? C(n, a)
                  : t === T && O(n, a));
            }
            var P = 0;
            function $(e) {
              (e[k] = P++),
                (e._state = void 0),
                (e._result = void 0),
                (e._subscribers = []);
            }
            var R = (function () {
              function e(e, t) {
                (this._instanceConstructor = e),
                  (this.promise = new e(w)),
                  this.promise[k] || $(this.promise),
                  r(t)
                    ? ((this.length = t.length),
                      (this._remaining = t.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? C(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(t),
                          0 === this._remaining && C(this.promise, this._result)))
                    : O(
                        this.promise,
                        new Error("Array Methods must be provided an Array")
                      );
              }
              return (
                (e.prototype._enumerate = function (e) {
                  for (var t = 0; this._state === x && t < e.length; t++)
                    this._eachEntry(e[t], t);
                }),
                (e.prototype._eachEntry = function (e, t) {
                  var n = this._instanceConstructor,
                    r = n.resolve;
                  if (r === L) {
                    var i = void 0,
                      s = void 0,
                      a = !1;
                    try {
                      i = e.then;
                    } catch (e) {
                      (a = !0), (s = e);
                    }
                    if (i === M && e._state !== x)
                      this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof i)
                      this._remaining--, (this._result[t] = e);
                    else if (n === N) {
                      var o = new n(w);
                      a ? O(o, s) : D(o, e, i), this._willSettleAt(o, t);
                    } else
                      this._willSettleAt(
                        new n(function (t) {
                          return t(e);
                        }),
                        t
                      );
                  } else this._willSettleAt(r(e), t);
                }),
                (e.prototype._settledAt = function (e, t, n) {
                  var r = this.promise;
                  r._state === x &&
                    (this._remaining--, e === T ? O(r, n) : (this._result[t] = n)),
                    0 === this._remaining && C(r, this._result);
                }),
                (e.prototype._willSettleAt = function (e, t) {
                  var n = this;
                  E(
                    e,
                    void 0,
                    function (e) {
                      return n._settledAt(Y, t, e);
                    },
                    function (e) {
                      return n._settledAt(T, t, e);
                    }
                  );
                }),
                e
              );
            })();
            var N = (function () {
              function t(e) {
                (this[k] = P++),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  w !== e &&
                    ("function" != typeof e &&
                      (function () {
                        throw new TypeError(
                          "You must pass a resolver function as the first argument to the promise constructor"
                        );
                      })(),
                    this instanceof t
                      ? (function (e, t) {
                          try {
                            t(
                              function (t) {
                                j(e, t);
                              },
                              function (t) {
                                O(e, t);
                              }
                            );
                          } catch (t) {
                            O(e, t);
                          }
                        })(this, e)
                      : (function () {
                          throw new TypeError(
                            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                          );
                        })());
              }
              return (
                (t.prototype.catch = function (e) {
                  return this.then(null, e);
                }),
                (t.prototype.finally = function (t) {
                  var n = this.constructor;
                  return e(t)
                    ? this.then(
                        function (e) {
                          return n.resolve(t()).then(function () {
                            return e;
                          });
                        },
                        function (e) {
                          return n.resolve(t()).then(function () {
                            throw e;
                          });
                        }
                      )
                    : this.then(t, t);
                }),
                t
              );
            })();
            return (
              (N.prototype.then = M),
              (N.all = function (e) {
                return new R(this, e).promise;
              }),
              (N.race = function (e) {
                var t = this;
                return r(e)
                  ? new t(function (n, r) {
                      for (var i = e.length, s = 0; s < i; s++)
                        t.resolve(e[s]).then(n, r);
                    })
                  : new t(function (e, t) {
                      return t(new TypeError("You must pass an array to race."));
                    });
              }),
              (N.resolve = L),
              (N.reject = function (e) {
                var t = new this(w);
                return O(t, e), t;
              }),
              (N._setScheduler = function (e) {
                a = e;
              }),
              (N._setAsap = function (e) {
                o = e;
              }),
              (N._asap = o),
              (N.polyfill = function () {
                var e = void 0;
                if (void 0 !== n) e = n;
                else if ("undefined" != typeof self) e = self;
                else
                  try {
                    e = Function("return this")();
                  } catch (e) {
                    throw new Error(
                      "polyfill failed because global object is unavailable in this environment"
                    );
                  }
                var t = e.Promise;
                if (t) {
                  var r = null;
                  try {
                    r = Object.prototype.toString.call(t.resolve());
                  } catch (e) {}
                  if ("[object Promise]" === r && !t.cast) return;
                }
                e.Promise = N;
              }),
              (N.Promise = N),
              N
            );
          }),
            (e.exports = r());
        }).call(t, n(16), n(11));
      },
      function (e, t, n) {
        (function (e) {
          var r =
              (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
            i = Function.prototype.apply;
          function s(e, t) {
            (this._id = e), (this._clearFn = t);
          }
          (t.setTimeout = function () {
            return new s(i.call(setTimeout, r, arguments), clearTimeout);
          }),
            (t.setInterval = function () {
              return new s(i.call(setInterval, r, arguments), clearInterval);
            }),
            (t.clearTimeout = t.clearInterval =
              function (e) {
                e && e.close();
              }),
            (s.prototype.unref = s.prototype.ref = function () {}),
            (s.prototype.close = function () {
              this._clearFn.call(r, this._id);
            }),
            (t.enroll = function (e, t) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
            }),
            (t.unenroll = function (e) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
            }),
            (t._unrefActive = t.active =
              function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 &&
                  (e._idleTimeoutId = setTimeout(function () {
                    e._onTimeout && e._onTimeout();
                  }, t));
              }),
            n(202),
            (t.setImmediate =
              ("undefined" != typeof self && self.setImmediate) ||
              (void 0 !== e && e.setImmediate) ||
              (this && this.setImmediate)),
            (t.clearImmediate =
              ("undefined" != typeof self && self.clearImmediate) ||
              (void 0 !== e && e.clearImmediate) ||
              (this && this.clearImmediate));
        }).call(t, n(11));
      },
      function (e, t, n) {
        (function (e, t) {
          !(function (e, n) {
            "use strict";
            if (!e.setImmediate) {
              var r,
                i,
                s,
                a,
                o,
                u = 1,
                l = {},
                c = !1,
                d = e.document,
                f = Object.getPrototypeOf && Object.getPrototypeOf(e);
              (f = f && f.setTimeout ? f : e),
                "[object process]" === {}.toString.call(e.process)
                  ? (r = function (e) {
                      t.nextTick(function () {
                        m(e);
                      });
                    })
                  : !(function () {
                      if (e.postMessage && !e.importScripts) {
                        var t = !0,
                          n = e.onmessage;
                        return (
                          (e.onmessage = function () {
                            t = !1;
                          }),
                          e.postMessage("", "*"),
                          (e.onmessage = n),
                          t
                        );
                      }
                    })()
                  ? e.MessageChannel
                    ? (((s = new MessageChannel()).port1.onmessage = function (e) {
                        m(e.data);
                      }),
                      (r = function (e) {
                        s.port2.postMessage(e);
                      }))
                    : d && "onreadystatechange" in d.createElement("script")
                    ? ((i = d.documentElement),
                      (r = function (e) {
                        var t = d.createElement("script");
                        (t.onreadystatechange = function () {
                          m(e),
                            (t.onreadystatechange = null),
                            i.removeChild(t),
                            (t = null);
                        }),
                          i.appendChild(t);
                      }))
                    : (r = function (e) {
                        setTimeout(m, 0, e);
                      })
                  : ((a = "setImmediate$" + Math.random() + "$"),
                    (o = function (t) {
                      t.source === e &&
                        "string" == typeof t.data &&
                        0 === t.data.indexOf(a) &&
                        m(+t.data.slice(a.length));
                    }),
                    e.addEventListener
                      ? e.addEventListener("message", o, !1)
                      : e.attachEvent("onmessage", o),
                    (r = function (t) {
                      e.postMessage(a + t, "*");
                    })),
                (f.setImmediate = function (e) {
                  "function" != typeof e && (e = new Function("" + e));
                  for (
                    var t = new Array(arguments.length - 1), n = 0;
                    n < t.length;
                    n++
                  )
                    t[n] = arguments[n + 1];
                  var i = { callback: e, args: t };
                  return (l[u] = i), r(u), u++;
                }),
                (f.clearImmediate = _);
            }
            function _(e) {
              delete l[e];
            }
            function m(e) {
              if (c) setTimeout(m, 0, e);
              else {
                var t = l[e];
                if (t) {
                  c = !0;
                  try {
                    !(function (e) {
                      var t = e.callback,
                        r = e.args;
                      switch (r.length) {
                        case 0:
                          t();
                          break;
                        case 1:
                          t(r[0]);
                          break;
                        case 2:
                          t(r[0], r[1]);
                          break;
                        case 3:
                          t(r[0], r[1], r[2]);
                          break;
                        default:
                          t.apply(n, r);
                      }
                    })(t);
                  } finally {
                    _(e), (c = !1);
                  }
                }
              }
            }
          })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
        }).call(t, n(11), n(16));
      },
      function (e, t, n) {
        (function (t) {
          var n;
          "undefined" != typeof self && self,
            (n = function () {
              "use strict";
              var e = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;
              var i = (function () {
                  try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                      return !1;
                    for (var t = {}, n = 0; n < 10; n++)
                      t["_" + String.fromCharCode(n)] = n;
                    if (
                      "0123456789" !==
                      Object.getOwnPropertyNames(t)
                        .map(function (e) {
                          return t[e];
                        })
                        .join("")
                    )
                      return !1;
                    var r = {};
                    return (
                      "abcdefghijklmnopqrst".split("").forEach(function (e) {
                        r[e] = e;
                      }),
                      "abcdefghijklmnopqrst" ===
                        Object.keys(Object.assign({}, r)).join("")
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
                  ? Object.assign
                  : function (t, i) {
                      for (
                        var s,
                          a,
                          o = arguments,
                          u = (function (e) {
                            if (null === e || void 0 === e)
                              throw new TypeError(
                                "Object.assign cannot be called with null or undefined"
                              );
                            return Object(e);
                          })(t),
                          l = 1;
                        l < arguments.length;
                        l++
                      ) {
                        for (var c in (s = Object(o[l])))
                          n.call(s, c) && (u[c] = s[c]);
                        if (e) {
                          a = e(s);
                          for (var d = 0; d < a.length; d++)
                            r.call(s, a[d]) && (u[a[d]] = s[a[d]]);
                        }
                      }
                      return u;
                    },
                s =
                  "undefined" != typeof window
                    ? window
                    : void 0 !== t
                    ? t
                    : "undefined" != typeof self
                    ? self
                    : {};
              var a,
                o =
                  ((function (e, t) {
                    e.exports = (function () {
                      var e = function (e) {
                          return (
                            (function (e) {
                              return !!e && "object" == typeof e;
                            })(e) &&
                            !(function (e) {
                              var n = Object.prototype.toString.call(e);
                              return (
                                "[object RegExp]" === n ||
                                "[object Date]" === n ||
                                (function (e) {
                                  return e.$$typeof === t;
                                })(e)
                              );
                            })(e)
                          );
                        },
                        t =
                          "function" == typeof Symbol && Symbol.for
                            ? Symbol.for("react.element")
                            : 60103;
                      function n(e, t) {
                        return !1 !== t.clone && t.isMergeableObject(e)
                          ? i(((n = e), Array.isArray(n) ? [] : {}), e, t)
                          : e;
                        var n;
                      }
                      function r(e, t, r) {
                        return e.concat(t).map(function (e) {
                          return n(e, r);
                        });
                      }
                      function i(t, s, a) {
                        ((a = a || {}).arrayMerge = a.arrayMerge || r),
                          (a.isMergeableObject = a.isMergeableObject || e);
                        var o = Array.isArray(s),
                          u = Array.isArray(t),
                          l = o === u;
                        return l
                          ? o
                            ? a.arrayMerge(t, s, a)
                            : (function (e, t, r) {
                                var s = {};
                                return (
                                  r.isMergeableObject(e) &&
                                    Object.keys(e).forEach(function (t) {
                                      s[t] = n(e[t], r);
                                    }),
                                  Object.keys(t).forEach(function (a) {
                                    r.isMergeableObject(t[a]) && e[a]
                                      ? (s[a] = i(e[a], t[a], r))
                                      : (s[a] = n(t[a], r));
                                  }),
                                  s
                                );
                              })(t, s, a)
                          : n(s, a);
                      }
                      return (
                        (i.all = function (e, t) {
                          if (!Array.isArray(e))
                            throw new Error("first argument should be an array");
                          return e.reduce(function (e, n) {
                            return i(e, n, t);
                          }, {});
                        }),
                        i
                      );
                    })();
                  })((a = { exports: {} }), a.exports),
                  a.exports),
                u = "[object Object]";
              var l,
                c,
                d = Function.prototype,
                f = Object.prototype,
                _ = d.toString,
                m = f.hasOwnProperty,
                p = _.call(Object),
                h = f.toString,
                v =
                  ((l = Object.getPrototypeOf),
                  (c = Object),
                  function (e) {
                    return l(c(e));
                  });
              var y = function (e) {
                if (
                  !(function (e) {
                    return !!e && "object" == typeof e;
                  })(e) ||
                  h.call(e) != u ||
                  (function (e) {
                    var t = !1;
                    if (null != e && "function" != typeof e.toString)
                      try {
                        t = !!(e + "");
                      } catch (e) {}
                    return t;
                  })(e)
                )
                  return !1;
                var t = v(e);
                if (null === t) return !0;
                var n = m.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && _.call(n) == p;
              };
              var g = 1 / 0,
                b = "[object Symbol]",
                M = "object" == typeof s && s && s.Object === Object && s,
                L =
                  "object" == typeof self && self && self.Object === Object && self,
                k = M || L || Function("return this")(),
                w = 0,
                x = Object.prototype.toString,
                Y = k.Symbol,
                T = Y ? Y.prototype : void 0,
                D = T ? T.toString : void 0;
              function j(e) {
                if ("string" == typeof e) return e;
                if (
                  (function (e) {
                    return (
                      "symbol" == typeof e ||
                      ((function (e) {
                        return !!e && "object" == typeof e;
                      })(e) &&
                        x.call(e) == b)
                    );
                  })(e)
                )
                  return D ? D.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -g ? "-0" : t;
              }
              var S = function (e) {
                var t,
                  n = ++w;
                return (null == (t = e) ? "" : j(t)) + n;
              };
              var C = function (e) {
                return "undefined" == typeof window
                  ? String(e)
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")
                      .replace(/"/g, "&quot;")
                      .replace(/'/g, "&#x27;")
                  : String(e)
                      .replace(/&/g, "&")
                      .replace(/</g, "<")
                      .replace(/>/g, ">")
                      .replace(/"/g, '"')
                      .replace(/'/g, "'");
              };
              function O(e) {
                void 0 === e && (e = {});
                var t = e.keyName,
                  n = e.tagIDKeyName,
                  r = e.metaTemplateKeyName,
                  i = e.contentKeyName;
                return function (e) {
                  var s = (function e(t, n) {
                    void 0 === n && (n = {});
                    var r,
                      i,
                      s = t.component,
                      a = t.option,
                      u = t.deep,
                      l = t.arrayMerge,
                      c = t.metaTemplateKeyName,
                      d = t.tagIDKeyName,
                      f = t.contentKeyName,
                      _ = s.$options;
                    if (s._inactive) return n;
                    if (void 0 !== _[a] && null !== _[a]) {
                      var m = _[a];
                      "function" == typeof m && (m = m.call(s)),
                        (n = "object" == typeof m ? o(n, m, { arrayMerge: l }) : m);
                    }
                    return (
                      u &&
                        s.$children.length &&
                        s.$children.forEach(function (t) {
                          n = e(
                            { component: t, option: a, deep: u, arrayMerge: l },
                            n
                          );
                        }),
                      c &&
                        n.hasOwnProperty("meta") &&
                        ((n.meta = Object.keys(n.meta).map(function (e) {
                          var t = n.meta[e];
                          if (
                            !t.hasOwnProperty(c) ||
                            !t.hasOwnProperty(f) ||
                            void 0 === t[c]
                          )
                            return n.meta[e];
                          var r = t[c];
                          return (
                            delete t[c],
                            r &&
                              (t.content =
                                "function" == typeof r
                                  ? r(t.content)
                                  : r.replace(/%s/g, t.content)),
                            t
                          );
                        })),
                        (n.meta =
                          ((r = n.meta),
                          (i = function (e) {
                            return e.hasOwnProperty(d) ? e[d] : S();
                          }),
                          r.filter(function (e, t, n) {
                            return t === n.length - 1 || i(e) !== i(n[t + 1]);
                          })))),
                      n
                    );
                  })({
                    component: e,
                    option: t,
                    deep: !0,
                    metaTemplateKeyName: r,
                    tagIDKeyName: n,
                    contentKeyName: i,
                    arrayMerge: function (t, s) {
                      var a = [];
                      for (var o in t) {
                        var u = t[o],
                          l = !1;
                        for (var c in s) {
                          var d = s[c];
                          if (u[n] && u[n] === d[n]) {
                            var f = u[r],
                              _ = d[r];
                            f && !_ && (d[i] = E(e)(f)(d[i])),
                              f &&
                                _ &&
                                !d[i] &&
                                ((d[i] = E(e)(_)(u[i])), delete d[r]),
                              (l = !0);
                            break;
                          }
                        }
                        l || a.push(u);
                      }
                      return a.concat(s);
                    },
                  });
                  s.title && (s.titleChunk = s.title),
                    s.titleTemplate &&
                      (s.title = E(e)(s.titleTemplate)(s.titleChunk || "")),
                    s.base && (s.base = Object.keys(s.base).length ? [s.base] : []);
                  var a = s.__dangerouslyDisableSanitizers,
                    u = s.__dangerouslyDisableSanitizersByTagID,
                    l = function (e) {
                      return Object.keys(e).reduce(function (t, r) {
                        var i = a && a.indexOf(r) > -1,
                          s = e[n];
                        !i && s && (i = u && u[s] && u[s].indexOf(r) > -1);
                        var o,
                          c = e[r];
                        return (
                          (t[r] = c),
                          "__dangerouslyDisableSanitizers" === r ||
                          "__dangerouslyDisableSanitizersByTagID" === r
                            ? t
                            : (i
                                ? (t[r] = c)
                                : "string" == typeof c
                                ? (t[r] = C(c))
                                : y(c)
                                ? (t[r] = l(c))
                                : ((o = c),
                                  (
                                    Array.isArray
                                      ? Array.isArray(o)
                                      : "[object Array]" ===
                                        Object.prototype.toString.call(o)
                                  )
                                    ? (t[r] = c.map(l))
                                    : (t[r] = c)),
                              t)
                        );
                      }, {});
                    };
                  return (
                    (s = o(
                      {
                        title: "",
                        titleChunk: "",
                        titleTemplate: "%s",
                        htmlAttrs: {},
                        bodyAttrs: {},
                        headAttrs: {},
                        meta: [],
                        base: [],
                        link: [],
                        style: [],
                        script: [],
                        noscript: [],
                        __dangerouslyDisableSanitizers: [],
                        __dangerouslyDisableSanitizersByTagID: {},
                      },
                      s
                    )),
                    (s = l(s))
                  );
                };
              }
              var E = function (e) {
                return function (t) {
                  return function (n) {
                    return "function" == typeof t
                      ? t.call(e, n)
                      : t.replace(/%s/g, n);
                  };
                };
              };
              function H(e) {
                return (
                  void 0 === e && (e = {}),
                  function (t, n) {
                    switch (t) {
                      case "title":
                        return (function (e) {
                          void 0 === e && (e = {});
                          var t = e.attribute;
                          return function (e, n) {
                            return {
                              text: function () {
                                return (
                                  "<" +
                                  e +
                                  " " +
                                  t +
                                  '="true">' +
                                  n +
                                  "</" +
                                  e +
                                  ">"
                                );
                              },
                            };
                          };
                        })(e)(t, n);
                      case "htmlAttrs":
                      case "bodyAttrs":
                      case "headAttrs":
                        return (function (e) {
                          void 0 === e && (e = {});
                          var t = e.attribute;
                          return function (e, n) {
                            return {
                              text: function () {
                                var e = "",
                                  r = [];
                                for (var i in n)
                                  n.hasOwnProperty(i) &&
                                    (r.push(i),
                                    (e +=
                                      (void 0 !== n[i]
                                        ? i + '="' + n[i] + '"'
                                        : i) + " "));
                                return (e += t + '="' + r.join(",") + '"').trim();
                              },
                            };
                          };
                        })(e)(t, n);
                      default:
                        return (function (e) {
                          void 0 === e && (e = {});
                          var t = e.attribute;
                          return function (n, r) {
                            return {
                              text: function (i) {
                                void 0 === i && (i = {});
                                var s = i.body;
                                return (
                                  void 0 === s && (s = !1),
                                  r.reduce(function (r, i) {
                                    if (0 === Object.keys(i).length) return r;
                                    if (!!i.body !== s) return r;
                                    var a = Object.keys(i)
                                        .reduce(function (t, n) {
                                          switch (n) {
                                            case "innerHTML":
                                            case "cssText":
                                            case "once":
                                              return t;
                                            default:
                                              return -1 !==
                                                [e.tagIDKeyName, "body"].indexOf(n)
                                                ? t +
                                                    " data-" +
                                                    n +
                                                    '="' +
                                                    i[n] +
                                                    '"'
                                                : void 0 === i[n]
                                                ? t + " " + n
                                                : t + " " + n + '="' + i[n] + '"';
                                          }
                                        }, "")
                                        .trim(),
                                      o = i.innerHTML || i.cssText || "",
                                      u =
                                        -1 ===
                                        ["noscript", "script", "style"].indexOf(n),
                                      l = i.once ? "" : t + '="true" ';
                                    return u
                                      ? r + "<" + n + " " + l + a + "/>"
                                      : r +
                                          "<" +
                                          n +
                                          " " +
                                          l +
                                          a +
                                          ">" +
                                          o +
                                          "</" +
                                          n +
                                          ">";
                                  }, "")
                                );
                              },
                            };
                          };
                        })(e)(t, n);
                    }
                  }
                );
              }
              function A(e) {
                void 0 === e && (e = {});
                var t = e.attribute;
                return function (e, n) {
                  var r = n.getAttribute(t),
                    i = r ? r.split(",") : [],
                    s = [].concat(i);
                  for (var a in e)
                    if (e.hasOwnProperty(a)) {
                      var o = e[a] || "";
                      n.setAttribute(a, o), -1 === i.indexOf(a) && i.push(a);
                      var u = s.indexOf(a);
                      -1 !== u && s.splice(u, 1);
                    }
                  for (var l = s.length - 1; l >= 0; l--) n.removeAttribute(s[l]);
                  i.length === s.length
                    ? n.removeAttribute(t)
                    : n.setAttribute(t, i.join(","));
                };
              }
              var P = Function.prototype.call.bind(Array.prototype.slice);
              function $(e) {
                void 0 === e && (e = {});
                var t = e.ssrAttribute;
                return function (n) {
                  var r = document.getElementsByTagName("html")[0];
                  if (null === r.getAttribute(t)) {
                    var i = {},
                      s = {};
                    Object.keys(n).forEach(function (t) {
                      switch (t) {
                        case "title":
                          void 0 === (d = n.title) && (d = document.title),
                            (document.title = d);
                          break;
                        case "htmlAttrs":
                          A(e)(n[t], r);
                          break;
                        case "bodyAttrs":
                          A(e)(n[t], document.getElementsByTagName("body")[0]);
                          break;
                        case "headAttrs":
                          A(e)(n[t], document.getElementsByTagName("head")[0]);
                          break;
                        case "titleChunk":
                        case "titleTemplate":
                        case "changed":
                        case "__dangerouslyDisableSanitizers":
                          break;
                        default:
                          var a = document.getElementsByTagName("head")[0],
                            o = document.getElementsByTagName("body")[0],
                            u = (function (e) {
                              void 0 === e && (e = {});
                              var t = e.attribute;
                              return function (n, r, i, s) {
                                var a,
                                  o = P(i.querySelectorAll(n + "[" + t + "]")),
                                  u = P(
                                    s.querySelectorAll(
                                      n + "[" + t + '][data-body="true"]'
                                    )
                                  ),
                                  l = [];
                                if (r.length > 1) {
                                  var c = [];
                                  r = r
                                    .map(function (e) {
                                      var t = JSON.stringify(e);
                                      if (c.indexOf(t) < 0) return c.push(t), e;
                                    })
                                    .filter(function (e) {
                                      return e;
                                    });
                                }
                                r &&
                                  r.length &&
                                  r.forEach(function (r) {
                                    var i = document.createElement(n),
                                      s = !0 !== r.body ? o : u;
                                    for (var c in r)
                                      if (r.hasOwnProperty(c))
                                        if ("innerHTML" === c)
                                          i.innerHTML = r.innerHTML;
                                        else if ("cssText" === c)
                                          i.styleSheet
                                            ? (i.styleSheet.cssText = r.cssText)
                                            : i.appendChild(
                                                document.createTextNode(r.cssText)
                                              );
                                        else if (
                                          -1 !== [e.tagIDKeyName, "body"].indexOf(c)
                                        ) {
                                          var d = "data-" + c,
                                            f = void 0 === r[c] ? "" : r[c];
                                          i.setAttribute(d, f);
                                        } else {
                                          var _ = void 0 === r[c] ? "" : r[c];
                                          i.setAttribute(c, _);
                                        }
                                    i.setAttribute(t, "true"),
                                      s.some(function (e, t) {
                                        return (a = t), i.isEqualNode(e);
                                      })
                                        ? s.splice(a, 1)
                                        : l.push(i);
                                  });
                                var d = o.concat(u);
                                return (
                                  d.forEach(function (e) {
                                    return e.parentNode.removeChild(e);
                                  }),
                                  l.forEach(function (e) {
                                    "true" === e.getAttribute("data-body")
                                      ? s.appendChild(e)
                                      : i.appendChild(e);
                                  }),
                                  { oldTags: d, newTags: l }
                                );
                              };
                            })(e)(t, n[t], a, o),
                            l = u.oldTags,
                            c = u.newTags;
                          c.length && ((i[t] = c), (s[t] = l));
                      }
                      var d;
                    }),
                      "function" == typeof n.changed &&
                        n.changed.call(this, n, i, s);
                  } else r.removeAttribute(t);
                };
              }
              function R(e) {
                return (
                  void 0 === e && (e = {}),
                  function () {
                    return {
                      inject: (function (e) {
                        return (
                          void 0 === e && (e = {}),
                          function () {
                            var t = O(e)(this.$root);
                            for (var n in t)
                              t.hasOwnProperty(n) &&
                                "titleTemplate" !== n &&
                                "titleChunk" !== n &&
                                (t[n] = H(e)(n, t[n]));
                            return t;
                          }
                        );
                      })(e).bind(this),
                      refresh: (function (e) {
                        return (
                          void 0 === e && (e = {}),
                          function () {
                            var t = O(e)(this.$root);
                            return $(e).call(this, t), t;
                          }
                        );
                      })(e).bind(this),
                    };
                  }
                );
              }
              var N =
                  ("undefined" != typeof window
                    ? window.cancelAnimationFrame
                    : null) || clearTimeout,
                F =
                  ("undefined" != typeof window
                    ? window.requestAnimationFrame
                    : null) ||
                  function (e) {
                    return setTimeout(e, 0);
                  };
              function I(e, t) {
                return (
                  N(e),
                  F(function () {
                    (e = null), t();
                  })
                );
              }
              var W = "metaInfo",
                z = "data-vue-meta",
                q = "data-vue-meta-server-rendered",
                B = "vmid",
                U = "template",
                J = "content";
              function V(e, t) {
                void 0 === t && (t = {}),
                  (t = i(
                    {
                      keyName: W,
                      contentKeyName: J,
                      metaTemplateKeyName: U,
                      attribute: z,
                      ssrAttribute: q,
                      tagIDKeyName: B,
                    },
                    t
                  )),
                  (e.prototype.$meta = R(t));
                var n = null;
                e.mixin({
                  beforeCreate: function () {
                    void 0 !== this.$options[t.keyName] && (this._hasMetaInfo = !0),
                      "function" == typeof this.$options[t.keyName] &&
                        (void 0 === this.$options.computed &&
                          (this.$options.computed = {}),
                        (this.$options.computed.$metaInfo =
                          this.$options[t.keyName]));
                  },
                  created: function () {
                    var e = this;
                    !this.$isServer &&
                      this.$metaInfo &&
                      this.$watch("$metaInfo", function () {
                        n = I(n, function () {
                          return e.$meta().refresh();
                        });
                      });
                  },
                  activated: function () {
                    var e = this;
                    this._hasMetaInfo &&
                      (n = I(n, function () {
                        return e.$meta().refresh();
                      }));
                  },
                  deactivated: function () {
                    var e = this;
                    this._hasMetaInfo &&
                      (n = I(n, function () {
                        return e.$meta().refresh();
                      }));
                  },
                  beforeMount: function () {
                    var e = this;
                    this._hasMetaInfo &&
                      (n = I(n, function () {
                        return e.$meta().refresh();
                      }));
                  },
                  destroyed: function () {
                    var e = this;
                    if (!this.$isServer && this._hasMetaInfo)
                      var t = setInterval(function () {
                        (e.$el && null !== e.$el.offsetParent) ||
                          (clearInterval(t),
                          e.$parent &&
                            (n = I(n, function () {
                              return e.$meta().refresh();
                            })));
                      }, 50);
                  },
                });
              }
              "undefined" != typeof window && void 0 !== window.Vue && Vue.use(V);
              return (V.version = "1.5.8"), V;
            }),
            (e.exports = n());
        }).call(t, n(11));
      },
      function (e, t, n) {
        (function (e, r) {
          var i;
          (function () {
            var s,
              a = 200,
              o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
              u = "Expected a function",
              l = "Invalid `variable` option passed into `_.template`",
              c = "__lodash_hash_undefined__",
              d = 500,
              f = "__lodash_placeholder__",
              _ = 1,
              m = 2,
              p = 4,
              h = 1,
              v = 2,
              y = 1,
              g = 2,
              b = 4,
              M = 8,
              L = 16,
              k = 32,
              w = 64,
              x = 128,
              Y = 256,
              T = 512,
              D = 30,
              j = "...",
              S = 800,
              C = 16,
              O = 1,
              E = 2,
              H = 1 / 0,
              A = 9007199254740991,
              P = 1.7976931348623157e308,
              $ = NaN,
              R = 4294967295,
              N = R - 1,
              F = R >>> 1,
              I = [
                ["ary", x],
                ["bind", y],
                ["bindKey", g],
                ["curry", M],
                ["curryRight", L],
                ["flip", T],
                ["partial", k],
                ["partialRight", w],
                ["rearg", Y],
              ],
              W = "[object Arguments]",
              z = "[object Array]",
              q = "[object AsyncFunction]",
              B = "[object Boolean]",
              U = "[object Date]",
              J = "[object DOMException]",
              V = "[object Error]",
              G = "[object Function]",
              K = "[object GeneratorFunction]",
              Z = "[object Map]",
              Q = "[object Number]",
              X = "[object Null]",
              ee = "[object Object]",
              te = "[object Proxy]",
              ne = "[object RegExp]",
              re = "[object Set]",
              ie = "[object String]",
              se = "[object Symbol]",
              ae = "[object Undefined]",
              oe = "[object WeakMap]",
              ue = "[object WeakSet]",
              le = "[object ArrayBuffer]",
              ce = "[object DataView]",
              de = "[object Float32Array]",
              fe = "[object Float64Array]",
              _e = "[object Int8Array]",
              me = "[object Int16Array]",
              pe = "[object Int32Array]",
              he = "[object Uint8Array]",
              ve = "[object Uint8ClampedArray]",
              ye = "[object Uint16Array]",
              ge = "[object Uint32Array]",
              be = /\b__p \+= '';/g,
              Me = /\b(__p \+=) '' \+/g,
              Le = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              ke = /&(?:amp|lt|gt|quot|#39);/g,
              we = /[&<>"']/g,
              xe = RegExp(ke.source),
              Ye = RegExp(we.source),
              Te = /<%-([\s\S]+?)%>/g,
              De = /<%([\s\S]+?)%>/g,
              je = /<%=([\s\S]+?)%>/g,
              Se = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              Ce = /^\w*$/,
              Oe =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              Ee = /[\\^$.*+?()[\]{}|]/g,
              He = RegExp(Ee.source),
              Ae = /^\s+/,
              Pe = /\s/,
              $e = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              Re = /\{\n\/\* \[wrapped with (.+)\] \*/,
              Ne = /,? & /,
              Fe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              Ie = /[()=,{}\[\]\/\s]/,
              We = /\\(\\)?/g,
              ze = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              qe = /\w*$/,
              Be = /^[-+]0x[0-9a-f]+$/i,
              Ue = /^0b[01]+$/i,
              Je = /^\[object .+?Constructor\]$/,
              Ve = /^0o[0-7]+$/i,
              Ge = /^(?:0|[1-9]\d*)$/,
              Ke = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              Ze = /($^)/,
              Qe = /['\n\r\u2028\u2029\\]/g,
              Xe = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
              et =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              tt = "[\\ud800-\\udfff]",
              nt = "[" + et + "]",
              rt = "[" + Xe + "]",
              it = "\\d+",
              st = "[\\u2700-\\u27bf]",
              at = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
              ot =
                "[^\\ud800-\\udfff" +
                et +
                it +
                "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
              ut = "\\ud83c[\\udffb-\\udfff]",
              lt = "[^\\ud800-\\udfff]",
              ct = "(?:\\ud83c[\\udde6-\\uddff]){2}",
              dt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
              ft = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
              _t = "(?:" + at + "|" + ot + ")",
              mt = "(?:" + ft + "|" + ot + ")",
              pt = "(?:" + rt + "|" + ut + ")" + "?",
              ht =
                "[\\ufe0e\\ufe0f]?" +
                pt +
                ("(?:\\u200d(?:" +
                  [lt, ct, dt].join("|") +
                  ")[\\ufe0e\\ufe0f]?" +
                  pt +
                  ")*"),
              vt = "(?:" + [st, ct, dt].join("|") + ")" + ht,
              yt = "(?:" + [lt + rt + "?", rt, ct, dt, tt].join("|") + ")",
              gt = RegExp("['’]", "g"),
              bt = RegExp(rt, "g"),
              Mt = RegExp(ut + "(?=" + ut + ")|" + yt + ht, "g"),
              Lt = RegExp(
                [
                  ft +
                    "?" +
                    at +
                    "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
                    [nt, ft, "$"].join("|") +
                    ")",
                  mt +
                    "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                    [nt, ft + _t, "$"].join("|") +
                    ")",
                  ft + "?" + _t + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
                  ft + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  it,
                  vt,
                ].join("|"),
                "g"
              ),
              kt = RegExp("[\\u200d\\ud800-\\udfff" + Xe + "\\ufe0e\\ufe0f]"),
              wt =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              xt = [
                "Array",
                "Buffer",
                "DataView",
                "Date",
                "Error",
                "Float32Array",
                "Float64Array",
                "Function",
                "Int8Array",
                "Int16Array",
                "Int32Array",
                "Map",
                "Math",
                "Object",
                "Promise",
                "RegExp",
                "Set",
                "String",
                "Symbol",
                "TypeError",
                "Uint8Array",
                "Uint8ClampedArray",
                "Uint16Array",
                "Uint32Array",
                "WeakMap",
                "_",
                "clearTimeout",
                "isFinite",
                "parseInt",
                "setTimeout",
              ],
              Yt = -1,
              Tt = {};
            (Tt[de] =
              Tt[fe] =
              Tt[_e] =
              Tt[me] =
              Tt[pe] =
              Tt[he] =
              Tt[ve] =
              Tt[ye] =
              Tt[ge] =
                !0),
              (Tt[W] =
                Tt[z] =
                Tt[le] =
                Tt[B] =
                Tt[ce] =
                Tt[U] =
                Tt[V] =
                Tt[G] =
                Tt[Z] =
                Tt[Q] =
                Tt[ee] =
                Tt[ne] =
                Tt[re] =
                Tt[ie] =
                Tt[oe] =
                  !1);
            var Dt = {};
            (Dt[W] =
              Dt[z] =
              Dt[le] =
              Dt[ce] =
              Dt[B] =
              Dt[U] =
              Dt[de] =
              Dt[fe] =
              Dt[_e] =
              Dt[me] =
              Dt[pe] =
              Dt[Z] =
              Dt[Q] =
              Dt[ee] =
              Dt[ne] =
              Dt[re] =
              Dt[ie] =
              Dt[se] =
              Dt[he] =
              Dt[ve] =
              Dt[ye] =
              Dt[ge] =
                !0),
              (Dt[V] = Dt[G] = Dt[oe] = !1);
            var jt = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029",
              },
              St = parseFloat,
              Ct = parseInt,
              Ot = "object" == typeof e && e && e.Object === Object && e,
              Et =
                "object" == typeof self && self && self.Object === Object && self,
              Ht = Ot || Et || Function("return this")(),
              At = "object" == typeof t && t && !t.nodeType && t,
              Pt = At && "object" == typeof r && r && !r.nodeType && r,
              $t = Pt && Pt.exports === At,
              Rt = $t && Ot.process,
              Nt = (function () {
                try {
                  var e = Pt && Pt.require && Pt.require("util").types;
                  return e || (Rt && Rt.binding && Rt.binding("util"));
                } catch (e) {}
              })(),
              Ft = Nt && Nt.isArrayBuffer,
              It = Nt && Nt.isDate,
              Wt = Nt && Nt.isMap,
              zt = Nt && Nt.isRegExp,
              qt = Nt && Nt.isSet,
              Bt = Nt && Nt.isTypedArray;
            function Ut(e, t, n) {
              switch (n.length) {
                case 0:
                  return e.call(t);
                case 1:
                  return e.call(t, n[0]);
                case 2:
                  return e.call(t, n[0], n[1]);
                case 3:
                  return e.call(t, n[0], n[1], n[2]);
              }
              return e.apply(t, n);
            }
            function Jt(e, t, n, r) {
              for (var i = -1, s = null == e ? 0 : e.length; ++i < s; ) {
                var a = e[i];
                t(r, a, n(a), e);
              }
              return r;
            }
            function Vt(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length;
                ++n < r && !1 !== t(e[n], n, e);
    
              );
              return e;
            }
            function Gt(e, t) {
              for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); );
              return e;
            }
            function Kt(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (!t(e[n], n, e)) return !1;
              return !0;
            }
            function Zt(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, i = 0, s = [];
                ++n < r;
    
              ) {
                var a = e[n];
                t(a, n, e) && (s[i++] = a);
              }
              return s;
            }
            function Qt(e, t) {
              return !!(null == e ? 0 : e.length) && ln(e, t, 0) > -1;
            }
            function Xt(e, t, n) {
              for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                if (n(t, e[r])) return !0;
              return !1;
            }
            function en(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, i = Array(r);
                ++n < r;
    
              )
                i[n] = t(e[n], n, e);
              return i;
            }
            function tn(e, t) {
              for (var n = -1, r = t.length, i = e.length; ++n < r; )
                e[i + n] = t[n];
              return e;
            }
            function nn(e, t, n, r) {
              var i = -1,
                s = null == e ? 0 : e.length;
              for (r && s && (n = e[++i]); ++i < s; ) n = t(n, e[i], i, e);
              return n;
            }
            function rn(e, t, n, r) {
              var i = null == e ? 0 : e.length;
              for (r && i && (n = e[--i]); i--; ) n = t(n, e[i], i, e);
              return n;
            }
            function sn(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e)) return !0;
              return !1;
            }
            var an = _n("length");
            function on(e, t, n) {
              var r;
              return (
                n(e, function (e, n, i) {
                  if (t(e, n, i)) return (r = n), !1;
                }),
                r
              );
            }
            function un(e, t, n, r) {
              for (var i = e.length, s = n + (r ? 1 : -1); r ? s-- : ++s < i; )
                if (t(e[s], s, e)) return s;
              return -1;
            }
            function ln(e, t, n) {
              return t == t
                ? (function (e, t, n) {
                    var r = n - 1,
                      i = e.length;
                    for (; ++r < i; ) if (e[r] === t) return r;
                    return -1;
                  })(e, t, n)
                : un(e, dn, n);
            }
            function cn(e, t, n, r) {
              for (var i = n - 1, s = e.length; ++i < s; ) if (r(e[i], t)) return i;
              return -1;
            }
            function dn(e) {
              return e != e;
            }
            function fn(e, t) {
              var n = null == e ? 0 : e.length;
              return n ? hn(e, t) / n : $;
            }
            function _n(e) {
              return function (t) {
                return null == t ? s : t[e];
              };
            }
            function mn(e) {
              return function (t) {
                return null == e ? s : e[t];
              };
            }
            function pn(e, t, n, r, i) {
              return (
                i(e, function (e, i, s) {
                  n = r ? ((r = !1), e) : t(n, e, i, s);
                }),
                n
              );
            }
            function hn(e, t) {
              for (var n, r = -1, i = e.length; ++r < i; ) {
                var a = t(e[r]);
                a !== s && (n = n === s ? a : n + a);
              }
              return n;
            }
            function vn(e, t) {
              for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
              return r;
            }
            function yn(e) {
              return e ? e.slice(0, An(e) + 1).replace(Ae, "") : e;
            }
            function gn(e) {
              return function (t) {
                return e(t);
              };
            }
            function bn(e, t) {
              return en(t, function (t) {
                return e[t];
              });
            }
            function Mn(e, t) {
              return e.has(t);
            }
            function Ln(e, t) {
              for (var n = -1, r = e.length; ++n < r && ln(t, e[n], 0) > -1; );
              return n;
            }
            function kn(e, t) {
              for (var n = e.length; n-- && ln(t, e[n], 0) > -1; );
              return n;
            }
            var wn = mn({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s",
              }),
              xn = mn({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              });
            function Yn(e) {
              return "\\" + jt[e];
            }
            function Tn(e) {
              return kt.test(e);
            }
            function Dn(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e, r) {
                  n[++t] = [r, e];
                }),
                n
              );
            }
            function jn(e, t) {
              return function (n) {
                return e(t(n));
              };
            }
            function Sn(e, t) {
              for (var n = -1, r = e.length, i = 0, s = []; ++n < r; ) {
                var a = e[n];
                (a !== t && a !== f) || ((e[n] = f), (s[i++] = n));
              }
              return s;
            }
            function Cn(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = e;
                }),
                n
              );
            }
            function On(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = [e, e];
                }),
                n
              );
            }
            function En(e) {
              return Tn(e)
                ? (function (e) {
                    var t = (Mt.lastIndex = 0);
                    for (; Mt.test(e); ) ++t;
                    return t;
                  })(e)
                : an(e);
            }
            function Hn(e) {
              return Tn(e)
                ? (function (e) {
                    return e.match(Mt) || [];
                  })(e)
                : (function (e) {
                    return e.split("");
                  })(e);
            }
            function An(e) {
              for (var t = e.length; t-- && Pe.test(e.charAt(t)); );
              return t;
            }
            var Pn = mn({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            });
            var $n = (function e(t) {
              var n,
                r = (t =
                  null == t ? Ht : $n.defaults(Ht.Object(), t, $n.pick(Ht, xt)))
                  .Array,
                i = t.Date,
                Pe = t.Error,
                Xe = t.Function,
                et = t.Math,
                tt = t.Object,
                nt = t.RegExp,
                rt = t.String,
                it = t.TypeError,
                st = r.prototype,
                at = Xe.prototype,
                ot = tt.prototype,
                ut = t["__core-js_shared__"],
                lt = at.toString,
                ct = ot.hasOwnProperty,
                dt = 0,
                ft = (n = /[^.]+$/.exec((ut && ut.keys && ut.keys.IE_PROTO) || ""))
                  ? "Symbol(src)_1." + n
                  : "",
                _t = ot.toString,
                mt = lt.call(tt),
                pt = Ht._,
                ht = nt(
                  "^" +
                    lt
                      .call(ct)
                      .replace(Ee, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                vt = $t ? t.Buffer : s,
                yt = t.Symbol,
                Mt = t.Uint8Array,
                kt = vt ? vt.allocUnsafe : s,
                jt = jn(tt.getPrototypeOf, tt),
                Ot = tt.create,
                Et = ot.propertyIsEnumerable,
                At = st.splice,
                Pt = yt ? yt.isConcatSpreadable : s,
                Rt = yt ? yt.iterator : s,
                Nt = yt ? yt.toStringTag : s,
                an = (function () {
                  try {
                    var e = Fs(tt, "defineProperty");
                    return e({}, "", {}), e;
                  } catch (e) {}
                })(),
                mn = t.clearTimeout !== Ht.clearTimeout && t.clearTimeout,
                Rn = i && i.now !== Ht.Date.now && i.now,
                Nn = t.setTimeout !== Ht.setTimeout && t.setTimeout,
                Fn = et.ceil,
                In = et.floor,
                Wn = tt.getOwnPropertySymbols,
                zn = vt ? vt.isBuffer : s,
                qn = t.isFinite,
                Bn = st.join,
                Un = jn(tt.keys, tt),
                Jn = et.max,
                Vn = et.min,
                Gn = i.now,
                Kn = t.parseInt,
                Zn = et.random,
                Qn = st.reverse,
                Xn = Fs(t, "DataView"),
                er = Fs(t, "Map"),
                tr = Fs(t, "Promise"),
                nr = Fs(t, "Set"),
                rr = Fs(t, "WeakMap"),
                ir = Fs(tt, "create"),
                sr = rr && new rr(),
                ar = {},
                or = fa(Xn),
                ur = fa(er),
                lr = fa(tr),
                cr = fa(nr),
                dr = fa(rr),
                fr = yt ? yt.prototype : s,
                _r = fr ? fr.valueOf : s,
                mr = fr ? fr.toString : s;
              function pr(e) {
                if (So(e) && !go(e) && !(e instanceof gr)) {
                  if (e instanceof yr) return e;
                  if (ct.call(e, "__wrapped__")) return _a(e);
                }
                return new yr(e);
              }
              var hr = (function () {
                function e() {}
                return function (t) {
                  if (!jo(t)) return {};
                  if (Ot) return Ot(t);
                  e.prototype = t;
                  var n = new e();
                  return (e.prototype = s), n;
                };
              })();
              function vr() {}
              function yr(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = s);
              }
              function gr(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = R),
                  (this.__views__ = []);
              }
              function br(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function Mr(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function Lr(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              function kr(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.__data__ = new Lr(); ++t < n; ) this.add(e[t]);
              }
              function wr(e) {
                var t = (this.__data__ = new Mr(e));
                this.size = t.size;
              }
              function xr(e, t) {
                var n = go(e),
                  r = !n && yo(e),
                  i = !n && !r && ko(e),
                  s = !n && !r && !i && Ro(e),
                  a = n || r || i || s,
                  o = a ? vn(e.length, rt) : [],
                  u = o.length;
                for (var l in e)
                  (!t && !ct.call(e, l)) ||
                    (a &&
                      ("length" == l ||
                        (i && ("offset" == l || "parent" == l)) ||
                        (s &&
                          ("buffer" == l ||
                            "byteLength" == l ||
                            "byteOffset" == l)) ||
                        Js(l, u))) ||
                    o.push(l);
                return o;
              }
              function Yr(e) {
                var t = e.length;
                return t ? e[ki(0, t - 1)] : s;
              }
              function Tr(e, t) {
                return la(is(e), Pr(t, 0, e.length));
              }
              function Dr(e) {
                return la(is(e));
              }
              function jr(e, t, n) {
                ((n === s || po(e[t], n)) && (n !== s || t in e)) || Hr(e, t, n);
              }
              function Sr(e, t, n) {
                var r = e[t];
                (ct.call(e, t) && po(r, n) && (n !== s || t in e)) || Hr(e, t, n);
              }
              function Cr(e, t) {
                for (var n = e.length; n--; ) if (po(e[n][0], t)) return n;
                return -1;
              }
              function Or(e, t, n, r) {
                return (
                  Ir(e, function (e, i, s) {
                    t(r, e, n(e), s);
                  }),
                  r
                );
              }
              function Er(e, t) {
                return e && ss(t, au(t), e);
              }
              function Hr(e, t, n) {
                "__proto__" == t && an
                  ? an(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0,
                    })
                  : (e[t] = n);
              }
              function Ar(e, t) {
                for (var n = -1, i = t.length, a = r(i), o = null == e; ++n < i; )
                  a[n] = o ? s : tu(e, t[n]);
                return a;
              }
              function Pr(e, t, n) {
                return (
                  e == e &&
                    (n !== s && (e = e <= n ? e : n),
                    t !== s && (e = e >= t ? e : t)),
                  e
                );
              }
              function $r(e, t, n, r, i, a) {
                var o,
                  u = t & _,
                  l = t & m,
                  c = t & p;
                if ((n && (o = i ? n(e, r, i, a) : n(e)), o !== s)) return o;
                if (!jo(e)) return e;
                var d = go(e);
                if (d) {
                  if (
                    ((o = (function (e) {
                      var t = e.length,
                        n = new e.constructor(t);
                      return (
                        t &&
                          "string" == typeof e[0] &&
                          ct.call(e, "index") &&
                          ((n.index = e.index), (n.input = e.input)),
                        n
                      );
                    })(e)),
                    !u)
                  )
                    return is(e, o);
                } else {
                  var f = zs(e),
                    h = f == G || f == K;
                  if (ko(e)) return Qi(e, u);
                  if (f == ee || f == W || (h && !i)) {
                    if (((o = l || h ? {} : Bs(e)), !u))
                      return l
                        ? (function (e, t) {
                            return ss(e, Ws(e), t);
                          })(
                            e,
                            (function (e, t) {
                              return e && ss(t, ou(t), e);
                            })(o, e)
                          )
                        : (function (e, t) {
                            return ss(e, Is(e), t);
                          })(e, Er(o, e));
                  } else {
                    if (!Dt[f]) return i ? e : {};
                    o = (function (e, t, n) {
                      var r,
                        i,
                        s,
                        a = e.constructor;
                      switch (t) {
                        case le:
                          return Xi(e);
                        case B:
                        case U:
                          return new a(+e);
                        case ce:
                          return (function (e, t) {
                            var n = t ? Xi(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength);
                          })(e, n);
                        case de:
                        case fe:
                        case _e:
                        case me:
                        case pe:
                        case he:
                        case ve:
                        case ye:
                        case ge:
                          return es(e, n);
                        case Z:
                          return new a();
                        case Q:
                        case ie:
                          return new a(e);
                        case ne:
                          return (
                            ((s = new (i = e).constructor(
                              i.source,
                              qe.exec(i)
                            )).lastIndex = i.lastIndex),
                            s
                          );
                        case re:
                          return new a();
                        case se:
                          return (r = e), _r ? tt(_r.call(r)) : {};
                      }
                    })(e, f, u);
                  }
                }
                a || (a = new wr());
                var v = a.get(e);
                if (v) return v;
                a.set(e, o),
                  Ao(e)
                    ? e.forEach(function (r) {
                        o.add($r(r, t, n, r, e, a));
                      })
                    : Co(e) &&
                      e.forEach(function (r, i) {
                        o.set(i, $r(r, t, n, i, e, a));
                      });
                var y = d ? s : (c ? (l ? Es : Os) : l ? ou : au)(e);
                return (
                  Vt(y || e, function (r, i) {
                    y && (r = e[(i = r)]), Sr(o, i, $r(r, t, n, i, e, a));
                  }),
                  o
                );
              }
              function Rr(e, t, n) {
                var r = n.length;
                if (null == e) return !r;
                for (e = tt(e); r--; ) {
                  var i = n[r],
                    a = t[i],
                    o = e[i];
                  if ((o === s && !(i in e)) || !a(o)) return !1;
                }
                return !0;
              }
              function Nr(e, t, n) {
                if ("function" != typeof e) throw new it(u);
                return sa(function () {
                  e.apply(s, n);
                }, t);
              }
              function Fr(e, t, n, r) {
                var i = -1,
                  s = Qt,
                  o = !0,
                  u = e.length,
                  l = [],
                  c = t.length;
                if (!u) return l;
                n && (t = en(t, gn(n))),
                  r
                    ? ((s = Xt), (o = !1))
                    : t.length >= a && ((s = Mn), (o = !1), (t = new kr(t)));
                e: for (; ++i < u; ) {
                  var d = e[i],
                    f = null == n ? d : n(d);
                  if (((d = r || 0 !== d ? d : 0), o && f == f)) {
                    for (var _ = c; _--; ) if (t[_] === f) continue e;
                    l.push(d);
                  } else s(t, f, r) || l.push(d);
                }
                return l;
              }
              (pr.templateSettings = {
                escape: Te,
                evaluate: De,
                interpolate: je,
                variable: "",
                imports: { _: pr },
              }),
                (pr.prototype = vr.prototype),
                (pr.prototype.constructor = pr),
                (yr.prototype = hr(vr.prototype)),
                (yr.prototype.constructor = yr),
                (gr.prototype = hr(vr.prototype)),
                (gr.prototype.constructor = gr),
                (br.prototype.clear = function () {
                  (this.__data__ = ir ? ir(null) : {}), (this.size = 0);
                }),
                (br.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (br.prototype.get = function (e) {
                  var t = this.__data__;
                  if (ir) {
                    var n = t[e];
                    return n === c ? s : n;
                  }
                  return ct.call(t, e) ? t[e] : s;
                }),
                (br.prototype.has = function (e) {
                  var t = this.__data__;
                  return ir ? t[e] !== s : ct.call(t, e);
                }),
                (br.prototype.set = function (e, t) {
                  var n = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (n[e] = ir && t === s ? c : t),
                    this
                  );
                }),
                (Mr.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (Mr.prototype.delete = function (e) {
                  var t = this.__data__,
                    n = Cr(t, e);
                  return !(
                    n < 0 ||
                    (n == t.length - 1 ? t.pop() : At.call(t, n, 1), --this.size, 0)
                  );
                }),
                (Mr.prototype.get = function (e) {
                  var t = this.__data__,
                    n = Cr(t, e);
                  return n < 0 ? s : t[n][1];
                }),
                (Mr.prototype.has = function (e) {
                  return Cr(this.__data__, e) > -1;
                }),
                (Mr.prototype.set = function (e, t) {
                  var n = this.__data__,
                    r = Cr(n, e);
                  return (
                    r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
                  );
                }),
                (Lr.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new br(),
                      map: new (er || Mr)(),
                      string: new br(),
                    });
                }),
                (Lr.prototype.delete = function (e) {
                  var t = Rs(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                (Lr.prototype.get = function (e) {
                  return Rs(this, e).get(e);
                }),
                (Lr.prototype.has = function (e) {
                  return Rs(this, e).has(e);
                }),
                (Lr.prototype.set = function (e, t) {
                  var n = Rs(this, e),
                    r = n.size;
                  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
                }),
                (kr.prototype.add = kr.prototype.push =
                  function (e) {
                    return this.__data__.set(e, c), this;
                  }),
                (kr.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (wr.prototype.clear = function () {
                  (this.__data__ = new Mr()), (this.size = 0);
                }),
                (wr.prototype.delete = function (e) {
                  var t = this.__data__,
                    n = t.delete(e);
                  return (this.size = t.size), n;
                }),
                (wr.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (wr.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (wr.prototype.set = function (e, t) {
                  var n = this.__data__;
                  if (n instanceof Mr) {
                    var r = n.__data__;
                    if (!er || r.length < a - 1)
                      return r.push([e, t]), (this.size = ++n.size), this;
                    n = this.__data__ = new Lr(r);
                  }
                  return n.set(e, t), (this.size = n.size), this;
                });
              var Ir = us(Gr),
                Wr = us(Kr, !0);
              function zr(e, t) {
                var n = !0;
                return (
                  Ir(e, function (e, r, i) {
                    return (n = !!t(e, r, i));
                  }),
                  n
                );
              }
              function qr(e, t, n) {
                for (var r = -1, i = e.length; ++r < i; ) {
                  var a = e[r],
                    o = t(a);
                  if (null != o && (u === s ? o == o && !$o(o) : n(o, u)))
                    var u = o,
                      l = a;
                }
                return l;
              }
              function Br(e, t) {
                var n = [];
                return (
                  Ir(e, function (e, r, i) {
                    t(e, r, i) && n.push(e);
                  }),
                  n
                );
              }
              function Ur(e, t, n, r, i) {
                var s = -1,
                  a = e.length;
                for (n || (n = Us), i || (i = []); ++s < a; ) {
                  var o = e[s];
                  t > 0 && n(o)
                    ? t > 1
                      ? Ur(o, t - 1, n, r, i)
                      : tn(i, o)
                    : r || (i[i.length] = o);
                }
                return i;
              }
              var Jr = ls(),
                Vr = ls(!0);
              function Gr(e, t) {
                return e && Jr(e, t, au);
              }
              function Kr(e, t) {
                return e && Vr(e, t, au);
              }
              function Zr(e, t) {
                return Zt(t, function (t) {
                  return Yo(e[t]);
                });
              }
              function Qr(e, t) {
                for (var n = 0, r = (t = Vi(t, e)).length; null != e && n < r; )
                  e = e[da(t[n++])];
                return n && n == r ? e : s;
              }
              function Xr(e, t, n) {
                var r = t(e);
                return go(e) ? r : tn(r, n(e));
              }
              function ei(e) {
                return null == e
                  ? e === s
                    ? ae
                    : X
                  : Nt && Nt in tt(e)
                  ? (function (e) {
                      var t = ct.call(e, Nt),
                        n = e[Nt];
                      try {
                        e[Nt] = s;
                        var r = !0;
                      } catch (e) {}
                      var i = _t.call(e);
                      return r && (t ? (e[Nt] = n) : delete e[Nt]), i;
                    })(e)
                  : (function (e) {
                      return _t.call(e);
                    })(e);
              }
              function ti(e, t) {
                return e > t;
              }
              function ni(e, t) {
                return null != e && ct.call(e, t);
              }
              function ri(e, t) {
                return null != e && t in tt(e);
              }
              function ii(e, t, n) {
                for (
                  var i = n ? Xt : Qt,
                    a = e[0].length,
                    o = e.length,
                    u = o,
                    l = r(o),
                    c = 1 / 0,
                    d = [];
                  u--;
    
                ) {
                  var f = e[u];
                  u && t && (f = en(f, gn(t))),
                    (c = Vn(f.length, c)),
                    (l[u] =
                      !n && (t || (a >= 120 && f.length >= 120))
                        ? new kr(u && f)
                        : s);
                }
                f = e[0];
                var _ = -1,
                  m = l[0];
                e: for (; ++_ < a && d.length < c; ) {
                  var p = f[_],
                    h = t ? t(p) : p;
                  if (((p = n || 0 !== p ? p : 0), !(m ? Mn(m, h) : i(d, h, n)))) {
                    for (u = o; --u; ) {
                      var v = l[u];
                      if (!(v ? Mn(v, h) : i(e[u], h, n))) continue e;
                    }
                    m && m.push(h), d.push(p);
                  }
                }
                return d;
              }
              function si(e, t, n) {
                var r = null == (e = na(e, (t = Vi(t, e)))) ? e : e[da(wa(t))];
                return null == r ? s : Ut(r, e, n);
              }
              function ai(e) {
                return So(e) && ei(e) == W;
              }
              function oi(e, t, n, r, i) {
                return (
                  e === t ||
                  (null == e || null == t || (!So(e) && !So(t))
                    ? e != e && t != t
                    : (function (e, t, n, r, i, a) {
                        var o = go(e),
                          u = go(t),
                          l = o ? z : zs(e),
                          c = u ? z : zs(t),
                          d = (l = l == W ? ee : l) == ee,
                          f = (c = c == W ? ee : c) == ee,
                          _ = l == c;
                        if (_ && ko(e)) {
                          if (!ko(t)) return !1;
                          (o = !0), (d = !1);
                        }
                        if (_ && !d)
                          return (
                            a || (a = new wr()),
                            o || Ro(e)
                              ? Ss(e, t, n, r, i, a)
                              : (function (e, t, n, r, i, s, a) {
                                  switch (n) {
                                    case ce:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        return !1;
                                      (e = e.buffer), (t = t.buffer);
                                    case le:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !s(new Mt(e), new Mt(t))
                                      );
                                    case B:
                                    case U:
                                    case Q:
                                      return po(+e, +t);
                                    case V:
                                      return (
                                        e.name == t.name && e.message == t.message
                                      );
                                    case ne:
                                    case ie:
                                      return e == t + "";
                                    case Z:
                                      var o = Dn;
                                    case re:
                                      var u = r & h;
                                      if ((o || (o = Cn), e.size != t.size && !u))
                                        return !1;
                                      var l = a.get(e);
                                      if (l) return l == t;
                                      (r |= v), a.set(e, t);
                                      var c = Ss(o(e), o(t), r, i, s, a);
                                      return a.delete(e), c;
                                    case se:
                                      if (_r) return _r.call(e) == _r.call(t);
                                  }
                                  return !1;
                                })(e, t, l, n, r, i, a)
                          );
                        if (!(n & h)) {
                          var m = d && ct.call(e, "__wrapped__"),
                            p = f && ct.call(t, "__wrapped__");
                          if (m || p) {
                            var y = m ? e.value() : e,
                              g = p ? t.value() : t;
                            return a || (a = new wr()), i(y, g, n, r, a);
                          }
                        }
                        return (
                          !!_ &&
                          (a || (a = new wr()),
                          (function (e, t, n, r, i, a) {
                            var o = n & h,
                              u = Os(e),
                              l = u.length,
                              c = Os(t).length;
                            if (l != c && !o) return !1;
                            for (var d = l; d--; ) {
                              var f = u[d];
                              if (!(o ? f in t : ct.call(t, f))) return !1;
                            }
                            var _ = a.get(e),
                              m = a.get(t);
                            if (_ && m) return _ == t && m == e;
                            var p = !0;
                            a.set(e, t), a.set(t, e);
                            for (var v = o; ++d < l; ) {
                              f = u[d];
                              var y = e[f],
                                g = t[f];
                              if (r)
                                var b = o
                                  ? r(g, y, f, t, e, a)
                                  : r(y, g, f, e, t, a);
                              if (!(b === s ? y === g || i(y, g, n, r, a) : b)) {
                                p = !1;
                                break;
                              }
                              v || (v = "constructor" == f);
                            }
                            if (p && !v) {
                              var M = e.constructor,
                                L = t.constructor;
                              M != L &&
                                "constructor" in e &&
                                "constructor" in t &&
                                !(
                                  "function" == typeof M &&
                                  M instanceof M &&
                                  "function" == typeof L &&
                                  L instanceof L
                                ) &&
                                (p = !1);
                            }
                            return a.delete(e), a.delete(t), p;
                          })(e, t, n, r, i, a))
                        );
                      })(e, t, n, r, oi, i))
                );
              }
              function ui(e, t, n, r) {
                var i = n.length,
                  a = i,
                  o = !r;
                if (null == e) return !a;
                for (e = tt(e); i--; ) {
                  var u = n[i];
                  if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
                }
                for (; ++i < a; ) {
                  var l = (u = n[i])[0],
                    c = e[l],
                    d = u[1];
                  if (o && u[2]) {
                    if (c === s && !(l in e)) return !1;
                  } else {
                    var f = new wr();
                    if (r) var _ = r(c, d, l, e, t, f);
                    if (!(_ === s ? oi(d, c, h | v, r, f) : _)) return !1;
                  }
                }
                return !0;
              }
              function li(e) {
                return (
                  !(!jo(e) || (ft && ft in e)) && (Yo(e) ? ht : Je).test(fa(e))
                );
              }
              function ci(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? Ou
                  : "object" == typeof e
                  ? go(e)
                    ? hi(e[0], e[1])
                    : pi(e)
                  : Iu(e);
              }
              function di(e) {
                if (!Qs(e)) return Un(e);
                var t = [];
                for (var n in tt(e))
                  ct.call(e, n) && "constructor" != n && t.push(n);
                return t;
              }
              function fi(e) {
                if (!jo(e))
                  return (function (e) {
                    var t = [];
                    if (null != e) for (var n in tt(e)) t.push(n);
                    return t;
                  })(e);
                var t = Qs(e),
                  n = [];
                for (var r in e)
                  ("constructor" != r || (!t && ct.call(e, r))) && n.push(r);
                return n;
              }
              function _i(e, t) {
                return e < t;
              }
              function mi(e, t) {
                var n = -1,
                  i = Mo(e) ? r(e.length) : [];
                return (
                  Ir(e, function (e, r, s) {
                    i[++n] = t(e, r, s);
                  }),
                  i
                );
              }
              function pi(e) {
                var t = Ns(e);
                return 1 == t.length && t[0][2]
                  ? ea(t[0][0], t[0][1])
                  : function (n) {
                      return n === e || ui(n, e, t);
                    };
              }
              function hi(e, t) {
                return Gs(e) && Xs(t)
                  ? ea(da(e), t)
                  : function (n) {
                      var r = tu(n, e);
                      return r === s && r === t ? nu(n, e) : oi(t, r, h | v);
                    };
              }
              function vi(e, t, n, r, i) {
                e !== t &&
                  Jr(
                    t,
                    function (a, o) {
                      if ((i || (i = new wr()), jo(a)))
                        !(function (e, t, n, r, i, a, o) {
                          var u = ra(e, n),
                            l = ra(t, n),
                            c = o.get(l);
                          if (c) jr(e, n, c);
                          else {
                            var d = a ? a(u, l, n + "", e, t, o) : s,
                              f = d === s;
                            if (f) {
                              var _ = go(l),
                                m = !_ && ko(l),
                                p = !_ && !m && Ro(l);
                              (d = l),
                                _ || m || p
                                  ? go(u)
                                    ? (d = u)
                                    : Lo(u)
                                    ? (d = is(u))
                                    : m
                                    ? ((f = !1), (d = Qi(l, !0)))
                                    : p
                                    ? ((f = !1), (d = es(l, !0)))
                                    : (d = [])
                                  : Eo(l) || yo(l)
                                  ? ((d = u),
                                    yo(u)
                                      ? (d = Uo(u))
                                      : (jo(u) && !Yo(u)) || (d = Bs(l)))
                                  : (f = !1);
                            }
                            f && (o.set(l, d), i(d, l, r, a, o), o.delete(l)),
                              jr(e, n, d);
                          }
                        })(e, t, o, n, vi, r, i);
                      else {
                        var u = r ? r(ra(e, o), a, o + "", e, t, i) : s;
                        u === s && (u = a), jr(e, o, u);
                      }
                    },
                    ou
                  );
              }
              function yi(e, t) {
                var n = e.length;
                if (n) return Js((t += t < 0 ? n : 0), n) ? e[t] : s;
              }
              function gi(e, t, n) {
                var r = -1;
                return (
                  (t = en(
                    (t = t.length
                      ? en(t, function (e) {
                          return go(e)
                            ? function (t) {
                                return Qr(t, 1 === e.length ? e[0] : e);
                              }
                            : e;
                        })
                      : [Ou]),
                    gn($s())
                  )),
                  (function (e, t) {
                    var n = e.length;
                    for (e.sort(t); n--; ) e[n] = e[n].value;
                    return e;
                  })(
                    mi(e, function (e, n, i) {
                      return {
                        criteria: en(t, function (t) {
                          return t(e);
                        }),
                        index: ++r,
                        value: e,
                      };
                    }),
                    function (e, t) {
                      return (function (e, t, n) {
                        for (
                          var r = -1,
                            i = e.criteria,
                            s = t.criteria,
                            a = i.length,
                            o = n.length;
                          ++r < a;
    
                        ) {
                          var u = ts(i[r], s[r]);
                          if (u) {
                            if (r >= o) return u;
                            var l = n[r];
                            return u * ("desc" == l ? -1 : 1);
                          }
                        }
                        return e.index - t.index;
                      })(e, t, n);
                    }
                  )
                );
              }
              function bi(e, t, n) {
                for (var r = -1, i = t.length, s = {}; ++r < i; ) {
                  var a = t[r],
                    o = Qr(e, a);
                  n(o, a) && Di(s, Vi(a, e), o);
                }
                return s;
              }
              function Mi(e, t, n, r) {
                var i = r ? cn : ln,
                  s = -1,
                  a = t.length,
                  o = e;
                for (e === t && (t = is(t)), n && (o = en(e, gn(n))); ++s < a; )
                  for (
                    var u = 0, l = t[s], c = n ? n(l) : l;
                    (u = i(o, c, u, r)) > -1;
    
                  )
                    o !== e && At.call(o, u, 1), At.call(e, u, 1);
                return e;
              }
              function Li(e, t) {
                for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                  var i = t[n];
                  if (n == r || i !== s) {
                    var s = i;
                    Js(i) ? At.call(e, i, 1) : Fi(e, i);
                  }
                }
                return e;
              }
              function ki(e, t) {
                return e + In(Zn() * (t - e + 1));
              }
              function wi(e, t) {
                var n = "";
                if (!e || t < 1 || t > A) return n;
                do {
                  t % 2 && (n += e), (t = In(t / 2)) && (e += e);
                } while (t);
                return n;
              }
              function xi(e, t) {
                return aa(ta(e, t, Ou), e + "");
              }
              function Yi(e) {
                return Yr(pu(e));
              }
              function Ti(e, t) {
                var n = pu(e);
                return la(n, Pr(t, 0, n.length));
              }
              function Di(e, t, n, r) {
                if (!jo(e)) return e;
                for (
                  var i = -1, a = (t = Vi(t, e)).length, o = a - 1, u = e;
                  null != u && ++i < a;
    
                ) {
                  var l = da(t[i]),
                    c = n;
                  if ("__proto__" === l || "constructor" === l || "prototype" === l)
                    return e;
                  if (i != o) {
                    var d = u[l];
                    (c = r ? r(d, l, u) : s) === s &&
                      (c = jo(d) ? d : Js(t[i + 1]) ? [] : {});
                  }
                  Sr(u, l, c), (u = u[l]);
                }
                return e;
              }
              var ji = sr
                  ? function (e, t) {
                      return sr.set(e, t), e;
                    }
                  : Ou,
                Si = an
                  ? function (e, t) {
                      return an(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: ju(t),
                        writable: !0,
                      });
                    }
                  : Ou;
              function Ci(e) {
                return la(pu(e));
              }
              function Oi(e, t, n) {
                var i = -1,
                  s = e.length;
                t < 0 && (t = -t > s ? 0 : s + t),
                  (n = n > s ? s : n) < 0 && (n += s),
                  (s = t > n ? 0 : (n - t) >>> 0),
                  (t >>>= 0);
                for (var a = r(s); ++i < s; ) a[i] = e[i + t];
                return a;
              }
              function Ei(e, t) {
                var n;
                return (
                  Ir(e, function (e, r, i) {
                    return !(n = t(e, r, i));
                  }),
                  !!n
                );
              }
              function Hi(e, t, n) {
                var r = 0,
                  i = null == e ? r : e.length;
                if ("number" == typeof t && t == t && i <= F) {
                  for (; r < i; ) {
                    var s = (r + i) >>> 1,
                      a = e[s];
                    null !== a && !$o(a) && (n ? a <= t : a < t)
                      ? (r = s + 1)
                      : (i = s);
                  }
                  return i;
                }
                return Ai(e, t, Ou, n);
              }
              function Ai(e, t, n, r) {
                var i = 0,
                  a = null == e ? 0 : e.length;
                if (0 === a) return 0;
                for (
                  var o = (t = n(t)) != t, u = null === t, l = $o(t), c = t === s;
                  i < a;
    
                ) {
                  var d = In((i + a) / 2),
                    f = n(e[d]),
                    _ = f !== s,
                    m = null === f,
                    p = f == f,
                    h = $o(f);
                  if (o) var v = r || p;
                  else
                    v = c
                      ? p && (r || _)
                      : u
                      ? p && _ && (r || !m)
                      : l
                      ? p && _ && !m && (r || !h)
                      : !m && !h && (r ? f <= t : f < t);
                  v ? (i = d + 1) : (a = d);
                }
                return Vn(a, N);
              }
              function Pi(e, t) {
                for (var n = -1, r = e.length, i = 0, s = []; ++n < r; ) {
                  var a = e[n],
                    o = t ? t(a) : a;
                  if (!n || !po(o, u)) {
                    var u = o;
                    s[i++] = 0 === a ? 0 : a;
                  }
                }
                return s;
              }
              function $i(e) {
                return "number" == typeof e ? e : $o(e) ? $ : +e;
              }
              function Ri(e) {
                if ("string" == typeof e) return e;
                if (go(e)) return en(e, Ri) + "";
                if ($o(e)) return mr ? mr.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -H ? "-0" : t;
              }
              function Ni(e, t, n) {
                var r = -1,
                  i = Qt,
                  s = e.length,
                  o = !0,
                  u = [],
                  l = u;
                if (n) (o = !1), (i = Xt);
                else if (s >= a) {
                  var c = t ? null : ws(e);
                  if (c) return Cn(c);
                  (o = !1), (i = Mn), (l = new kr());
                } else l = t ? [] : u;
                e: for (; ++r < s; ) {
                  var d = e[r],
                    f = t ? t(d) : d;
                  if (((d = n || 0 !== d ? d : 0), o && f == f)) {
                    for (var _ = l.length; _--; ) if (l[_] === f) continue e;
                    t && l.push(f), u.push(d);
                  } else i(l, f, n) || (l !== u && l.push(f), u.push(d));
                }
                return u;
              }
              function Fi(e, t) {
                return null == (e = na(e, (t = Vi(t, e)))) || delete e[da(wa(t))];
              }
              function Ii(e, t, n, r) {
                return Di(e, t, n(Qr(e, t)), r);
              }
              function Wi(e, t, n, r) {
                for (
                  var i = e.length, s = r ? i : -1;
                  (r ? s-- : ++s < i) && t(e[s], s, e);
    
                );
                return n
                  ? Oi(e, r ? 0 : s, r ? s + 1 : i)
                  : Oi(e, r ? s + 1 : 0, r ? i : s);
              }
              function zi(e, t) {
                var n = e;
                return (
                  n instanceof gr && (n = n.value()),
                  nn(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, tn([e], t.args));
                    },
                    n
                  )
                );
              }
              function qi(e, t, n) {
                var i = e.length;
                if (i < 2) return i ? Ni(e[0]) : [];
                for (var s = -1, a = r(i); ++s < i; )
                  for (var o = e[s], u = -1; ++u < i; )
                    u != s && (a[s] = Fr(a[s] || o, e[u], t, n));
                return Ni(Ur(a, 1), t, n);
              }
              function Bi(e, t, n) {
                for (var r = -1, i = e.length, a = t.length, o = {}; ++r < i; ) {
                  var u = r < a ? t[r] : s;
                  n(o, e[r], u);
                }
                return o;
              }
              function Ui(e) {
                return Lo(e) ? e : [];
              }
              function Ji(e) {
                return "function" == typeof e ? e : Ou;
              }
              function Vi(e, t) {
                return go(e) ? e : Gs(e, t) ? [e] : ca(Jo(e));
              }
              var Gi = xi;
              function Ki(e, t, n) {
                var r = e.length;
                return (n = n === s ? r : n), !t && n >= r ? e : Oi(e, t, n);
              }
              var Zi =
                mn ||
                function (e) {
                  return Ht.clearTimeout(e);
                };
              function Qi(e, t) {
                if (t) return e.slice();
                var n = e.length,
                  r = kt ? kt(n) : new e.constructor(n);
                return e.copy(r), r;
              }
              function Xi(e) {
                var t = new e.constructor(e.byteLength);
                return new Mt(t).set(new Mt(e)), t;
              }
              function es(e, t) {
                var n = t ? Xi(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length);
              }
              function ts(e, t) {
                if (e !== t) {
                  var n = e !== s,
                    r = null === e,
                    i = e == e,
                    a = $o(e),
                    o = t !== s,
                    u = null === t,
                    l = t == t,
                    c = $o(t);
                  if (
                    (!u && !c && !a && e > t) ||
                    (a && o && l && !u && !c) ||
                    (r && o && l) ||
                    (!n && l) ||
                    !i
                  )
                    return 1;
                  if (
                    (!r && !a && !c && e < t) ||
                    (c && n && i && !r && !a) ||
                    (u && n && i) ||
                    (!o && i) ||
                    !l
                  )
                    return -1;
                }
                return 0;
              }
              function ns(e, t, n, i) {
                for (
                  var s = -1,
                    a = e.length,
                    o = n.length,
                    u = -1,
                    l = t.length,
                    c = Jn(a - o, 0),
                    d = r(l + c),
                    f = !i;
                  ++u < l;
    
                )
                  d[u] = t[u];
                for (; ++s < o; ) (f || s < a) && (d[n[s]] = e[s]);
                for (; c--; ) d[u++] = e[s++];
                return d;
              }
              function rs(e, t, n, i) {
                for (
                  var s = -1,
                    a = e.length,
                    o = -1,
                    u = n.length,
                    l = -1,
                    c = t.length,
                    d = Jn(a - u, 0),
                    f = r(d + c),
                    _ = !i;
                  ++s < d;
    
                )
                  f[s] = e[s];
                for (var m = s; ++l < c; ) f[m + l] = t[l];
                for (; ++o < u; ) (_ || s < a) && (f[m + n[o]] = e[s++]);
                return f;
              }
              function is(e, t) {
                var n = -1,
                  i = e.length;
                for (t || (t = r(i)); ++n < i; ) t[n] = e[n];
                return t;
              }
              function ss(e, t, n, r) {
                var i = !n;
                n || (n = {});
                for (var a = -1, o = t.length; ++a < o; ) {
                  var u = t[a],
                    l = r ? r(n[u], e[u], u, n, e) : s;
                  l === s && (l = e[u]), i ? Hr(n, u, l) : Sr(n, u, l);
                }
                return n;
              }
              function as(e, t) {
                return function (n, r) {
                  var i = go(n) ? Jt : Or,
                    s = t ? t() : {};
                  return i(n, e, $s(r, 2), s);
                };
              }
              function os(e) {
                return xi(function (t, n) {
                  var r = -1,
                    i = n.length,
                    a = i > 1 ? n[i - 1] : s,
                    o = i > 2 ? n[2] : s;
                  for (
                    a = e.length > 3 && "function" == typeof a ? (i--, a) : s,
                      o && Vs(n[0], n[1], o) && ((a = i < 3 ? s : a), (i = 1)),
                      t = tt(t);
                    ++r < i;
    
                  ) {
                    var u = n[r];
                    u && e(t, u, r, a);
                  }
                  return t;
                });
              }
              function us(e, t) {
                return function (n, r) {
                  if (null == n) return n;
                  if (!Mo(n)) return e(n, r);
                  for (
                    var i = n.length, s = t ? i : -1, a = tt(n);
                    (t ? s-- : ++s < i) && !1 !== r(a[s], s, a);
    
                  );
                  return n;
                };
              }
              function ls(e) {
                return function (t, n, r) {
                  for (var i = -1, s = tt(t), a = r(t), o = a.length; o--; ) {
                    var u = a[e ? o : ++i];
                    if (!1 === n(s[u], u, s)) break;
                  }
                  return t;
                };
              }
              function cs(e) {
                return function (t) {
                  var n = Tn((t = Jo(t))) ? Hn(t) : s,
                    r = n ? n[0] : t.charAt(0),
                    i = n ? Ki(n, 1).join("") : t.slice(1);
                  return r[e]() + i;
                };
              }
              function ds(e) {
                return function (t) {
                  return nn(Yu(yu(t).replace(gt, "")), e, "");
                };
              }
              function fs(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var n = hr(e.prototype),
                    r = e.apply(n, t);
                  return jo(r) ? r : n;
                };
              }
              function _s(e) {
                return function (t, n, r) {
                  var i = tt(t);
                  if (!Mo(t)) {
                    var a = $s(n, 3);
                    (t = au(t)),
                      (n = function (e) {
                        return a(i[e], e, i);
                      });
                  }
                  var o = e(t, n, r);
                  return o > -1 ? i[a ? t[o] : o] : s;
                };
              }
              function ms(e) {
                return Cs(function (t) {
                  var n = t.length,
                    r = n,
                    i = yr.prototype.thru;
                  for (e && t.reverse(); r--; ) {
                    var a = t[r];
                    if ("function" != typeof a) throw new it(u);
                    if (i && !o && "wrapper" == As(a)) var o = new yr([], !0);
                  }
                  for (r = o ? r : n; ++r < n; ) {
                    var l = As((a = t[r])),
                      c = "wrapper" == l ? Hs(a) : s;
                    o =
                      c &&
                      Ks(c[0]) &&
                      c[1] == (x | M | k | Y) &&
                      !c[4].length &&
                      1 == c[9]
                        ? o[As(c[0])].apply(o, c[3])
                        : 1 == a.length && Ks(a)
                        ? o[l]()
                        : o.thru(a);
                  }
                  return function () {
                    var e = arguments,
                      r = e[0];
                    if (o && 1 == e.length && go(r)) return o.plant(r).value();
                    for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n; )
                      s = t[i].call(this, s);
                    return s;
                  };
                });
              }
              function ps(e, t, n, i, a, o, u, l, c, d) {
                var f = t & x,
                  _ = t & y,
                  m = t & g,
                  p = t & (M | L),
                  h = t & T,
                  v = m ? s : fs(e);
                return function y() {
                  for (var g = arguments.length, b = r(g), M = g; M--; )
                    b[M] = arguments[M];
                  if (p)
                    var L = Ps(y),
                      k = (function (e, t) {
                        for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
                        return r;
                      })(b, L);
                  if (
                    (i && (b = ns(b, i, a, p)),
                    o && (b = rs(b, o, u, p)),
                    (g -= k),
                    p && g < d)
                  ) {
                    var w = Sn(b, L);
                    return Ls(e, t, ps, y.placeholder, n, b, w, l, c, d - g);
                  }
                  var x = _ ? n : this,
                    Y = m ? x[e] : e;
                  return (
                    (g = b.length),
                    l
                      ? (b = (function (e, t) {
                          for (
                            var n = e.length, r = Vn(t.length, n), i = is(e);
                            r--;
    
                          ) {
                            var a = t[r];
                            e[r] = Js(a, n) ? i[a] : s;
                          }
                          return e;
                        })(b, l))
                      : h && g > 1 && b.reverse(),
                    f && c < g && (b.length = c),
                    this && this !== Ht && this instanceof y && (Y = v || fs(Y)),
                    Y.apply(x, b)
                  );
                };
              }
              function hs(e, t) {
                return function (n, r) {
                  return (function (e, t, n, r) {
                    return (
                      Gr(e, function (e, i, s) {
                        t(r, n(e), i, s);
                      }),
                      r
                    );
                  })(n, e, t(r), {});
                };
              }
              function vs(e, t) {
                return function (n, r) {
                  var i;
                  if (n === s && r === s) return t;
                  if ((n !== s && (i = n), r !== s)) {
                    if (i === s) return r;
                    "string" == typeof n || "string" == typeof r
                      ? ((n = Ri(n)), (r = Ri(r)))
                      : ((n = $i(n)), (r = $i(r))),
                      (i = e(n, r));
                  }
                  return i;
                };
              }
              function ys(e) {
                return Cs(function (t) {
                  return (
                    (t = en(t, gn($s()))),
                    xi(function (n) {
                      var r = this;
                      return e(t, function (e) {
                        return Ut(e, r, n);
                      });
                    })
                  );
                });
              }
              function gs(e, t) {
                var n = (t = t === s ? " " : Ri(t)).length;
                if (n < 2) return n ? wi(t, e) : t;
                var r = wi(t, Fn(e / En(t)));
                return Tn(t) ? Ki(Hn(r), 0, e).join("") : r.slice(0, e);
              }
              function bs(e) {
                return function (t, n, i) {
                  return (
                    i && "number" != typeof i && Vs(t, n, i) && (n = i = s),
                    (t = Wo(t)),
                    n === s ? ((n = t), (t = 0)) : (n = Wo(n)),
                    (function (e, t, n, i) {
                      for (
                        var s = -1, a = Jn(Fn((t - e) / (n || 1)), 0), o = r(a);
                        a--;
    
                      )
                        (o[i ? a : ++s] = e), (e += n);
                      return o;
                    })(t, n, (i = i === s ? (t < n ? 1 : -1) : Wo(i)), e)
                  );
                };
              }
              function Ms(e) {
                return function (t, n) {
                  return (
                    ("string" == typeof t && "string" == typeof n) ||
                      ((t = Bo(t)), (n = Bo(n))),
                    e(t, n)
                  );
                };
              }
              function Ls(e, t, n, r, i, a, o, u, l, c) {
                var d = t & M;
                (t |= d ? k : w), (t &= ~(d ? w : k)) & b || (t &= ~(y | g));
                var f = [
                    e,
                    t,
                    i,
                    d ? a : s,
                    d ? o : s,
                    d ? s : a,
                    d ? s : o,
                    u,
                    l,
                    c,
                  ],
                  _ = n.apply(s, f);
                return Ks(e) && ia(_, f), (_.placeholder = r), oa(_, e, t);
              }
              function ks(e) {
                var t = et[e];
                return function (e, n) {
                  if (
                    ((e = Bo(e)), (n = null == n ? 0 : Vn(zo(n), 292)) && qn(e))
                  ) {
                    var r = (Jo(e) + "e").split("e");
                    return +(
                      (r = (Jo(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] +
                      "e" +
                      (+r[1] - n)
                    );
                  }
                  return t(e);
                };
              }
              var ws =
                nr && 1 / Cn(new nr([, -0]))[1] == H
                  ? function (e) {
                      return new nr(e);
                    }
                  : $u;
              function xs(e) {
                return function (t) {
                  var n = zs(t);
                  return n == Z
                    ? Dn(t)
                    : n == re
                    ? On(t)
                    : (function (e, t) {
                        return en(t, function (t) {
                          return [t, e[t]];
                        });
                      })(t, e(t));
                };
              }
              function Ys(e, t, n, i, a, o, l, c) {
                var d = t & g;
                if (!d && "function" != typeof e) throw new it(u);
                var _ = i ? i.length : 0;
                if (
                  (_ || ((t &= ~(k | w)), (i = a = s)),
                  (l = l === s ? l : Jn(zo(l), 0)),
                  (c = c === s ? c : zo(c)),
                  (_ -= a ? a.length : 0),
                  t & w)
                ) {
                  var m = i,
                    p = a;
                  i = a = s;
                }
                var h = d ? s : Hs(e),
                  v = [e, t, n, i, a, m, p, o, l, c];
                if (
                  (h &&
                    (function (e, t) {
                      var n = e[1],
                        r = t[1],
                        i = n | r,
                        s = i < (y | g | x),
                        a =
                          (r == x && n == M) ||
                          (r == x && n == Y && e[7].length <= t[8]) ||
                          (r == (x | Y) && t[7].length <= t[8] && n == M);
                      if (!s && !a) return e;
                      r & y && ((e[2] = t[2]), (i |= n & y ? 0 : b));
                      var o = t[3];
                      if (o) {
                        var u = e[3];
                        (e[3] = u ? ns(u, o, t[4]) : o),
                          (e[4] = u ? Sn(e[3], f) : t[4]);
                      }
                      (o = t[5]) &&
                        ((u = e[5]),
                        (e[5] = u ? rs(u, o, t[6]) : o),
                        (e[6] = u ? Sn(e[5], f) : t[6])),
                        (o = t[7]) && (e[7] = o),
                        r & x && (e[8] = null == e[8] ? t[8] : Vn(e[8], t[8])),
                        null == e[9] && (e[9] = t[9]),
                        (e[0] = t[0]),
                        (e[1] = i);
                    })(v, h),
                  (e = v[0]),
                  (t = v[1]),
                  (n = v[2]),
                  (i = v[3]),
                  (a = v[4]),
                  !(c = v[9] = v[9] === s ? (d ? 0 : e.length) : Jn(v[9] - _, 0)) &&
                    t & (M | L) &&
                    (t &= ~(M | L)),
                  t && t != y)
                )
                  T =
                    t == M || t == L
                      ? (function (e, t, n) {
                          var i = fs(e);
                          return function a() {
                            for (
                              var o = arguments.length, u = r(o), l = o, c = Ps(a);
                              l--;
    
                            )
                              u[l] = arguments[l];
                            var d =
                              o < 3 && u[0] !== c && u[o - 1] !== c ? [] : Sn(u, c);
                            return (o -= d.length) < n
                              ? Ls(e, t, ps, a.placeholder, s, u, d, s, s, n - o)
                              : Ut(
                                  this && this !== Ht && this instanceof a ? i : e,
                                  this,
                                  u
                                );
                          };
                        })(e, t, c)
                      : (t != k && t != (y | k)) || a.length
                      ? ps.apply(s, v)
                      : (function (e, t, n, i) {
                          var s = t & y,
                            a = fs(e);
                          return function t() {
                            for (
                              var o = -1,
                                u = arguments.length,
                                l = -1,
                                c = i.length,
                                d = r(c + u),
                                f =
                                  this && this !== Ht && this instanceof t ? a : e;
                              ++l < c;
    
                            )
                              d[l] = i[l];
                            for (; u--; ) d[l++] = arguments[++o];
                            return Ut(f, s ? n : this, d);
                          };
                        })(e, t, n, i);
                else
                  var T = (function (e, t, n) {
                    var r = t & y,
                      i = fs(e);
                    return function t() {
                      return (
                        this && this !== Ht && this instanceof t ? i : e
                      ).apply(r ? n : this, arguments);
                    };
                  })(e, t, n);
                return oa((h ? ji : ia)(T, v), e, t);
              }
              function Ts(e, t, n, r) {
                return e === s || (po(e, ot[n]) && !ct.call(r, n)) ? t : e;
              }
              function Ds(e, t, n, r, i, a) {
                return (
                  jo(e) && jo(t) && (a.set(t, e), vi(e, t, s, Ds, a), a.delete(t)),
                  e
                );
              }
              function js(e) {
                return Eo(e) ? s : e;
              }
              function Ss(e, t, n, r, i, a) {
                var o = n & h,
                  u = e.length,
                  l = t.length;
                if (u != l && !(o && l > u)) return !1;
                var c = a.get(e),
                  d = a.get(t);
                if (c && d) return c == t && d == e;
                var f = -1,
                  _ = !0,
                  m = n & v ? new kr() : s;
                for (a.set(e, t), a.set(t, e); ++f < u; ) {
                  var p = e[f],
                    y = t[f];
                  if (r) var g = o ? r(y, p, f, t, e, a) : r(p, y, f, e, t, a);
                  if (g !== s) {
                    if (g) continue;
                    _ = !1;
                    break;
                  }
                  if (m) {
                    if (
                      !sn(t, function (e, t) {
                        if (!Mn(m, t) && (p === e || i(p, e, n, r, a)))
                          return m.push(t);
                      })
                    ) {
                      _ = !1;
                      break;
                    }
                  } else if (p !== y && !i(p, y, n, r, a)) {
                    _ = !1;
                    break;
                  }
                }
                return a.delete(e), a.delete(t), _;
              }
              function Cs(e) {
                return aa(ta(e, s, ga), e + "");
              }
              function Os(e) {
                return Xr(e, au, Is);
              }
              function Es(e) {
                return Xr(e, ou, Ws);
              }
              var Hs = sr
                ? function (e) {
                    return sr.get(e);
                  }
                : $u;
              function As(e) {
                for (
                  var t = e.name + "", n = ar[t], r = ct.call(ar, t) ? n.length : 0;
                  r--;
    
                ) {
                  var i = n[r],
                    s = i.func;
                  if (null == s || s == e) return i.name;
                }
                return t;
              }
              function Ps(e) {
                return (ct.call(pr, "placeholder") ? pr : e).placeholder;
              }
              function $s() {
                var e = pr.iteratee || Eu;
                return (
                  (e = e === Eu ? ci : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function Rs(e, t) {
                var n,
                  r,
                  i = e.__data__;
                return (
                  "string" == (r = typeof (n = t)) ||
                  "number" == r ||
                  "symbol" == r ||
                  "boolean" == r
                    ? "__proto__" !== n
                    : null === n
                )
                  ? i["string" == typeof t ? "string" : "hash"]
                  : i.map;
              }
              function Ns(e) {
                for (var t = au(e), n = t.length; n--; ) {
                  var r = t[n],
                    i = e[r];
                  t[n] = [r, i, Xs(i)];
                }
                return t;
              }
              function Fs(e, t) {
                var n = (function (e, t) {
                  return null == e ? s : e[t];
                })(e, t);
                return li(n) ? n : s;
              }
              var Is = Wn
                  ? function (e) {
                      return null == e
                        ? []
                        : ((e = tt(e)),
                          Zt(Wn(e), function (t) {
                            return Et.call(e, t);
                          }));
                    }
                  : qu,
                Ws = Wn
                  ? function (e) {
                      for (var t = []; e; ) tn(t, Is(e)), (e = jt(e));
                      return t;
                    }
                  : qu,
                zs = ei;
              function qs(e, t, n) {
                for (var r = -1, i = (t = Vi(t, e)).length, s = !1; ++r < i; ) {
                  var a = da(t[r]);
                  if (!(s = null != e && n(e, a))) break;
                  e = e[a];
                }
                return s || ++r != i
                  ? s
                  : !!(i = null == e ? 0 : e.length) &&
                      Do(i) &&
                      Js(a, i) &&
                      (go(e) || yo(e));
              }
              function Bs(e) {
                return "function" != typeof e.constructor || Qs(e) ? {} : hr(jt(e));
              }
              function Us(e) {
                return go(e) || yo(e) || !!(Pt && e && e[Pt]);
              }
              function Js(e, t) {
                var n = typeof e;
                return (
                  !!(t = null == t ? A : t) &&
                  ("number" == n || ("symbol" != n && Ge.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                );
              }
              function Vs(e, t, n) {
                if (!jo(n)) return !1;
                var r = typeof t;
                return (
                  !!("number" == r
                    ? Mo(n) && Js(t, n.length)
                    : "string" == r && t in n) && po(n[t], e)
                );
              }
              function Gs(e, t) {
                if (go(e)) return !1;
                var n = typeof e;
                return (
                  !(
                    "number" != n &&
                    "symbol" != n &&
                    "boolean" != n &&
                    null != e &&
                    !$o(e)
                  ) ||
                  Ce.test(e) ||
                  !Se.test(e) ||
                  (null != t && e in tt(t))
                );
              }
              function Ks(e) {
                var t = As(e),
                  n = pr[t];
                if ("function" != typeof n || !(t in gr.prototype)) return !1;
                if (e === n) return !0;
                var r = Hs(n);
                return !!r && e === r[0];
              }
              ((Xn && zs(new Xn(new ArrayBuffer(1))) != ce) ||
                (er && zs(new er()) != Z) ||
                (tr && "[object Promise]" != zs(tr.resolve())) ||
                (nr && zs(new nr()) != re) ||
                (rr && zs(new rr()) != oe)) &&
                (zs = function (e) {
                  var t = ei(e),
                    n = t == ee ? e.constructor : s,
                    r = n ? fa(n) : "";
                  if (r)
                    switch (r) {
                      case or:
                        return ce;
                      case ur:
                        return Z;
                      case lr:
                        return "[object Promise]";
                      case cr:
                        return re;
                      case dr:
                        return oe;
                    }
                  return t;
                });
              var Zs = ut ? Yo : Bu;
              function Qs(e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || ot);
              }
              function Xs(e) {
                return e == e && !jo(e);
              }
              function ea(e, t) {
                return function (n) {
                  return null != n && n[e] === t && (t !== s || e in tt(n));
                };
              }
              function ta(e, t, n) {
                return (
                  (t = Jn(t === s ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var i = arguments, s = -1, a = Jn(i.length - t, 0), o = r(a);
                      ++s < a;
    
                    )
                      o[s] = i[t + s];
                    s = -1;
                    for (var u = r(t + 1); ++s < t; ) u[s] = i[s];
                    return (u[t] = n(o)), Ut(e, this, u);
                  }
                );
              }
              function na(e, t) {
                return t.length < 2 ? e : Qr(e, Oi(t, 0, -1));
              }
              function ra(e, t) {
                if (
                  ("constructor" !== t || "function" != typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              }
              var ia = ua(ji),
                sa =
                  Nn ||
                  function (e, t) {
                    return Ht.setTimeout(e, t);
                  },
                aa = ua(Si);
              function oa(e, t, n) {
                var r = t + "";
                return aa(
                  e,
                  (function (e, t) {
                    var n = t.length;
                    if (!n) return e;
                    var r = n - 1;
                    return (
                      (t[r] = (n > 1 ? "& " : "") + t[r]),
                      (t = t.join(n > 2 ? ", " : " ")),
                      e.replace($e, "{\n/* [wrapped with " + t + "] */\n")
                    );
                  })(
                    r,
                    (function (e, t) {
                      return (
                        Vt(I, function (n) {
                          var r = "_." + n[0];
                          t & n[1] && !Qt(e, r) && e.push(r);
                        }),
                        e.sort()
                      );
                    })(
                      (function (e) {
                        var t = e.match(Re);
                        return t ? t[1].split(Ne) : [];
                      })(r),
                      n
                    )
                  )
                );
              }
              function ua(e) {
                var t = 0,
                  n = 0;
                return function () {
                  var r = Gn(),
                    i = C - (r - n);
                  if (((n = r), i > 0)) {
                    if (++t >= S) return arguments[0];
                  } else t = 0;
                  return e.apply(s, arguments);
                };
              }
              function la(e, t) {
                var n = -1,
                  r = e.length,
                  i = r - 1;
                for (t = t === s ? r : t; ++n < t; ) {
                  var a = ki(n, i),
                    o = e[a];
                  (e[a] = e[n]), (e[n] = o);
                }
                return (e.length = t), e;
              }
              var ca = (function (e) {
                var t = uo(e, function (e) {
                    return n.size === d && n.clear(), e;
                  }),
                  n = t.cache;
                return t;
              })(function (e) {
                var t = [];
                return (
                  46 === e.charCodeAt(0) && t.push(""),
                  e.replace(Oe, function (e, n, r, i) {
                    t.push(r ? i.replace(We, "$1") : n || e);
                  }),
                  t
                );
              });
              function da(e) {
                if ("string" == typeof e || $o(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -H ? "-0" : t;
              }
              function fa(e) {
                if (null != e) {
                  try {
                    return lt.call(e);
                  } catch (e) {}
                  try {
                    return e + "";
                  } catch (e) {}
                }
                return "";
              }
              function _a(e) {
                if (e instanceof gr) return e.clone();
                var t = new yr(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = is(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              var ma = xi(function (e, t) {
                  return Lo(e) ? Fr(e, Ur(t, 1, Lo, !0)) : [];
                }),
                pa = xi(function (e, t) {
                  var n = wa(t);
                  return (
                    Lo(n) && (n = s), Lo(e) ? Fr(e, Ur(t, 1, Lo, !0), $s(n, 2)) : []
                  );
                }),
                ha = xi(function (e, t) {
                  var n = wa(t);
                  return (
                    Lo(n) && (n = s), Lo(e) ? Fr(e, Ur(t, 1, Lo, !0), s, n) : []
                  );
                });
              function va(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = null == n ? 0 : zo(n);
                return i < 0 && (i = Jn(r + i, 0)), un(e, $s(t, 3), i);
              }
              function ya(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = r - 1;
                return (
                  n !== s &&
                    ((i = zo(n)), (i = n < 0 ? Jn(r + i, 0) : Vn(i, r - 1))),
                  un(e, $s(t, 3), i, !0)
                );
              }
              function ga(e) {
                return null != e && e.length ? Ur(e, 1) : [];
              }
              function ba(e) {
                return e && e.length ? e[0] : s;
              }
              var Ma = xi(function (e) {
                  var t = en(e, Ui);
                  return t.length && t[0] === e[0] ? ii(t) : [];
                }),
                La = xi(function (e) {
                  var t = wa(e),
                    n = en(e, Ui);
                  return (
                    t === wa(n) ? (t = s) : n.pop(),
                    n.length && n[0] === e[0] ? ii(n, $s(t, 2)) : []
                  );
                }),
                ka = xi(function (e) {
                  var t = wa(e),
                    n = en(e, Ui);
                  return (
                    (t = "function" == typeof t ? t : s) && n.pop(),
                    n.length && n[0] === e[0] ? ii(n, s, t) : []
                  );
                });
              function wa(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : s;
              }
              var xa = xi(Ya);
              function Ya(e, t) {
                return e && e.length && t && t.length ? Mi(e, t) : e;
              }
              var Ta = Cs(function (e, t) {
                var n = null == e ? 0 : e.length,
                  r = Ar(e, t);
                return (
                  Li(
                    e,
                    en(t, function (e) {
                      return Js(e, n) ? +e : e;
                    }).sort(ts)
                  ),
                  r
                );
              });
              function Da(e) {
                return null == e ? e : Qn.call(e);
              }
              var ja = xi(function (e) {
                  return Ni(Ur(e, 1, Lo, !0));
                }),
                Sa = xi(function (e) {
                  var t = wa(e);
                  return Lo(t) && (t = s), Ni(Ur(e, 1, Lo, !0), $s(t, 2));
                }),
                Ca = xi(function (e) {
                  var t = wa(e);
                  return (
                    (t = "function" == typeof t ? t : s), Ni(Ur(e, 1, Lo, !0), s, t)
                  );
                });
              function Oa(e) {
                if (!e || !e.length) return [];
                var t = 0;
                return (
                  (e = Zt(e, function (e) {
                    if (Lo(e)) return (t = Jn(e.length, t)), !0;
                  })),
                  vn(t, function (t) {
                    return en(e, _n(t));
                  })
                );
              }
              function Ea(e, t) {
                if (!e || !e.length) return [];
                var n = Oa(e);
                return null == t
                  ? n
                  : en(n, function (e) {
                      return Ut(t, s, e);
                    });
              }
              var Ha = xi(function (e, t) {
                  return Lo(e) ? Fr(e, t) : [];
                }),
                Aa = xi(function (e) {
                  return qi(Zt(e, Lo));
                }),
                Pa = xi(function (e) {
                  var t = wa(e);
                  return Lo(t) && (t = s), qi(Zt(e, Lo), $s(t, 2));
                }),
                $a = xi(function (e) {
                  var t = wa(e);
                  return (t = "function" == typeof t ? t : s), qi(Zt(e, Lo), s, t);
                }),
                Ra = xi(Oa);
              var Na = xi(function (e) {
                var t = e.length,
                  n = t > 1 ? e[t - 1] : s;
                return Ea(e, (n = "function" == typeof n ? (e.pop(), n) : s));
              });
              function Fa(e) {
                var t = pr(e);
                return (t.__chain__ = !0), t;
              }
              function Ia(e, t) {
                return t(e);
              }
              var Wa = Cs(function (e) {
                var t = e.length,
                  n = t ? e[0] : 0,
                  r = this.__wrapped__,
                  i = function (t) {
                    return Ar(t, e);
                  };
                return !(t > 1 || this.__actions__.length) &&
                  r instanceof gr &&
                  Js(n)
                  ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                      func: Ia,
                      args: [i],
                      thisArg: s,
                    }),
                    new yr(r, this.__chain__).thru(function (e) {
                      return t && !e.length && e.push(s), e;
                    }))
                  : this.thru(i);
              });
              var za = as(function (e, t, n) {
                ct.call(e, n) ? ++e[n] : Hr(e, n, 1);
              });
              var qa = _s(va),
                Ba = _s(ya);
              function Ua(e, t) {
                return (go(e) ? Vt : Ir)(e, $s(t, 3));
              }
              function Ja(e, t) {
                return (go(e) ? Gt : Wr)(e, $s(t, 3));
              }
              var Va = as(function (e, t, n) {
                ct.call(e, n) ? e[n].push(t) : Hr(e, n, [t]);
              });
              var Ga = xi(function (e, t, n) {
                  var i = -1,
                    s = "function" == typeof t,
                    a = Mo(e) ? r(e.length) : [];
                  return (
                    Ir(e, function (e) {
                      a[++i] = s ? Ut(t, e, n) : si(e, t, n);
                    }),
                    a
                  );
                }),
                Ka = as(function (e, t, n) {
                  Hr(e, n, t);
                });
              function Za(e, t) {
                return (go(e) ? en : mi)(e, $s(t, 3));
              }
              var Qa = as(
                function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                },
                function () {
                  return [[], []];
                }
              );
              var Xa = xi(function (e, t) {
                  if (null == e) return [];
                  var n = t.length;
                  return (
                    n > 1 && Vs(e, t[0], t[1])
                      ? (t = [])
                      : n > 2 && Vs(t[0], t[1], t[2]) && (t = [t[0]]),
                    gi(e, Ur(t, 1), [])
                  );
                }),
                eo =
                  Rn ||
                  function () {
                    return Ht.Date.now();
                  };
              function to(e, t, n) {
                return (
                  (t = n ? s : t),
                  (t = e && null == t ? e.length : t),
                  Ys(e, x, s, s, s, s, t)
                );
              }
              function no(e, t) {
                var n;
                if ("function" != typeof t) throw new it(u);
                return (
                  (e = zo(e)),
                  function () {
                    return (
                      --e > 0 && (n = t.apply(this, arguments)),
                      e <= 1 && (t = s),
                      n
                    );
                  }
                );
              }
              var ro = xi(function (e, t, n) {
                  var r = y;
                  if (n.length) {
                    var i = Sn(n, Ps(ro));
                    r |= k;
                  }
                  return Ys(e, r, t, n, i);
                }),
                io = xi(function (e, t, n) {
                  var r = y | g;
                  if (n.length) {
                    var i = Sn(n, Ps(io));
                    r |= k;
                  }
                  return Ys(t, r, e, n, i);
                });
              function so(e, t, n) {
                var r,
                  i,
                  a,
                  o,
                  l,
                  c,
                  d = 0,
                  f = !1,
                  _ = !1,
                  m = !0;
                if ("function" != typeof e) throw new it(u);
                function p(t) {
                  var n = r,
                    a = i;
                  return (r = i = s), (d = t), (o = e.apply(a, n));
                }
                function h(e) {
                  var n = e - c;
                  return c === s || n >= t || n < 0 || (_ && e - d >= a);
                }
                function v() {
                  var e = eo();
                  if (h(e)) return y(e);
                  l = sa(
                    v,
                    (function (e) {
                      var n = t - (e - c);
                      return _ ? Vn(n, a - (e - d)) : n;
                    })(e)
                  );
                }
                function y(e) {
                  return (l = s), m && r ? p(e) : ((r = i = s), o);
                }
                function g() {
                  var e = eo(),
                    n = h(e);
                  if (((r = arguments), (i = this), (c = e), n)) {
                    if (l === s)
                      return (function (e) {
                        return (d = e), (l = sa(v, t)), f ? p(e) : o;
                      })(c);
                    if (_) return Zi(l), (l = sa(v, t)), p(c);
                  }
                  return l === s && (l = sa(v, t)), o;
                }
                return (
                  (t = Bo(t) || 0),
                  jo(n) &&
                    ((f = !!n.leading),
                    (a = (_ = "maxWait" in n) ? Jn(Bo(n.maxWait) || 0, t) : a),
                    (m = "trailing" in n ? !!n.trailing : m)),
                  (g.cancel = function () {
                    l !== s && Zi(l), (d = 0), (r = c = i = l = s);
                  }),
                  (g.flush = function () {
                    return l === s ? o : y(eo());
                  }),
                  g
                );
              }
              var ao = xi(function (e, t) {
                  return Nr(e, 1, t);
                }),
                oo = xi(function (e, t, n) {
                  return Nr(e, Bo(t) || 0, n);
                });
              function uo(e, t) {
                if ("function" != typeof e || (null != t && "function" != typeof t))
                  throw new it(u);
                var n = function () {
                  var r = arguments,
                    i = t ? t.apply(this, r) : r[0],
                    s = n.cache;
                  if (s.has(i)) return s.get(i);
                  var a = e.apply(this, r);
                  return (n.cache = s.set(i, a) || s), a;
                };
                return (n.cache = new (uo.Cache || Lr)()), n;
              }
              function lo(e) {
                if ("function" != typeof e) throw new it(u);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              uo.Cache = Lr;
              var co = Gi(function (e, t) {
                  var n = (t =
                    1 == t.length && go(t[0])
                      ? en(t[0], gn($s()))
                      : en(Ur(t, 1), gn($s()))).length;
                  return xi(function (r) {
                    for (var i = -1, s = Vn(r.length, n); ++i < s; )
                      r[i] = t[i].call(this, r[i]);
                    return Ut(e, this, r);
                  });
                }),
                fo = xi(function (e, t) {
                  var n = Sn(t, Ps(fo));
                  return Ys(e, k, s, t, n);
                }),
                _o = xi(function (e, t) {
                  var n = Sn(t, Ps(_o));
                  return Ys(e, w, s, t, n);
                }),
                mo = Cs(function (e, t) {
                  return Ys(e, Y, s, s, s, t);
                });
              function po(e, t) {
                return e === t || (e != e && t != t);
              }
              var ho = Ms(ti),
                vo = Ms(function (e, t) {
                  return e >= t;
                }),
                yo = ai(
                  (function () {
                    return arguments;
                  })()
                )
                  ? ai
                  : function (e) {
                      return So(e) && ct.call(e, "callee") && !Et.call(e, "callee");
                    },
                go = r.isArray,
                bo = Ft
                  ? gn(Ft)
                  : function (e) {
                      return So(e) && ei(e) == le;
                    };
              function Mo(e) {
                return null != e && Do(e.length) && !Yo(e);
              }
              function Lo(e) {
                return So(e) && Mo(e);
              }
              var ko = zn || Bu,
                wo = It
                  ? gn(It)
                  : function (e) {
                      return So(e) && ei(e) == U;
                    };
              function xo(e) {
                if (!So(e)) return !1;
                var t = ei(e);
                return (
                  t == V ||
                  t == J ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !Eo(e))
                );
              }
              function Yo(e) {
                if (!jo(e)) return !1;
                var t = ei(e);
                return t == G || t == K || t == q || t == te;
              }
              function To(e) {
                return "number" == typeof e && e == zo(e);
              }
              function Do(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= A;
              }
              function jo(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function So(e) {
                return null != e && "object" == typeof e;
              }
              var Co = Wt
                ? gn(Wt)
                : function (e) {
                    return So(e) && zs(e) == Z;
                  };
              function Oo(e) {
                return "number" == typeof e || (So(e) && ei(e) == Q);
              }
              function Eo(e) {
                if (!So(e) || ei(e) != ee) return !1;
                var t = jt(e);
                if (null === t) return !0;
                var n = ct.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && lt.call(n) == mt;
              }
              var Ho = zt
                ? gn(zt)
                : function (e) {
                    return So(e) && ei(e) == ne;
                  };
              var Ao = qt
                ? gn(qt)
                : function (e) {
                    return So(e) && zs(e) == re;
                  };
              function Po(e) {
                return "string" == typeof e || (!go(e) && So(e) && ei(e) == ie);
              }
              function $o(e) {
                return "symbol" == typeof e || (So(e) && ei(e) == se);
              }
              var Ro = Bt
                ? gn(Bt)
                : function (e) {
                    return So(e) && Do(e.length) && !!Tt[ei(e)];
                  };
              var No = Ms(_i),
                Fo = Ms(function (e, t) {
                  return e <= t;
                });
              function Io(e) {
                if (!e) return [];
                if (Mo(e)) return Po(e) ? Hn(e) : is(e);
                if (Rt && e[Rt])
                  return (function (e) {
                    for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                    return n;
                  })(e[Rt]());
                var t = zs(e);
                return (t == Z ? Dn : t == re ? Cn : pu)(e);
              }
              function Wo(e) {
                return e
                  ? (e = Bo(e)) === H || e === -H
                    ? (e < 0 ? -1 : 1) * P
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function zo(e) {
                var t = Wo(e),
                  n = t % 1;
                return t == t ? (n ? t - n : t) : 0;
              }
              function qo(e) {
                return e ? Pr(zo(e), 0, R) : 0;
              }
              function Bo(e) {
                if ("number" == typeof e) return e;
                if ($o(e)) return $;
                if (jo(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = jo(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = yn(e);
                var n = Ue.test(e);
                return n || Ve.test(e)
                  ? Ct(e.slice(2), n ? 2 : 8)
                  : Be.test(e)
                  ? $
                  : +e;
              }
              function Uo(e) {
                return ss(e, ou(e));
              }
              function Jo(e) {
                return null == e ? "" : Ri(e);
              }
              var Vo = os(function (e, t) {
                  if (Qs(t) || Mo(t)) ss(t, au(t), e);
                  else for (var n in t) ct.call(t, n) && Sr(e, n, t[n]);
                }),
                Go = os(function (e, t) {
                  ss(t, ou(t), e);
                }),
                Ko = os(function (e, t, n, r) {
                  ss(t, ou(t), e, r);
                }),
                Zo = os(function (e, t, n, r) {
                  ss(t, au(t), e, r);
                }),
                Qo = Cs(Ar);
              var Xo = xi(function (e, t) {
                  e = tt(e);
                  var n = -1,
                    r = t.length,
                    i = r > 2 ? t[2] : s;
                  for (i && Vs(t[0], t[1], i) && (r = 1); ++n < r; )
                    for (var a = t[n], o = ou(a), u = -1, l = o.length; ++u < l; ) {
                      var c = o[u],
                        d = e[c];
                      (d === s || (po(d, ot[c]) && !ct.call(e, c))) &&
                        (e[c] = a[c]);
                    }
                  return e;
                }),
                eu = xi(function (e) {
                  return e.push(s, Ds), Ut(lu, s, e);
                });
              function tu(e, t, n) {
                var r = null == e ? s : Qr(e, t);
                return r === s ? n : r;
              }
              function nu(e, t) {
                return null != e && qs(e, t, ri);
              }
              var ru = hs(function (e, t, n) {
                  null != t && "function" != typeof t.toString && (t = _t.call(t)),
                    (e[t] = n);
                }, ju(Ou)),
                iu = hs(function (e, t, n) {
                  null != t && "function" != typeof t.toString && (t = _t.call(t)),
                    ct.call(e, t) ? e[t].push(n) : (e[t] = [n]);
                }, $s),
                su = xi(si);
              function au(e) {
                return Mo(e) ? xr(e) : di(e);
              }
              function ou(e) {
                return Mo(e) ? xr(e, !0) : fi(e);
              }
              var uu = os(function (e, t, n) {
                  vi(e, t, n);
                }),
                lu = os(function (e, t, n, r) {
                  vi(e, t, n, r);
                }),
                cu = Cs(function (e, t) {
                  var n = {};
                  if (null == e) return n;
                  var r = !1;
                  (t = en(t, function (t) {
                    return (t = Vi(t, e)), r || (r = t.length > 1), t;
                  })),
                    ss(e, Es(e), n),
                    r && (n = $r(n, _ | m | p, js));
                  for (var i = t.length; i--; ) Fi(n, t[i]);
                  return n;
                });
              var du = Cs(function (e, t) {
                return null == e
                  ? {}
                  : (function (e, t) {
                      return bi(e, t, function (t, n) {
                        return nu(e, n);
                      });
                    })(e, t);
              });
              function fu(e, t) {
                if (null == e) return {};
                var n = en(Es(e), function (e) {
                  return [e];
                });
                return (
                  (t = $s(t)),
                  bi(e, n, function (e, n) {
                    return t(e, n[0]);
                  })
                );
              }
              var _u = xs(au),
                mu = xs(ou);
              function pu(e) {
                return null == e ? [] : bn(e, au(e));
              }
              var hu = ds(function (e, t, n) {
                return (t = t.toLowerCase()), e + (n ? vu(t) : t);
              });
              function vu(e) {
                return xu(Jo(e).toLowerCase());
              }
              function yu(e) {
                return (e = Jo(e)) && e.replace(Ke, wn).replace(bt, "");
              }
              var gu = ds(function (e, t, n) {
                  return e + (n ? "-" : "") + t.toLowerCase();
                }),
                bu = ds(function (e, t, n) {
                  return e + (n ? " " : "") + t.toLowerCase();
                }),
                Mu = cs("toLowerCase");
              var Lu = ds(function (e, t, n) {
                return e + (n ? "_" : "") + t.toLowerCase();
              });
              var ku = ds(function (e, t, n) {
                return e + (n ? " " : "") + xu(t);
              });
              var wu = ds(function (e, t, n) {
                  return e + (n ? " " : "") + t.toUpperCase();
                }),
                xu = cs("toUpperCase");
              function Yu(e, t, n) {
                return (
                  (e = Jo(e)),
                  (t = n ? s : t) === s
                    ? (function (e) {
                        return wt.test(e);
                      })(e)
                      ? (function (e) {
                          return e.match(Lt) || [];
                        })(e)
                      : (function (e) {
                          return e.match(Fe) || [];
                        })(e)
                    : e.match(t) || []
                );
              }
              var Tu = xi(function (e, t) {
                  try {
                    return Ut(e, s, t);
                  } catch (e) {
                    return xo(e) ? e : new Pe(e);
                  }
                }),
                Du = Cs(function (e, t) {
                  return (
                    Vt(t, function (t) {
                      (t = da(t)), Hr(e, t, ro(e[t], e));
                    }),
                    e
                  );
                });
              function ju(e) {
                return function () {
                  return e;
                };
              }
              var Su = ms(),
                Cu = ms(!0);
              function Ou(e) {
                return e;
              }
              function Eu(e) {
                return ci("function" == typeof e ? e : $r(e, _));
              }
              var Hu = xi(function (e, t) {
                  return function (n) {
                    return si(n, e, t);
                  };
                }),
                Au = xi(function (e, t) {
                  return function (n) {
                    return si(e, n, t);
                  };
                });
              function Pu(e, t, n) {
                var r = au(t),
                  i = Zr(t, r);
                null != n ||
                  (jo(t) && (i.length || !r.length)) ||
                  ((n = t), (t = e), (e = this), (i = Zr(t, au(t))));
                var s = !(jo(n) && "chain" in n && !n.chain),
                  a = Yo(e);
                return (
                  Vt(i, function (n) {
                    var r = t[n];
                    (e[n] = r),
                      a &&
                        (e.prototype[n] = function () {
                          var t = this.__chain__;
                          if (s || t) {
                            var n = e(this.__wrapped__);
                            return (
                              (n.__actions__ = is(this.__actions__)).push({
                                func: r,
                                args: arguments,
                                thisArg: e,
                              }),
                              (n.__chain__ = t),
                              n
                            );
                          }
                          return r.apply(e, tn([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function $u() {}
              var Ru = ys(en),
                Nu = ys(Kt),
                Fu = ys(sn);
              function Iu(e) {
                return Gs(e)
                  ? _n(da(e))
                  : (function (e) {
                      return function (t) {
                        return Qr(t, e);
                      };
                    })(e);
              }
              var Wu = bs(),
                zu = bs(!0);
              function qu() {
                return [];
              }
              function Bu() {
                return !1;
              }
              var Uu = vs(function (e, t) {
                  return e + t;
                }, 0),
                Ju = ks("ceil"),
                Vu = vs(function (e, t) {
                  return e / t;
                }, 1),
                Gu = ks("floor");
              var Ku,
                Zu = vs(function (e, t) {
                  return e * t;
                }, 1),
                Qu = ks("round"),
                Xu = vs(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (pr.after = function (e, t) {
                  if ("function" != typeof t) throw new it(u);
                  return (
                    (e = zo(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (pr.ary = to),
                (pr.assign = Vo),
                (pr.assignIn = Go),
                (pr.assignInWith = Ko),
                (pr.assignWith = Zo),
                (pr.at = Qo),
                (pr.before = no),
                (pr.bind = ro),
                (pr.bindAll = Du),
                (pr.bindKey = io),
                (pr.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return go(e) ? e : [e];
                }),
                (pr.chain = Fa),
                (pr.chunk = function (e, t, n) {
                  t = (n ? Vs(e, t, n) : t === s) ? 1 : Jn(zo(t), 0);
                  var i = null == e ? 0 : e.length;
                  if (!i || t < 1) return [];
                  for (var a = 0, o = 0, u = r(Fn(i / t)); a < i; )
                    u[o++] = Oi(e, a, (a += t));
                  return u;
                }),
                (pr.compact = function (e) {
                  for (
                    var t = -1, n = null == e ? 0 : e.length, r = 0, i = [];
                    ++t < n;
    
                  ) {
                    var s = e[t];
                    s && (i[r++] = s);
                  }
                  return i;
                }),
                (pr.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = r(e - 1), n = arguments[0], i = e; i--; )
                    t[i - 1] = arguments[i];
                  return tn(go(n) ? is(n) : [n], Ur(t, 1));
                }),
                (pr.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    n = $s();
                  return (
                    (e = t
                      ? en(e, function (e) {
                          if ("function" != typeof e[1]) throw new it(u);
                          return [n(e[0]), e[1]];
                        })
                      : []),
                    xi(function (n) {
                      for (var r = -1; ++r < t; ) {
                        var i = e[r];
                        if (Ut(i[0], this, n)) return Ut(i[1], this, n);
                      }
                    })
                  );
                }),
                (pr.conforms = function (e) {
                  return (function (e) {
                    var t = au(e);
                    return function (n) {
                      return Rr(n, e, t);
                    };
                  })($r(e, _));
                }),
                (pr.constant = ju),
                (pr.countBy = za),
                (pr.create = function (e, t) {
                  var n = hr(e);
                  return null == t ? n : Er(n, t);
                }),
                (pr.curry = function e(t, n, r) {
                  var i = Ys(t, M, s, s, s, s, s, (n = r ? s : n));
                  return (i.placeholder = e.placeholder), i;
                }),
                (pr.curryRight = function e(t, n, r) {
                  var i = Ys(t, L, s, s, s, s, s, (n = r ? s : n));
                  return (i.placeholder = e.placeholder), i;
                }),
                (pr.debounce = so),
                (pr.defaults = Xo),
                (pr.defaultsDeep = eu),
                (pr.defer = ao),
                (pr.delay = oo),
                (pr.difference = ma),
                (pr.differenceBy = pa),
                (pr.differenceWith = ha),
                (pr.drop = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  return r
                    ? Oi(e, (t = n || t === s ? 1 : zo(t)) < 0 ? 0 : t, r)
                    : [];
                }),
                (pr.dropRight = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  return r
                    ? Oi(e, 0, (t = r - (t = n || t === s ? 1 : zo(t))) < 0 ? 0 : t)
                    : [];
                }),
                (pr.dropRightWhile = function (e, t) {
                  return e && e.length ? Wi(e, $s(t, 3), !0, !0) : [];
                }),
                (pr.dropWhile = function (e, t) {
                  return e && e.length ? Wi(e, $s(t, 3), !0) : [];
                }),
                (pr.fill = function (e, t, n, r) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? (n &&
                        "number" != typeof n &&
                        Vs(e, t, n) &&
                        ((n = 0), (r = i)),
                      (function (e, t, n, r) {
                        var i = e.length;
                        for (
                          (n = zo(n)) < 0 && (n = -n > i ? 0 : i + n),
                            (r = r === s || r > i ? i : zo(r)) < 0 && (r += i),
                            r = n > r ? 0 : qo(r);
                          n < r;
    
                        )
                          e[n++] = t;
                        return e;
                      })(e, t, n, r))
                    : [];
                }),
                (pr.filter = function (e, t) {
                  return (go(e) ? Zt : Br)(e, $s(t, 3));
                }),
                (pr.flatMap = function (e, t) {
                  return Ur(Za(e, t), 1);
                }),
                (pr.flatMapDeep = function (e, t) {
                  return Ur(Za(e, t), H);
                }),
                (pr.flatMapDepth = function (e, t, n) {
                  return (n = n === s ? 1 : zo(n)), Ur(Za(e, t), n);
                }),
                (pr.flatten = ga),
                (pr.flattenDeep = function (e) {
                  return null != e && e.length ? Ur(e, H) : [];
                }),
                (pr.flattenDepth = function (e, t) {
                  return null != e && e.length
                    ? Ur(e, (t = t === s ? 1 : zo(t)))
                    : [];
                }),
                (pr.flip = function (e) {
                  return Ys(e, T);
                }),
                (pr.flow = Su),
                (pr.flowRight = Cu),
                (pr.fromPairs = function (e) {
                  for (
                    var t = -1, n = null == e ? 0 : e.length, r = {};
                    ++t < n;
    
                  ) {
                    var i = e[t];
                    r[i[0]] = i[1];
                  }
                  return r;
                }),
                (pr.functions = function (e) {
                  return null == e ? [] : Zr(e, au(e));
                }),
                (pr.functionsIn = function (e) {
                  return null == e ? [] : Zr(e, ou(e));
                }),
                (pr.groupBy = Va),
                (pr.initial = function (e) {
                  return null != e && e.length ? Oi(e, 0, -1) : [];
                }),
                (pr.intersection = Ma),
                (pr.intersectionBy = La),
                (pr.intersectionWith = ka),
                (pr.invert = ru),
                (pr.invertBy = iu),
                (pr.invokeMap = Ga),
                (pr.iteratee = Eu),
                (pr.keyBy = Ka),
                (pr.keys = au),
                (pr.keysIn = ou),
                (pr.map = Za),
                (pr.mapKeys = function (e, t) {
                  var n = {};
                  return (
                    (t = $s(t, 3)),
                    Gr(e, function (e, r, i) {
                      Hr(n, t(e, r, i), e);
                    }),
                    n
                  );
                }),
                (pr.mapValues = function (e, t) {
                  var n = {};
                  return (
                    (t = $s(t, 3)),
                    Gr(e, function (e, r, i) {
                      Hr(n, r, t(e, r, i));
                    }),
                    n
                  );
                }),
                (pr.matches = function (e) {
                  return pi($r(e, _));
                }),
                (pr.matchesProperty = function (e, t) {
                  return hi(e, $r(t, _));
                }),
                (pr.memoize = uo),
                (pr.merge = uu),
                (pr.mergeWith = lu),
                (pr.method = Hu),
                (pr.methodOf = Au),
                (pr.mixin = Pu),
                (pr.negate = lo),
                (pr.nthArg = function (e) {
                  return (
                    (e = zo(e)),
                    xi(function (t) {
                      return yi(t, e);
                    })
                  );
                }),
                (pr.omit = cu),
                (pr.omitBy = function (e, t) {
                  return fu(e, lo($s(t)));
                }),
                (pr.once = function (e) {
                  return no(2, e);
                }),
                (pr.orderBy = function (e, t, n, r) {
                  return null == e
                    ? []
                    : (go(t) || (t = null == t ? [] : [t]),
                      go((n = r ? s : n)) || (n = null == n ? [] : [n]),
                      gi(e, t, n));
                }),
                (pr.over = Ru),
                (pr.overArgs = co),
                (pr.overEvery = Nu),
                (pr.overSome = Fu),
                (pr.partial = fo),
                (pr.partialRight = _o),
                (pr.partition = Qa),
                (pr.pick = du),
                (pr.pickBy = fu),
                (pr.property = Iu),
                (pr.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? s : Qr(e, t);
                  };
                }),
                (pr.pull = xa),
                (pr.pullAll = Ya),
                (pr.pullAllBy = function (e, t, n) {
                  return e && e.length && t && t.length ? Mi(e, t, $s(n, 2)) : e;
                }),
                (pr.pullAllWith = function (e, t, n) {
                  return e && e.length && t && t.length ? Mi(e, t, s, n) : e;
                }),
                (pr.pullAt = Ta),
                (pr.range = Wu),
                (pr.rangeRight = zu),
                (pr.rearg = mo),
                (pr.reject = function (e, t) {
                  return (go(e) ? Zt : Br)(e, lo($s(t, 3)));
                }),
                (pr.remove = function (e, t) {
                  var n = [];
                  if (!e || !e.length) return n;
                  var r = -1,
                    i = [],
                    s = e.length;
                  for (t = $s(t, 3); ++r < s; ) {
                    var a = e[r];
                    t(a, r, e) && (n.push(a), i.push(r));
                  }
                  return Li(e, i), n;
                }),
                (pr.rest = function (e, t) {
                  if ("function" != typeof e) throw new it(u);
                  return xi(e, (t = t === s ? t : zo(t)));
                }),
                (pr.reverse = Da),
                (pr.sampleSize = function (e, t, n) {
                  return (
                    (t = (n ? Vs(e, t, n) : t === s) ? 1 : zo(t)),
                    (go(e) ? Tr : Ti)(e, t)
                  );
                }),
                (pr.set = function (e, t, n) {
                  return null == e ? e : Di(e, t, n);
                }),
                (pr.setWith = function (e, t, n, r) {
                  return (
                    (r = "function" == typeof r ? r : s),
                    null == e ? e : Di(e, t, n, r)
                  );
                }),
                (pr.shuffle = function (e) {
                  return (go(e) ? Dr : Ci)(e);
                }),
                (pr.slice = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  return r
                    ? (n && "number" != typeof n && Vs(e, t, n)
                        ? ((t = 0), (n = r))
                        : ((t = null == t ? 0 : zo(t)), (n = n === s ? r : zo(n))),
                      Oi(e, t, n))
                    : [];
                }),
                (pr.sortBy = Xa),
                (pr.sortedUniq = function (e) {
                  return e && e.length ? Pi(e) : [];
                }),
                (pr.sortedUniqBy = function (e, t) {
                  return e && e.length ? Pi(e, $s(t, 2)) : [];
                }),
                (pr.split = function (e, t, n) {
                  return (
                    n && "number" != typeof n && Vs(e, t, n) && (t = n = s),
                    (n = n === s ? R : n >>> 0)
                      ? (e = Jo(e)) &&
                        ("string" == typeof t || (null != t && !Ho(t))) &&
                        !(t = Ri(t)) &&
                        Tn(e)
                        ? Ki(Hn(e), 0, n)
                        : e.split(t, n)
                      : []
                  );
                }),
                (pr.spread = function (e, t) {
                  if ("function" != typeof e) throw new it(u);
                  return (
                    (t = null == t ? 0 : Jn(zo(t), 0)),
                    xi(function (n) {
                      var r = n[t],
                        i = Ki(n, 0, t);
                      return r && tn(i, r), Ut(e, this, i);
                    })
                  );
                }),
                (pr.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? Oi(e, 1, t) : [];
                }),
                (pr.take = function (e, t, n) {
                  return e && e.length
                    ? Oi(e, 0, (t = n || t === s ? 1 : zo(t)) < 0 ? 0 : t)
                    : [];
                }),
                (pr.takeRight = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  return r
                    ? Oi(e, (t = r - (t = n || t === s ? 1 : zo(t))) < 0 ? 0 : t, r)
                    : [];
                }),
                (pr.takeRightWhile = function (e, t) {
                  return e && e.length ? Wi(e, $s(t, 3), !1, !0) : [];
                }),
                (pr.takeWhile = function (e, t) {
                  return e && e.length ? Wi(e, $s(t, 3)) : [];
                }),
                (pr.tap = function (e, t) {
                  return t(e), e;
                }),
                (pr.throttle = function (e, t, n) {
                  var r = !0,
                    i = !0;
                  if ("function" != typeof e) throw new it(u);
                  return (
                    jo(n) &&
                      ((r = "leading" in n ? !!n.leading : r),
                      (i = "trailing" in n ? !!n.trailing : i)),
                    so(e, t, { leading: r, maxWait: t, trailing: i })
                  );
                }),
                (pr.thru = Ia),
                (pr.toArray = Io),
                (pr.toPairs = _u),
                (pr.toPairsIn = mu),
                (pr.toPath = function (e) {
                  return go(e) ? en(e, da) : $o(e) ? [e] : is(ca(Jo(e)));
                }),
                (pr.toPlainObject = Uo),
                (pr.transform = function (e, t, n) {
                  var r = go(e),
                    i = r || ko(e) || Ro(e);
                  if (((t = $s(t, 4)), null == n)) {
                    var s = e && e.constructor;
                    n = i ? (r ? new s() : []) : jo(e) && Yo(s) ? hr(jt(e)) : {};
                  }
                  return (
                    (i ? Vt : Gr)(e, function (e, r, i) {
                      return t(n, e, r, i);
                    }),
                    n
                  );
                }),
                (pr.unary = function (e) {
                  return to(e, 1);
                }),
                (pr.union = ja),
                (pr.unionBy = Sa),
                (pr.unionWith = Ca),
                (pr.uniq = function (e) {
                  return e && e.length ? Ni(e) : [];
                }),
                (pr.uniqBy = function (e, t) {
                  return e && e.length ? Ni(e, $s(t, 2)) : [];
                }),
                (pr.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : s),
                    e && e.length ? Ni(e, s, t) : []
                  );
                }),
                (pr.unset = function (e, t) {
                  return null == e || Fi(e, t);
                }),
                (pr.unzip = Oa),
                (pr.unzipWith = Ea),
                (pr.update = function (e, t, n) {
                  return null == e ? e : Ii(e, t, Ji(n));
                }),
                (pr.updateWith = function (e, t, n, r) {
                  return (
                    (r = "function" == typeof r ? r : s),
                    null == e ? e : Ii(e, t, Ji(n), r)
                  );
                }),
                (pr.values = pu),
                (pr.valuesIn = function (e) {
                  return null == e ? [] : bn(e, ou(e));
                }),
                (pr.without = Ha),
                (pr.words = Yu),
                (pr.wrap = function (e, t) {
                  return fo(Ji(t), e);
                }),
                (pr.xor = Aa),
                (pr.xorBy = Pa),
                (pr.xorWith = $a),
                (pr.zip = Ra),
                (pr.zipObject = function (e, t) {
                  return Bi(e || [], t || [], Sr);
                }),
                (pr.zipObjectDeep = function (e, t) {
                  return Bi(e || [], t || [], Di);
                }),
                (pr.zipWith = Na),
                (pr.entries = _u),
                (pr.entriesIn = mu),
                (pr.extend = Go),
                (pr.extendWith = Ko),
                Pu(pr, pr),
                (pr.add = Uu),
                (pr.attempt = Tu),
                (pr.camelCase = hu),
                (pr.capitalize = vu),
                (pr.ceil = Ju),
                (pr.clamp = function (e, t, n) {
                  return (
                    n === s && ((n = t), (t = s)),
                    n !== s && (n = (n = Bo(n)) == n ? n : 0),
                    t !== s && (t = (t = Bo(t)) == t ? t : 0),
                    Pr(Bo(e), t, n)
                  );
                }),
                (pr.clone = function (e) {
                  return $r(e, p);
                }),
                (pr.cloneDeep = function (e) {
                  return $r(e, _ | p);
                }),
                (pr.cloneDeepWith = function (e, t) {
                  return $r(e, _ | p, (t = "function" == typeof t ? t : s));
                }),
                (pr.cloneWith = function (e, t) {
                  return $r(e, p, (t = "function" == typeof t ? t : s));
                }),
                (pr.conformsTo = function (e, t) {
                  return null == t || Rr(e, t, au(t));
                }),
                (pr.deburr = yu),
                (pr.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (pr.divide = Vu),
                (pr.endsWith = function (e, t, n) {
                  (e = Jo(e)), (t = Ri(t));
                  var r = e.length,
                    i = (n = n === s ? r : Pr(zo(n), 0, r));
                  return (n -= t.length) >= 0 && e.slice(n, i) == t;
                }),
                (pr.eq = po),
                (pr.escape = function (e) {
                  return (e = Jo(e)) && Ye.test(e) ? e.replace(we, xn) : e;
                }),
                (pr.escapeRegExp = function (e) {
                  return (e = Jo(e)) && He.test(e) ? e.replace(Ee, "\\$&") : e;
                }),
                (pr.every = function (e, t, n) {
                  var r = go(e) ? Kt : zr;
                  return n && Vs(e, t, n) && (t = s), r(e, $s(t, 3));
                }),
                (pr.find = qa),
                (pr.findIndex = va),
                (pr.findKey = function (e, t) {
                  return on(e, $s(t, 3), Gr);
                }),
                (pr.findLast = Ba),
                (pr.findLastIndex = ya),
                (pr.findLastKey = function (e, t) {
                  return on(e, $s(t, 3), Kr);
                }),
                (pr.floor = Gu),
                (pr.forEach = Ua),
                (pr.forEachRight = Ja),
                (pr.forIn = function (e, t) {
                  return null == e ? e : Jr(e, $s(t, 3), ou);
                }),
                (pr.forInRight = function (e, t) {
                  return null == e ? e : Vr(e, $s(t, 3), ou);
                }),
                (pr.forOwn = function (e, t) {
                  return e && Gr(e, $s(t, 3));
                }),
                (pr.forOwnRight = function (e, t) {
                  return e && Kr(e, $s(t, 3));
                }),
                (pr.get = tu),
                (pr.gt = ho),
                (pr.gte = vo),
                (pr.has = function (e, t) {
                  return null != e && qs(e, t, ni);
                }),
                (pr.hasIn = nu),
                (pr.head = ba),
                (pr.identity = Ou),
                (pr.includes = function (e, t, n, r) {
                  (e = Mo(e) ? e : pu(e)), (n = n && !r ? zo(n) : 0);
                  var i = e.length;
                  return (
                    n < 0 && (n = Jn(i + n, 0)),
                    Po(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && ln(e, t, n) > -1
                  );
                }),
                (pr.indexOf = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var i = null == n ? 0 : zo(n);
                  return i < 0 && (i = Jn(r + i, 0)), ln(e, t, i);
                }),
                (pr.inRange = function (e, t, n) {
                  return (
                    (t = Wo(t)),
                    n === s ? ((n = t), (t = 0)) : (n = Wo(n)),
                    (function (e, t, n) {
                      return e >= Vn(t, n) && e < Jn(t, n);
                    })((e = Bo(e)), t, n)
                  );
                }),
                (pr.invoke = su),
                (pr.isArguments = yo),
                (pr.isArray = go),
                (pr.isArrayBuffer = bo),
                (pr.isArrayLike = Mo),
                (pr.isArrayLikeObject = Lo),
                (pr.isBoolean = function (e) {
                  return !0 === e || !1 === e || (So(e) && ei(e) == B);
                }),
                (pr.isBuffer = ko),
                (pr.isDate = wo),
                (pr.isElement = function (e) {
                  return So(e) && 1 === e.nodeType && !Eo(e);
                }),
                (pr.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    Mo(e) &&
                    (go(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      ko(e) ||
                      Ro(e) ||
                      yo(e))
                  )
                    return !e.length;
                  var t = zs(e);
                  if (t == Z || t == re) return !e.size;
                  if (Qs(e)) return !di(e).length;
                  for (var n in e) if (ct.call(e, n)) return !1;
                  return !0;
                }),
                (pr.isEqual = function (e, t) {
                  return oi(e, t);
                }),
                (pr.isEqualWith = function (e, t, n) {
                  var r = (n = "function" == typeof n ? n : s) ? n(e, t) : s;
                  return r === s ? oi(e, t, s, n) : !!r;
                }),
                (pr.isError = xo),
                (pr.isFinite = function (e) {
                  return "number" == typeof e && qn(e);
                }),
                (pr.isFunction = Yo),
                (pr.isInteger = To),
                (pr.isLength = Do),
                (pr.isMap = Co),
                (pr.isMatch = function (e, t) {
                  return e === t || ui(e, t, Ns(t));
                }),
                (pr.isMatchWith = function (e, t, n) {
                  return (n = "function" == typeof n ? n : s), ui(e, t, Ns(t), n);
                }),
                (pr.isNaN = function (e) {
                  return Oo(e) && e != +e;
                }),
                (pr.isNative = function (e) {
                  if (Zs(e)) throw new Pe(o);
                  return li(e);
                }),
                (pr.isNil = function (e) {
                  return null == e;
                }),
                (pr.isNull = function (e) {
                  return null === e;
                }),
                (pr.isNumber = Oo),
                (pr.isObject = jo),
                (pr.isObjectLike = So),
                (pr.isPlainObject = Eo),
                (pr.isRegExp = Ho),
                (pr.isSafeInteger = function (e) {
                  return To(e) && e >= -A && e <= A;
                }),
                (pr.isSet = Ao),
                (pr.isString = Po),
                (pr.isSymbol = $o),
                (pr.isTypedArray = Ro),
                (pr.isUndefined = function (e) {
                  return e === s;
                }),
                (pr.isWeakMap = function (e) {
                  return So(e) && zs(e) == oe;
                }),
                (pr.isWeakSet = function (e) {
                  return So(e) && ei(e) == ue;
                }),
                (pr.join = function (e, t) {
                  return null == e ? "" : Bn.call(e, t);
                }),
                (pr.kebabCase = gu),
                (pr.last = wa),
                (pr.lastIndexOf = function (e, t, n) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var i = r;
                  return (
                    n !== s && (i = (i = zo(n)) < 0 ? Jn(r + i, 0) : Vn(i, r - 1)),
                    t == t
                      ? (function (e, t, n) {
                          for (var r = n + 1; r--; ) if (e[r] === t) return r;
                          return r;
                        })(e, t, i)
                      : un(e, dn, i, !0)
                  );
                }),
                (pr.lowerCase = bu),
                (pr.lowerFirst = Mu),
                (pr.lt = No),
                (pr.lte = Fo),
                (pr.max = function (e) {
                  return e && e.length ? qr(e, Ou, ti) : s;
                }),
                (pr.maxBy = function (e, t) {
                  return e && e.length ? qr(e, $s(t, 2), ti) : s;
                }),
                (pr.mean = function (e) {
                  return fn(e, Ou);
                }),
                (pr.meanBy = function (e, t) {
                  return fn(e, $s(t, 2));
                }),
                (pr.min = function (e) {
                  return e && e.length ? qr(e, Ou, _i) : s;
                }),
                (pr.minBy = function (e, t) {
                  return e && e.length ? qr(e, $s(t, 2), _i) : s;
                }),
                (pr.stubArray = qu),
                (pr.stubFalse = Bu),
                (pr.stubObject = function () {
                  return {};
                }),
                (pr.stubString = function () {
                  return "";
                }),
                (pr.stubTrue = function () {
                  return !0;
                }),
                (pr.multiply = Zu),
                (pr.nth = function (e, t) {
                  return e && e.length ? yi(e, zo(t)) : s;
                }),
                (pr.noConflict = function () {
                  return Ht._ === this && (Ht._ = pt), this;
                }),
                (pr.noop = $u),
                (pr.now = eo),
                (pr.pad = function (e, t, n) {
                  e = Jo(e);
                  var r = (t = zo(t)) ? En(e) : 0;
                  if (!t || r >= t) return e;
                  var i = (t - r) / 2;
                  return gs(In(i), n) + e + gs(Fn(i), n);
                }),
                (pr.padEnd = function (e, t, n) {
                  e = Jo(e);
                  var r = (t = zo(t)) ? En(e) : 0;
                  return t && r < t ? e + gs(t - r, n) : e;
                }),
                (pr.padStart = function (e, t, n) {
                  e = Jo(e);
                  var r = (t = zo(t)) ? En(e) : 0;
                  return t && r < t ? gs(t - r, n) + e : e;
                }),
                (pr.parseInt = function (e, t, n) {
                  return (
                    n || null == t ? (t = 0) : t && (t = +t),
                    Kn(Jo(e).replace(Ae, ""), t || 0)
                  );
                }),
                (pr.random = function (e, t, n) {
                  if (
                    (n && "boolean" != typeof n && Vs(e, t, n) && (t = n = s),
                    n === s &&
                      ("boolean" == typeof t
                        ? ((n = t), (t = s))
                        : "boolean" == typeof e && ((n = e), (e = s))),
                    e === s && t === s
                      ? ((e = 0), (t = 1))
                      : ((e = Wo(e)), t === s ? ((t = e), (e = 0)) : (t = Wo(t))),
                    e > t)
                  ) {
                    var r = e;
                    (e = t), (t = r);
                  }
                  if (n || e % 1 || t % 1) {
                    var i = Zn();
                    return Vn(
                      e + i * (t - e + St("1e-" + ((i + "").length - 1))),
                      t
                    );
                  }
                  return ki(e, t);
                }),
                (pr.reduce = function (e, t, n) {
                  var r = go(e) ? nn : pn,
                    i = arguments.length < 3;
                  return r(e, $s(t, 4), n, i, Ir);
                }),
                (pr.reduceRight = function (e, t, n) {
                  var r = go(e) ? rn : pn,
                    i = arguments.length < 3;
                  return r(e, $s(t, 4), n, i, Wr);
                }),
                (pr.repeat = function (e, t, n) {
                  return (
                    (t = (n ? Vs(e, t, n) : t === s) ? 1 : zo(t)), wi(Jo(e), t)
                  );
                }),
                (pr.replace = function () {
                  var e = arguments,
                    t = Jo(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (pr.result = function (e, t, n) {
                  var r = -1,
                    i = (t = Vi(t, e)).length;
                  for (i || ((i = 1), (e = s)); ++r < i; ) {
                    var a = null == e ? s : e[da(t[r])];
                    a === s && ((r = i), (a = n)), (e = Yo(a) ? a.call(e) : a);
                  }
                  return e;
                }),
                (pr.round = Qu),
                (pr.runInContext = e),
                (pr.sample = function (e) {
                  return (go(e) ? Yr : Yi)(e);
                }),
                (pr.size = function (e) {
                  if (null == e) return 0;
                  if (Mo(e)) return Po(e) ? En(e) : e.length;
                  var t = zs(e);
                  return t == Z || t == re ? e.size : di(e).length;
                }),
                (pr.snakeCase = Lu),
                (pr.some = function (e, t, n) {
                  var r = go(e) ? sn : Ei;
                  return n && Vs(e, t, n) && (t = s), r(e, $s(t, 3));
                }),
                (pr.sortedIndex = function (e, t) {
                  return Hi(e, t);
                }),
                (pr.sortedIndexBy = function (e, t, n) {
                  return Ai(e, t, $s(n, 2));
                }),
                (pr.sortedIndexOf = function (e, t) {
                  var n = null == e ? 0 : e.length;
                  if (n) {
                    var r = Hi(e, t);
                    if (r < n && po(e[r], t)) return r;
                  }
                  return -1;
                }),
                (pr.sortedLastIndex = function (e, t) {
                  return Hi(e, t, !0);
                }),
                (pr.sortedLastIndexBy = function (e, t, n) {
                  return Ai(e, t, $s(n, 2), !0);
                }),
                (pr.sortedLastIndexOf = function (e, t) {
                  if (null != e && e.length) {
                    var n = Hi(e, t, !0) - 1;
                    if (po(e[n], t)) return n;
                  }
                  return -1;
                }),
                (pr.startCase = ku),
                (pr.startsWith = function (e, t, n) {
                  return (
                    (e = Jo(e)),
                    (n = null == n ? 0 : Pr(zo(n), 0, e.length)),
                    (t = Ri(t)),
                    e.slice(n, n + t.length) == t
                  );
                }),
                (pr.subtract = Xu),
                (pr.sum = function (e) {
                  return e && e.length ? hn(e, Ou) : 0;
                }),
                (pr.sumBy = function (e, t) {
                  return e && e.length ? hn(e, $s(t, 2)) : 0;
                }),
                (pr.template = function (e, t, n) {
                  var r = pr.templateSettings;
                  n && Vs(e, t, n) && (t = s), (e = Jo(e)), (t = Ko({}, t, r, Ts));
                  var i,
                    a,
                    o = Ko({}, t.imports, r.imports, Ts),
                    u = au(o),
                    c = bn(o, u),
                    d = 0,
                    f = t.interpolate || Ze,
                    _ = "__p += '",
                    m = nt(
                      (t.escape || Ze).source +
                        "|" +
                        f.source +
                        "|" +
                        (f === je ? ze : Ze).source +
                        "|" +
                        (t.evaluate || Ze).source +
                        "|$",
                      "g"
                    ),
                    p =
                      "//# sourceURL=" +
                      (ct.call(t, "sourceURL")
                        ? (t.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++Yt + "]") +
                      "\n";
                  e.replace(m, function (t, n, r, s, o, u) {
                    return (
                      r || (r = s),
                      (_ += e.slice(d, u).replace(Qe, Yn)),
                      n && ((i = !0), (_ += "' +\n__e(" + n + ") +\n'")),
                      o && ((a = !0), (_ += "';\n" + o + ";\n__p += '")),
                      r &&
                        (_ += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                      (d = u + t.length),
                      t
                    );
                  }),
                    (_ += "';\n");
                  var h = ct.call(t, "variable") && t.variable;
                  if (h) {
                    if (Ie.test(h)) throw new Pe(l);
                  } else _ = "with (obj) {\n" + _ + "\n}\n";
                  (_ = (a ? _.replace(be, "") : _)
                    .replace(Me, "$1")
                    .replace(Le, "$1;")),
                    (_ =
                      "function(" +
                      (h || "obj") +
                      ") {\n" +
                      (h ? "" : "obj || (obj = {});\n") +
                      "var __t, __p = ''" +
                      (i ? ", __e = _.escape" : "") +
                      (a
                        ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                        : ";\n") +
                      _ +
                      "return __p\n}");
                  var v = Tu(function () {
                    return Xe(u, p + "return " + _).apply(s, c);
                  });
                  if (((v.source = _), xo(v))) throw v;
                  return v;
                }),
                (pr.times = function (e, t) {
                  if ((e = zo(e)) < 1 || e > A) return [];
                  var n = R,
                    r = Vn(e, R);
                  (t = $s(t)), (e -= R);
                  for (var i = vn(r, t); ++n < e; ) t(n);
                  return i;
                }),
                (pr.toFinite = Wo),
                (pr.toInteger = zo),
                (pr.toLength = qo),
                (pr.toLower = function (e) {
                  return Jo(e).toLowerCase();
                }),
                (pr.toNumber = Bo),
                (pr.toSafeInteger = function (e) {
                  return e ? Pr(zo(e), -A, A) : 0 === e ? e : 0;
                }),
                (pr.toString = Jo),
                (pr.toUpper = function (e) {
                  return Jo(e).toUpperCase();
                }),
                (pr.trim = function (e, t, n) {
                  if ((e = Jo(e)) && (n || t === s)) return yn(e);
                  if (!e || !(t = Ri(t))) return e;
                  var r = Hn(e),
                    i = Hn(t);
                  return Ki(r, Ln(r, i), kn(r, i) + 1).join("");
                }),
                (pr.trimEnd = function (e, t, n) {
                  if ((e = Jo(e)) && (n || t === s)) return e.slice(0, An(e) + 1);
                  if (!e || !(t = Ri(t))) return e;
                  var r = Hn(e);
                  return Ki(r, 0, kn(r, Hn(t)) + 1).join("");
                }),
                (pr.trimStart = function (e, t, n) {
                  if ((e = Jo(e)) && (n || t === s)) return e.replace(Ae, "");
                  if (!e || !(t = Ri(t))) return e;
                  var r = Hn(e);
                  return Ki(r, Ln(r, Hn(t))).join("");
                }),
                (pr.truncate = function (e, t) {
                  var n = D,
                    r = j;
                  if (jo(t)) {
                    var i = "separator" in t ? t.separator : i;
                    (n = "length" in t ? zo(t.length) : n),
                      (r = "omission" in t ? Ri(t.omission) : r);
                  }
                  var a = (e = Jo(e)).length;
                  if (Tn(e)) {
                    var o = Hn(e);
                    a = o.length;
                  }
                  if (n >= a) return e;
                  var u = n - En(r);
                  if (u < 1) return r;
                  var l = o ? Ki(o, 0, u).join("") : e.slice(0, u);
                  if (i === s) return l + r;
                  if ((o && (u += l.length - u), Ho(i))) {
                    if (e.slice(u).search(i)) {
                      var c,
                        d = l;
                      for (
                        i.global || (i = nt(i.source, Jo(qe.exec(i)) + "g")),
                          i.lastIndex = 0;
                        (c = i.exec(d));
    
                      )
                        var f = c.index;
                      l = l.slice(0, f === s ? u : f);
                    }
                  } else if (e.indexOf(Ri(i), u) != u) {
                    var _ = l.lastIndexOf(i);
                    _ > -1 && (l = l.slice(0, _));
                  }
                  return l + r;
                }),
                (pr.unescape = function (e) {
                  return (e = Jo(e)) && xe.test(e) ? e.replace(ke, Pn) : e;
                }),
                (pr.uniqueId = function (e) {
                  var t = ++dt;
                  return Jo(e) + t;
                }),
                (pr.upperCase = wu),
                (pr.upperFirst = xu),
                (pr.each = Ua),
                (pr.eachRight = Ja),
                (pr.first = ba),
                Pu(
                  pr,
                  ((Ku = {}),
                  Gr(pr, function (e, t) {
                    ct.call(pr.prototype, t) || (Ku[t] = e);
                  }),
                  Ku),
                  { chain: !1 }
                ),
                (pr.VERSION = "4.17.21"),
                Vt(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    pr[e].placeholder = pr;
                  }
                ),
                Vt(["drop", "take"], function (e, t) {
                  (gr.prototype[e] = function (n) {
                    n = n === s ? 1 : Jn(zo(n), 0);
                    var r = this.__filtered__ && !t ? new gr(this) : this.clone();
                    return (
                      r.__filtered__
                        ? (r.__takeCount__ = Vn(n, r.__takeCount__))
                        : r.__views__.push({
                            size: Vn(n, R),
                            type: e + (r.__dir__ < 0 ? "Right" : ""),
                          }),
                      r
                    );
                  }),
                    (gr.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                Vt(["filter", "map", "takeWhile"], function (e, t) {
                  var n = t + 1,
                    r = n == O || 3 == n;
                  gr.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: $s(e, 3), type: n }),
                      (t.__filtered__ = t.__filtered__ || r),
                      t
                    );
                  };
                }),
                Vt(["head", "last"], function (e, t) {
                  var n = "take" + (t ? "Right" : "");
                  gr.prototype[e] = function () {
                    return this[n](1).value()[0];
                  };
                }),
                Vt(["initial", "tail"], function (e, t) {
                  var n = "drop" + (t ? "" : "Right");
                  gr.prototype[e] = function () {
                    return this.__filtered__ ? new gr(this) : this[n](1);
                  };
                }),
                (gr.prototype.compact = function () {
                  return this.filter(Ou);
                }),
                (gr.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (gr.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (gr.prototype.invokeMap = xi(function (e, t) {
                  return "function" == typeof e
                    ? new gr(this)
                    : this.map(function (n) {
                        return si(n, e, t);
                      });
                })),
                (gr.prototype.reject = function (e) {
                  return this.filter(lo($s(e)));
                }),
                (gr.prototype.slice = function (e, t) {
                  e = zo(e);
                  var n = this;
                  return n.__filtered__ && (e > 0 || t < 0)
                    ? new gr(n)
                    : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                      t !== s &&
                        (n = (t = zo(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                      n);
                }),
                (gr.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (gr.prototype.toArray = function () {
                  return this.take(R);
                }),
                Gr(gr.prototype, function (e, t) {
                  var n = /^(?:filter|find|map|reject)|While$/.test(t),
                    r = /^(?:head|last)$/.test(t),
                    i = pr[r ? "take" + ("last" == t ? "Right" : "") : t],
                    a = r || /^find/.test(t);
                  i &&
                    (pr.prototype[t] = function () {
                      var t = this.__wrapped__,
                        o = r ? [1] : arguments,
                        u = t instanceof gr,
                        l = o[0],
                        c = u || go(t),
                        d = function (e) {
                          var t = i.apply(pr, tn([e], o));
                          return r && f ? t[0] : t;
                        };
                      c &&
                        n &&
                        "function" == typeof l &&
                        1 != l.length &&
                        (u = c = !1);
                      var f = this.__chain__,
                        _ = !!this.__actions__.length,
                        m = a && !f,
                        p = u && !_;
                      if (!a && c) {
                        t = p ? t : new gr(this);
                        var h = e.apply(t, o);
                        return (
                          h.__actions__.push({ func: Ia, args: [d], thisArg: s }),
                          new yr(h, f)
                        );
                      }
                      return m && p
                        ? e.apply(this, o)
                        : ((h = this.thru(d)),
                          m ? (r ? h.value()[0] : h.value()) : h);
                    });
                }),
                Vt(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = st[e],
                      n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      r = /^(?:pop|shift)$/.test(e);
                    pr.prototype[e] = function () {
                      var e = arguments;
                      if (r && !this.__chain__) {
                        var i = this.value();
                        return t.apply(go(i) ? i : [], e);
                      }
                      return this[n](function (n) {
                        return t.apply(go(n) ? n : [], e);
                      });
                    };
                  }
                ),
                Gr(gr.prototype, function (e, t) {
                  var n = pr[t];
                  if (n) {
                    var r = n.name + "";
                    ct.call(ar, r) || (ar[r] = []),
                      ar[r].push({ name: t, func: n });
                  }
                }),
                (ar[ps(s, g).name] = [{ name: "wrapper", func: s }]),
                (gr.prototype.clone = function () {
                  var e = new gr(this.__wrapped__);
                  return (
                    (e.__actions__ = is(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = is(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = is(this.__views__)),
                    e
                  );
                }),
                (gr.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new gr(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()).__dir__ *= -1;
                  return e;
                }),
                (gr.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    n = go(e),
                    r = t < 0,
                    i = n ? e.length : 0,
                    s = (function (e, t, n) {
                      for (var r = -1, i = n.length; ++r < i; ) {
                        var s = n[r],
                          a = s.size;
                        switch (s.type) {
                          case "drop":
                            e += a;
                            break;
                          case "dropRight":
                            t -= a;
                            break;
                          case "take":
                            t = Vn(t, e + a);
                            break;
                          case "takeRight":
                            e = Jn(e, t - a);
                        }
                      }
                      return { start: e, end: t };
                    })(0, i, this.__views__),
                    a = s.start,
                    o = s.end,
                    u = o - a,
                    l = r ? o : a - 1,
                    c = this.__iteratees__,
                    d = c.length,
                    f = 0,
                    _ = Vn(u, this.__takeCount__);
                  if (!n || (!r && i == u && _ == u))
                    return zi(e, this.__actions__);
                  var m = [];
                  e: for (; u-- && f < _; ) {
                    for (var p = -1, h = e[(l += t)]; ++p < d; ) {
                      var v = c[p],
                        y = v.iteratee,
                        g = v.type,
                        b = y(h);
                      if (g == E) h = b;
                      else if (!b) {
                        if (g == O) continue e;
                        break e;
                      }
                    }
                    m[f++] = h;
                  }
                  return m;
                }),
                (pr.prototype.at = Wa),
                (pr.prototype.chain = function () {
                  return Fa(this);
                }),
                (pr.prototype.commit = function () {
                  return new yr(this.value(), this.__chain__);
                }),
                (pr.prototype.next = function () {
                  this.__values__ === s && (this.__values__ = Io(this.value()));
                  var e = this.__index__ >= this.__values__.length;
                  return {
                    done: e,
                    value: e ? s : this.__values__[this.__index__++],
                  };
                }),
                (pr.prototype.plant = function (e) {
                  for (var t, n = this; n instanceof vr; ) {
                    var r = _a(n);
                    (r.__index__ = 0),
                      (r.__values__ = s),
                      t ? (i.__wrapped__ = r) : (t = r);
                    var i = r;
                    n = n.__wrapped__;
                  }
                  return (i.__wrapped__ = e), t;
                }),
                (pr.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof gr) {
                    var t = e;
                    return (
                      this.__actions__.length && (t = new gr(this)),
                      (t = t.reverse()).__actions__.push({
                        func: Ia,
                        args: [Da],
                        thisArg: s,
                      }),
                      new yr(t, this.__chain__)
                    );
                  }
                  return this.thru(Da);
                }),
                (pr.prototype.toJSON =
                  pr.prototype.valueOf =
                  pr.prototype.value =
                    function () {
                      return zi(this.__wrapped__, this.__actions__);
                    }),
                (pr.prototype.first = pr.prototype.head),
                Rt &&
                  (pr.prototype[Rt] = function () {
                    return this;
                  }),
                pr
              );
            })();
            (Ht._ = $n),
              (i = function () {
                return $n;
              }.call(t, n, t, r)) === s || (r.exports = i);
          }).call(this);
        }).call(t, n(11), n(28)(e));
      },
      function (e, t, n) {
        var r;
        !(function (t, n) {
          "use strict";
          "object" == typeof e && "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error("jQuery requires a window with a document");
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (n, i) {
          "use strict";
          var s = [],
            a = Object.getPrototypeOf,
            o = s.slice,
            u = s.flat
              ? function (e) {
                  return s.flat.call(e);
                }
              : function (e) {
                  return s.concat.apply([], e);
                },
            l = s.push,
            c = s.indexOf,
            d = {},
            f = d.toString,
            _ = d.hasOwnProperty,
            m = _.toString,
            p = m.call(Object),
            h = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            g = n.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function M(e, t, n) {
            var r,
              i,
              s = (n = n || g).createElement("script");
            if (((s.text = e), t))
              for (r in b)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  s.setAttribute(r, i);
            n.head.appendChild(s).parentNode.removeChild(s);
          }
          function L(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[f.call(e)] || "object"
              : typeof e;
          }
          var k = function (e, t) {
            return new k.fn.init(e, t);
          };
          function w(e) {
            var t = !!e && "length" in e && e.length,
              n = L(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (k.fn = k.prototype =
            {
              jquery: "3.6.0",
              constructor: k,
              length: 0,
              toArray: function () {
                return o.call(this);
              },
              get: function (e) {
                return null == e
                  ? o.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = k.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return k.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  k.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(o.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  k.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  k.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: s.sort,
              splice: s.splice,
            }),
            (k.extend = k.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  s,
                  a = arguments[0] || {},
                  o = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof a && ((l = a), (a = arguments[o] || {}), o++),
                    "object" == typeof a || v(a) || (a = {}),
                    o === u && ((a = this), o--);
                  o < u;
                  o++
                )
                  if (null != (e = arguments[o]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = a[t]),
                              (s =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || k.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (a[t] = k.extend(l, s, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            k.extend({
              expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== f.call(e)) &&
                  (!(t = a(e)) ||
                    ("function" ==
                      typeof (n = _.call(t, "constructor") && t.constructor) &&
                      m.call(n) === p))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                M(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (w(e))
                  for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (w(Object(e))
                      ? k.merge(n, "string" == typeof e ? [e] : e)
                      : l.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, s = e.length, a = !n; i < s; i++)
                  !t(e[i], i) !== a && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  s = 0,
                  a = [];
                if (w(e))
                  for (r = e.length; s < r; s++)
                    null != (i = t(e[s], s, n)) && a.push(i);
                else for (s in e) null != (i = t(e[s], s, n)) && a.push(i);
                return u(a);
              },
              guid: 1,
              support: h,
            }),
            "function" == typeof Symbol &&
              (k.fn[Symbol.iterator] = s[Symbol.iterator]),
            k.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var x = (function (e) {
            var t,
              n,
              r,
              i,
              s,
              a,
              o,
              u,
              l,
              c,
              d,
              f,
              _,
              m,
              p,
              h,
              v,
              y,
              g,
              b = "sizzle" + 1 * new Date(),
              M = e.document,
              L = 0,
              k = 0,
              w = ue(),
              x = ue(),
              Y = ue(),
              T = ue(),
              D = function (e, t) {
                return e === t && (d = !0), 0;
              },
              j = {}.hasOwnProperty,
              S = [],
              C = S.pop,
              O = S.push,
              E = S.push,
              H = S.slice,
              A = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
              },
              P =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              $ = "[\\x20\\t\\r\\n\\f]",
              R =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                $ +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              N =
                "\\[" +
                $ +
                "*(" +
                R +
                ")(?:" +
                $ +
                "*([*^$|!~]?=)" +
                $ +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                R +
                "))|)" +
                $ +
                "*\\]",
              F =
                ":(" +
                R +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                N +
                ")*)|.*)\\)|)",
              I = new RegExp($ + "+", "g"),
              W = new RegExp(
                "^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$",
                "g"
              ),
              z = new RegExp("^" + $ + "*," + $ + "*"),
              q = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
              B = new RegExp($ + "|>"),
              U = new RegExp(F),
              J = new RegExp("^" + R + "$"),
              V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    $ +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    $ +
                    "*(?:([+-]|)" +
                    $ +
                    "*(\\d+)|))" +
                    $ +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    $ +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    $ +
                    "*((?:-\\d)?\\d*)" +
                    $ +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              G = /HTML$/i,
              K = /^(?:input|select|textarea|button)$/i,
              Z = /^h\d$/i,
              Q = /^[^{]+\{\s*\[native \w/,
              X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              se = function () {
                f();
              },
              ae = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              E.apply((S = H.call(M.childNodes)), M.childNodes),
                S[M.childNodes.length].nodeType;
            } catch (e) {
              E = {
                apply: S.length
                  ? function (e, t) {
                      O.apply(e, H.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function oe(e, t, r, i) {
              var s,
                o,
                l,
                c,
                d,
                m,
                v,
                y = t && t.ownerDocument,
                M = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== M && 9 !== M && 11 !== M))
              )
                return r;
              if (!i && (f(t), (t = t || _), p)) {
                if (11 !== M && (d = X.exec(e)))
                  if ((s = d[1])) {
                    if (9 === M) {
                      if (!(l = t.getElementById(s))) return r;
                      if (l.id === s) return r.push(l), r;
                    } else if (
                      y &&
                      (l = y.getElementById(s)) &&
                      g(t, l) &&
                      l.id === s
                    )
                      return r.push(l), r;
                  } else {
                    if (d[2]) return E.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (s = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return E.apply(r, t.getElementsByClassName(s)), r;
                  }
                if (
                  n.qsa &&
                  !T[e + " "] &&
                  (!h || !h.test(e)) &&
                  (1 !== M || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === M && (B.test(e) || q.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(re, ie))
                          : t.setAttribute("id", (c = b))),
                        o = (m = a(e)).length;
                      o--;
    
                    )
                      m[o] = (c ? "#" + c : ":scope") + " " + ge(m[o]);
                    v = m.join(",");
                  }
                  try {
                    return E.apply(r, y.querySelectorAll(v)), r;
                  } catch (t) {
                    T(e, !0);
                  } finally {
                    c === b && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace(W, "$1"), t, r, i);
            }
            function ue() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            }
            function le(e) {
              return (e[b] = !0), e;
            }
            function ce(e) {
              var t = _.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function de(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function fe(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function _e(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function me(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function pe(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function he(e) {
              return le(function (t) {
                return (
                  (t = +t),
                  le(function (n, r) {
                    for (var i, s = e([], n.length, t), a = s.length; a--; )
                      n[(i = s[a])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = oe.support = {}),
            (s = oe.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !G.test(t || (n && n.nodeName) || "HTML");
              }),
            (f = oe.setDocument =
              function (e) {
                var t,
                  i,
                  a = e ? e.ownerDocument || e : M;
                return a != _ && 9 === a.nodeType && a.documentElement
                  ? ((m = (_ = a).documentElement),
                    (p = !s(_)),
                    M != _ &&
                      (i = _.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", se, !1)
                        : i.attachEvent && i.attachEvent("onunload", se)),
                    (n.scope = ce(function (e) {
                      return (
                        m.appendChild(e).appendChild(_.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ce(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                      return (
                        e.appendChild(_.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = Q.test(_.getElementsByClassName)),
                    (n.getById = ce(function (e) {
                      return (
                        (m.appendChild(e).id = b),
                        !_.getElementsByName || !_.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && p) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && p) {
                            var n,
                              r,
                              i,
                              s = t.getElementById(e);
                            if (s) {
                              if ((n = s.getAttributeNode("id")) && n.value === e)
                                return [s];
                              for (
                                i = t.getElementsByName(e), r = 0;
                                (s = i[r++]);
    
                              )
                                if ((n = s.getAttributeNode("id")) && n.value === e)
                                  return [s];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            i = 0,
                            s = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = s[i++]); ) 1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return s;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && p)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (h = []),
                    (n.qsa = Q.test(_.querySelectorAll)) &&
                      (ce(function (e) {
                        var t;
                        (m.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            h.push("[*^$]=" + $ + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            h.push("\\[" + $ + "*(?:value|" + P + ")"),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            h.push("~="),
                          (t = _.createElement("input")).setAttribute("name", ""),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            h.push(
                              "\\[" + $ + "*name" + $ + "*=" + $ + "*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            h.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            h.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          h.push("[\\r\\n\\f]");
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = _.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            h.push("name" + $ + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            h.push(":enabled", ":disabled"),
                          (m.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            h.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          h.push(",.*:");
                      })),
                    (n.matchesSelector = Q.test(
                      (y =
                        m.matches ||
                        m.webkitMatchesSelector ||
                        m.mozMatchesSelector ||
                        m.oMatchesSelector ||
                        m.msMatchesSelector)
                    )) &&
                      ce(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", F);
                      }),
                    (h = h.length && new RegExp(h.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = Q.test(m.compareDocumentPosition)),
                    (g =
                      t || Q.test(m.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); ) if (t === e) return !0;
                            return !1;
                          }),
                    (D = t
                      ? function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var r =
                            !e.compareDocumentPosition - !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached && t.compareDocumentPosition(e) === r)
                              ? e == _ || (e.ownerDocument == M && g(M, e))
                                ? -1
                                : t == _ || (t.ownerDocument == M && g(M, t))
                                ? 1
                                : c
                                ? A(c, e) - A(c, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var n,
                            r = 0,
                            i = e.parentNode,
                            s = t.parentNode,
                            a = [e],
                            o = [t];
                          if (!i || !s)
                            return e == _
                              ? -1
                              : t == _
                              ? 1
                              : i
                              ? -1
                              : s
                              ? 1
                              : c
                              ? A(c, e) - A(c, t)
                              : 0;
                          if (i === s) return fe(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) o.unshift(n);
                          for (; a[r] === o[r]; ) r++;
                          return r
                            ? fe(a[r], o[r])
                            : a[r] == M
                            ? -1
                            : o[r] == M
                            ? 1
                            : 0;
                        }),
                    _)
                  : _;
              }),
            (oe.matches = function (e, t) {
              return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function (e, t) {
              if (
                (f(e),
                n.matchesSelector &&
                  p &&
                  !T[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!h || !h.test(t)))
              )
                try {
                  var r = y.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  T(t, !0);
                }
              return oe(t, _, null, [e]).length > 0;
            }),
            (oe.contains = function (e, t) {
              return (e.ownerDocument || e) != _ && f(e), g(e, t);
            }),
            (oe.attr = function (e, t) {
              (e.ownerDocument || e) != _ && f(e);
              var i = r.attrHandle[t.toLowerCase()],
                s =
                  i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : void 0;
              return void 0 !== s
                ? s
                : n.attributes || !p
                ? e.getAttribute(t)
                : (s = e.getAttributeNode(t)) && s.specified
                ? s.value
                : null;
            }),
            (oe.escape = function (e) {
              return (e + "").replace(re, ie);
            }),
            (oe.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (oe.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                s = 0;
              if (
                ((d = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(D),
                d)
              ) {
                for (; (t = e[s++]); ) t === e[s] && (i = r.push(s));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (c = null), e;
            }),
            (i = oe.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  s = e.nodeType;
                if (s) {
                  if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === s || 4 === s) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i(t);
                return n;
              }),
            ((r = oe.selectors =
              {
                cacheLength: 50,
                createPseudo: le,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || oe.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && oe.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return V.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            U.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = w[e + " "];
                    return (
                      t ||
                      ((t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) &&
                        w(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (r) {
                      var i = oe.attr(r, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(I, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      o = "of-type" === t;
                    return 1 === r && 0 === i
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var l,
                            c,
                            d,
                            f,
                            _,
                            m,
                            p = s !== a ? "nextSibling" : "previousSibling",
                            h = t.parentNode,
                            v = o && t.nodeName.toLowerCase(),
                            y = !u && !o,
                            g = !1;
                          if (h) {
                            if (s) {
                              for (; p; ) {
                                for (f = t; (f = f[p]); )
                                  if (
                                    o
                                      ? f.nodeName.toLowerCase() === v
                                      : 1 === f.nodeType
                                  )
                                    return !1;
                                m = p = "only" === e && !m && "nextSibling";
                              }
                              return !0;
                            }
                            if (((m = [a ? h.firstChild : h.lastChild]), a && y)) {
                              for (
                                g =
                                  (_ =
                                    (l =
                                      (c =
                                        (d = (f = h)[b] || (f[b] = {}))[
                                          f.uniqueID
                                        ] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                                      L && l[1]) && l[2],
                                  f = _ && h.childNodes[_];
                                (f = (++_ && f && f[p]) || (g = _ = 0) || m.pop());
    
                              )
                                if (1 === f.nodeType && ++g && f === t) {
                                  c[e] = [L, _, g];
                                  break;
                                }
                            } else if (
                              (y &&
                                (g = _ =
                                  (l =
                                    (c =
                                      (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] ||
                                      (d[f.uniqueID] = {}))[e] || [])[0] === L &&
                                  l[1]),
                              !1 === g)
                            )
                              for (
                                ;
                                (f =
                                  (++_ && f && f[p]) || (g = _ = 0) || m.pop()) &&
                                ((o
                                  ? f.nodeName.toLowerCase() !== v
                                  : 1 !== f.nodeType) ||
                                  !++g ||
                                  (y &&
                                    ((c =
                                      (d = f[b] || (f[b] = {}))[f.uniqueID] ||
                                      (d[f.uniqueID] = {}))[e] = [L, g]),
                                  f !== t));
    
                              );
                            return (g -= i) === r || (g % r == 0 && g / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        oe.error("unsupported pseudo: " + e);
                    return i[b]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? le(function (e, n) {
                              for (var r, s = i(e, t), a = s.length; a--; )
                                e[(r = A(e, s[a]))] = !(n[r] = s[a]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: le(function (e) {
                    var t = [],
                      n = [],
                      r = o(e.replace(W, "$1"));
                    return r[b]
                      ? le(function (e, t, n, i) {
                          for (var s, a = r(e, null, i, []), o = e.length; o--; )
                            (s = a[o]) && (e[o] = !(t[o] = s));
                        })
                      : function (e, i, s) {
                          return (
                            (t[0] = e), r(t, null, s, n), (t[0] = null), !n.pop()
                          );
                        };
                  }),
                  has: le(function (e) {
                    return function (t) {
                      return oe(e, t).length > 0;
                    };
                  }),
                  contains: le(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: le(function (e) {
                    return (
                      J.test(e || "") || oe.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = p
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === m;
                  },
                  focus: function (e) {
                    return (
                      e === _.activeElement &&
                      (!_.hasFocus || _.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: pe(!1),
                  disabled: pe(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Z.test(e.nodeName);
                  },
                  input: function (e) {
                    return K.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: he(function () {
                    return [0];
                  }),
                  last: he(function (e, t) {
                    return [t - 1];
                  }),
                  eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = _e(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = me(t);
            function ye() {}
            function ge(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function be(e, t, n) {
              var r = t.dir,
                i = t.next,
                s = i || r,
                a = n && "parentNode" === s,
                o = k++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      d,
                      f = [L, o];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (d = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((l = c[s]) && l[0] === L && l[1] === o)
                              return (f[2] = l[2]);
                            if (((c[s] = f), (f[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function Me(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Le(e, t, n, r, i) {
              for (var s, a = [], o = 0, u = e.length, l = null != t; o < u; o++)
                (s = e[o]) && ((n && !n(s, r, i)) || (a.push(s), l && t.push(o)));
              return a;
            }
            function ke(e, t, n, r, i, s) {
              return (
                r && !r[b] && (r = ke(r)),
                i && !i[b] && (i = ke(i, s)),
                le(function (s, a, o, u) {
                  var l,
                    c,
                    d,
                    f = [],
                    _ = [],
                    m = a.length,
                    p =
                      s ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                        return n;
                      })(t || "*", o.nodeType ? [o] : o, []),
                    h = !e || (!s && t) ? p : Le(p, f, e, o, u),
                    v = n ? (i || (s ? e : m || r) ? [] : a) : h;
                  if ((n && n(h, v, o, u), r))
                    for (l = Le(v, _), r(l, [], o, u), c = l.length; c--; )
                      (d = l[c]) && (v[_[c]] = !(h[_[c]] = d));
                  if (s) {
                    if (i || e) {
                      if (i) {
                        for (l = [], c = v.length; c--; )
                          (d = v[c]) && l.push((h[c] = d));
                        i(null, (v = []), l, u);
                      }
                      for (c = v.length; c--; )
                        (d = v[c]) &&
                          (l = i ? A(s, d) : f[c]) > -1 &&
                          (s[l] = !(a[l] = d));
                    }
                  } else (v = Le(v === a ? v.splice(m, v.length) : v)), i ? i(null, a, v, u) : E.apply(a, v);
                })
              );
            }
            function we(e) {
              for (
                var t,
                  n,
                  i,
                  s = e.length,
                  a = r.relative[e[0].type],
                  o = a || r.relative[" "],
                  u = a ? 1 : 0,
                  c = be(
                    function (e) {
                      return e === t;
                    },
                    o,
                    !0
                  ),
                  d = be(
                    function (e) {
                      return A(t, e) > -1;
                    },
                    o,
                    !0
                  ),
                  f = [
                    function (e, n, r) {
                      var i =
                        (!a && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                      return (t = null), i;
                    },
                  ];
                u < s;
                u++
              )
                if ((n = r.relative[e[u].type])) f = [be(Me(f), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (i = ++u; i < s && !r.relative[e[i].type]; i++);
                    return ke(
                      u > 1 && Me(f),
                      u > 1 &&
                        ge(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(W, "$1"),
                      n,
                      u < i && we(e.slice(u, i)),
                      i < s && we((e = e.slice(i))),
                      i < s && ge(e)
                    );
                  }
                  f.push(n);
                }
              return Me(f);
            }
            return (
              (ye.prototype = r.filters = r.pseudos),
              (r.setFilters = new ye()),
              (a = oe.tokenize =
                function (e, t) {
                  var n,
                    i,
                    s,
                    a,
                    o,
                    u,
                    l,
                    c = x[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (o = e, u = [], l = r.preFilter; o; ) {
                    for (a in ((n && !(i = z.exec(o))) ||
                      (i && (o = o.slice(i[0].length) || o), u.push((s = []))),
                    (n = !1),
                    (i = q.exec(o)) &&
                      ((n = i.shift()),
                      s.push({ value: n, type: i[0].replace(W, " ") }),
                      (o = o.slice(n.length))),
                    r.filter))
                      !(i = V[a].exec(o)) ||
                        (l[a] && !(i = l[a](i))) ||
                        ((n = i.shift()),
                        s.push({ value: n, type: a, matches: i }),
                        (o = o.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? o.length : o ? oe.error(e) : x(e, u).slice(0);
                }),
              (o = oe.compile =
                function (e, t) {
                  var n,
                    i = [],
                    s = [],
                    o = Y[e + " "];
                  if (!o) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (o = we(t[n]))[b] ? i.push(o) : s.push(o);
                    (o = Y(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          s = function (s, a, o, u, c) {
                            var d,
                              m,
                              h,
                              v = 0,
                              y = "0",
                              g = s && [],
                              b = [],
                              M = l,
                              k = s || (i && r.find.TAG("*", c)),
                              w = (L += null == M ? 1 : Math.random() || 0.1),
                              x = k.length;
                            for (
                              c && (l = a == _ || a || c);
                              y !== x && null != (d = k[y]);
                              y++
                            ) {
                              if (i && d) {
                                for (
                                  m = 0,
                                    a || d.ownerDocument == _ || (f(d), (o = !p));
                                  (h = e[m++]);
    
                                )
                                  if (h(d, a || _, o)) {
                                    u.push(d);
                                    break;
                                  }
                                c && (L = w);
                              }
                              n && ((d = !h && d) && v--, s && g.push(d));
                            }
                            if (((v += y), n && y !== v)) {
                              for (m = 0; (h = t[m++]); ) h(g, b, a, o);
                              if (s) {
                                if (v > 0)
                                  for (; y--; ) g[y] || b[y] || (b[y] = C.call(u));
                                b = Le(b);
                              }
                              E.apply(u, b),
                                c &&
                                  !s &&
                                  b.length > 0 &&
                                  v + t.length > 1 &&
                                  oe.uniqueSort(u);
                            }
                            return c && ((L = w), (l = M)), g;
                          };
                        return n ? le(s) : s;
                      })(s, i)
                    )).selector = e;
                  }
                  return o;
                }),
              (u = oe.select =
                function (e, t, n, i) {
                  var s,
                    u,
                    l,
                    c,
                    d,
                    f = "function" == typeof e && e,
                    _ = !i && a((e = f.selector || e));
                  if (((n = n || []), 1 === _.length)) {
                    if (
                      (u = _[0] = _[0].slice(0)).length > 2 &&
                      "ID" === (l = u[0]).type &&
                      9 === t.nodeType &&
                      p &&
                      r.relative[u[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])
                      )
                        return n;
                      f && (t = t.parentNode),
                        (e = e.slice(u.shift().value.length));
                    }
                    for (
                      s = V.needsContext.test(e) ? 0 : u.length;
                      s-- && ((l = u[s]), !r.relative[(c = l.type)]);
    
                    )
                      if (
                        (d = r.find[c]) &&
                        (i = d(
                          l.matches[0].replace(te, ne),
                          (ee.test(u[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((u.splice(s, 1), !(e = i.length && ge(u))))
                          return E.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (f || o(e, _))(
                      i,
                      t,
                      !p,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(D).join("") === b),
              (n.detectDuplicates = !!d),
              f(),
              (n.sortDetached = ce(function (e) {
                return 1 & e.compareDocumentPosition(_.createElement("fieldset"));
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                de("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                de("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                de(P, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              oe
            );
          })(n);
          (k.find = x),
            (k.expr = x.selectors),
            (k.expr[":"] = k.expr.pseudos),
            (k.uniqueSort = k.unique = x.uniqueSort),
            (k.text = x.getText),
            (k.isXMLDoc = x.isXML),
            (k.contains = x.contains),
            (k.escapeSelector = x.escape);
          var Y = function (e, t, n) {
              for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                  if (i && k(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            T = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            D = k.expr.match.needsContext;
          function j(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function C(e, t, n) {
            return v(t)
              ? k.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? k.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? k.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : k.filter(t, e, n);
          }
          (k.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? k.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : k.find.matches(
                    e,
                    k.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            k.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    k(e).filter(function () {
                      for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
                return r > 1 ? k.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(C(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(C(this, e || [], !0));
              },
              is: function (e) {
                return !!C(
                  this,
                  "string" == typeof e && D.test(e) ? k(e) : e || [],
                  !1
                ).length;
              },
            });
          var O,
            E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((k.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || O), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : E.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof k ? t[0] : t),
                  k.merge(
                    this,
                    k.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : g,
                      !0
                    )
                  ),
                  S.test(r[1]) && k.isPlainObject(t))
                )
                  for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (i = g.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(k)
              : k.makeArray(e, this);
          }).prototype = k.fn),
            (O = k(g));
          var H = /^(?:parents|prev(?:Until|All))/,
            A = { children: !0, contents: !0, next: !0, prev: !0 };
          function P(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          k.fn.extend({
            has: function (e) {
              var t = k(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                s = [],
                a = "string" != typeof e && k(e);
              if (!D.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && k.find.matchesSelector(n, e))
                    ) {
                      s.push(n);
                      break;
                    }
              return this.pushStack(s.length > 1 ? k.uniqueSort(s) : s);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(k(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            k.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return Y(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return Y(e, "parentNode", n);
                },
                next: function (e) {
                  return P(e, "nextSibling");
                },
                prev: function (e) {
                  return P(e, "previousSibling");
                },
                nextAll: function (e) {
                  return Y(e, "nextSibling");
                },
                prevAll: function (e) {
                  return Y(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return Y(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return Y(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return T((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return T(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (j(e, "template") && (e = e.content || e),
                      k.merge([], e.childNodes));
                },
              },
              function (e, t) {
                k.fn[e] = function (n, r) {
                  var i = k.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = k.filter(r, i)),
                    this.length > 1 &&
                      (A[e] || k.uniqueSort(i), H.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var $ = /[^\x20\t\r\n\f]+/g;
          function R(e) {
            return e;
          }
          function N(e) {
            throw e;
          }
          function F(e, t, n, r) {
            var i;
            try {
              e && v((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && v((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (k.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      k.each(e.match($) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : k.extend({}, e);
            var t,
              n,
              r,
              i,
              s = [],
              a = [],
              o = -1,
              u = function () {
                for (i = i || e.once, r = t = !0; a.length; o = -1)
                  for (n = a.shift(); ++o < s.length; )
                    !1 === s[o].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((o = s.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (s = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    s &&
                      (n && !t && ((o = s.length - 1), a.push(n)),
                      (function t(n) {
                        k.each(n, function (n, r) {
                          v(r)
                            ? (e.unique && l.has(r)) || s.push(r)
                            : r && r.length && "string" !== L(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    k.each(arguments, function (e, t) {
                      for (var n; (n = k.inArray(t, s, n)) > -1; )
                        s.splice(n, 1), n <= o && o--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? k.inArray(e, s) > -1 : s.length > 0;
                },
                empty: function () {
                  return s && (s = []), this;
                },
                disable: function () {
                  return (i = a = []), (s = n = ""), this;
                },
                disabled: function () {
                  return !s;
                },
                lock: function () {
                  return (i = a = []), n || t || (s = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            k.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      k.Callbacks("memory"),
                      k.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      k.Callbacks("once memory"),
                      k.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      k.Callbacks("once memory"),
                      k.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  r = "pending",
                  i = {
                    state: function () {
                      return r;
                    },
                    always: function () {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return k
                        .Deferred(function (n) {
                          k.each(t, function (t, r) {
                            var i = v(e[r[4]]) && e[r[4]];
                            s[r[1]](function () {
                              var e = i && i.apply(this, arguments);
                              e && v(e.promise)
                                ? e
                                    .promise()
                                    .progress(n.notify)
                                    .done(n.resolve)
                                    .fail(n.reject)
                                : n[r[0] + "With"](this, i ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        })
                        .promise();
                    },
                    then: function (e, r, i) {
                      var s = 0;
                      function a(e, t, r, i) {
                        return function () {
                          var o = this,
                            u = arguments,
                            l = function () {
                              var n, l;
                              if (!(e < s)) {
                                if ((n = r.apply(o, u)) === t.promise())
                                  throw new TypeError("Thenable self-resolution");
                                (l =
                                  n &&
                                  ("object" == typeof n ||
                                    "function" == typeof n) &&
                                  n.then),
                                  v(l)
                                    ? i
                                      ? l.call(n, a(s, t, R, i), a(s, t, N, i))
                                      : (s++,
                                        l.call(
                                          n,
                                          a(s, t, R, i),
                                          a(s, t, N, i),
                                          a(s, t, R, t.notifyWith)
                                        ))
                                    : (r !== R && ((o = void 0), (u = [n])),
                                      (i || t.resolveWith)(o, u));
                              }
                            },
                            c = i
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (n) {
                                    k.Deferred.exceptionHook &&
                                      k.Deferred.exceptionHook(n, c.stackTrace),
                                      e + 1 >= s &&
                                        (r !== N && ((o = void 0), (u = [n])),
                                        t.rejectWith(o, u));
                                  }
                                };
                          e
                            ? c()
                            : (k.Deferred.getStackHook &&
                                (c.stackTrace = k.Deferred.getStackHook()),
                              n.setTimeout(c));
                        };
                      }
                      return k
                        .Deferred(function (n) {
                          t[0][3].add(a(0, n, v(i) ? i : R, n.notifyWith)),
                            t[1][3].add(a(0, n, v(e) ? e : R)),
                            t[2][3].add(a(0, n, v(r) ? r : N));
                        })
                        .promise();
                    },
                    promise: function (e) {
                      return null != e ? k.extend(e, i) : i;
                    },
                  },
                  s = {};
                return (
                  k.each(t, function (e, n) {
                    var a = n[2],
                      o = n[5];
                    (i[n[1]] = a.add),
                      o &&
                        a.add(
                          function () {
                            r = o;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(n[3].fire),
                      (s[n[0]] = function () {
                        return (
                          s[n[0] + "With"](this === s ? void 0 : this, arguments),
                          this
                        );
                      }),
                      (s[n[0] + "With"] = a.fireWith);
                  }),
                  i.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = o.call(arguments),
                  s = k.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? o.call(arguments) : n),
                        --t || s.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (F(e, s.done(a(n)).resolve, s.reject, !t),
                  "pending" === s.state() || v(i[n] && i[n].then))
                )
                  return s.then();
                for (; n--; ) F(i[n], a(n), s.reject);
                return s.promise();
              },
            });
          var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (k.Deferred.exceptionHook = function (e, t) {
            n.console &&
              n.console.warn &&
              e &&
              I.test(e.name) &&
              n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
          }),
            (k.readyException = function (e) {
              n.setTimeout(function () {
                throw e;
              });
            });
          var W = k.Deferred();
          function z() {
            g.removeEventListener("DOMContentLoaded", z),
              n.removeEventListener("load", z),
              k.ready();
          }
          (k.fn.ready = function (e) {
            return (
              W.then(e).catch(function (e) {
                k.readyException(e);
              }),
              this
            );
          }),
            k.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --k.readyWait : k.isReady) ||
                  ((k.isReady = !0),
                  (!0 !== e && --k.readyWait > 0) || W.resolveWith(g, [k]));
              },
            }),
            (k.ready.then = W.then),
            "complete" === g.readyState ||
            ("loading" !== g.readyState && !g.documentElement.doScroll)
              ? n.setTimeout(k.ready)
              : (g.addEventListener("DOMContentLoaded", z),
                n.addEventListener("load", z));
          var q = function (e, t, n, r, i, s, a) {
              var o = 0,
                u = e.length,
                l = null == n;
              if ("object" === L(n))
                for (o in ((i = !0), n)) q(e, t, o, n[o], !0, s, a);
              else if (
                void 0 !== r &&
                ((i = !0),
                v(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(k(e), n);
                      }))),
                t)
              )
                for (; o < u; o++) t(e[o], n, a ? r : r.call(e[o], o, t(e[o], n)));
              return i ? e : l ? t.call(e) : u ? t(e[0], n) : s;
            },
            B = /^-ms-/,
            U = /-([a-z])/g;
          function J(e, t) {
            return t.toUpperCase();
          }
          function V(e) {
            return e.replace(B, "ms-").replace(U, J);
          }
          var G = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function K() {
            this.expando = k.expando + K.uid++;
          }
          (K.uid = 1),
            (K.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    G(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[V(t)] = n;
                else for (r in t) i[V(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][V(t)];
              },
              access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(V)
                      : (t = V(t)) in r
                      ? [t]
                      : t.match($) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || k.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !k.isEmptyObject(t);
              },
            });
          var Z = new K(),
            Q = new K(),
            X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;
          function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : X.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Q.set(e, t, n);
              } else n = void 0;
            return n;
          }
          k.extend({
            hasData: function (e) {
              return Q.hasData(e) || Z.hasData(e);
            },
            data: function (e, t, n) {
              return Q.access(e, t, n);
            },
            removeData: function (e, t) {
              Q.remove(e, t);
            },
            _data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            _removeData: function (e, t) {
              Z.remove(e, t);
            },
          }),
            k.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  s = this[0],
                  a = s && s.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = Q.get(s)), 1 === s.nodeType && !Z.get(s, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = V(r.slice(5))), te(s, r, i[r]));
                    Z.set(s, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Q.set(this, e);
                    })
                  : q(
                      this,
                      function (t) {
                        var n;
                        if (s && void 0 === t)
                          return void 0 !== (n = Q.get(s, e))
                            ? n
                            : void 0 !== (n = te(s, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Q.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Q.remove(this, e);
                });
              },
            }),
            k.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = Z.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = Z.access(e, t, k.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = k.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  s = k._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete s.stop,
                    i.call(
                      e,
                      function () {
                        k.dequeue(e, t);
                      },
                      s
                    )),
                  !r && s && s.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Z.get(e, n) ||
                  Z.access(e, n, {
                    empty: k.Callbacks("once memory").add(function () {
                      Z.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            k.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? k.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = k.queue(this, e, t);
                        k._queueHooks(this, e),
                          "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  k.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = k.Deferred(),
                  s = this,
                  a = this.length,
                  o = function () {
                    --r || i.resolveWith(s, [s]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                  a--;
    
                )
                  (n = Z.get(s[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(o));
                return o(), i.promise(t);
              },
            });
          var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            se = g.documentElement,
            ae = function (e) {
              return k.contains(e.ownerDocument, e);
            },
            oe = { composed: !0 };
          se.getRootNode &&
            (ae = function (e) {
              return (
                k.contains(e.ownerDocument, e) ||
                e.getRootNode(oe) === e.ownerDocument
              );
            });
          var ue = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display && ae(e) && "none" === k.css(e, "display"))
            );
          };
          function le(e, t, n, r) {
            var i,
              s,
              a = 20,
              o = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return k.css(e, t, "");
                  },
              u = o(),
              l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (k.cssNumber[t] || ("px" !== l && +u)) &&
                re.exec(k.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                k.style(e, t, c + l),
                  (1 - s) * (1 - (s = o() / u || 0.5)) <= 0 && (a = 0),
                  (c /= s);
              (c *= 2), k.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          }
          var ce = {};
          function de(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = ce[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = k.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (ce[r] = i),
              i)
            );
          }
          function fe(e, t) {
            for (var n, r, i = [], s = 0, a = e.length; s < a; s++)
              (r = e[s]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((i[s] = Z.get(r, "display") || null),
                      i[s] || (r.style.display = "")),
                    "" === r.style.display && ue(r) && (i[s] = de(r)))
                  : "none" !== n && ((i[s] = "none"), Z.set(r, "display", n)));
            for (s = 0; s < a; s++) null != i[s] && (e[s].style.display = i[s]);
            return e;
          }
          k.fn.extend({
            show: function () {
              return fe(this, !0);
            },
            hide: function () {
              return fe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ue(this) ? k(this).show() : k(this).hide();
                  });
            },
          });
          var _e,
            me,
            pe = /^(?:checkbox|radio)$/i,
            he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i;
          (_e = g.createDocumentFragment().appendChild(g.createElement("div"))),
            (me = g.createElement("input")).setAttribute("type", "radio"),
            me.setAttribute("checked", "checked"),
            me.setAttribute("name", "t"),
            _e.appendChild(me),
            (h.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (_e.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue),
            (_e.innerHTML = "<option></option>"),
            (h.option = !!_e.lastChild);
          var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function ge(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && j(e, t)) ? k.merge([e], n) : n
            );
          }
          function be(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
          }
          (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
            (ye.th = ye.td),
            h.option ||
              (ye.optgroup = ye.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Me = /<|&#?\w+;/;
          function Le(e, t, n, r, i) {
            for (
              var s,
                a,
                o,
                u,
                l,
                c,
                d = t.createDocumentFragment(),
                f = [],
                _ = 0,
                m = e.length;
              _ < m;
              _++
            )
              if ((s = e[_]) || 0 === s)
                if ("object" === L(s)) k.merge(f, s.nodeType ? [s] : s);
                else if (Me.test(s)) {
                  for (
                    a = a || d.appendChild(t.createElement("div")),
                      o = (he.exec(s) || ["", ""])[1].toLowerCase(),
                      u = ye[o] || ye._default,
                      a.innerHTML = u[1] + k.htmlPrefilter(s) + u[2],
                      c = u[0];
                    c--;
    
                  )
                    a = a.lastChild;
                  k.merge(f, a.childNodes), ((a = d.firstChild).textContent = "");
                } else f.push(t.createTextNode(s));
            for (d.textContent = "", _ = 0; (s = f[_++]); )
              if (r && k.inArray(s, r) > -1) i && i.push(s);
              else if (
                ((l = ae(s)), (a = ge(d.appendChild(s), "script")), l && be(a), n)
              )
                for (c = 0; (s = a[c++]); ) ve.test(s.type || "") && n.push(s);
            return d;
          }
          var ke = /^([^.]*)(?:\.(.+)|)/;
          function we() {
            return !0;
          }
          function xe() {
            return !1;
          }
          function Ye(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return g.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Te(e, t, n, r, i, s) {
            var a, o;
            if ("object" == typeof t) {
              for (o in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
                Te(e, o, n, r, t[o], s);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = xe;
            else if (!i) return e;
            return (
              1 === s &&
                ((a = i),
                ((i = function (e) {
                  return k().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = k.guid++))),
              e.each(function () {
                k.event.add(this, t, i, r, n);
              })
            );
          }
          function De(e, t, n) {
            n
              ? (Z.set(e, t, !1),
                k.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      s = Z.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (s.length)
                        (k.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((s = o.call(arguments)),
                        Z.set(this, t, s),
                        (r = n(this, t)),
                        this[t](),
                        s !== (i = Z.get(this, t)) || r
                          ? Z.set(this, t, !1)
                          : (i = {}),
                        s !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i && i.value
                        );
                    } else
                      s.length &&
                        (Z.set(this, t, {
                          value: k.event.trigger(
                            k.extend(s[0], k.Event.prototype),
                            s.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Z.get(e, t) && k.event.add(e, t, we);
          }
          (k.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var s,
                a,
                o,
                u,
                l,
                c,
                d,
                f,
                _,
                m,
                p,
                h = Z.get(e);
              if (G(e))
                for (
                  n.handler && ((n = (s = n).handler), (i = s.selector)),
                    i && k.find.matchesSelector(se, i),
                    n.guid || (n.guid = k.guid++),
                    (u = h.events) || (u = h.events = Object.create(null)),
                    (a = h.handle) ||
                      (a = h.handle =
                        function (t) {
                          return void 0 !== k && k.event.triggered !== t.type
                            ? k.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || "").match($) || [""]).length;
                  l--;
    
                )
                  (_ = p = (o = ke.exec(t[l]) || [])[1]),
                    (m = (o[2] || "").split(".").sort()),
                    _ &&
                      ((d = k.event.special[_] || {}),
                      (_ = (i ? d.delegateType : d.bindType) || _),
                      (d = k.event.special[_] || {}),
                      (c = k.extend(
                        {
                          type: _,
                          origType: p,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && k.expr.match.needsContext.test(i),
                          namespace: m.join("."),
                        },
                        s
                      )),
                      (f = u[_]) ||
                        (((f = u[_] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, r, m, a)) ||
                          (e.addEventListener && e.addEventListener(_, a))),
                      d.add &&
                        (d.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                      (k.event.global[_] = !0));
            },
            remove: function (e, t, n, r, i) {
              var s,
                a,
                o,
                u,
                l,
                c,
                d,
                f,
                _,
                m,
                p,
                h = Z.hasData(e) && Z.get(e);
              if (h && (u = h.events)) {
                for (l = (t = (t || "").match($) || [""]).length; l--; )
                  if (
                    ((_ = p = (o = ke.exec(t[l]) || [])[1]),
                    (m = (o[2] || "").split(".").sort()),
                    _)
                  ) {
                    for (
                      d = k.event.special[_] || {},
                        f = u[(_ = (r ? d.delegateType : d.bindType) || _)] || [],
                        o =
                          o[2] &&
                          new RegExp(
                            "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = s = f.length;
                      s--;
    
                    )
                      (c = f[s]),
                        (!i && p !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (o && !o.test(c.namespace)) ||
                          (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                          (f.splice(s, 1),
                          c.selector && f.delegateCount--,
                          d.remove && d.remove.call(e, c));
                    a &&
                      !f.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, m, h.handle)) ||
                        k.removeEvent(e, _, h.handle),
                      delete u[_]);
                  } else for (_ in u) k.event.remove(e, _ + t[l], n, r, !0);
                k.isEmptyObject(u) && Z.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                s,
                a,
                o = new Array(arguments.length),
                u = k.event.fix(e),
                l = (Z.get(this, "events") || Object.create(null))[u.type] || [],
                c = k.event.special[u.type] || {};
              for (o[0] = u, t = 1; t < arguments.length; t++) o[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  a = k.event.handlers.call(this, u, l), t = 0;
                  (i = a[t++]) && !u.isPropagationStopped();
    
                )
                  for (
                    u.currentTarget = i.elem, n = 0;
                    (s = i.handlers[n++]) && !u.isImmediatePropagationStopped();
    
                  )
                    (u.rnamespace &&
                      !1 !== s.namespace &&
                      !u.rnamespace.test(s.namespace)) ||
                      ((u.handleObj = s),
                      (u.data = s.data),
                      void 0 !==
                        (r = (
                          (k.event.special[s.origType] || {}).handle || s.handler
                        ).apply(i.elem, o)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                s,
                a,
                o = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ("click" !== e.type || !0 !== l.disabled)
                  ) {
                    for (s = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(i = (r = t[n]).selector + " ")] &&
                        (a[i] = r.needsContext
                          ? k(i, this).index(l) > -1
                          : k.find(i, this, null, [l]).length),
                        a[i] && s.push(r);
                    s.length && o.push({ elem: l, handlers: s });
                  }
              return (
                (l = this),
                u < t.length && o.push({ elem: l, handlers: t.slice(u) }),
                o
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(k.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[k.expando] ? e : new k.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    pe.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      De(t, "click", we),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    pe.test(t.type) && t.click && j(t, "input") && De(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (pe.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      Z.get(t, "click")) ||
                    j(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (k.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (k.Event = function (e, t) {
              if (!(this instanceof k.Event)) return new k.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? we
                      : xe),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && k.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[k.expando] = !0);
            }),
            (k.Event.prototype = {
              constructor: k.Event,
              isDefaultPrevented: xe,
              isPropagationStopped: xe,
              isImmediatePropagationStopped: xe,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = we),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = we),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = we),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            k.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              k.event.addProp
            ),
            k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              k.event.special[e] = {
                setup: function () {
                  return De(this, e, Ye), !1;
                },
                trigger: function () {
                  return De(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            k.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                k.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (r && (r === this || k.contains(this, r))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            k.fn.extend({
              on: function (e, t, n, r) {
                return Te(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Te(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    k(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                  !1 === n && (n = xe),
                  this.each(function () {
                    k.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var je = /<script|<style|<link/i,
            Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Oe(e, t) {
            return (
              (j(e, "table") &&
                j(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                k(e).children("tbody")[0]) ||
              e
            );
          }
          function Ee(e) {
            return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
          }
          function He(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Ae(e, t) {
            var n, r, i, s, a, o;
            if (1 === t.nodeType) {
              if (Z.hasData(e) && (o = Z.get(e).events))
                for (i in (Z.remove(t, "handle events"), o))
                  for (n = 0, r = o[i].length; n < r; n++)
                    k.event.add(t, i, o[i][n]);
              Q.hasData(e) &&
                ((s = Q.access(e)), (a = k.extend({}, s)), Q.set(t, a));
            }
          }
          function Pe(e, t, n, r) {
            t = u(t);
            var i,
              s,
              a,
              o,
              l,
              c,
              d = 0,
              f = e.length,
              _ = f - 1,
              m = t[0],
              p = v(m);
            if (p || (f > 1 && "string" == typeof m && !h.checkClone && Se.test(m)))
              return e.each(function (i) {
                var s = e.eq(i);
                p && (t[0] = m.call(this, i, s.html())), Pe(s, t, n, r);
              });
            if (
              f &&
              ((s = (i = Le(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === i.childNodes.length && (i = s),
              s || r)
            ) {
              for (o = (a = k.map(ge(i, "script"), Ee)).length; d < f; d++)
                (l = i),
                  d !== _ &&
                    ((l = k.clone(l, !0, !0)), o && k.merge(a, ge(l, "script"))),
                  n.call(e[d], l, d);
              if (o)
                for (
                  c = a[a.length - 1].ownerDocument, k.map(a, He), d = 0;
                  d < o;
                  d++
                )
                  (l = a[d]),
                    ve.test(l.type || "") &&
                      !Z.access(l, "globalEval") &&
                      k.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? k._evalUrl &&
                          !l.noModule &&
                          k._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute("nonce") },
                            c
                          )
                        : M(l.textContent.replace(Ce, ""), l, c));
            }
            return e;
          }
          function $e(e, t, n) {
            for (var r, i = t ? k.filter(t, e) : e, s = 0; null != (r = i[s]); s++)
              n || 1 !== r.nodeType || k.cleanData(ge(r)),
                r.parentNode &&
                  (n && ae(r) && be(ge(r, "script")), r.parentNode.removeChild(r));
            return e;
          }
          k.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                s,
                a,
                o,
                u,
                l,
                c = e.cloneNode(!0),
                d = ae(e);
              if (
                !(
                  h.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  k.isXMLDoc(e)
                )
              )
                for (a = ge(c), r = 0, i = (s = ge(e)).length; r < i; r++)
                  (o = s[r]),
                    (u = a[r]),
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(o.type)
                      ? (u.checked = o.checked)
                      : ("input" !== l && "textarea" !== l) ||
                        (u.defaultValue = o.defaultValue);
              if (t)
                if (n)
                  for (
                    s = s || ge(e), a = a || ge(c), r = 0, i = s.length;
                    r < i;
                    r++
                  )
                    Ae(s[r], a[r]);
                else Ae(e, c);
              return (
                (a = ge(c, "script")).length > 0 && be(a, !d && ge(e, "script")), c
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = k.event.special, s = 0;
                void 0 !== (n = e[s]);
                s++
              )
                if (G(n)) {
                  if ((t = n[Z.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                    n[Z.expando] = void 0;
                  }
                  n[Q.expando] && (n[Q.expando] = void 0);
                }
            },
          }),
            k.fn.extend({
              detach: function (e) {
                return $e(this, e, !0);
              },
              remove: function (e) {
                return $e(this, e);
              },
              text: function (e) {
                return q(
                  this,
                  function (e) {
                    return void 0 === e
                      ? k.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Pe(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Oe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Pe(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Pe(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Pe(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (k.cleanData(ge(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return k.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return q(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !je.test(e) &&
                      !ye[(he.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = k.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (k.cleanData(ge(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Pe(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    k.inArray(this, e) < 0 &&
                      (k.cleanData(ge(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            k.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                k.fn[e] = function (e) {
                  for (
                    var n, r = [], i = k(e), s = i.length - 1, a = 0;
                    a <= s;
                    a++
                  )
                    (n = a === s ? this : this.clone(!0)),
                      k(i[a])[t](n),
                      l.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            Ne = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = n), t.getComputedStyle(e);
            },
            Fe = function (e, t, n) {
              var r,
                i,
                s = {};
              for (i in t) (s[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = s[i];
              return r;
            },
            Ie = new RegExp(ie.join("|"), "i");
          function We(e, t, n) {
            var r,
              i,
              s,
              a,
              o = e.style;
            return (
              (n = n || Ne(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  ae(e) ||
                  (a = k.style(e, t)),
                !h.pixelBoxStyles() &&
                  Re.test(a) &&
                  Ie.test(t) &&
                  ((r = o.width),
                  (i = o.minWidth),
                  (s = o.maxWidth),
                  (o.minWidth = o.maxWidth = o.width = a),
                  (a = n.width),
                  (o.width = r),
                  (o.minWidth = i),
                  (o.maxWidth = s))),
              void 0 !== a ? a + "" : a
            );
          }
          function ze(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  se.appendChild(l).appendChild(c);
                var e = n.getComputedStyle(c);
                (r = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (s = 12 === t(c.offsetWidth / 3)),
                  se.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var r,
              i,
              s,
              a,
              o,
              u,
              l = g.createElement("div"),
              c = g.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
              k.extend(h, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), r;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), s;
                },
                reliableTrDimensions: function () {
                  var e, t, r, i;
                  return (
                    null == o &&
                      ((e = g.createElement("table")),
                      (t = g.createElement("tr")),
                      (r = g.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (r.style.height = "9px"),
                      (r.style.display = "block"),
                      se.appendChild(e).appendChild(t).appendChild(r),
                      (i = n.getComputedStyle(t)),
                      (o =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      se.removeChild(e)),
                    o
                  );
                },
              }));
          })();
          var qe = ["Webkit", "Moz", "ms"],
            Be = g.createElement("div").style,
            Ue = {};
          function Je(e) {
            var t = k.cssProps[e] || Ue[e];
            return (
              t ||
              (e in Be
                ? e
                : (Ue[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = qe.length;
                        n--;
    
                      )
                        if ((e = qe[n] + t) in Be) return e;
                    })(e) || e))
            );
          }
          var Ve = /^(none|table(?!-c[ea]).+)/,
            Ge = /^--/,
            Ke = { position: "absolute", visibility: "hidden", display: "block" },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function Qe(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function Xe(e, t, n, r, i, s) {
            var a = "width" === t ? 1 : 0,
              o = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += k.css(e, n + ie[a], !0, i)),
                r
                  ? ("content" === n && (u -= k.css(e, "padding" + ie[a], !0, i)),
                    "margin" !== n &&
                      (u -= k.css(e, "border" + ie[a] + "Width", !0, i)))
                  : ((u += k.css(e, "padding" + ie[a], !0, i)),
                    "padding" !== n
                      ? (u += k.css(e, "border" + ie[a] + "Width", !0, i))
                      : (o += k.css(e, "border" + ie[a] + "Width", !0, i)));
            return (
              !r &&
                s >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        s -
                        u -
                        o -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function et(e, t, n) {
            var r = Ne(e),
              i =
                (!h.boxSizingReliable() || n) &&
                "border-box" === k.css(e, "boxSizing", !1, r),
              s = i,
              a = We(e, t, r),
              o = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Re.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!h.boxSizingReliable() && i) ||
                (!h.reliableTrDimensions() && j(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
                (s = o in e) && (a = e[o])),
              (a = parseFloat(a) || 0) +
                Xe(e, t, n || (i ? "border" : "content"), s, r, a) +
                "px"
            );
          }
          function tt(e, t, n, r, i) {
            return new tt.prototype.init(e, t, n, r, i);
          }
          k.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = We(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  s,
                  a,
                  o = V(t),
                  u = Ge.test(t),
                  l = e.style;
                if (
                  (u || (t = Je(o)),
                  (a = k.cssHooks[t] || k.cssHooks[o]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                    ? i
                    : l[t];
                "string" === (s = typeof n) &&
                  (i = re.exec(n)) &&
                  i[1] &&
                  ((n = le(e, t, i)), (s = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== s ||
                      u ||
                      (n += (i && i[3]) || (k.cssNumber[o] ? "" : "px")),
                    h.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (l[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                s,
                a,
                o = V(t);
              return (
                Ge.test(t) || (t = Je(o)),
                (a = k.cssHooks[t] || k.cssHooks[o]) &&
                  "get" in a &&
                  (i = a.get(e, !0, n)),
                void 0 === i && (i = We(e, t, r)),
                "normal" === i && t in Ze && (i = Ze[t]),
                "" === n || n
                  ? ((s = parseFloat(i)), !0 === n || isFinite(s) ? s || 0 : i)
                  : i
              );
            },
          }),
            k.each(["height", "width"], function (e, t) {
              k.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Ve.test(k.css(e, "display")) ||
                      (e.getClientRects().length && e.getBoundingClientRect().width)
                      ? et(e, t, r)
                      : Fe(e, Ke, function () {
                          return et(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    s = Ne(e),
                    a = !h.scrollboxSize() && "absolute" === s.position,
                    o = (a || r) && "border-box" === k.css(e, "boxSizing", !1, s),
                    u = r ? Xe(e, t, r, o, s) : 0;
                  return (
                    o &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(s[t]) -
                          Xe(e, t, "border", !1, s) -
                          0.5
                      )),
                    u &&
                      (i = re.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = k.css(e, t))),
                    Qe(0, n, u)
                  );
                },
              };
            }),
            (k.cssHooks.marginLeft = ze(h.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(We(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Fe(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            k.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
              (k.cssHooks[e + t] = {
                expand: function (n) {
                  for (
                    var r = 0,
                      i = {},
                      s = "string" == typeof n ? n.split(" ") : [n];
                    r < 4;
                    r++
                  )
                    i[e + ie[r] + t] = s[r] || s[r - 2] || s[0];
                  return i;
                },
              }),
                "margin" !== e && (k.cssHooks[e + t].set = Qe);
            }),
            k.fn.extend({
              css: function (e, t) {
                return q(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      s = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Ne(e), i = t.length; a < i; a++)
                        s[t[a]] = k.css(e, t[a], !1, r);
                      return s;
                    }
                    return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (k.Tween = tt),
            (tt.prototype = {
              constructor: tt,
              init: function (e, t, n, r, i, s) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || k.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = s || (k.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = tt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        k.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (tt.prototype.init.prototype = tt.prototype),
            (tt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  k.fx.step[e.prop]
                    ? k.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!k.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : k.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                },
              }),
            (k.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (k.fx = tt.prototype.init),
            (k.fx.step = {});
          var nt,
            rt,
            it = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
          function at() {
            rt &&
              (!1 === g.hidden && n.requestAnimationFrame
                ? n.requestAnimationFrame(at)
                : n.setTimeout(at, k.fx.interval),
              k.fx.tick());
          }
          function ot() {
            return (
              n.setTimeout(function () {
                nt = void 0;
              }),
              (nt = Date.now())
            );
          }
          function ut(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = ie[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function lt(e, t, n) {
            for (
              var r,
                i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
                s = 0,
                a = i.length;
              s < a;
              s++
            )
              if ((r = i[s].call(n, t, e))) return r;
          }
          function ct(e, t, n) {
            var r,
              i,
              s = 0,
              a = ct.prefilters.length,
              o = k.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (i) return !1;
                for (
                  var t = nt || ot(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    s = 0,
                    a = l.tweens.length;
                  s < a;
                  s++
                )
                  l.tweens[s].run(r);
                return (
                  o.notifyWith(e, [l, r, n]),
                  r < 1 && a
                    ? n
                    : (a || o.notifyWith(e, [l, 1, 0]), o.resolveWith(e, [l]), !1)
                );
              },
              l = o.promise({
                elem: e,
                props: k.extend({}, t),
                opts: k.extend(
                  !0,
                  { specialEasing: {}, easing: k.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || ot(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = k.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (o.notifyWith(e, [l, 1, 0]), o.resolveWith(e, [l, t]))
                      : o.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              !(function (e, t) {
                var n, r, i, s, a;
                for (n in e)
                  if (
                    ((i = t[(r = V(n))]),
                    (s = e[n]),
                    Array.isArray(s) && ((i = s[1]), (s = e[n] = s[0])),
                    n !== r && ((e[r] = s), delete e[n]),
                    (a = k.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((s = a.expand(s)), delete e[r], s))
                      (n in e) || ((e[n] = s[n]), (t[n] = i));
                  else t[r] = i;
              })(c, l.opts.specialEasing);
              s < a;
              s++
            )
              if ((r = ct.prefilters[s].call(l, e, c, l.opts)))
                return (
                  v(r.stop) &&
                    (k._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              k.map(c, lt, l),
              v(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              k.fx.timer(k.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
              l
            );
          }
          (k.Animation = k.extend(ct, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return le(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match($));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (ct.tweeners[n] = ct.tweeners[n] || []),
                  ct.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  s,
                  a,
                  o,
                  u,
                  l,
                  c,
                  d = "width" in t || "height" in t,
                  f = this,
                  _ = {},
                  m = e.style,
                  p = e.nodeType && ue(e),
                  h = Z.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = k._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (o = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || o();
                    })),
                  a.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), it.test(i))) {
                    if (
                      (delete t[r],
                      (s = s || "toggle" === i),
                      i === (p ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !h || void 0 === h[r]) continue;
                      p = !0;
                    }
                    _[r] = (h && h[r]) || k.style(e, r);
                  }
                if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(_))
                  for (r in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [m.overflow, m.overflowX, m.overflowY]),
                    null == (l = h && h.display) && (l = Z.get(e, "display")),
                    "none" === (c = k.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (fe([e], !0),
                          (l = e.style.display || l),
                          (c = k.css(e, "display")),
                          fe([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === k.css(e, "float") &&
                      (u ||
                        (f.done(function () {
                          m.display = l;
                        }),
                        null == l &&
                          ((c = m.display), (l = "none" === c ? "" : c))),
                      (m.display = "inline-block"))),
                  n.overflow &&
                    ((m.overflow = "hidden"),
                    f.always(function () {
                      (m.overflow = n.overflow[0]),
                        (m.overflowX = n.overflow[1]),
                        (m.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  _))
                    u ||
                      (h
                        ? "hidden" in h && (p = h.hidden)
                        : (h = Z.access(e, "fxshow", { display: l })),
                      s && (h.hidden = !p),
                      p && fe([e], !0),
                      f.done(function () {
                        for (r in (p || fe([e]), Z.remove(e, "fxshow"), _))
                          k.style(e, r, _[r]);
                      })),
                      (u = lt(p ? h[r] : 0, r, f)),
                      r in h ||
                        ((h[r] = u.start), p && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
            },
          })),
            (k.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? k.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                k.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in k.fx.speeds
                      ? (r.duration = k.fx.speeds[r.duration])
                      : (r.duration = k.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  v(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
                }),
                r
              );
            }),
            k.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ue)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = k.isEmptyObject(e),
                  s = k.speed(t, n, r),
                  a = function () {
                    var t = ct(this, k.extend({}, e), s);
                    (i || Z.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      s = k.timers,
                      a = Z.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
                    for (i = s.length; i--; )
                      s[i].elem !== this ||
                        (null != e && s[i].queue !== e) ||
                        (s[i].anim.stop(n), (t = !1), s.splice(i, 1));
                    (!t && n) || k.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = Z.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      s = k.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        k.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = s.length;
                      t--;
    
                    )
                      s[t].elem === this &&
                        s[t].queue === e &&
                        (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            k.each(["toggle", "show", "hide"], function (e, t) {
              var n = k.fn[t];
              k.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ut(t, !0), e, r, i);
              };
            }),
            k.each(
              {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                k.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (k.timers = []),
            (k.fx.tick = function () {
              var e,
                t = 0,
                n = k.timers;
              for (nt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || k.fx.stop(), (nt = void 0);
            }),
            (k.fx.timer = function (e) {
              k.timers.push(e), k.fx.start();
            }),
            (k.fx.interval = 13),
            (k.fx.start = function () {
              rt || ((rt = !0), at());
            }),
            (k.fx.stop = function () {
              rt = null;
            }),
            (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (k.fn.delay = function (e, t) {
              return (
                (e = (k.fx && k.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, r) {
                  var i = n.setTimeout(t, e);
                  r.stop = function () {
                    n.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = g.createElement("input"),
                t = g
                  .createElement("select")
                  .appendChild(g.createElement("option"));
              (e.type = "checkbox"),
                (h.checkOn = "" !== e.value),
                (h.optSelected = t.selected),
                ((e = g.createElement("input")).value = "t"),
                (e.type = "radio"),
                (h.radioValue = "t" === e.value);
            })();
          var dt,
            ft = k.expr.attrHandle;
          k.fn.extend({
            attr: function (e, t) {
              return q(this, k.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                k.removeAttr(this, e);
              });
            },
          }),
            k.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return void 0 === e.getAttribute
                    ? k.prop(e, t, n)
                    : ((1 === s && k.isXMLDoc(e)) ||
                        (i =
                          k.attrHooks[t.toLowerCase()] ||
                          (k.expr.match.bool.test(t) ? dt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void k.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = k.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!h.radioValue && "radio" === t && j(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match($);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (dt = {
              set: function (e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ft[t] || k.find.attr;
              ft[t] = function (e, t, r) {
                var i,
                  s,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((s = ft[a]),
                    (ft[a] = i),
                    (i = null != n(e, t, r) ? a : null),
                    (ft[a] = s)),
                  i
                );
              };
            });
          var _t = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;
          function pt(e) {
            return (e.match($) || []).join(" ");
          }
          function ht(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function vt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match($)) || [];
          }
          k.fn.extend({
            prop: function (e, t) {
              return q(this, k.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[k.propFix[e] || e];
              });
            },
          }),
            k.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return (
                    (1 === s && k.isXMLDoc(e)) ||
                      ((t = k.propFix[t] || t), (i = k.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = k.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : _t.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            h.optSelected ||
              (k.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            k.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                k.propFix[this.toLowerCase()] = this;
              }
            ),
            k.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  s,
                  a,
                  o,
                  u = 0;
                if (v(e))
                  return this.each(function (t) {
                    k(this).addClass(e.call(this, t, ht(this)));
                  });
                if ((t = vt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((i = ht(n)), (r = 1 === n.nodeType && " " + pt(i) + " "))
                    ) {
                      for (a = 0; (s = t[a++]); )
                        r.indexOf(" " + s + " ") < 0 && (r += s + " ");
                      i !== (o = pt(r)) && n.setAttribute("class", o);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  s,
                  a,
                  o,
                  u = 0;
                if (v(e))
                  return this.each(function (t) {
                    k(this).removeClass(e.call(this, t, ht(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = vt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((i = ht(n)), (r = 1 === n.nodeType && " " + pt(i) + " "))
                    ) {
                      for (a = 0; (s = t[a++]); )
                        for (; r.indexOf(" " + s + " ") > -1; )
                          r = r.replace(" " + s + " ", " ");
                      i !== (o = pt(r)) && n.setAttribute("class", o);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                  ? this.each(function (n) {
                      k(this).toggleClass(e.call(this, n, ht(this), t), t);
                    })
                  : this.each(function () {
                      var t, i, s, a;
                      if (r)
                        for (i = 0, s = k(this), a = vt(e); (t = a[i++]); )
                          s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = ht(this)) && Z.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Z.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (1 === n.nodeType && (" " + pt(ht(n)) + " ").indexOf(t) > -1)
                    return !0;
                return !1;
              },
            });
          var yt = /\r/g;
          k.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = v(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, k(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = k.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        k.valHooks[this.type] ||
                        k.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    k.valHooks[i.type] || k.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(yt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            k.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : pt(k.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      s = e.selectedIndex,
                      a = "select-one" === e.type,
                      o = a ? null : [],
                      u = a ? s + 1 : i.length;
                    for (r = s < 0 ? u : a ? s : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === s) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))
                      ) {
                        if (((t = k(n).val()), a)) return t;
                        o.push(t);
                      }
                    return o;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, s = k.makeArray(t), a = i.length;
                      a--;
    
                    )
                      ((r = i[a]).selected =
                        k.inArray(k.valHooks.option.get(r), s) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), s;
                  },
                },
              },
            }),
            k.each(["radio", "checkbox"], function () {
              (k.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = k.inArray(k(e).val(), t) > -1);
                },
              }),
                h.checkOn ||
                  (k.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (h.focusin = "onfocusin" in n);
          var gt = /^(?:focusinfocus|focusoutblur)$/,
            bt = function (e) {
              e.stopPropagation();
            };
          k.extend(k.event, {
            trigger: function (e, t, r, i) {
              var s,
                a,
                o,
                u,
                l,
                c,
                d,
                f,
                m = [r || g],
                p = _.call(e, "type") ? e.type : e,
                h = _.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = f = o = r = r || g),
                3 !== r.nodeType &&
                  8 !== r.nodeType &&
                  !gt.test(p + k.event.triggered) &&
                  (p.indexOf(".") > -1 &&
                    ((p = (h = p.split(".")).shift()), h.sort()),
                  (l = p.indexOf(":") < 0 && "on" + p),
                  ((e = e[k.expando]
                    ? e
                    : new k.Event(p, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = h.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = r),
                  (t = null == t ? [e] : k.makeArray(t, [e])),
                  (d = k.event.special[p] || {}),
                  i || !d.trigger || !1 !== d.trigger.apply(r, t)))
              ) {
                if (!i && !d.noBubble && !y(r)) {
                  for (
                    u = d.delegateType || p, gt.test(u + p) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    m.push(a), (o = a);
                  o === (r.ownerDocument || g) &&
                    m.push(o.defaultView || o.parentWindow || n);
                }
                for (s = 0; (a = m[s++]) && !e.isPropagationStopped(); )
                  (f = a),
                    (e.type = s > 1 ? u : d.bindType || p),
                    (c =
                      (Z.get(a, "events") || Object.create(null))[e.type] &&
                      Z.get(a, "handle")) && c.apply(a, t),
                    (c = l && a[l]) &&
                      c.apply &&
                      G(a) &&
                      ((e.result = c.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = p),
                  i ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(m.pop(), t)) ||
                    !G(r) ||
                    (l &&
                      v(r[p]) &&
                      !y(r) &&
                      ((o = r[l]) && (r[l] = null),
                      (k.event.triggered = p),
                      e.isPropagationStopped() && f.addEventListener(p, bt),
                      r[p](),
                      e.isPropagationStopped() && f.removeEventListener(p, bt),
                      (k.event.triggered = void 0),
                      o && (r[l] = o))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
              k.event.trigger(r, null, t);
            },
          }),
            k.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  k.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return k.event.trigger(e, t, n, !0);
              },
            }),
            h.focusin ||
              k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  k.event.simulate(t, e.target, k.event.fix(e));
                };
                k.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = Z.access(r, t);
                    i || r.addEventListener(e, n, !0), Z.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = Z.access(r, t) - 1;
                    i
                      ? Z.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), Z.remove(r, t));
                  },
                };
              });
          var Mt = n.location,
            Lt = { guid: Date.now() },
            kt = /\?/;
          k.parseXML = function (e) {
            var t, r;
            if (!e || "string" != typeof e) return null;
            try {
              t = new n.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (r = t && t.getElementsByTagName("parsererror")[0]),
              (t && !r) ||
                k.error(
                  "Invalid XML: " +
                    (r
                      ? k
                          .map(r.childNodes, function (e) {
                            return e.textContent;
                          })
                          .join("\n")
                      : e)
                ),
              t
            );
          };
          var wt = /\[\]$/,
            xt = /\r?\n/g,
            Yt = /^(?:submit|button|image|reset|file)$/i,
            Tt = /^(?:input|select|textarea|keygen)/i;
          function Dt(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              k.each(t, function (t, i) {
                n || wt.test(e)
                  ? r(e, i)
                  : Dt(
                      e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                      i,
                      n,
                      r
                    );
              });
            else if (n || "object" !== L(t)) r(e, t);
            else for (i in t) Dt(e + "[" + i + "]", t[i], n, r);
          }
          (k.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = v(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
              k.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) Dt(n, e[n], t, i);
            return r.join("&");
          }),
            k.fn.extend({
              serialize: function () {
                return k.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = k.prop(this, "elements");
                  return e ? k.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !k(this).is(":disabled") &&
                      Tt.test(this.nodeName) &&
                      !Yt.test(e) &&
                      (this.checked || !pe.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = k(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? k.map(n, function (e) {
                          return { name: t.name, value: e.replace(xt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(xt, "\r\n") };
                  })
                  .get();
              },
            });
          var jt = /%20/g,
            St = /#.*$/,
            Ct = /([?&])_=[^&]*/,
            Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Et = /^(?:GET|HEAD)$/,
            Ht = /^\/\//,
            At = {},
            Pt = {},
            $t = "*/".concat("*"),
            Rt = g.createElement("a");
          function Nt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                s = t.toLowerCase().match($) || [];
              if (v(n))
                for (; (r = s[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Ft(e, t, n, r) {
            var i = {},
              s = e === Pt;
            function a(o) {
              var u;
              return (
                (i[o] = !0),
                k.each(e[o] || [], function (e, o) {
                  var l = o(t, n, r);
                  return "string" != typeof l || s || i[l]
                    ? s
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!i["*"] && a("*"));
          }
          function It(e, t) {
            var n,
              r,
              i = k.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && k.extend(!0, e, r), e;
          }
          (Rt.href = Mt.href),
            k.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Mt.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Mt.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": $t,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": k.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? It(It(e, k.ajaxSettings), t) : It(k.ajaxSettings, e);
              },
              ajaxPrefilter: Nt(At),
              ajaxTransport: Nt(Pt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var r,
                  i,
                  s,
                  a,
                  o,
                  u,
                  l,
                  c,
                  d,
                  f,
                  _ = k.ajaxSetup({}, t),
                  m = _.context || _,
                  p = _.context && (m.nodeType || m.jquery) ? k(m) : k.event,
                  h = k.Deferred(),
                  v = k.Callbacks("once memory"),
                  y = _.statusCode || {},
                  b = {},
                  M = {},
                  L = "canceled",
                  w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!a)
                          for (a = {}; (t = Ot.exec(s)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? s : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == l &&
                          ((e = M[e.toLowerCase()] = M[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == l && (_.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) w.always(e[w.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || L;
                      return r && r.abort(t), x(0, t), this;
                    },
                  };
                if (
                  (h.promise(w),
                  (_.url = ((e || _.url || Mt.href) + "").replace(
                    Ht,
                    Mt.protocol + "//"
                  )),
                  (_.type = t.method || t.type || _.method || _.type),
                  (_.dataTypes = (_.dataType || "*").toLowerCase().match($) || [
                    "",
                  ]),
                  null == _.crossDomain)
                ) {
                  u = g.createElement("a");
                  try {
                    (u.href = _.url),
                      (u.href = u.href),
                      (_.crossDomain =
                        Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host);
                  } catch (e) {
                    _.crossDomain = !0;
                  }
                }
                if (
                  (_.data &&
                    _.processData &&
                    "string" != typeof _.data &&
                    (_.data = k.param(_.data, _.traditional)),
                  Ft(At, _, t, w),
                  l)
                )
                  return w;
                for (d in ((c = k.event && _.global) &&
                  0 == k.active++ &&
                  k.event.trigger("ajaxStart"),
                (_.type = _.type.toUpperCase()),
                (_.hasContent = !Et.test(_.type)),
                (i = _.url.replace(St, "")),
                _.hasContent
                  ? _.data &&
                    _.processData &&
                    0 ===
                      (_.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (_.data = _.data.replace(jt, "+"))
                  : ((f = _.url.slice(i.length)),
                    _.data &&
                      (_.processData || "string" == typeof _.data) &&
                      ((i += (kt.test(i) ? "&" : "?") + _.data), delete _.data),
                    !1 === _.cache &&
                      ((i = i.replace(Ct, "$1")),
                      (f = (kt.test(i) ? "&" : "?") + "_=" + Lt.guid++ + f)),
                    (_.url = i + f)),
                _.ifModified &&
                  (k.lastModified[i] &&
                    w.setRequestHeader("If-Modified-Since", k.lastModified[i]),
                  k.etag[i] && w.setRequestHeader("If-None-Match", k.etag[i])),
                ((_.data && _.hasContent && !1 !== _.contentType) ||
                  t.contentType) &&
                  w.setRequestHeader("Content-Type", _.contentType),
                w.setRequestHeader(
                  "Accept",
                  _.dataTypes[0] && _.accepts[_.dataTypes[0]]
                    ? _.accepts[_.dataTypes[0]] +
                        ("*" !== _.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
                    : _.accepts["*"]
                ),
                _.headers))
                  w.setRequestHeader(d, _.headers[d]);
                if (_.beforeSend && (!1 === _.beforeSend.call(m, w, _) || l))
                  return w.abort();
                if (
                  ((L = "abort"),
                  v.add(_.complete),
                  w.done(_.success),
                  w.fail(_.error),
                  (r = Ft(Pt, _, t, w)))
                ) {
                  if (((w.readyState = 1), c && p.trigger("ajaxSend", [w, _]), l))
                    return w;
                  _.async &&
                    _.timeout > 0 &&
                    (o = n.setTimeout(function () {
                      w.abort("timeout");
                    }, _.timeout));
                  try {
                    (l = !1), r.send(b, x);
                  } catch (e) {
                    if (l) throw e;
                    x(-1, e);
                  }
                } else x(-1, "No Transport");
                function x(e, t, a, u) {
                  var d,
                    f,
                    g,
                    b,
                    M,
                    L = t;
                  l ||
                    ((l = !0),
                    o && n.clearTimeout(o),
                    (r = void 0),
                    (s = u || ""),
                    (w.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (
                          var r, i, s, a, o = e.contents, u = e.dataTypes;
                          "*" === u[0];
    
                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in o)
                            if (o[i] && o[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) s = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                              s = i;
                              break;
                            }
                            a || (a = i);
                          }
                          s = s || a;
                        }
                        if (s) return s !== u[0] && u.unshift(s), n[s];
                      })(_, w, a)),
                    !d &&
                      k.inArray("script", _.dataTypes) > -1 &&
                      k.inArray("json", _.dataTypes) < 0 &&
                      (_.converters["text script"] = function () {}),
                    (b = (function (e, t, n, r) {
                      var i,
                        s,
                        a,
                        o,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (s = c.shift(); s; )
                        if (
                          (e.responseFields[s] && (n[e.responseFields[s]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = s),
                          (s = c.shift()))
                        )
                          if ("*" === s) s = u;
                          else if ("*" !== u && u !== s) {
                            if (!(a = l[u + " " + s] || l["* " + s]))
                              for (i in l)
                                if (
                                  (o = i.split(" "))[1] === s &&
                                  (a = l[u + " " + o[0]] || l["* " + o[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[i])
                                    : !0 !== l[i] && ((s = o[0]), c.unshift(o[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + u + " to " + s,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(_, b, w, d)),
                    d
                      ? (_.ifModified &&
                          ((M = w.getResponseHeader("Last-Modified")) &&
                            (k.lastModified[i] = M),
                          (M = w.getResponseHeader("etag")) && (k.etag[i] = M)),
                        204 === e || "HEAD" === _.type
                          ? (L = "nocontent")
                          : 304 === e
                          ? (L = "notmodified")
                          : ((L = b.state), (f = b.data), (d = !(g = b.error))))
                      : ((g = L), (!e && L) || ((L = "error"), e < 0 && (e = 0))),
                    (w.status = e),
                    (w.statusText = (t || L) + ""),
                    d ? h.resolveWith(m, [f, L, w]) : h.rejectWith(m, [w, L, g]),
                    w.statusCode(y),
                    (y = void 0),
                    c &&
                      p.trigger(d ? "ajaxSuccess" : "ajaxError", [w, _, d ? f : g]),
                    v.fireWith(m, [w, L]),
                    c &&
                      (p.trigger("ajaxComplete", [w, _]),
                      --k.active || k.event.trigger("ajaxStop")));
                }
                return w;
              },
              getJSON: function (e, t, n) {
                return k.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return k.get(e, void 0, t, "script");
              },
            }),
            k.each(["get", "post"], function (e, t) {
              k[t] = function (e, n, r, i) {
                return (
                  v(n) && ((i = i || r), (r = n), (n = void 0)),
                  k.ajax(
                    k.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      k.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            k.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (k._evalUrl = function (e, t, n) {
              return k.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  k.globalEval(e, t, n);
                },
              });
            }),
            k.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      k(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = k(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  k(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      k(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (k.expr.pseudos.hidden = function (e) {
              return !k.expr.pseudos.visible(e);
            }),
            (k.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (k.ajaxSettings.xhr = function () {
              try {
                return new n.XMLHttpRequest();
              } catch (e) {}
            });
          var Wt = { 0: 200, 1223: 204 },
            zt = k.ajaxSettings.xhr();
          (h.cors = !!zt && "withCredentials" in zt),
            (h.ajax = zt = !!zt),
            k.ajaxTransport(function (e) {
              var t, r;
              if (h.cors || (zt && !e.crossDomain))
                return {
                  send: function (i, s) {
                    var a,
                      o = e.xhr();
                    if (
                      (o.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) o[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      o.overrideMimeType &&
                      o.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      o.setRequestHeader(a, i[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            r =
                            o.onload =
                            o.onerror =
                            o.onabort =
                            o.ontimeout =
                            o.onreadystatechange =
                              null),
                          "abort" === e
                            ? o.abort()
                            : "error" === e
                            ? "number" != typeof o.status
                              ? s(0, "error")
                              : s(o.status, o.statusText)
                            : s(
                                Wt[o.status] || o.status,
                                o.statusText,
                                "text" !== (o.responseType || "text") ||
                                  "string" != typeof o.responseText
                                  ? { binary: o.response }
                                  : { text: o.responseText },
                                o.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (o.onload = t()),
                      (r = o.onerror = o.ontimeout = t("error")),
                      void 0 !== o.onabort
                        ? (o.onabort = r)
                        : (o.onreadystatechange = function () {
                            4 === o.readyState &&
                              n.setTimeout(function () {
                                t && r();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      o.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            k.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            k.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return k.globalEval(e), e;
                },
              },
            }),
            k.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            k.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = k("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      g.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var qt,
            Bt = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
          k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Bt.pop() || k.expando + "_" + Lt.guid++;
              return (this[e] = !0), e;
            },
          }),
            k.ajaxPrefilter("json jsonp", function (e, t, r) {
              var i,
                s,
                a,
                o =
                  !1 !== e.jsonp &&
                  (Ut.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Ut.test(e.data) &&
                      "data");
              if (o || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  o
                    ? (e[o] = e[o].replace(Ut, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return a || k.error(i + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (s = n[i]),
                  (n[i] = function () {
                    a = arguments;
                  }),
                  r.always(function () {
                    void 0 === s ? k(n).removeProp(i) : (n[i] = s),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Bt.push(i)),
                      a && v(s) && s(a[0]),
                      (a = s = void 0);
                  }),
                  "script"
                );
            }),
            (h.createHTMLDocument =
              (((qt = g.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === qt.childNodes.length)),
            (k.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (h.createHTMLDocument
                      ? (((r = (t =
                          g.implementation.createHTMLDocument("")).createElement(
                          "base"
                        )).href = g.location.href),
                        t.head.appendChild(r))
                      : (t = g)),
                  (i = S.exec(e)),
                  (s = !n && []),
                  i
                    ? [t.createElement(i[1])]
                    : ((i = Le([e], t, s)),
                      s && s.length && k(s).remove(),
                      k.merge([], i.childNodes)));
              var r, i, s;
            }),
            (k.fn.load = function (e, t, n) {
              var r,
                i,
                s,
                a = this,
                o = e.indexOf(" ");
              return (
                o > -1 && ((r = pt(e.slice(o))), (e = e.slice(0, o))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                  k
                    .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                    .done(function (e) {
                      (s = arguments),
                        a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, s || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (k.expr.pseudos.animated = function (e) {
              return k.grep(k.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (k.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  s,
                  a,
                  o,
                  u,
                  l = k.css(e, "position"),
                  c = k(e),
                  d = {};
                "static" === l && (e.style.position = "relative"),
                  (o = c.offset()),
                  (s = k.css(e, "top")),
                  (u = k.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (s + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (i = r.left))
                    : ((a = parseFloat(s) || 0), (i = parseFloat(u) || 0)),
                  v(t) && (t = t.call(e, n, k.extend({}, o))),
                  null != t.top && (d.top = t.top - o.top + a),
                  null != t.left && (d.left = t.left - o.left + i),
                  "using" in t ? t.using.call(e, d) : c.css(d);
              },
            }),
            k.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        k.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === k.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === k.css(e, "position");
    
                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
                      (i.left += k.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === k.css(e, "position");
    
                  )
                    e = e.offsetParent;
                  return e || se;
                });
              },
            }),
            k.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                k.fn[e] = function (r) {
                  return q(
                    this,
                    function (e, r, i) {
                      var s;
                      if (
                        (y(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView),
                        void 0 === i)
                      )
                        return s ? s[t] : e[r];
                      s
                        ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset)
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            k.each(["top", "left"], function (e, t) {
              k.cssHooks[t] = ze(h.pixelPosition, function (e, n) {
                if (n)
                  return (n = We(e, t)), Re.test(n) ? k(e).position()[t] + "px" : n;
              });
            }),
            k.each({ Height: "height", Width: "width" }, function (e, t) {
              k.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  k.fn[r] = function (i, s) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                      o = n || (!0 === i || !0 === s ? "margin" : "border");
                    return q(
                      this,
                      function (t, n, i) {
                        var s;
                        return y(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((s = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              s["scroll" + e],
                              t.body["offset" + e],
                              s["offset" + e],
                              s["client" + e]
                            ))
                          : void 0 === i
                          ? k.css(t, n, o)
                          : k.style(t, n, i, o);
                      },
                      t,
                      a ? i : void 0,
                      a
                    );
                  };
                }
              );
            }),
            k.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                k.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            k.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            k.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                k.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (k.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (r = o.call(arguments, 2)),
                ((i = function () {
                  return e.apply(t || this, r.concat(o.call(arguments)));
                }).guid = e.guid =
                  e.guid || k.guid++),
                i
              );
          }),
            (k.holdReady = function (e) {
              e ? k.readyWait++ : k.ready(!0);
            }),
            (k.isArray = Array.isArray),
            (k.parseJSON = JSON.parse),
            (k.nodeName = j),
            (k.isFunction = v),
            (k.isWindow = y),
            (k.camelCase = V),
            (k.type = L),
            (k.now = Date.now),
            (k.isNumeric = function (e) {
              var t = k.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (k.trim = function (e) {
              return null == e ? "" : (e + "").replace(Jt, "");
            }),
            void 0 ===
              (r = function () {
                return k;
              }.apply(t, [])) || (e.exports = r);
          var Vt = n.jQuery,
            Gt = n.$;
          return (
            (k.noConflict = function (e) {
              return (
                n.$ === k && (n.$ = Gt), e && n.jQuery === k && (n.jQuery = Vt), k
              );
            }),
            void 0 === i && (n.jQuery = n.$ = k),
            k
          );
        });
      }
    
];