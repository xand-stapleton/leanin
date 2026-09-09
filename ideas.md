# Around Lean in 18 Proofs

I have wanted for a while to make a small, concrete route through Lean and mathlib: not a complete textbook, not a list of toy examples, and definitely not “formalize the Riemann hypothesis by next Tuesday.”

The idea of this series is simple:

> Learn Lean by proving 18 real mathematical facts, each one just a little harder than the last.

Each proof should be tangible. Each should be something a mathematician can understand without needing to specialize in type theory. Each should introduce one or two new Lean ideas, rather than burying the reader under a mountain of library details.

This is not meant to be a sequence of original mathematical discoveries. Many of these facts already exist in mathlib in one form or another. The point is to re-prove them, specialize them, or reconstruct them in a way that teaches how formal mathematics works.

Here is the itinerary.

---

## 1. Set intersection is commutative

We begin with a proof so small that the mathematics almost disappears:

```lean
s ∩ t = t ∩ s
```

This is the right first proof because Lean forces us to say what equality of sets means. Two sets are equal when they have the same elements. So the proof becomes: take an arbitrary element `x`, prove that `x ∈ s ∩ t` iff `x ∈ t ∩ s`, and unpack the definitions.

This introduces the first great Lean habit: when proving equality of structured objects, use extensionality.

**Main ideas:** sets, membership, logical conjunction, extensionality.

---

## 2. A familiar algebraic identity

Next comes something comfortingly old-fashioned:

```lean
(x + y)^2 = x^2 + 2*x*y + y^2
```

This is where Lean starts to feel slightly magical. Once the algebraic setting is correct, the proof can be dispatched by tactics such as `ring` or `ring_nf`.

That is not cheating. It is a first glimpse of what formalization is really about: we do not want to spend the whole series manually expanding brackets. We want to teach Lean which algebraic universe we are in, and then let its automation handle the routine algebra.

**Main ideas:** algebraic structures, rewriting, normalization, the `ring` tactic.

---

## 3. Inequalities and ordered arithmetic

The third proof is a simple monotonicity fact:

```lean
a ≤ b → a + c ≤ b + c
```

Mathematically, this is trivial. In Lean, it is an invitation to understand ordered algebraic structures. Are we working in the natural numbers? The integers? An ordered ring? A linear ordered semiring?

This proof teaches that the same informal sentence can have several formal meanings, depending on the type of the variables.

**Main ideas:** order, typeclasses, arithmetic tactics such as `linarith`.

---

## 4. The sum of the first `n` natural numbers

Now we prove a famous school theorem:

```lean
2 * (0 + 1 + ... + n) = n * (n + 1)
```

This is the first genuinely satisfying induction proof. The base case is computation. The inductive step uses the hypothesis for `n`, then shows the formula for `n + 1`.

In Lean, this proof introduces finite sums over `Finset.range`, the way Lean represents “sum from 0 to n”, and the constant rhythm of induction: simplify the new endpoint, use the inductive hypothesis, and clean up the algebra.

**Main ideas:** induction, natural numbers, finite sums, `Finset.range`.

---

## 5. The finite geometric series

The next step is the geometric analogue:

```lean
(x - 1) * ∑ i < n, x^i = x^n - 1
```

This is still an induction proof, but it is a little more delicate. Powers appear. The endpoint of the finite sum matters. The algebra is less forgiving.

The value of this proof is that it combines two different sources of complexity: recursive structure from the finite sum, and algebraic normalization from the powers. It is a good place to learn how much to do manually and how much to hand over to automation.

**Main ideas:** finite sums, powers, induction, `ring_nf`.

---

## 6. Odd squares are odd

Now we turn from algebra to elementary number theory:

```lean
Odd n → Odd (n^2)
```

The proof is a good example of “unpacking a definition”. To say that `n` is odd means that there exists a number `k` such that `n = 2*k + 1`. Once Lean has that witness, the rest is algebra.

This proof is useful because it introduces existential statements. Instead of merely transforming equations, we now have to produce data.

**Main ideas:** parity, existential witnesses, `rcases`, `use`.

---

## 7. Consecutive natural numbers are coprime

A classic fact:

```lean
Nat.Coprime n (n + 1)
```

