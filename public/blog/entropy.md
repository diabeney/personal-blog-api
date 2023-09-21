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

When we focus solely on the energy within the body, we can deduce that energy is consistently transferred from one point to another in the form of work. However, for an object to move from one place to another, there must be a force driving it. There are various driving forces, but when the driving force is a temperature gradient or difference, we refer to this _special_ work done as **heat.**

<section className = 'info' >
Up to this point, I've employed the term 'point' to represent a location. We can view these points as representing a system and its surroundings. Energy can be transferred from a system (point A) to its surroundings (point B) or in the opposite direction.
</section>

# Entropy

Theoretically, there exists a limit to the amount of work achievable in any process . This maximum (or minimum) can only be reached when the process follows a [reversible path](<https://en.wikipedia.org/wiki/Reversible_process_(thermodynamics)>). To put it simply, a process is considered reversible if it can be returned to its initial state without a **net** addition of work or heat. However, almost every real-world process operates on an irreversible path. As a result, we don't attain the theoretical maximum (or minimum) of work in practical processes.

This leads us to another intriguing question: "What happens to the unobtained work?" For instance, if we determine that the maximum achievable work for a particular process is 10 joules (on a reversible path), but we only obtain 6 joules _(because we're doing it on an irreversible path)_, what happens to the remaining 4 joules? It's important to remember that energy cannot be created or destroyed. So, we know it isn't destroyed, but where does it go? Entropy is the property that enables us to quantify this _'lost work'_. Entropy represents the portion of a system's energy that cannot be converted into useful work.

<div className = 'info' >
##Good to know.

The achievable work can either be the minimum or maximum, depending on the nature of the process. If the process requires work, the theoretical limit represents the minimum work required. Conversely, if the process generates work, the theoretical limit represents the maximum achievable work. In both scenarios, this work is attained through a reversible path. We can also refer to it as _potential work_.

</div>

# The Second Law of Thermodynamics

It states that the entropy of the universe cannot decrease. The entropy of the universe is unchanged by any reversible process and increased by any irreversible process.

We can make the following deductions from the second law of Thermodynamics.

1. In a reversible process, no work is lost, and the total entropy of the universe remains the same.
1. Reversible processes are the most efficient processes possible, and they produce the maximum amount of work or require the minimum amount of work for a given initial and final state.
1. The entropy of the universe can never decrease; it can only stay the same or increase. This means that some work is always lost in real-world processes, because real-world processes are never perfectly reversible.
1. The more irreversible a process is, the more entropy is produced, and the more potential work is lost.

<div className = 'info' >
Observe that many of the statements mentioned above pertain to the entropy of the "universe." In problem-solving contexts, "the universe" basically encompasses both the system AND its surroundings.

</div>
# Spontaneous Processes

Remember the initial question posed at the start of this article: why does hot food tend to cool down over time? When a hot substance transfers heat to its relatively colder surroundings, it practically cools down. This phenomenon is a common occurrence in our daily lives, but what drives it to happen in this specific direction (from hot to cold) and not the other way around? Additionally, we notice that this cooling process occurs naturally, meaning it happens on its own without any external energy input.

In thermodynamics, any process that occurs naturally in this manner is referred to as a **spontaneous process.** In the following section, we will explore the connection between entropy and spontaneous processes, providing us with an answer to our initial question!

> ProTip You can disable any **Markdown extension** in the **File properties** dialog.
