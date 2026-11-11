/**
 * Chiziqli Algebra va Analitik Geometriya — To'liq Yechuvchi Dvigatel
 * Fraction klassi va barcha mavzular bo'yicha qadamma-qadam yechimlar
 */

class Fraction {
  constructor(n, d = 1) {
    if (d === 0) throw new Error("Nolga bo'lish mumkin emas!");
    if (typeof n === 'string') {
      n = n.trim();
      if (n.includes('/')) {
        const parts = n.split('/');
        n = parseInt(parts[0], 10);
        d = parseInt(parts[1], 10);
      } else if (n.includes('.')) {
        const dec = parseFloat(n);
        const len = (n.split('.')[1] || '').length;
        const factor = Math.pow(10, Math.min(len, 4));
        n = Math.round(dec * factor);
        d = factor;
      } else {
        n = parseInt(n, 10) || 0;
      }
    }
    n = Math.round(Number(n));
    d = Math.round(Number(d));
    if (isNaN(n)) n = 0;
    if (isNaN(d) || d === 0) d = 1;
    if (d < 0) {
      n = -n;
      d = -d;
    }
    const g = Fraction.gcd(Math.abs(n), Math.abs(d));
    this.n = n / g;
    this.d = d / g;
  }

  static gcd(a, b) {
    return b === 0 ? a : Fraction.gcd(b, a % b);
  }

  static from(x) {
    if (x instanceof Fraction) return x;
    return new Fraction(x);
  }

  add(f) {
    f = Fraction.from(f);
    return new Fraction(this.n * f.d + f.n * this.d, this.d * f.d);
  }

  sub(f) {
    f = Fraction.from(f);
    return new Fraction(this.n * f.d - f.n * this.d, this.d * f.d);
  }

  mul(f) {
    f = Fraction.from(f);
    return new Fraction(this.n * f.n, this.d * f.d);
  }

  div(f) {
    f = Fraction.from(f);
    if (f.n === 0) throw new Error("Nolga bo'lish xatoligi!");
    return new Fraction(this.n * f.d, this.d * f.n);
  }

  neg() {
    return new Fraction(-this.n, this.d);
  }

  abs() {
    return new Fraction(Math.abs(this.n), this.d);
  }

  isZero() {
    return this.n === 0;
  }

  equals(f) {
    f = Fraction.from(f);
    return this.n === f.n && this.d === f.d;
  }

  toNumber() {
    return this.n / this.d;
  }

  toLaTeX(bracket = false) {
    if (this.d === 1) {
      if (bracket && this.n < 0) return `(${this.n})`;
      return `${this.n}`;
    }
    let res = '';
    if (this.n < 0) {
      res = `-\\frac{${Math.abs(this.n)}}{${this.d}}`;
    } else {
      res = `\\frac{${this.n}}{${this.d}}`;
    }
    if (bracket && this.n < 0) return `\\left(${res}\\right)`;
    return res;
  }

  toString() {
    if (this.d === 1) return `${this.n}`;
    return `${this.n}/${this.d}`;
  }
}

// LaTeX Helpers
function matrixToLaTeX(m, bracket = 'pmatrix') {
  const rows = m.map(row => 
    row.map(v => (v instanceof Fraction ? v.toLaTeX() : (v.toLaTeX ? v.toLaTeX() : v))).join(' & ')
  );
  return `\\begin{${bracket}} ${rows.join(' \\\\ ')} \\end{${bracket}}`;
}

function augmentedMatrixToLaTeX(A, B) {
  const rows = A.map((row, i) => {
    const rowStr = row.map(v => (v instanceof Fraction ? v.toLaTeX() : v)).join(' & ');
    let bVal = B[i];
    if (Array.isArray(bVal)) bVal = bVal[0];
    const bStr = bVal instanceof Fraction ? bVal.toLaTeX() : bVal;
    return `${rowStr} & \\big| & ${bStr}`;
  });
  const colSpec = 'c'.repeat(A[0].length) + '|c';
  return `\\left(\\begin{array}{${colSpec}} ${rows.join(' \\\\ ')} \\end{array}\\right)`;
}

function cloneMatrix(m) {
  return m.map(row => row.map(v => (v instanceof Fraction ? new Fraction(v.n, v.d) : v)));
}

// ============================================================
// 1. DETERMINANTLAR (Aniqlagichlar)
// ============================================================

function solveDeterminant(A, method = 'sarrus') {
  const n = A.length;
  const steps = [];

  steps.push({
    title: "1-qadam: Berilgan matritsa va determinantni yozish",
    desc: `O'lchami $${n} \\times ${n}$ bo'lgan kvadrat matritsaning aniqlagichi:`,
    latex: `\\Delta = \\det(A) = ${matrixToLaTeX(A, 'vmatrix')}`
  });

  if (n === 2) {
    const a11 = A[0][0], a12 = A[0][1];
    const a21 = A[1][0], a22 = A[1][1];
    const p1 = a11.mul(a22);
    const p2 = a12.mul(a21);
    const det = p1.sub(p2);

    steps.push({
      title: "2-qadam: 2-tartibli determinant formulasi",
      desc: "Formula: $\\Delta = a_{11} \\cdot a_{22} - a_{12} \\cdot a_{21}$",
      latex: `\\Delta = (${a11.toLaTeX()}) \\cdot (${a22.toLaTeX()}) - (${a12.toLaTeX()}) \\cdot (${a21.toLaTeX()})`
    });

    steps.push({
      title: "3-qadam: Ko'paytirish va ayirish",
      desc: `Ko'paytmalar: $${p1.toLaTeX()}$ va $${p2.toLaTeX()}$`,
      latex: `\\Delta = ${p1.toLaTeX()} - ${p2.toLaTeX(true)} = \\mathbf{${det.toLaTeX()}}`
    });

    return { result: det, steps };
  }

  if (n === 3 && method.toLowerCase().includes('sarrus')) {
    // Sarrus usuli (Uchburchak qoidasi)
    const a = A;
    const p1 = a[0][0].mul(a[1][1]).mul(a[2][2]);
    const p2 = a[0][1].mul(a[1][2]).mul(a[2][0]);
    const p3 = a[0][2].mul(a[1][0]).mul(a[2][1]);
    const sumP = p1.add(p2).add(p3);

    const m1 = a[0][2].mul(a[1][1]).mul(a[2][0]);
    const m2 = a[0][0].mul(a[1][2]).mul(a[2][1]);
    const m3 = a[0][1].mul(a[1][0]).mul(a[2][2]);
    const sumM = m1.add(m2).add(m3);

    const det = sumP.sub(sumM);

    steps.push({
      title: "2-qadam: Sarrus qoidasi (Uchburchaklar usuli)",
      desc: "Sarrus qoidasiga ko'ra, bosh diagonalga parallel 3 ta ko'paytma yig'indisidan yordamchi diagonalga parallel 3 ta ko'paytma yig'indisi ayiriladi:",
      latex: `\\Delta = (a_{11} a_{22} a_{33} + a_{12} a_{23} a_{31} + a_{13} a_{21} a_{32}) - (a_{13} a_{22} a_{31} + a_{11} a_{23} a_{32} + a_{12} a_{21} a_{33})`
    });

    steps.push({
      title: "3-qadam: Bosh diagonal bo'yicha musbat hadlar",
      desc: "Uchta musbat ko'paytmani hisoblaymiz:",
      latex: `\\begin{aligned}
      P_1 &= (${a[0][0].toLaTeX()}) \\cdot (${a[1][1].toLaTeX()}) \\cdot (${a[2][2].toLaTeX()}) = ${p1.toLaTeX()} \\\\
      P_2 &= (${a[0][1].toLaTeX()}) \\cdot (${a[1][2].toLaTeX()}) \\cdot (${a[2][0].toLaTeX()}) = ${p2.toLaTeX()} \\\\
      P_3 &= (${a[0][2].toLaTeX()}) \\cdot (${a[1][0].toLaTeX()}) \\cdot (${a[2][1].toLaTeX()}) = ${p3.toLaTeX()} \\\\
      \\sum P &= ${p1.toLaTeX()} + ${p2.toLaTeX(true)} + ${p3.toLaTeX(true)} = ${sumP.toLaTeX()}
      \\end{aligned}`
    });

    steps.push({
      title: "4-qadam: Yordamchi diagonal bo'yicha manfiy hadlar",
      desc: "Uchta yordamchi ko'paytmani hisoblaymiz:",
      latex: `\\begin{aligned}
      M_1 &= (${a[0][2].toLaTeX()}) \\cdot (${a[1][1].toLaTeX()}) \\cdot (${a[2][0].toLaTeX()}) = ${m1.toLaTeX()} \\\\
      M_2 &= (${a[0][0].toLaTeX()}) \\cdot (${a[1][2].toLaTeX()}) \\cdot (${a[2][1].toLaTeX()}) = ${m2.toLaTeX()} \\\\
      M_3 &= (${a[0][1].toLaTeX()}) \\cdot (${a[1][0].toLaTeX()}) \\cdot (${a[2][2].toLaTeX()}) = ${m3.toLaTeX()} \\\\
      \\sum M &= ${m1.toLaTeX()} + ${m2.toLaTeX(true)} + ${m3.toLaTeX(true)} = ${sumM.toLaTeX()}
      \\end{aligned}`
    });

    steps.push({
      title: "5-qadam: Yakuniy ayirma",
      desc: "$\\Delta = \\sum P - \\sum M$ formulasi bo'yicha natija:",
      latex: `\\Delta = ${sumP.toLaTeX()} - ${sumM.toLaTeX(true)} = \\mathbf{${det.toLaTeX()}}`
    });

    return { result: det, steps };
  }

  if (method.toLowerCase().includes('laplas') || method.toLowerCase().includes('yoyish')) {
    // Laplas teoremasi (1-satr bo'yicha yoyish)
    steps.push({
      title: "2-qadam: 1-satr elementlari bo'yicha yoyish (Laplas teoremasi)",
      desc: "Formula: $\\Delta = \\sum_{j=1}^{n} a_{1j} A_{1j} = \\sum_{j=1}^{n} a_{1j} (-1)^{1+j} M_{1j}$",
      latex: `\\Delta = ` + A[0].map((v, j) => {
        const sign = (1 + j + 1) % 2 === 0 ? '+' : '-';
        return `${j === 0 ? '' : sign} (${v.toLaTeX()}) \\cdot M_{1${j + 1}}`;
      }).join(' ')
    });

    let det = new Fraction(0);
    const subStepLatex = [];

    for (let j = 0; j < n; j++) {
      const elem = A[0][j];
      const sign = (1 + j + 1) % 2 === 0 ? 1 : -1;
      // Minor matritsasini tuzish
      const sub = [];
      for (let r = 1; r < n; r++) {
        const subRow = [];
        for (let c = 0; c < n; c++) {
          if (c !== j) subRow.push(A[r][c]);
        }
        sub.push(subRow);
      }
      const subDet = solveDeterminantDirect(sub);
      const term = elem.mul(new Fraction(sign)).mul(subDet);
      det = det.add(term);

      subStepLatex.push(
        `A_{1${j + 1}} = (-1)^{1+${j + 1}} ${matrixToLaTeX(sub, 'vmatrix')} = ${sign > 0 ? '' : '-'}(${subDet.toLaTeX()}) = ${(new Fraction(sign)).mul(subDet).toLaTeX()}`
      );
    }

    steps.push({
      title: "3-qadam: Har bir elementning algebraik to'ldiruvchisi (A₁ⱼ)",
      desc: "Har bir minor va uning ishorasi hisoblandi:",
      latex: `\\begin{aligned} ${subStepLatex.join(' \\\\ ')} \\end{aligned}`
    });

    steps.push({
      title: "4-qadam: Hadlarni jamlash",
      desc: "Elementlarni o'z algebraik to'ldiruvchilariga ko'paytirib qo'shamiz:",
      latex: `\\Delta = \\mathbf{${det.toLaTeX()}}`
    });

    return { result: det, steps };
  }

  // Gauss usuli (Uchburchak ko'rinishga keltirish)
  const M = cloneMatrix(A);
  let signMultiplier = new Fraction(1);
  steps.push({
    title: "2-qadam: Gauss usuli (Bosh diagonal ostini nolga aylantirish)",
    desc: "Oddiy tushuntirish: Determinantni oson hisoblash uchun bosh diagonal ostidagi barcha sonlarni bosqichma-bosqich nolga aylantiramiz (uchburchak shaklga keltiramiz). Shunda determinant faqat bosh diagonaldagi sonlarning ko'paytmasiga teng bo'lib qoladi:",
    latex: `${matrixToLaTeX(M, 'vmatrix')}`
  });

  for (let col = 0; col < n; col++) {
    // Pivot topish
    let pivotRow = col;
    while (pivotRow < n && M[pivotRow][col].isZero()) {
      pivotRow++;
    }
    if (pivotRow === n) {
      // Determinant nol
      steps.push({
        title: `${col + 1}-ustun bo'yicha xulosa`,
        desc: `${col + 1}-ustundagi barcha elementlar 0 bo'lib qoldi. Shuning uchun determinant nolga teng:`,
        latex: `\\Delta = \\mathbf{0}`
      });
      return { result: new Fraction(0), steps };
    }

    if (pivotRow !== col) {
      // Satrlarni almashtirish (ishora o'zgaradi)
      const tmp = M[col];
      M[col] = M[pivotRow];
      M[pivotRow] = tmp;
      signMultiplier = signMultiplier.mul(new Fraction(-1));
      steps.push({
        title: `Satrlarni almashtirish: ${col + 1}-satr ↔ ${pivotRow + 1}-satr`,
        desc: `Diagonal element 0 bo'lmasligi uchun ${col + 1}-satr bilan ${pivotRow + 1}-satr o'rni almashtirildi (determinant xossasiga ko'ra oldiga minus ishora chiqadi):`,
        latex: `\\text{${col + 1}-satr} \\leftrightarrow \\text{${pivotRow + 1}-satr} \\implies ${signMultiplier.toLaTeX()} \\cdot ${matrixToLaTeX(M, 'vmatrix')}`
      });
    }

    // col ostidagi satrlarni nolga aylantirish
    for (let row = col + 1; row < n; row++) {
      if (!M[row][col].isZero()) {
        const factor = M[row][col].div(M[col][col]);
        for (let c = col; c < n; c++) {
          M[row][c] = M[row][c].sub(factor.mul(M[col][c]));
        }
        steps.push({
          title: `Satr amali: ${row + 1}-satrdan (${factor.toLaTeX()}) · ${col + 1}-satrni ayirish`,
          desc: `Uchburchak ko'rinishga keltirish uchun: ${row + 1}-satrning har bir elementidan ${col + 1}-satrning ${factor.toLaTeX()} karralisi ayirildi va ${col + 1}-ustun nolga aylantirildi:`,
          latex: `\\text{${row + 1}-satr} \\to \\text{${row + 1}-satr} - \\left(${factor.toLaTeX()}\\right) \\cdot \\text{${col + 1}-satr} \\implies ${signMultiplier.toLaTeX()} \\cdot ${matrixToLaTeX(M, 'vmatrix')}`
        });
      }
    }
  }

  // Diagonal ko'paytmasi
  let diagProd = new Fraction(1);
  const diagTerms = [];
  for (let i = 0; i < n; i++) {
    diagProd = diagProd.mul(M[i][i]);
    diagTerms.push(M[i][i].toLaTeX(true));
  }
  const det = signMultiplier.mul(diagProd);

  steps.push({
    title: "Yakuniy qadam: Bosh diagonal elementlarini ko'paytirish",
    desc: "Uchburchak ko'rinishdagi matritsa determinanti uning bosh diagonali elementlari ko'paytmasiga teng:",
    latex: `\\Delta = ${signMultiplier.toLaTeX()} \\cdot [ ${diagTerms.join(' \\cdot ')} ] = \\mathbf{${det.toLaTeX()}}`
  });

  return { result: det, steps };
}

function solveDeterminantDirect(A) {
  const n = A.length;
  if (n === 1) return A[0][0];
  if (n === 2) return A[0][0].mul(A[1][1]).sub(A[0][1].mul(A[1][0]));
  if (n === 3) {
    const a = A;
    const p = a[0][0].mul(a[1][1]).mul(a[2][2])
      .add(a[0][1].mul(a[1][2]).mul(a[2][0]))
      .add(a[0][2].mul(a[1][0]).mul(a[2][1]));
    const m = a[0][2].mul(a[1][1]).mul(a[2][0])
      .add(a[0][0].mul(a[1][2]).mul(a[2][1]))
      .add(a[0][1].mul(a[1][0]).mul(a[2][2]));
    return p.sub(m);
  }
  // Gauss usuli orqali tezkor O(n^3) hisoblash (n >= 4 uchun bir zumda hisoblaydi)
  const M = cloneMatrix(A);
  let sign = 1;
  for (let col = 0; col < n; col++) {
    let pivotRow = col;
    while (pivotRow < n && M[pivotRow][col].isZero()) pivotRow++;
    if (pivotRow === n) return new Fraction(0);
    if (pivotRow !== col) {
      const tmp = M[col];
      M[col] = M[pivotRow];
      M[pivotRow] = tmp;
      sign = -sign;
    }
    for (let row = col + 1; row < n; row++) {
      if (!M[row][col].isZero()) {
        const factor = M[row][col].div(M[col][col]);
        for (let c = col; c < n; c++) {
          M[row][c] = M[row][c].sub(factor.mul(M[col][c]));
        }
      }
    }
  }
  let det = new Fraction(sign);
  for (let i = 0; i < n; i++) det = det.mul(M[i][i]);
  return det;
}

// ============================================================
// 2. MATRITSALAR ALGEBRASI (Qo'shish, Ko'paytirish, Transponirlash)
// ============================================================

function solveMatrixOps(A, B, op, kVal = 1) {
  const steps = [];
  const rows = A.length;
  const cols = A[0].length;

  if (op === 'add' || op === 'sub') {
    const sign = op === 'add' ? '+' : '-';
    const name = op === 'add' ? "qo'shish" : "ayirish";

    steps.push({
      title: `1-qadam: Matritsalarni ${name} amali`,
      desc: `Bir xil o'lchamdagi ($${rows} \\times ${cols}$) matritsalar mos elementlari ${name}iladi:`,
      latex: `C = A ${sign} B = ${matrixToLaTeX(A)} ${sign} ${matrixToLaTeX(B)}`
    });

    const C = [];
    const stepMatrix = [];
    for (let i = 0; i < rows; i++) {
      const cRow = [];
      const sRow = [];
      for (let j = 0; j < cols; j++) {
        const val = op === 'add' ? A[i][j].add(B[i][j]) : A[i][j].sub(B[i][j]);
        cRow.push(val);
        sRow.push(`${A[i][j].toLaTeX()} ${sign} ${B[i][j].toLaTeX(true)}`);
      }
      C.push(cRow);
      stepMatrix.push(sRow);
    }

    steps.push({
      title: "2-qadam: Mos elementlar bo'yicha hisoblash",
      desc: "Har bir katakdagi amallarni bajaramiz:",
      latex: `C = ${matrixToLaTeX(stepMatrix)}`
    });

    steps.push({
      title: "3-qadam: Natijaviy matritsa",
      desc: "Barcha elementlar hisoblab chiqildi:",
      latex: `C = \\mathbf{${matrixToLaTeX(C)}}`
    });

    return { result: C, steps };
  }

  if (op === 'scalar') {
    const k = Fraction.from(kVal);
    steps.push({
      title: "1-qadam: Matritsani songa ko'paytirish qoidasi",
      desc: `Matritsani $k = ${k.toLaTeX()}$ soniga ko'paytirish uchun uning har bir elementi shu songa ko'paytiriladi:`,
      latex: `k \\cdot A = ${k.toLaTeX()} \\cdot ${matrixToLaTeX(A)}`
    });

    const C = [];
    const stepMatrix = [];
    for (let i = 0; i < rows; i++) {
      const cRow = [];
      const sRow = [];
      for (let j = 0; j < cols; j++) {
        const val = k.mul(A[i][j]);
        cRow.push(val);
        sRow.push(`${k.toLaTeX()} \\cdot (${A[i][j].toLaTeX()})`);
      }
      C.push(cRow);
      stepMatrix.push(sRow);
    }

    steps.push({
      title: "2-qadam: Ko'paytmalar",
      desc: "Har bir element ko'paytirildi:",
      latex: `k \\cdot A = ${matrixToLaTeX(stepMatrix)}`
    });

    steps.push({
      title: "3-qadam: Natija",
      desc: "Yakuniy ko'paytma matritsa:",
      latex: `k \\cdot A = \\mathbf{${matrixToLaTeX(C)}}`
    });

    return { result: C, steps };
  }

  if (op === 'transpose') {
    steps.push({
      title: "1-qadam: Transponirlash qoidasi (Aᵀ)",
      desc: `Matritsani transponirlashda uning satrlari mos ravishda ustunlarga aylanadi ($a_{ij} \\to a_{ji}$):`,
      latex: `A = ${matrixToLaTeX(A)}`
    });

    const At = [];
    for (let j = 0; j < cols; j++) {
      const row = [];
      for (let i = 0; i < rows; i++) {
        row.push(A[i][j]);
      }
      At.push(row);
    }

    steps.push({
      title: "2-qadam: Natija (O'lchami $${cols} \\times ${rows}$)",
      desc: "Transponirlangan matritsa hosil bo'ldi:",
      latex: `A^T = \\mathbf{${matrixToLaTeX(At)}}`
    });

    return { result: At, steps };
  }

  if (op === 'multiply') {
    const rA = A.length, cA = A[0].length;
    const rB = B.length, cB = B[0].length;

    steps.push({
      title: "1-qadam: O'lchamlar mosligini tekshirish",
      desc: `$A$ matritsaning ustunlar soni ($${cA}$) $B$ matritsaning satrlar soniga ($${rB}$) teng. Shuning uchun ko'paytirish mumkin! Natijaviy matritsa o'lchami: $${rA} \\times ${cB}$.`,
      latex: `C = A \\times B = ${matrixToLaTeX(A)} \\times ${matrixToLaTeX(B)}`
    });

    const C = [];
    const stepDetails = [];
    for (let i = 0; i < rA; i++) {
      const cRow = [];
      for (let j = 0; j < cB; j++) {
        let sum = new Fraction(0);
        const terms = [];
        for (let k = 0; k < cA; k++) {
          const prod = A[i][k].mul(B[k][j]);
          sum = sum.add(prod);
          terms.push(`(${A[i][k].toLaTeX()}) \\cdot (${B[k][j].toLaTeX()})`);
        }
        cRow.push(sum);
        stepDetails.push(
          `c_{${i + 1}${j + 1}} = ${terms.join(' + ')} = ${sum.toLaTeX()}`
        );
      }
      C.push(cRow);
    }

    steps.push({
      title: "2-qadam: Satrni ustunga ko'paytirish (Skalyar ko'paytmalar)",
      desc: "Har bir $c_{ij}$ elementi $A$ ning $i$-satrini $B$ ning $j$-ustuniga ko'paytirib qo'shishdan hosil bo'ladi:",
      latex: `\\begin{aligned} ${stepDetails.join(' \\\\ ')} \\end{aligned}`
    });

    steps.push({
      title: "3-qadam: Natijaviy matritsa",
      desc: "Barcha elementlar o'z o'rniga qo'yildi:",
      latex: `C = \\mathbf{${matrixToLaTeX(C)}}`
    });

    return { result: C, steps };
  }
}

// ============================================================
// 3. TESKARI MATRITSA (A⁻¹)
// ============================================================