Any common divisor of `n` and `n + 1` must also divide their difference, namely `1`. Therefore the only common divisor is `1`.

This is a small theorem, but it opens the door to Lean’s number theory library. It also shows the difference between the proof we say aloud and the proof we actually formalize. Lean will want to know exactly which divisibility lemma is being used, and exactly how subtraction behaves in the natural numbers.

**Main ideas:** gcd, divisibility, coprimality, natural-number arithmetic.

---

## 8. Euclid’s theorem: there are arbitrarily large primes

Now we get a famous theorem:

```lean
∀ n, ∃ p, Nat.Prime p ∧ n < p
```

The proof is Euclid’s old idea. Given `n`, build a number that is too large and too awkward for all primes up to `n` to account for. A prime divisor of that number must be new.

This is the first proof in the series that feels like a small project. There are choices to make. Do we use factorials? A product of primes? A minimal prime factor? The statement is simple, but the formal route needs planning.

That makes it ideal for the midpoint of the series.

**Main ideas:** primes, divisibility, factorials or finite products, proof by contradiction.

---

## 9. The irrationality of `√2`

Another iconic theorem:

```lean
Irrational Real.sqrt 2
```

or a more elementary version phrased in terms of rational squares.

The usual proof says: suppose `√2 = a/b` in lowest terms. Then `a^2 = 2b^2`, so `a` is even, hence `b` is even, contradicting lowest terms.

In Lean, this proof teaches an important lesson: the human proof quietly moves between natural numbers, integers, rationals, and reals. Lean will not do that silently. Every coercion has to make sense.

This is where the formal proof becomes a microscope pointed at the informal one.

**Main ideas:** rational numbers, parity, coprimality, coercions, contradiction.

---

## 10. Cantor’s theorem

Cantor’s diagonal argument is short, beautiful, and perfectly suited to Lean:

```lean
¬ Function.Surjective (f : α → Set α)
```

Given a function from elements to sets of elements, define the diagonal set:

```lean
D = { x | x ∉ f x }
```

If `f` were surjective, then some `a` would satisfy `f a = D`. But then:

```lean
a ∈ D ↔ a ∉ f a
```

and since `f a = D`, this says:

```lean
a ∈ D ↔ a ∉ D
```

Contradiction.

This is one of the best early examples of a proof where formalization does not make the idea worse. The Lean proof is close to the mathematical proof, and the central trick remains visible.

**Main ideas:** sets, functions, surjectivity, diagonalization, contradiction.

---

## 11. The finite pigeonhole principle

A concrete finite version is:

```lean
¬ ∃ f : Fin (n + 1) → Fin n, Function.Injective f
```

There is no injection from a set with `n + 1` elements into a set with `n` elements.

This proof introduces finite types. Instead of working with arbitrary sets, we work with types that Lean knows have a finite cardinality. The mathematical content is familiar; the Lean content is learning how cardinalities of finite types are represented and compared.

**Main ideas:** `Fin`, finite types, cardinality, injective functions.

---

## 12. Inclusion–exclusion for two finite sets

The two-set inclusion–exclusion formula is:

```lean
|s ∪ t| + |s ∩ t| = |s| + |t|
```

This is a lovely proof because it is visual. Every element is counted once on each side. Elements in exactly one set contribute once; elements in both sets are counted twice.

In Lean, the challenge is to express this counting argument using `Finset`. This proof is a bridge between informal combinatorics and formal finite reasoning.

**Main ideas:** finite sets, unions, intersections, cardinality, decidable equality.

---

## 13. The handshake lemma

In a finite graph, the sum of all vertex degrees is twice the number of edges.

This is the first graph theory proof in the sequence, and it is a great one because the theorem is both intuitive and nontrivial. Each edge has two endpoints, so when we sum degrees over vertices, every edge gets counted exactly twice.

A formal proof has to make that sentence precise. What is an edge? How is degree defined? How do we sum over vertices? How do we avoid double-counting?

This is exactly the kind of proof that shows why formalization is interesting. The idea is easy. The bookkeeping is the mathematics.

**Main ideas:** simple graphs, finite sums, degree, double-counting.

---

## 14. The inverse of a product in a group

Now we enter abstract algebra:

```lean
(a * b)⁻¹ = b⁻¹ * a⁻¹
```

This is one of the most basic group-theoretic identities. It is a good first theorem about algebraic structures because the proof is not about numbers at all. It is about the axioms of a group.

One elegant route is to show that `b⁻¹ * a⁻¹` behaves as the inverse of `a * b`. Lean’s group automation can prove this quickly, but it is worth first doing the proof manually to see how associativity and inverse laws interact.

**Main ideas:** groups, typeclasses, associativity, inverse laws, the `group` tactic.

---

## 15. Powers of commuting elements

If two elements commute, then powers distribute over their product:

```lean
a * b = b * a → (a * b)^n = a^n * b^n
```

This is a natural sequel to the previous proof. It is not true in every group without the commutativity assumption, and that makes it mathematically interesting.

The proof is by induction on `n`. The inductive step is exactly where the commutativity assumption is needed: we must move an `a` past a `b`.

This is a good lesson in formal algebra. Lean will not let us commute terms unless we have explicitly proved that they commute.

**Main ideas:** induction in algebraic structures, powers, rewriting, commutativity hypotheses.

---

## 16. The polynomial factor theorem

A substantial algebraic milestone:

```lean
p.eval a = 0 → X - C a ∣ p
```

In words: if `a` is a root of a polynomial `p`, then `X - a` divides `p`.

This proof marks a change in scale. We are no longer proving a one-line identity. We are working with a mathematical object, polynomials, that has a rich API in mathlib.

The challenge is partly mathematical and partly navigational: learning what mathlib already knows about polynomial evaluation, divisibility, roots, and the special polynomial `X - C a`.

**Main ideas:** polynomials, evaluation, roots, divisibility, library navigation.

---

## 17. The determinant of a 2×2 matrix

Everyone knows the formula:

```lean
det ![![a, b], ![c, d]] = a*d - b*c
```

But formalizing it is a rewarding exercise. A `2 × 2` matrix in Lean is not a grid drawn on paper. It is a function from pairs of indices to entries. The determinant is defined generally, not by a special-case formula.

So the task is to specialize the general determinant definition to the two-dimensional case and recover the familiar expression.

This proof is a good lesson in how concrete mathematics sits inside general abstractions.

**Main ideas:** matrices, finite indices, determinants, notation, simplification.

---

## 18. A specialized extreme value theorem

For the final proof, we move into analysis:

> The function `x ↦ x^2` attains a maximum on the closed interval `[a, b]`.

This is not the most general extreme value theorem. That is deliberate. The goal is not to develop all of topology from scratch. The goal is to use mathlib’s topological and analytical infrastructure to prove a concrete theorem about a familiar function.

The mathematical ingredients are:

1. `[a, b]` is compact;
2. `x ↦ x^2` is continuous;
3. a continuous function on a compact set attains a maximum.

This is a fitting final proof because it shows the power of formalized libraries. By the time we reach this point, we are not merely manipulating symbols. We are assembling serious mathematical infrastructure into a short, meaningful argument.

**Main ideas:** real analysis, continuity, compactness, closed intervals, existence theorems.

---

# The Shape of the Journey

The 18 proofs form a progression.

The first few teach the mechanics of Lean: extensionality, rewriting, tactics, induction. The middle proofs introduce familiar mathematical domains: finite sums, parity, primes, rationals, sets, and finite combinatorics. The later proofs move into structured mathematics: graphs, groups, polynomials, matrices, and analysis.

The point is not to make every proof as short as possible. In fact, the shortest Lean proof is often not the best teaching proof. A good proof for this series should leave the reader understanding both the mathematics and the formalization.

Some of the best posts will probably follow the same pattern:

1. State the theorem informally.
2. Give the ordinary mathematical proof.
3. Translate the statement into Lean.
4. Identify the key definitions.
5. Build the proof slowly.
6. Finish with a cleaned-up version.

This is the real promise of Lean: not that it makes mathematics automatic, but that it makes mathematical reasoning inspectable.

If I can get from set intersections to the extreme value theorem in 18 proofs, then the series will have done what I want it to do. It will show that formalization is not a separate subject floating above mathematics. It is mathematics, written with every hidden step made visible.

That is the route.

Around Lean in 18 proofs.

