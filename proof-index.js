// Add proof numbers here while their pages are being prepared. They will remain
// visible in the route, but will be labelled "Coming soon" rather than linked.
export const comingSoonProofNumbers = [11, 12, 13, 14, 15, 16, 17, 18];

export const proofIndex = [
  {
    "number": 1,
    "slug": "algebraic-identity",
    "title": "Quadratic Binomial Expansion",
    "summary": "For integers $x$ and $y$, $(x + y)^2 = x^2 + 2xy + y^2$.",
    "ideas": [
      "algebraic structures",
      "rewriting",
      "normalisation",
      "ring"
    ]
  },
  {
    "number": 2,
    "slug": "ordered-arithmetic",
    "title": "Inequalities and Ordered Arithmetic",
    "summary": "Adding the same integer to both sides preserves an inequality.",
    "ideas": [
      "order",
      "typeclasses",
      "ordered algebra",
      "linarith"
    ]
  },
  {
    "number": 3,
    "slug": "set-intersection-commutative",
    "title": "Set Intersection Is Commutative",
    "summary": "Set intersection is commutative.",
    "ideas": [
      "sets",
      "membership",
      "conjunction",
      "extensionality"
    ]
  },
  {
    "number": 4,
    "slug": "odd-squares-are-odd",
    "title": "Odd Squares Are Odd",
    "summary": "The square of an odd natural number is odd.",
    "ideas": [
      "parity",
      "existential witnesses",
      "rcases",
      "use"
    ]
  },
  {
    "number": 5,
    "slug": "consecutive-naturals-coprime",
    "title": "Consecutive Natural Numbers Are Coprime",
    "summary": "Consecutive natural numbers are coprime.",
    "ideas": [
      "gcd",
      "divisibility",
      "coprimality",
      "natural-number arithmetic"
    ]
  },
  {
    "number": 6,
    "slug": "inclusion-exclusion-two-finite-sets",
    "title": "Inclusion-Exclusion for Two Finite Sets",
    "summary": "The cardinalities of two finite sets satisfy the inclusion-exclusion formula.",
    "ideas": [
      "finite sets",
      "unions",
      "intersections",
      "cardinality"
    ]
  },
  {
    "number": 7,
    "slug": "arbitrarily-large-primes",
    "title": "Euclid's Theorem: Arbitrarily Large Primes",
    "summary": "For every natural number, there is a larger prime.",
    "ideas": [
      "primes",
      "divisibility",
      "factorials",
      "contradiction"
    ]
  },
  {
    "number": 8,
    "slug": "sum-first-n-naturals",
    "title": "The Sum of the First $n$ Natural Numbers",
    "summary": "Twice the sum of the natural numbers from $0$ to $n$ is $n(n + 1)$.",
    "ideas": [
      "induction",
      "natural numbers",
      "finite sums",
      "Finset.range"
    ]
  },
  {
    "number": 9,
    "slug": "finite-geometric-series",
    "title": "The Finite Geometric Series",
    "summary": "For integers $x$ and natural numbers $n$, $(x - 1)\\sum_{i=0}^{n-1} x^i = x^n - 1$.",
    "ideas": [
      "finite sums",
      "powers",
      "induction",
      "ring_nf"
    ]
  },
  {
    "number": 10,
    "slug": "inverse-of-product",
    "title": "The Inverse of a Product in a Group",
    "summary": "In a group, the inverse of a product reverses the order of its factors.",
    "ideas": [
      "groups",
      "typeclasses",
      "associativity",
      "group"
    ]
  },
  {
    "number": 11,
    "slug": "powers-of-commuting-elements",
    "title": "Powers of Commuting Elements",
    "summary": "If two monoid elements commute, the power of their product is the product of their powers.",
    "ideas": [
      "algebraic induction",
      "powers",
      "rewriting",
      "commutativity"
    ]
  },
  {
    "number": 12,
    "slug": "finite-pigeonhole-principle",
    "title": "The Finite Pigeonhole Principle",
    "summary": "There is no injection from a set of $n + 1$ elements to a set of $n$ elements.",
    "ideas": [
      "Fin",
      "finite types",
      "cardinality",
      "injective functions"
    ]
  },
  {
    "number": 13,
    "slug": "cantors-theorem",
    "title": "Cantor's Theorem",
    "summary": "No function from a type to its power set is surjective.",
    "ideas": [
      "sets",
      "functions",
      "surjectivity",
      "diagonalisation"
    ]
  },
  {
    "number": 14,
    "slug": "determinant-two-by-two",
    "title": "The Determinant of a $2 \\times 2$ Matrix",
    "summary": "A $2 \\times 2$ matrix has determinant $ad - bc$.",
    "ideas": [
      "matrices",
      "finite indices",
      "determinants",
      "simplification"
    ]
  },
  {
    "number": 15,
    "slug": "polynomial-factor-theorem",
    "title": "The Polynomial Factor Theorem",
    "summary": "A polynomial has $a$ as a root if and only if $X - a$ divides it.",
    "ideas": [
      "polynomials",
      "evaluation",
      "roots",
      "divisibility"
    ]
  },
  {
    "number": 16,
    "slug": "irrationality-sqrt-two",
    "title": "The Irrationality of $\\sqrt{2}$",
    "summary": "The square root of $2$ is irrational.",
    "ideas": [
      "rationals",
      "parity",
      "coprimality",
      "coercions"
    ]
  },
  {
    "number": 17,
    "slug": "handshake-lemma",
    "title": "The Handshake Lemma",
    "summary": "The sum of the vertex degrees of a finite simple graph is twice its number of edges.",
    "ideas": [
      "simple graphs",
      "finite sums",
      "degree",
      "double-counting"
    ]
  },
  {
    "number": 18,
    "slug": "specialised-extreme-value-theorem",
    "title": "A Specialised Extreme Value Theorem",
    "summary": "The function $x \\mapsto x^2$ attains a maximum on $[0, 1]$.",
    "ideas": [
      "real analysis",
      "existential witnesses",
      "closed intervals",
      "nlinarith"
    ]
  },
  // {
  //   "number": 11,
  //   "slug": "powers-of-commuting-elements",
  //   "title": "Powers of Commuting Elements",
  //   "summary": "If two monoid elements commute, the power of their product is the product of their powers.",
  //   "ideas": [
  //     "algebraic induction",
  //     "powers",
  //     "rewriting",
  //     "commutativity"
  //   ]
  // },
  {
    "number": 19,
    "slug": "jordans-lemma",
    "title": "Jordan's Lemma",
    "summary": "The upper-semicircle contour integral in Jordan's lemma tends to zero.",
    "ideas": [
      "complex analysis",
      "contour integrals",
      "exponential decay",
      "interval integrals"
    ]
  },
  {
    "number": 20,
    "slug": "central-limit-theorem",
    "title": "The Central Limit Theorem",
    "summary": "Normalised sums of independent, identically distributed real random variables with mean $0$ and variance $1$ converge in distribution to the standard Gaussian.",
    "ideas": [
      "probability",
      "characteristic functions",
      "Taylor expansion",
      "convergence in distribution"
    ]
  },
  // {
  //   "number": 12,
  //   "slug": "finite-pigeonhole-principle",
  //   "title": "The Finite Pigeonhole Principle",
  //   "summary": "There is no injection from a set of $n + 1$ elements to a set of $n$ elements.",
  //   "ideas": [
  //     "Fin",
  //     "finite types",
  //     "cardinality",
  //     "injective functions"
  //   ]
  // },
  // {
  //   "number": 13,
  //   "slug": "cantors-theorem",
  //   "title": "Cantor's Theorem",
  //   "summary": "No function from a type to its power set is surjective.",
  //   "ideas": [
  //     "sets",
  //     "functions",
  //     "surjectivity",
  //     "diagonalisation"
  //   ]
  // },
  // {
  //   "number": 14,
  //   "slug": "determinant-two-by-two",
  //   "title": "The Determinant of a $2 \\times 2$ Matrix",
  //   "summary": "A $2 \\times 2$ matrix has determinant $ad - bc$.",
  //   "ideas": [
  //     "matrices",
  //     "finite indices",
  //     "determinants",
  //     "simplification"
  //   ]
  // },
  // {
  //   "number": 15,
  //   "slug": "polynomial-factor-theorem",
  //   "title": "The Polynomial Factor Theorem",
  //   "summary": "A polynomial has $a$ as a root if and only if $X - a$ divides it.",
  //   "ideas": [
  //     "polynomials",
  //     "evaluation",
  //     "roots",
  //     "divisibility"
  //   ]
  // },
  // {
  //   "number": 16,
  //   "slug": "irrationality-sqrt-two",
  //   "title": "The Irrationality of $\\sqrt{2}$",
  //   "summary": "The square root of $2$ is irrational.",
  //   "ideas": [
  //     "rationals",
  //     "parity",
  //     "coprimality",
  //     "coercions"
  //   ]
  // },
  // {
  //   "number": 17,
  //   "slug": "handshake-lemma",
  //   "title": "The Handshake Lemma",
  //   "summary": "The sum of the vertex degrees of a finite simple graph is twice its number of edges.",
  //   "ideas": [
  //     "simple graphs",
  //     "finite sums",
  //     "degree",
  //     "double-counting"
  //   ]
  // },
  // {
  //   "number": 18,
  //   "slug": "specialised-extreme-value-theorem",
  //   "title": "A Specialised Extreme Value Theorem",
  //   "summary": "The function $x \\mapsto x^2$ attains a maximum on $[0, 1]$.",
  //   "ideas": [
  //     "real analysis",
  //     "existential witnesses",
  //     "closed intervals",
  //     "nlinarith"
  //   ]
  // },
  // {
  //   "number": 19,
  //   "slug": "jordans-lemma",
  //   "title": "Jordan's Lemma",
  //   "summary": "The upper-semicircle contour integral in Jordan's lemma tends to zero.",
  //   "ideas": [
  //     "complex analysis",
  //     "contour integrals",
  //     "exponential decay",
  //     "interval integrals"
  //   ]
  // },
  // {
  //   "number": 20,
  //   "slug": "central-limit-theorem",
  //   "title": "The Central Limit Theorem",
  //   "summary": "Normalised sums of independent, identically distributed real random variables with mean $0$ and variance $1$ converge in distribution to the standard Gaussian.",
  //   "ideas": [
  //     "probability",
  //     "characteristic functions",
  //     "Taylor expansion",
  //     "convergence in distribution"
  //   ]
  // },
  // {
  //   "number": 21,
  //   "slug": "gaussian-elimination-three-by-three",
  //   "title": "Bonus Proof: Gaussian Elimination for a $3 \\times 3$ Matrix",
  //   "summary": "One step of Gaussian elimination gives the determinant of a $3 \\times 3$ matrix when the first pivot is nonzero.",
  //   "bonus": true,
  //   "ideas": [
  //     "matrices",
  //     "determinants",
  //     "Gaussian elimination",
  //     "field simplification"
  //   ]
  // },
  // {
  //   "number": 22,
  //   "slug": "parsevals-theorem",
  //   "title": "Parseval's Theorem",
  //   "summary": "For a square-integrable function on an interval, the sum of the squared Fourier coefficients equals its mean squared norm.",
  //   "ideas": [
  //     "Fourier series",
  //     "Fourier coefficients",
  //     "L² spaces",
  //     "Hilbert bases"
  //   ]
  // }
];