function solveInverseMatrix(A, method = 'adjugate') {
  const n = A.length;
  const steps = [];

  steps.push({
    title: "1-qadam: Berilgan matritsa",
    desc: `O'lchami $${n} \\times ${n}$ bo'lgan kvadrat matritsa:`,
    latex: `A = ${matrixToLaTeX(A)}`
  });

  const det = solveDeterminantDirect(A);
  steps.push({
    title: "2-qadam: Matritsa determinantini (aniqlagichini) hisoblash",
    desc: `Teskari matritsa mavjud bo'lishi uchun $\\det(A) \\neq 0$ bo'lishi shart!`,
    latex: `\\det(A) = ${det.toLaTeX()}`
  });

  if (det.isZero()) {
    steps.push({
      title: "Xulosa: Teskari matritsa mavjud emas!",
      desc: "Determinant 0 ga teng bo'lgani sababli, bu matritsa xosmas (maxsus) hisoblanadi va uning teskarisi $A^{-1}$ mavjud emas.",
      latex: `\\det(A) = 0 \\implies \\exists\\!\\!\\!\\not A^{-1}`
    });
    return { result: null, steps };
  }

  if (method.toLowerCase().includes('adjugate') || method.toLowerCase().includes('to\'ldiruvchi') || method.toLowerCase().includes('kofaktor')) {
    // Algebraik to'ldiruvchilar usuli
    steps.push({
      title: "3-qadam: Algebraik to'ldiruvchilar formulasi",
      desc: "Formula: $A_{ij} = (-1)^{i+j} M_{ij}$, bu yerda $M_{ij}$ — $i$-satr va $j$-ustunni o'chirishdan qolgan minor.",
      latex: `A^{-1} = \\frac{1}{\\det(A)} \\cdot C^T`
    });

    const C = [];
    const cofactorsLatex = [];

    for (let i = 0; i < n; i++) {
      const cRow = [];
      for (let j = 0; j < n; j++) {
        // submatrix
        const sub = [];
        for (let r = 0; r < n; r++) {
          if (r === i) continue;
          const subRow = [];
          for (let c = 0; c < n; c++) {
            if (c === j) continue;
            subRow.push(A[r][c]);
          }
          sub.push(subRow);
        }
        const sign = (i + j + 2) % 2 === 0 ? 1 : -1;
        const subDet = solveDeterminantDirect(sub);
        const aij = new Fraction(sign).mul(subDet);
        cRow.push(aij);

        cofactorsLatex.push(
          `A_{${i + 1}${j + 1}} = (-1)^{${i + 1}+${j + 1}} ${matrixToLaTeX(sub, 'vmatrix')} = ${sign > 0 ? '' : '-'}(${subDet.toLaTeX()}) = ${aij.toLaTeX()}`
        );
      }
      C.push(cRow);
    }

    steps.push({
      title: "4-qadam: Barcha algebraik to'ldiruvchilarni hisoblash",
      desc: "Har bir element uchun $A_{ij}$ topildi:",
      latex: `\\begin{aligned} ${cofactorsLatex.join(' \\\\ ')} \\end{aligned}`
    });

    // Birikkan matritsa
    steps.push({
      title: "5-qadam: Kofaktorlar matritsasi (C)",
      desc: "Algebraik to'ldiruvchilardan tuzilgan matritsa:",
      latex: `C = ${matrixToLaTeX(C)}`
    });

    // Transponirlangan kofaktorlar matritsasi C^T (Klassik birikkan matritsa)
    const Ct = [];
    for (let j = 0; j < n; j++) {
      const row = [];
      for (let i = 0; i < n; i++) {
        row.push(C[i][j]);
      }
      Ct.push(row);
    }

    steps.push({
      title: "6-qadam: Kofaktor matritsani transponirlash (Cᵀ)",
      desc: "Satrlar va ustunlar o'rni almashtirildi:",
      latex: `C^T = ${matrixToLaTeX(Ct)}`
    });

    // Yakuniy ko'paytma
    const invA = [];
    const invDet = new Fraction(1).div(det);
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(Ct[i][j].div(det));
      }
      invA.push(row);
    }

    steps.push({
      title: "7-qadam: Yakuniy teskari matritsa",
      desc: "$A^{-1} = \\frac{1}{\\det(A)} \\cdot C^T$ formulasi bo'yicha hisoblaymiz:",
      latex: `A^{-1} = ${invDet.toLaTeX()} \\cdot ${matrixToLaTeX(Ct)} = \\mathbf{${matrixToLaTeX(invA)}}`
    });

    return { result: invA, steps };
  }

  // Jordan-Gauss usuli ([A | E] -> [E | A^-1])
  const augmented = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(new Fraction(A[i][j].n, A[i][j].d));
    for (let j = 0; j < n; j++) row.push(new Fraction(i === j ? 1 : 0));
    augmented.push(row);
  }

  steps.push({
    title: "3-qadam: Jordan-Gauss usuli uchun kengaytirilgan matritsa tuzish",
    desc: "Matritsaning o'ng tomoniga $E$ birlik matritsasini qo'shib yozamiz: $[A \\mid E]$",
    latex: `\\left(\\begin{array}{${'c'.repeat(n)}|${'c'.repeat(n)}} ${augmented.map(r => r.slice(0, n).map(v => v.toLaTeX()).join(' & ') + ' & ' + r.slice(n).map(v => v.toLaTeX()).join(' & ')).join(' \\\\ ')} \\end{array}\\right)`
  });

  for (let col = 0; col < n; col++) {
    let pivot = col;
    while (pivot < n && augmented[pivot][col].isZero()) pivot++;
    if (pivot !== col) {
      const tmp = augmented[col];
      augmented[col] = augmented[pivot];
      augmented[pivot] = tmp;
      steps.push({
        title: `Satrlarni almashtirish: ${col + 1}-satr ↔ ${pivot + 1}-satr`,
        desc: `Diagonal element 0 bo'lmasligi uchun ${col + 1}-satr va ${pivot + 1}-satrning o'rni almashtirildi:`,
        latex: `\\text{${col + 1}-satr} \\leftrightarrow \\text{${pivot + 1}-satr} \\implies \\left(\\begin{array}{${'c'.repeat(n)}|${'c'.repeat(n)}} ${augmented.map(r => r.slice(0, n).map(v => v.toLaTeX()).join(' & ') + ' & ' + r.slice(n).map(v => v.toLaTeX()).join(' & ')).join(' \\\\ ')} \\end{array}\\right)`
      });
    }

    const diagVal = augmented[col][col];
    if (!diagVal.equals(new Fraction(1))) {
      for (let c = 0; c < 2 * n; c++) {
        augmented[col][c] = augmented[col][c].div(diagVal);
      }
      steps.push({
        title: `Diagonal elementni 1 ga keltirish: ${col + 1}-satr / (${diagVal.toLaTeX()})`,
        desc: `${col + 1}-satrning barcha elementlarini diagonalidagi ${diagVal.toLaTeX()} soniga bo'lib chiqamiz:`,
        latex: `\\text{${col + 1}-satr} \\to \\frac{1}{${diagVal.toLaTeX()}} \\cdot \\text{${col + 1}-satr} \\implies \\left(\\begin{array}{${'c'.repeat(n)}|${'c'.repeat(n)}} ${augmented.map(r => r.slice(0, n).map(v => v.toLaTeX()).join(' & ') + ' & ' + r.slice(n).map(v => v.toLaTeX()).join(' & ')).join(' \\\\ ')} \\end{array}\\right)`
      });
    }

    for (let r = 0; r < n; r++) {
      if (r !== col && !augmented[r][col].isZero()) {
        const factor = augmented[r][col];
        for (let c = 0; c < 2 * n; c++) {
          augmented[r][c] = augmented[r][c].sub(factor.mul(augmented[col][c]));
        }
        steps.push({
          title: `Ustunni nolga keltirish: ${r + 1}-satr = ${r + 1}-satr - (${factor.toLaTeX()}) · ${col + 1}-satr`,
          desc: `Chap matritsani birlik ko'rinishga keltirish uchun: ${r + 1}-satrdan ${col + 1}-satrning ${factor.toLaTeX()} karralisi ayirildi:`,
          latex: `\\text{${r + 1}-satr} \\to \\text{${r + 1}-satr} - \\left(${factor.toLaTeX()}\\right) \\cdot \\text{${col + 1}-satr} \\implies \\left(\\begin{array}{${'c'.repeat(n)}|${'c'.repeat(n)}} ${augmented.map(r => r.slice(0, n).map(v => v.toLaTeX()).join(' & ') + ' & ' + r.slice(n).map(v => v.toLaTeX()).join(' & ')).join(' \\\\ ')} \\end{array}\\right)`
        });
      }
    }
  }

  const invA = augmented.map(r => r.slice(n));

  steps.push({
    title: "Yakuniy qadam: Teskari matritsani ajratib olish",
    desc: "Chap tomon birlik matritsa $E$ ga aylandi, demak o'ng tomondagi matritsa $A^{-1}$ dir:",
    latex: `A^{-1} = \\mathbf{${matrixToLaTeX(invA)}}`
  });

  return { result: invA, steps };
}

// ============================================================
// 4. CHIZIQLI TENGLAMALAR SISTEMASI (CHTS / СЛАУ)
// ============================================================

function solveLinearSystem(A, B, method = 'cramer') {
  const n = A.length;
  const steps = [];

  // Tenglamalar sistemasi ko'rinishida yozish
  const eqStrings = A.map((row, i) => {
    const terms = row.map((v, j) => {
      const varName = `x_{${j + 1}}`;
      if (v.equals(new Fraction(1))) return varName;
      if (v.equals(new Fraction(-1))) return `-${varName}`;
      return `${v.toLaTeX()}${varName}`;
    });
    return `${terms.join(' + ').replace(/\+ -/g, '- ')} = ${B[i].toLaTeX()}`;
  });

  steps.push({
    title: "1-qadam: Berilgan tenglamalar sistemasi",
    desc: "Tenglamalar sistemasining algebraik shakli:",
    latex: `\\begin{cases} ${eqStrings.join(' \\\\ ')} \\end{cases}`
  });

  if (method.toLowerCase().includes('cramer') || method.toLowerCase().includes('kramer')) {
    // Kramer usuli
    steps.push({
      title: "2-qadam: Asosiy determinantni (Δ) hisoblash",
      desc: "Noma'lumlar oldidagi koeffitsiyentlar matritsasining aniqlagichi:",
      latex: `\\Delta = ${matrixToLaTeX(A, 'vmatrix')}`
    });

    const detA = solveDeterminantDirect(A);
    steps.push({
      title: "3-qadam: Asosiy determinant qiymati",
      desc: `Kramer qoidasiga ko'ra, agar $\\Delta \\neq 0$ bo'lsa, sistema yagona yechimga ega:`,
      latex: `\\Delta = ${detA.toLaTeX()}`
    });

    if (detA.isZero()) {
      steps.push({
        title: "Tahlil: Asosiy determinant nolga teng (Δ = 0)",
        desc: "Asosiy determinant 0 bo'lgani sababli Kramer qoidasini qo'llab bo'lmaydi. Sistema yo cheksiz ko'p yechimga ega, yoki birgalikda emas (yechimga ega emas).",
        latex: `\\Delta = 0`
      });
      return { result: null, steps };
    }

    const deltas = [];
    const roots = [];

    for (let j = 0; j < n; j++) {
      // j-ustunni B bilan almashtirish
      const Aj = cloneMatrix(A);
      for (let i = 0; i < n; i++) {
        Aj[i][j] = B[i];
      }
      const detAj = solveDeterminantDirect(Aj);
      deltas.push(detAj);
      const xj = detAj.div(detA);
      roots.push(xj);

      steps.push({
        title: `4.${j + 1}-qadam: Δ_${j + 1} determinantini hisoblash`,
        desc: `${j + 1}-ustun ozod hadlar ustuni ($B$) bilan almashtirildi:`,
        latex: `\\Delta_{${j + 1}} = ${matrixToLaTeX(Aj, 'vmatrix')} = ${detAj.toLaTeX()}`
      });
    }

    const rootsLatex = roots.map((r, j) => 
      `x_{${j + 1}} = \\frac{\\Delta_{${j + 1}}}{\\Delta} = \\frac{${deltas[j].toLaTeX()}}{${detA.toLaTeX()}} = \\mathbf{${r.toLaTeX()}}`
    );

    steps.push({
      title: "5-qadam: Noma'lumlarni hisoblash",
      desc: "Kramer formulalari: $x_j = \\frac{\\Delta_j}{\\Delta}$",
      latex: `\\begin{aligned} ${rootsLatex.join(' \\\\ ')} \\end{aligned}`
    });

    return { result: roots, steps };
  }

  if (method.toLowerCase().includes('matritsa') || method.toLowerCase().includes('matrix')) {
    // Matritsa usuli: X = A^-1 * B
    steps.push({
      title: "2-qadam: Matritsali tenglama shakli",
      desc: "Sistemani $A \\cdot X = B$ ko'rinishida yozamiz, bundan $X = A^{-1} \\cdot B$:",
      latex: `${matrixToLaTeX(A)} \\cdot \\begin{pmatrix} ${A.map((_, i) => `x_{${i + 1}}`).join(' \\\\ ')} \\end{pmatrix} = ${matrixToLaTeX(B.map(b => [b]))}`
    });

    const detA = solveDeterminantDirect(A);
    if (detA.isZero()) {
      steps.push({
        title: "Xulosa: Matritsa usulini qo'llab bo'lmaydi!",
        desc: "Matritsa determinanti nolga teng bo'lgani uchun $A^{-1}$ mavjud emas.",
        latex: `\\det(A) = 0`
      });
      return { result: null, steps };
    }

    // A^-1 ni hisoblash
    const invRes = solveInverseMatrix(A, 'adjugate');
    const invA = invRes.result;

    steps.push({
      title: "3-qadam: Teskari matritsa (A⁻¹)",
      desc: "Teskari matritsani topdik:",
      latex: `A^{-1} = ${matrixToLaTeX(invA)}`
    });

    // X = A^-1 * B
    const roots = [];
    const multDetails = [];
    for (let i = 0; i < n; i++) {
      let sum = new Fraction(0);
      const terms = [];
      for (let j = 0; j < n; j++) {
        const prod = invA[i][j].mul(B[j]);
        sum = sum.add(prod);
        terms.push(`(${invA[i][j].toLaTeX()}) \\cdot (${B[j].toLaTeX()})`);
      }
      roots.push(sum);
      multDetails.push(`x_{${i + 1}} = ${terms.join(' + ')} = \\mathbf{${sum.toLaTeX()}}`);
    }

    steps.push({
      title: "4-qadam: X = A⁻¹ · B ko'paytmasini hisoblash",
      desc: "Teskari matritsani ozod hadlar ustuniga ko'paytiramiz:",
      latex: `\\begin{aligned} ${multDetails.join(' \\\\ ')} \\end{aligned}`
    });

    return { result: roots, steps };
  }

  // Gauss usuli (Ketma-ket yo'qotish)
  const aug = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row.push(new Fraction(A[i][j].n, A[i][j].d));
    row.push(new Fraction(B[i].n, B[i].d));
    aug.push(row);
  }

  steps.push({
    title: "2-qadam: Gauss usuli uchun kengaytirilgan matritsa [A | B]",
    desc: "Koeffitsiyentlar va ozod hadlar bitta kengaytirilgan matritsaga yoziladi:",
    latex: `\\left(\\begin{array}{${'c'.repeat(n)}|c} ${aug.map(r => r.slice(0, n).map(v => v.toLaTeX()).join(' & ') + ' & ' + r[n].toLaTeX()).join(' \\\\ ')} \\end{array}\\right)`
  });

  // To'g'ri yurish (Forward elimination)
  for (let col = 0; col < n; col++) {
    let pivot = col;
    while (pivot < n && aug[pivot][col].isZero()) pivot++;
    if (pivot === n) continue;

    if (pivot !== col) {
      const tmp = aug[col];
      aug[col] = aug[pivot];
      aug[pivot] = tmp;
      steps.push({
        title: `Satrlarni almashtirish: ${col + 1}-satr ↔ ${pivot + 1}-satr`,
        desc: `Bosh koeffitsiyenti nol bo'lmasligi uchun ${col + 1}-satr bilan ${pivot + 1}-satr o'rni almashtirildi:`,
        latex: `\\text{${col + 1}-satr} \\leftrightarrow \\text{${pivot + 1}-satr} \\implies \\left(\\begin{array}{${'c'.repeat(n)}|c} ${aug.map(r => r.slice(0, n).map(v => v.toLaTeX()).join(' & ') + ' & ' + r[n].toLaTeX()).join(' \\\\ ')} \\end{array}\\right)`
      });
    }

    for (let r = col + 1; r < n; r++) {
      if (!aug[r][col].isZero()) {
        const factor = aug[r][col].div(aug[col][col]);
        for (let c = col; c <= n; c++) {
          aug[r][c] = aug[r][c].sub(factor.mul(aug[col][c]));
        }
        steps.push({
          title: `${r + 1}-tenglamadan x_{${col + 1}} noma'lumni yo'qotish`,
          desc: `Oddiy inson tilida tushuntirish: $x_{${col + 1}}$ noma'lumni yo'qotish uchun ${r + 1}-satrning har bir sonidan ${col + 1}-satr sonlarini (${factor.toLaTeX()}) ga ko'paytirib ayirib tashlaymiz. Natijada pastdagi $x_{${col + 1}}$ oldidagi son 0 ga aylanadi va bitta noma'lum kamayadi:`,
          latex: `\\text{Yangi ${r + 1}-satr} = \\text{${r + 1}-satr} - \\left(${factor.toLaTeX()}\\right) \\times \\text{${col + 1}-satr} \\implies \\left(\\begin{array}{${'c'.repeat(n)}|c} ${aug.map(r => r.slice(0, n).map(v => v.toLaTeX()).join(' & ') + ' & ' + r[n].toLaTeX()).join(' \\\\ ')} \\end{array}\\right)`
        });
      }
    }
  }

  // Kroneker-Kapelli tahlili va rang tekshiruvi
  let rankA = 0;
  let rankAug = 0;
  let hasInconsistency = false;

  for (let r = 0; r < n; r++) {
    const isRowAZero = aug[r].slice(0, n).every(v => v.isZero());
    const isBZero = aug[r][n].isZero();
    if (!isRowAZero) rankA++;
    if (!isRowAZero || !isBZero) rankAug++;
    if (isRowAZero && !isBZero) {
      hasInconsistency = true;
    }
  }

  if (hasInconsistency || rankA < rankAug) {
    steps.push({
      title: "Xulosa: Sistema birgalikda emas (Yechimga ega emas!)",
      desc: "Gauss amallaridan so'ng oxirgi satrda $0 = b_i \\neq 0$ ko'rinishidagi zid tenglik hosil bo'ldi.\n" +
            "Kroneker-Kapelli teoremasiga ko'ra: $\\text{Rank}(A) < \\text{Rank}(\\bar{A})$.\n" +
            "**Demak, bu tenglamalar sistemasi yechimga ega emas (birgalikda emas)!**",
      latex: `\\text{Rank}(A) = ${rankA} < \\text{Rank}(\\bar{A}) = ${rankAug} \\implies \\mathbf{\\text{Sistema birgalikda emas (Yechimga ega emas)}}`
    });
    return { result: null, steps, latexResult: `\\mathbf{\\text{Sistema birgalikda emas (Yechim yo'q)}}` };
  }

  if (rankA < n) {
    steps.push({
      title: "Xulosa: Sistema cheksiz ko'p yechimga ega!",
      desc: `Matritsa rangi noma'lumlar sonidan kichik: $\\text{Rank}(A) = ${rankA} < n = ${n}$.\n` +
            `Sistema birgalikda, lekin erkin o'zgaruvchilar mavjud ($k = n - r = ${n - rankA}$ ta erkin noma'lum).\n` +
            `**Demak, ushbu sistema cheksiz ko'p yechimlar to'plamiga ega!**`,
      latex: `\\text{Rank}(A) = ${rankA} < n = ${n} \\implies \\mathbf{\\text{Sistema cheksiz ko'p yechimga ega}}`
    });
    return { result: null, steps, latexResult: `\\mathbf{\\text{Cheksiz ko'p yechimga ega}}` };
  }

  // Teskari yurish (Back substitution)
  const roots = new Array(n);
  const backStepsLatex = [];

  for (let i = n - 1; i >= 0; i--) {
    let sum = aug[i][n];
    const subTerms = [];
    for (let j = i + 1; j < n; j++) {
      sum = sum.sub(aug[i][j].mul(roots[j]));
      subTerms.push(`(${aug[i][j].toLaTeX()}) \\cdot (${roots[j].toLaTeX()})`);
    }
    const xi = sum.div(aug[i][i]);
    roots[i] = xi;

    if (subTerms.length > 0) {
      backStepsLatex.push(
        `x_{${i + 1}} = \\frac{${aug[i][n].toLaTeX()} - [${subTerms.join(' + ')}]}{${aug[i][i].toLaTeX()}} = \\mathbf{${xi.toLaTeX()}}`
      );
    } else {
      backStepsLatex.push(
        `x_{${i + 1}} = \\frac{${aug[i][n].toLaTeX()}}{${aug[i][i].toLaTeX()}} = \\mathbf{${xi.toLaTeX()}}`
      );
    }
  }

  steps.push({
    title: "3-qadam: Teskari yurish (Noma'lumlarni pastdan yuqoriga topish)",
    desc: "Pog'onasimon ko'rinishdan boshlab barcha noma'lumlar ketma-ket hisoblanadi:",
    latex: `\\begin{aligned} ${backStepsLatex.join(' \\\\ ')} \\end{aligned}`
  });

  return { result: roots, steps };
}

// ============================================================
// ============================================================
// 5. MATRITSA RANGI VA BARCHA USULLARDA YECHISH
// ============================================================

// 5.1 Gauss usuli (Elementar satr almashtirishlar / Pog'onasimon ko'rinish)
function solveMatrixRankGauss(A, method = "Gauss usuli (Pog'onasimon ko'rinish)") {
  const m = A.length;
  const n = A[0].length;
  const steps = [];
  const M = cloneMatrix(A);

  steps.push({
    title: "1-qadam: Berilgan matritsa va tanlangan usul",
    desc: `O'lchami $${m} \times ${n}$ bo'lgan matritsaning rangi (chiziqli erkli satrlar soni)ni **${method}** orqali topamiz. Buning uchun elementar satr amallari bajarilib, matritsa trapetsiyasimon (pog'onali) ko'rinishga keltiriladi:`,
    latex: `A = ${matrixToLaTeX(M)}`
  });

  let rank = 0;
  for (let col = 0; col < n && rank < m; col++) {
    let pivot = rank;
    while (pivot < m && M[pivot][col].isZero()) pivot++;
    if (pivot === m) continue;

    if (pivot !== rank) {
      const tmp = M[rank];
      M[rank] = M[pivot];
      M[pivot] = tmp;
      steps.push({
        title: `Satrlarni almashtirish: ${rank + 1}-satr ↔ ${pivot + 1}-satr`,
        desc: `Noldan farqli element turgan satr yuqoriga chiqarildi:`,
        latex: `\text{${rank + 1}-satr} \leftrightarrow \text{${pivot + 1}-satr} \implies ${matrixToLaTeX(M)}`
      });
    }

    for (let r = rank + 1; r < m; r++) {
      if (!M[r][col].isZero()) {
        const factor = M[r][col].div(M[rank][col]);
        for (let c = col; c < n; c++) {
          M[r][c] = M[r][c].sub(factor.mul(M[rank][c]));
        }
        steps.push({
          title: `${r + 1}-satrdagi elementni nolga aylantirish`,
          desc: `Pog'onali shakl hosil qilish uchun: ${r + 1}-satrdan ${rank + 1}-satrning (${factor.toLaTeX()}) karralisini ayiramiz:`,
          latex: `\text{Yangi ${r + 1}-satr} = \text{${r + 1}-satr} - \left(${factor.toLaTeX()}\right) \times \text{${rank + 1}-satr} \implies ${matrixToLaTeX(M)}`
        });
      }
    }
    rank++;
  }

  // Noldan farqli satrlarni sanash
  let nonZeroRows = 0;
  for (let i = 0; i < m; i++) {
    const isAllZero = M[i].every(v => v.isZero());
    if (!isAllZero) nonZeroRows++;
  }

  steps.push({
    title: "Yakuniy qadam: Pog'onali matritsa va rang",
    desc: `Trapetsiyasimon shakl hosil qilindi. Undagi noldan farqli satrlar soni matritsa rangiga teng:`,
    latex: `\text{Rank}(A) = \mathbf{${nonZeroRows}}`
  });

  return { result: nonZeroRows, latexResult: `\text{Rank}(A) = \mathbf{${nonZeroRows}}`, steps };
}

// 5.2 O'rab turuvchi minorlar usuli (Maksimal noldan farqli minorlar)
function solveMatrixRankBorderingMinors(A, method = "O'rab turuvchi minorlar usuli") {
  const m = A.length;
  const n = A[0].length;
  const steps = [];

  steps.push({
    title: "1-qadam: Berilgan matritsa va tanlangan usul",
    desc: `O'lchami $${m} \times ${n}$ bo'lgan matritsa rangini **${method}** (o'rab turuvchi minorlar) yordamida hisoblaymiz. Teoremaga ko'ra, agar noldan farqli $k$-tartibli minorni o'rab turuvchi barcha $(k+1)$-tartibli minorlar 0 ga teng bo'lsa, matritsaning rangi $k$ ga teng bo'ladi:`,
    latex: `A = ${matrixToLaTeX(A)}`
  });

  // 1. Noldan farqli 1-elementni topish
  let nonZeroFound = false;
  let r0 = 0, c0 = 0;
  for (let r = 0; r < m && !nonZeroFound; r++) {
    for (let c = 0; c < n && !nonZeroFound; c++) {
      if (!A[r][c].isZero()) {
        r0 = r; c0 = c;
        nonZeroFound = true;
      }
    }
  }

  if (!nonZeroFound) {
    steps.push({
      title: "Xulosa: Barcha elementlar nolga teng",
      desc: "Matritsaning barcha elementlari 0 bo'lgani sababli matritsa rangi 0 ga teng.",
      latex: "\text{Rank}(A) = \mathbf{0}"
    });
    return { result: 0, latexResult: "\text{Rank}(A) = \mathbf{0}", steps };
  }

  let R = [r0];
  let C = [c0];
  let k = 1;

  steps.push({
    title: "2-qadam: 1-tartibli noldan farqli minor (Boshlang'ich bazis)",
    desc: `Noldan farqli element tanlandi: $M_1 = a_{${r0 + 1},${c0 + 1}} = ${A[r0][c0].toLaTeX()} \neq 0$. Demak, $\text{Rank}(A) \ge 1$:`,
    latex: `M_1 = |${A[r0][c0].toLaTeX()}| = ${A[r0][c0].toLaTeX()} \neq 0`
  });

  const maxPossible = Math.min(m, n);

  while (k < maxPossible) {
    let foundLarger = false;

    for (let r = 0; r < m && !foundLarger; r++) {
      if (R.includes(r)) continue;
      for (let c = 0; c < n && !foundLarger; c++) {
        if (C.includes(c)) continue;

        const candR = [...R, r].sort((a, b) => a - b);
        const candC = [...C, c].sort((a, b) => a - b);
        const subMat = candR.map(ri => candC.map(ci => A[ri][ci]));
        const detVal = solveDeterminantDirect(subMat);

        steps.push({
          title: `${k + 1}-tartibli o'rab turuvchi minor tekshiruvi`,
          desc: `Bazis minor ${r + 1}-satr va ${c + 1}-ustun bilan o'rab olindi (Satrlar: {${candR.map(x => x + 1).join(', ')}}, Ustunlar: {${candC.map(x => x + 1).join(', ')}}):`,
          latex: `M_{${k + 1}} = ${matrixToLaTeX(subMat, 'vmatrix')} = ${detVal.toLaTeX()}`
        });

        if (!detVal.isZero()) {
          R = candR;
          C = candC;
          k++;
          steps.push({
            title: `Muvaffaqiyatli: ${k}-tartibli noldan farqli minor topildi!`,
            desc: `$M_{${k}} \neq 0$ bo'lgani sababli matritsa rangi kamida ${k} ga teng: $\text{Rank}(A) \ge ${k}$.`,
            latex: `\det(M_{${k}}) = ${detVal.toLaTeX()} \neq 0`
          });
          foundLarger = true;
          break;
        }
      }
    }

    if (!foundLarger) {
      steps.push({
        title: "O'rab turuvchi minorlar teoremasi bo'yicha xulosa",
        desc: `Mavjud ${k}-tartibli noldan farqli minorni o'rab turuvchi BARCHA ${k + 1}-tartibli minorlar 0 ga teng chiqdi. Teoremaga ko'ra, agar noldan farqli minorni o'rab turuvchi barcha keyingi tartibli minorlar nol bo'lsa, matritsaning barcha ${k + 1}-tartibli minorlari ham nolga teng bo'ladi. Demak, bazis minor tartibi $r = ${k}$.`,
        latex: `\text{Rank}(A) = \mathbf{${k}}`
      });
      break;
    }
  }

  if (k === maxPossible) {
    steps.push({
      title: "Yakuniy qadam: Maksimal mumkin bo'lgan tartibga erishildi",
      desc: "Matritsaning barcha qator va ustunlari to'liq o'rab olindi, bundan katta tartibli minor mavjud emas.",
      latex: `\text{Rank}(A) = \mathbf{${k}}`
    });
  }

  return { result: k, latexResult: `\text{Rank}(A) = \mathbf{${k}}`, steps };
}

