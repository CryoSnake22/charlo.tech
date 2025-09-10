+++
title = "A tiny rant on why polar coordinates make no sense"
date = "2025-09-10"
+++

Let us attempt to understand polar coordinates and their generalization in hypersphere coordinates.

**Definition** (Polar Coordinates in $\mathbb{R}^{2}$)
Let $\mathbf{a}=(x,y)$ be a point in $\mathbb{R}^{2}$, then the polar coordinates of $\mathbf{a}$ would be: 
$$
\mathbf{a}=(r\cos \theta, r\sin \theta)
$$
This makes perfect sense in 2d since we measure the angle from the $x$ axis. Interesting fact/idea. The cosine of an angle taken from an axis $x_{n}$ gives the projection of that point onto the $x_{n}$  axis or more intuitively. **cosine of an angle measured from $x_{n}$ only gives the part/component of the point that concerns $x_{n}$ whilst sine of the angle gives the compression that occurs in the other axes**. 

**Definition** (Polar Coordinates in $\mathbb{R}^{3}$)
Suppose we now have a point $\mathbf{a} = (x,y,z)$, with $\theta$ the angle measured from the $x$ axis and $\phi$ the angle measured from the $z$ axis then the polar coordinates of $\mathbf{a}$ would be
$$
\mathbf{a}=(r\sin \phi \cos \theta ,r\sin \phi \sin \theta,r\cos \phi)
$$
Or more nicely aligned:
$$
\begin{align}
x & = r\sin \phi \cos \theta \\
y & =r\sin \phi \sin \theta \\
z  & =r\cos \phi
\end{align}
$$
As mentioned before, the highest dimensional axis is $z$ or at least we chose this axis to be the *first axis we measure from*. Then the $z$ coordinate  is only the part that **concerns $z$** which is exactly $\cos(\phi)$ then our first two coordinates get *compressed* by the factor of $\sin \phi$ as a result of the angle change in $\phi$ so we have to multiply by this factor leading to this pattern.

**Definition and mental breakdown** (Polar Coordinates in $\mathbb{R}^{n}$)
Here's where I lose my mind. Suppose we have a point $\mathbf{a} \in \mathbb{R}^{n}$, then suppose we define the first angle we measure as $\theta_{1}$ measured on $x_{1}$, then it follows that
$$
x_{1}=r\cos \theta_{1}
$$
since $\theta_{1}$ only affects $x_{1}$. Now we measure $x_{2}$ but now $\theta_{1}$ has brought some compression to our space so we need to factor that in leading to
$$
x_{2}=r\sin \theta_{1}\cos \theta_{2}
$$
The same pattern flows down to $x_{n}$ in the following way:
$$
\begin{align}
x_{1} & =r\cos \theta_{1}  \\
x_{2} & =r\sin \theta_{1}\cos \theta_{2}  \\
x_{3} & =r\sin \theta_{1}\sin \theta_{2}\cos\theta_{3}  \\
\dots \\
x_{n-1} & =r\sin \theta_{1}\dots \sin \theta_{n-2}\cos \theta_{n-1} \\
x_{n} & =r\sin \theta_{1}\dots \sin \theta_{n-2}\sin \theta_{n-1}
\end{align}
$$
So the last angle we measure has only compression from the last angle, no other angle that's affected therefore It's only $\sin \theta_{n-1}$. But here's where I breakdown. If we take the case where $n=3$ then we have
$$
\begin{align}
x_{1} & =r\cos \theta_{1} \\
x_{2} & =r\sin \theta_{1}\cos \theta_{2} \\
x_{3} & =r\sin \theta_{1}\sin \theta_{2}
\end{align}
$$
But wait a second, doesnt this mean that 
$$
\begin{align}
x_{1} & =r\cos \theta_{1}  & =z\\
x_{2} & =r\sin \theta_{1}\cos \theta_{2} & =x \\
x_{3} & =r\sin \theta_{1}\sin \theta_{2} & =y
\end{align}
$$
Yes. Correct. The way we measure things has been backwards this whole time. Everything is consistent except when we reach the $(x,y)$ plane. The banger here is that you could technically start from any angle as long as you follow the recursion properly since you can just reverse all your axes, but you have to be consistent. So the way we represent the $x,y,z$ plane could be made consistent with this definition if only it was actually the $y,x,z$ plane. Oh yeah also you could technically start measuring from $x$ but then you'd have to measure from

