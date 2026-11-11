// Chiziqli Algebra — Barcha 15 ta Amaliyot Sillabusi va Mavzular Mundarijasi
const SYLLABUS_DATA = {
  "subject": "Oliy Algebra va Chiziqli Algebra",
  "semester": "1-semestr (15 ta Amaliy Mashg'ulot)",
  "categories": [
    {
      "id": "amaliy_1",
      "title": "1-Amaliyot: Matritsalar va ular ustida amallar",
      "icon": "grid",
      "topics": [
        {
          "id": "matrix_ops",
          "name": "Matritsalar ustida chiziqli amallar (A±B, kA, 3A-4B)",
          "desc": "Qo'shish, ayirish, songa ko'paytirish va chiziqli kombinatsiyalar",
          "methods": [
            "Standart analitik usul",
            "Satrlar va ustunlar bo'yicha hisoblash"
          ]
        },
        {
          "id": "matrix_mult",
          "name": "Matritsalarni ko'paytirish (A × B) va daraja (Aⁿ)",
          "desc": "Satrni ustunga ko'paytirish qoidasi, 2x2, 3x3, 4x4 o'lchamlar",
          "methods": [
            "Satrni ustunga ko'paytirish",
            "Matritsalarni darajaga ko'tarish usuli",
            "Diagonalizatsiya usuli (P·D·P⁻¹)",
            "Blok matritsalar ko'paytmasi"
          ]
        },
        {
          "id": "matrix_aat",
          "name": "A · Aᵀ (Transponirlanganiga ko'paytirish)",
          "desc": "Matritsani o'z transponirlanganiga ko'paytirish (8-misol)",
          "methods": [
            "A va Aᵀ ko'paytmasi"
          ]
        },
        {
          "id": "matrix_poly",
          "name": "f(A) — Matritsali ko'phadni hisoblash",
          "desc": "f(x) ko'phad berilganda f(A) = cₘAᵐ + ... + c₀E ni topish (9-misol)",
          "methods": [
            "Ko'phad darajalari va E birlik matritsa usuli",
            "Diagonalizatsiya orqali f(A) ni hisoblash"
          ]
        }
      ]
    },
    {
      "id": "amaliy_2",
      "title": "2-Amaliyot: O‘rinlashtirish va o‘rin almashtirish",
      "icon": "shuffle",
      "topics": [
        {
          "id": "perm_inversions",
          "name": "Permutatsiyalar va Inversiyalar soni",
          "desc": "O'rin almashtirishdagi barcha inversiyalarni sanash, juft/toqligini va ishorasini aniqlash",
          "methods": [
            "Inversiyalar juftliklarini tahlil qilish",
            "Sikllarga ajratish usuli",
            "Permutatsiyalar ko'paytmasi usuli",
            "Teskari o'rniga qo'yish usuli",
            "Permutatsiya darajasini topish (Aⁿ)"
          ]
        }
      ]
    },
    {
      "id": "amaliy_3",
      "title": "3-Amaliyot: n-tartibli determinantlar va ularning xossalari",
      "icon": "table",
      "topics": [
        {
          "id": "det_calc",
          "name": "Determinantni hisoblash (2x2, 3x3, 4x4)",
          "desc": "Sarrus, Laplas yoki Gauss usulida determinant qiymatini topish",
          "methods": [
            "Gauss usuli (Uchburchak ko'rinishga keltirish)",
            "Sarrus qoidasi (3x3)",
            "Laplas teoremasi (Satr bo'yicha yoyish)",
            "Laplas teoremasi (Ustun bo'yicha yoyish)",
            "Chiziqli ko'paytuvchilarga ajratish usuli",
            "Haddar tahlili va inversiyalar usuli"
          ]
        }
      ]
    },
    {
      "id": "amaliy_4",
      "title": "4-Amaliyot: Minorlar va algebraik to‘ldiruvchilar",
      "icon": "minimize-2",
      "topics": [
        {
          "id": "minors_cofactors",
          "name": "Minorlar va algebraik to'ldiruvchilar bo'yicha yoyish",
          "desc": "Belgilangan satr yoki ustun bo'yicha minorlar va algebraik to'ldiruvchilar jadvali",
          "methods": [
            "1-satr bo'yicha yoyish",
            "2-satr bo'yicha yoyish",
            "3-satr bo'yicha yoyish",
            "2-ustun bo'yicha yoyish",
            "Laplas teoremasi (k-tartibli minorlar)",
            "Rekurrent munosabatlar usuli",
            "Blok matritsalar usuli"
          ]
        }
      ]
    },
    {
      "id": "amaliy_5",
      "title": "5-Amaliyot: Teskari matritsa (A⁻¹)",
      "icon": "refresh-cw",
      "topics": [
        {
          "id": "inv_calc",
          "name": "Teskari matritsani topish (2x2, 3x3, 4x4)",
          "desc": "Kvadrat matritsaga teskari matritsani hisoblash",
          "methods": [
            "Algebraik to'ldiruvchilar usuli (Birikkan matritsa / Kofaktorlar)",
            "Jordan-Gauss usuli (Birlashtirilgan [A|E] matritsa)",
            "Matritsaviy tenglamani teskari matritsa bilan yechish",
            "Blok matritsalar teskarisini topish usuli",
            "Determinantlar ko'paytmasi usuli"
          ]
        }
      ]
    },
    {
      "id": "amaliy_6",
      "title": "6-Amaliyot: Chiziqli tenglamalar sistemalarini yechish",
      "icon": "code",
      "topics": [
        {
          "id": "slae_calc",
          "name": "CHTS ni Kramer, Gauss va Matritsa usulida yechish",
          "desc": "n noma'lumli tenglamalar sistemasini tahlil qilish va yechish",
          "methods": [
            "Kramer qoidasi (Determinantlar orqali)",
            "Gauss usuli (Noma'lumlarni ketma-ket yo'qotish)",
            "Matritsa usuli (X = A⁻¹ · B)",
            "Jordan-Gauss usuli ([A|B] reduktsiyalash)"
          ]
        }
      ]
    },
    {
      "id": "amaliy_7",
      "title": "7-Amaliyot: Matritsa rangi",
      "icon": "layers",
      "topics": [
        {
          "id": "rank_calc",
          "name": "Matritsa rangini aniqlash",
          "desc": "Satrlar ustida amallar bajarib pog'onasimon ko'rinishga keltirish va rangini aniqlash",
          "methods": [
            "Gauss usuli (Pog'onasimon ko'rinish)",
            "O'rab turuvchi minorlar usuli (Maksimal noldan farqli minorlar)",
            "Vektorlar erkligi va sistemasi",
            "Parametr λ bo'yicha tahlil qilish",
            "Nazariy isbot usuli"
          ]
        }
      ]
    },
    {
      "id": "amaliy_8",
      "title": "8-Amaliyot: Bir jinsli CHTS va Kroneker-Kapelli",
      "icon": "git-merge",
      "topics": [
        {
          "id": "homo_slae",
          "name": "Bir jinsli sistema va Fundamental Yechimlar Tizimi (FYeT)",
          "desc": "AX = 0 bir jinsli sistemasining erkin va bog'liq o'zgaruvchilarini ajratib, FYeT bazisini topish",
          "methods": [
            "Gauss usulida FYeT bazisini topish",
            "Kroneker-Kapelli tekshiruvi (Muvofiqlik tahlili)",
            "Parametr λ bo'yicha tahlil qilish",
            "Matritsaviy tenglamalar umumiy yechimi"
          ]
        }
      ]
    },
    {
      "id": "amaliy_9",
      "title": "9-Amaliyot: Kompleks sonlar va ular ustida amallar",
      "icon": "circle",
      "topics": [
        {
          "id": "complex_ops",
          "name": "Kompleks sonlar amallari va Trigonometrik shakl",
          "desc": "z₁ va z₂ ni qo'shish, ayirish, ko'paytirish, bo'lish (qo'shmasiga ko'paytirish), modul va argumentini topish",
          "methods": [
            "Algebraik amallar (qo'shish, ko'paytirish, bo'lish)",
            "Trigonometrik shaklga o'tish (r, cos φ + i sin φ)",
            "Kvadrat ildiz chiqarish formulasi",
            "Kompleks tenglamalar va sistemalar usuli",
            "Geometrik tasvirlash usuli"
          ]
        }
      ]
    },
    {
      "id": "amaliy_10",
      "title": "10-Amaliyot: Muavr formulasi va Ildiz chiqarish",
      "icon": "zap",
      "topics": [
        {
          "id": "demoivre_calc",
          "name": "Muavr formulasi: Darajaga ko'tarish (zⁿ) va Ildizlar (ⁿ√z)",
          "desc": "Kompleks sonni darajaga ko'tarish hamda n ta kompleks ildizlarini hisoblash",
          "methods": [
            "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
            "Kompleks sondan n-darajali barcha ildizlarni topish (ⁿ√z)",
            "Boshlang'ich (ibtidoiy) ildizlar usuli",
            "Trigonometrik ko'phadlar va Muavr integratsiyasi",
            "Geometrik progressiya va yig'indilar usuli"
          ]
        }
      ]
    },
    {
      "id": "amaliy_11",
      "title": "11-Amaliyot: Ko'phadlar va Qoldiqli bo'lish",
      "icon": "divide",
      "topics": [
        {
          "id": "poly_div",
          "name": "Ko'phadni ko'phadga qoldiqli bo'lish (Burchak usuli)",
          "desc": "f(x) ni g(x) ga bo'lib to'liqsiz bo'linma q(x) va qoldiq r(x) ni bosqichma-bosqich topish",
          "methods": [
            "Burchakli bo'lish (Polynomial Long Division)",
            "Gorner jadvali usuli",
            "Teylor koeffitsiyentlari usuli",
            "Karrali ildizlar va hosilalar usuli"
          ]
        }
      ]
    },
    {
      "id": "amaliy_12",
      "title": "12-Amaliyot: Ko'phadlarning EKUBi (Yevklid algoritmi)",
      "icon": "git-branch",
      "topics": [
        {
          "id": "poly_gcd",
          "name": "Yevklid algoritmi yordamida ko'phadlar EKUBini topish",
          "desc": "Ketma-ket qoldiqli bo'lish orqali oxirgi noldan farqli qoldiqni (EKUB) aniqlash",
          "methods": [
            "Yevklid algoritmi qadamlari",
            "Bezout munosabati (Kengaytirilgan Yevklid algoritmi)",
            "Qoldiqlar bo'yicha ko'phadni tiklash (Xitoy qoldiqlar teoremasi)"
          ]
        }
      ]
    },
    {
      "id": "amaliy_13",
      "title": "13-Amaliyot: Bezu teoremasi va Gorner sxemasi",
      "icon": "list",
      "topics": [
        {
          "id": "horner_scheme",
          "name": "Gorner sxemasi va f(c) qoldiqni hisoblash",
          "desc": "Ko'phadni (x - c) ga bo'lish jadvalini tuzish va Bezu teoremasi bo'yicha qiymatini topish",
          "methods": [
            "Gorner jadvali usuli",
            "Bezu teoremasi (f(c) ni topish)",
            "Ratsional ildizlar teoremasi (p/q)",
            "Karrali ildizlarni ajratish (f va f' ning EKUBi)",
            "Algebraning asosiy teoremasi va ildizlar tahlili"
          ]
        }
      ]
    },
    {
      "id": "amaliy_14",
      "title": "14-Amaliyot: Ratsional kasrlar",
      "icon": "pie-chart",
      "topics": [
        {
          "id": "partial_fractions",
          "name": "To'g'ri ratsional kasrni eng sodda kasrlarga ajratish",
          "desc": "P(x)/Q(x) kasrni A/(x-a) + B/(x-b) ko'rinishida yoyish va noma'lum koeffitsiyentlarni topish",
          "methods": [
            "Noma'lum koeffitsiyentlar usuli",
            "Qutblar (ildizlar) bo'yicha yoyish usuli",
            "Kompleks sodda kasrlarga ajratish",
            "Haqiqiy sodda kasrlarga ajratish",
            "Vieta teoremalari va simmetrik funksiyalar",
            "Eyzenshteyn keltirilmaslik kriteriyasi"
          ]
        }
      ]
    },
    {
      "id": "amaliy_15",
      "title": "15-Amaliyot: 3- va 4-darajali tenglamalar",
      "icon": "compass",
      "topics": [
        {
          "id": "cardano_cubic",
          "name": "Kardano formulasi bilan 3-darajali tenglamani yechish",
          "desc": "ax³ + bx² + cx + d = 0 tenglamani keltirilgan y³ + py + q = 0 shaklga keltirib, Kardano ildizlarini topish",
          "methods": [
            "Kardano formulasi va diskriminant tahlili",
            "Keltirilgan kubik tenglama (y³ + py + q = 0)",
            "Trigonometrik (Viet) usuli",
            "Ferrari usuli (4-darajali tenglamalar)",
            "Dekart-Eyler usuli",
            "Bikvadrat va simmetrik tenglamalar usuli",
            "Diskriminant tahlili"
          ]
        }
      ]
    }
  ]
};

if (typeof global !== 'undefined') {
  global.SYLLABUS_DATA = SYLLABUS_DATA;
}
if (typeof window !== 'undefined') {
  window.SYLLABUS_DATA = SYLLABUS_DATA;
}