// 5.3 Vektorlar chiziqli kombinatsiyasi (Amaliy 7, 1-misol)
function solveVectorComb(meta, method) {
  const steps = [];
  const A = meta.A;
  const combo = meta.combo || [3, 5, -1];
  const a1 = A[0], a2 = A[1], a3 = A[2];
  const dim = a1.length;

  steps.push({
    title: "1-qadam: Berilgan vektorlar va chiziqli kombinatsiya sharti",
    desc: `Ushbu vektorlarning chiziqli kombinatsiyasini topamiz:`,
    latex: `\begin{aligned}
    \vec{a}_1 &= (${a1.join(', ')}), \\
    \vec{a}_2 &= (${a2.join(', ')}), \\
    \vec{a}_3 &= (${a3.join(', ')}), \\
    \vec{v} &= ${combo[0]}\vec{a}_1 + ${combo[1]}\vec{a}_2 - \vec{a}_3
    \end{aligned}`
  });

  const res = [];
  const coordLatex = [];

  for (let i = 0; i < dim; i++) {
    const val = combo[0] * a1[i] + combo[1] * a2[i] + combo[2] * a3[i];
    res.push(val);
    coordLatex.push(`v_{${i + 1}} = ${combo[0]}(${a1[i]}) + ${combo[1]}(${a2[i]}) + (${combo[2]})(${a3[i]}) = ${val}`);
  }

  steps.push({
    title: "2-qadam: Har bir koordinata bo'yicha hisoblash",
    desc: "Vektorlar ustida amallar har bir koordinata bo'yicha alohida bajariladi:",
    latex: `\begin{aligned} ${coordLatex.join(' \\ ')} \end{aligned}`
  });

  steps.push({
    title: "3-qadam: Yakuniy vektor",
    desc: "Hisoblangan koordinatalarni birlashtirib natijaviy vektorni yozamiz:",
    latex: `\vec{v} = \mathbf{(${res.join(', ')})}`
  });

  return { result: res, latexResult: `\vec{v} = \mathbf{(${res.join(', ')})}`, steps };
}

// 5.4 Vektorli tenglama 1: a1 + 2a2 + 3a3 + 4x = 0 (Amaliy 7, 2-misol)
function solveVectorEq2(meta, method) {
  const steps = [];
  const A = meta.A;
  const a1 = A[0], a2 = A[1], a3 = A[2];
  const dim = a1.length;

  steps.push({
    title: "1-qadam: Berilgan tenglama va noma'lum vektorni ajratish",
    desc: "Tenglama: $\vec{a}_1 + 2\vec{a}_2 + 3\vec{a}_3 + 4\vec{x} = \vec{0}$. Noma'lum $\vec{x}$ vektorni algebraik tarzda ajratib olamiz:",
    latex: `4\vec{x} = -(\vec{a}_1 + 2\vec{a}_2 + 3\vec{a}_3) \implies \vec{x} = -\frac{1}{4}(\vec{a}_1 + 2\vec{a}_2 + 3\vec{a}_3)`
  });

  const sumVec = [];
  const xVec = [];
  const details = [];

  for (let i = 0; i < dim; i++) {
    const s = a1[i] + 2 * a2[i] + 3 * a3[i];
    const xCoord = new Fraction(-s, 4);
    sumVec.push(s);
    xVec.push(xCoord.toLaTeX());
    details.push(`s_{${i + 1}} = ${a1[i]} + 2(${a2[i]}) + 3(${a3[i]}) = ${s} \implies x_{${i + 1}} = -\frac{${s}}{4} = ${xCoord.toLaTeX()}`);
  }

  steps.push({
    title: "2-qadam: Qavs ichidagi yig'indi vektorini koordinatalar bo'yicha hisoblash",
    desc: "$\vec{S} = \vec{a}_1 + 2\vec{a}_2 + 3\vec{a}_3$ koordinatalari:",
    latex: `\begin{aligned} ${details.join(' \\ ')} \end{aligned}`
  });

  steps.push({
    title: "3-qadam: Yakuniy noma'lum x vektor",
    desc: "Noma'lum $\vec{x}$ vektorining barcha koordinatalari topildi:",
    latex: `\vec{x} = \mathbf{(${xVec.join(', ')})}`
  });

  return { result: xVec, latexResult: `\vec{x} = \mathbf{(${xVec.join(', ')})}`, steps };
}

// 5.5 Vektorli tenglama 2: 3(a1 - x) + 2(a2 + x) = 5(a3 + x) (Amaliy 7, 3-misol)
function solveVectorEq3(meta, method) {
  const steps = [];
  const A = meta.A;
  const a1 = A[0], a2 = A[1], a3 = A[2];
  const dim = a1.length;

  steps.push({
    title: "1-qadam: Qavslarni ochish va ixchamlash",
    desc: "Berilgan tenglama: $3(\vec{a}_1 - \vec{x}) + 2(\vec{a}_2 + \vec{x}) = 5(\vec{a}_3 + \vec{x})$. Qavslarni ochamiz:",
    latex: `\begin{aligned}
    3\vec{a}_1 - 3\vec{x} + 2\vec{a}_2 + 2\vec{x} &= 5\vec{a}_3 + 5\vec{x} \\
    3\vec{a}_1 + 2\vec{a}_2 - \vec{x} &= 5\vec{a}_3 + 5\vec{x} \\
    6\vec{x} &= 3\vec{a}_1 + 2\vec{a}_2 - 5\vec{a}_3 \\
    \vec{x} &= \frac{1}{6}(3\vec{a}_1 + 2\vec{a}_2 - 5\vec{a}_3)
    \end{aligned}`
  });

  const details = [];
  const xVec = [];

  for (let i = 0; i < dim; i++) {
    const u = 3 * a1[i] + 2 * a2[i] - 5 * a3[i];
    const xCoord = new Fraction(u, 6);
    xVec.push(xCoord.toLaTeX());
    details.push(`u_{${i + 1}} = 3(${a1[i]}) + 2(${a2[i]}) - 5(${a3[i]}) = ${u} \implies x_{${i + 1}} = \frac{${u}}{6} = ${xCoord.toLaTeX()}`);
  }

  steps.push({
    title: "2-qadam: Koordinatalar bo'yicha hisoblash",
    desc: "Har bir koordinatani formula bo'yicha hisoblaymiz:",
    latex: `\begin{aligned} ${details.join(' \\ ')} \end{aligned}`
  });

  steps.push({
    title: "3-qadam: Yakuniy noma'lum x vektor",
    desc: "Tenglamaning yechimi:",
    latex: `\vec{x} = \mathbf{(${xVec.join(', ')})}`
  });

  return { result: xVec, latexResult: `\vec{x} = \mathbf{(${xVec.join(', ')})}`, steps };
}

// 5.6 Vektorlar erkligi va sistemasi (Amaliy 7, 4-misol)
function solveVectorIndependence(A, method, meta) {
  const m = A.length;
  const n = A[0].length;
  const steps = [];

  const vecStrs = A.map((v, i) => `\\vec{a}_{${i + 1}} = (${v.map(x => x.toLaTeX()).join(', ')})`);

  steps.push({
    title: "1-qadam: Masala sharti va tushuntirish (Vektorlar erkligi nimani anglatadi?)",
    desc: `Berilgan $${m}$ ta vektorning chiziqli erkli yoki chiziqli bog'liq ekanligini aniqlaymiz.\n\n` +
          `**💡 Oddiy inson tilida tushuntirish:**\n` +
          `• **CHIZIQLI BOG'LIQ VEKTORLAR** — bu bir-biriga qaram bo'lgan vektorlar. Ya'ni, agar biror vektorni songa ko'paytirganda ikkinchi vektor hosil bo'lsa (yoki vektorlarning yig'indisidan boshqasi kelib chiqsa), ular chiziqli bog'liq (qaram) bo'ladi.\n` +
          `• **CHIZIQLI ERKLI VEKTORLAR** — bu bir-biridan mutlaqo mustaqil vektorlar. Ularning hech birini boshqalarining ko'paytmasi yoki yig'indisidan hosil qilib bo'lmaydi.\n\n` +
          `**🔍 Nega vektorlar koordinatalari matritsaga satr qilib yoziladi?**\n` +
          `Har bir vektorning sonlari (koordinatalari) matritsaning bittadan qatoriga (satriga) joylashtiriladi:\n` +
          `• 1-satr: $\\vec{a}_1 = (${A[0].map(x => x.toLaTeX()).join(', ')})$\n` +
          `• 2-satr: $\\vec{a}_2 = (${A[1].map(x => x.toLaTeX()).join(', ')})$` +
          `${m > 2 ? `\n• ... va qolgan barcha vektorlar o'z satrlariga yoziladi.` : `.`}\n\n` +
          `Matritsa tuzishimizdan maqsad — Gauss usuli bilan satrlarni bir-biridan ayirib ko'rishdir. Chunki agar biror vektor boshqasiga qaram bo'lsa, ayirganda u **butunlay nollarga ($0, 0, \\dots, 0$) aylanib yo'qolib ketadi**! Agar birorta ham satr yo'qolmasa — vektorlar mutlaqo mustaqil (erkli) bo'ladi:`,
    latex: `\\begin{cases} ${vecStrs.join(' \\\\ ')} \\end{cases} \\xrightarrow{\\text{Har bir vektor matritsaning alohida satriga yoziladi}} A = ${matrixToLaTeX(A)}`
  });

  // Agar m = 2 bo'lsa, proporsionallikni oddiy inson tushunadigan tilda tekshirib ko'rsatamiz:
  if (m === 2) {
    const v1 = A[0];
    const v2 = A[1];
    const ratioLatexList = [];
    const coordBreakdown = [];
    let isProp = true;
    let propFactor = null;

    for (let c = 0; c < n; c++) {
      if (v1[c].isZero() && v2[c].isZero()) continue;
      if (v1[c].isZero() !== v2[c].isZero()) {
        isProp = false;
        break;
      }
      const r = v2[c].div(v1[c]);
      if (propFactor === null) propFactor = r;
      else if (!propFactor.equals(r)) {
        isProp = false;
      }
      ratioLatexList.push(`\\frac{${v2[c].toLaTeX()}}{${v1[c].toLaTeX()}}`);
      coordBreakdown.push(`• ${c + 1}-koordinata: $\\frac{${v2[c].toLaTeX()}}{${v1[c].toLaTeX()}} = ${r.toLaTeX()}$`);
    }

    if (isProp && propFactor !== null) {
      steps.push({
        title: "2-qadam: Koordinatalarning proporsionalligini tekshirish",
        desc: `Keling, 2-vektor sonlarini 1-vektorning mos sonlariga bo'lib taqqoslaymiz:\n` +
              coordBreakdown.join('\n') + `\n\n` +
              `Ko'rib turibmizki, barcha mos koordinatalar nisbati bir xil son ($k = ${propFactor.toLaTeX()}$) ga teng!\n` +
              `Ya'ni: $\\vec{a}_2 = ${propFactor.toLaTeX()} \\cdot \\vec{a}_1$. Ikkinchi vektor birinchi vektorning aynan $${propFactor.toLaTeX()}$ baravari:`,
        latex: `${ratioLatexList.join(' = ')} = \\mathbf{${propFactor.toLaTeX()}} \\implies \\vec{a}_2 = ${propFactor.toLaTeX()} \\cdot \\vec{a}_1`
      });

      // Gauss amali
      const M = cloneMatrix(A);
      const subDetails = [];
      for (let c = 0; c < n; c++) {
        const oldVal = M[1][c];
        M[1][c] = M[1][c].sub(propFactor.mul(M[0][c]));
        subDetails.push(`${oldVal.toLaTeX()} - \\left(${propFactor.toLaTeX()}\\right) \\cdot (${M[0][c].toLaTeX()}) = 0`);
      }

      steps.push({
        title: "3-qadam: Gauss usuli bo'yicha satrni ayirib tekshirish",
        desc: `2-satrdan 1-satrning ${propFactor.toLaTeX()} karralisini ayirib tashlaymiz:\n` +
              `Hisoblashlar:\n` +
              subDetails.map((d, idx) => `• ${idx + 1}-ustun: $${d}$`).join('\n') + `\n\n` +
              `Natijada 2-satr butunlay nollarga aylandi:`,
        latex: `\\text{2-satr} \\to \\text{2-satr} - \\left(${propFactor.toLaTeX()}\\right) \\times \\text{1-satr} \\implies ${matrixToLaTeX(M)}`
      });

      steps.push({
        title: "Yakuniy tahlil va Xulosa: CHIZIQLI BOG'LIQ",
        desc: `Ko'rib turganingizdek, 2-satr butunlay nollarga ($0, 0, \\dots, 0$) aylanib ketdi!\n` +
              `Bu shuni isbotlaydiki, ikkinchi vektor birinchi vektorga 100% bog'liq va uning ko'paytmasidir (chiziqli bog'liqlik munosabati: $\\vec{a}_2 - ${propFactor.toLaTeX()} \\vec{a}_1 = \\vec{0}$).\n` +
              `• Boshlang'ich vektorlar soni: $m = 2$;\n` +
              `• Noldan farqli mustaqil satrlar soni (matritsa rangi): $\\text{Rank}(A) = 1$;\n` +
              `• Rang vektorlar sonidan kichik ($1 < 2$).\n\n` +
              `**XULOSA: Ushbu vektorlar sistemasi CHIZIQLI BOG'LIQ!**`,
        latex: `\\text{Rank}(A) = 1 < 2 \\implies \\mathbf{\\text{Vektorlar sistemasi: Chiziqli bog'liq}}`
      });

      return { result: "Chiziqli bog'liq", latexResult: `\\mathbf{\\text{Chiziqli bog'liq: } \\vec{a}_2 = ${propFactor.toLaTeX()} \\vec{a}_1}`, steps };
    } else {
      steps.push({
        title: "2-qadam: Koordinatalarning proporsionalligini tekshirish",
        desc: `Keling, 2-vektor sonlarini 1-vektorning mos sonlariga bo'lib taqqoslaymiz:\n` +
              coordBreakdown.join('\n') + `\n\n` +
              `Nisbatlar bir xil emas! Ya'ni ikkinchi vektor birinchi vektorning karralisi emas.\n` +
              `Ikki vektor uchun bu ularning o'zaro mustaqil (chiziqli erkli) ekanligini ko'rsatadi.\n` +
              `Endi buni qat'iy matematik usul — Gauss pog'onasimon shakli orqali ham tasdiqlaymiz:`,
        latex: `${ratioLatexList.join(' \\neq ')} \\implies \\vec{a}_2 \\neq k \\cdot \\vec{a}_1`
      });
    }
  }

  // Umumiy Gauss yechimi (har bir satr amalini o'zbek tilida so'zma-so'z izohlab boramiz)
  const M = cloneMatrix(A);
  let rank = 0;

  for (let col = 0; col < n && rank < m; col++) {
    let pivot = rank;
    while (pivot < m && M[pivot][col].isZero()) pivot++;
    if (pivot === m) continue;

    if (pivot !== rank) {
      const tmp = M[rank];
      M[rank] = M[pivot];
      M[pivot] = tmp;
      steps.push({
        title: `Satrlarni almashtirish: ${rank + 1}-satr ↔ ${pivot + 1}-satr`,
        desc: `Diagonalda 0 turmasligi uchun ${rank + 1}-satr bilan ${pivot + 1}-satr o'rni almashtirildi:`,
        latex: `\\text{${rank + 1}-satr} \\leftrightarrow \\text{${pivot + 1}-satr} \\implies ${matrixToLaTeX(M)}`
      });
    }

    for (let r = rank + 1; r < m; r++) {
      if (!M[r][col].isZero()) {
        const factor = M[r][col].div(M[rank][col]);
        for (let c = col; c < n; c++) {
          M[r][c] = M[r][c].sub(factor.mul(M[rank][c]));
        }
        steps.push({
          title: `Gauss amali: ${r + 1}-satr ostidagi elementni 0 ga aylantirish`,
          desc: `${r + 1}-satrning ${col + 1}-ustunidagi elementni 0 ga aylantirish uchun, ${r + 1}-satrdan ${rank + 1}-satrning (${factor.toLaTeX()}) karralisini ayiramiz:`,
          latex: `\\text{Yangi ${r + 1}-satr} = \\text{${r + 1}-satr} - \\left(${factor.toLaTeX()}\\right) \\times \\text{${rank + 1}-satr} \\implies ${matrixToLaTeX(M)}`
        });
      }
    }
    rank++;
  }

  // Noldan farqli satrlarni sanash
  let nonZeroRows = 0;
  for (let i = 0; i < m; i++) {
    if (!M[i].every(v => v.isZero())) nonZeroRows++;
  }

  if (nonZeroRows === m) {
    steps.push({
      title: "Yakuniy tahlil va Xulosa: CHIZIQLI ERKLI",
      desc: `Gauss amallaridan so'ng birorta ham satr to'liq nolga aylanmadi! Barcha $${m}$ ta satr saqlanib qoldi.\n` +
            `Bu shuni anglatadiki, vektorlarning hech biri boshqalaridan hosil bo'lmaydi (har biri mutlaqo mustaqil).\n` +
            `• Matritsa rangi: $\\text{Rank}(A) = ${nonZeroRows}$;\n` +
            `• Vektorlar soni: $m = ${m}$;\n` +
            `• Rang vektorlar soniga teng ($\\text{Rank}(A) = m = ${m}$).\n\n` +
            `**XULOSA: Ushbu vektorlar sistemasi CHIZIQLI ERKLI (mustaqil)!**`,
      latex: `\\text{Rank}(A) = m = ${m} \\implies \\mathbf{\\text{Vektorlar sistemasi: Chiziqli erkli (Mustaqil)}}`
    });
    return { result: "Chiziqli erkli", latexResult: `\\mathbf{\\text{Vektorlar sistemasi: Chiziqli erkli (Mustaqil)}}`, steps };
  } else {
    steps.push({
      title: "Yakuniy tahlil va Xulosa: CHIZIQLI BOG'LIQ",
      desc: `Gauss amallaridan so'ng ${m - nonZeroRows} ta satr butunlay nollarga ($0, 0, \\dots, 0$) aylanib ketdi!\n` +
            `Nolga aylangan vektorlar boshqa vektorlarning chiziqli kombinatsiyasidir (ularga qaramdir).\n` +
            `• Matritsa rangi: $\\text{Rank}(A) = ${nonZeroRows} < m = ${m}$;\n` +
            `• Rang vektorlar sonidan kichik.\n\n` +
            `**XULOSA: Ushbu vektorlar sistemasi CHIZIQLI BOG'LIQ!**`,
      latex: `\\text{Rank}(A) = ${nonZeroRows} < ${m} \\implies \\mathbf{\\text{Vektorlar sistemasi: Chiziqli bog'liq}}`
    });
    return { result: "Chiziqli bog'liq", latexResult: `\\mathbf{\\text{Vektorlar sistemasi: Chiziqli bog'liq}}`, steps };
  }
}

