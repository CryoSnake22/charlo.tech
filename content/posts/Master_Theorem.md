+++
title = "Master Theorem made easy"
date = "2025-09-16"
+++

**Definition** (Master Theorem)

Let $T(n)$ be the runtime of some algorithm of the form

$$
T(n)=aT\left( \frac{n}{b} \right)+f(n)
$$

Where

- $a\geq1$ is the number of subproblems at each level
- $b>1$ is the size of each sub problem.
- $f(n)$ is the work done outside each recursive call.

I am going to denote the total work done by the recursive portion as $n^{\log_{b}a }$. The reason for doing so is explained below and it is highly recommended to take the time to understand it. Now three cases arise:

_Case 1:_ $f(n)=O(n^{\log_{b} a-\varepsilon})$ for some $\varepsilon>0$

In this case, the non-recursive work grows _strictly slower_ than the recursive work. The polynomial growth rate must be strictly lower which is why we have a $-\varepsilon$ term. This leads to a total work of

$$
T(n)=\Theta(n^{\log_{b}a})
$$

So just the recursive work.

_Case 2:_ $f(n)=\Theta(n^{\log_{b}a} \log^k n)$

In this case, both works grow at the same **polynomial** rate. The log term is added to allow for more expressivity in the wiggle room in the middle. This leads to a total work

$$
T(n)=\Theta(n^{\log_{b} a} (\log n)^{k+1})
$$

_Case 3:_ $f(n)=\Omega (n^{\log_{b} a+\varepsilon})$ for some $\varepsilon>0$

In this case, the non-recursive work grows polynomially strictly faster than the recursive work which leads to a run time of

$$
\Theta(f(n))
$$

**Work and Intuition** (Master Theorem)

Let us work through the logic behind the theorem. It is important to note that $f(n)$ quantifies the work done outside the recursion, aka everything other than making a recursive call whilst $aT \left( \frac{n}{b} \right)$ quantifies the work done as a result of recursion. With this in mind let us notice the following fact:

1.  $a^{i}$ is the total number of subproblems for $i$ iterations

We want to know how many iterations are needed to get a problem size of $c$ or to reach a base case. To do so we need to know when

$$
\begin{aligned}
\frac{n}{b^{i}} & =c \\
\frac{n}{c} & = b^{i} \\
\log_{b} \frac{n}{c} & =i
\end{aligned}
$$

Which, by substitution leads to

$$
\begin{aligned}

a^{i} & =a^{\log_{b} \frac{n}{c}} \\
 & =\left( \frac{n}{c} \right) ^{\log_{b}a }  \\
 & =c^{-\log_{b}a}\cdot n^{\log_{b}a}
\end{aligned}
$$

And since we only care about asymptotic behaviour, we can ignore the $c^{-\log_{b}a}$ since $c$ is a constant. Which means that for all base cases of any sizes, the asymptotic number of leaves is

$$
\Theta(n^{\log_{b}a})
$$

Therefore the total number of iterations/work done as a result of our recursion is $\boxed{n^{\log_{b} a}}$. All that's left to do now is to compare the recursive work vs non-recursive work. This is not formally stated as a limit test but it is what is fundamentally happening. The "Three cases" of the master theorem are really just about asking _Which grows faster, the recursive work or non-recursive work_. The logic behind cases 1 and 3 is pretty self explanatory, but case 2 can get a bit confusing so let us analyse it.

**Intuition behind case 2**:

The master theorem concerns itself with differences in _polynomial growth_ but if one was to simply check if $f(n)=\Theta(n^{\log_{b} a})$, this essentially ignores all cases where $f(n)$ is of the same polynomial growth rate as the recursive work but with polylog terms (terms of the form $\log^kx$). This can seem obtuse but essentially it gives enough resolution to actually compare and get all the possible runtimes within $n^{\log_{b}a-\varepsilon}$ and $n^{\log_{b}a+\varepsilon}$. This leads us to check for $f(n)=\Theta(n^{\log_{b}a}(\log n)^k)$ instead.

Now the question remains: _why is there a $k+1$ in the total runtime ?_. The answer can be a little annoying to prove rigorously but can be explained quite nicely using basic intuition. The total work per recursive iteration is $f(n)$. The number of recursive calls, as established earlier is $\log_{b}n$. This means we're going to have $f(n)\cdot \log_{b} n$ total work which leads to $n^{\log_{b} a}(\log n)^{k}\cdot \log_{b} n$. And since we can do a change of base to make $\log_{b}n$ into $\log n$ with a constant factor, we can absorb the term into

$$
\boxed{T(n)=\Theta(n^{\log_{b}a}(\log n)^{k+1})}
$$

**Example** (Merge Sort)

Consider MergeSort with work equation $T(n)=2\cdot T\left( \frac{n}{2} \right)+O(n)$. Here $a=2$ since each call splits the problem into 2 sub problems and $b=2$ since each problem is of size $\frac{n}{2}$. Our baseline becomes $n^{\log_{b}a}=n^{\log_{2}2}=n^1=n$. Then we check $f(n)=O(n)$, therefore we are in case 2 where $f(n)=O(n)=O(n(\log n)^{0})$ therefore

$$
T(n)=\Theta(n\log n)
$$
