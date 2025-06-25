+++
title = "A tiny dive into Topology"
date = "2025-06-25"
+++

Whenever you talk about topology or hear about topology the first thing you'll get shown is a bunch of shapes like spheres, toruses, circles etc. "Woahhhh donut math" you might think. But the field of topology is WAY more abstract and weird than donuts and spheres.

The whole idea and motivation of topology is to quantify things like **nearness**, **neighboorhoods**, **convergence**, **continuity** and other things of the sort without using any notion of distance or size, just using sets. You'll come to understand that what we consider as "continuous" and "open sets" is really just one manifestation of a topology. We will **define** continuity based on topological properties and the same stands for **open sets**.

With that out of the way, what the hell is a _topological space_ ?

We define a _topological space_ $(X,\tau)$ as a tuple containing a set $X$ and a topology $\tau$ which is a collection of subsets of $X$ satisfying the following properties:

1. $\emptyset,X \in \tau$
2. $\tau$ is closed under _arbitrary_ unions
3. $\tau$ is closed under _finite_ intersections
   We then consider every $U \in \tau$ to be an **open set** in the topological space $(X,\tau)$.

The interesting thing to note here is that when we think of open sets and open intervals we typically think of things like $(a,b)$ which in all fairness really are open sets too! But the real definition of an open set is a much broader one. In the topological world, $U$ is open $\iff$ $U \in \tau$. And this definition lays down the foundation that we need to discuss all manners of things in topology.

Now let us define what it means for a function to be _continuous_.

Let $f:(X,\tau_{X})\to(Y,\tau_{Y})$. We say $f$ is _continuous_ if

$$
{}
\forall U \in \tau_{Y},\quad f^{-1}(U) \in \tau_{X}
$$

Once again, this may look weird at first glance but it actually makes a lot of sense ! (Said the guy who spent an entire day trying to understand it). The question we are asking when we wonder if a function is _continuous_ is this: "is the structure I care about being preserved ?". In our case, this structure is _openness of sets_.

The way the continuity condition answers this question is by setting the condition: "If I get an open set as an output of my function, then it must have come from an open set otherwise somewhere along the way we lost structure".

Here's the slight nuance that makes it so we care about the preimage and are not just checking the forward direction: we **only** care about **open sets**. So although our function outputs into the codomain $Y$, the space of what we analyse and care about gets filtered to only the open sets $\tau_{Y}$ which is why we only ask about the open sets $\tau_{Y}$.

**Important note:** the function acts on every set/point in $X$, the domain and morphs it into the image, this image may be outside of the open sets of $Y$ and the function does not directly "change" $\tau_{X}$. Furthermore, the preimage of any member of the codomain **always exists** so let $U \in \tau$, let's say there are no $X$ such that $f(X)=U$, then $f^{-1}(U)=\emptyset \in \tau_{X}$ so even if nothing maps to any of the open sets of $Y$ we could consider the function to be continuous.

To be continued...