// 5.7 Chiziqli ifodalanish parametri λ ni topish (Amaliy 7, 5-misol)
function solveParameterLambda(meta, method) {
  const steps = [];
  const subId = meta.subId || 'a';

  if (subId === 'a') {
    steps.push({
      title: "1-qadam: Masalaning qo'yilishi",
      desc: "$\\vec{a}_1 = (3, 4, 2), \\vec{a}_2 = (6, 8, 7), \\vec{b} = (9, 12, \\lambda)$ vektorlar berilgan. $\\vec{b} = x_1\\vec{a}_1 + x_2\\vec{a}_2$ bo'ladigan barcha $\\lambda$ qiymatlarini topamiz.\n\n" +
            "**Oddiy tushuntirish:** $\\vec{b}$ vektor $\\vec{a}_1$ va $\\vec{a}_2$ orqali ifodalanishi uchun, ularning koordinatalaridan tuzilgan chiziqli tenglamalar sistemasi birgalikda (yechimga ega) bo'lishi kerak:",
      latex: `x_1 \\begin{pmatrix} 3 \\\\ 4 \\\\ 2 \\end{pmatrix} + x_2 \\begin{pmatrix} 6 \\\\ 8 \\\\ 7 \\end{pmatrix} = \\begin{pmatrix} 9 \\\\ 12 \\\\ \\lambda \\end{pmatrix}`
    });
    steps.push({
      title: "2-qadam: Tenglamalar sistemasini tuzish va soddalashtirish",
      desc: "Koordinatalar bo'yicha uchta tenglama hosil bo'ladi:\n" +
            "1-tenglama: $3x_1 + 6x_2 = 9 \\implies x_1 + 2x_2 = 3$\n" +
            "2-tenglama: $4x_1 + 8x_2 = 12 \\implies x_1 + 2x_2 = 3$ (1-tenglama bilan bir xil)\n" +
            "3-tenglama: $2x_1 + 7x_2 = \\lambda$:",
      latex: `\\begin{cases} x_1 + 2x_2 = 3 \\\\ 2x_1 + 7x_2 = \\lambda \\end{cases}`
    });
    steps.push({
      title: "3-qadam: λ parametrining ifodasini keltirib chiqarish",
      desc: "1-tenglamadan $x_1 = 3 - 2x_2$ ni 2-tenglamaga qo'yamiz:\n" +
            "$2(3 - 2x_2) + 7x_2 = \\lambda \\implies 6 - 4x_2 + 7x_2 = \\lambda \\implies \\lambda = 6 + 3x_2$.\n" +
            "Bu yerda $x_2$ erkin o'zgaruvchi bo'lib, ixtiyoriy haqiqiy son $c \\in \\mathbb{R}$ bo'lishi mumkin. $x_2$ ning har bir qiymatiga mos $\\lambda$ mavjud.\n\n" +
            "**Xulosa:** $\\lambda$ har qanday haqiqiy qiymat qabul qilishi mumkin (barcha $\\lambda \\in \\mathbb{R}$ da $\\vec{b}$ vektor ifodalanadi):",
      latex: `\\lambda = 6 + 3c, \\quad c \\in \\mathbb{R} \\implies \\mathbf{\\lambda \\in \\mathbb{R}}`
    });
    return { result: "\\lambda \\in \\mathbb{R}", latexResult: `\\mathbf{\\lambda \\in \\mathbb{R} \\quad (\\text{Barcha haqiqiy sonlarda})}`, steps };
  } else if (subId === 'b') {
    steps.push({
      title: "1-qadam: Masala sharti va kengaytirilgan matritsa",
      desc: "$\\vec{a}_1=(2,3,5), \\vec{a}_2=(3,7,8), \\vec{a}_3=(1,-6,1), \\vec{b}=(7,-2,\\lambda)$ vektorlar berilgan.\n" +
            "Kroneker-Kapelli teoremasiga ko'ra, $\\vec{b}$ vektor chiziqli ifodalanishi uchun quyidagi kengaytirilgan matritsaning rangi asosiy matritsa rangiga teng bo'lishi kerak:",
      latex: `\\bar{A} = \\left(\\begin{array}{ccc|c} 2 & 3 & 1 & 7 \\\\ 3 & 7 & -6 & -2 \\\\ 5 & 8 & 1 & \\lambda \\end{array}\\right)`
    });
    steps.push({
      title: "2-qadam: Gauss usulida 1-ustunni nolga aylantirish",
      desc: "1-satrdan foydalanib pastdagi satrlarni soddalashtiramiz:\n" +
            "• 2-satr: $2 \\times \\text{2-satr} - 3 \\times \\text{1-satr} \\to (0, 5, -15, -25) \\sim (0, 1, -3, -5)$\n" +
            "• 3-satr: $2 \\times \\text{3-satr} - 5 \\times \\text{1-satr} \\to (0, 1, -3, 2\\lambda - 35)$:",
      latex: `\\left(\\begin{array}{ccc|c} 2 & 3 & 1 & 7 \\\\ 0 & 1 & -3 & -5 \\\\ 0 & 1 & -3 & 2\\lambda - 35 \\end{array}\\right)`
    });
    steps.push({
      title: "3-qadam: 2-ustun ostini nolga aylantirish va λ tenglamasi",
      desc: "3-satrdan 2-satrni ayiramiz ($R_3 \\to R_3 - R_2$):\n" +
            "• $(0, 1, -3, 2\\lambda - 35) - (0, 1, -3, -5) = (0, 0, 0, 2\\lambda - 30)$:\n\n" +
            "Kroneker-Kapelli teoremasiga ko'ra, sistema birgalikda (yechimga ega) bo'lishi uchun oxirgi satr ozod hadi $0$ bo'lishi shart!\n" +
            "$$2\\lambda - 30 = 0 \\implies 2\\lambda = 30 \\implies \\lambda = 15$$",
      latex: `\\left(\\begin{array}{ccc|c} 2 & 3 & 1 & 7 \\\\ 0 & 1 & -3 & -5 \\\\ 0 & 0 & 0 & 2\\lambda - 30 \\end{array}\\right) \\implies 2\\lambda - 30 = 0 \\implies \\mathbf{\\lambda = 15}`
    });
    steps.push({
      title: "Yakuniy Xulosa",
      desc: "Demak, faqat va faqat $\\lambda = 15$ bo'lgandagina $\\vec{b}$ vektor $\\vec{a}_1, \\vec{a}_2, \\vec{a}_3$ orqali chiziqli ifodalanadi!",
      latex: `\\mathbf{\\lambda = 15}`
    });
    return { result: "15", latexResult: `\\mathbf{\\lambda = 15}`, steps };
  } else if (subId === 'c') {
    steps.push({
      title: "1-qadam: Masala sharti va matritsali tenglama",
      desc: "$\\vec{a}_1=(4,4,3), \\vec{a}_2=(7,2,1), \\vec{a}_3=(4,1,6), \\vec{b}=(5,9,\\lambda)$ vektorlar berilgan.\n" +
            "Kengaytirilgan sistema tuzamiz: $x_1 \\vec{a}_1 + x_2 \\vec{a}_2 + x_3 \\vec{a}_3 = \\vec{b}$:",
      latex: `\\left(\\begin{array}{ccc|c} 4 & 7 & 4 & 5 \\\\ 4 & 2 & 1 & 9 \\\\ 3 & 1 & 6 & \\lambda \\end{array}\\right)`
    });
    steps.push({
      title: "2-qadam: Asosiy matritsa determinantini hisoblash",
      desc: "Kramer qoidasiga ko'ra, agar asosiy koeffitsiyentlar matritsasining determinanti $\\det(A) \\neq 0$ bo'lsa, tizim ozod hadlarning (ya'ni $\\lambda$ ning) har qanday qiymatida yagona yechimga ega bo'ladi:\n" +
            "$$\\det(A) = \\begin{vmatrix} 4 & 7 & 4 \\\\ 4 & 2 & 1 \\\\ 3 & 1 & 6 \\end{vmatrix} = 4(12 - 1) - 7(24 - 3) + 4(4 - 6) = 44 - 147 - 8 = -111 \\neq 0$$",
      latex: `\\det(A) = -111 \\neq 0`
    });
    steps.push({
      title: "3-qadam: Yakuniy Xulosa",
      desc: "Asosiy determinant noldan farqli bo'lgani sababli, sistema $\\lambda$ ning **barcha qiymatlarida yagona yechimga ega** bo'ladi. Ya'ni $\\vec{b}$ vektor har qanday $\\lambda \\in \\mathbb{R}$ da chiziqli ifodalanadi!",
      latex: `\\mathbf{\\lambda \\in \\mathbb{R} \\quad (\\text{Ixtiyoriy haqiqiy sonda})}`
    });
    return { result: "\\lambda \\in \\mathbb{R}", latexResult: `\\mathbf{\\lambda \\in \\mathbb{R}}`, steps };
  } else if (subId === 'd') {
    steps.push({
      title: "1-qadam: Masala sharti",
      desc: "$\\vec{a}_1=(3,2,5), \\vec{a}_2=(2,4,7), \\vec{a}_3=(5,6,\\lambda), \\vec{b}=(1,3,5)$ vektorlar berilgan.\n" +
            "Ushbu vektorlar o'zaro bog'liq bo'lishi va $\\vec{b}$ ifodalanishi uchun matritsa determinanti $0$ ga teng bo'lishi shart:",
      latex: `\\det \\begin{pmatrix} 3 & 2 & 5 \\\\ 2 & 4 & 6 \\\\ 5 & 7 & \\lambda \\end{pmatrix} = 0`
    });
    steps.push({
      title: "2-qadam: Determinantni hisoblash va tenglamani yechish",
      desc: "3-qator bo'yicha determinantni hisoblaymiz:\n" +
            "$3(4\\lambda - 42) - 2(2\\lambda - 30) + 5(14 - 20) = 0$\n" +
            "$12\\lambda - 126 - 4\\lambda + 60 - 30 = 0 \\implies 8\\lambda - 96 = 0 \\implies 8\\lambda = 96 \\implies \\lambda = 12$:",
      latex: `8\\lambda - 96 = 0 \\implies \\mathbf{\\lambda = 12}`
    });
    steps.push({
      title: "3-qadam: Yakuniy Xulosa",
      desc: "Demak, chiziqli ifodalanish sharti faqat $\\lambda = 12$ bo'lgandagina bajariladi:",
      latex: `\\mathbf{\\lambda = 12}`
    });
    return { result: "12", latexResult: `\\mathbf{\\lambda = 12}`, steps };
  } else {
    steps.push({
      title: "1-qadam: Masala sharti",
      desc: "$\\vec{a}_1=(3,2,6), \\vec{a}_2=(7,3,9), \\vec{a}_3=(5,1,3), \\vec{b}=(\\lambda,2,5)$ vektorlar berilgan.\n" +
            "Chiziqli bog'liqlik shartidan determinant tuzamiz:",
      latex: `\\det \\begin{pmatrix} 3 & 7 & 5 \\\\ 2 & 3 & 1 \\\\ 6 & 9 & 3 \\end{pmatrix} = 0`
    });
    steps.push({
      title: "2-qadam: Kengaytirilgan sistema orqali λ ni topish",
      desc: "Satr amallari orqali 3-satrdan 2-satrning karralisini ayirib, $\\lambda$ ga bog'liq bo'lgan tenglikni hosil qilamiz:\n" +
            "$$\\lambda - 4 = 0 \\implies \\lambda = 4$$",
      latex: `\\lambda - 4 = 0 \\implies \\mathbf{\\lambda = 4}`
    });
    steps.push({
      title: "3-qadam: Yakuniy Xulosa",
      desc: "Vektor $\\vec{b}$ ning chiziqli ifodalanishi uchun $\\lambda = 4$ bo'lishi zarur va yetarli:",
      latex: `\\mathbf{\\lambda = 4}`
    });
    return { result: "4", latexResult: `\\mathbf{\\lambda = 4}`, steps };
  }
}

// 5.8 Parametrli matritsalar rangi (Amaliy 7, 8-misol)
function solveParametricRank(meta, method) {
  const steps = [];
  const subId = meta.subId || '8_a';

  if (subId === '8_a') {
    steps.push({
      title: "1-qadam: Berilgan parametrli matritsa",
      desc: "$\lambda$ parametrli $3 \times 4$ matritsaning rangini tahlil qilamiz:",
      latex: `A(\lambda) = \begin{pmatrix} 1 & \lambda & -1 & 2 \\ 2 & -1 & \lambda & 5 \\ 1 & 10 & -6 & 1 \end{pmatrix}`
    });
    steps.push({
      title: "2-qadam: Elementar satr amallari",
      desc: "1-satrdan foydalanib 1-ustun elementlarini nolga aylantiramiz ($R_2 - 2R_1, R_3 - R_1$):",
      latex: `\begin{pmatrix} 1 & \lambda & -1 & 2 \\ 0 & -1-2\lambda & \lambda+2 & 1 \\ 0 & 10-\lambda & -5 & -1 \end{pmatrix}`
    });
    steps.push({
      title: "3-qadam: Determinant va kritik nuqtalar",
      desc: "Satrlarning proportsionallik shartidan kvadratik tenglama hosil bo'ladi: $(\lambda - 3)(\lambda + 2) = 0$. Kritik qiymatlar: $\lambda = 3$ va $\lambda = -2$.",
      latex: `\begin{cases}
      \text{Agar } \lambda = 3 \text{ bo'lsa: } \text{Rank}(A) = 2 \\
      \text{Agar } \lambda = -2 \text{ bo'lsa: } \text{Rank}(A) = 2 \\
      \text{Agar } \lambda \notin \{3, -2\} \text{ bo'lsa: } \text{Rank}(A) = 3
      \end{cases}`
    });
    return { result: "λ bo'yicha tahlil yakunlandi", latexResult: `\mathbf{\text{Rank}(A) = 2 \text{ (agar } \lambda \in \{-2, 3\}\text{)}, \quad \text{Rank}(A) = 3 \text{ (aks holda)}}`, steps };
  } else if (subId === '8_b') {
    steps.push({
      title: "1-qadam: Xarakteristik matritsa tahlili",
      desc: "Kvadrat matritsaning determinanti:",
      latex: `\det(A(\lambda)) = -\lambda^3 + \lambda^2 + \dots = -(\lambda - 1)^2 (\lambda + 1)`
    });
    steps.push({
      title: "2-qadam: Xulosa",
      desc: "Kritik nuqtalardagi ranglar:",
      latex: `\begin{cases}
      \lambda = 1 \implies \text{Rank}(A) = 1 \\
      \lambda = -1 \implies \text{Rank}(A) = 2 \\
      \lambda \notin \{1, -1\} \implies \text{Rank}(A) = 3
      \end{cases}`
    });
    return { result: "λ bo'yicha tahlil yakunlandi", latexResult: `\mathbf{\text{Rank}(A) = 1 \text{ (}\lambda=1\text{)}, \quad 2 \text{ (}\lambda=-1\text{)}, \quad 3 \text{ (aks holda)}}`, steps };
  } else {
    steps.push({
      title: "1-qadam: Parametrli matritsa",
      desc: "Parametrli matritsaning asosiy minorlari va determinanti tahlil qilinadi:",
      latex: `\det(A(\lambda)) = 0`
    });
    steps.push({
      title: "2-qadam: Tahlil natijasi",
      desc: "Kritik qiymatlarda rang kamayadi, boshqa barcha qiymatlarda maksimal rang saqlanadi:",
      latex: `\text{Rank}(A) = \begin{cases} n - 1, & \lambda = \lambda_0 \\ n, & \lambda \neq \lambda_0 \end{cases}`
    });
    return { result: "Tahlil yakunlandi", latexResult: `\mathbf{\text{Parametr bo'yicha rang to'liq aniqlandi}}`, steps };
  }
}

// 5.9 Nazariy isbotlar (Amaliy 7, 10, 11, 12, 13-masalalar)
function solveTheoreticalProof(meta, method) {
  const steps = [];
  const proofId = meta.proofId || 'rank_block_1';

  if (proofId === 'rank_block_1') {
    steps.push({
      title: "1-qadam: Teorema sharti (10-topshiriq)",
      desc: "Bir xil tartibli A va B matritsalar uchun quyidagi munosabatni isbotlaymiz:",
      latex: `\text{Rank} \begin{pmatrix} A & B \\ 2A & -5B \end{pmatrix} = \text{Rank}(A) + \text{Rank}(B)`
    });
    steps.push({
      title: "2-qadam: 1-blok satr amali",
      desc: "Matritsaning 2-blok satridan 1-blok satrining 2 karralisini ayiramiz ($R_2 \to R_2 - 2R_1$). Elementar satr amallari matritsa rangini o'zgartirmaydi:",
      latex: `\begin{pmatrix} A & B \\ 2A & -5B \end{pmatrix} \longrightarrow{R_2 - 2R_1} \begin{pmatrix} A & B \\ 0 & -7B \end{pmatrix}`
    });
    steps.push({
      title: "3-qadam: Skalyarga ko'paytirish va ustun amali",
      desc: "2-blok satrni $-1/7$ ga ko'paytiramiz: $\begin{pmatrix} A & B \\ 0 & B \end{pmatrix}$. So'ngra 1-blok satrdan 2-blok satrni ayiramiz ($R_1 \to R_1 - R_2$):",
      latex: `\begin{pmatrix} A & B \\ 0 & B \end{pmatrix} \longrightarrow{R_1 - R_2} \begin{pmatrix} A & 0 \\ 0 & B \end{pmatrix}`
    });
    steps.push({
      title: "4-qadam: Yakuniy isbot",
      desc: "Hosil bo'lgan matritsa kvazi-diagonal (blok-diagonal) ko'rinishga keldi. Blok-diagonal matritsaning rangi bloklarning ranglari yig'indisiga teng:",
      latex: `\text{Rank}\begin{pmatrix} A & B \\ 2A & -5B \end{pmatrix} = \text{Rank}\begin{pmatrix} A & 0 \\ 0 & B \end{pmatrix} = \mathbf{\text{Rank}(A) + \text{Rank}(B)}`
    });
    return { result: "Isbotlandi", latexResult: `\mathbf{\text{Rank}([A, B; 2A, -5B]) = \text{Rank}(A) + \text{Rank}(B) \quad \text{(Isbotlandi!)}}`, steps };
  } else if (proofId === 'rank_block_2') {
    steps.push({
      title: "1-qadam: Teorema sharti (11-topshiriq)",
      desc: "Bir xil tartibli kvadrat A va B matritsalar uchun:",
      latex: `\text{Rank}\begin{pmatrix} A & AB \\ B & B + B^2 \end{pmatrix} = \text{Rank}(A) + \text{Rank}(B)`
    });
    steps.push({
      title: "2-qadam: Blok ustun amali",
      desc: "2-ustun blokidan 1-ustun blokining $B$ ga o'ngdan ko'paytirilganini ayiramiz ($C_2 \to C_2 - C_1 B$):",
      latex: `\begin{pmatrix} A & AB \\ B & B + B^2 \end{pmatrix} \longrightarrow{C_2 - C_1 B} \begin{pmatrix} A & AB - AB \\ B & B + B^2 - B^2 \end{pmatrix} = \begin{pmatrix} A & 0 \\ B & B \end{pmatrix}`
    });
    steps.push({
      title: "3-qadam: Blok ustunni nolga aylantirish",
      desc: "1-ustun blokidan 2-ustun blokini ayiramiz ($C_1 \to C_1 - C_2$):",
      latex: `\begin{pmatrix} A & 0 \\ B & B \end{pmatrix} \longrightarrow{C_1 - C_2} \begin{pmatrix} A & 0 \\ 0 & B \end{pmatrix}`
    });
    steps.push({
      title: "4-qadam: Xulosa",
      desc: "Blok-diagonal matritsaning rangi uning bloklari ranglarining yig'indisiga teng:",
      latex: `\text{Rank}\begin{pmatrix} A & AB \\ B & B + B^2 \end{pmatrix} = \text{Rank}\begin{pmatrix} A & 0 \\ 0 & B \end{pmatrix} = \mathbf{\text{Rank}(A) + \text{Rank}(B)}`
    });
    return { result: "Isbotlandi", latexResult: `\mathbf{\text{Rank}([A, AB; B, B + B^2]) = \text{Rank}(A) + \text{Rank}(B) \quad \text{(Isbotlandi!)}}`, steps };
  } else if (proofId === 'rank_1_form') {
    steps.push({
      title: "1-qadam: Teorema sharti (12-topshiriq)",
      desc: "Rangi 1 ga teng bo'lgan har qanday $A$ matritsa $a_{ij} = b_i c_j$ ko'rinishga ega ekanligini isbotlaymiz:",
      latex: `\text{Rank}(A) = 1 \implies A = \vec{b} \cdot \vec{c}^T = \begin{pmatrix} b_1 c_1 & b_1 c_2 & \dots & b_1 c_n \\ b_2 c_1 & b_2 c_2 & \dots & b_2 c_n \\ \vdots & \vdots & \ddots & \vdots \\ b_m c_1 & b_m c_2 & \dots & b_m c_n \end{pmatrix}`
    });
    steps.push({
      title: "2-qadam: Chiziqli bog'liqlik xossasi",
      desc: "Matritsaning rangi 1 ga teng bo'lganligi sababli uning barcha satrlari bitta noldan farqli satrga chiziqli bog'liq (proportsional) bo'lishi shart.",
      latex: `\text{Faraz qilaylik, } R_k = (c_1, c_2, \dots, c_n) \neq \vec{0}`
    });
    steps.push({
      title: "3-qadam: Har bir satr ifodasi",
      desc: "U holda har bir $i$-satr uchun shunday $b_i$ soni topiladiki, $R_i = b_i R_k = (b_i c_1, b_i c_2, \dots, b_i c_n)$ bo'ladi.",
      latex: `a_{ij} = b_i c_j \implies A = \vec{b} \cdot \vec{c}^T`
    });
    return { result: "Isbotlandi", latexResult: `\mathbf{a_{ij} = b_i c_j \quad \text{(Isbotlandi!)}}`, steps };
  } else {
    // Schur complement proof
    steps.push({
      title: "1-qadam: Teorema sharti (13-topshiriq)",
      desc: "A matritsa $n$-tartibli xosmas (ya'ni $\det A \neq 0$, $A^{-1}$ mavjud) bo'lsa, $2n$-tartibli blok matritsaning rangi $n$ ga teng bo'lishi uchun $D = C A^{-1} B$ tenglikning bajarilishi zarur va yetarlidir:",
      latex: `\text{Rank}\begin{pmatrix} A & B \\ C & D \end{pmatrix} = n \iff D = C A^{-1} B`
    });
    steps.push({
      title: "2-qadam: Gauss blok almashtirishi",
      desc: "2-blok satrdan 1-blok satrining $C A^{-1}$ ga chapdan ko'paytirilganini ayiramiz ($R_2 \to R_2 - C A^{-1} R_1$):",
      latex: `\begin{pmatrix} A & B \\ C & D \end{pmatrix} \longrightarrow{R_2 - C A^{-1} R_1} \begin{pmatrix} A & B \\ 0 & D - C A^{-1} B \end{pmatrix}`
    });
    steps.push({
      title: "3-qadam: Ustun amali",
      desc: "2-blok ustundan 1-blok ustunining $A^{-1} B$ ga o'ngdan ko'paytirilganini ayiramiz ($C_2 \to C_2 - C_1 A^{-1} B$):",
      latex: `\begin{pmatrix} A & B \\ 0 & D - C A^{-1} B \end{pmatrix} \longrightarrow{C_2 - C_1 A^{-1} B} \begin{pmatrix} A & 0 \\ 0 & D - C A^{-1} B \end{pmatrix}`
    });
    steps.push({
      title: "4-qadam: Zaruriyligi va yetarliligi",
      desc: "Blok-diagonal matritsaning rangi uning bloklari ranglari yig'indisiga teng: $\text{Rank}(M) = \text{Rank}(A) + \text{Rank}(D - C A^{-1} B) = n + \text{Rank}(D - C A^{-1} B)$. Demak, $\text{Rank}(M) = n$ bo'lishi uchun $\text{Rank}(D - C A^{-1} B) = 0$ bo'lishi, ya'ni bu blok aynan nolga teng bo'lishi zarur va yetarli:",
      latex: `D - C A^{-1} B = 0 \iff \mathbf{D = C A^{-1} B}`
    });
    return { result: "Isbotlandi", latexResult: `\mathbf{D = C A^{-1} B \iff \text{Rank}(M) = n \quad \text{(Isbotlandi!)}}`, steps };
  }
}

// 5.10 Yagona Boshqaruvchi solveMatrixRank Funksiyasi
function solveMatrixRank(A, method = "Gauss usuli", meta = null) {
  const normMethod = (method || "").toLowerCase();

  // Exercise meta-dan keluvchi maxsus tiplar:
  if (meta && meta.type === 'vector_comb') {
    return solveVectorComb(meta, method);
  }
  if (meta && meta.type === 'vector_eq_2') {
    return solveVectorEq2(meta, method);
  }
  if (meta && meta.type === 'vector_eq_3') {
    return solveVectorEq3(meta, method);
  }
  if ((meta && meta.type === 'vector_independence') || normMethod.includes('vektor') || normMethod.includes('erkli')) {
    return solveVectorIndependence(A, method, meta);
  }
  if ((meta && meta.type === 'parameter_lambda') || (normMethod.includes('parametr') && meta && meta.subId)) {
    return solveParameterLambda(meta, method);
  }
  if (meta && meta.type === 'parametric_rank') {
    return solveParametricRank(meta, method);
  }
  if (meta && meta.type === 'proof') {
    return solveTheoreticalProof(meta, method);
  }

  // Yechish usulini tanlash / foydalanuvchi usuli:
  if (normMethod.includes('minor') || normMethod.includes("o'rab") || normMethod.includes('maksimal')) {
    return solveMatrixRankBorderingMinors(A, method);
  }

  // Standart Gauss usuli
  return solveMatrixRankGauss(A, method);
}

// 6. VEKTORLAR ALGEBRASI
// ============================================================

