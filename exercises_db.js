// Chiziqli Algebra va Oliy Algebra — 15 ta Amaliyot Mashg'ulotlarining barcha Mustaqil Misollar Bazasi
const EXERCISES_DB = {
  "amaliy_1": [
    {
      "id": "1_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "3·A - 4·B chiziqli kombinatsiya: 3·[4, -3; 2, 5] - 4·[2, 3; 1, -1]",
      "topic": "matrix_ops",
      "data": {
        "dim": 2,
        "A": [
          [
            4,
            -3
          ],
          [
            2,
            5
          ]
        ],
        "B": [
          [
            2,
            3
          ],
          [
            1,
            -1
          ]
        ],
        "op": "sub"
      }
    },
    {
      "id": "1_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "3·A + 2·B (3x3 matritsalar amali)",
      "topic": "matrix_ops",
      "data": {
        "dim": 3,
        "A": [
          [
            -1,
            2,
            -1
          ],
          [
            4,
            1,
            -2
          ],
          [
            3,
            2,
            -3
          ]
        ],
        "B": [
          [
            5,
            -3,
            2
          ],
          [
            2,
            1,
            3
          ],
          [
            -6,
            -4,
            2
          ]
        ],
        "op": "add"
      }
    },
    {
      "id": "1_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "2·A - 3·B (4x4 matritsalar amali)",
      "topic": "matrix_ops",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            0,
            2,
            -1
          ],
          [
            2,
            3,
            -1,
            0
          ],
          [
            0,
            1,
            1,
            2
          ],
          [
            3,
            -1,
            0,
            1
          ]
        ],
        "B": [
          [
            2,
            1,
            -1,
            0
          ],
          [
            0,
            2,
            1,
            -1
          ],
          [
            1,
            0,
            3,
            2
          ],
          [
            -1,
            1,
            2,
            0
          ]
        ],
        "op": "sub"
      }
    },
    {
      "id": "1_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "A + B (5x5 matritsalar amali)",
      "topic": "matrix_ops",
      "data": {
        "dim": 5,
        "A": [
          [
            1,
            2,
            0,
            1,
            1
          ],
          [
            0,
            1,
            3,
            2,
            0
          ],
          [
            2,
            0,
            1,
            1,
            2
          ],
          [
            1,
            1,
            0,
            2,
            1
          ],
          [
            0,
            2,
            1,
            0,
            3
          ]
        ],
        "B": [
          [
            2,
            0,
            1,
            0,
            2
          ],
          [
            1,
            3,
            0,
            1,
            1
          ],
          [
            0,
            1,
            2,
            0,
            1
          ],
          [
            2,
            0,
            1,
            3,
            0
          ],
          [
            1,
            1,
            2,
            1,
            0
          ]
        ],
        "op": "add"
      }
    },
    {
      "id": "1_2_a",
      "taskNo": "2",
      "letter": "a",
      "label": "2-topshiriq, a) misol",
      "desc": "Matritsalarni ko'paytirish: [2, 1; 3, 2] · [1, -1; 1, 1]",
      "topic": "matrix_mult",
      "data": {
        "dim": 2,
        "A": [
          [
            2,
            1
          ],
          [
            3,
            2
          ]
        ],
        "B": [
          [
            1,
            -1
          ],
          [
            1,
            1
          ]
        ]
      }
    },
    {
      "id": "1_2_b",
      "taskNo": "2",
      "letter": "b",
      "label": "2-topshiriq, b) misol",
      "desc": "Matritsalarni ko'paytirish: [3, 5; 6, -1] · [2, 1; -3, 2]",
      "topic": "matrix_mult",
      "data": {
        "dim": 2,
        "A": [
          [
            3,
            5
          ],
          [
            6,
            -1
          ]
        ],
        "B": [
          [
            2,
            1
          ],
          [
            -3,
            2
          ]
        ]
      }
    },
    {
      "id": "1_2_c",
      "taskNo": "2",
      "letter": "c",
      "label": "2-topshiriq, c) misol",
      "desc": "3x3 Matritsalarni ko'paytirish",
      "topic": "matrix_mult",
      "data": {
        "dim": 3,
        "A": [
          [
            1,
            2,
            3
          ],
          [
            2,
            4,
            6
          ],
          [
            3,
            6,
            9
          ]
        ],
        "B": [
          [
            -1,
            -2,
            -4
          ],
          [
            -1,
            -2,
            -4
          ],
          [
            1,
            2,
            4
          ]
        ]
      }
    },
    {
      "id": "1_2_d",
      "taskNo": "2",
      "letter": "d",
      "label": "2-topshiriq, d) misol",
      "desc": "3x3 Matritsalar ko'paytmasi",
      "topic": "matrix_mult",
      "data": {
        "dim": 3,
        "A": [
          [
            1,
            -2,
            3
          ],
          [
            4,
            5,
            -6
          ],
          [
            -1,
            1,
            3
          ]
        ],
        "B": [
          [
            1,
            1,
            0
          ],
          [
            0,
            1,
            1
          ],
          [
            1,
            0,
            1
          ]
        ]
      }
    },
    {
      "id": "1_2_e",
      "taskNo": "2",
      "letter": "e",
      "label": "2-topshiriq, e) misol",
      "desc": "4x4 Matritsalarni ko'paytirish",
      "topic": "matrix_mult",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            2,
            0,
            1
          ],
          [
            3,
            0,
            -1,
            2
          ],
          [
            2,
            1,
            1,
            0
          ],
          [
            0,
            1,
            2,
            3
          ]
        ],
        "B": [
          [
            2,
            1,
            1,
            0
          ],
          [
            0,
            1,
            -1,
            2
          ],
          [
            1,
            0,
            2,
            1
          ],
          [
            3,
            -1,
            0,
            1
          ]
        ]
      }
    },
    {
      "id": "1_2_f",
      "taskNo": "2",
      "letter": "f",
      "label": "2-topshiriq, f) misol",
      "desc": "5x5 Matritsalarni ko'paytirish",
      "topic": "matrix_mult",
      "data": {
        "dim": 5,
        "A": [
          [
            1,
            1,
            0,
            0,
            1
          ],
          [
            0,
            2,
            1,
            0,
            0
          ],
          [
            1,
            0,
            1,
            1,
            0
          ],
          [
            0,
            1,
            0,
            2,
            1
          ],
          [
            1,
            0,
            0,
            1,
            2
          ]
        ],
        "B": [
          [
            2,
            0,
            1,
            1,
            0
          ],
          [
            1,
            1,
            0,
            0,
            2
          ],
          [
            0,
            2,
            1,
            1,
            0
          ],
          [
            1,
            0,
            0,
            2,
            1
          ],
          [
            0,
            1,
            2,
            0,
            1
          ]
        ]
      }
    },
    {
      "id": "1_3_a",
      "taskNo": "3",
      "letter": "a",
      "label": "3-topshiriq, a) misol",
      "desc": "3 ta matritsani ko'paytirish: [[4, 3], [7, 5]] · [[-28, 93], [38, -126]] · [[7, 3], [2, 1]]",
      "topic": "matrix_mult",
      "preferredMethod": "Satrni ustunga ko'paytirish",
      "data": {
        "rows": 2,
        "cols": 2,
        "A": [
          [
            4,
            3
          ],
          [
            7,
            5
          ]
        ],
        "B": [
          [
            -28,
            93
          ],
          [
            38,
            -126
          ]
        ],
        "C": [
          [
            7,
            3
          ],
          [
            2,
            1
          ]
        ],
        "type": "triple_mult"
      }
    },
    {
      "id": "1_3_b",
      "taskNo": "3",
      "letter": "b",
      "label": "3-topshiriq, b) misol",
      "desc": "3x3 o'lchamli 3 ta matritsa ko'paytmasi: A · B · C",
      "topic": "matrix_mult",
      "preferredMethod": "Satrni ustunga ko'paytirish",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            1,
            2,
            1
          ],
          [
            3,
            1,
            3
          ],
          [
            1,
            2,
            1
          ]
        ],
        "B": [
          [
            1,
            3,
            1
          ],
          [
            2,
            1,
            2
          ],
          [
            1,
            3,
            1
          ]
        ],
        "C": [
          [
            1,
            5,
            2
          ],
          [
            0,
            3,
            -1
          ],
          [
            2,
            1,
            1
          ]
        ],
        "type": "triple_mult"
      }
    },
    {
      "id": "1_4_a",
      "taskNo": "4",
      "letter": "a",
      "label": "4-topshiriq, a) misol",
      "desc": "3x3 Matritsalarni ko'paytirish: [[0, 2, -1], [-2, -1, 2], [3, -2, -1]] · [[70, 34, -107], [101, 50, -140], [27, -18, 3]]",
      "topic": "matrix_mult",
      "preferredMethod": "Satrni ustunga ko'paytirish",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            0,
            2,
            -1
          ],
          [
            -2,
            -1,
            2
          ],
          [
            3,
            -2,
            -1
          ]
        ],
        "B": [
          [
            70,
            34,
            -107
          ],
          [
            101,
            50,
            -140
          ],
          [
            27,
            -18,
            3
          ]
        ]
      }
    },
    {
      "id": "1_4_b",
      "taskNo": "4",
      "letter": "b",
      "label": "4-topshiriq, b) misol",
      "desc": "Matritsalarni ko'paytirish: [[1, 2, 3], [2, 4, 6], [3, 6, 9]] · [[-1, -2, -4], [-1, -2, -4], [1, 2, 4]]",
      "topic": "matrix_mult",
      "preferredMethod": "Satrni ustunga ko'paytirish",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            1,
            2,
            3
          ],
          [
            2,
            4,
            6
          ],
          [
            3,
            6,
            9
          ]
        ],
        "B": [
          [
            -1,
            -2,
            -4
          ],
          [
            -1,
            -2,
            -4
          ],
          [
            1,
            2,
            4
          ]
        ]
      }
    },
    {
      "id": "1_5_a",
      "taskNo": "5",
      "letter": "a",
      "label": "5-topshiriq, a) misol",
      "desc": "Matritsaviy amallarni bajaring: A² - 3A + 2E, bu yerda A = [[1, 2], [3, 4]]",
      "topic": "matrix_poly",
      "preferredMethod": "Ko'phad darajalari va E birlik matritsa usuli",
      "data": {
        "rows": 2,
        "cols": 2,
        "A": [
          [
            1,
            2
          ],
          [
            3,
            4
          ]
        ],
        "polyStr": "x^2 - 3x + 2"
      }
    },
    {
      "id": "1_5_b",
      "taskNo": "5",
      "letter": "b",
      "label": "5-topshiriq, b) misol",
      "desc": "Matritsaviy amallar: A² - 2A + E, bu yerda A = [[2, 1, 1], [3, 1, 0], [0, 1, 2]]",
      "topic": "matrix_poly",
      "preferredMethod": "Ko'phad darajalari va E birlik matritsa usuli",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            2,
            1,
            1
          ],
          [
            3,
            1,
            0
          ],
          [
            0,
            1,
            2
          ]
        ],
        "polyStr": "x^2 - 2x + 1"
      }
    },
    {
      "id": "1_6_a",
      "taskNo": "6",
      "letter": "a",
      "label": "6-topshiriq, a) misol",
      "desc": "Matritsani darajaga oshirish: [[1, 1], [0, 1]]ⁿ = [[1, n], [0, 1]]",
      "topic": "matrix_mult",
      "preferredMethod": "Matritsalarni darajaga ko'tarish usuli",
      "data": {
        "rows": 2,
        "cols": 2,
        "A": [
          [
            1,
            1
          ],
          [
            0,
            1
          ]
        ],
        "power": "n",
        "type": "matrix_power"
      }
    },
    {
      "id": "1_6_b",
      "taskNo": "6",
      "letter": "b",
      "label": "6-topshiriq, b) misol",
      "desc": "Aylanma matritsa darajasi: [[cos α, -sin α], [sin α, cos α]]ⁿ = [[cos(nα), -sin(nα)], [sin(nα), cos(nα)]]",
      "topic": "matrix_mult",
      "preferredMethod": "Matritsalarni darajaga ko'tarish usuli",
      "data": {
        "rows": 2,
        "cols": 2,
        "A": [
          [
            1,
            0
          ],
          [
            0,
            1
          ]
        ],
        "formula": "[[cos(na), -sin(na)], [sin(na), cos(na)]]",
        "type": "rotation_power"
      }
    },
    {
      "id": "1_7_a",
      "taskNo": "7",
      "letter": "a",
      "label": "7-topshiriq, a) misol",
      "desc": "Matritsaning n-darajasi: [[2, -1], [3, -2]]ⁿ (A² = E birlik matritsa)",
      "topic": "matrix_mult",
      "preferredMethod": "Matritsalarni darajaga ko'tarish usuli",
      "data": {
        "rows": 2,
        "cols": 2,
        "A": [
          [
            2,
            -1
          ],
          [
            3,
            -2
          ]
        ],
        "type": "involutory_power"
      }
    },
    {
      "id": "1_7_b",
      "taskNo": "7",
      "letter": "b",
      "label": "7-topshiriq, b) misol",
      "desc": "Matritsaning n-darajasi: [[1, 2], [0, 1]]ⁿ = [[1, 2n], [0, 1]]",
      "topic": "matrix_mult",
      "preferredMethod": "Matritsalarni darajaga ko'tarish usuli",
      "data": {
        "rows": 2,
        "cols": 2,
        "A": [
          [
            1,
            2
          ],
          [
            0,
            1
          ]
        ],
        "type": "matrix_power"
      }
    },
    {
      "id": "1_8",
      "taskNo": "8",
      "letter": "",
      "label": "8-topshiriq",
      "desc": "A · Aᵀ (Matritsani o'z transponirlanganiga ko'paytirish)",
      "topic": "matrix_aat",
      "data": {
        "dim": 3,
        "A": [
          [
            3,
            2,
            1
          ],
          [
            4,
            1,
            2
          ],
          [
            1,
            3,
            2
          ]
        ]
      }
    },
    {
      "id": "1_9_a",
      "taskNo": "9",
      "letter": "a",
      "label": "9-topshiriq, a) misol",
      "desc": "f(A) ko'phadni hisoblash: f(x) = x² - 5x + 3",
      "topic": "matrix_poly",
      "data": {
        "dim": 2,
        "A": [
          [
            2,
            -1
          ],
          [
            1,
            3
          ]
        ],
        "polyStr": "x^2 - 5x + 3"
      }
    },
    {
      "id": "1_9_b",
      "taskNo": "9",
      "letter": "b",
      "label": "9-topshiriq, b) misol",
      "desc": "f(A) ko'phadni hisoblash: f(x) = 3x² - 2x + 5E",
      "topic": "matrix_poly",
      "data": {
        "dim": 3,
        "A": [
          [
            1,
            2,
            -1
          ],
          [
            0,
            1,
            3
          ],
          [
            2,
            -1,
            1
          ]
        ],
        "polyStr": "3x^2 - 2x + 5"
      }
    },
    {
      "id": "1_10",
      "taskNo": "10",
      "letter": "",
      "label": "10-topshiriq",
      "desc": "Tenglikdan foydalanib Aⁿ ni hisoblang: A = [[3, -1], [5, -2]] = P · D · P⁻¹ diagonalizatsiyasi",
      "topic": "matrix_mult",
      "preferredMethod": "Diagonalizatsiya usuli (P·D·P⁻¹)",
      "data": {
        "rows": 2,
        "cols": 2,
        "A": [
          [
            3,
            -1
          ],
          [
            5,
            -2
          ]
        ],
        "P": [
          [
            1,
            1
          ],
          [
            2,
            5
          ]
        ],
        "D": [
          [
            1,
            0
          ],
          [
            0,
            -1
          ]
        ],
        "type": "diagonalization_power"
      }
    },
    {
      "id": "1_11",
      "taskNo": "11",
      "letter": "",
      "label": "11-topshiriq",
      "desc": "Tenglikdan foydalanib A⁶ ni hisoblang: A = [[4, 3, -3], [2, 3, -2], [4, 4, -3]] = P · D · P⁻¹",
      "topic": "matrix_mult",
      "preferredMethod": "Diagonalizatsiya usuli (P·D·P⁻¹)",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            4,
            3,
            -3
          ],
          [
            2,
            3,
            -2
          ],
          [
            4,
            4,
            -3
          ]
        ],
        "power": 6,
        "type": "diagonalization_power_3x3"
      }
    }
  ],
  "amaliy_2": [
    {
      "id": "2_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "(2, 3, 5, 4, 1) inversiyalar soni va juft-toqligi",
      "topic": "perm_inversions",
      "data": {
        "perm": "2 3 5 4 1"
      }
    },
    {
      "id": "2_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "(6, 5, 1, 4, 2, 3) inversiyalar soni va juft-toqligi",
      "topic": "perm_inversions",
      "data": {
        "perm": "6 5 1 4 2 3"
      }
    },
    {
      "id": "2_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "(3, 1, 4, 2, 6, 5) permutatsiyasi",
      "topic": "perm_inversions",
      "data": {
        "perm": "3 1 4 2 6 5"
      }
    },
    {
      "id": "2_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "(2, 4, 1, 5, 6, 3) permutatsiyasi",
      "topic": "perm_inversions",
      "data": {
        "perm": "2 4 1 5 6 3"
      }
    },
    {
      "id": "2_1_e",
      "taskNo": "1",
      "letter": "e",
      "label": "1-topshiriq, e) misol",
      "desc": "(3, 6, 4, 5, 2, 1) permutatsiyasi",
      "topic": "perm_inversions",
      "data": {
        "perm": "3 6 4 5 2 1"
      }
    },
    {
      "id": "2_1_f",
      "taskNo": "1",
      "letter": "f",
      "label": "1-topshiriq, f) misol",
      "desc": "(4, 7, 8, 5, 1, 3, 2, 6) permutatsiyasi (8 elementli)",
      "topic": "perm_inversions",
      "data": {
        "perm": "4 7 8 5 1 3 2 6"
      }
    },
    {
      "id": "2_1_g",
      "taskNo": "1",
      "letter": "g",
      "label": "1-topshiriq, g) misol",
      "desc": "(1, 3, 5, 7, 9, 2, 4, 6, 8, 10) permutatsiyasi (10 elementli)",
      "topic": "perm_inversions",
      "data": {
        "perm": "1 3 5 7 9 2 4 6 8 10"
      }
    },
    {
      "id": "2_2_a",
      "taskNo": "2",
      "letter": "a",
      "label": "2-topshiriq, a) misol",
      "desc": "O'rin almashtirish inversiyalar soni: (1, 3, 5, ..., 2n-1, 2, 4, 6, ..., 2n)",
      "topic": "perm_inversions",
      "preferredMethod": "Inversiyalar juftliklarini tahlil qilish",
      "data": {
        "perm": "1 3 5 7 2 4 6 8",
        "formula": "I = n(n-1)/2",
        "type": "parametric_perm"
      }
    },
    {
      "id": "2_2_b",
      "taskNo": "2",
      "letter": "b",
      "label": "2-topshiriq, b) misol",
      "desc": "O'rin almashtirish inversiyalar soni: (2, 4, 6, ..., 2n, 1, 3, 5, ..., 2n-1)",
      "topic": "perm_inversions",
      "preferredMethod": "Inversiyalar juftliklarini tahlil qilish",
      "data": {
        "perm": "2 4 6 8 1 3 5 7",
        "formula": "I = n^2",
        "type": "parametric_perm"
      }
    },
    {
      "id": "2_3",
      "taskNo": "3",
      "letter": "",
      "label": "3-topshiriq",
      "desc": "Faqat 1 va k ning o'rnini almashtiruvchi o'rin almashtirish inversiyalar soni",
      "topic": "perm_inversions",
      "preferredMethod": "Inversiyalar juftliklarini tahlil qilish",
      "data": {
        "perm": "5 2 3 4 1",
        "k": 5,
        "formula": "I = 2k - 3",
        "type": "transposition_1_k"
      }
    },
    {
      "id": "2_4",
      "taskNo": "4",
      "letter": "",
      "label": "4-topshiriq",
      "desc": "Qanday o'rin almashtirishlarning inversiyalar soni eng katta bo'ladi?",
      "topic": "perm_inversions",
      "preferredMethod": "Inversiyalar juftliklarini tahlil qilish",
      "data": {
        "perm": "5 4 3 2 1",
        "desc": "Teskari tartib: (n, n-1, ..., 2, 1), maksimal inversiyalar soni I_max = n(n-1)/2",
        "type": "max_inversions"
      }
    },
    {
      "id": "2_5",
      "taskNo": "5",
      "letter": "",
      "label": "5-topshiriq",
      "desc": "Agar o'rniga qo'yish inversiyalar soni k bo'lsa, teskari tartibdagi o'rniga qo'yish inversiyalar sonini toping",
      "topic": "perm_inversions",
      "preferredMethod": "Inversiyalar juftliklarini tahlil qilish",
      "data": {
        "formula": "I_rev = n(n-1)/2 - k",
        "type": "inversion_duality"
      }
    },
    {
      "id": "2_6_a",
      "taskNo": "6",
      "letter": "a",
      "label": "6-topshiriq, a) misol",
      "desc": "O'rniga qo'yishlarni ko'paytiring: (1 2 3 4 / 4 1 3 2) · (1 2 3 4 / 3 2 4 1)",
      "topic": "perm_inversions",
      "preferredMethod": "Permutatsiyalar ko'paytmasi usuli",
      "data": {
        "p1": [
          4,
          1,
          3,
          2
        ],
        "p2": [
          3,
          2,
          4,
          1
        ],
        "perm": "4 1 3 2",
        "type": "perm_mult"
      }
    },
    {
      "id": "2_6_b",
      "taskNo": "6",
      "letter": "b",
      "label": "6-topshiriq, b) misol",
      "desc": "O'rniga qo'yishlarni ko'paytiring: (1..6 / 2 4 1 5 6 3) · (1..6 / 3 6 4 5 2 1)",
      "topic": "perm_inversions",
      "preferredMethod": "Permutatsiyalar ko'paytmasi usuli",
      "data": {
        "p1": [
          2,
          4,
          1,
          5,
          6,
          3
        ],
        "p2": [
          3,
          6,
          4,
          5,
          2,
          1
        ],
        "perm": "2 4 1 5 6 3",
        "type": "perm_mult"
      }
    },
    {
      "id": "2_7_a",
      "taskNo": "7",
      "letter": "a",
      "label": "7-topshiriq, a) misol",
      "desc": "Hisoblang: A⁵ bu yerda A = (1 2 3 4 5 / 2 4 5 1 3)",
      "topic": "perm_inversions",
      "preferredMethod": "Permutatsiya darajasini topish (Aⁿ)",
      "data": {
        "perm": "2 4 5 1 3",
        "power": 5,
        "type": "perm_power"
      }
    },
    {
      "id": "2_7_b",
      "taskNo": "7",
      "letter": "b",
      "label": "7-topshiriq, b) misol",
      "desc": "Hisoblang: A¹⁰⁰ bu yerda A = (1 2 3 4 5 6 / 3 4 1 5 6 2)",
      "topic": "perm_inversions",
      "preferredMethod": "Permutatsiya darajasini topish (Aⁿ)",
      "data": {
        "perm": "3 4 1 5 6 2",
        "power": 100,
        "type": "perm_power"
      }
    },
    {
      "id": "2_8",
      "taskNo": "8",
      "letter": "",
      "label": "8-topshiriq",
      "desc": "A = (1..8 / 4 7 8 5 1 3 2 6) uchun A¹⁰⁰ ni toping (Sikllarga ajratish usuli)",
      "topic": "perm_inversions",
      "preferredMethod": "Sikllarga ajratish usuli",
      "data": {
        "perm": "4 7 8 5 1 3 2 6",
        "power": 100,
        "type": "perm_cycle_power"
      }
    },
    {
      "id": "2_9",
      "taskNo": "9",
      "letter": "",
      "label": "9-topshiriq",
      "desc": "A = (1..10 / 3 5 4 1 7 10 2 6 9 8) uchun A¹⁰⁰ ni toping",
      "topic": "perm_inversions",
      "preferredMethod": "Sikllarga ajratish usuli",
      "data": {
        "perm": "3 5 4 1 7 10 2 6 9 8",
        "power": 100,
        "type": "perm_cycle_power"
      }
    },
    {
      "id": "2_10",
      "taskNo": "10",
      "letter": "",
      "label": "10-topshiriq",
      "desc": "A · X · B = C tenglikdan X o'rniga qo'yishni toping (X = A⁻¹ · C · B⁻¹)",
      "topic": "perm_inversions",
      "preferredMethod": "Teskari o'rniga qo'yish usuli",
      "data": {
        "A": [
          7,
          3,
          2,
          1,
          6,
          5,
          4
        ],
        "B": [
          3,
          1,
          2,
          7,
          4,
          5,
          6
        ],
        "C": [
          5,
          1,
          3,
          6,
          4,
          7,
          2
        ],
        "perm": "7 3 2 1 6 5 4",
        "type": "perm_equation"
      }
    }
  ],
  "amaliy_3": [
    {
      "id": "3_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "2-tartibli determinant: det([5, 2; 7, 3])",
      "topic": "det_calc",
      "data": {
        "dim": 2,
        "A": [
          [
            5,
            2
          ],
          [
            7,
            3
          ]
        ]
      }
    },
    {
      "id": "3_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "2-tartibli determinant: det([1, 2; 3, 4])",
      "topic": "det_calc",
      "data": {
        "dim": 2,
        "A": [
          [
            1,
            2
          ],
          [
            3,
            4
          ]
        ]
      }
    },
    {
      "id": "3_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "2-tartibli determinant: det([3, 2; 8, 5])",
      "topic": "det_calc",
      "data": {
        "dim": 2,
        "A": [
          [
            3,
            2
          ],
          [
            8,
            5
          ]
        ]
      }
    },
    {
      "id": "3_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "2-tartibli determinant: det([6, 9; 8, 12])",
      "topic": "det_calc",
      "data": {
        "dim": 2,
        "A": [
          [
            6,
            9
          ],
          [
            8,
            12
          ]
        ]
      }
    },
    {
      "id": "3_2_a",
      "taskNo": "2",
      "letter": "a",
      "label": "2-topshiriq, a) misol",
      "desc": "3-tartibli determinant: [3, 2, 1; 2, 5, 3; 3, 4, 2]",
      "topic": "det_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            3,
            2,
            1
          ],
          [
            2,
            5,
            3
          ],
          [
            3,
            4,
            2
          ]
        ]
      }
    },
    {
      "id": "3_2_b",
      "taskNo": "2",
      "letter": "b",
      "label": "2-topshiriq, b) misol",
      "desc": "3-tartibli determinant: [4, -3, 5; 3, -2, 8; 1, -7, -5]",
      "topic": "det_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            4,
            -3,
            5
          ],
          [
            3,
            -2,
            8
          ],
          [
            1,
            -7,
            -5
          ]
        ]
      }
    },
    {
      "id": "3_2_c",
      "taskNo": "2",
      "letter": "c",
      "label": "2-topshiriq, c) misol",
      "desc": "3-tartibli determinant: [3, 2, -4; 4, 1, -2; 5, 2, -3]",
      "topic": "det_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            3,
            2,
            -4
          ],
          [
            4,
            1,
            -2
          ],
          [
            5,
            2,
            -3
          ]
        ]
      }
    },
    {
      "id": "3_3_a",
      "taskNo": "3",
      "letter": "a",
      "label": "3-topshiriq, a) misol",
      "desc": "4-tartibli determinant (Gauss / Uchburchak usulida)",
      "topic": "det_calc",
      "data": {
        "dim": 4,
        "A": [
          [
            2,
            1,
            4,
            3
          ],
          [
            5,
            2,
            1,
            3
          ],
          [
            3,
            0,
            4,
            0
          ],
          [
            1,
            2,
            3,
            4
          ]
        ]
      }
    },
    {
      "id": "3_4_a",
      "taskNo": "4",
      "letter": "a",
      "label": "4-topshiriq, a) misol",
      "desc": "Quyidagi ifoda 5-tartibli determinantning hadi bo'la oladimi: a₁₃ · a₂₁ · a₃₅ · a₄₂ · a₅₄",
      "topic": "det_calc",
      "preferredMethod": "Haddar tahlili va inversiyalar usuli",
      "data": {
        "dim": 5,
        "indices": [
          3,
          1,
          5,
          2,
          4
        ],
        "type": "term_check"
      }
    },
    {
      "id": "3_4_b",
      "taskNo": "4",
      "letter": "b",
      "label": "4-topshiriq, b) misol",
      "desc": "Quyidagi ifoda 6-tartibli determinantning hadi bo'la oladimi: a₆₁ · a₂₃ · a₄₅ · a₃₆ · a₁₂ · a₅₄",
      "topic": "det_calc",
      "preferredMethod": "Haddar tahlili va inversiyalar usuli",
      "data": {
        "dim": 6,
        "indices": [
          2,
          3,
          6,
          5,
          4,
          1
        ],
        "type": "term_check"
      }
    },
    {
      "id": "3_5",
      "taskNo": "5",
      "letter": "",
      "label": "5-topshiriq",
      "desc": "6-tartibli determinantda a₆₂ · a₁₅ · a₃₃ · aₖ₄ · a₄₆ · a₂₁ ko'paytma manfiy ishorali bo'ladigan i va k qiymatlarini tanlang",
      "topic": "det_calc",
      "preferredMethod": "Haddar tahlili va inversiyalar usuli",
      "data": {
        "dim": 6,
        "known": {
          "1": 5,
          "2": 1,
          "3": 3,
          "4": 6,
          "6": 2
        },
        "missing": [
          "i",
          "k"
        ],
        "type": "find_term_indices"
      }
    },
    {
      "id": "3_6",
      "taskNo": "6",
      "letter": "",
      "label": "6-topshiriq",
      "desc": "7-tartibli determinantda a₄₇ · a₆₃ · a₁ᵢ · a₅₅ · a₇ₖ · a₂₄ · a₃₁ ko'paytma musbat ishorali bo'ladigan i va k larni tanlang",
      "topic": "det_calc",
      "preferredMethod": "Haddar tahlili va inversiyalar usuli",
      "data": {
        "dim": 7,
        "known": {
          "2": 4,
          "3": 1,
          "4": 7,
          "5": 5,
          "6": 3
        },
        "type": "find_term_indices"
      }
    },
    {
      "id": "3_7",
      "taskNo": "7",
      "letter": "",
      "label": "7-topshiriq",
      "desc": "4-tartibli determinantning a₁₂ elementni o'z ichiga oladigan va musbat ishora bilan qatnashadigan hadlarini toping",
      "topic": "det_calc",
      "preferredMethod": "Laplas teoremasi (Satr/ustun bo'yicha yoyish)",
      "data": {
        "dim": 4,
        "element": "a12",
        "type": "cofactor_terms"
      }
    },
    {
      "id": "3_8",
      "taskNo": "8",
      "letter": "",
      "label": "8-topshiriq",
      "desc": "Determinantning x⁴ va x³ birhadlari koeffitsiyentlarini aniqlang: [[x, 1, 2, 3], [1, x, 4, 2], [2, 1, x, 3], [3, 2, 1, x]]",
      "topic": "det_calc",
      "preferredMethod": "Gauss usuli (Uchburchak ko'rinishga keltirish)",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            1,
            2,
            3
          ],
          [
            1,
            1,
            4,
            2
          ],
          [
            2,
            1,
            1,
            3
          ],
          [
            3,
            2,
            1,
            1
          ]
        ],
        "type": "poly_det_coeffs"
      }
    },
    {
      "id": "3_9_a",
      "taskNo": "9",
      "letter": "a",
      "label": "9-topshiriq, a) misol",
      "desc": "4-tartibli determinant: [1, 1, 1, 1; 1, -1, 2, 2; 1, 1, -1, 3; 1, 1, 1, -1]",
      "topic": "det_calc",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            1,
            1,
            1
          ],
          [
            1,
            -1,
            2,
            2
          ],
          [
            1,
            1,
            -1,
            3
          ],
          [
            1,
            1,
            1,
            -1
          ]
        ]
      }
    },
    {
      "id": "3_9_b",
      "taskNo": "9",
      "letter": "b",
      "label": "9-topshiriq, b) misol",
      "desc": "4-tartibli determinant: [2, -5, 1, 2; -3, 7, -1, 4; 5, -9, 2, 7; 4, -6, 1, 2]",
      "topic": "det_calc",
      "data": {
        "dim": 4,
        "A": [
          [
            2,
            -5,
            1,
            2
          ],
          [
            -3,
            7,
            -1,
            4
          ],
          [
            5,
            -9,
            2,
            7
          ],
          [
            4,
            -6,
            1,
            2
          ]
        ]
      }
    },
    {
      "id": "3_9_c",
      "taskNo": "9",
      "letter": "c",
      "label": "9-topshiriq, c) misol",
      "desc": "5-tartibli determinant (5x5 Gauss usulida hisoblash)",
      "topic": "det_calc",
      "data": {
        "dim": 5,
        "A": [
          [
            2,
            1,
            4,
            3,
            5
          ],
          [
            3,
            4,
            0,
            5,
            0
          ],
          [
            3,
            4,
            5,
            2,
            1
          ],
          [
            1,
            5,
            2,
            4,
            3
          ],
          [
            4,
            6,
            0,
            7,
            0
          ]
        ]
      }
    },
    {
      "id": "3_9_d",
      "taskNo": "9",
      "letter": "d",
      "label": "9-topshiriq, d) misol",
      "desc": "6-tartibli determinant (6x6 Gauss usulida hisoblash)",
      "topic": "det_calc",
      "data": {
        "dim": 6,
        "A": [
          [
            1,
            2,
            0,
            0,
            0,
            1
          ],
          [
            2,
            1,
            1,
            0,
            0,
            0
          ],
          [
            0,
            1,
            2,
            1,
            0,
            0
          ],
          [
            0,
            0,
            1,
            2,
            1,
            0
          ],
          [
            0,
            0,
            0,
            1,
            2,
            1
          ],
          [
            1,
            0,
            0,
            0,
            1,
            2
          ]
        ]
      }
    },
    {
      "id": "3_10",
      "taskNo": "10",
      "letter": "",
      "label": "10-topshiriq",
      "desc": "Elementlari a_ij = min(i, j) shartni qanoatlantiruvchi n-tartibli determinantni hisoblang (det = 1)",
      "topic": "det_calc",
      "preferredMethod": "Gauss usuli (Uchburchak ko'rinishga keltirish)",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            1,
            1,
            1
          ],
          [
            1,
            2,
            2,
            2
          ],
          [
            1,
            2,
            3,
            3
          ],
          [
            1,
            2,
            3,
            4
          ]
        ],
        "formula": "det(A) = 1",
        "type": "min_matrix_det"
      }
    },
    {
      "id": "3_11",
      "taskNo": "11",
      "letter": "",
      "label": "11-topshiriq",
      "desc": "Elementlari a_ij = max(i, j) shartni qanoatlantiruvchi n-tartibli determinantni hisoblang (det = (-1)ⁿ⁻¹ · n)",
      "topic": "det_calc",
      "preferredMethod": "Gauss usuli (Uchburchak ko'rinishga keltirish)",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            2,
            3,
            4
          ],
          [
            2,
            2,
            3,
            4
          ],
          [
            3,
            3,
            3,
            4
          ],
          [
            4,
            4,
            4,
            4
          ]
        ],
        "formula": "det(A) = (-1)^(n-1) * n",
        "type": "max_matrix_det"
      }
    },
    {
      "id": "3_12",
      "taskNo": "12",
      "letter": "",
      "label": "12-topshiriq",
      "desc": "Determinantni uchburchak ko'rinishga keltirib hisoblang: n-tartibli diagonal va pog'onali determinant",
      "topic": "det_calc",
      "preferredMethod": "Gauss usuli (Uchburchak ko'rinishga keltirish)",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            2,
            3,
            4
          ],
          [
            -1,
            0,
            3,
            4
          ],
          [
            -1,
            -2,
            0,
            4
          ],
          [
            -1,
            -2,
            -3,
            0
          ]
        ]
      }
    },
    {
      "id": "3_13",
      "taskNo": "13",
      "letter": "",
      "label": "13-topshiriq",
      "desc": "Chiziqli ko'paytuvchilarga ajratish usulidan foydalanib determinantni hisoblang",
      "topic": "det_calc",
      "preferredMethod": "Chiziqli ko'paytuvchilarga ajratish usuli",
      "data": {
        "dim": 4,
        "A": [
          [
            2,
            1,
            2,
            3
          ],
          [
            1,
            2,
            2,
            3
          ],
          [
            1,
            2,
            3,
            3
          ],
          [
            2,
            3,
            1,
            2
          ]
        ],
        "type": "linear_factors"
      }
    }
  ],
  "amaliy_4": [
    {
      "id": "4_1",
      "taskNo": "1",
      "letter": "",
      "label": "1-topshiriq",
      "desc": "4-tartibli determinantni 3-qator bo'yicha yoyish",
      "topic": "minors_cofactors",
      "data": {
        "dim": 4,
        "A": [
          [
            2,
            -3,
            4,
            1
          ],
          [
            4,
            -2,
            3,
            2
          ],
          [
            1,
            2,
            3,
            4
          ],
          [
            3,
            -1,
            4,
            3
          ]
        ]
      }
    },
    {
      "id": "4_2",
      "taskNo": "2",
      "letter": "",
      "label": "2-topshiriq",
      "desc": "4-tartibli determinantni 2-ustun bo'yicha yoyish",
      "topic": "minors_cofactors",
      "data": {
        "dim": 4,
        "A": [
          [
            5,
            2,
            2,
            -1
          ],
          [
            4,
            1,
            4,
            -3
          ],
          [
            2,
            3,
            3,
            -2
          ],
          [
            4,
            2,
            5,
            -4
          ]
        ]
      }
    },
    {
      "id": "4_lap_2_a",
      "taskNo": "2",
      "letter": "a",
      "label": "Laplas 2-topshiriq, a) misol",
      "desc": "5x5 Determinantni Laplas usulida hisoblash: [[5,2,1,3,2], [4,0,7,0,0], [2,3,7,5,3], [2,3,6,4,5], [3,0,4,0,0]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Ustun bo'yicha yoyish)",
      "data": {
        "dim": 5,
        "rows": 5,
        "cols": 5,
        "A": [
          [
            5,
            2,
            1,
            3,
            2
          ],
          [
            4,
            0,
            7,
            0,
            0
          ],
          [
            2,
            3,
            7,
            5,
            3
          ],
          [
            2,
            3,
            6,
            4,
            5
          ],
          [
            3,
            0,
            4,
            0,
            0
          ]
        ],
        "row": 0
      }
    },
    {
      "id": "4_lap_2_b",
      "taskNo": "2",
      "letter": "b",
      "label": "Laplas 2-topshiriq, b) misol",
      "desc": "5x5 Determinantni Laplas usulida hisoblash: [[2,1,4,3,5], [3,4,0,5,0], [3,4,5,2,1], [1,5,2,4,3], [4,6,0,7,0]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Ustun bo'yicha yoyish)",
      "data": {
        "dim": 5,
        "rows": 5,
        "cols": 5,
        "A": [
          [
            2,
            1,
            4,
            3,
            5
          ],
          [
            3,
            4,
            0,
            5,
            0
          ],
          [
            3,
            4,
            5,
            2,
            1
          ],
          [
            1,
            5,
            2,
            4,
            3
          ],
          [
            4,
            6,
            0,
            7,
            0
          ]
        ],
        "row": 0
      }
    },
    {
      "id": "4_lap_2_c",
      "taskNo": "2",
      "letter": "c",
      "label": "Laplas 2-topshiriq, c) misol",
      "desc": "5x5 Determinantni Laplas usulida hisoblash: [[7,2,1,3,4], [1,0,2,0,3], [3,0,4,0,7], [6,3,2,4,5], [5,1,2,2,3]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Ustun bo'yicha yoyish)",
      "data": {
        "dim": 5,
        "rows": 5,
        "cols": 5,
        "A": [
          [
            7,
            2,
            1,
            3,
            4
          ],
          [
            1,
            0,
            2,
            0,
            3
          ],
          [
            3,
            0,
            4,
            0,
            7
          ],
          [
            6,
            3,
            2,
            4,
            5
          ],
          [
            5,
            1,
            2,
            2,
            3
          ]
        ],
        "row": 0
      }
    },
    {
      "id": "4_3_a",
      "taskNo": "3",
      "letter": "a",
      "label": "3-topshiriq, a) misol",
      "desc": "3-tartibli matritsaning barcha minor va algebraik to'ldiruvchilari",
      "topic": "minors_cofactors",
      "data": {
        "dim": 3,
        "A": [
          [
            2,
            1,
            3
          ],
          [
            5,
            3,
            2
          ],
          [
            1,
            4,
            3
          ]
        ]
      }
    },
    {
      "id": "4_lap_3_a",
      "taskNo": "3",
      "letter": "a",
      "label": "Laplas 3-topshiriq, a) misol",
      "desc": "5x5 Determinant: [[2,-1,3,4,-5], [4,-2,7,8,-7], [-6,4,-9,-2,3], [3,-2,4,1,-2], [-2,6,5,4,-3]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Ustun bo'yicha yoyish)",
      "data": {
        "dim": 5,
        "rows": 5,
        "cols": 5,
        "A": [
          [
            2,
            -1,
            3,
            4,
            -5
          ],
          [
            4,
            -2,
            7,
            8,
            -7
          ],
          [
            -6,
            4,
            -9,
            -2,
            3
          ],
          [
            3,
            -2,
            4,
            1,
            -2
          ],
          [
            -2,
            6,
            5,
            4,
            -3
          ]
        ],
        "row": 0
      }
    },
    {
      "id": "4_3_b",
      "taskNo": "3",
      "letter": "b",
      "label": "3-topshiriq, b) misol",
      "desc": "5-tartibli determinant: Laplas teoremasi bo'yicha yoyish",
      "topic": "minors_cofactors",
      "data": {
        "dim": 5,
        "A": [
          [
            5,
            2,
            1,
            3,
            2
          ],
          [
            4,
            0,
            7,
            0,
            0
          ],
          [
            2,
            3,
            7,
            5,
            3
          ],
          [
            2,
            3,
            6,
            4,
            5
          ],
          [
            3,
            0,
            4,
            0,
            0
          ]
        ]
      }
    },
    {
      "id": "4_lap_3_b",
      "taskNo": "3",
      "letter": "b",
      "label": "Laplas 3-topshiriq, b) misol",
      "desc": "5x5 Determinant: [[5,-5,-3,4,2], [-4,4,3,6,3], [3,-1,5,-9,-5], [-7,7,6,8,4], [5,-3,2,-1,-2]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Ustun bo'yicha yoyish)",
      "data": {
        "dim": 5,
        "rows": 5,
        "cols": 5,
        "A": [
          [
            5,
            -5,
            -3,
            4,
            2
          ],
          [
            -4,
            4,
            3,
            6,
            3
          ],
          [
            3,
            -1,
            5,
            -9,
            -5
          ],
          [
            -7,
            7,
            6,
            8,
            4
          ],
          [
            5,
            -3,
            2,
            -1,
            -2
          ]
        ],
        "row": 0
      }
    },
    {
      "id": "4_lap_3_c",
      "taskNo": "3",
      "letter": "c",
      "label": "Laplas 3-topshiriq, c) misol",
      "desc": "5x5 Determinant: [[2,1,2,3,2], [3,-2,7,5,-1], [3,-1,-5,-3,-2], [5,-6,4,2,-4], [2,-3,3,1,-2]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Ustun bo'yicha yoyish)",
      "data": {
        "dim": 5,
        "rows": 5,
        "cols": 5,
        "A": [
          [
            2,
            1,
            2,
            3,
            2
          ],
          [
            3,
            -2,
            7,
            5,
            -1
          ],
          [
            3,
            -1,
            -5,
            -3,
            -2
          ],
          [
            5,
            -6,
            4,
            2,
            -4
          ],
          [
            2,
            -3,
            3,
            1,
            -2
          ]
        ],
        "row": 0
      }
    },
    {
      "id": "4_lap_3_d",
      "taskNo": "3",
      "letter": "d",
      "label": "Laplas 3-topshiriq, d) misol",
      "desc": "5x5 Determinant: [[2,-3,5,-2,1], [3,2,5,-4,-3], [-2,3,-4,2,-3], [6,4,7,-8,-1], [2,-1,7,-8,-1]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Ustun bo'yicha yoyish)",
      "data": {
        "dim": 5,
        "rows": 5,
        "cols": 5,
        "A": [
          [
            2,
            -3,
            5,
            -2,
            1
          ],
          [
            3,
            2,
            5,
            -4,
            -3
          ],
          [
            -2,
            3,
            -4,
            2,
            -3
          ],
          [
            6,
            4,
            7,
            -8,
            -1
          ],
          [
            2,
            -1,
            7,
            -8,
            -1
          ]
        ],
        "row": 0
      }
    },
    {
      "id": "4_lap_4_a",
      "taskNo": "4",
      "letter": "a",
      "label": "Laplas 4-topshiriq, a) misol",
      "desc": "6x6 Blok uchburchak determinant: [[1,2,0,0,0,0], [3,4,0,0,0,0], [7,6,5,4,0,0], [2,3,4,5,0,0], [5,1,2,6,7,3], [2,7,5,3,4,1]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Ustun bo'yicha yoyish)",
      "data": {
        "dim": 6,
        "rows": 6,
        "cols": 6,
        "A": [
          [
            1,
            2,
            0,
            0,
            0,
            0
          ],
          [
            3,
            4,
            0,
            0,
            0,
            0
          ],
          [
            7,
            6,
            5,
            4,
            0,
            0
          ],
          [
            2,
            3,
            4,
            5,
            0,
            0
          ],
          [
            5,
            1,
            2,
            6,
            7,
            3
          ],
          [
            2,
            7,
            5,
            3,
            4,
            1
          ]
        ],
        "row": 0
      }
    },
    {
      "id": "4_lap_4_b",
      "taskNo": "4",
      "letter": "b",
      "label": "Laplas 4-topshiriq, b) misol",
      "desc": "6x6 Blok determinant: [[1,2,3,4,5,3], [6,5,7,8,4,2], [9,8,6,7,0,0], [3,2,4,5,0,0], [3,4,0,0,0,0], [5,6,0,0,0,0]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Ustun bo'yicha yoyish)",
      "data": {
        "dim": 6,
        "rows": 6,
        "cols": 6,
        "A": [
          [
            1,
            2,
            3,
            4,
            5,
            3
          ],
          [
            6,
            5,
            7,
            8,
            4,
            2
          ],
          [
            9,
            8,
            6,
            7,
            0,
            0
          ],
          [
            3,
            2,
            4,
            5,
            0,
            0
          ],
          [
            3,
            4,
            0,
            0,
            0,
            0
          ],
          [
            5,
            6,
            0,
            0,
            0,
            0
          ]
        ],
        "row": 0
      }
    },
    {
      "id": "4_5_a",
      "taskNo": "5",
      "letter": "a",
      "label": "5-topshiriq, a) misol",
      "desc": "n-tartibli parametrli tridiagonal determinantni hisoblang",
      "topic": "minors_cofactors",
      "preferredMethod": "Rekurrent munosabatlar usuli",
      "data": {
        "dim": 4,
        "A": [
          [
            2,
            1,
            0,
            0
          ],
          [
            1,
            2,
            1,
            0
          ],
          [
            0,
            1,
            2,
            1
          ],
          [
            0,
            0,
            1,
            2
          ]
        ],
        "type": "tridiagonal"
      }
    },
    {
      "id": "4_5_b",
      "taskNo": "5",
      "letter": "b",
      "label": "5-topshiriq, b) misol",
      "desc": "Ko'phad koeffitsiyentlaridan tuzilgan n-tartibli determinant",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Satr bo'yicha yoyish)",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            -1,
            0,
            0
          ],
          [
            2,
            1,
            -1,
            0
          ],
          [
            3,
            0,
            1,
            -1
          ],
          [
            4,
            0,
            0,
            1
          ]
        ]
      }
    },
    {
      "id": "4_6_a",
      "taskNo": "6",
      "letter": "a",
      "label": "6-topshiriq, a) misol",
      "desc": "Laplas teoremasidan foydalanib 5-tartibli determinantni hisoblang: [[5, 2, 1, 3, 2], [4, 0, 7, 0, 0], [2, 3, 7, 5, 3], [2, 3, 6, 4, 5], [3, 0, 4, 0, 0]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (k-tartibli minorlar)",
      "data": {
        "dim": 5,
        "A": [
          [
            5,
            2,
            1,
            3,
            2
          ],
          [
            4,
            0,
            7,
            0,
            0
          ],
          [
            2,
            3,
            7,
            5,
            3
          ],
          [
            2,
            3,
            6,
            4,
            5
          ],
          [
            3,
            0,
            4,
            0,
            0
          ]
        ]
      }
    },
    {
      "id": "4_6_b",
      "taskNo": "6",
      "letter": "b",
      "label": "6-topshiriq, b) misol",
      "desc": "Laplas teoremasi bilan 5x5 determinant: [[2, 1, 4, 3, 5], [3, 4, 0, 5, 0], [3, 4, 5, 2, 1], [1, 5, 2, 4, 3], [4, 6, 0, 7, 0]]",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (k-tartibli minorlar)",
      "data": {
        "dim": 5,
        "A": [
          [
            2,
            1,
            4,
            3,
            5
          ],
          [
            3,
            4,
            0,
            5,
            0
          ],
          [
            3,
            4,
            5,
            2,
            1
          ],
          [
            1,
            5,
            2,
            4,
            3
          ],
          [
            4,
            6,
            0,
            7,
            0
          ]
        ]
      }
    },
    {
      "id": "4_7",
      "taskNo": "7",
      "letter": "",
      "label": "7-topshiriq",
      "desc": "Laplas teoremasidan foydalanib 5-tartibli umumiy determinantni hisoblang",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (k-tartibli minorlar)",
      "data": {
        "dim": 5,
        "A": [
          [
            2,
            -1,
            3,
            4,
            -5
          ],
          [
            4,
            -2,
            7,
            8,
            -7
          ],
          [
            -6,
            4,
            -9,
            -2,
            3
          ],
          [
            3,
            -2,
            4,
            1,
            -2
          ],
          [
            -2,
            6,
            5,
            4,
            -3
          ]
        ]
      }
    },
    {
      "id": "4_8",
      "taskNo": "8",
      "letter": "",
      "label": "8-topshiriq",
      "desc": "Laplas teoremasi bilan 6-tartibli blok-uchburchak matritsa determinantini hisoblang (det = det(A₁) · det(A₂))",
      "topic": "minors_cofactors",
      "preferredMethod": "Blok matritsalar usuli",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            2,
            0,
            0
          ],
          [
            3,
            4,
            0,
            0
          ],
          [
            7,
            6,
            5,
            4
          ],
          [
            2,
            3,
            4,
            5
          ]
        ],
        "type": "block_det"
      }
    },
    {
      "id": "4_9",
      "taskNo": "9",
      "letter": "",
      "label": "9-topshiriq",
      "desc": "Parametrli va trigonometrik determinantlarni hisoblash",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (Satr bo'yicha yoyish)",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            0,
            2,
            3
          ],
          [
            0,
            1,
            0,
            2
          ],
          [
            3,
            2,
            4,
            5
          ],
          [
            1,
            0,
            0,
            1
          ]
        ]
      }
    },
    {
      "id": "4_10",
      "taskNo": "10",
      "letter": "",
      "label": "10-topshiriq",
      "desc": "2n-tartibli blokli maxsus determinantlarni hisoblash",
      "topic": "minors_cofactors",
      "preferredMethod": "Blok matritsalar usuli",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            1,
            0,
            0
          ],
          [
            2,
            1,
            0,
            0
          ],
          [
            0,
            0,
            3,
            2
          ],
          [
            0,
            0,
            1,
            4
          ]
        ]
      }
    },
    {
      "id": "4_11",
      "taskNo": "11",
      "letter": "",
      "label": "11-topshiriq",
      "desc": "Umumiy Laplas determinantlari va sirkulyant matritsalar",
      "topic": "minors_cofactors",
      "preferredMethod": "Laplas teoremasi (k-tartibli minorlar)",
      "data": {
        "dim": 4,
        "A": [
          [
            2,
            1,
            1,
            1
          ],
          [
            1,
            2,
            1,
            1
          ],
          [
            1,
            1,
            2,
            1
          ],
          [
            1,
            1,
            1,
            2
          ]
        ]
      }
    }
  ],
  "amaliy_5": [
    {
      "id": "5_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "2x2 teskari matritsa: A = [1, 2; 3, 4]",
      "topic": "inv_calc",
      "data": {
        "dim": 2,
        "A": [
          [
            1,
            2
          ],
          [
            3,
            4
          ]
        ]
      }
    },
    {
      "id": "5_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "2x2 teskari matritsa: A = [3, 4; 5, 7]",
      "topic": "inv_calc",
      "data": {
        "dim": 2,
        "A": [
          [
            3,
            4
          ],
          [
            5,
            7
          ]
        ]
      }
    },
    {
      "id": "5_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "2x2 teskari matritsa: A = [2, 5; 1, 3]",
      "topic": "inv_calc",
      "data": {
        "dim": 2,
        "A": [
          [
            2,
            5
          ],
          [
            1,
            3
          ]
        ]
      }
    },
    {
      "id": "5_2_a",
      "taskNo": "2",
      "letter": "a",
      "label": "2-topshiriq, a) misol",
      "desc": "3x3 teskari matritsa: [2, 2, 3; 1, -1, 0; -1, 2, 1]",
      "topic": "inv_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            2,
            2,
            3
          ],
          [
            1,
            -1,
            0
          ],
          [
            -1,
            2,
            1
          ]
        ]
      }
    },
    {
      "id": "5_2_b",
      "taskNo": "2",
      "letter": "b",
      "label": "2-topshiriq, b) misol",
      "desc": "3x3 teskari matritsa: [1, 2, 2; 2, 1, -2; 2, -2, 1]",
      "topic": "inv_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            1,
            2,
            2
          ],
          [
            2,
            1,
            -2
          ],
          [
            2,
            -2,
            1
          ]
        ]
      }
    },
    {
      "id": "5_2_c",
      "taskNo": "2",
      "letter": "c",
      "label": "2-topshiriq, c) misol",
      "desc": "3x3 teskari matritsa: [1, 1, 1; 1, 2, -1; -1, 1, 2]",
      "topic": "inv_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            1,
            1,
            1
          ],
          [
            1,
            2,
            -1
          ],
          [
            -1,
            1,
            2
          ]
        ]
      }
    },
    {
      "id": "5_2_d",
      "taskNo": "2",
      "letter": "d",
      "label": "2-topshiriq, d) misol",
      "desc": "3x3 teskari matritsa: [2, 5, 7; 6, 3, 4; 5, -2, -3]",
      "topic": "inv_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            2,
            5,
            7
          ],
          [
            6,
            3,
            4
          ],
          [
            5,
            -2,
            -3
          ]
        ]
      }
    },
    {
      "id": "5_3_a",
      "taskNo": "3",
      "letter": "a",
      "label": "3-topshiriq, a) misol",
      "desc": "4x4 teskari matritsa: [1, 1, 1, 1; 1, 1, -1, -1; 1, -1, 1, -1; 1, -1, -1, 1]",
      "topic": "inv_calc",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            1,
            1,
            1
          ],
          [
            1,
            1,
            -1,
            -1
          ],
          [
            1,
            -1,
            1,
            -1
          ],
          [
            1,
            -1,
            -1,
            1
          ]
        ]
      }
    },
    {
      "id": "5_3_b",
      "taskNo": "3",
      "letter": "b",
      "label": "3-topshiriq, b) misol",
      "desc": "4x4 teskari matritsa (Jordan-Gauss usulida)",
      "topic": "inv_calc",
      "data": {
        "dim": 4,
        "A": [
          [
            2,
            1,
            0,
            0
          ],
          [
            3,
            2,
            0,
            0
          ],
          [
            1,
            1,
            3,
            4
          ],
          [
            2,
            -1,
            2,
            3
          ]
        ]
      }
    },
    {
      "id": "5_4_a",
      "taskNo": "4",
      "letter": "a",
      "label": "4-topshiriq (5x5)",
      "desc": "5x5 teskari matritsa (Jordan-Gauss usulida)",
      "topic": "inv_calc",
      "data": {
        "dim": 5,
        "A": [
          [
            2,
            1,
            0,
            0,
            0
          ],
          [
            1,
            2,
            1,
            0,
            0
          ],
          [
            0,
            1,
            2,
            1,
            0
          ],
          [
            0,
            0,
            1,
            2,
            1
          ],
          [
            0,
            0,
            0,
            1,
            2
          ]
        ]
      }
    },
    {
      "id": "5_5_a",
      "taskNo": "5",
      "letter": "a",
      "label": "5-topshiriq, a) misol",
      "desc": "Matritsaviy tenglamani yeching: [[1, 2], [3, 4]] · X = [[3, 5], [5, 9]] (X = A⁻¹ · B)",
      "topic": "inv_calc",
      "preferredMethod": "Matritsaviy tenglamani teskari matritsa bilan yechish",
      "data": {
        "dim": 2,
        "A": [
          [
            1,
            2
          ],
          [
            3,
            4
          ]
        ],
        "B": [
          [
            3,
            5
          ],
          [
            5,
            9
          ]
        ],
        "type": "ax_eq_b"
      }
    },
    {
      "id": "5_5_b",
      "taskNo": "5",
      "letter": "b",
      "label": "5-topshiriq, b) misol",
      "desc": "Matritsaviy tenglamani yeching: X · [[3, -2], [5, -4]] = [[-1, 2], [-5, 6]] (X = B · A⁻¹)",
      "topic": "inv_calc",
      "preferredMethod": "Matritsaviy tenglamani teskari matritsa bilan yechish",
      "data": {
        "dim": 2,
        "A": [
          [
            3,
            -2
          ],
          [
            5,
            -4
          ]
        ],
        "B": [
          [
            -1,
            2
          ],
          [
            -5,
            6
          ]
        ],
        "type": "xa_eq_b"
      }
    },
    {
      "id": "5_6",
      "taskNo": "6",
      "letter": "",
      "label": "6-topshiriq",
      "desc": "Matritsalar sistemasini yeching: X + A·Y = B, C·X + Y = D",
      "topic": "inv_calc",
      "preferredMethod": "Matritsaviy tenglamani teskari matritsa bilan yechish",
      "data": {
        "dim": 2,
        "A": [
          [
            1,
            1
          ],
          [
            -1,
            1
          ]
        ],
        "B": [
          [
            2,
            8
          ],
          [
            3,
            1
          ]
        ],
        "type": "matrix_system"
      }
    },
    {
      "id": "5_7",
      "taskNo": "7",
      "letter": "",
      "label": "7-topshiriq (Isbot)",
      "desc": "Isbotlang: [A, B; 0, D]⁻¹ = [A⁻¹, -A⁻¹·B·D⁻¹; 0, D⁻¹] blok teskari matritsa formulasi",
      "topic": "inv_calc",
      "preferredMethod": "Blok matritsalar teskarisini topish usuli",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            0,
            2,
            1
          ],
          [
            0,
            1,
            1,
            3
          ],
          [
            0,
            0,
            2,
            1
          ],
          [
            0,
            0,
            1,
            1
          ]
        ],
        "type": "block_proof_upper"
      }
    },
    {
      "id": "5_8",
      "taskNo": "8",
      "letter": "",
      "label": "8-topshiriq (Isbot)",
      "desc": "Isbotlang: [A, 0; C, D]⁻¹ = [A⁻¹, 0; -D⁻¹·C·A⁻¹, D⁻¹] blok teskari matritsa formulasi",
      "topic": "inv_calc",
      "preferredMethod": "Blok matritsalar teskarisini topish usuli",
      "data": {
        "dim": 4,
        "A": [
          [
            2,
            1,
            0,
            0
          ],
          [
            1,
            1,
            0,
            0
          ],
          [
            3,
            1,
            1,
            0
          ],
          [
            1,
            2,
            0,
            1
          ]
        ],
        "type": "block_proof_lower"
      }
    },
    {
      "id": "5_9",
      "taskNo": "9",
      "letter": "",
      "label": "9-topshiriq",
      "desc": "Blok natijalardan foydalanib 4-tartibli matritsaning teskarisini toping",
      "topic": "inv_calc",
      "preferredMethod": "Blok matritsalar teskarisini topish usuli",
      "data": {
        "dim": 4,
        "A": [
          [
            2,
            1,
            0,
            0
          ],
          [
            3,
            2,
            0,
            0
          ],
          [
            1,
            1,
            3,
            4
          ],
          [
            2,
            -1,
            2,
            3
          ]
        ]
      }
    },
    {
      "id": "5_10",
      "taskNo": "10",
      "letter": "",
      "label": "10-topshiriq",
      "desc": "Berilgan A determinantni δ determinantga ko'paytirish orqali hisoblang",
      "topic": "inv_calc",
      "preferredMethod": "Determinantlar ko'paytmasi usuli",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            2,
            3,
            4
          ],
          [
            -1,
            0,
            -3,
            -8
          ],
          [
            -1,
            1,
            0,
            -13
          ],
          [
            2,
            3,
            5,
            15
          ]
        ],
        "type": "det_mult"
      }
    },
    {
      "id": "5_11",
      "taskNo": "11",
      "letter": "",
      "label": "11-topshiriq",
      "desc": "Determinantning kvadratini hisoblang: det(A)² = det(A · Aᵀ)",
      "topic": "inv_calc",
      "preferredMethod": "Determinantlar ko'paytmasi usuli",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            1,
            1,
            1
          ],
          [
            1,
            1,
            -1,
            -1
          ],
          [
            1,
            -1,
            1,
            -1
          ],
          [
            1,
            -1,
            -1,
            1
          ]
        ],
        "type": "det_square"
      }
    },
    {
      "id": "5_12",
      "taskNo": "12",
      "letter": "",
      "label": "12-topshiriq",
      "desc": "Sirkulyant va Vandermond xossalaridan foydalanib determinantlarni hisoblang",
      "topic": "inv_calc",
      "preferredMethod": "Algebraik to'ldiruvchilar usuli (Kofaktorlar)",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            2,
            3,
            4
          ],
          [
            4,
            1,
            2,
            3
          ],
          [
            3,
            4,
            1,
            2
          ],
          [
            2,
            3,
            4,
            1
          ]
        ],
        "type": "circulant_det"
      }
    }
  ],
  "amaliy_6": [
    {
      "id": "6_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "2x2 Kramer: 2x₁ - x₂ = 1, x₁ + 16x₂ = 17",
      "topic": "slae_calc",
      "data": {
        "dim": 2,
        "A": [
          [
            2,
            -1
          ],
          [
            1,
            16
          ]
        ],
        "B": [
          1,
          17
        ]
      }
    },
    {
      "id": "6_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "2x2 Kramer: 2x₁ + 5x₂ = 1, 3x₁ + 7x₂ = 2",
      "topic": "slae_calc",
      "data": {
        "dim": 2,
        "A": [
          [
            2,
            5
          ],
          [
            3,
            7
          ]
        ],
        "B": [
          1,
          2
        ]
      }
    },
    {
      "id": "6_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "3x3 Kramer: x₁+x₂+x₃=6, x₁-x₂-x₃=0, x₁-x₂+x₃=0",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            1,
            1,
            1
          ],
          [
            1,
            -1,
            -1
          ],
          [
            1,
            -1,
            1
          ]
        ],
        "B": [
          6,
          0,
          0
        ]
      }
    },
    {
      "id": "6_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "3x3 Kramer: 2x₁+x₂+x₃=3, x₁+2x₂+x₃=0, x₁+x₂+2x₃=0",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            2,
            1,
            1
          ],
          [
            1,
            2,
            1
          ],
          [
            1,
            1,
            2
          ]
        ],
        "B": [
          3,
          0,
          0
        ]
      }
    },
    {
      "id": "6_1_e",
      "taskNo": "1",
      "letter": "e",
      "label": "1-topshiriq, e) misol",
      "desc": "3x3 Kramer: 2x₁-x₂+3x₃=9, 3x₁-5x₂+x₃=-4, 4x₁-7x₂+x₃=5",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            2,
            -1,
            3
          ],
          [
            3,
            -5,
            1
          ],
          [
            4,
            -7,
            1
          ]
        ],
        "B": [
          9,
          -4,
          5
        ]
      }
    },
    {
      "id": "6_1_f",
      "taskNo": "1",
      "letter": "f",
      "label": "1-topshiriq, f) misol",
      "desc": "3x3 Kramer: 2x₁+3x₂+5x₃=10, 3x₁+7x₂+4x₃=3, x₁+2x₂+2x₃=3",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            2,
            3,
            5
          ],
          [
            3,
            7,
            4
          ],
          [
            1,
            2,
            2
          ]
        ],
        "B": [
          10,
          3,
          3
        ]
      }
    },
    {
      "id": "6_2_a",
      "taskNo": "2",
      "letter": "a",
      "label": "2-topshiriq, a) misol",
      "desc": "3x3 Gauss: 2x₁-x₂+5x₃=10, x₁+x₂-3x₃=-2, 2x₁+4x₂+x₃=1",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            2,
            -1,
            5
          ],
          [
            1,
            1,
            -3
          ],
          [
            2,
            4,
            1
          ]
        ],
        "B": [
          10,
          -2,
          1
        ]
      }
    },
    {
      "id": "6_2_b",
      "taskNo": "2",
      "letter": "b",
      "label": "2-topshiriq, b) misol",
      "desc": "3x3 Gauss: 5x₁+2x₂-4x₃=4, x₁+3x₂+4x₃=3, 2x₁+4x₂+x₃=1",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            5,
            2,
            -4
          ],
          [
            1,
            3,
            4
          ],
          [
            2,
            4,
            1
          ]
        ],
        "B": [
          4,
          3,
          1
        ]
      }
    },
    {
      "id": "6_2_c",
      "taskNo": "2",
      "letter": "c",
      "label": "2-topshiriq, c) misol",
      "desc": "3x3 Gauss: x₁-2x₂+x₃=-4, 3x₁+2x₂-x₃=8, 2x₁-3x₂+2x₃=-6",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            1,
            -2,
            1
          ],
          [
            3,
            2,
            -1
          ],
          [
            2,
            -3,
            2
          ]
        ],
        "B": [
          -4,
          8,
          -6
        ]
      }
    },
    {
      "id": "6_2_d",
      "taskNo": "2",
      "letter": "d",
      "label": "2-topshiriq, d) misol",
      "desc": "3x3 Gauss: 7x₁+4x₂-x₃=13, 3x₁+2x₂+3x₃=3, 2x₁-3x₂+x₃=-10",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            7,
            4,
            -1
          ],
          [
            3,
            2,
            3
          ],
          [
            2,
            -3,
            1
          ]
        ],
        "B": [
          13,
          3,
          -10
        ]
      }
    },
    {
      "id": "6_2_e",
      "taskNo": "2",
      "letter": "e",
      "label": "2-topshiriq, e) misol",
      "desc": "4x4 Gauss: 3x₁+2x₂-5x₃+x₄=3, 2x₁-3x₂+x₃+5x₄=-3, x₁+2x₂-4x₄=-3, x₂-4x₃+9x₄=22",
      "topic": "slae_calc",
      "data": {
        "dim": 4,
        "A": [
          [
            3,
            2,
            -5,
            1
          ],
          [
            2,
            -3,
            1,
            5
          ],
          [
            1,
            2,
            0,
            -4
          ],
          [
            0,
            1,
            -4,
            9
          ]
        ],
        "B": [
          3,
          -3,
          -3,
          22
        ]
      }
    },
    {
      "id": "6_2_f",
      "taskNo": "2",
      "letter": "f",
      "label": "2-topshiriq, f) misol",
      "desc": "4x4 Gauss: 4x₁-3x₂+x₃+5x₄=7, x₁-2x₂-2x₃-3x₄=3, 3x₁-x₂+2x₃=-1, 2x₁+3x₂+2x₃-8x₄=-7",
      "topic": "slae_calc",
      "data": {
        "dim": 4,
        "A": [
          [
            4,
            -3,
            1,
            5
          ],
          [
            1,
            -2,
            -2,
            -3
          ],
          [
            3,
            -1,
            2,
            0
          ],
          [
            2,
            3,
            2,
            -8
          ]
        ],
        "B": [
          7,
          3,
          -1,
          -7
        ]
      }
    },
    {
      "id": "6_3_a",
      "taskNo": "3",
      "letter": "a",
      "label": "3-topshiriq, a) misol",
      "desc": "3x3 Matritsa usulida: 3x₁+2x₂+x₃=5, 2x₁+3x₂+x₃=1, 2x₁+x₂+3x₃=11",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            3,
            2,
            1
          ],
          [
            2,
            3,
            1
          ],
          [
            2,
            1,
            3
          ]
        ],
        "B": [
          5,
          1,
          11
        ]
      }
    },
    {
      "id": "6_3_b",
      "taskNo": "3",
      "letter": "b",
      "label": "3-topshiriq, b) misol",
      "desc": "3x3 Matritsa usulida: x₁+2x₂+4x₃=31, 5x₁+x₂+2x₃=20, 3x₁-x₂+x₃=0",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            1,
            2,
            4
          ],
          [
            5,
            1,
            2
          ],
          [
            3,
            -1,
            1
          ]
        ],
        "B": [
          31,
          20,
          0
        ]
      }
    },
    {
      "id": "6_3_c",
      "taskNo": "3",
      "letter": "c",
      "label": "3-topshiriq, c) misol",
      "desc": "3x3 Matritsa usulida: 5x₁-4x₂+x₃=23, x₁-x₂+x₃=1, 2x₁+4x₂-3x₃=15",
      "topic": "slae_calc",
      "data": {
        "dim": 3,
        "A": [
          [
            5,
            -4,
            1
          ],
          [
            1,
            -1,
            1
          ],
          [
            2,
            4,
            -3
          ]
        ],
        "B": [
          23,
          1,
          15
        ]
      }
    },
    {
      "id": "6_4_a",
      "taskNo": "4",
      "letter": "a",
      "label": "4-topshiriq, a) misol",
      "desc": "4x4 Kramer usulida: 2x₁+2x₂-x₃+x₄=4, 4x₁+3x₂-x₃+2x₄=6, 8x₁+5x₂-3x₃+4x₄=12, 3x₁+3x₂-2x₃+2x₄=6",
      "topic": "slae_calc",
      "data": {
        "dim": 4,
        "A": [
          [
            2,
            2,
            -1,
            1
          ],
          [
            4,
            3,
            -1,
            2
          ],
          [
            8,
            5,
            -3,
            4
          ],
          [
            3,
            3,
            -2,
            2
          ]
        ],
        "B": [
          4,
          6,
          12,
          6
        ]
      }
    },
    {
      "id": "6_5_a",
      "taskNo": "5",
      "letter": "a",
      "label": "5-topshiriq (5x5)",
      "desc": "5x5 Gauss usulida tenglamalar sistemasi",
      "topic": "slae_calc",
      "data": {
        "dim": 5,
        "A": [
          [
            1,
            1,
            1,
            1,
            1
          ],
          [
            1,
            2,
            3,
            4,
            5
          ],
          [
            2,
            1,
            4,
            1,
            2
          ],
          [
            3,
            2,
            1,
            4,
            1
          ],
          [
            1,
            3,
            2,
            1,
            4
          ]
        ],
        "B": [
          15,
          35,
          23,
          24,
          25
        ]
      }
    }
  ],
  "amaliy_7": [
    {
      "id": "7_1",
      "taskNo": "1",
      "letter": "",
      "label": "1-topshiriq",
      "desc": "Vektorlar kombinatsiyasi: a₁=(4,1,3,-2), a₂=(1,2,-3,2), a₃=(16,9,1,-3) uchun 3a₁ + 5a₂ - a₃",
      "topic": "rank_calc",
      "preferredMethod": "Vektorlar chiziqli kombinatsiyasi",
      "data": {
        "rows": 3,
        "cols": 4,
        "A": [
          [
            4,
            1,
            3,
            -2
          ],
          [
            1,
            2,
            -3,
            2
          ],
          [
            16,
            9,
            1,
            -3
          ]
        ],
        "combo": [
          3,
          5,
          -1
        ],
        "type": "vector_comb"
      }
    },
    {
      "id": "7_2",
      "taskNo": "2",
      "letter": "",
      "label": "2-topshiriq",
      "desc": "Vektorli tenglama: a₁ + 2a₂ + 3a₃ + 4x = 0 dan x ni topish: a₁=(5,-8,-1,2), a₂=(2,-1,4,-3), a₃=(-3,2,-5,4)",
      "topic": "rank_calc",
      "preferredMethod": "Vektorli tenglama usuli",
      "data": {
        "rows": 3,
        "cols": 4,
        "A": [
          [
            5,
            -8,
            -1,
            2
          ],
          [
            2,
            -1,
            4,
            -3
          ],
          [
            -3,
            2,
            -5,
            4
          ]
        ],
        "type": "vector_eq_2"
      }
    },
    {
      "id": "7_3",
      "taskNo": "3",
      "letter": "",
      "label": "3-topshiriq",
      "desc": "Vektorli tenglama: 3(a₁ - x) + 2(a₂ + x) = 5(a₃ + x) dan x ni topish: a₁=(2,5,1,3), a₂=(10,1,5,10), a₃=(4,1,-1,1)",
      "topic": "rank_calc",
      "preferredMethod": "Vektorli tenglama usuli",
      "data": {
        "rows": 3,
        "cols": 4,
        "A": [
          [
            2,
            5,
            1,
            3
          ],
          [
            10,
            1,
            5,
            10
          ],
          [
            4,
            1,
            -1,
            1
          ]
        ],
        "type": "vector_eq_3"
      }
    },
    {
      "id": "7_4_a",
      "taskNo": "4",
      "letter": "a",
      "label": "4-topshiriq, a)",
      "desc": "Vektorlar erkligi/bog'liqligi: a₁=(1,2,3), a₂=(3,6,7)",
      "topic": "rank_calc",
      "preferredMethod": "Vektorlar erkligi va sistemasi",
      "data": {
        "rows": 2,
        "cols": 3,
        "A": [
          [
            1,
            2,
            3
          ],
          [
            3,
            6,
            7
          ]
        ],
        "type": "vector_independence"
      }
    },
    {
      "id": "7_4_b",
      "taskNo": "4",
      "letter": "b",
      "label": "4-topshiriq, b)",
      "desc": "Vektorlar erkligi/bog'liqligi: a₁=(4,-2,6), a₂=(6,-3,9)",
      "topic": "rank_calc",
      "preferredMethod": "Vektorlar erkligi va sistemasi",
      "data": {
        "rows": 2,
        "cols": 3,
        "A": [
          [
            4,
            -2,
            6
          ],
          [
            6,
            -3,
            9
          ]
        ],
        "type": "vector_independence"
      }
    },
    {
      "id": "7_4_c",
      "taskNo": "4",
      "letter": "c",
      "label": "4-topshiriq, c)",
      "desc": "Vektorlar erkligi/bog'liqligi: a₁=(5,4,3), a₂=(3,3,2), a₃=(8,1,3)",
      "topic": "rank_calc",
      "preferredMethod": "Vektorlar erkligi va sistemasi",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            5,
            4,
            3
          ],
          [
            3,
            3,
            2
          ],
          [
            8,
            1,
            3
          ]
        ],
        "type": "vector_independence"
      }
    },
    {
      "id": "7_4_d",
      "taskNo": "4",
      "letter": "d",
      "label": "4-topshiriq, d)",
      "desc": "Vektorlar erkligi/bog'liqligi: a₁=(2,-3,1), a₂=(3,-1,5), a₃=(1,-4,3)",
      "topic": "rank_calc",
      "preferredMethod": "Vektorlar erkligi va sistemasi",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            2,
            -3,
            1
          ],
          [
            3,
            -1,
            5
          ],
          [
            1,
            -4,
            3
          ]
        ],
        "type": "vector_independence"
      }
    },
    {
      "id": "7_4_e",
      "taskNo": "4",
      "letter": "e",
      "label": "4-topshiriq, e)",
      "desc": "Vektorlar erkligi/bog'liqligi: a₁=(4,-5,2,6), a₂=(2,-2,1,3), a₃=(6,-3,3,9), a₄=(4,-1,5,6)",
      "topic": "rank_calc",
      "preferredMethod": "Vektorlar erkligi va sistemasi",
      "data": {
        "rows": 4,
        "cols": 4,
        "A": [
          [
            4,
            -5,
            2,
            6
          ],
          [
            2,
            -2,
            1,
            3
          ],
          [
            6,
            -3,
            3,
            9
          ],
          [
            4,
            -1,
            5,
            6
          ]
        ],
        "type": "vector_independence"
      }
    },
    {
      "id": "7_4_f",
      "taskNo": "4",
      "letter": "f",
      "label": "4-topshiriq, f)",
      "desc": "Vektorlar erkligi/bog'liqligi: a₁=(1,0,0,2), a₂=(0,1,0,3), a₃=(0,0,1,4), a₄=(2,-3,4,11)",
      "topic": "rank_calc",
      "preferredMethod": "Vektorlar erkligi va sistemasi",
      "data": {
        "rows": 4,
        "cols": 4,
        "A": [
          [
            1,
            0,
            0,
            2
          ],
          [
            0,
            1,
            0,
            3
          ],
          [
            0,
            0,
            1,
            4
          ],
          [
            2,
            -3,
            4,
            11
          ]
        ],
        "type": "vector_independence"
      }
    },
    {
      "id": "7_5_a",
      "taskNo": "5",
      "letter": "a",
      "label": "5-topshiriq, a)",
      "desc": "Chiziqli ifodalanish parametri λ ni topish: a₁=(3,4,2), a₂=(6,8,7), b=(9,12,λ)",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 2,
        "cols": 3,
        "A": [
          [
            3,
            4,
            2
          ],
          [
            6,
            8,
            7
          ]
        ],
        "B": [
          9,
          12,
          0
        ],
        "subId": "a",
        "type": "parameter_lambda"
      }
    },
    {
      "id": "7_5_b",
      "taskNo": "5",
      "letter": "b",
      "label": "5-topshiriq, b)",
      "desc": "Chiziqli ifodalanish parametri λ ni topish: a₁=(2,3,5), a₂=(3,7,8), a₃=(1,-6,1), b=(7,-2,λ)",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            2,
            3,
            5
          ],
          [
            3,
            7,
            8
          ],
          [
            1,
            -6,
            1
          ]
        ],
        "B": [
          7,
          -2,
          0
        ],
        "subId": "b",
        "type": "parameter_lambda"
      }
    },
    {
      "id": "7_5_c",
      "taskNo": "5",
      "letter": "c",
      "label": "5-topshiriq, c)",
      "desc": "Chiziqli ifodalanish parametri λ ni topish: a₁=(4,4,3), a₂=(7,2,1), a₃=(4,1,6), b=(5,9,λ)",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            4,
            4,
            3
          ],
          [
            7,
            2,
            1
          ],
          [
            4,
            1,
            6
          ]
        ],
        "B": [
          5,
          9,
          0
        ],
        "subId": "c",
        "type": "parameter_lambda"
      }
    },
    {
      "id": "7_5_d",
      "taskNo": "5",
      "letter": "d",
      "label": "5-topshiriq, d)",
      "desc": "Chiziqli ifodalanish parametri λ ni topish: a₁=(3,2,5), a₂=(2,4,7), a₃=(5,6,λ), b=(1,3,5)",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            3,
            2,
            5
          ],
          [
            2,
            4,
            7
          ],
          [
            5,
            6,
            0
          ]
        ],
        "B": [
          1,
          3,
          5
        ],
        "subId": "d",
        "type": "parameter_lambda"
      }
    },
    {
      "id": "7_5_e",
      "taskNo": "5",
      "letter": "e",
      "label": "5-topshiriq, e)",
      "desc": "Chiziqli ifodalanish parametri λ ni topish: a₁=(3,2,6), a₂=(7,3,9), a₃=(5,1,3), b=(λ,2,5)",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 3,
        "cols": 3,
        "A": [
          [
            3,
            2,
            6
          ],
          [
            7,
            3,
            9
          ],
          [
            5,
            1,
            3
          ]
        ],
        "B": [
          0,
          2,
          5
        ],
        "subId": "e",
        "type": "parameter_lambda"
      }
    },
    {
      "id": "7_6_a",
      "taskNo": "6",
      "letter": "a",
      "label": "6-topshiriq, a)",
      "desc": "Matritsa rangini toping: 4x4 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 4,
        "cols": 4,
        "dim": 4,
        "A": [
          [
            2,
            1,
            11,
            2
          ],
          [
            1,
            0,
            4,
            -1
          ],
          [
            11,
            4,
            56,
            5
          ],
          [
            2,
            -1,
            5,
            -6
          ]
        ]
      }
    },
    {
      "id": "7_6_b",
      "taskNo": "6",
      "letter": "b",
      "label": "6-topshiriq, b)",
      "desc": "Matritsa rangini toping: 4x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 4,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            4,
            48,
            10,
            18,
            71
          ],
          [
            10,
            18,
            40,
            17,
            7
          ],
          [
            7,
            17,
            3,
            1,
            2
          ],
          [
            1,
            2,
            3,
            4,
            5
          ]
        ]
      }
    },
    {
      "id": "7_6_c",
      "taskNo": "6",
      "letter": "c",
      "label": "6-topshiriq, c)",
      "desc": "Matritsa rangini toping: 5x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 5,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            1,
            0,
            0,
            1,
            4
          ],
          [
            0,
            1,
            0,
            2,
            5
          ],
          [
            0,
            0,
            1,
            3,
            6
          ],
          [
            1,
            2,
            3,
            14,
            32
          ],
          [
            4,
            5,
            6,
            32,
            77
          ]
        ]
      }
    },
    {
      "id": "7_6_d",
      "taskNo": "6",
      "letter": "d",
      "label": "6-topshiriq, d)",
      "desc": "Matritsa rangini toping: 5x6 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 5,
        "cols": 6,
        "dim": 6,
        "A": [
          [
            1,
            -2,
            3,
            -1,
            -1,
            -2
          ],
          [
            2,
            -1,
            1,
            0,
            -2,
            -2
          ],
          [
            -2,
            -5,
            8,
            -4,
            3,
            -1
          ],
          [
            6,
            0,
            -1,
            2,
            -7,
            -5
          ],
          [
            -1,
            -1,
            1,
            -1,
            2,
            1
          ]
        ]
      }
    },
    {
      "id": "7_6_e",
      "taskNo": "6",
      "letter": "e",
      "label": "6-topshiriq, e)",
      "desc": "Matritsa rangini toping: 5x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 5,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            1,
            0,
            1,
            0,
            0
          ],
          [
            1,
            1,
            0,
            0,
            0
          ],
          [
            0,
            1,
            1,
            0,
            0
          ],
          [
            0,
            0,
            1,
            1,
            0
          ],
          [
            0,
            1,
            0,
            1,
            1
          ]
        ]
      }
    },
    {
      "id": "7_6_f",
      "taskNo": "6",
      "letter": "f",
      "label": "6-topshiriq, f)",
      "desc": "Matritsa rangini toping: 4x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 4,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            1,
            -1,
            2,
            3,
            4
          ],
          [
            2,
            1,
            -1,
            2,
            0
          ],
          [
            -1,
            2,
            1,
            1,
            3
          ],
          [
            1,
            5,
            -8,
            -5,
            -12
          ]
        ]
      }
    },
    {
      "id": "7_6_g",
      "taskNo": "6",
      "letter": "g",
      "label": "6-topshiriq, g)",
      "desc": "Matritsa rangini toping: 6x4 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 6,
        "cols": 4,
        "dim": 6,
        "A": [
          [
            2,
            1,
            1,
            1
          ],
          [
            1,
            3,
            1,
            1
          ],
          [
            1,
            1,
            4,
            1
          ],
          [
            1,
            1,
            1,
            5
          ],
          [
            1,
            2,
            3,
            4
          ],
          [
            1,
            1,
            1,
            1
          ]
        ]
      }
    },
    {
      "id": "7_6_h",
      "taskNo": "6",
      "letter": "h",
      "label": "6-topshiriq, h)",
      "desc": "Matritsa rangini toping: 6x6 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 6,
        "cols": 6,
        "dim": 6,
        "A": [
          [
            1,
            -1,
            2,
            0,
            0,
            1
          ],
          [
            0,
            1,
            -1,
            2,
            0,
            1
          ],
          [
            1,
            0,
            -1,
            0,
            2,
            1
          ],
          [
            1,
            -1,
            0,
            0,
            1,
            2
          ],
          [
            2,
            0,
            0,
            1,
            -1,
            1
          ],
          [
            -1,
            1,
            0,
            1,
            1,
            2
          ]
        ]
      }
    },
    {
      "id": "7_7_a",
      "taskNo": "7",
      "letter": "a",
      "label": "7-topshiriq, a)",
      "desc": "Maksimal noldan farqli minorlar usuli: 3x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "O'rab turuvchi minorlar usuli (Maksimal noldan farqli minorlar)",
      "data": {
        "rows": 3,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            2,
            -1,
            3,
            -2,
            4
          ],
          [
            4,
            -2,
            5,
            1,
            7
          ],
          [
            2,
            -1,
            1,
            8,
            2
          ]
        ]
      }
    },
    {
      "id": "7_7_b",
      "taskNo": "7",
      "letter": "b",
      "label": "7-topshiriq, b)",
      "desc": "Maksimal noldan farqli minorlar usuli: 4x4 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "O'rab turuvchi minorlar usuli (Maksimal noldan farqli minorlar)",
      "data": {
        "rows": 4,
        "cols": 4,
        "dim": 4,
        "A": [
          [
            1,
            3,
            5,
            -1
          ],
          [
            2,
            -1,
            -3,
            4
          ],
          [
            5,
            1,
            -1,
            7
          ],
          [
            7,
            7,
            9,
            1
          ]
        ]
      }
    },
    {
      "id": "7_7_c",
      "taskNo": "7",
      "letter": "c",
      "label": "7-topshiriq, c)",
      "desc": "Maksimal noldan farqli minorlar usuli: 4x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "O'rab turuvchi minorlar usuli (Maksimal noldan farqli minorlar)",
      "data": {
        "rows": 4,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            4,
            3,
            -5,
            2,
            3
          ],
          [
            8,
            6,
            -7,
            4,
            2
          ],
          [
            4,
            3,
            -8,
            2,
            7
          ],
          [
            4,
            3,
            1,
            2,
            -5
          ]
        ]
      }
    },
    {
      "id": "7_7_d",
      "taskNo": "7",
      "letter": "d",
      "label": "7-topshiriq, d)",
      "desc": "Maksimal noldan farqli minorlar usuli: 5x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "O'rab turuvchi minorlar usuli (Maksimal noldan farqli minorlar)",
      "data": {
        "rows": 5,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            8,
            -4,
            5,
            5,
            9
          ],
          [
            1,
            -3,
            -5,
            0,
            -7
          ],
          [
            0,
            -7,
            1,
            -3,
            -5
          ],
          [
            7,
            -5,
            1,
            4,
            1
          ],
          [
            3,
            -1,
            3,
            2,
            5
          ]
        ]
      }
    },
    {
      "id": "7_7_e",
      "taskNo": "7",
      "letter": "e",
      "label": "7-topshiriq, e)",
      "desc": "Maksimal noldan farqli minorlar usuli: 4x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "O'rab turuvchi minorlar usuli (Maksimal noldan farqli minorlar)",
      "data": {
        "rows": 4,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            4,
            1,
            7,
            -5,
            1
          ],
          [
            0,
            -7,
            1,
            -3,
            -5
          ],
          [
            3,
            4,
            5,
            -3,
            2
          ],
          [
            2,
            5,
            3,
            -1,
            3
          ]
        ]
      }
    },
    {
      "id": "7_7_f",
      "taskNo": "7",
      "letter": "f",
      "label": "7-topshiriq, f)",
      "desc": "Maksimal noldan farqli minorlar usuli: 5x4 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "O'rab turuvchi minorlar usuli (Maksimal noldan farqli minorlar)",
      "data": {
        "rows": 5,
        "cols": 4,
        "dim": 5,
        "A": [
          [
            32,
            14,
            3,
            2
          ],
          [
            45,
            18,
            3,
            3
          ],
          [
            6,
            3,
            10,
            0
          ],
          [
            5,
            2,
            0,
            10
          ],
          [
            4,
            10,
            0,
            1
          ]
        ]
      }
    },
    {
      "id": "7_8_a",
      "taskNo": "8",
      "letter": "a",
      "label": "8-topshiriq, a)",
      "desc": "λ ning turli qiymatlarida matritsa rangi: [[1, λ, -1, 2], [2, -1, λ, 5], [1, 10, -6, 1]]",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 3,
        "cols": 4,
        "dim": 3,
        "A": [
          [
            1,
            0,
            -1,
            2
          ],
          [
            2,
            -1,
            0,
            5
          ],
          [
            1,
            10,
            -6,
            1
          ]
        ],
        "subId": "8_a",
        "type": "parametric_rank"
      }
    },
    {
      "id": "7_8_b",
      "taskNo": "8",
      "letter": "b",
      "label": "8-topshiriq, b)",
      "desc": "λ ning turli qiymatlarida matritsa rangi: [[7-λ, -12, 6], [10, -19-λ, 10], [12, -24, 13-λ]]",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 3,
        "cols": 3,
        "dim": 3,
        "A": [
          [
            7,
            -12,
            6
          ],
          [
            10,
            -19,
            10
          ],
          [
            12,
            -24,
            13
          ]
        ],
        "subId": "8_b",
        "type": "parametric_rank"
      }
    },
    {
      "id": "7_8_c",
      "taskNo": "8",
      "letter": "c",
      "label": "8-topshiriq, c)",
      "desc": "λ ning turli qiymatlarida matritsa rangi: [[3, 1, 1, 4], [λ, 4, 10, 1], [1, 7, 17, 3], [2, 2, 4, 3]]",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 4,
        "cols": 4,
        "dim": 4,
        "A": [
          [
            3,
            1,
            1,
            4
          ],
          [
            0,
            4,
            10,
            1
          ],
          [
            1,
            7,
            17,
            3
          ],
          [
            2,
            2,
            4,
            3
          ]
        ],
        "subId": "8_c",
        "type": "parametric_rank"
      }
    },
    {
      "id": "7_8_d",
      "taskNo": "8",
      "letter": "d",
      "label": "8-topshiriq, d)",
      "desc": "λ ning turli qiymatlarida matritsa rangi: diag(1-λ, 1-λ, 2-λ, 3-λ)",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 4,
        "cols": 4,
        "dim": 4,
        "A": [
          [
            1,
            0,
            0,
            0
          ],
          [
            0,
            1,
            0,
            0
          ],
          [
            0,
            0,
            2,
            3
          ],
          [
            0,
            0,
            0,
            3
          ]
        ],
        "subId": "8_d",
        "type": "parametric_rank"
      }
    },
    {
      "id": "7_8_e",
      "taskNo": "8",
      "letter": "e",
      "label": "8-topshiriq, e)",
      "desc": "λ ning turli qiymatlarida matritsa rangi: [[1, 1, 2, 3], [1, 2-λ², 2, 3], [2, 3, 1, 5], [2, 3, 1, 9-λ²]]",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 4,
        "cols": 4,
        "dim": 4,
        "A": [
          [
            1,
            1,
            2,
            3
          ],
          [
            1,
            2,
            2,
            3
          ],
          [
            2,
            3,
            1,
            5
          ],
          [
            2,
            3,
            1,
            9
          ]
        ],
        "subId": "8_e",
        "type": "parametric_rank"
      }
    },
    {
      "id": "7_8_f",
      "taskNo": "8",
      "letter": "f",
      "label": "8-topshiriq, f)",
      "desc": "λ ning turli qiymatlarida matritsa rangi: 4x4 parametrli matritsa (1-λ diagonali)",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 4,
        "cols": 4,
        "dim": 4,
        "A": [
          [
            0,
            1,
            1,
            1
          ],
          [
            1,
            0,
            1,
            1
          ],
          [
            1,
            1,
            0,
            1
          ],
          [
            1,
            1,
            1,
            0
          ]
        ],
        "subId": "8_f",
        "type": "parametric_rank"
      }
    },
    {
      "id": "7_8_g",
      "taskNo": "8",
      "letter": "g",
      "label": "8-topshiriq, g)",
      "desc": "λ ning turli qiymatlarida matritsa rangi: n-tartibli ko'rsatkichli matritsa A(λ)",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 3,
        "cols": 3,
        "dim": 3,
        "A": [
          [
            1,
            0,
            0
          ],
          [
            2,
            1,
            0
          ],
          [
            2,
            2,
            1
          ]
        ],
        "subId": "8_g",
        "type": "parametric_rank"
      }
    },
    {
      "id": "7_8_h",
      "taskNo": "8",
      "letter": "h",
      "label": "8-topshiriq, h)",
      "desc": "λ ning turli qiymatlarida matritsa rangi: n-tartibli diagonal parametrli matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "rows": 3,
        "cols": 3,
        "dim": 3,
        "A": [
          [
            1,
            2,
            3
          ],
          [
            1,
            0,
            3
          ],
          [
            1,
            2,
            0
          ]
        ],
        "subId": "8_h",
        "type": "parametric_rank"
      }
    },
    {
      "id": "7_9_a",
      "taskNo": "9",
      "letter": "a",
      "label": "9-topshiriq, a)",
      "desc": "Elementar almashtirishlar orqali rang: 4x4 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 4,
        "cols": 4,
        "dim": 4,
        "A": [
          [
            25,
            31,
            17,
            43
          ],
          [
            75,
            94,
            53,
            132
          ],
          [
            75,
            94,
            54,
            134
          ],
          [
            25,
            32,
            20,
            48
          ]
        ]
      }
    },
    {
      "id": "7_9_b",
      "taskNo": "9",
      "letter": "b",
      "label": "9-topshiriq, b)",
      "desc": "Elementar almashtirishlar orqali rang: 3x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 3,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            47,
            -67,
            35,
            201,
            155
          ],
          [
            98,
            23,
            -294,
            86,
            26
          ],
          [
            16,
            -428,
            1,
            1284,
            52
          ]
        ]
      }
    },
    {
      "id": "7_9_c",
      "taskNo": "9",
      "letter": "c",
      "label": "9-topshiriq, c)",
      "desc": "Elementar almashtirishlar orqali rang: 4x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 4,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            24,
            19,
            36,
            72,
            -38
          ],
          [
            49,
            40,
            73,
            147,
            -80
          ],
          [
            73,
            59,
            98,
            219,
            -118
          ],
          [
            47,
            36,
            71,
            141,
            -72
          ]
        ]
      }
    },
    {
      "id": "7_9_d",
      "taskNo": "9",
      "letter": "d",
      "label": "9-topshiriq, d)",
      "desc": "Elementar almashtirishlar orqali rang: 5x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 5,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            17,
            -28,
            45,
            11,
            39
          ],
          [
            24,
            -37,
            61,
            13,
            50
          ],
          [
            25,
            -7,
            32,
            -18,
            -11
          ],
          [
            31,
            12,
            19,
            -43,
            -55
          ],
          [
            42,
            13,
            29,
            -55,
            -68
          ]
        ]
      }
    },
    {
      "id": "7_9_e",
      "taskNo": "9",
      "letter": "e",
      "label": "9-topshiriq, e)",
      "desc": "Elementar almashtirishlar orqali rang: 5x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 5,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            3,
            1,
            1,
            2,
            -1
          ],
          [
            0,
            2,
            -1,
            3,
            1
          ],
          [
            4,
            3,
            2,
            -1,
            1
          ],
          [
            12,
            9,
            8,
            -7,
            3
          ],
          [
            12,
            5,
            8,
            -5,
            -1
          ]
        ]
      }
    },
    {
      "id": "7_9_f",
      "taskNo": "9",
      "letter": "f",
      "label": "9-topshiriq, f)",
      "desc": "Elementar almashtirishlar orqali rang: 4x5 Matritsa",
      "topic": "rank_calc",
      "preferredMethod": "Gauss usuli (Pog'onasimon ko'rinish)",
      "data": {
        "rows": 4,
        "cols": 5,
        "dim": 5,
        "A": [
          [
            2,
            -1,
            4,
            0,
            1
          ],
          [
            2,
            -1,
            -2,
            0,
            -3
          ],
          [
            6,
            3,
            1,
            3,
            -9
          ],
          [
            3,
            -1,
            -5,
            7,
            2
          ]
        ]
      }
    },
    {
      "id": "7_10",
      "taskNo": "10",
      "letter": "",
      "label": "10-topshiriq (Isbot)",
      "desc": "Isbotlang: rank([A, B; 2A, -5B]) = rank(A) + rank(B)",
      "topic": "rank_calc",
      "preferredMethod": "Nazariy isbot usuli",
      "data": {
        "type": "proof",
        "proofId": "rank_block_1",
        "formula": "rank([A, B; 2A, -5B]) = rank(A) + rank(B)"
      }
    },
    {
      "id": "7_11",
      "taskNo": "11",
      "letter": "",
      "label": "11-topshiriq (Isbot)",
      "desc": "Isbotlang: rank([A, AB; B, B + B²]) = rank(A) + rank(B)",
      "topic": "rank_calc",
      "preferredMethod": "Nazariy isbot usuli",
      "data": {
        "type": "proof",
        "proofId": "rank_block_2",
        "formula": "rank([A, AB; B, B + B^2]) = rank(A) + rank(B)"
      }
    },
    {
      "id": "7_12",
      "taskNo": "12",
      "letter": "",
      "label": "12-topshiriq (Isbot)",
      "desc": "Isbotlang: Rangi 1 ga teng bo'lgan ixtiyoriy matritsa A = (b_i * c_j) ko'rinishga ega",
      "topic": "rank_calc",
      "preferredMethod": "Nazariy isbot usuli",
      "data": {
        "type": "proof",
        "proofId": "rank_1_form",
        "formula": "A = b \\cdot c^T, \\quad a_{ij} = b_i c_j"
      }
    },
    {
      "id": "7_13",
      "taskNo": "13",
      "letter": "",
      "label": "13-topshiriq (Isbot)",
      "desc": "Isbotlang: Agar A xosmas bo'lsa, rank([A, B; C, D]) = n bo'lishi uchun D = C A⁻¹ B zarur va yetarli",
      "topic": "rank_calc",
      "preferredMethod": "Nazariy isbot usuli",
      "data": {
        "type": "proof",
        "proofId": "rank_schur",
        "formula": "D = C A^{-1} B \\iff rank([A, B; C, D]) = n"
      }
    }
  ],
  "amaliy_8": [
    {
      "id": "8_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "3x3 Bir jinsli sistema: x₁-x₂-x₃=0, 3x₁-x₂+3x₃=0, 5x₁-5x₂+4x₃=0",
      "topic": "homo_slae",
      "data": {
        "dim": 3,
        "A": [
          [
            1,
            -1,
            -1
          ],
          [
            3,
            -1,
            3
          ],
          [
            5,
            -5,
            4
          ]
        ]
      }
    },
    {
      "id": "8_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "3x3 Bir jinsli sistema: 2x₁+2x₂-x₃=0, 5x₁+4x₂-6x₃=0, 3x₁+2x₂-5x₃=0",
      "topic": "homo_slae",
      "data": {
        "dim": 3,
        "A": [
          [
            2,
            2,
            -1
          ],
          [
            5,
            4,
            -6
          ],
          [
            3,
            2,
            -5
          ]
        ]
      }
    },
    {
      "id": "8_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "4x4 Bir jinsli sistema: x₁+2x₂-x₃+3x₄=0, x₁+2x₂+2x₃-x₄=0, 3x₁+6x₂+5x₄=0, 4x₁+8x₂-x₃+8x₄=0",
      "topic": "homo_slae",
      "data": {
        "dim": 4,
        "A": [
          [
            1,
            2,
            -1,
            3
          ],
          [
            1,
            2,
            2,
            -1
          ],
          [
            3,
            6,
            0,
            5
          ],
          [
            4,
            8,
            -1,
            8
          ]
        ]
      }
    },
    {
      "id": "8_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "Bir jinsli sistema (4x3): 3x₁+5x₂+2x₃=0, 4x₁+7x₂+5x₃=0, x₁+x₂-4x₃=0, 2x₁+9x₂+6x₃=0",
      "topic": "homo_slae",
      "preferredMethod": "Gauss usulida FYeT bazisini topish",
      "data": {
        "dim": 3,
        "rows": 4,
        "cols": 3,
        "A": [
          [
            3,
            5,
            2
          ],
          [
            4,
            7,
            5
          ],
          [
            1,
            1,
            -4
          ],
          [
            2,
            9,
            6
          ]
        ]
      }
    },
    {
      "id": "8_2_a",
      "taskNo": "2",
      "letter": "a",
      "label": "2-topshiriq, a) misol",
      "desc": "FYeT topish: 2x₁-4x₂+5x₃+3x₄=0, 3x₁-6x₂+4x₃+2x₄=0, 4x₁-8x₂+17x₃+11x₄=0",
      "topic": "homo_slae",
      "preferredMethod": "Gauss usulida FYeT bazisini topish",
      "data": {
        "dim": 4,
        "rows": 3,
        "cols": 4,
        "A": [
          [
            2,
            -4,
            5,
            3
          ],
          [
            3,
            -6,
            4,
            2
          ],
          [
            4,
            -8,
            17,
            11
          ]
        ]
      }
    },
    {
      "id": "8_2_b",
      "taskNo": "2",
      "letter": "b",
      "label": "2-topshiriq, b) misol",
      "desc": "FYeT topish: 3x₁+5x₂-x₃-2x₄=0, 4x₁+5x₂-x₃+2x₄=0, 3x₁+8x₂+2x₃-x₄=0",
      "topic": "homo_slae",
      "preferredMethod": "Gauss usulida FYeT bazisini topish",
      "data": {
        "dim": 4,
        "rows": 3,
        "cols": 4,
        "A": [
          [
            3,
            5,
            -1,
            -2
          ],
          [
            4,
            5,
            -1,
            2
          ],
          [
            3,
            8,
            2,
            -1
          ]
        ]
      }
    },
    {
      "id": "8_2_c",
      "taskNo": "2",
      "letter": "c",
      "label": "2-topshiriq, c) misol",
      "desc": "FYeT topish: 6x₁-2x₂+3x₃+4x₄=0, 9x₁-3x₂+5x₃-2x₄=0, 6x₁-2x₂+2x₃+12x₄=0",
      "topic": "homo_slae",
      "preferredMethod": "Gauss usulida FYeT bazisini topish",
      "data": {
        "dim": 4,
        "rows": 3,
        "cols": 4,
        "A": [
          [
            6,
            -2,
            3,
            4
          ],
          [
            9,
            -3,
            5,
            -2
          ],
          [
            6,
            -2,
            2,
            12
          ]
        ]
      }
    },
    {
      "id": "8_3_a",
      "taskNo": "3",
      "letter": "a",
      "label": "3-topshiriq, a) misol",
      "desc": "Bir jinsli bo'lmagan sistema: 2x₁+7x₂+3x₃+x₄=5, x₁+3x₂+5x₃-2x₄=3, x₁+5x₂-9x₃+8x₄=1, 5x₁+18x₂+4x₃+5x₄=12",
      "topic": "homo_slae",
      "preferredMethod": "Gauss usulida FYeT bazisini topish",
      "data": {
        "dim": 4,
        "rows": 4,
        "cols": 4,
        "A": [
          [
            2,
            7,
            3,
            1
          ],
          [
            1,
            3,
            5,
            -2
          ],
          [
            1,
            5,
            -9,
            8
          ],
          [
            5,
            18,
            4,
            5
          ]
        ]
      }
    },
    {
      "id": "8_4_a",
      "taskNo": "4",
      "letter": "a",
      "label": "4-topshiriq, a) misol",
      "desc": "Parametrli CHTS umumiy yechimini toping (λ parametri bo'yicha tahlil)",
      "topic": "homo_slae",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "dim": 4,
        "A": [
          [
            5,
            -3,
            2,
            4
          ],
          [
            4,
            -2,
            3,
            7
          ],
          [
            8,
            -6,
            -1,
            -5
          ],
          [
            7,
            -3,
            7,
            17
          ]
        ],
        "B": [
          3,
          1,
          9,
          0
        ],
        "type": "slae_param_lambda"
      }
    },
    {
      "id": "8_4_f",
      "taskNo": "4",
      "letter": "f",
      "label": "4-topshiriq, f) misol",
      "desc": "Simmetrik parametrli CHTS: λx₁ + x₂ + x₃ = 1; x₁ + λx₂ + x₃ = 1; x₁ + x₂ + λx₃ = 1",
      "topic": "homo_slae",
      "preferredMethod": "Parametr λ bo'yicha tahlil qilish",
      "data": {
        "dim": 3,
        "A": [
          [
            1,
            1,
            1
          ],
          [
            1,
            1,
            1
          ],
          [
            1,
            1,
            1
          ]
        ],
        "B": [
          1,
          1,
          1
        ],
        "formula": "λx + y + z = 1",
        "type": "symmetric_param_slae"
      }
    },
    {
      "id": "8_5_a",
      "taskNo": "5",
      "letter": "a",
      "label": "5-topshiriq (5x5)",
      "desc": "5x5 Bir jinsli sistema: FYeT va umumiy yechimni topish",
      "topic": "homo_slae",
      "data": {
        "dim": 5,
        "A": [
          [
            3,
            2,
            1,
            3,
            5
          ],
          [
            6,
            4,
            3,
            5,
            7
          ],
          [
            9,
            6,
            5,
            7,
            9
          ],
          [
            3,
            2,
            0,
            4,
            8
          ],
          [
            1,
            1,
            1,
            1,
            1
          ]
        ]
      }
    },
    {
      "id": "8_6",
      "taskNo": "6",
      "letter": "",
      "label": "6-topshiriq",
      "desc": "Matritsaviy tenglamalarning umumiy yechimini toping: [[2, -3], [-4, 6]] · X = [[2, 3], [4, 6]]",
      "topic": "homo_slae",
      "preferredMethod": "Kroneker-Kapelli umumiy yechim usuli",
      "data": {
        "dim": 2,
        "A": [
          [
            2,
            -3
          ],
          [
            -4,
            6
          ]
        ],
        "B": [
          [
            2,
            3
          ],
          [
            4,
            6
          ]
        ],
        "type": "matrix_eq_general"
      }
    }
  ],
  "amaliy_9": [
    {
      "id": "9_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "z₁ = 2 + 3i, z₂ = 1 + 2i amallari (+, -, *, /)",
      "topic": "complex_ops",
      "data": {
        "a1": 2,
        "b1": 3,
        "a2": 1,
        "b2": 2
      }
    },
    {
      "id": "9_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "z₁ = 1 - 2i, z₂ = -3 + 2i amallari",
      "topic": "complex_ops",
      "data": {
        "a1": 1,
        "b1": -2,
        "a2": -3,
        "b2": 2
      }
    },
    {
      "id": "9_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "z₁ = 2 + 5i, z₂ = -4 - i amallari",
      "topic": "complex_ops",
      "data": {
        "a1": 2,
        "b1": 5,
        "a2": -4,
        "b2": -1
      }
    },
    {
      "id": "9_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "z₁ = 3 - 7i, z₂ = 2 - 5i amallari",
      "topic": "complex_ops",
      "data": {
        "a1": 3,
        "b1": -7,
        "a2": 2,
        "b2": -5
      }
    },
    {
      "id": "9_1_e",
      "taskNo": "1",
      "letter": "e",
      "label": "1-topshiriq, e) misol",
      "desc": "z₁ = 2 + 6i, z₂ = -2 + 3i amallari",
      "topic": "complex_ops",
      "data": {
        "a1": 2,
        "b1": 6,
        "a2": -2,
        "b2": 3
      }
    },
    {
      "id": "9_1_f",
      "taskNo": "1",
      "letter": "f",
      "label": "1-topshiriq, f) misol",
      "desc": "z₁ = 4 + 2i, z₂ = -3 - 2i amallari",
      "topic": "complex_ops",
      "data": {
        "a1": 4,
        "b1": 2,
        "a2": -3,
        "b2": -2
      }
    },
    {
      "id": "9_1_g",
      "taskNo": "1",
      "letter": "g",
      "label": "1-topshiriq, g) misol",
      "desc": "z₁ = 5 + 3i, z₂ = 3 + 2i amallari",
      "topic": "complex_ops",
      "data": {
        "a1": 5,
        "b1": 3,
        "a2": 3,
        "b2": 2
      }
    },
    {
      "id": "9_1_h",
      "taskNo": "1",
      "letter": "h",
      "label": "1-topshiriq, h) misol",
      "desc": "z₁ = 6 - 2i, z₂ = 3 - 4i amallari",
      "topic": "complex_ops",
      "data": {
        "a1": 6,
        "b1": -2,
        "a2": 3,
        "b2": -4
      }
    },
    {
      "id": "9_2",
      "taskNo": "2",
      "letter": "",
      "label": "2-topshiriq",
      "desc": "Quyidagi tenglikni qanoatlantiruvchi haqiqiy x va y larni toping: (1 + 2i)x + (3 - 5i)y = 1 - 3i",
      "topic": "complex_ops",
      "preferredMethod": "Algebraik amallar (qo'shish, ko'paytirish, bo'lish)",
      "data": {
        "a1": 1,
        "b1": 2,
        "a2": 3,
        "b2": -5,
        "res_a": 1,
        "res_b": -3,
        "type": "real_xy_eq"
      }
    },
    {
      "id": "9_3",
      "taskNo": "3",
      "letter": "",
      "label": "3-topshiriq",
      "desc": "Haqiqiy x, y, z, t larda kompleks tenglamalar sistemasini yeching",
      "topic": "complex_ops",
      "preferredMethod": "Kompleks tenglamalar va sistemalar usuli",
      "data": {
        "type": "complex_slae_4var"
      }
    },
    {
      "id": "9_4",
      "taskNo": "4",
      "letter": "",
      "label": "4-topshiriq",
      "desc": "Ixtiyoriy n-butun son uchun iⁿ ni hisoblang: i⁰=1, i¹=i, i²=-1, i³=-i, i⁴ᵏ=1",
      "topic": "complex_ops",
      "preferredMethod": "Algebraik amallar (qo'shish, ko'paytirish, bo'lish)",
      "data": {
        "type": "i_power",
        "formula": "i^n = i^(n mod 4)"
      }
    },
    {
      "id": "9_5",
      "taskNo": "5",
      "letter": "",
      "label": "5-topshiriq",
      "desc": "Ifodani soddalashtiring: (x - 1 - i)(x - 1 + i)(x + 1 + i)(x + 1 - i) = x⁴ + 4",
      "topic": "complex_ops",
      "preferredMethod": "Algebraik amallar (qo'shish, ko'paytirish, bo'lish)",
      "data": {
        "type": "simplify_poly",
        "result": "x^4 + 4"
      }
    },
    {
      "id": "9_6_a",
      "taskNo": "6",
      "letter": "a",
      "label": "6-topshiriq, a) misol",
      "desc": "Kvadratik tenglamaning kompleks ildizlarini toping: x² + 2 = 0 -> x = ±i√2",
      "topic": "complex_ops",
      "preferredMethod": "Kvadrat ildiz chiqarish formulasi",
      "data": {
        "a": 1,
        "b": 0,
        "c": 2,
        "type": "quadratic_complex"
      }
    },
    {
      "id": "9_6_d",
      "taskNo": "6",
      "letter": "d",
      "label": "6-topshiriq, d) misol",
      "desc": "Kvadratik tenglamaning kompleks ildizlarini toping: x² + x + 6 = 0 (D = -23)",
      "topic": "complex_ops",
      "preferredMethod": "Kvadrat ildiz chiqarish formulasi",
      "data": {
        "a": 1,
        "b": 1,
        "c": 6,
        "type": "quadratic_complex"
      }
    },
    {
      "id": "9_7_a",
      "taskNo": "7",
      "letter": "a",
      "label": "7-topshiriq, a) misol",
      "desc": "Hisoblang: (1 + 2i)⁴ = -7 - 24i",
      "topic": "complex_ops",
      "preferredMethod": "Algebraik amallar (qo'shish, ko'paytirish, bo'lish)",
      "data": {
        "a1": 1,
        "b1": 2,
        "power": 4,
        "type": "complex_power"
      }
    },
    {
      "id": "9_7_b",
      "taskNo": "7",
      "letter": "b",
      "label": "7-topshiriq, b) misol",
      "desc": "Hisoblang: (2 + i)⁷ + (2 - i)⁷ (qo'shma sonlar yig'indisi: 2·Re(z⁷) = -556)",
      "topic": "complex_ops",
      "preferredMethod": "Algebraik amallar (qo'shish, ko'paytirish, bo'lish)",
      "data": {
        "a1": 2,
        "b1": 1,
        "power": 7,
        "type": "conjugate_sum"
      }
    },
    {
      "id": "9_8",
      "taskNo": "8",
      "letter": "",
      "label": "8-topshiriq",
      "desc": "Ikki kompleks sonning ko'paytmasi qachon faqat mavhum qismdan iborat bo'lishini aniqlang: Re(z₁·z₂) = 0",
      "topic": "complex_ops",
      "preferredMethod": "Algebraik amallar (qo'shish, ko'paytirish, bo'lish)",
      "data": {
        "formula": "a1*a2 - b1*b2 = 0",
        "type": "pure_imaginary_condition"
      }
    },
    {
      "id": "9_9_a",
      "taskNo": "9",
      "letter": "a",
      "label": "9-topshiriq, a) misol",
      "desc": "Amallarni bajaring: (1 - i·tg α) / (1 + i·tg α) = cos 2α - i sin 2α",
      "topic": "complex_ops",
      "preferredMethod": "Trigonometrik shaklga o'tish (r, cos φ + i sin φ)",
      "data": {
        "type": "trig_identity",
        "formula": "cos(2a) - i*sin(2a)"
      }
    },
    {
      "id": "9_9_b",
      "taskNo": "9",
      "letter": "b",
      "label": "9-topshiriq, b) misol",
      "desc": "Amallarni bajaring: ((1 + 2i)² - (1 - i)³) / ((3 + 2i)³ - (2 + i)²)",
      "topic": "complex_ops",
      "preferredMethod": "Algebraik amallar (qo'shish, ko'paytirish, bo'lish)",
      "data": {
        "a1": 1,
        "b1": 2,
        "a2": 1,
        "b2": -1,
        "type": "fraction_ops"
      }
    },
    {
      "id": "9_10",
      "taskNo": "10",
      "letter": "",
      "label": "10-topshiriq",
      "desc": "n-butun son uchun ((1 + i)ⁿ) / ((1 - i)ⁿ⁻²) ni hisoblang: 2 · iⁿ⁻¹",
      "topic": "complex_ops",
      "preferredMethod": "Algebraik amallar (qo'shish, ko'paytirish, bo'lish)",
      "data": {
        "formula": "2 * i^(n-1)",
        "type": "ratio_powers"
      }
    },
    {
      "id": "9_11",
      "taskNo": "11",
      "letter": "",
      "label": "11-topshiriq",
      "desc": "Kompleks tenglamalar sistemasini yeching: (3 - i)x + (4 + 2i)y = 2 + 6i, (4 + 2i)x - (2 + 3i)y = 5 + 4i",
      "topic": "complex_ops",
      "preferredMethod": "Kompleks tenglamalar va sistemalar usuli",
      "data": {
        "type": "complex_system_2x2"
      }
    },
    {
      "id": "9_12",
      "taskNo": "12",
      "letter": "",
      "label": "12-topshiriq (Isbot)",
      "desc": "Agar x + yi = (s + ti)ⁿ bo'lsa, x² + y² = (s² + t²)ⁿ tenglikni isbotlang (|z| = |w|ⁿ)",
      "topic": "complex_ops",
      "preferredMethod": "Algebraik amallar (qo'shish, ko'paytirish, bo'lish)",
      "data": {
        "type": "modulus_power_proof"
      }
    },
    {
      "id": "9_13_a",
      "taskNo": "13",
      "letter": "a",
      "label": "13-topshiriq, a) misol",
      "desc": "Kompleks sonning kvadrat ildizlarini toping: √(2i) = ±(1 + i)",
      "topic": "complex_ops",
      "preferredMethod": "Kvadrat ildiz chiqarish formulasi",
      "data": {
        "a1": 0,
        "b1": 2,
        "type": "sqrt_complex"
      }
    },
    {
      "id": "9_13_e",
      "taskNo": "13",
      "letter": "e",
      "label": "13-topshiriq, e) misol",
      "desc": "Kompleks sonning kvadrat ildizlarini toping: √(-3 - 4i) = ±(1 - 2i)",
      "topic": "complex_ops",
      "preferredMethod": "Kvadrat ildiz chiqarish formulasi",
      "data": {
        "a1": -3,
        "b1": -4,
        "type": "sqrt_complex"
      }
    },
    {
      "id": "9_14",
      "taskNo": "14",
      "letter": "",
      "label": "14-topshiriq",
      "desc": "Tenglamani yeching: x² - (2 + i)x + (-1 + 7i) = 0",
      "topic": "complex_ops",
      "preferredMethod": "Kvadrat ildiz chiqarish formulasi",
      "data": {
        "type": "complex_quadratic_eq"
      }
    },
    {
      "id": "9_15",
      "taskNo": "15",
      "letter": "",
      "label": "15-topshiriq",
      "desc": "Quyidagi kompleks sonlarning geometrik tasvirini toping: z = 3 - 2i, z = 5 + i, z = -2 + 5i",
      "topic": "complex_ops",
      "preferredMethod": "Geometrik tasvirlash usuli",
      "data": {
        "a1": 3,
        "b1": -2,
        "type": "geometric_plot"
      }
    },
    {
      "id": "9_16_a",
      "taskNo": "16",
      "letter": "a",
      "label": "16-topshiriq, a) misol",
      "desc": "Trigonometrik shaklga o'tkazing: z = 2 - 2i -> r = 2√2, φ = -π/4 (yoki 7π/4)",
      "topic": "complex_ops",
      "preferredMethod": "Trigonometrik shaklga o'tish (r, cos φ + i sin φ)",
      "data": {
        "a1": 2,
        "b1": -2,
        "type": "to_trig_form"
      }
    },
    {
      "id": "9_16_b",
      "taskNo": "16",
      "letter": "b",
      "label": "16-topshiriq, b) misol",
      "desc": "Trigonometrik shaklga o'tkazing: z = 2 - 2√3 i -> r = 4, φ = -π/3",
      "topic": "complex_ops",
      "preferredMethod": "Trigonometrik shaklga o'tish (r, cos φ + i sin φ)",
      "data": {
        "a1": 2,
        "b1": -3.464,
        "type": "to_trig_form"
      }
    },
    {
      "id": "9_17",
      "taskNo": "17",
      "letter": "",
      "label": "17-topshiriq",
      "desc": "Kompleks tekislikda nuqtalar to'plamini tasvirlang: |z| = 1, |z| < 2, arg z = π/4",
      "topic": "complex_ops",
      "preferredMethod": "Geometrik tasvirlash usuli",
      "data": {
        "type": "complex_region"
      }
    }
  ],
  "amaliy_10": [
    {
      "id": "10_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "(1 + i)⁸ Muavr formulasi bilan darajaga ko'tarish",
      "topic": "demoivre_calc",
      "data": {
        "a": 1,
        "b": 1,
        "power": 8,
        "rootN": 3
      }
    },
    {
      "id": "10_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "(1 - i√3)⁶ Muavr formulasi bilan daraja",
      "topic": "demoivre_calc",
      "data": {
        "a": 1,
        "b": -1.732,
        "power": 6,
        "rootN": 3
      }
    },
    {
      "id": "10_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "(-1 + i)¹² Muavr formulasi bilan hisoblash",
      "topic": "demoivre_calc",
      "data": {
        "a": -1,
        "b": 1,
        "power": 12,
        "rootN": 4
      }
    },
    {
      "id": "10_2_a",
      "taskNo": "2",
      "letter": "a",
      "label": "2-topshiriq, a) misol",
      "desc": "∛1 — Birlikdan 3-darajali barcha kompleks ildizlar",
      "topic": "demoivre_calc",
      "data": {
        "a": 1,
        "b": 0,
        "power": 3,
        "rootN": 3
      }
    },
    {
      "id": "10_2_b",
      "taskNo": "2",
      "letter": "b",
      "label": "2-topshiriq, b) misol",
      "desc": "∜(-16) — Manfiy sondan 4-darajali ildizlar",
      "topic": "demoivre_calc",
      "data": {
        "a": -16,
        "b": 0,
        "power": 4,
        "rootN": 4
      }
    },
    {
      "id": "10_2_c",
      "taskNo": "2",
      "letter": "c",
      "label": "2-topshiriq, c) misol",
      "desc": "∛(1 + i) — Kompleks sondan 3-darajali barcha ildizlar",
      "topic": "demoivre_calc",
      "data": {
        "a": 1,
        "b": 1,
        "power": 2,
        "rootN": 3
      }
    },
    {
      "id": "10_3",
      "taskNo": "3",
      "letter": "",
      "label": "3-topshiriq",
      "desc": "Kasr ko'rinishdagi ifodalarni darajaga oshiring: ((1-i)/(√3+i))⁶ = -1/64",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 3
      }
    },
    {
      "id": "10_4",
      "taskNo": "4",
      "letter": "",
      "label": "4-topshiriq",
      "desc": "Hisoblang: (1 + i)²⁵ = 2¹²(1 + i) = 4096 + 4096i",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 4
      }
    },
    {
      "id": "10_5",
      "taskNo": "5",
      "letter": "",
      "label": "5-topshiriq",
      "desc": "Agar √(a+bi) = ±(α+βi) bo'lsa, √(-a-bi) = ±(β - αi) ekanligini toping",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 5
      }
    },
    {
      "id": "10_6",
      "taskNo": "6",
      "letter": "",
      "label": "6-topshiriq",
      "desc": "Tenglamalarni yeching: |z| + z = 8 + 4i (Yechim: z = 3 + 4i)",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 6
      }
    },
    {
      "id": "10_7",
      "taskNo": "7",
      "letter": "",
      "label": "7-topshiriq",
      "desc": "Tenglamalarni yeching: (z + 1)ⁿ + (z - 1)ⁿ = 0 (Yechim: z_k = -i·ctg(kπ/n))",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 7
      }
    },
    {
      "id": "10_8",
      "taskNo": "8",
      "letter": "",
      "label": "8-topshiriq",
      "desc": "Isbotlang: agar u = √(zz') bo'lsa, |z| + |z'| = |(z+z')/2 + u| + |(z+z')/2 - u|",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 8
      }
    },
    {
      "id": "10_9",
      "taskNo": "9",
      "letter": "",
      "label": "9-topshiriq",
      "desc": "Isbotlang: agar |z| ≤ 1/2 bo'lsa, |(1+i)z³ + iz| < 3/4",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 9
      }
    },
    {
      "id": "10_10",
      "taskNo": "10",
      "letter": "",
      "label": "10-topshiriq",
      "desc": "Isbotlang: (1 + i√3)(1 + i)(cos φ + i sin φ) = 2√2 [cos(7π/12 + φ) + i sin(7π/12 + φ)]",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 10
      }
    },
    {
      "id": "10_11",
      "taskNo": "11",
      "letter": "",
      "label": "11-topshiriq",
      "desc": "10-amaliyot 11-misol: Muavr formulasi, ildizlar va trigonometrik xossalar",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 11
      }
    },
    {
      "id": "10_12",
      "taskNo": "12",
      "letter": "",
      "label": "12-topshiriq",
      "desc": "10-amaliyot 12-misol: Muavr formulasi, ildizlar va trigonometrik xossalar",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 12
      }
    },
    {
      "id": "10_13",
      "taskNo": "13",
      "letter": "",
      "label": "13-topshiriq",
      "desc": "Ixtiyoriy n-butun son uchun isbotlang: (1 + i)ⁿ = 2^(n/2) (cos(nπ/4) + i sin(nπ/4))",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 13
      }
    },
    {
      "id": "10_14",
      "taskNo": "14",
      "letter": "",
      "label": "14-topshiriq",
      "desc": "z₁ = 1/2 + i√3/2 va z₂ = -1/2 - i√3/2 bo'lsa, z₁ⁿ + z₂ⁿ ifodaning qiymatini toping",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 14
      }
    },
    {
      "id": "10_15",
      "taskNo": "15",
      "letter": "",
      "label": "15-topshiriq",
      "desc": "Agar z = cos φ + i sin φ bo'lsa, (1 + z)ⁿ = (2 cos(φ/2))ⁿ (cos(nφ/2) + i sin(nφ/2))",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 15
      }
    },
    {
      "id": "10_16",
      "taskNo": "16",
      "letter": "",
      "label": "16-topshiriq",
      "desc": "Hisoblang: (1 + cos α + i sin α)ⁿ = (2 cos(α/2))ⁿ (cos(nα/2) + i sin(nα/2))",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 16
      }
    },
    {
      "id": "10_17",
      "taskNo": "17",
      "letter": "",
      "label": "17-topshiriq",
      "desc": "Agar z + 1/z = 2 cos θ bo'lsa, zᵐ + 1/zᵐ = 2 cos(mθ) ekanligini isbotlang",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 17
      }
    },
    {
      "id": "10_18",
      "taskNo": "18",
      "letter": "",
      "label": "18-topshiriq",
      "desc": "Isbotlang: ((1 + i tg α)/(1 - i tg α))ⁿ = (1 + i tg nα)/(1 - i tg nα)",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 18
      }
    },
    {
      "id": "10_19",
      "taskNo": "19",
      "letter": "",
      "label": "19-topshiriq",
      "desc": "cos 5x ni cos x orqali ifodalang: cos 5x = 16 cos⁵ x - 20 cos³ x + 5 cos x",
      "topic": "demoivre_calc",
      "preferredMethod": "Trigonometrik ko'phadlar va Muavr integratsiyasi",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 19
      }
    },
    {
      "id": "10_20",
      "taskNo": "20",
      "letter": "",
      "label": "20-topshiriq",
      "desc": "tg 6φ ni tg φ orqali ifodalang (Muavr formulasi bo'yicha)",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 20
      }
    },
    {
      "id": "10_21",
      "taskNo": "21",
      "letter": "",
      "label": "21-topshiriq",
      "desc": "10-amaliyot 21-misol: Muavr formulasi, ildizlar va trigonometrik xossalar",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 21
      }
    },
    {
      "id": "10_22",
      "taskNo": "22",
      "letter": "",
      "label": "22-topshiriq",
      "desc": "Birinchi darajali trigonometrik funksiyalar orqali ifodalang: cos³ x = (cos 3x + 3 cos x)/4",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 22
      }
    },
    {
      "id": "10_23",
      "taskNo": "23",
      "letter": "",
      "label": "23-topshiriq",
      "desc": "Birning 4, 6, 8, 12, 24 darajali barcha ildizlarini toping",
      "topic": "demoivre_calc",
      "preferredMethod": "Kompleks sondan n-darajali barcha ildizlarni topish (ⁿ√z)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 23
      }
    },
    {
      "id": "10_24",
      "taskNo": "24",
      "letter": "",
      "label": "24-topshiriq",
      "desc": "Birning 4, 5, 8, 10, 12 darajali boshlang'ich (ibtidoiy) ildizlarini toping",
      "topic": "demoivre_calc",
      "preferredMethod": "Boshlang'ich (ibtidoiy) ildizlar usuli",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 24
      }
    },
    {
      "id": "10_25",
      "taskNo": "25",
      "letter": "",
      "label": "25-topshiriq",
      "desc": "Birning n-darajali ildizlari yig'indisini toping: har doim 0 ga teng",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 25
      }
    },
    {
      "id": "10_26",
      "taskNo": "26",
      "letter": "",
      "label": "26-topshiriq",
      "desc": "Birning n-darajali ildizlari yig'indisi nol ekanligini isbotlang",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 26
      }
    },
    {
      "id": "10_27",
      "taskNo": "27",
      "letter": "",
      "label": "27-topshiriq",
      "desc": "Birning n-darajali ildizlari ko'paytmasini toping: Π ε_k = (-1)ⁿ⁻¹",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 27
      }
    },
    {
      "id": "10_28",
      "taskNo": "28",
      "letter": "",
      "label": "28-topshiriq",
      "desc": "Birning boshlang'ich ildizlari yig'indisini toping (Möbius μ(n) funksiyasi)",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 28
      }
    },
    {
      "id": "10_29",
      "taskNo": "29",
      "letter": "",
      "label": "29-topshiriq",
      "desc": "Hisoblang: 1 + 2ε + 3ε² + ... + nεⁿ⁻¹ = n / (ε - 1)",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 29
      }
    },
    {
      "id": "10_30",
      "taskNo": "30",
      "letter": "",
      "label": "30-topshiriq",
      "desc": "Hisoblang: 1 + ε + ε² + ... + εⁿ⁻¹ = 0 (ε ≠ 1 boshlang'ich ildiz)",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 30
      }
    },
    {
      "id": "10_31",
      "taskNo": "31",
      "letter": "",
      "label": "31-topshiriq",
      "desc": "10-amaliyot 31-misol: Muavr formulasi, ildizlar va trigonometrik xossalar",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 31
      }
    },
    {
      "id": "10_32",
      "taskNo": "32",
      "letter": "",
      "label": "32-topshiriq",
      "desc": "Kombinatorik yig'indi: 1 - C_n² + C_n⁴ - C_n⁶ + ... = 2^(n/2) cos(nπ/4)",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 32
      }
    },
    {
      "id": "10_33",
      "taskNo": "33",
      "letter": "",
      "label": "33-topshiriq",
      "desc": "10-amaliyot 33-misol: Muavr formulasi, ildizlar va trigonometrik xossalar",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 33
      }
    },
    {
      "id": "10_34",
      "taskNo": "34",
      "letter": "",
      "label": "34-topshiriq",
      "desc": "Dirichlet yadrosi: sin x + sin 2x + ... + sin nx = sin(nx/2) · sin((n+1)x/2) / sin(x/2)",
      "topic": "demoivre_calc",
      "preferredMethod": "Muavr formulasi bilan darajaga ko'tarish (zⁿ)",
      "data": {
        "power": 4,
        "rootN": 3,
        "a": 1,
        "b": 1,
        "taskNum": 34
      }
    }
  ],
  "amaliy_11": [
    {
      "id": "11_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "(2x⁴ - 3x³ + 4x² - 5x + 6) : (x² - 3x + 1) burchakli bo'lish",
      "topic": "poly_div",
      "data": {
        "f": "2 -3 4 -5 6",
        "g": "1 -3 1"
      }
    },
    {
      "id": "11_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "(x³ - 3x² - x - 1) : (3x² - 2x + 1) qoldiqli bo'lish",
      "topic": "poly_div",
      "data": {
        "f": "1 -3 -1 -1",
        "g": "3 -2 1"
      }
    },
    {
      "id": "11_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "(x⁵ - 2x⁴ + 3x² - 5) : (x³ - 2x + 1)",
      "topic": "poly_div",
      "data": {
        "f": "1 -2 0 3 0 -5",
        "g": "1 0 -2 1"
      }
    },
    {
      "id": "11_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "(3x⁵ - 2x⁴ + x³ + 4x - 2) : (x² + x + 1)",
      "topic": "poly_div",
      "data": {
        "f": "3 -2 1 0 4 -2",
        "g": "1 1 1"
      }
    },
    {
      "id": "11_2",
      "taskNo": "2",
      "letter": "",
      "label": "2-topshiriq",
      "desc": "f(x) = x³ + px + q ko'phad g(x) = x² + mx - 1 ga qoldiqsiz bo'linish shartlarini toping",
      "topic": "poly_div",
      "preferredMethod": "Burchakli bo'lish (Polynomial Long Division)",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 2
      }
    },
    {
      "id": "11_3",
      "taskNo": "3",
      "letter": "",
      "label": "3-topshiriq",
      "desc": "Gorner sxemasi yordamida f(x) ni g(x) = x - c ga bo'lgandagi bo'linma va qoldiqni toping",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 3
      }
    },
    {
      "id": "11_4",
      "taskNo": "4",
      "letter": "",
      "label": "4-topshiriq",
      "desc": "Gorner sxemasi yordamida f(x) ko'phadning x₀ nuqtadagi qiymatini toping",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 4
      }
    },
    {
      "id": "11_5",
      "taskNo": "5",
      "letter": "",
      "label": "5-topshiriq",
      "desc": "Gorner sxemasi yordamida f(x) ko'phadni x - x₀ darajalari bo'yicha yoying (Teylor formulasi)",
      "topic": "poly_div",
      "preferredMethod": "Teylor koeffitsiyentlari usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 5
      }
    },
    {
      "id": "11_6",
      "taskNo": "6",
      "letter": "",
      "label": "6-topshiriq",
      "desc": "Gorner sxemasi yordamida f(x+3) va f(x-2) siljishlarini x ning darajalari bo'yicha yoying",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 6
      }
    },
    {
      "id": "11_7",
      "taskNo": "7",
      "letter": "",
      "label": "7-topshiriq",
      "desc": "Berilgan ko'phad hosilasining x₀ nuqtadagi qiymatini Gorner sxemasida hisoblang",
      "topic": "poly_div",
      "preferredMethod": "Karrali ildizlar va hosilalar usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 7
      }
    },
    {
      "id": "11_8",
      "taskNo": "8",
      "letter": "",
      "label": "8-topshiriq",
      "desc": "Quyidagi ko'phadlar uchun x₀ soni necha karrali ildiz ekanligini aniqlang",
      "topic": "poly_div",
      "preferredMethod": "Karrali ildizlar va hosilalar usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 8
      }
    },
    {
      "id": "11_9",
      "taskNo": "9",
      "letter": "",
      "label": "9-topshiriq",
      "desc": "x₀ = -1 soni f(x) = x³ - ax² - ax + 1 ning kamida 2 karrali ildizi bo'lishi uchun a ni toping (a = 3)",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 9
      }
    },
    {
      "id": "11_10",
      "taskNo": "10",
      "letter": "",
      "label": "10-topshiriq",
      "desc": "Ax⁴ + Bx³ + 1 uchhad (x - 1)² ga qoldiqsiz bo'linishi uchun A va B ni aniqlang (A = 3, B = -4)",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 10
      }
    },
    {
      "id": "11_11",
      "taskNo": "11",
      "letter": "",
      "label": "11-topshiriq",
      "desc": "Axⁿ⁺¹ + Bxⁿ + 1 uchhad (x - 1)² ga qoldiqsiz bo'linishi uchun A va B ni aniqlang (A = n, B = -(n+1))",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 11
      }
    },
    {
      "id": "11_12",
      "taskNo": "12",
      "letter": "",
      "label": "12-topshiriq",
      "desc": "1 soni ko'phadlarning uch karrali ildizi ekanligini isbotlang: x²ⁿ - nxⁿ⁺¹ + nxⁿ⁻¹ - 1",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 12
      }
    },
    {
      "id": "11_13",
      "taskNo": "13",
      "letter": "",
      "label": "13-topshiriq",
      "desc": "Ko'phad (x - 1)⁵ ga bo'linib, (x - 1)⁶ ga bo'linmasligini ko'rsating",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 13
      }
    },
    {
      "id": "11_14",
      "taskNo": "14",
      "letter": "",
      "label": "14-topshiriq",
      "desc": "x⁵ + ax³ + b ko'phad noldan farqli 2 karrali ildizga ega bo'lish shartini aniqlang: 108a⁵ + 3125b² = 0",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 14
      }
    },
    {
      "id": "11_15",
      "taskNo": "15",
      "letter": "",
      "label": "15-topshiriq",
      "desc": "x⁵ + 10ax³ + 5bx + c ko'phad noldan farqli 3 karrali ildizga ega bo'lish shartini aniqlang",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 15
      }
    },
    {
      "id": "11_16",
      "taskNo": "16",
      "letter": "",
      "label": "16-topshiriq",
      "desc": "xⁿ + axⁿ⁻ᵐ + b ko'phad noldan farqli 2 karrali ildizga ega bo'lish shartini aniqlang",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 16
      }
    },
    {
      "id": "11_17",
      "taskNo": "17",
      "letter": "",
      "label": "17-topshiriq",
      "desc": "xⁿ + axⁿ⁻ᵐ + b ko'phad noldan farqli 3 karrali ildizga ega emasligini isbotlang",
      "topic": "poly_div",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "f": [
          1,
          -2,
          4,
          -6,
          8
        ],
        "g": [
          1,
          -1
        ],
        "taskNum": 17
      }
    }
  ],
  "amaliy_12": [
    {
      "id": "12_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "EKUB: f(x)=x⁴+x³-3x²-4x-1, g(x)=x³+x²-x-1",
      "topic": "poly_gcd",
      "data": {
        "f": "1 1 -3 -4 -1",
        "g": "1 1 -1 -1"
      }
    },
    {
      "id": "12_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "EKUB: f(x)=x⁵+x⁴-x³-2x-1, g(x)=3x⁴+2x³+x²+2x-2",
      "topic": "poly_gcd",
      "data": {
        "f": "1 1 -1 0 -2 -1",
        "g": "3 2 1 2 -2"
      }
    },
    {
      "id": "12_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "EKUB: f(x)=x⁵-7x⁴+8x³-7x+7, g(x)=3x⁴-7x³+3x²-7",
      "topic": "poly_gcd",
      "data": {
        "f": "1 -7 8 0 -7 7",
        "g": "3 -7 3 0 -7"
      }
    },
    {
      "id": "12_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "EKUB: f(x)=x⁶+2x⁴-4x³-3x²+8x-5, g(x)=x⁵+x²-x+1",
      "topic": "poly_gcd",
      "data": {
        "f": "1 0 2 -4 -3 8 -5",
        "g": "1 0 0 1 -1 1"
      }
    },
    {
      "id": "12_1_e",
      "taskNo": "1",
      "letter": "e",
      "label": "1-topshiriq, e) misol",
      "desc": "EKUB: f(x)=x⁵+x⁴-x³-3x²-3x-1, g(x)=x⁴-2x³-x²-2x+1",
      "topic": "poly_gcd",
      "data": {
        "f": "1 1 -1 -3 -3 -1",
        "g": "1 -2 -1 -2 1"
      }
    },
    {
      "id": "12_2",
      "taskNo": "2",
      "letter": "",
      "label": "2-topshiriq",
      "desc": "Yevklid algoritmidan foydalanib, f₁·M₂ + f₂·M₁ = d(x) Bezout tenglikni qanoatlantiruvchi M₁ va M₂ ni toping",
      "topic": "poly_gcd",
      "preferredMethod": "Bezout munosabati (Kengaytirilgan Yevklid algoritmi)",
      "data": {
        "f": [
          1,
          2,
          -1,
          -4,
          -2
        ],
        "g": [
          1,
          1,
          -1,
          -2,
          -2
        ],
        "taskNum": 2
      }
    },
    {
      "id": "12_3",
      "taskNo": "3",
      "letter": "",
      "label": "3-topshiriq",
      "desc": "O'zaro tub ko'phadlar uchun f₁·M₂ + f₂·M₁ = 1 Bezout munosabatini qanoatlantiruvchi M₁ va M₂ ni toping",
      "topic": "poly_gcd",
      "preferredMethod": "Bezout munosabati (Kengaytirilgan Yevklid algoritmi)",
      "data": {
        "f": [
          3,
          -2,
          1,
          2
        ],
        "g": [
          1,
          -1,
          1
        ],
        "taskNum": 3
      }
    },
    {
      "id": "12_4",
      "taskNo": "4",
      "letter": "",
      "label": "4-topshiriq",
      "desc": "Tenglikni qanoatlantiruvchi M₁(x) va M₂(x) ko'phadlarni aniqlang: f₁·M₁ + f₂·M₂ = φ(x)",
      "topic": "poly_gcd",
      "preferredMethod": "Bezout munosabati (Kengaytirilgan Yevklid algoritmi)",
      "data": {
        "f": [
          1,
          -2,
          -4,
          6,
          1
        ],
        "g": [
          1,
          0,
          -5,
          -3
        ],
        "taskNum": 4
      }
    },
    {
      "id": "12_5",
      "taskNo": "5",
      "letter": "",
      "label": "5-topshiriq",
      "desc": "(x - 1)² ga bo'lganda 2x hamda (x - 2)³ ga bo'lganda 3x qoldiq chiquvchi eng kichik darajali ko'phadni aniqlang",
      "topic": "poly_gcd",
      "preferredMethod": "Qoldiqlar bo'yicha ko'phadni tiklash (Xitoy qoldiqlar teoremasi)",
      "data": {
        "type": "chinese_remainder_poly",
        "taskNum": 5
      }
    },
    {
      "id": "12_6",
      "taskNo": "6",
      "letter": "",
      "label": "6-topshiriq",
      "desc": "Ikkita 4-darajali modul bo'yicha qoldiqlar berilganda eng kichik darajali ko'phadni aniqlang",
      "topic": "poly_gcd",
      "preferredMethod": "Qoldiqlar bo'yicha ko'phadni tiklash (Xitoy qoldiqlar teoremasi)",
      "data": {
        "type": "chinese_remainder_poly",
        "taskNum": 6
      }
    },
    {
      "id": "12_7",
      "taskNo": "7",
      "letter": "",
      "label": "7-topshiriq",
      "desc": "xᵐ·M(x) + (1 - x)ⁿ·N(x) = 1 tenglikni qanoatlantiruvchi M(x) va N(x) ko'phadlarni toping",
      "topic": "poly_gcd",
      "preferredMethod": "Bezout munosabati (Kengaytirilgan Yevklid algoritmi)",
      "data": {
        "type": "binomial_bezout",
        "taskNum": 7
      }
    }
  ],
  "amaliy_13": [
    {
      "id": "13_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "Gorner: f(x) = 2x⁴ - 6x³ + 2x² - 1 ni (x - 3) ga bo'lish va f(3)",
      "topic": "horner_scheme",
      "data": {
        "coeffs": "2 -6 2 0 -1",
        "c": 3
      }
    },
    {
      "id": "13_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "Gorner: f(x) = 3x⁵ - 2x⁴ + x³ + 4x - 1 ni (x - 2) ga bo'lish va f(2)",
      "topic": "horner_scheme",
      "data": {
        "coeffs": "3 -2 1 0 4 -1",
        "c": 2
      }
    },
    {
      "id": "13_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "Gorner: f(x) = x⁴ - 4x³ + 6x² - 8x + 10 ni (x - 2) ga bo'lish va f(2)",
      "topic": "horner_scheme",
      "data": {
        "coeffs": "1 -4 6 -8 10",
        "c": 2
      }
    },
    {
      "id": "13_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "Gorner: f(x) = 2x⁴ - 5x³ + 3x² - 2x + 4 ni (x + 1) ga bo'lish va f(-1)",
      "topic": "horner_scheme",
      "data": {
        "coeffs": "2 -5 3 -2 4",
        "c": -1
      }
    },
    {
      "id": "13_1_e",
      "taskNo": "1",
      "letter": "e",
      "label": "1-topshiriq, e) misol",
      "desc": "Gorner: f(x) = x⁵ + 2x⁴ + 2x² + 4x - 7 ni (x + 2) ga bo'lish va f(-2)",
      "topic": "horner_scheme",
      "data": {
        "coeffs": "1 2 0 2 4 -7",
        "c": -2
      }
    },
    {
      "id": "13_2",
      "taskNo": "2",
      "letter": "",
      "label": "2-topshiriq",
      "desc": "Ko'phadning butun ildizlarini toping: f(x) = x⁴ - 2x³ - 8x² + 13x - 24",
      "topic": "horner_scheme",
      "preferredMethod": "Ratsional ildizlar teoremasi (p/q)",
      "data": {
        "coeffs": [
          1,
          -2,
          -8,
          13,
          -24
        ],
        "c": 3,
        "taskNum": 2
      }
    },
    {
      "id": "13_3_f",
      "taskNo": "3",
      "letter": "f",
      "label": "3-topshiriq, f) misol",
      "desc": "Gorner: f(x) = x⁵ + 7x⁴ + 16x³ + 8x² - 16x - 16 ni (x + 2) ga bo'lish",
      "topic": "horner_scheme",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "coeffs": "1 7 16 8 -16 -16",
        "c": -2
      }
    },
    {
      "id": "13_4_a",
      "taskNo": "4",
      "letter": "a",
      "label": "4-topshiriq, a) misol",
      "desc": "Gorner: f(x) = x⁴ - 3x³ + 6x² - 10x + 16 ning x₀ = 4 dagi qiymati",
      "topic": "horner_scheme",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "coeffs": "1 -3 6 -10 16",
        "c": 4
      }
    },
    {
      "id": "13_4_b",
      "taskNo": "4",
      "letter": "b",
      "label": "4-topshiriq, b) misol",
      "desc": "Gorner: f(x) = x⁴ - 3x³ - 10x² + 2x + 5 ning x₀ = -2 dagi qiymati",
      "topic": "horner_scheme",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "coeffs": "1 -3 -10 2 5",
        "c": -2
      }
    },
    {
      "id": "13_4_c",
      "taskNo": "4",
      "letter": "c",
      "label": "4-topshiriq, c) misol",
      "desc": "Gorner: f(x) = x⁵ - 6x⁴ + 2x³ + 36x² - 27x - 54 ning x₀ = 3 dagi qiymati",
      "topic": "horner_scheme",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "coeffs": "1 -6 2 36 -27 -54",
        "c": 3
      }
    },
    {
      "id": "13_5",
      "taskNo": "5",
      "letter": "",
      "label": "5-topshiriq",
      "desc": "Ko'phadning karrali ildizlarini ajrating: d(x) = EKUB(f(x), f'(x)) usuli bilan",
      "topic": "horner_scheme",
      "preferredMethod": "Karrali ildizlarni ajratish (f va f' ning EKUBi)",
      "data": {
        "coeffs": [
          1,
          -5,
          7,
          -2,
          4,
          -8
        ],
        "c": 2,
        "taskNum": 5
      }
    },
    {
      "id": "13_6",
      "taskNo": "6",
      "letter": "",
      "label": "6-topshiriq",
      "desc": "Ko'phadni x - c darajalari bo'yicha Teylor formulasi va Gorner sxemasi orqali yoying",
      "topic": "horner_scheme",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "coeffs": [
          1,
          -8,
          24,
          -50,
          90
        ],
        "c": 2,
        "taskNum": 6
      }
    },
    {
      "id": "13_7_a",
      "taskNo": "7",
      "letter": "a",
      "label": "7-topshiriq, a) misol",
      "desc": "f'(x₀) hosila qiymati: f(x) = x⁵ - 4x³ + 6x² - 8x + 10, x₀ = 2",
      "topic": "horner_scheme",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "coeffs": "1 0 -4 6 -8 10",
        "c": 2
      }
    },
    {
      "id": "13_8_a",
      "taskNo": "8",
      "letter": "a",
      "label": "8-topshiriq, a) misol",
      "desc": "Ildiz karraliligi: f(x) = x⁵ - 5x⁴ + 7x³ - 2x² + 4x - 8 uchun x₀ = 2",
      "topic": "horner_scheme",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "coeffs": "1 -5 7 -2 4 -8",
        "c": 2
      }
    },
    {
      "id": "13_8_b",
      "taskNo": "8",
      "letter": "b",
      "label": "8-topshiriq, b) misol",
      "desc": "Ildiz karraliligi: f(x) = x⁵ + 7x⁴ + 16x³ + 8x² - 16x - 16 uchun x₀ = -2",
      "topic": "horner_scheme",
      "preferredMethod": "Gorner jadvali usuli",
      "data": {
        "coeffs": "1 7 16 8 -16 -16",
        "c": -2
      }
    },
    {
      "id": "13_9",
      "taskNo": "9",
      "letter": "",
      "label": "9-topshiriq",
      "desc": "x₀ = -1 soni f(x) ning kamida 2 karrali ildizi bo'lishi uchun a parametrning qiymatini toping",
      "topic": "horner_scheme",
      "preferredMethod": "Bezu teoremasi va qoldiqlar",
      "data": {
        "coeffs": [
          1,
          -3,
          -3,
          1
        ],
        "c": -1,
        "taskNum": 9
      }
    },
    {
      "id": "13_10",
      "taskNo": "10",
      "letter": "",
      "label": "10-topshiriq",
      "desc": "Ax⁴ + Bx³ + 1 uchhad (x - 1)² ga bo'linishi uchun A va B koeffitsiyentlarni aniqlang (A = 3, B = -4)",
      "topic": "horner_scheme",
      "preferredMethod": "Bezu teoremasi va qoldiqlar",
      "data": {
        "coeffs": [
          3,
          -4,
          0,
          0,
          1
        ],
        "c": 1,
        "taskNum": 10
      }
    },
    {
      "id": "13_11",
      "taskNo": "11",
      "letter": "",
      "label": "11-topshiriq",
      "desc": "Axⁿ⁺¹ + Bxⁿ + 1 uchhad (x - 1)² ga bo'linishi uchun A va B koeffitsiyentlarni aniqlang",
      "topic": "horner_scheme",
      "preferredMethod": "Bezu teoremasi va qoldiqlar",
      "data": {
        "formula": "A = n, B = -(n+1)",
        "taskNum": 11
      }
    },
    {
      "id": "13_12",
      "taskNo": "12",
      "letter": "",
      "label": "12-topshiriq",
      "desc": "1 soni ko'phadlarning uch karrali ildizi ekanligini isbotlang: f(1) = 0, f'(1) = 0, f''(1) = 0",
      "topic": "horner_scheme",
      "preferredMethod": "Algebraning asosiy teoremasi va ildizlar tahlili",
      "data": {
        "coeffs": [
          1,
          0,
          -3,
          3,
          -1
        ],
        "c": 1,
        "taskNum": 12
      }
    },
    {
      "id": "13_13",
      "taskNo": "13",
      "letter": "",
      "label": "13-topshiriq",
      "desc": "Ko'phad (x - 1)⁵ ga bo'linib, (x - 1)⁶ ga bo'linmasligini ko'rsating",
      "topic": "horner_scheme",
      "preferredMethod": "Algebraning asosiy teoremasi va ildizlar tahlili",
      "data": {
        "coeffs": [
          1,
          -5,
          10,
          -10,
          5,
          -1
        ],
        "c": 1,
        "taskNum": 13
      }
    },
    {
      "id": "13_14",
      "taskNo": "14",
      "letter": "",
      "label": "14-topshiriq",
      "desc": "x⁵ + ax³ + b ko'phad ikki karrali ildizga ega bo'lish shartlarini toping",
      "topic": "horner_scheme",
      "preferredMethod": "Algebraning asosiy teoremasi va ildizlar tahlili",
      "data": {
        "formula": "108a^5 + 3125b^2 = 0",
        "taskNum": 14
      }
    },
    {
      "id": "13_15",
      "taskNo": "15",
      "letter": "",
      "label": "15-topshiriq",
      "desc": "x⁵ + 10ax³ + 5bx + c ko'phad uch karrali ildizga ega bo'lish shartlarini aniqlang",
      "topic": "horner_scheme",
      "preferredMethod": "Algebraning asosiy teoremasi va ildizlar tahlili",
      "data": {
        "formula": "b = 3a^2, c = 0",
        "taskNum": 15
      }
    },
    {
      "id": "13_16",
      "taskNo": "16",
      "letter": "",
      "label": "16-topshiriq",
      "desc": "xⁿ + axⁿ⁻ᵐ + b ko'phad noldan farqli ikki karrali ildizga ega bo'lish shartlarini aniqlang",
      "topic": "horner_scheme",
      "preferredMethod": "Algebraning asosiy teoremasi va ildizlar tahlili",
      "data": {
        "formula": "Diskriminant tahlili",
        "taskNum": 16
      }
    },
    {
      "id": "13_17",
      "taskNo": "17",
      "letter": "",
      "label": "17-topshiriq",
      "desc": "xⁿ + axⁿ⁻ᵐ + b ko'phad noldan farqli uch karrali ildizga ega emasligini isbotlang",
      "topic": "horner_scheme",
      "preferredMethod": "Algebraning asosiy teoremasi va ildizlar tahlili",
      "data": {
        "formula": "f''(x) = 0 faqat bitta had beradi",
        "taskNum": 17
      }
    }
  ],
  "amaliy_14": [
    {
      "id": "14_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "1 / [(x+1)(x+2)(x+3)] kasrni oddiy kasrlarga ajratish",
      "topic": "poly_div",
      "data": {
        "f": "1",
        "g": "1 6 11 6"
      }
    },
    {
      "id": "14_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "(x² + 1) / [(x-1)(x-2)(x-3)] kasrni oddiy kasrlarga yoyish",
      "topic": "poly_div",
      "data": {
        "f": "1 0 1",
        "g": "1 -6 11 -6"
      }
    },
    {
      "id": "14_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "(3x + 2) / (x² + x - 2) sodda kasrlarga yoyish",
      "topic": "poly_div",
      "data": {
        "f": "3 2",
        "g": "1 1 -2"
      }
    },
    {
      "id": "14_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "(2x² - 5) / (x³ + 2x² - 5x - 6)",
      "topic": "poly_div",
      "data": {
        "f": "2 0 -5",
        "g": "1 2 -5 -6"
      }
    },
    {
      "id": "14_2_a",
      "taskNo": "2",
      "letter": "a",
      "label": "2-topshiriq, a) misol",
      "desc": "Haqiqiy maydonda: (x² + 1) / ((x - 1)(x - 2)(x - 3))",
      "topic": "partial_fractions",
      "preferredMethod": "Noma'lum koeffitsiyentlar usuli",
      "data": {
        "num": "x^2 + 1",
        "den": "(x - 1)(x - 2)(x - 3)"
      }
    },
    {
      "id": "14_2_b",
      "taskNo": "2",
      "letter": "b",
      "label": "2-topshiriq, b) misol",
      "desc": "Haqiqiy maydonda: (x - 2) / (x² - 3x + 2)",
      "topic": "partial_fractions",
      "preferredMethod": "Noma'lum koeffitsiyentlar usuli",
      "data": {
        "num": "x - 2",
        "den": "x^2 - 3x + 2"
      }
    },
    {
      "id": "14_2_c",
      "taskNo": "2",
      "letter": "c",
      "label": "2-topshiriq, c) misol",
      "desc": "Haqiqiy maydonda: (3x² - 2x + 1) / (x³ - 1)",
      "topic": "partial_fractions",
      "preferredMethod": "Noma'lum koeffitsiyentlar usuli",
      "data": {
        "num": "3x^2 - 2x + 1",
        "den": "x^3 - 1"
      }
    },
    {
      "id": "14_3",
      "taskNo": "3",
      "letter": "",
      "label": "3-topshiriq",
      "desc": "Maxsus darajali ratsional kasrlarni kompleks maydonda yoying: 1/(xⁿ - 1) va n!/(x(x-1)...(x-n))",
      "topic": "partial_fractions",
      "preferredMethod": "Kompleks sodda kasrlarga ajratish",
      "data": {
        "num": "1",
        "den": "x^4 - 1",
        "taskNum": 3
      }
    },
    {
      "id": "14_4_a",
      "taskNo": "4",
      "letter": "a",
      "label": "4-topshiriq, a) misol",
      "desc": "Haqiqiy maydonda yoyish: 1 / (x⁴ - 1)",
      "topic": "partial_fractions",
      "preferredMethod": "Noma'lum koeffitsiyentlar usuli",
      "data": {
        "num": "1",
        "den": "x^4 - 1"
      }
    },
    {
      "id": "14_4_b",
      "taskNo": "4",
      "letter": "b",
      "label": "4-topshiriq, b) misol",
      "desc": "Haqiqiy maydonda yoyish: x² / (x⁴ - 16)",
      "topic": "partial_fractions",
      "preferredMethod": "Noma'lum koeffitsiyentlar usuli",
      "data": {
        "num": "x^2",
        "den": "x^4 - 16"
      }
    },
    {
      "id": "14_5",
      "taskNo": "5",
      "letter": "",
      "label": "5-topshiriq",
      "desc": "x₁, x₂, x₃ sonlari f(x) = x³ + x² - 4x + 1 ning ildizlari bo'lsa, 1/x₁ + 1/x₂ + 1/x₃ va x₁² + x₂² + x₃² ni toping",
      "topic": "partial_fractions",
      "preferredMethod": "Vieta teoremalari va simmetrik funksiyalar",
      "data": {
        "num": "x^2 + 1",
        "den": "x^3 + x^2 - 4x + 1",
        "type": "vieta_symmetric",
        "taskNum": 5
      }
    },
    {
      "id": "14_6",
      "taskNo": "6",
      "letter": "",
      "label": "6-topshiriq",
      "desc": "Ko'phadlarni ratsional sonlar maydoni ustida keltirilmas ekanligini Eyzenshteyn kriteriyasi bilan isbotlang",
      "topic": "partial_fractions",
      "preferredMethod": "Eyzenshteyn keltirilmaslik kriteriyasi",
      "data": {
        "poly": "x^4 - 8x^3 + 12x^2 - 6x + 2",
        "prime_p": 2,
        "type": "eisenstein_proof",
        "taskNum": 6
      }
    }
  ],
  "amaliy_15": [
    {
      "id": "15_1_a",
      "taskNo": "1",
      "letter": "a",
      "label": "1-topshiriq, a) misol",
      "desc": "x³ - 6x - 9 = 0 (Kardano formulasi)",
      "topic": "cardano_cubic",
      "data": {
        "a": 1,
        "b": 0,
        "c": -6,
        "d": -9
      }
    },
    {
      "id": "15_1_b",
      "taskNo": "1",
      "letter": "b",
      "label": "1-topshiriq, b) misol",
      "desc": "x³ + 3x - 4 = 0 (Kardano formulasi)",
      "topic": "cardano_cubic",
      "data": {
        "a": 1,
        "b": 0,
        "c": 3,
        "d": -4
      }
    },
    {
      "id": "15_1_c",
      "taskNo": "1",
      "letter": "c",
      "label": "1-topshiriq, c) misol",
      "desc": "x³ - 3x + 2 = 0 (Kardano formulasi)",
      "topic": "cardano_cubic",
      "data": {
        "a": 1,
        "b": 0,
        "c": -3,
        "d": 2
      }
    },
    {
      "id": "15_1_d",
      "taskNo": "1",
      "letter": "d",
      "label": "1-topshiriq, d) misol",
      "desc": "x³ - 12x + 16 = 0 (Kardano formulasi)",
      "topic": "cardano_cubic",
      "data": {
        "a": 1,
        "b": 0,
        "c": -12,
        "d": 16
      }
    },
    {
      "id": "15_1_e",
      "taskNo": "1",
      "letter": "e",
      "label": "1-topshiriq, e) misol",
      "desc": "x³ + 6x² + 9x + 4 = 0 (Keltirilgan kubik tenglama)",
      "topic": "cardano_cubic",
      "data": {
        "a": 1,
        "b": 6,
        "c": 9,
        "d": 4
      }
    },
    {
      "id": "15_1_f",
      "taskNo": "1",
      "letter": "f",
      "label": "1-topshiriq, f) misol",
      "desc": "x³ - 9x² + 24x - 16 = 0 (Keltirilgan kubik tenglama)",
      "topic": "cardano_cubic",
      "data": {
        "a": 1,
        "b": -9,
        "c": 24,
        "d": -16
      }
    },
    {
      "id": "15_2_a",
      "taskNo": "2",
      "letter": "a",
      "label": "2-topshiriq, a) misol",
      "desc": "Keltirilgan kubik tenglama: y³ - 6y + 4 = 0 (3 ta haqiqiy ildiz)",
      "topic": "cardano_cubic",
      "preferredMethod": "Kardano formulasi va diskriminant tahlili",
      "data": {
        "a": 1,
        "b": 0,
        "c": -6,
        "d": 4
      }
    },
    {
      "id": "15_2_b",
      "taskNo": "2",
      "letter": "b",
      "label": "2-topshiriq, b) misol",
      "desc": "Keltirilgan kubik tenglama: y³ + 9y - 6 = 0 (Kardano formulasi)",
      "topic": "cardano_cubic",
      "preferredMethod": "Kardano formulasi va diskriminant tahlili",
      "data": {
        "a": 1,
        "b": 0,
        "c": 9,
        "d": -6
      }
    },
    {
      "id": "15_3_a",
      "taskNo": "3",
      "letter": "a",
      "label": "3-topshiriq, a) misol",
      "desc": "Trigonometrik (Viet) usuli: x³ - 3x - 1 = 0",
      "topic": "cardano_cubic",
      "preferredMethod": "Kardano formulasi va diskriminant tahlili",
      "data": {
        "a": 1,
        "b": 0,
        "c": -3,
        "d": -1
      }
    },
    {
      "id": "15_4_a",
      "taskNo": "4",
      "letter": "a",
      "label": "4-topshiriq, a) misol",
      "desc": "To'rtinchi darajali tenglama: x⁴ - 2x³ + 2x² - 2x + 1 = 0",
      "topic": "cardano_cubic",
      "preferredMethod": "Kardano formulasi va diskriminant tahlili",
      "data": {
        "a": 1,
        "b": -2,
        "c": 2,
        "d": -2
      }
    },
    {
      "id": "15_5",
      "taskNo": "5",
      "letter": "",
      "label": "5-topshiriq",
      "desc": "Bikvadrat va simmetrik (qaytma) 4-darajali tenglamalar: x⁴ - 5x² + 4 = 0 (t = x²)",
      "topic": "cardano_cubic",
      "preferredMethod": "Bikvadrat va simmetrik tenglamalar usuli",
      "data": {
        "a": 1,
        "b": 0,
        "c": -5,
        "d": 4,
        "type": "biquadratic",
        "taskNum": 5
      }
    },
    {
      "id": "15_6",
      "taskNo": "6",
      "letter": "",
      "label": "6-topshiriq",
      "desc": "Dekart-Eyler usuli bilan 4-darajali tenglamani yechish: x⁴ - 2x³ + 2x² - 2x + 1 = 0",
      "topic": "cardano_cubic",
      "preferredMethod": "Dekart-Eyler usuli",
      "data": {
        "a": 1,
        "b": -2,
        "c": 2,
        "d": -2,
        "e": 1,
        "type": "descartes_euler",
        "taskNum": 6
      }
    },
    {
      "id": "15_7",
      "taskNo": "7",
      "letter": "",
      "label": "7-topshiriq",
      "desc": "3- va 4-darajali tenglamalarning diskriminant tahlili va ildizlar tabiati (D > 0, D = 0, D < 0)",
      "topic": "cardano_cubic",
      "preferredMethod": "Diskriminant tahlili",
      "data": {
        "a": 1,
        "b": 0,
        "c": -3,
        "d": 1,
        "type": "discriminant_analysis",
        "taskNum": 7
      }
    }
  ]
};

if (typeof global !== 'undefined') {
  global.EXERCISES_DB = EXERCISES_DB;
}
if (typeof window !== 'undefined') {
  window.EXERCISES_DB = EXERCISES_DB;
}
