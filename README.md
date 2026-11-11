# 📐 Oliy Algebra va Chiziqli Algebra — Barcha 15 ta Amaliyotni Bosqichma-bosqich Yechuvchi Dastur

Ushbu dastur oliy ta'lim talabalari (TATU va boshqa texnika OTMlari) uchun 1-semestr davomida o'tiladigan **barcha 15 ta amaliy mashg'ulot** misol va masalalarini to'liq qadamma-qadam (step-by-step) ishlab berish uchun maxsus yaratilgan.

---

## 📚 Dasturga Kiritilgan Barcha 15 ta Amaliyot:

1. **1-Amaliyot: Matritsalar va ular ustida amallar**
   - Chiziqli amallar: $A \pm B$, $kA$, chiziqli kombinatsiyalar ($3A - 4B$)
   - Matritsalarni ko'paytirish ($A \times B$) va darajaga ko'tarish ($A^n$)
   - $A \cdot A^T$ (Matritsani o'z transponirlanganiga ko'paytirish)
   - $f(A)$ matritsali ko'phadni hisoblash ($f(A) = c_m A^m + \dots + c_0 E$)
   - Diagonallashtirish orqali darajaga oshirish ($A^n = P D^n P^{-1}$)

2. **2-Amaliyot: O‘rinlashtirish va o‘rin almashtirish**
   - O'rin almashtirishlar (Permutatsiyalar: $\sigma = (a_1, a_2, \dots, a_n)$)
   - Barcha inversiyalar $(a_i, a_j)$ juftliklarini sanash va ro'yxatini chiqarish
   - Permutatsiyaning juft yoki toqligini va ishorasini aniqlash ($\text{sgn}(\sigma) = (-1)^I$)

3. **3-Amaliyot: n-tartibli determinantlar va ularning xossalari**
   - $2\times2, 3\times3, 4\times4$ determinantlar
   - Sarrus qoidasi ($3\times3$)
   - Gauss usuli (Elementar amallar bilan yuqori uchburchak ko'rinishga keltirish)

4. **4-Amaliyot: Minorlar va algebraik to‘ldiruvchilar**
   - Belgilangan qator (yoki ustun) bo'yicha yoyish (Laplas teoremasi)
   - Har bir elementning minori $M_{ij}$ va algebraik to'ldiruvchisi $A_{ij} = (-1)^{i+j} M_{ij}$ ni alohida hisoblash

5. **5-Amaliyot: Teskari matritsa ($A^{-1}$)**
   - Algebraik to'ldiruvchilar (birikkan matritsa $C^T$) usuli
   - Jordan-Gauss usuli (birlashtirilgan $[A \mid E] \to [E \mid A^{-1}]$)

6. **6-Amaliyot: Chiziqli tenglamalar sistemalarini yechish**
   - Kramer qoidasi ($\Delta, \Delta_1, \Delta_2, \dots$ va $x_j = \Delta_j / \Delta$)
   - Gauss usuli (To'g'ri va teskari yurish)
   - Matritsa usuli ($A \cdot X = B \implies X = A^{-1} \cdot B$)

7. **7-Amaliyot: Matritsaning rangi**
   - Gauss elementar satr amallari orqali trapetsiyasimon pog'onali ko'rinishga keltirish
   - Chiziqli erkli satrlar soni (rang)ni aniqlash

8. **8-Amaliyot: Bir jinsli CHTS va Kroneker-Kapelli**
   - Bir jinsli sistema ($AX = 0$)
   - Fundamental Yechimlar Tizimi (FYeT / ФСР bazisi)ni topish
   - Erkin va bog'liq noma'lumlarni ajratib umumiy yechimni yozish ($X = C_1 X_1 + C_2 X_2 + \dots$)

9. **9-Amaliyot: Kompleks sonlar va ular ustida amallar**
   - Algebraik shakldagi amallar: $z_1 \pm z_2$, $z_1 \cdot z_2$, $\frac{z_1}{z_2}$ (qo'shmasiga ko'paytirish)
   - Modul ($r = |z|$) va argument ($\varphi = \arg z$) hisoblash
   - Trigonometrik shaklga keltirish ($r(\cos \varphi + i \sin \varphi)$)

10. **10-Amaliyot: Muavr formulasi va Ildiz chiqarish**
    - Kompleks sonni darajaga oshirish ($z^n = r^n(\cos n\varphi + i \sin n\varphi)$)
    - Kompleks sondan $n$-darajali barcha ildizlarni topish ($\sqrt[n]{z}$)

11. **11-Amaliyot: Ko‘phadlar va Qoldiqli bo‘lish**
    - Ko'phadni ko'phadga qoldiqli bo'lish (Burchakli bo'lish / polynomial long division)
    - To'liqsiz bo'linma $q(x)$ va qoldiq $r(x)$ ni topish ($f(x) = q(x)g(x) + r(x)$)

12. **12-Amaliyot: Ko‘phadlarning EKUBi (Yevklid algoritmi)**
    - Ketma-ket qoldiqli bo'lish orqali ko'phadlarning EKUBini topish

13. **13-Amaliyot: Bezu teoremasi va Gorner sxemasi**
    - $f(x)$ ko'phadni $(x - c)$ ga bo'lishda Gorner jadvalini to'ldirish
    - Bezu teoremasi bo'yicha $f(c)$ qoldiqni topish va ildiz ekanligini tekshirish

14. **14-Amaliyot: Ratsional kasrlar**
    - To'g'ri ratsional kasr $\frac{P(x)}{Q(x)}$ ni eng sodda kasrlar yig'indisiga ajratish
    - Noma'lum koeffitsiyentlar usuli bilan $A, B, C, \dots$ larni aniqlash

15. **15-Amaliyot: 3- va 4-darajali tenglamalar**
    - Kubik tenglamani keltirilgan $y^3 + py + q = 0$ shaklga keltirish
    - Kardano diskriminanti: $D = (q/2)^2 + (p/3)^3$
    - Kardano formulasi bo'yicha haqiqiy va kompleks ildizlarni hisoblash

---

## 🚀 Ishga Tushirish:

Terminalda bitta buyruq bilan ishga tushiring:
```bash
cd /home/nazarbek/Projects/chiziqli-algebra
./start.sh
```
*(yoki `python3 run.py`)*

Brauzerda avtomatik ochiladi: `http://localhost:8080`.
Har bir mavzuda tayyor misollar yuklash uchun **"Misol yuklash"** tugmasi mavjud!