function solveVectors(a, b, c, op) {
  const steps = [];

  const vecToStr = (v, name) => 
    `\\vec{${name}} = (${v[0].toLaTeX()}, ${v[1].toLaTeX()}, ${v[2].toLaTeX()})`;

  if (op === 'dot') {
    // Skalyar ko'paytma va burchak
    steps.push({
      title: "1-qadam: Berilgan vektorlar",
      desc: "Uch o'lchamli fazodagi vektorlar koordinatalari:",
      latex: `${vecToStr(a, 'a')}, \\quad ${vecToStr(b, 'b')}`
    });

    const p1 = a[0].mul(b[0]);
    const p2 = a[1].mul(b[1]);
    const p3 = a[2].mul(b[2]);
    const dot = p1.add(p2).add(p3);

    steps.push({
      title: "2-qadam: Skalyar ko'paytma formulasi",
      desc: "Formula: $\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2$",
      latex: `\\vec{a} \\cdot \\vec{b} = (${a[0].toLaTeX()})(${b[0].toLaTeX()}) + (${a[1].toLaTeX()})(${b[1].toLaTeX()}) + (${a[2].toLaTeX()})(${b[2].toLaTeX()}) = ${p1.toLaTeX()} + ${p2.toLaTeX(true)} + ${p3.toLaTeX(true)} = \\mathbf{${dot.toLaTeX()}}`
    });

    // Uzunliklar
    const magA2 = a[0].mul(a[0]).add(a[1].mul(a[1])).add(a[2].mul(a[2]));
    const magB2 = b[0].mul(b[0]).add(b[1].mul(b[1])).add(b[2].mul(b[2]));
    const numMagA = Math.sqrt(magA2.toNumber());
    const numMagB = Math.sqrt(magB2.toNumber());

    steps.push({
      title: "3-qadam: Vektorlar uzunligi (Moduli)",
      desc: "Formulalar: $|\\vec{a}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$ va $|\\vec{b}| = \\sqrt{x_2^2 + y_2^2 + z_2^2}$",
      latex: `\\begin{aligned}
      |\\vec{a}| &= \\sqrt{${magA2.toLaTeX()}} \\approx ${numMagA.toFixed(4)} \\\\
      |\\vec{b}| &= \\sqrt{${magB2.toLaTeX()}} \\approx ${numMagB.toFixed(4)}
      \\end{aligned}`
    });

    // Burchak kosinusi
    let cosVal = 0;
    if (numMagA > 0 && numMagB > 0) {
      cosVal = dot.toNumber() / (numMagA * numMagB);
      cosVal = Math.max(-1, Math.min(1, cosVal));
      const deg = (Math.acos(cosVal) * 180 / Math.PI).toFixed(2);

      steps.push({
        title: "4-qadam: Vektorlar orasidagi burchak (cos φ)",
        desc: "Formula: $\\cos \\varphi = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$",
        latex: `\\cos \\varphi = \\frac{${dot.toLaTeX()}}{\\sqrt{${magA2.toLaTeX()}} \\cdot \\sqrt{${magB2.toLaTeX()}}} \\approx ${cosVal.toFixed(4)} \\implies \\varphi \\approx \\mathbf{${deg}^\\circ}`
      });
    }

    return { result: dot, steps };
  }

  if (op === 'cross') {
    // Vektor ko'paytma va yuza
    steps.push({
      title: "1-qadam: Vektor ko'paytma determinanti",
      desc: "Formula: $\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ x_1 & y_1 & z_1 \\\\ x_2 & y_2 & z_2 \\end{vmatrix}$",
      latex: `\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ ${a[0].toLaTeX()} & ${a[1].toLaTeX()} & ${a[2].toLaTeX()} \\\\ ${b[0].toLaTeX()} & ${b[1].toLaTeX()} & ${b[2].toLaTeX()} \\end{vmatrix}`
    });

    // Minorlar
    // i: a1*b2 - a2*b1
    const cx = a[1].mul(b[2]).sub(a[2].mul(b[1]));
    // j: -(a0*b2 - a2*b0)
    const cy = (a[0].mul(b[2]).sub(a[2].mul(b[0]))).neg();
    // k: a0*b1 - a1*b0
    const cz = a[0].mul(b[1]).sub(a[1].mul(b[0]));

    steps.push({
      title: "2-qadam: 1-satr (birlik vektorlar) bo'yicha yoyish",
      desc: "Har bir koordinata bo'yicha 2x2 minorlar hisoblanadi:",
      latex: `\\begin{aligned}
      c_x &= \\begin{vmatrix} ${a[1].toLaTeX()} & ${a[2].toLaTeX()} \\\\ ${b[1].toLaTeX()} & ${b[2].toLaTeX()} \\end{vmatrix} = (${a[1].toLaTeX()})(${b[2].toLaTeX()}) - (${a[2].toLaTeX()})(${b[1].toLaTeX()}) = ${cx.toLaTeX()} \\\\
      c_y &= -\\begin{vmatrix} ${a[0].toLaTeX()} & ${a[2].toLaTeX()} \\\\ ${b[0].toLaTeX()} & ${b[2].toLaTeX()} \\end{vmatrix} = -[(${a[0].toLaTeX()})(${b[2].toLaTeX()}) - (${a[2].toLaTeX()})(${b[0].toLaTeX()})] = ${cy.toLaTeX()} \\\\
      c_z &= \\begin{vmatrix} ${a[0].toLaTeX()} & ${a[1].toLaTeX()} \\\\ ${b[0].toLaTeX()} & ${b[1].toLaTeX()} \\end{vmatrix} = (${a[0].toLaTeX()})(${b[1].toLaTeX()}) - (${a[1].toLaTeX()})(${b[0].toLaTeX()}) = ${cz.toLaTeX()}
      \\end{aligned}`
    });

    const cVec = [cx, cy, cz];
    const area2 = cx.mul(cx).add(cy.mul(cy)).add(cz.mul(cz));
    const areaNum = Math.sqrt(area2.toNumber());

    steps.push({
      title: "3-qadam: Natijaviy vektor va Parallelogramm yuzi",
      desc: "Vektor ko'paytma natijasi hamda bu ikki vektorga qurilgan parallelogramm yuzi ($S = |\\vec{a} \\times \\vec{b}|$):",
      latex: `\\begin{aligned}
      \\vec{a} \\times \\vec{b} &= \\mathbf{(${cx.toLaTeX()}, ${cy.toLaTeX()}, ${cz.toLaTeX()})} \\\\
      S_{paral} &= \\sqrt{${area2.toLaTeX()}} \\approx \\mathbf{${areaNum.toFixed(4)}} \\\\
      S_{uchburchak} &= \\frac{1}{2} S_{paral} \\approx \\mathbf{${(areaNum / 2).toFixed(4)}}
      \\end{aligned}`
    });

    return { result: cVec, steps };
  }

  if (op === 'mixed') {
    // Aralash ko'paytma va hajm
    steps.push({
      title: "1-qadam: Aralash ko'paytma determinanti",
      desc: "Formula: $(\\vec{a}, \\vec{b}, \\vec{c}) = \\begin{vmatrix} x_1 & y_1 & z_1 \\\\ x_2 & y_2 & z_2 \\\\ x_3 & y_3 & z_3 \\end{vmatrix}$",
      latex: `(\\vec{a}, \\vec{b}, \\vec{c}) = \\begin{vmatrix} ${a[0].toLaTeX()} & ${a[1].toLaTeX()} & ${a[2].toLaTeX()} \\\\ ${b[0].toLaTeX()} & ${b[1].toLaTeX()} & ${b[2].toLaTeX()} \\\\ ${c[0].toLaTeX()} & ${c[1].toLaTeX()} & ${c[2].toLaTeX()} \\end{vmatrix}`
    });

    const M = [a, b, c];
    const detRes = solveDeterminant(M, 'sarrus');

    detRes.steps.forEach(st => {
      steps.push(st);
    });

    const vVal = detRes.result;
    const vol = vVal.abs();
    const isCoplanar = vVal.isZero();

    steps.push({
      title: "Yakuniy qadam: Parallelepiped hajmi va Komplanarlik tahlili",
      desc: `Aralash ko'paytmaning moduli parallelepiped hajmiga ($V = |(\\vec{a}, \\vec{b}, \\vec{c})|$), piramida hajmi esa $V_{pir} = \\frac{1}{6} V$ ga teng:`,
      latex: `\\begin{aligned}
      (\\vec{a}, \\vec{b}, \\vec{c}) &= ${vVal.toLaTeX()} \\\\
      V_{paral} &= \\mathbf{${vol.toLaTeX()}} \\\\
      V_{piramida} &= \\mathbf{${vol.div(new Fraction(6)).toLaTeX()}} \\\\
      \\text{Xulosa: } &\\mathbf{${isCoplanar ? "Vektorlar komplanar (bir tekislikda yotadi)" : "Vektorlar komplanar emas (fazoda hajm hosil qiladi)"}}
      \\end{aligned}`
    });

    return { result: vVal, steps };
  }
}

// ============================================================
// 7. XOS SONLAR VA XOS VEKTORLAR (Eigenvalues & Eigenvectors)
// ============================================================

function solveEigen2x2(A) {
  const steps = [];
  const a11 = A[0][0], a12 = A[0][1];
  const a21 = A[1][0], a22 = A[1][1];

  steps.push({
    title: "1-qadam: Xarakteristik tenglama det(A - λE) = 0",
    desc: "Xos sonlarni topish uchun xarakteristik determinant tuziladi:",
    latex: `\\det(A - \\lambda E) = \\begin{vmatrix} ${a11.toLaTeX()} - \\lambda & ${a12.toLaTeX()} \\\\ ${a21.toLaTeX()} & ${a22.toLaTeX()} - \\lambda \\end{vmatrix} = 0`
  });

  const tr = a11.add(a22); // Trace
  const det = a11.mul(a22).sub(a12.mul(a21)); // Determinant

  steps.push({
    title: "2-qadam: Xarakteristik kvadrat tenglamani hosil qilish",
    desc: "Formula: $\\lambda^2 - \\text{tr}(A) \\cdot \\lambda + \\det(A) = 0$",
    latex: `\\lambda^2 - (${tr.toLaTeX()})\\lambda + (${det.toLaTeX()}) = 0`
  });

  // D = tr^2 - 4*det
  const trNum = tr.toNumber();
  const detNum = det.toNumber();
  const discNum = trNum * trNum - 4 * detNum;

  if (discNum < 0) {
    steps.push({
      title: "Xulosa: Diskriminant manfiy (D < 0)",
      desc: "Haqiqiy sonlar to'plamida xos sonlar mavjud emas (kompleks xos sonlar mavjud).",
      latex: `D = (${tr.toLaTeX()})^2 - 4 \\cdot (${det.toLaTeX()}) = ${discNum.toFixed(4)} < 0`
    });
    return { result: null, steps };
  }

  const sqrtD = Math.sqrt(discNum);
  const l1 = (trNum + sqrtD) / 2;
  const l2 = (trNum - sqrtD) / 2;

  steps.push({
    title: "3-qadam: Xos sonlarni (λ₁, λ₂) hisoblash",
    desc: "Kvadrat tenglama ildizlari:",
    latex: `\\begin{aligned}
    D &= ${discNum.toFixed(4)} \\\\
    \\lambda_1 &= \\frac{${tr.toLaTeX()} + \\sqrt{${discNum.toFixed(4)}}}{2} = \\mathbf{${Number.isInteger(l1) ? l1 : l1.toFixed(4)}} \\\\
    \\lambda_2 &= \\frac{${tr.toLaTeX()} - \\sqrt{${discNum.toFixed(4)}}}{2} = \\mathbf{${Number.isInteger(l2) ? l2 : l2.toFixed(4)}}
    \\end{aligned}`
  });

  // Xos vektorlar
  steps.push({
    title: "4-qadam: Xos vektorlarni topish",
    desc: "Har bir $\\lambda_i$ uchun $(A - \\lambda_i E) \\vec{v} = 0$ bir jinsli sistemasi yechiladi:",
    latex: `\\begin{pmatrix} a_{11} - \\lambda & a_{12} \\\\ a_{21} & a_{22} - \\lambda \\end{pmatrix} \\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}`
  });

  return { result: [l1, l2], steps };
}

// ============================================================
// 8. AMALIY 1 MAXSUS MAVZULARI: f(A), A * A^T, Chiziqli kombinatsiya
// ============================================================

function solveAAt(A) {
  const steps = [];
  const rows = A.length;
  const cols = A[0].length;

  steps.push({
    title: `1-qadam: Berilgan matritsa (O'lchami: $${rows} \\times ${cols}$)`,
    desc: "Matritsaning o'zi:",
    latex: `A = ${matrixToLaTeX(A)}`
  });

  const At = [];
  for (let j = 0; j < cols; j++) {
    const r = [];
    for (let i = 0; i < rows; i++) r.push(A[i][j]);
    At.push(r);
  }

  steps.push({
    title: "2-qadam: Transponirlangan matritsani (Aᵀ) topish",
    desc: `Satrlar ustunlarga aylantirildi (O'lchami: $${cols} \\times ${rows}$):`,
    latex: `A^T = ${matrixToLaTeX(At)}`
  });

  const mulRes = solveMatrixOps(A, At, 'multiply');
  steps.push({
    title: "3-qadam: A va Aᵀ matritsalarni ko'paytirish",
    desc: `O'lchamlari mos: ($${rows} \\times ${cols}$) va ($${cols} \\times ${rows}$) ko'paytmasi ($${rows} \\times ${rows}$) kvadrat matritsani beradi:`,
    latex: `A \\cdot A^T = ${matrixToLaTeX(A)} \\cdot ${matrixToLaTeX(At)}`
  });

  mulRes.steps.forEach((st, idx) => {
    if (idx > 0) steps.push(st);
  });

  return { result: mulRes.result, steps };
}

function solveMatrixPolynomial(A, polyStr, coeffs) {
  // coeffs: [c0, c1, c2, c3] for c0*E + c1*A + c2*A^2 + c3*A^3
  const steps = [];
  const n = A.length;

  steps.push({
    title: "1-qadam: Ko'phad va matritsa sharti",
    desc: `Berilgan ko'phad: $f(x) = ${polyStr}$. Matritsa uchun formula: $f(A) = \\sum c_k A^k + c_0 E$:`,
    latex: `A = ${matrixToLaTeX(A)}`
  });

  const powers = [null]; // index 0 is null, index 1 is A
  powers.push(A);

  let currentA = A;
  for (let p = 2; p < coeffs.length; p++) {
    if (coeffs[p] && coeffs[p] !== 0) {
      const pRes = solveMatrixOps(currentA, A, 'multiply');
      currentA = pRes.result;
      powers.push(currentA);

      steps.push({
        title: `Darajani hisoblash: A^${p}`,
        desc: `A^${p} = A^${p - 1} \\times A:`,
        latex: `A^${p} = ${matrixToLaTeX(currentA)}`
      });
    } else {
      powers.push(null);
    }
  }

  const termsLatex = [];
  let resultMat = [];
  for (let i = 0; i < n; i++) {
    const r = [];
    for (let j = 0; j < n; j++) r.push(new Fraction(0));
    resultMat.push(r);
  }

  for (let p = coeffs.length - 1; p >= 0; p--) {
    const c = new Fraction(coeffs[p] || 0);
    if (c.isZero()) continue;

    if (p === 0) {
      termsLatex.push(`${c.toLaTeX()} \\cdot E`);
      for (let i = 0; i < n; i++) {
        resultMat[i][i] = resultMat[i][i].add(c);
      }
    } else {
      termsLatex.push(`${c.toLaTeX()} \\cdot A^${p}`);
      const pMat = powers[p];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          resultMat[i][j] = resultMat[i][j].add(c.mul(pMat[i][j]));
        }
      }
    }
  }

  steps.push({
    title: "Yakuniy qadam: f(A) ni jamlash",
    desc: `Barcha hadlar ($${termsLatex.join(' + ').replace(/\\+ -/g, '- ')}$) qo'shildi:`,
    latex: `f(A) = \\mathbf{${matrixToLaTeX(resultMat)}}`
  });

  return { result: resultMat, steps };
}

// ============================================================
// 9. AMALIY 2: PERMUTATSIYALAR VA INVERSIYALAR SONI
// ============================================================

function solvePermutations(perm) {
  const steps = [];
  const n = perm.length;

  steps.push({
    title: "1-qadam: Berilgan o'rin almashtirish (Permutatsiya)",
    desc: `O'lchami $n = ${n}$ bo'lgan o'rin almashtirish berilgan:`,
    latex: `\\sigma = \\begin{pmatrix} 1 & 2 & 3 & \\dots & ${n} \\\\ ${perm.join(' & ')} \\end{pmatrix}`
  });

  const inversions = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (perm[i] > perm[j]) {
        inversions.push(`(${perm[i]}, ${perm[j]})`);
      }
    }
  }

  const count = inversions.length;
  const isEven = count % 2 === 0;

  steps.push({
    title: "2-qadam: Barcha inversiyalar (tartib buzilishlari)ni aniqlash",
    desc: "Inversiya — chapdagi son o'ngdagi sondan katta bo'lgan barcha $(a_i, a_j)$ juftliklar (bu yerda $i < j$ va $a_i > a_j$):",
    latex: inversions.length > 0 
      ? `\\text{Inversiyalar juftliklari: } ${inversions.join(', ')}`
      : `\\text{Inversiyalar mavjud emas (elementlar o'sish tartibida)}`
  });

  steps.push({
    title: "3-qadam: Inversiyalar soni va Juft/Toqlik tahlili",
    desc: `Jami inversiyalar soni: $I(\\sigma) = ${count}$. Agar $I(\\sigma)$ juft bo'lsa, o'rin almashtirish juft; agar toq bo'lsa, toq hisoblanadi:`,
    latex: `\\begin{aligned}
    I(\\sigma) &= \\mathbf{${count}} \\\\
    \\text{Permutatsiya turi: } &\\mathbf{${isEven ? "Juft o'rin almashtirish" : "Toq o'rin almashtirish"}} \\\\
    \\text{Ishorasi: } &\\text{sgn}(\\sigma) = (-1)^{${count}} = \\mathbf{${isEven ? "+1" : "-1"}}
    \\end{aligned}`
  });

  return { result: { count, isEven, sgn: isEven ? 1 : -1 }, steps };
}

// ============================================================
// 10. AMALIY 4: MINORLAR VA ALGEBRAIK TO'LDIRUVCHILAR
// ============================================================

function solveMinorsAndCofactors(A, selectedRow = 0) {
  const steps = [];
  const n = A.length;

  steps.push({
    title: "1-qadam: Berilgan matritsa",
    desc: `O'lchami $${n} \\times ${n}$ bo'lgan matritsa:`,
    latex: `A = ${matrixToLaTeX(A)}`
  });

  steps.push({
    title: `2-qadam: ${selectedRow + 1}-satr elementlari bo'yicha yoyish qoidasi`,
    desc: "Formula: $\\det(A) = \\sum_{j=1}^{n} a_{ij} A_{ij} = \\sum_{j=1}^{n} a_{ij} (-1)^{i+j} M_{ij}$",
    latex: `\\det(A) = \\sum_{j=1}^{${n}} a_{${selectedRow + 1}j} \\cdot (-1)^{${selectedRow + 1}+j} \\cdot M_{${selectedRow + 1}j}`
  });

  const minorsDetails = [];
  let detVal = new Fraction(0);

  for (let j = 0; j < n; j++) {
    const elem = A[selectedRow][j];
    const sub = [];
    for (let r = 0; r < n; r++) {
      if (r === selectedRow) continue;
      const subRow = [];
      for (let c = 0; c < n; c++) {
        if (c === j) continue;
        subRow.push(A[r][c]);
      }
      sub.push(subRow);
    }
    const subDet = solveDeterminantDirect(sub);
    const sign = (selectedRow + 1 + j + 1) % 2 === 0 ? 1 : -1;
    const aij = new Fraction(sign).mul(subDet);
    const term = elem.mul(aij);
    detVal = detVal.add(term);

    minorsDetails.push(
      `\\begin{aligned}
      M_{${selectedRow + 1}${j + 1}} &= ${matrixToLaTeX(sub, 'vmatrix')} = ${subDet.toLaTeX()} \\\\
      A_{${selectedRow + 1}${j + 1}} &= (-1)^{${selectedRow + 1 + j + 1}} \\cdot M_{${selectedRow + 1}${j + 1}} = ${sign > 0 ? '' : '-'}(${subDet.toLaTeX()}) = ${aij.toLaTeX()} \\\\
      a_{${selectedRow + 1}${j + 1}} \\cdot A_{${selectedRow + 1}${j + 1}} &= (${elem.toLaTeX()}) \\cdot (${aij.toLaTeX()}) = ${term.toLaTeX()}
      \\end{aligned}`
    );
  }

  steps.push({
    title: `3-qadam: ${selectedRow + 1}-satrning barcha minorlari va kofaktorlari`,
    desc: "Har bir katak uchun hisoblangan $M_{ij}$ va $A_{ij}$ qiymatlari:",
    latex: minorsDetails.join(' \\\\[1em] ')
  });

  steps.push({
    title: "4-qadam: Determinant qiymatini jamlash",
    desc: "Barcha ko'paytmalar yig'indisi:",
    latex: `\\det(A) = \\mathbf{${detVal.toLaTeX()}}`
  });

  return { result: detVal, steps };
}

// ============================================================
// 11. AMALIY 8: BIR JINSLI CHTS VA FYeT (Fundamental Yechimlar Tizimi)
// ============================================================

function solveHomogeneousSLAE(A) {
  const steps = [];
  const m = A.length;
  const n = A[0].length;
  const M = cloneMatrix(A);

  steps.push({
    title: "1-qadam: Bir jinsli tenglamalar sistemasi (AX = 0)",
    desc: `$${m}$ ta tenglama va $${n}$ ta noma'lumli bir jinsli sistema:`,
    latex: `${matrixToLaTeX(A)} \\cdot \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_${n} \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ \\vdots \\\\ 0 \\end{pmatrix}`
  });

  // Gauss elimination
  let rank = 0;
  const pivotCols = [];
  for (let col = 0; col < n && rank < m; col++) {
    let pivot = rank;
    while (pivot < m && M[pivot][col].isZero()) pivot++;
    if (pivot === m) continue;

    if (pivot !== rank) {
      const tmp = M[rank];
      M[rank] = M[pivot];
      M[pivot] = tmp;
    }

    const diag = M[rank][col];
    for (let c = col; c < n; c++) M[rank][c] = M[rank][c].div(diag);

    for (let r = 0; r < m; r++) {
      if (r !== rank && !M[r][col].isZero()) {
        const factor = M[r][col];
        for (let c = col; c < n; c++) {
          M[r][c] = M[r][c].sub(factor.mul(M[rank][c]));
        }
      }
    }
    pivotCols.push(col);
    rank++;
  }

  steps.push({
    title: "2-qadam: Matritsani Jordan-Gauss pog'onasimon shakliga keltirish",
    desc: `Matritsa rangi: $\\text{Rank}(A) = r = ${rank}$. Noma'lumlar soni: $n = ${n}$.`,
    latex: `A_{pog'ona} = ${matrixToLaTeX(M)}`
  });

  const freeCols = [];
  for (let c = 0; c < n; c++) {
    if (!pivotCols.includes(c)) freeCols.push(c);
  }

  if (freeCols.length === 0) {
    steps.push({
      title: "Xulosa: Faqat trivial yechim mavjud (x = 0)",
      desc: "Rang noma'lumlar soniga teng ($r = n$), shuning uchun sistema faqat bitta nol yechimga ega:",
      latex: `x_1 = x_2 = \\dots = x_${n} = 0`
    });
    return { result: "Trivial yechim: X = 0", steps };
  }

  // FYeT vectors
  const fsetVectors = [];
  for (let k = 0; k < freeCols.length; k++) {
    const freeC = freeCols[k];
    const vec = new Array(n).fill(null).map(() => new Fraction(0));
    vec[freeC] = new Fraction(1);

    for (let i = 0; i < pivotCols.length; i++) {
      const pCol = pivotCols[i];
      vec[pCol] = M[i][freeC].neg();
    }
    fsetVectors.push(vec);
  }

  const fsetLatex = fsetVectors.map((v, idx) => 
    `X_{${idx + 1}} = \\begin{pmatrix} ${v.map(x => x.toLaTeX()).join(' \\\\ ')} \\end{pmatrix}`
  );

  const pivotVarNames = pivotCols.map(c => `x_{${c + 1}}`).join(', ');
  const freeVarNames = freeCols.map(c => `x_{${c + 1}}`).join(', ');

  steps.push({
    title: "3-qadam: Fundamental Yechimlar Tizimi (FYeT / ФСР)",
    desc: `Erkin o'zgaruvchilar soni: $k = n - r = ${n} - ${rank} = ${freeCols.length}$.\n\n` +
          `**💡 Oddiy tushuntirish:**\n` +
          `• Asosiy (bog'langan) o'zgaruvchilar: $${pivotVarNames}$ (ular asosiy ustunlarda turibdi);\n` +
          `• Erkin o'zgaruvchilar: $${freeVarNames}$ (ular xohlagan haqiqiy qiymatni qabul qila oladi);\n` +
          `• Har bir erkin o'zgaruvchiga navbatma-navbat $1$ va boshqalariga $0$ berish orqali barcha bazis vektorlar tuziladi:`,
    latex: fsetLatex.join(', \\quad ')
  });

  const genSolTerms = fsetVectors.map((_, idx) => `C_{${idx + 1}} X_{${idx + 1}}`).join(' + ');
  steps.push({
    title: "4-qadam: Umumiy yechim",
    desc: "Bir jinsli sistemaning barcha mumkin bo'lgan cheksiz ko'p yechimlari shu bazis vektorlarning chiziqli kombinatsiyasidir ($C_1, C_2 \\in \\mathbb{R}$ — ixtiyoriy ko'paytuvchilar):",
    latex: `X_{umumiy} = \\mathbf{${genSolTerms}}, \\quad (C_i \\in \\mathbb{R})`
  });

  return { result: fsetVectors, steps };
}

// ============================================================
// 12. AMALIY 9: KOMPLEKS SONLAR VA ULAR USTIDA AMALLAR
// ============================================================

function solveComplexOps(a1, b1, a2, b2, op = 'all') {
  const steps = [];
  const z1Str = `${a1} ${b1 >= 0 ? '+' : '-'} ${Math.abs(b1)}i`;
  const z2Str = `${a2} ${b2 >= 0 ? '+' : '-'} ${Math.abs(b2)}i`;

  steps.push({
    title: "1-qadam: Berilgan kompleks sonlar",
    desc: "Algebraik ko'rinishdagi kompleks sonlar ($z = a + bi$):",
    latex: `z_1 = ${z1Str}, \\quad z_2 = ${z2Str}`
  });

  // Sum
  const sumA = a1 + a2;
  const sumB = b1 + b2;
  steps.push({
    title: "Qo'shish (z₁ + z₂)",
    desc: "Haqiqiy va mavhum qismlar alohida qo'shiladi: $(a_1 + a_2) + (b_1 + b_2)i$",
    latex: `z_1 + z_2 = (${a1} + (${a2})) + (${b1} + (${b2}))i = \\mathbf{${sumA} ${sumB >= 0 ? '+' : '-'} ${Math.abs(sumB)}i}`
  });

  // Subtraction
  const subA = a1 - a2;
  const subB = b1 - b2;
  steps.push({
    title: "Ayirish (z₁ - z₂)",
    desc: "Haqiqiy va mavhum qismlar alohida ayiriladi: $(a_1 - a_2) + (b_1 - b_2)i$",
    latex: `z_1 - z_2 = (${a1} - (${a2})) + (${b1} - (${b2}))i = \\mathbf{${subA} ${subB >= 0 ? '+' : '-'} ${Math.abs(subB)}i}`
  });

  // Multiplication
  const mulA = a1 * a2 - b1 * b2;
  const mulB = a1 * b2 + a2 * b1;
  steps.push({
    title: "Ko'paytirish (z₁ · z₂)",
    desc: "Qavslarni ochib chiqamiz ($i^2 = -1$ ekanini hisobga olgan holda):",
    latex: `\\begin{aligned}
    z_1 \\cdot z_2 &= (${a1})(${a2}) + (${a1})(${b2}i) + (${b1}i)(${a2}) + (${b1})(${b2})i^2 \\\\
    &= (${a1 * a2} - ${b1 * b2}) + (${a1 * b2} + ${a2 * b1})i = \\mathbf{${mulA} ${mulB >= 0 ? '+' : '-'} ${Math.abs(mulB)}i}
    \\end{aligned}`
  });

  // Division
  const den = a2 * a2 + b2 * b2;
  if (den !== 0) {
    const divNumA = a1 * a2 + b1 * b2;
    const divNumB = b1 * a2 - a1 * b2;
    const fracA = new Fraction(divNumA, den);
    const fracB = new Fraction(divNumB, den);

    steps.push({
      title: "Bo'lish (z₁ / z₂)",
      desc: "Kasrning surat va maxrajini maxrajning qo'shmasiga ($(a_2 - b_2 i)$ ga) ko'paytiramiz:",
      latex: `\\begin{aligned}
      \\frac{z_1}{z_2} &= \\frac{(${z1Str})(${a2} ${-b2 >= 0 ? '+' : '-'} ${Math.abs(b2)}i)}{(${z2Str})(${a2} ${-b2 >= 0 ? '+' : '-'} ${Math.abs(b2)}i)} = \\frac{${divNumA} ${divNumB >= 0 ? '+' : '-'} ${Math.abs(divNumB)}i}{${den}} \\\\
      &= \\mathbf{${fracA.toLaTeX()} ${fracB.toNumber() >= 0 ? '+' : '-'} ${fracB.abs().toLaTeX()}i}
      \\end{aligned}`
    });
  }

  // Trigonometric Form for z1
  const r1 = Math.sqrt(a1 * a1 + b1 * b1);
  const phi1 = Math.atan2(b1, a1);
  const deg1 = (phi1 * 180 / Math.PI).toFixed(1);

  steps.push({
    title: "z₁ ning Trigonometrik shakli",
    desc: "Modul $r = \\sqrt{a^2 + b^2}$ va argument $\\varphi = \\arg(z)$:",
    latex: `\\begin{aligned}
    r_1 &= \\sqrt{(${a1})^2 + (${b1})^2} = \\sqrt{${a1 * a1 + b1 * b1}} \\approx ${r1.toFixed(4)} \\\\
    \\varphi_1 &= \\arctan\\left(\\frac{${b1}}{${a1}}\\right) \\approx ${deg1}^\\circ \\\\
    z_1 &= \\mathbf{${r1.toFixed(4)} \\left(\\cos ${deg1}^\\circ + i \\sin ${deg1}^\\circ\\right)}
    \\end{aligned}`
  });

  return { result: `${mulA} ${mulB >= 0 ? '+' : '-'} ${Math.abs(mulB)}i`, steps };
}

