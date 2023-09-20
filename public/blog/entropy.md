<section>
Have you ever wondered why your hot food eventually becomes cold 😅? why water transforms into vapour at 100 degrees Celsius with such ease at atmospheric pressure? or why certain conditions seem to trigger chemical reactions?

In this blog post, we embark on an interesting journey to understand the fundamental principles underlying these phenomena. While I'll touch on some technical terms, my aim is to make these concepts accessible to everyone by minimizing the use of mathematical equations. Remember this is a deep dive, so it's going to be lengthy.

</section>

<section className = 'info'>
    ## What's the problem?

The First Law of Thermodynamics, while valuable for understanding energy conservation, doesn't address the practical constraints of energy conversions—whether it's **physically possible** to convert energy from one form to another under specific conditions.

In order to understand the practical meaning of entropy, we need to define 'work'.

</section>

## Work

The concept of work is frequently used in the fields of Science and Engineering, but what precisely does it entail? To put it simply, work is determined by multiplying the distance a body travels by the force that acts against its motion. In essence, when moving a body from point A to point B, energy is expended to overcome any opposing forces. If there are no opposing forces, no work is performed.

When we focus solely on the energy within the body, we can deduce that energy is consistently transferred from one point to another in the form of work. However, for an object to move from one place to another, there must be a force driving it. There are various driving forces, but when the driving force is a temperature gradient or difference, we refer to the work done as **heat.**

<div className = 'info' >
Up to this point, I've employed the term 'point' to represent a location. We can view these points as representing a system and its surroundings. Energy can be transferred from a system (point A) to its surroundings (point B) or in the opposite direction.
</div>

# Entropy

Theoretically, there is a limit of how much work that can be obtained in every process. This maximum (or minimum) can only be achieved **if** the process is done on a reversible path. In simple terms, a process is said to be reversible if it can be returned to its original state with no **NET** addition of work or heat. However almost every process in our real world is executed on an **irreversible** pathway ( -why?🤔, pause for a moment and think about it.). Consequently, we do not obtain the theoretical maximum (or minimum) work in real world processes.

This brings us to another intuitive question, "what happens to the remaining work?". That is, as an example, if we know that the maximum achievable amount of work for a given process is 10 joules - i.e on a reversible path - but the actual work obtained is 6 joules, what happens to the remaining 4 joules? Remember energy cannot be created nor **destroyed**. So we know for a fact that it's not destroyed but where is it? Entropy is a property that allows us to quantify this 'lost work'. To account for its destination, we need to define the Second Law of Thermodynamics.

<div className = 'warning' >
##Pitfall

The work can be minimum or maximum depending on the type of process. If the process **requires** work, then the theoretical limit is actually the **minimum** work needed. However, if the process **produces** work, then the theoretical limit is the **maximum** achievable work. In both cases, the work is achieved on a reversible path.

</div>

# The Second Law of Thermodynamics

It states that the entropy of the universe cannot decrease. The entropy of the universe is unchanged by any reversible process and increased by any irreversible process.

At this point this should make sense, since we've already

# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.