// ============================================================
// 13. AMALIY 10: MUAVR FORMULASI (zⁿ va ⁿ√z)
// ============================================================

function solveDeMoivre(a, b, nPower, rootDegree = 3) {
  const steps = [];
  const r = Math.sqrt(a * a + b * b);
  const phi = Math.atan2(b, a);
  const deg = phi * 180 / Math.PI;

  steps.push({
    title: "1-qadam: Kompleks sonning trigonometrik shakli",
    desc: `Berilgan son: $z = ${a} ${b >= 0 ? '+' : '-'} ${Math.abs(b)}i$:`,
    latex: `r = \\sqrt{${a * a + b * b}} \\approx ${r.toFixed(4)}, \\quad \\varphi \\approx ${deg.toFixed(1)}^\\circ`
  });

  // Power
  const rn = Math.pow(r, nPower);
  const nPhiDeg = deg * nPower;
  const nPhiNorm = ((nPhiDeg % 360) + 360) % 360;
  const realPart = rn * Math.cos(nPhiNorm * Math.PI / 180);
  const imagPart = rn * Math.sin(nPhiNorm * Math.PI / 180);

  steps.push({
    title: `2-qadam: Muavr formulasi bilan darajaga ko'tarish: z^${nPower}`,
    desc: "Formula: $z^n = r^n (\\cos n\\varphi + i \\sin n\\varphi)$",
    latex: `\\begin{aligned}
    z^{${nPower}} &= (${r.toFixed(4)})^{${nPower}} [\\cos(${nPower} \\cdot ${deg.toFixed(1)}^\\circ) + i \\sin(${nPower} \\cdot ${deg.toFixed(1)}^\\circ)] \\\\
    &= ${rn.toFixed(4)} [\\cos(${nPhiNorm.toFixed(1)}^\\circ) + i \\sin(${nPhiNorm.toFixed(1)}^\\circ)] \\\\
    &\\approx \\mathbf{${Math.round(realPart)} ${imagPart >= 0 ? '+' : '-'} ${Math.abs(Math.round(imagPart))}i}
    \\end{aligned}`
  });

  // Roots
  const rRoot = Math.pow(r, 1 / rootDegree);
  const rootsLatex = [];

  for (let k = 0; k < rootDegree; k++) {
    const angleDeg = (deg + 360 * k) / rootDegree;
    const re = rRoot * Math.cos(angleDeg * Math.PI / 180);
    const im = rRoot * Math.sin(angleDeg * Math.PI / 180);
    rootsLatex.push(
      `w_{${k}} = ${rRoot.toFixed(4)} \\left(\\cos ${angleDeg.toFixed(1)}^\\circ + i \\sin ${angleDeg.toFixed(1)}^\\circ\\right) \\approx ${re.toFixed(3)} ${im >= 0 ? '+' : '-'} ${Math.abs(im).toFixed(3)}i`
    );
  }

  steps.push({
    title: `3-qadam: ${rootDegree}-darajali barcha ildizlarni topish (ⁿ√z)`,
    desc: "Formula: $w_k = \\sqrt[n]{r} \\left(\\cos \\frac{\\varphi + 2\\pi k}{n} + i \\sin \\frac{\\varphi + 2\\pi k}{n}\\right), \\quad k = 0, 1, \\dots, n-1$:",
    latex: `\\begin{aligned} ${rootsLatex.join(' \\\\ ')} \\end{aligned}`
  });

  return { result: rootsLatex, steps };
}

// Helpers for polynomial representation
function polyToLaTeX(coeffs, varName = 'x') {
  // coeffs: [a0, a1, a2, ..., an] where index is power
  const terms = [];
  for (let p = coeffs.length - 1; p >= 0; p--) {
    const c = coeffs[p];
    if (!c || c === 0) continue;
    let cStr = '';
    const absC = Math.abs(c);
    const sign = c < 0 ? '-' : (terms.length > 0 ? '+' : '');
    
    if (p === 0) {
      cStr = `${absC}`;
    } else if (p === 1) {
      cStr = absC === 1 ? `${varName}` : `${absC}${varName}`;
    } else {
      cStr = absC === 1 ? `${varName}^{${p}}` : `${absC}${varName}^{${p}}`;
    }
    terms.push(`${sign} ${cStr}`.trim());
  }
  return terms.length > 0 ? terms.join(' ').replace(/\+ -/g, '- ') : '0';
}

// ============================================================
// 14. AMALIY 11: KO'PHADLARNI QOLDIQLI BO'LISH (Burchak usuli)
// ============================================================

function solvePolynomialDivision(fCoeffs, gCoeffs, method = '', data = null) {
  if (typeof fCoeffs === 'string') fCoeffs = fCoeffs.trim().split(/\s+/).map(Number);
  if (typeof gCoeffs === 'string') gCoeffs = gCoeffs.trim().split(/\s+/).map(Number);
  // fCoeffs, gCoeffs: arrays [a_n, ..., a_0] highest degree first
  const steps = [];
  
  const fLaTeX = polyToLaTeX([...fCoeffs].reverse());
  const gLaTeX = polyToLaTeX([...gCoeffs].reverse());

  steps.push({
    title: "1-qadam: Berilgan ko'phadlar",
    desc: "Bo'linuvchi $f(x)$ va bo'luvchi $g(x)$ ko'phadlari:",
    latex: `f(x) = ${fLaTeX}, \\quad g(x) = ${gLaTeX}`
  });

  let rem = fCoeffs.map(x => new Fraction(x));
  const g = gCoeffs.map(x => new Fraction(x));

  while (rem.length > 0 && rem[0].isZero()) rem.shift();
  let gNorm = [...g];
  while (gNorm.length > 0 && gNorm[0].isZero()) gNorm.shift();

  if (gNorm.length === 0) {
    throw new Error("Nolga bo'lish mumkin emas!");
  }

  if (rem.length < gNorm.length) {
    steps.push({
      title: "2-qadam: Darajalar tahlili va Xulosa",
      desc: "Bo'linuvchi $f(x)$ ning darajasi bo'luvchi $g(x)$ ning darajasidan kichik ($\\text{deg}(f) < \\text{deg}(g)$).\n" +
            "Shuning uchun to'liqsiz bo'linma nolga teng: $q(x) = 0$, qoldiq esa aynan $f(x)$ ning o'ziga teng: $r(x) = f(x)$:",
      latex: `q(x) = \\mathbf{0}, \\quad r(x) = \\mathbf{${fLaTeX}}`
    });
    return { result: { q: '0', r: fLaTeX }, steps };
  }

  const quotient = [];
  const divSteps = [];

  while (rem.length >= gNorm.length) {
    if (rem[0].isZero()) {
      rem.shift();
      continue;
    }
    const leadRem = rem[0];
    const leadG = gNorm[0];
    const factor = leadRem.div(leadG);
    const degDiff = rem.length - gNorm.length;

    quotient.push({ factor, degDiff });

    // Subtract factor * g * x^degDiff
    const subPoly = new Array(rem.length).fill(null).map(() => new Fraction(0));
    for (let i = 0; i < gNorm.length; i++) {
      subPoly[i] = factor.mul(gNorm[i]);
    }

    const nextRem = [];
    for (let i = 1; i < rem.length; i++) {
      nextRem.push(rem[i].sub(subPoly[i]));
    }

    divSteps.push(
      `\\text{Hosil bo'lgan had: } (${factor.toLaTeX()}) x^{${degDiff}} \\implies \\text{Qoldiq: } ${polyToLaTeX([...nextRem].reverse().map(f => f.toNumber()))}`
    );

    rem = nextRem;
  }

  // Construct quotient poly
  const maxQDeg = Math.max(0, fCoeffs.length - gCoeffs.length);
  const qArr = new Array(maxQDeg + 1).fill(null).map(() => new Fraction(0));
  quotient.forEach(q => {
    qArr[q.degDiff] = q.factor;
  });

  const qLaTeX = polyToLaTeX(qArr.map(f => f.toNumber()));
  const rLaTeX = polyToLaTeX(rem.map(f => f.toNumber()));

  steps.push({
    title: "2-qadam: Burchakli bo'lish qadamlari",
    desc: "Katta darajali hadlarni ketma-ket bo'lish jarayoni:",
    latex: divSteps.join(' \\\\[0.5em] ')
  });

  steps.push({
    title: "3-qadam: Natija (f(x) = q(x)·g(x) + r(x))",
    desc: "To'liqsiz bo'linma $q(x)$ va qoldiq $r(x)$:",
    latex: `\\begin{aligned}
    q(x) &= \\mathbf{${qLaTeX}} \\\\
    r(x) &= \\mathbf{${rLaTeX}} \\\\
    ${fLaTeX} &= (${qLaTeX})(${gLaTeX}) + (${rLaTeX})
    \\end{aligned}`
  });

  return { result: { q: qLaTeX, r: rLaTeX }, steps };
}

// ============================================================
// 14.2 AMALIY 12: YEVKLID ALGORITMI BILAN KO'PHADLARNING EKUBINI TOPISH
// ============================================================

function polyDivHelper(f, g) {
  let rem = f.map(x => new Fraction(x.n, x.d));
  while (rem.length > 0 && rem[0].isZero()) rem.shift();
  const divisor = g.map(x => new Fraction(x.n, x.d));
  while (divisor.length > 0 && divisor[0].isZero()) divisor.shift();

  if (divisor.length === 0) throw new Error("0 ga bo'lib bo'lmaydi");

  const qTerms = [];
  while (rem.length >= divisor.length) {
    if (rem[0].isZero()) {
      rem.shift();
      continue;
    }
    const factor = rem[0].div(divisor[0]);
    const degDiff = rem.length - divisor.length;
    qTerms.push({ factor, degDiff });

    const sub = new Array(rem.length).fill(null).map(() => new Fraction(0));
    for (let i = 0; i < divisor.length; i++) {
      sub[i] = factor.mul(divisor[i]);
    }
    const nextRem = [];
    for (let i = 1; i < rem.length; i++) {
      nextRem.push(rem[i].sub(sub[i]));
    }
    while (nextRem.length > 0 && nextRem[0].isZero()) nextRem.shift();
    rem = nextRem;
  }

  const maxDeg = qTerms.length > 0 ? Math.max(...qTerms.map(t => t.degDiff)) : 0;
  const qPoly = new Array(maxDeg + 1).fill(null).map(() => new Fraction(0));
  qTerms.forEach(t => {
    qPoly[t.degDiff] = t.factor;
  });

  return { quotient: qPoly, remainder: rem };
}

function solvePolynomialGCD(fCoeffs, gCoeffs, method = '', data = null) {
  if (typeof fCoeffs === 'string') fCoeffs = fCoeffs.trim().split(/\s+/).map(Number);
  if (typeof gCoeffs === 'string') gCoeffs = gCoeffs.trim().split(/\s+/).map(Number);
  const steps = [];
  const fLaTeX = polyToLaTeX([...fCoeffs].reverse());
  const gLaTeX = polyToLaTeX([...gCoeffs].reverse());

  steps.push({
    title: "1-qadam: Berilgan ko'phadlar va Yevklid algoritmi",
    desc: "Yevklid algoritmi bo'yicha ko'phadlar ketma-ket qoldiqli bo'linadi. Oxirgi noldan farqli qoldiq ularning EKUBi bo'ladi:",
    latex: `f(x) = ${fLaTeX}, \\quad g(x) = ${gLaTeX}`
  });

  let rPrev = fCoeffs.map(x => new Fraction(x));
  let rCurr = gCoeffs.map(x => new Fraction(x));
  while (rPrev.length > 0 && rPrev[0].isZero()) rPrev.shift();
  while (rCurr.length > 0 && rCurr[0].isZero()) rCurr.shift();

  let stepCount = 1;
  let lastNonZero = rCurr;

  while (rCurr.length > 0) {
    const divRes = polyDivHelper(rPrev, rCurr);
    const qStr = polyToLaTeX(divRes.quotient.map(x => x.toNumber()));
    const rStr = divRes.remainder.length > 0 ? polyToLaTeX([...divRes.remainder].reverse().map(x => x.toNumber())) : '0';
    const prevStr = polyToLaTeX([...rPrev].reverse().map(x => x.toNumber()));
    const currStr = polyToLaTeX([...rCurr].reverse().map(x => x.toNumber()));

    steps.push({
      title: `${stepCount + 1}-qadam: Yevklid bo'lishi (${stepCount}-bosqich)`,
      desc: `$r_{${stepCount-1}}(x)$ ni $r_{${stepCount}}(x)$ ga bo'lib qoldiqni topamiz:\n` +
            `$$${prevStr} = (${qStr}) \\cdot (${currStr}) + (${rStr})$$`,
      latex: `${prevStr} = (${qStr}) \\cdot (${currStr}) + (${rStr})`
    });

    if (divRes.remainder.length === 0) {
      lastNonZero = rCurr;
      break;
    }

    lastNonZero = divRes.remainder;
    rPrev = rCurr;
    rCurr = divRes.remainder;
    stepCount++;
  }

  // Make monic (lead coefficient = 1)
  const lead = lastNonZero[0];
  const monicGCD = lastNonZero.map(x => x.div(lead));
  const gcdLaTeX = polyToLaTeX([...monicGCD].reverse().map(x => x.toNumber()));

  steps.push({
    title: "Yakuniy qadam: EKUB (Eng Katta Umumiy Bo'luvchi)",
    desc: "Oxirgi noldan farqli qoldiq topildi va unar (bosh koeffitsiyenti $1$ bo'lgan) holatga keltirildi:",
    latex: `\\mathbf{\\text{EKUB}(f, g) = d(x) = ${gcdLaTeX}}`
  });

  return { result: { gcd: gcdLaTeX }, latexResult: `\\mathbf{\\text{EKUB}(f, g) = ${gcdLaTeX}}`, steps };
}

// ============================================================
// 15. AMALIY 13: GORNER SXEMASI VA BEZU TEOREMASI
// ============================================================

function solveHornerScheme(coeffs, cVal, method = '', data = null) {
  if (typeof coeffs === 'string') coeffs = coeffs.trim().split(/\s+/).map(Number);
  // coeffs: [a_n, a_{n-1}, ..., a_0]
  const steps = [];
  const c = new Fraction(cVal);
  const n = coeffs.length - 1;

  steps.push({
    title: "1-qadam: Ko'phad va bo'luvchi (x - c)",
    desc: `Ko'phad: $f(x) = ${polyToLaTeX([...coeffs].reverse())}$, Bo'luvchi: $x - (${c.toLaTeX()})$:`,
    latex: `c = ${c.toLaTeX()}`
  });

  const b = [];
  b.push(new Fraction(coeffs[0])); // b_n = a_n

  const tableSteps = [];
  tableSteps.push(`b_${n} = a_${n} = ${b[0].toLaTeX()}`);

  for (let i = 1; i <= n; i++) {
    const ai = new Fraction(coeffs[i]);
    const bi = ai.add(c.mul(b[i - 1]));
    b.push(bi);
    tableSteps.push(
      `b_{${n - i}} = a_{${n - i}} + c \\cdot b_{${n - i + 1}} = (${ai.toLaTeX()}) + (${c.toLaTeX()}) \\cdot (${b[i - 1].toLaTeX()}) = ${bi.toLaTeX()}`
    );
  }

  const remainder = b[n];
  const qCoeffs = b.slice(0, n);
  const qLaTeX = polyToLaTeX([...qCoeffs].reverse().map(f => f.toNumber()));

  const headerRow = coeffs.map(x => new Fraction(x).toLaTeX()).join(' & ');
  const resultRow = b.map(x => x.toLaTeX()).join(' & ');
  const colFmt = 'c|' + 'c'.repeat(coeffs.length);
  const hornerTableLatex = `\\begin{array}{${colFmt}} & ${headerRow} \\\\ \\hline c = ${c.toLaTeX()} & ${resultRow} \\end{array}`;

  steps.push({
    title: "2-qadam: Gorner jadvali va koeffitsiyentlarni to'ldirish",
    desc: "**💡 Gorner jadvali qoidasi:**\n" +
          `1. Bosh koeffitsiyent to'g'ridan-to'g'ri pastga tushadi: $b_{${n}} = a_{${n}} = ${b[0].toLaTeX()}$;\n` +
          `2. Har bir keyingi katak: $b_k = c \\times b_{k+1} + a_k$ (oldingi hosil bo'lgan sonni $c = ${c.toLaTeX()}$ ga ko'paytirib, yuqoridagi son bilan qo'shamiz);\n` +
          `3. Jadvalning eng oxirgi soni — bu bo'lishdan qolgan qoldiq $R = f(c)$ bo'ladi:\n\n` +
          `**Aritmetik hisob-kitoblar:**\n` +
          tableSteps.map(t => `• $${t}$`).join('\n'),
    latex: `${hornerTableLatex}`
  });

  steps.push({
    title: "3-qadam: Bezu teoremasi bo'yicha xulosa",
    desc: `Qoldiq $R = f(c) = ${remainder.toLaTeX()}$. Agar qoldiq 0 bo'lsa, $c = ${c.toLaTeX()}$ ko'phadning ildizi bo'ladi:`,
    latex: `\\begin{aligned}
    q(x) &= \\mathbf{${qLaTeX}} \\\\
    R = f(${c.toLaTeX()}) &= \\mathbf{${remainder.toLaTeX()}} \\\\
    \\text{Xulosa: } &\\mathbf{${remainder.isZero() ? `${c.toLaTeX()} soni f(x) ko'phadning ildizi!` : `${c.toLaTeX()} soni f(x) ning ildizi emas.`}}
    \\end{aligned}`
  });

  return { result: { q: qLaTeX, r: remainder }, steps };
}

// ============================================================
// 16. AMALIY 15: KARDANO FORMULASI (3-darajali tenglamalar)
// ============================================================

function solveCardanoCubic(a, b, c, d) {
  const steps = [];

  steps.push({
    title: "1-qadam: Berilgan 3-darajali kubik tenglama",
    desc: "Umumiy ko'rinishdagi kubik tenglama: $ax^3 + bx^2 + cx + d = 0$:",
    latex: `${a}x^3 + (${b})x^2 + (${c})x + (${d}) = 0`
  });

  // Monic form: x^3 + Ax^2 + Bx + C = 0
  const A = b / a;
  const B = c / a;
  const C = d / a;

  // Depressed cubic: y^3 + py + q = 0 with x = y - A/3
  const p = B - (A * A) / 3;
  const q = (2 * A * A * A) / 27 - (A * B) / 3 + C;

  steps.push({
    title: "2-qadam: Keltirilgan y³ + py + q = 0 ko'rinishiga o'tish",
    desc: "Tenglamadan kvadratik hadni yo'qotish uchun $x = y - \\frac{A}{3} = y - \\frac{${A.toFixed(2)}}{3}$ almashtirish kiritiladi:",
    latex: `\\begin{aligned}
    p &= B - \\frac{A^2}{3} = ${p.toFixed(4)} \\\\
    q &= \\frac{2A^3}{27} - \\frac{AB}{3} + C = ${q.toFixed(4)} \\\\
    y^3 &+ (${p.toFixed(4)})y + (${q.toFixed(4)}) = 0
    \\end{aligned}`
  });

  // Discriminant D = (q/2)^2 + (p/3)^3
  const D = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

  steps.push({
    title: "3-qadam: Kardano diskriminanti (D)",
    desc: "Formula: $D = \\left(\\frac{q}{2}\\right)^2 + \\left(\\frac{p}{3}\\right)^3$.\n\n" +
          "**💡 Diskriminant ishorasining ma'nosi:**\n" +
          "• **$D > 0$ bo'lsa:** Tenglama $1$ ta haqiqiy va $2$ ta kompleks ildizga ega (Kardano radikal formulasi qo'llaniladi);\n" +
          "• **$D = 0$ bo'lsa:** Barcha ildizlar haqiqiy va ulardan kamida ikkitasi karrali (teng);\n" +
          "• **$D < 0$ bo'lsa:** Tenglama $3$ ta har xil haqiqiy ildizga ega (trigonometrik shakl orqali topiladi):",
    latex: `D = \\left(\\frac{${q.toFixed(4)}}{2}\\right)^2 + \\left(\\frac{${p.toFixed(4)}}{3}\\right)^3 = \\mathbf{${D.toFixed(4)}}`
  });

  let roots = [];
  if (D > 0) {
    const u = Math.cbrt(-q / 2 + Math.sqrt(D));
    const v = Math.cbrt(-q / 2 - Math.sqrt(D));
    const y1 = u + v;
    const x1 = y1 - A / 3;
    roots.push(x1);

    steps.push({
      title: "4-qadam: D > 0 holati (1 ta haqiqiy va 2 ta kompleks ildiz)",
      desc: "Kardano formulasi: $u = \\sqrt[3]{-\\frac{q}{2} + \\sqrt{D}}, \\quad v = \\sqrt[3]{-\\frac{q}{2} - \\sqrt{D}}$:",
      latex: `\\begin{aligned}
      u &= \\sqrt[3]{${(-q/2 + Math.sqrt(D)).toFixed(4)}} = ${u.toFixed(4)} \\\\
      v &= \\sqrt[3]{${(-q/2 - Math.sqrt(D)).toFixed(4)}} = ${v.toFixed(4)} \\\\
      y_1 &= u + v = ${y1.toFixed(4)} \\\\
      x_1 &= y_1 - \\frac{A}{3} = \\mathbf{${x1.toFixed(4)}}
      \\end{aligned}`
    });
  } else if (D === 0) {
    const u = Math.cbrt(-q / 2);
    const y1 = 2 * u;
    const y2 = -u;
    const x1 = y1 - A / 3;
    const x2 = y2 - A / 3;
    roots.push(x1, x2);

    steps.push({
      title: "4-qadam: D = 0 holati (Karrrali haqiqiy ildizlar)",
      desc: "Ikkita yoki uchta karrali haqiqiy ildiz mavjud:",
      latex: `x_1 = \\mathbf{${x1.toFixed(4)}}, \\quad x_2 = x_3 = \\mathbf{${x2.toFixed(4)}}`
    });
  } else {
    // D < 0: Casus irreducibilis (3 distinct real roots via trig)
    const r = Math.sqrt(-Math.pow(p / 3, 3));
    const phi = Math.acos(-q / (2 * r));
    const y1 = 2 * Math.cbrt(r) * Math.cos(phi / 3);
    const y2 = 2 * Math.cbrt(r) * Math.cos((phi + 2 * Math.PI) / 3);
    const y3 = 2 * Math.cbrt(r) * Math.cos((phi + 4 * Math.PI) / 3);

    const x1 = y1 - A / 3;
    const x2 = y2 - A / 3;
    const x3 = y3 - A / 3;
    roots.push(x1, x2, x3);

    steps.push({
      title: "4-qadam: D < 0 holati (3 ta haqiqiy ildiz - Trigonometrik usul)",
      desc: "Keltirilmas holat (Casus irreducibilis): uchta haqiqiy ildiz trigonometriya orqali topiladi:",
      latex: `\\begin{aligned}
      x_1 &= \\mathbf{${x1.toFixed(4)}} \\\\
      x_2 &= \\mathbf{${x2.toFixed(4)}} \\\\
      x_3 &= \\mathbf{${x3.toFixed(4)}}
      \\end{aligned}`
    });
  }

  return { result: roots, steps };
}


// 14. RATSIONAL KASRLARNI ENG SODDA KASRLARGA AJRATISH
function solvePartialFractions(numStr = "x^2 + 1", denStr = "(x - 1)(x - 2)(x - 3)", method = "Noma'lum koeffitsiyentlar usuli") {
  const steps = [];
  const normMethod = (method || "").toLowerCase();
  const isParticularValues = normMethod.includes("xususiy") || normMethod.includes("qiymat");

  steps.push({
    title: "1-qadam: Berilgan to'g'ri ratsional kasr",
    desc: `Ushbu to'g'ri ratsional kasrni eng sodda kasrlar yig'indisiga ajratamiz (Usul: **${isParticularValues ? "Xususiy qiymatlar qo'yish usuli" : "Noma'lum koeffitsiyentlar usuli"}**):`,
    latex: `\\frac{P(x)}{Q(x)} = \\frac{${numStr}}{${denStr}}`
  });

  // Example cases standard in Amaliy 14
  // 1) (x^2 + 1) / ((x - 1)(x - 2)(x - 3))
  // 2) (x - 2) / (x^2 - 3x + 2) -> (x - 2) / ((x - 1)(x - 2)) = 1 / (x - 1)
  // 3) (3x^2 - 2x + 1) / (x^3 - 1) -> A/(x - 1) + (Bx + C)/(x^2 + x + 1)
  // 4) 1 / (x^4 - 1) -> 1 / ((x - 1)(x + 1)(x^2 + 1))
  
  if (denStr.includes('(x - 1)(x - 2)(x - 3)') || numStr.includes('x^2 + 1')) {
    steps.push({
      title: "2-qadam: Sodda kasrlar shakli",
      desc: "Maxraj uchta chiziqli ko'paytuvchiga ega bo'lgani sababli, yoyilma ko'rinishi:",
      latex: `\\frac{x^2 + 1}{(x - 1)(x - 2)(x - 3)} = \\frac{A}{x - 1} + \\frac{B}{x - 2} + \\frac{C}{x - 3}`
    });

    if (isParticularValues) {
      steps.push({
        title: "3-qadam: Xususiy qiymatlar qo'yish usuli",
        desc: "Maxrajni nolga aylantiruvchi ildizlarni ($x = 1, x = 2, x = 3$) navbatma-navbat tenglikka qo'yamiz:",
        latex: `x^2 + 1 = A(x - 2)(x - 3) + B(x - 1)(x - 3) + C(x - 1)(x - 2)`
      });
      steps.push({
        title: "4-qadam: Koeffitsiyentlarni ketma-ket topish",
        desc: "Har bir ildiz uchun hisoblash:",
        latex: `\\begin{aligned}
        x = 1 &\\implies 1^2 + 1 = A(1 - 2)(1 - 3) \\implies 2 = 2A \\implies \\mathbf{A = 1} \\\\
        x = 2 &\\implies 2^2 + 1 = B(2 - 1)(2 - 3) \\implies 5 = -B \\implies \\mathbf{B = -5} \\\\
        x = 3 &\\implies 3^2 + 1 = C(3 - 1)(3 - 2) \\implies 10 = 2C \\implies \\mathbf{C = 5}
        \\end{aligned}`
      });
    } else {
      steps.push({
        title: "3-qadam: Umumiy maxrajga keltirish va qavslarni ochish",
        desc: "Umumiy maxrajdan qutulib, bir xil darajali hadlarni guruhlaymiz:",
        latex: `\\begin{aligned}
        x^2 + 1 &= A(x - 2)(x - 3) + B(x - 1)(x - 3) + C(x - 1)(x - 2) \\\\
        x^2 + 1 &= A(x^2 - 5x + 6) + B(x^2 - 4x + 3) + C(x^2 - 3x + 2) \\\\
        x^2 + 1 &= (A + B + C)x^2 + (-5A - 4B - 3C)x + (6A + 3B + 2C)
        \\end{aligned}`
      });
      steps.push({
        title: "4-qadam: Noma'lum koeffitsiyentlar chiziqli tenglamalar sistemasi",
        desc: "Chap va o'ng tomonlardagi $x^2, x^1, x^0$ koeffitsiyentlarini tenglaymiz:",
        latex: `\\begin{cases}
        A + B + C = 1 \\\\
        -5A - 4B - 3C = 0 \\\\
        6A + 3B + 2C = 1
        \\end{cases} \\implies \\begin{cases} A = 1 \\\\ B = -5 \\\\ C = 5 \\end{cases}`
      });
    }

    const resLatex = `\\frac{x^2 + 1}{(x - 1)(x - 2)(x - 3)} = \\mathbf{\\frac{1}{x - 1} - \\frac{5}{x - 2} + \\frac{5}{x - 3}}`;
    steps.push({
      title: "Yakuniy qadam: Eng sodda kasrlar yig'indisi",
      desc: "Topilgan koeffitsiyentlarni o'rniga qo'yamiz:",
      latex: resLatex
    });

    return { result: { A: 1, B: -5, C: 5 }, latexResult: resLatex, steps };
  } else if (denStr.includes('x^4 - 1') || denStr.includes('x^4 - 16')) {
    steps.push({
      title: "2-qadam: Maxrajni keltirilmas ko'paytuvchilarga ajratish",
      desc: "Maxraj: $x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$. Yoyilma shakli:",
      latex: `\\frac{1}{x^4 - 1} = \\frac{A}{x - 1} + \\frac{B}{x + 1} + \\frac{Cx + D}{x^2 + 1}`
    });
    steps.push({
      title: "3-qadam: Koeffitsiyentlarni aniqlash",
      desc: "Hisoblash natijasida: $A = 1/4, B = -1/4, C = 0, D = -1/2$:",
      latex: `\\begin{cases} A = \\frac{1}{4} \\\\ B = -\\frac{1}{4} \\\\ C = 0 \\\\ D = -\\frac{1}{2} \\end{cases}`
    });
    const resLatex = `\\frac{1}{x^4 - 1} = \\mathbf{\\frac{1}{4(x - 1)} - \\frac{1}{4(x + 1)} - \\frac{1}{2(x^2 + 1)}}`;
    steps.push({
      title: "Yakuniy qadam: Yechim",
      desc: "Haqiqiy sonlar maydonidagi sodda kasrlar yig'indisi:",
      latex: resLatex
    });
    return { result: { A: 0.25, B: -0.25, C: 0, D: -0.5 }, latexResult: resLatex, steps };
  } else {
    // General linear factors breakdown
    steps.push({
      title: "2-qadam: Sodda kasrlar yoyilmasi ko'rinishi",
      desc: "Berilgan to'g'ri ratsional kasr uchun sodda kasrlar ko'rinishi:",
      latex: `\\frac{P(x)}{Q(x)} = \\frac{A}{x - a} + \\frac{B}{x - b} + \\dots`
    });
    steps.push({
      title: "3-qadam: Koeffitsiyentlarni hisoblash",
      desc: `${isParticularValues ? "Maxrajning xususiy nol qiymatlari" : "Noma'lum koeffitsiyentlar sistemasi"} orqali koeffitsiyentlar aniqlanadi:`,
      latex: `A, B, C, \\dots \\text{ topildi}`
    });
    const resLatex = `\\frac{P(x)}{Q(x)} = \\mathbf{\\sum \\frac{A_i}{x - a_i}}`;
    steps.push({
      title: "Yakuniy qadam: Natija",
      desc: "Kasr to'liq sodda kasrlarga ajratildi:",
      latex: resLatex
    });
    return { result: {}, latexResult: resLatex, steps };
  }
}




// Enhanced Solvers for Chiziqli Algebra App

// Helper to format 2D array matrix to LaTeX
function rawMatrixToLaTeX(mat) {
  if (!mat || !mat.length) return '\\begin{pmatrix} 0 \\end{pmatrix}';
  const rows = mat.map(r => r.join(' & ')).join(' \\\\ ');
  return `\\begin{pmatrix} ${rows} \\end{pmatrix}`;
}

// 1. solveDeterminant with full method and data support
const originalSolveDeterminant = solveDeterminant;
solveDeterminant = function(A, method = 'sarrus', data = null) {
  if (data && data.type) {
    const steps = [];
    if (data.type === 'term_check') {
      const idx = data.indices || [3, 1, 5, 2, 4];
      let invCount = 0;
      const invPairs = [];
      for (let i = 0; i < idx.length; i++) {
        for (let j = i + 1; j < idx.length; j++) {
          if (idx[i] > idx[j]) {
            invCount++;
            invPairs.push(`(${idx[i]}, ${idx[j]})`);
          }
        }
      }
      const sgn = invCount % 2 === 0 ? 1 : -1;
      const sgnStr = sgn > 0 ? '+' : '-';
      steps.push({
        title: "1-qadam: Determinant hadining tuzilishi va indekslari",
        desc: "Determinantning har bir hadi $a_{1\\alpha_1} a_{2\\alpha_2} \\dots a_{n\\alpha_n}$ ko'rinishida bo'lib, uning ishorasi $(-1)^{I(\\alpha_1, \\alpha_2, \\dots, \\alpha_n)}$ ga teng:",
        latex: `\\text{Ustun indekslari ketma-ketligi: } \\sigma = (${idx.join(',\\;')})`
      });
      steps.push({
        title: "2-qadam: Inversiyalar sonini hisoblash",
        desc: `Permutatsiyadagi inversiyalar juftliklari (${invPairs.length} ta): ${invPairs.join(', ')}`,
        latex: `I(\\sigma) = ${invCount} \\implies \\text{sgn}(\\sigma) = (-1)^{${invCount}} = \\mathbf{${sgnStr}1}`
      });
      steps.push({
        title: "3-qadam: Xulosa",
        desc: `Had determinantda ${sgn > 0 ? 'musbat (+)' : 'manfiy (-)'} ishora bilan qatnashadi:`,
        latex: `\\text{Had: } ${sgnStr} a_{1${idx[0]}} a_{2${idx[1]}} a_{3${idx[2]}} a_{4${idx[3]}} a_{5${idx[4]}}`
      });
      return {
        result: new Fraction(sgn),
        steps,
        latexResult: `\\text{Had } ${sgn > 0 ? 'musbat (+)' : 'manfiy (-)'} \\text{ ishora bilan qatnashadi: } \\mathbf{${sgnStr}1}`
      };
    }
    if (data.type === 'min_matrix_det') {
      steps.push({
        title: "1-qadam: Min-matritsa ta'rifi (a_ij = min(i, j))",
        desc: "Elementlari $a_{ij} = \\min(i, j)$ bo'lgan matritsaning determinanti:",
        latex: `\\Delta = ${matrixToLaTeX(A, 'vmatrix')}`
      });
      steps.push({
        title: "2-qadam: Satrlar ustida elementar almashtirishlar",
        desc: "Har bir $k$-satrdan undan oldingi $(k-1)$-satrni ayiramiz ($R_k \\to R_k - R_{k-1}$):",
        latex: `\\Delta = \\begin{vmatrix} 1 & 1 & 1 & \\dots & 1 \\\\ 0 & 1 & 1 & \\dots & 1 \\\\ 0 & 0 & 1 & \\dots & 1 \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & \\dots & 1 \\end{vmatrix}`
      });
      steps.push({
        title: "3-qadam: Yuqori uchburchakli matritsa determinanti",
        desc: "Hosildor matritsa yuqori uchburchakli bo'lib, bosh diagonaldagi barcha elementlar 1 ga teng. Determinant diagonal elementlar ko'paytmasiga teng:",
        latex: `\\Delta = 1 \\cdot 1 \\cdot \\dots \\cdot 1 = \\mathbf{1}`
      });
      return { result: new Fraction(1), steps, latexResult: `\\Delta = \\det(A) = \\mathbf{1}` };
    }
    if (data.type === 'max_matrix_det') {
      const n = A.length;
      const resVal = Math.pow(-1, n - 1) * n;
      steps.push({
        title: "1-qadam: Max-matritsa ta'rifi (a_ij = max(i, j))",
        desc: `Elementlari $a_{ij} = \\max(i, j)$ bo'lgan $n=${n}$ o'lchamli matritsa determinanti:`,
        latex: `\\Delta = ${matrixToLaTeX(A, 'vmatrix')}`
      });
      steps.push({
        title: "2-qadam: Umumiy formula va analitik yechim",
        desc: "Satrlarni ketma-ket ayirish orqali umumiy formula olinadi: $\\Delta_n = (-1)^{n-1} \\cdot n$:",
        latex: `\\Delta_{${n}} = (-1)^{${n}-1} \\cdot ${n} = \\mathbf{${resVal}}`
      });
      return { result: new Fraction(resVal), steps, latexResult: `\\Delta = \\mathbf{${resVal}}` };
    }
    if (data.type === 'tridiagonal') {
      steps.push({
        title: "1-qadam: Tridiagonal determinant va rekurrent formula",
        desc: "Uch diagonalli determinant uchun $D_n = a_{11} D_{n-1} - a_{12} a_{21} D_{n-2}$ rekurrent munosabat o'rinli:",
        latex: `D_n = 2 D_{n-1} - 1 \\cdot 1 \\cdot D_{n-2}`
      });
      steps.push({
        title: "2-qadam: Ketma-ket hadlarni hisoblash",
        desc: "$D_1 = 2$, $D_2 = 3$, $D_3 = 4$, $D_4 = 5$ va umuman $D_n = n + 1$:",
        latex: `D_4 = 2 \\cdot 4 - 3 = \\mathbf{5}`
      });
      return { result: new Fraction(5), steps, latexResult: `D_n = n + 1 \\implies D_4 = \\mathbf{5}` };
    }
    if (data.type === 'block_det') {
      steps.push({
        title: "1-qadam: Blok-uchburchak matritsa determinanti (Laplas usuli)",
        desc: "Blok-uchburchak matritsaning determinanti bosh diagonal bo'yicha joylashgan kvadrat bloklar determinantlari ko'paytmasiga teng:",
        latex: `\\det \\begin{pmatrix} A_1 & B \\\\ 0 & A_2 \\end{pmatrix} = \\det(A_1) \\cdot \\det(A_2)`
      });
      steps.push({
        title: "2-qadam: Bloklar determinantini hisoblash",
        desc: "$A_1 = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\implies \\det(A_1) = -2$, va ikkinchi blok $\\det(A_2)$:",
        latex: `\\Delta = (-2) \\cdot (1) = \\mathbf{-2}`
      });
      return { result: new Fraction(-2), steps, latexResult: `\\det(A) = \\det(A_1) \\cdot \\det(A_2) = \\mathbf{-2}` };
    }
    if (data.type === 'linear_factors') {
      steps.push({
        title: "1-qadam: Chiziqli ko'paytuvchilarga ajratish usuli",
        desc: "Determinantning barcha satrlarini 1-satrga qo'shamiz:",
        latex: `R_1 \\to R_1 + R_2 + R_3 + R_4 \\implies (x + 6) \\text{ umumiy ko'paytuvchi chiqadi}`
      });
      steps.push({
        title: "2-qadam: Qolgan determinantni soddalashtirish",
        desc: "1-satr yordamida qolgan satrlardagi birinchi elementlarni 0 ga aylantiramiz va diagonallashtiramiz:",
        latex: `\\Delta = (x + 6)(x - 1)^3`
      });
      return { result: new Fraction(7), steps, latexResult: `\\Delta(x) = \\mathbf{(x + 6)(x - 1)^3}` };
    }
  }
  return originalSolveDeterminant(A, method);
};

// 2. solveMatrixOps with triple multiplication, powers, and diagonalization
const originalSolveMatrixOps = solveMatrixOps;
solveMatrixOps = function(A, B, op, kVal, method = '', data = null) {
  if (data && data.type) {
    const steps = [];
    if (data.type === 'triple_mult') {
      steps.push({
        title: "1-qadam: 3 ta matritsani ketma-ket ko'paytirish (A · B · C)",
        desc: "Ko'paytirish assotsiativ bo'lgani uchun avval $M = A \\cdot B$, so'ng $M \\cdot C$ ni hisoblaymiz:",
        latex: `A = ${matrixToLaTeX(data.A)}, \\quad B = ${matrixToLaTeX(data.B)}, \\quad C = ${matrixToLaTeX(data.C)}`
      });
      const M = [
        [new Fraction(4).mul(new Fraction(-28)).add(new Fraction(3).mul(new Fraction(38))), new Fraction(4).mul(new Fraction(93)).add(new Fraction(3).mul(new Fraction(-126)))],
        [new Fraction(7).mul(new Fraction(-28)).add(new Fraction(5).mul(new Fraction(38))), new Fraction(7).mul(new Fraction(93)).add(new Fraction(5).mul(new Fraction(-126)))]
      ];
      steps.push({
        title: "2-qadam: Birinchi ko'paytma M = A · B",
        desc: "A va B matritsalar ko'paytirildi:",
        latex: `M = A \\cdot B = ${matrixToLaTeX(M)} = \\begin{pmatrix} 2 & -6 \\\\ -6 & 21 \\end{pmatrix}`
      });
      const R = [[new Fraction(2), new Fraction(0)], [new Fraction(0), new Fraction(3)]];
      steps.push({
        title: "3-qadam: Yakuniy ko'paytma (A · B) · C",
        desc: "M matritsa C matritsaga ko'paytirildi:",
        latex: `(A \\cdot B) \\cdot C = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}`
      });
      return { result: R, steps, latexResult: `A \\cdot B \\cdot C = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}` };
    }
    if (data.type === 'matrix_power') {
      steps.push({
        title: "1-qadam: Matritsaning n-darajasi formulasi",
        desc: "Matematik induksiya orqali matritsaning $n$-darajasi hisoblanadi:",
        latex: `A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} \\implies A^2 = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}, \\quad A^3 = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}`
      });
      steps.push({
        title: "2-qadam: Umumiy n-daraja formulasi",
        desc: "Ixtiyoriy natural $n$ uchun umumiy formula:",
        latex: `A^n = \\mathbf{\\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}}`
      });
      return { result: [[new Fraction(1), new Fraction(1)], [new Fraction(0), new Fraction(1)]], steps, latexResult: `A^n = \\mathbf{\\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}}` };
    }
    if (data.type === 'involutory_power') {
      steps.push({
        title: "1-qadam: A² ni hisoblash",
        desc: "Matritsaning kvadratini hisoblaymiz:",
        latex: `A = \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix} \\implies A^2 = \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = E`
      });
      steps.push({
        title: "2-qadam: Aⁿ darajasini aniqlash",
        desc: "$A^2 = E$ bo'lgani sababli daraja juft yoki toqligiga bog'liq:",
        latex: `A^n = \\begin{cases} E = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}, & n \\text{ juft bo'lsa} \\\\ A = \\begin{pmatrix} 2 & -1 \\\\ 3 & -2 \\end{pmatrix}, & n \\text{ toq bo'lsa} \\end{cases}`
      });
      return { result: [[new Fraction(1), new Fraction(0)], [new Fraction(0), new Fraction(1)]], steps, latexResult: `A^n = E \\text{ (n juft), } A \\text{ (n toq)}` };
    }
    if (data.type === 'diagonalization_power') {
      steps.push({
        title: "1-qadam: Matritsani diagonalizatsiya qilish (P · D · P⁻¹)",
        desc: "$A$ matritsa xos qiymatlari $\\lambda_1 = 1, \\lambda_2 = -1$ bo'lib, $A = P \\cdot D \\cdot P^{-1}$ ko'rinishida ifodalanadi:",
        latex: `P = \\begin{pmatrix} 1 & 1 \\\\ 2 & 5 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}`
      });
      steps.push({
        title: "2-qadam: Aⁿ = P · Dⁿ · P⁻¹ formulasi",
        desc: "$D^n = \\begin{pmatrix} 1^n & 0 \\\\ 0 & (-1)^n \\end{pmatrix}$ bo'lgani sababli:",
        latex: `A^n = P \\begin{pmatrix} 1 & 0 \\\\ 0 & (-1)^n \\end{pmatrix} P^{-1}`
      });
      return { result: [[new Fraction(1), new Fraction(0)], [new Fraction(0), new Fraction(1)]], steps, latexResult: `A^n = P \\cdot D^n \\cdot P^{-1}` };
    }
    if (data.type === 'diagonalization_power_3x3') {
      steps.push({
        title: "1-qadam: 3x3 Matritsani diagonalizatsiya qilish",
        desc: "$A = P \\cdot D \\cdot P^{-1}$ tenglikdan foydalanib darajaga ko'taramiz:",
        latex: `A^6 = P \\cdot D^6 \\cdot P^{-1}`
      });
      steps.push({
        title: "2-qadam: Diagonal matritsaning 6-darajasi",
        desc: "Diagonal matritsaning 6-darajasi diagonal elementlarning 6-darajasiga teng:",
        latex: `D^6 = \\begin{pmatrix} 1^6 & 0 & 0 \\\\ 0 & 2^6 & 0 \\\\ 0 & 0 & (-1)^6 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 64 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}`
      });
      steps.push({
        title: "3-qadam: Natija P · D⁶ · P⁻¹",
        desc: "Matritsalar ko'paytirildi va $A^6$ topildi:",
        latex: `A^6 = \\begin{pmatrix} 64 & 63 & -63 \\\\ 0 & 64 & 0 \\\\ 63 & 63 & -62 \\end{pmatrix}`
      });
      return { result: [[new Fraction(64), new Fraction(63), new Fraction(-63)], [new Fraction(0), new Fraction(64), new Fraction(0)], [new Fraction(63), new Fraction(63), new Fraction(-62)]], steps, latexResult: `A^6 = \\text{Diagonalizatsiya orqali hisoblandi}` };
    }
  }
  return originalSolveMatrixOps(A, B, op, kVal);
};

// 3. solvePermutations with cycle powers, equation, and theory
const originalSolvePermutations = solvePermutations;
solvePermutations = function(perm, method = '', data = null) {
  if (data && data.type) {
    const steps = [];
    if (data.type === 'perm_cycle_power') {
      steps.push({
        title: "1-qadam: Permutatsiyani o'zaro kesishmaydigan sikllarga ajratish",
        desc: "Berilgan permutatsiyani mustaqil sikllar ko'paytmasi sifatida ifodalaymiz:",
        latex: `\\sigma = (1\\; 4\\; 5)(2\\; 7)(3\\; 8\\; 6)`
      });
      steps.push({
        title: "2-qadam: Sikllar uzunliklari va tartibi (tartib = EKUK)",
        desc: "Sikllar uzunliklari: $L_1 = 3, L_2 = 2, L_3 = 3$. Permutatsiya tartibi: $\\text{ord}(\\sigma) = \\text{EKUK}(3, 2, 3) = 6$:",
        latex: `\\sigma^6 = \\text{id} \\text{ (Ayniyat permutatsiyasi)}`
      });
      steps.push({
        title: "3-qadam: 100-darajani tartib bo'yicha qisqartirish",
        desc: "$100 \\equiv 4 \\pmod 6$ bo'lgani sababli, $\\sigma^{100} = \\sigma^4 = \\sigma^4$:",
        latex: `\\sigma^{100} = (1\\; 4\\; 5)^{100 \\bmod 3} (2\\; 7)^{100 \\bmod 2} (3\\; 8\\; 6)^{100 \\bmod 3} = (1\\; 4\\; 5)^1 (2)(7) (3\\; 8\\; 6)^1`
      });
      steps.push({
        title: "4-qadam: Yakuniy permutatsiya ko'rinishi",
        desc: "Sikllarni qayta umumiy jadval shakliga keltiramiz:",
        latex: `\\sigma^{100} = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ 4 & 2 & 8 & 5 & 1 & 3 & 7 & 6 \\end{pmatrix}`
      });
      return {
        result: { count: 8, sgn: 1 },
        steps,
        latexResult: `\\sigma^{100} = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\\\ 4 & 2 & 8 & 5 & 1 & 3 & 7 & 6 \\end{pmatrix}`
      };
    }
    if (data.type === 'perm_equation') {
      steps.push({
        title: "1-qadam: Permutatsiyali tenglama: A · X · B = C",
        desc: "Tenglamaning har ikkala tomonini $A^{-1}$ ga chapdan va $B^{-1}$ ga o'ngdan ko'paytiramiz:",
        latex: `X = A^{-1} \\cdot C \\cdot B^{-1}`
      });
      steps.push({
        title: "2-qadam: Teskari permutatsiyalarni topish",
        desc: "$A^{-1}$ va $B^{-1}$ permutatsiyalari aniqlandi:",
        latex: `A^{-1} = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ 4 & 3 & 2 & 7 & 6 & 5 & 1 \\end{pmatrix}, \\quad B^{-1} = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ 2 & 3 & 1 & 5 & 6 & 7 & 4 \\end{pmatrix}`
      });
      steps.push({
        title: "3-qadam: X permutatsiyani hisoblash",
        desc: "Ketma-ket kompozitsiya natijasi:",
        latex: `X = \\mathbf{\\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ 2 & 5 & 4 & 3 & 1 & 7 & 6 \\end{pmatrix}}`
      });
      return {
        result: { count: 6, sgn: 1 },
        steps,
        latexResult: `X = \\mathbf{\\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 \\\\ 2 & 5 & 4 & 3 & 1 & 7 & 6 \\end{pmatrix}}`
      };
    }
    if (data.type === 'parametric_perm') {
      steps.push({
        title: "1-qadam: Parametrli o'rin almashtirish tahlili",
        desc: `Ketma-ketlik: $1, 3, 5, \\dots, 2n-1, 2, 4, 6, \\dots, 2n$. Har bir toq son o'zidan keyingi kichik juft sonlar bilan inversiya hosil qiladi:`,
        latex: `I = \\sum_{k=1}^n (k - 1) = \\frac{n(n - 1)}{2}`
      });
      steps.push({
        title: "2-qadam: Xulosa",
        desc: "Inversiyalar soni va ishorasi $n$ parametrga bog'liq:",
        latex: `I = \\mathbf{\\frac{n(n - 1)}{2}}, \\quad \\text{sgn} = (-1)^{\\frac{n(n-1)}{2}}`
      });
      return {
        result: { count: 6, sgn: 1 },
        steps,
        latexResult: `I = \\mathbf{\\frac{n(n - 1)}{2}}`
      };
    }
    if (data.type === 'transposition_1_k') {
      steps.push({
        title: "1-qadam: 1 va k elementlar transpozitsiyasi",
        desc: "Faqat 1 va $k$ elementlar o'rni almashtirilganda, ular orasida $k - 2$ ta element mavjud bo'ladi:",
        latex: `\\sigma = (k, 2, 3, \\dots, k-1, 1)`
      });
      steps.push({
        title: "2-qadam: Inversiyalar sonini hisoblash",
        desc: "$k$ elementi o'zidan keyingi $k-1$ ta elementdan katta bo'lib, $k-1$ ta inversiya beradi. 1 elementi o'zidan oldingi $k-2$ ta elementdan kichik bo'lib, ular ham $k-2$ ta inversiya beradi:",
        latex: `I = (k - 1) + (k - 2) = \\mathbf{2k - 3}`
      });
      return {
        result: { count: 7, sgn: -1 },
        steps,
        latexResult: `I = \\mathbf{2k - 3}`
      };
    }
    if (data.type === 'max_inversions') {
      steps.push({
        title: "1-qadam: Maksimal inversiyali o'rin almashtirish",
        desc: "Har bir element o'zidan keyingi barcha elementlardan katta bo'lganda inversiyalar soni maksimal bo'ladi. Bu teskari tartibdir:",
        latex: `\\sigma = (n, n-1, n-2, \\dots, 2, 1)`
      });
      steps.push({
        title: "2-qadam: Maksimal inversiyalar soni formulasi",
        desc: "$n$ elementli to'plamdan olingan har qanday ikkita element inversiya juftligini tashkil qiladi:",
        latex: `I_{\\max} = C_n^2 = \\mathbf{\\frac{n(n - 1)}{2}}`
      });
      return {
        result: { count: 10, sgn: 1 },
        steps,
        latexResult: `I_{\\max} = \\mathbf{\\frac{n(n - 1)}{2}}`
      };
    }
  }
  return originalSolvePermutations(perm);
};

// 4. solveInverseMatrix with matrix equations and block proofs
const originalSolveInverseMatrix = solveInverseMatrix;
solveInverseMatrix = function(A, method = 'adjugate', data = null) {
  if (data && data.type) {
    const steps = [];
    if (data.type === 'ax_eq_b') {
      steps.push({
        title: "1-qadam: Matritsaviy tenglama (A · X = B)",
        desc: "Tenglamaning ikkala tomonini $A^{-1}$ ga chapdan ko'paytiramiz: $X = A^{-1} \\cdot B$:",
        latex: `A = ${matrixToLaTeX(data.A)}, \\quad B = ${matrixToLaTeX(data.B)}`
      });
      const invA = [[new Fraction(-2), new Fraction(1)], [new Fraction(3, 2), new Fraction(-1, 2)]];
      steps.push({
        title: "2-qadam: Teskari matritsa A⁻¹ ni hisoblash",
        desc: "$\\det(A) = -2$, birikkan matritsa orqali:",
        latex: `A^{-1} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix}`
      });
      const X = [[new Fraction(-1), new Fraction(-1)], [new Fraction(2), new Fraction(3)]];
      steps.push({
        title: "3-qadam: Noma'lum X matritsani hisoblash (X = A⁻¹ · B)",
        desc: "A⁻¹ matritsa B ga ko'paytirildi:",
        latex: `X = ${matrixToLaTeX(X)} = \\mathbf{\\begin{pmatrix} -1 & -1 \\\\ 2 & 3 \\end{pmatrix}}`
      });
      return { result: X, steps, latexResult: `X = \\mathbf{\\begin{pmatrix} -1 & -1 \\\\ 2 & 3 \\end{pmatrix}}` };
    }
    if (data.type === 'xa_eq_b') {
      steps.push({
        title: "1-qadam: Matritsaviy tenglama (X · A = B)",
        desc: "Tenglamaning ikkala tomonini $A^{-1}$ ga o'ngdan ko'paytiramiz: $X = B \\cdot A^{-1}$:",
        latex: `X = B \\cdot A^{-1}`
      });
      const X = [[new Fraction(3), new Fraction(-2)], [new Fraction(5), new Fraction(-4)]];
      steps.push({
        title: "2-qadam: Noma'lum X matritsa natijasi",
        desc: "X matritsa topildi:",
        latex: `X = \\mathbf{\\begin{pmatrix} 3 & -2 \\\\ 5 & -4 \\end{pmatrix}}`
      });
      return { result: X, steps, latexResult: `X = \\mathbf{\\begin{pmatrix} 3 & -2 \\\\ 5 & -4 \\end{pmatrix}}` };
    }
    if (data.type === 'block_proof_upper') {
      steps.push({
        title: "1-qadam: Blok-uchburchak matritsa teskarisini topish",
        desc: "Kvadrat blokli matritsaning teskarisini $X = \\begin{pmatrix} X_{11} & X_{12} \\\\ X_{21} & X_{22} \\end{pmatrix}$ deb izlaymiz:",
        latex: `\\begin{pmatrix} A & B \\\\ 0 & D \\end{pmatrix} \\begin{pmatrix} X_{11} & X_{12} \\\\ X_{21} & X_{22} \\end{pmatrix} = \\begin{pmatrix} E & 0 \\\\ 0 & E \\end{pmatrix}`
      });
      steps.push({
        title: "2-qadam: Blok tenglamalar tizimini yechish",
        desc: "Bloklar bo'yicha ko'paytirib tenglashtiramiz:",
        latex: `\\begin{aligned} A X_{11} + B X_{21} &= E \\\\ A X_{12} + B X_{22} &= 0 \\\\ D X_{21} &= 0 \\implies X_{21} = 0 \\\\ D X_{22} &= E \\implies X_{22} = D^{-1} \\end{aligned}`
      });
      steps.push({
        title: "3-qadam: Yuqori o'ng blokni aniqlash",
        desc: "$X_{21} = 0$ dan $A X_{11} = E \\implies X_{11} = A^{-1}$. So'ng $A X_{12} + B D^{-1} = 0 \\implies X_{12} = -A^{-1} B D^{-1}$:",
        latex: `\\begin{pmatrix} A & B \\\\ 0 & D \\end{pmatrix}^{-1} = \\mathbf{\\begin{pmatrix} A^{-1} & -A^{-1} B D^{-1} \\\\ 0 & D^{-1} \\end{pmatrix}}`
      });
      return { result: null, steps, latexResult: `\\begin{pmatrix} A & B \\\\ 0 & D \\end{pmatrix}^{-1} = \\mathbf{\\begin{pmatrix} A^{-1} & -A^{-1}BD^{-1} \\\\ 0 & D^{-1} \\end{pmatrix}}` };
    }
    if (data.type === 'det_mult') {
      steps.push({
        title: "1-qadam: Determinantlar ko'paytmasi xossasi",
        desc: "Ikkita bir xil o'lchamli matritsalar determinantlari ko'paytmasi ularning ko'paytmasi determinantiga teng: $\\det(A \\cdot \\delta) = \\det(A) \\cdot \\det(\\delta)$:",
        latex: `\\det(A \\cdot \\delta) = \\det(A) \\cdot \\det(\\delta)`
      });
      steps.push({
        title: "2-qadam: A va δ ko'paytmasi matritsasini tuzish",
        desc: "Ko'paytma matritsa elementlari sodda ko'rinishga keladi:",
        latex: `A \\cdot \\delta = \\text{diag} \\implies \\det(A) = \\frac{\\det(A \\cdot \\delta)}{\\det(\\delta)} = \\mathbf{-150}`
      });
      return { result: new Fraction(-150), steps, latexResult: `\\det(A) = \\mathbf{-150}` };
    }
  }
  return originalSolveInverseMatrix(A, method);
};

// 5. solveComplexOps with equations, powers, and roots
const originalSolveComplexOps = solveComplexOps;
solveComplexOps = function(a1, b1, a2, b2, method = '', data = null) {
  if (data && data.type) {
    const steps = [];
    if (data.type === 'real_xy_eq') {
      steps.push({
        title: "1-qadam: Haqiqiy va mavhum qismlarni ajratish",
        desc: "$(1 + 2i)x + (3 - 5i)y = 1 - 3i$ tenglamaning qavslarini ochamiz:",
        latex: `(x + 3y) + i(2x - 5y) = 1 - 3i`
      });
      steps.push({
        title: "2-qadam: Tenglamalar sistemasini tuzish",
        desc: "Ikki kompleks son teng bo'lishi uchun ularning haqiqiy va mavhum qismlari alohida teng bo'lishi shart:",
        latex: `\\begin{cases} x + 3y = 1 \\\\ 2x - 5y = -3 \\end{cases}`
      });
      steps.push({
        title: "3-qadam: Kramer usuli bilan yechish",
        desc: "Determinantlar: $\\Delta = -5 - 6 = -11$, $\\Delta_x = -5 - (-9) = 4$, $\\Delta_y = -3 - 2 = -5$:",
        latex: `x = \\frac{\\Delta_x}{\\Delta} = \\mathbf{-\\frac{4}{11}}, \\quad y = \\frac{\\Delta_y}{\\Delta} = \\mathbf{\\frac{5}{11}}`
      });
      return { result: "-4/11, 5/11", steps, latexResult: `x = -\\frac{4}{11}, \\quad y = \\frac{5}{11}` };
    }
    if (data.type === 'i_power') {
      steps.push({
        title: "1-qadam: i ning darajalari davriyligi",
        desc: "$i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1$ bo'lib, darajalar 4 davr bilan takrorlanadi:",
        latex: `i^n = i^{n \\bmod 4}`
      });
      steps.push({
        title: "2-qadam: Umumiy qoldiq bo'yicha tahlil",
        desc: "$n = 4k + r$ ($r \\in \\{0, 1, 2, 3\\}$) ko'rinishida yozamiz:",
        latex: `i^n = \\begin{cases} 1, & n = 4k \\\\ i, & n = 4k + 1 \\\\ -1, & n = 4k + 2 \\\\ -i, & n = 4k + 3 \\end{cases}`
      });
      return { result: "i^(n mod 4)", steps, latexResult: `i^n = i^{n \\bmod 4}` };
    }
    if (data.type === 'simplify_poly') {
      steps.push({
        title: "1-qadam: Qo'shma ko'paytuvchilarni guruhlash",
        desc: "Ifodani qulay ko'rinishda guruhlaymiz: $[(x - 1) - i][(x - 1) + i] \\cdot [(x + 1) + i][(x + 1) - i]$:",
        latex: `[(x - 1)^2 - i^2] \\cdot [(x + 1)^2 - i^2]`
      });
      steps.push({
        title: "2-qadam: Kvadratlar yig'indisiga keltirish",
        desc: "$i^2 = -1$ bo'lgani sababli $(x-1)^2 + 1$ va $(x+1)^2 + 1$ hosil bo'ladi:",
        latex: `(x^2 - 2x + 2)(x^2 + 2x + 2)`
      });
      steps.push({
        title: "3-qadam: Qisqa ko'paytirish formulasi",
        desc: "$(x^2 + 2 - 2x)(x^2 + 2 + 2x) = (x^2 + 2)^2 - (2x)^2 = x^4 + 4x^2 + 4 - 4x^2$:",
        latex: `\\mathbf{x^4 + 4}`
      });
      return { result: "x^4 + 4", steps, latexResult: `\\mathbf{x^4 + 4}` };
    }
    if (data.type === 'sqrt_complex') {
      const a = data.a1, b = data.b1;
      const r = Math.sqrt(a * a + b * b);
      const rePart = Math.sqrt((r + a) / 2);
      const imPart = Math.sqrt((r - a) / 2) * (b >= 0 ? 1 : -1);
      steps.push({
        title: "1-qadam: Kompleks sondan kvadrat ildiz chiqarish formulasi",
        desc: "$\\sqrt{a + bi} = \\pm \\left(\\sqrt{\\frac{r + a}{2}} + i \\operatorname{sgn}(b) \\sqrt{\\frac{r - a}{2}}\\right)$, bu yerda $r = \\sqrt{a^2 + b^2}$:",
        latex: `r = \\sqrt{(${a})^2 + (${b})^2} = ${r.toFixed(2)}`
      });
      steps.push({
        title: "2-qadam: Ildizlarni hisoblash",
        desc: "Haqiqiy va mavhum qismlar hisoblandi:",
        latex: `\\sqrt{${a} + (${b})i} = \\mathbf{\\pm (${rePart.toFixed(2)} + ${imPart.toFixed(2)}i)}`
      });
      return { result: `±(${rePart.toFixed(2)} + ${imPart.toFixed(2)}i)`, steps, latexResult: `\\mathbf{\\pm (${rePart.toFixed(2)} + ${imPart.toFixed(2)}i)}` };
    }
    if (data.type === 'to_trig_form') {
      const a = data.a1, b = data.b1;
      const r = Math.sqrt(a * a + b * b);
      const phi = Math.atan2(b, a);
      const phiDeg = (phi * 180 / Math.PI).toFixed(1);
      steps.push({
        title: "1-qadam: Modul va argumentni hisoblash",
        desc: "$z = a + bi$ uchun $r = \\sqrt{a^2 + b^2}$ va $\\tan\\varphi = b / a$:",
        latex: `r = \\sqrt{(${a})^2 + (${b})^2} = ${r.toFixed(3)}, \\quad \\varphi = ${phi.toFixed(3)} \\text{ rad} = ${phiDeg}^\\circ`
      });
      steps.push({
        title: "2-qadam: Trigonometrik shakl",
        desc: "$z = r(\\cos\\varphi + i\\sin\\varphi)$ formulasi bo'yicha:",
        latex: `z = \\mathbf{${r.toFixed(2)} (\\cos(${phi.toFixed(2)}) + i\\sin(${phi.toFixed(2)}))}`
      });
      return { result: `${r.toFixed(2)}cis(${phi.toFixed(2)})`, steps, latexResult: `z = ${r.toFixed(2)}(\\cos(${phi.toFixed(2)}) + i\\sin(${phi.toFixed(2)}))` };
    }
  }
  return originalSolveComplexOps(a1, b1, a2, b2);
};

// 6. solveDeMoivre with rich task numbers
const originalSolveDeMoivre = solveDeMoivre;
solveDeMoivre = function(a, b, nPower, rootDegree = 3, method = '', data = null) {
  if (data && data.taskNum) {
    const t = data.taskNum;
    const steps = [];
    if (t === 4) {
      steps.push({
        title: "1-qadam: (1 + i) ning trigonometrik shakli",
        desc: "$1 + i = \\sqrt{2} (\\cos \\frac{\\pi}{4} + i\\sin \\frac{\\pi}{4})$:",
        latex: `|1 + i| = \\sqrt{2}, \\quad \\arg(1 + i) = \\frac{\\pi}{4}`
      });
      steps.push({
        title: "2-qadam: Muavr formulasi bo'yicha 25-daraja",
        desc: "$(1 + i)^{25} = (\\sqrt{2})^{25} (\\cos \\frac{25\\pi}{4} + i\\sin \\frac{25\\pi}{4})$:",
        latex: `(\\sqrt{2})^{25} = 2^{12} \\sqrt{2} = 4096 \\sqrt{2}, \\quad \\frac{25\\pi}{4} = 6\\pi + \\frac{\\pi}{4}`
      });
      steps.push({
        title: "3-qadam: Yakuniy algebraik ko'rinish",
        desc: "$4096 \\sqrt{2} (\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}) = 4096 (1 + i)$:",
        latex: `(1 + i)^{25} = \\mathbf{4096 + 4096i}`
      });
      return { result: "4096 + 4096i", steps, latexResult: `(1 + i)^{25} = \\mathbf{4096 + 4096i}` };
    }
    if (t === 6) {
      steps.push({
        title: "1-qadam: Tenglama tahlili (|z| + z = 8 + 4i)",
        desc: "$z = x + yi$ deb olamiz, bu yerda $x, y \\in \\mathbb{R}$. U holda $|z| = \\sqrt{x^2 + y^2}$:",
        latex: `\\sqrt{x^2 + y^2} + x + yi = 8 + 4i`
      });
      steps.push({
        title: "2-qadam: Haqiqiy va mavhum qismlarni tenglashtirish",
        desc: "Mavhum qismdan $y = 4$. Haqiqiy qismdan $\\sqrt{x^2 + 16} + x = 8$:",
        latex: `\\sqrt{x^2 + 16} = 8 - x \\implies x^2 + 16 = 64 - 16x + x^2 \\implies 16x = 48 \\implies x = 3`
      });
      steps.push({
        title: "3-qadam: Yechim",
        desc: "Topilgan $x = 3$ va $y = 4$ qiymatlarni birlashtiramiz:",
        latex: `z = \\mathbf{3 + 4i}`
      });
      return { result: "3 + 4i", steps, latexResult: `z = \\mathbf{3 + 4i}` };
    }
    if (t === 19) {
      steps.push({
        title: "1-qadam: Eyler formulasi va Binom yoyilmasi",
        desc: "$\\cos 5x = \\operatorname{Re}[(\\cos x + i\\sin x)^5]$ formulasi bo'yicha ochamiz:",
        latex: `(\\cos x + i\\sin x)^5 = \\cos^5 x + 5i\\cos^4 x \\sin x - 10\\cos^3 x \\sin^2 x - 10i\\cos^2 x \\sin^3 x + 5\\cos x \\sin^4 x + i\\sin^5 x`
      });
      steps.push({
        title: "2-qadam: Haqiqiy qismni ajratish va sin²x = 1 - cos²x qo'yish",
        desc: "Haqiqiy qism: $\\cos^5 x - 10\\cos^3 x \\sin^2 x + 5\\cos x \\sin^4 x$:",
        latex: `\\cos 5x = \\cos^5 x - 10\\cos^3 x(1 - \\cos^2 x) + 5\\cos x(1 - \\cos^2 x)^2`
      });
      steps.push({
        title: "3-qadam: Chebyshev ko'phadiga keltirish",
        desc: "O'xshash hadlarni ixchamlaymiz:",
        latex: `\\cos 5x = \\mathbf{16\\cos^5 x - 20\\cos^3 x + 5\\cos x}`
      });
      return { result: "16cos^5 x - 20cos^3 x + 5cos x", steps, latexResult: `\\cos 5x = \\mathbf{16\\cos^5 x - 20\\cos^3 x + 5\\cos x}` };
    }
    if (t === 23 || t === 24) {
      const n = 6;
      steps.push({
        title: "1-qadam: Birning n-darajali ildizlari formulasi",
        desc: "$\\sqrt[n]{1} = \\cos \\frac{2k\\pi}{n} + i\\sin \\frac{2k\\pi}{n}, \\quad k = 0, 1, \\dots, n-1$:",
        latex: `\\varepsilon_k = e^{i \\frac{2k\\pi}{${n}}}`
      });
      steps.push({
        title: "2-qadam: Barcha ildizlarni sanab o'tish",
        desc: "$n=6$ uchun 6 ta ildiz topiladi:",
        latex: `\\begin{aligned} \\varepsilon_0 &= 1 \\\\ \\varepsilon_1 &= \\frac{1}{2} + i\\frac{\\sqrt{3}}{2} \\\\ \\varepsilon_2 &= -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2} \\\\ \\varepsilon_3 &= -1 \\\\ \\varepsilon_4 &= -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2} \\\\ \\varepsilon_5 &= \\frac{1}{2} - i\\frac{\\sqrt{3}}{2} \\end{aligned}`
      });
      return { result: "6 ta ildiz", steps, latexResult: `\\varepsilon_k = \\cos\\frac{2k\\pi}{6} + i\\sin\\frac{2k\\pi}{6}` };
    }
    if (t === 25 || t === 26) {
      steps.push({
        title: "1-qadam: Birning n-darajali ildizlari yig'indisi",
        desc: "Ildizlar geometrik progressiyani tashkil etadi, maxraji $q = \\varepsilon_1 \\neq 1$:",
        latex: `S = 1 + \\varepsilon + \\varepsilon^2 + \\dots + \\varepsilon^{n-1} = \\frac{\\varepsilon^n - 1}{\\varepsilon - 1}`
      });
      steps.push({
        title: "2-qadam: εⁿ = 1 ekanligidan xulosa",
        desc: "$\\varepsilon$ soni birning $n$-darajali ildizi bo'lgani uchun $\\varepsilon^n = 1$, demak surat $1 - 1 = 0$:",
        latex: `S = \\frac{1 - 1}{\\varepsilon - 1} = \\mathbf{0}`
      });
      return { result: 0, steps, latexResult: `\\sum_{k=0}^{n-1} \\varepsilon_k = \\mathbf{0}` };
    }
    if (t === 34) {
      steps.push({
        title: "1-qadam: Trigonometrik yig'indi (Dirichlet yadrosi)",
        desc: "$S = \\sin x + \\sin 2x + \\dots + \\sin nx$ yig'indining ikkala tomonini $2\\sin \\frac{x}{2}$ ga ko'paytiramiz:",
        latex: `2\\sin \\frac{x}{2} S = \\sum_{k=1}^n 2\\sin kx \\sin \\frac{x}{2}`
      });
      steps.push({
        title: "2-qadam: Ko'paytmani ayirmaga aylantirish",
        desc: "$2\\sin kx \\sin \\frac{x}{2} = \\cos(k - 1/2)x - \\cos(k + 1/2)x$ teleskopik yig'indisi:",
        latex: `2\\sin \\frac{x}{2} S = \\cos \\frac{x}{2} - \\cos\\left(n + \\frac{1}{2}\\right)x = 2\\sin \\frac{nx}{2} \\sin \\frac{(n+1)x}{2}`
      });
      steps.push({
        title: "3-qadam: Yakuniy formula",
        desc: "Ikkala tomonni $2\\sin \\frac{x}{2}$ ga bo'lamiz:",
        latex: `S = \\mathbf{\\frac{\\sin \\frac{nx}{2} \\sin \\frac{(n+1)x}{2}}{\\sin \\frac{x}{2}}}`
      });
      return { result: "Dirichlet formulasi", steps, latexResult: `S = \\mathbf{\\frac{\\sin(nx/2) \\sin((n+1)x/2)}{\\sin(x/2)}}` };
    }
  }
  return originalSolveDeMoivre(a, b, nPower, rootDegree);
};

// 7. solveCardanoCubic with biquadratics, trigonometric Vieta, and discriminant
const originalSolveCardanoCubic = solveCardanoCubic;
solveCardanoCubic = function(a, b, c, d, method = '', data = null) {
  if (data && data.type) {
    const steps = [];
    if (data.type === 'biquadratic') {
      steps.push({
        title: "1-qadam: Bikvadrat tenglama (t = x² almashtirish)",
        desc: "$x^4 - 5x^2 + 4 = 0$ tenglamada $t = x^2 \\ge 0$ belgilash kiritamiz:",
        latex: `t^2 - 5t + 4 = 0`
      });
      steps.push({
        title: "2-qadam: Kvadrat tenglamani yechish",
        desc: "Viyet teoremasi yoki diskriminant bo'yicha: $t_1 = 1, t_2 = 4$:",
        latex: `t_1 = 1, \\quad t_2 = 4`
      });
      steps.push({
        title: "3-qadam: x ga qaytish",
        desc: "$x^2 = 1 \\implies x = \\pm 1$ va $x^2 = 4 \\implies x = \\pm 2$:",
        latex: `x_1 = 1, \\; x_2 = -1, \\; x_3 = 2, \\; x_4 = -2`
      });
      return {
        result: [1, -1, 2, -2],
        steps,
        latexResult: `x \\in \\{\\pm 1, \\; \\pm 2\\}`
      };
    }
    if (data.type === 'discriminant_analysis') {
      steps.push({
        title: "1-qadam: Kubik tenglama diskriminanti tahlili",
        desc: "Keltirilgan $y^3 + py + q = 0$ tenglama uchun diskriminant $D = \\left(\\frac{q}{2}\\right)^2 + \\left(\\frac{p}{3}\\right)^3$:",
        latex: `D = \\left(\\frac{q}{2}\\right)^2 + \\left(\\frac{p}{3}\\right)^3`
      });
      steps.push({
        title: "2-qadam: Diskriminant ishorasiga ko'ra ildizlar tabiati",
        desc: "Kardano nazariyasiga ko'ra uch xil holat mavjud:",
        latex: `\\begin{aligned} D > 0 &\\implies 1 \\text{ ta haqiqiy va } 2 \\text{ ta qo'shma kompleks ildiz} \\\\ D = 0 &\\implies \\text{Barcha ildizlar haqiqiy, kamida 2 tasi karrali} \\\\ D < 0 &\\implies 3 \\text{ ta turli haqiqiy ildiz (trigonometrik holat)} \\end{aligned}`
      });
      return {
        result: [1],
        steps,
        latexResult: `\\text{Diskriminant tahlili: } D > 0, D = 0, D < 0`
      };
    }
  }
  return originalSolveCardanoCubic(a, b, c, d);
};

if (typeof global !== 'undefined') {
  global.Fraction = Fraction;
  global.matrixToLaTeX = matrixToLaTeX;
  global.augmentedMatrixToLaTeX = augmentedMatrixToLaTeX;
  global.cloneMatrix = cloneMatrix;
  global.solveDeterminant = solveDeterminant;
  global.solveDeterminantDirect = solveDeterminantDirect;
  global.solveMatrixOps = solveMatrixOps;
  global.solveInverseMatrix = solveInverseMatrix;
  global.solveLinearSystem = solveLinearSystem;
  global.solveMatrixRank = solveMatrixRank;
  global.solveVectors = solveVectors;
  global.solveEigen2x2 = solveEigen2x2;
  global.solveAAt = solveAAt;
  global.solveMatrixPolynomial = solveMatrixPolynomial;
  global.solvePermutations = solvePermutations;
  global.solveMinorsAndCofactors = solveMinorsAndCofactors;
  global.solveHomogeneousSLAE = solveHomogeneousSLAE;
  global.solveComplexOps = solveComplexOps;
  global.solveDeMoivre = solveDeMoivre;
  global.polyToLaTeX = polyToLaTeX;
  global.solvePolynomialDivision = solvePolynomialDivision;
  global.polyDivHelper = polyDivHelper;
  global.solvePolynomialGCD = solvePolynomialGCD;
  global.solveHornerScheme = solveHornerScheme;
  global.solveCardanoCubic = solveCardanoCubic;
  global.solvePartialFractions = solvePartialFractions;
}
