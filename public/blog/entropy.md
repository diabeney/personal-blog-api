Have you ever wondered why your hot food eventually becomes cold 😅? In this blog post, we embark on an interesting journey to understand the fundamental principles underlying this phenomenon. While I'll touch on some technical terms, my aim is to make these concepts accessible to everyone by minimizing the use of mathematical equations.

# The First Law of Thermodynamics

The first law of thermodynamics, also known as the law of conservation of energy, states that energy cannot be created or destroyed in an [isolated system](https://en.wikipedia.org/wiki/Isolated_system) . It can only change forms from one type to another or be transferred from one part of the system to another.

<section className = 'info'>
## Problem.

Picture a scenario where a heated object comes into contact with a cooler object, and over time, you notice that the hot object has gotten even hotter while the cold one has become even colder. Does this scenario violate the first law of thermodynamics?

</section>

The First Law of Thermodynamics, while valuable for understanding energy conservation, doesn't address the practical constraints of energy conversions—whether it's physically possible to convert all the energy of a body into useful work.

# Work

The concept of work is frequently used in the fields of Science and Engineering, but what precisely does it entail? To put it simply, work is determined by multiplying the distance a body travels by the force that acts against its motion. In essence, when moving a body from point A to point B, energy is expended to overcome any opposing forces. If there are no opposing forces, no work is performed.

When we consider only the energy contained within an object, we can conclude that energy is constantly moved from one location to another in the form of work. It's worth recalling that elementary school textbooks often define energy as the ability to do work.

<section className = 'info' >
The term 'point' represents a location. We can view these points as representing a system and its surroundings. Energy can be transferred from a [system](https://en.wikipedia.org/wiki/Thermodynamic_system) (point A) to its surroundings (point B) or in the opposite direction.
</section>

# Entropy

Theoretically, there exists a limit to the amount of work achievable in any process. That is, not all the energy in a body is availale to do work. This maximum (or minimum) can only be obtained when the process follows a [reversible path](<https://en.wikipedia.org/wiki/Reversible_process_(thermodynamics)>). To put it simply, a process is considered reversible if it can be returned to its initial state without a **net** addition of work or heat. However, almost every real-world process operates on an irreversible path. As a result, we don't attain the theoretical maximum (or minimum) of work in practical processes.

This leads us to another intriguing question: "What happens to the unobtained work?" For instance, if we determine that the maximum achievable work for a particular process is 10 joules (on a reversible path), but we only obtain 6 joules _(because we're doing it on an irreversible path)_, what happens to the remaining 4 joules? It's important to remember that energy cannot be created or destroyed. Entropy is the property that enables us to quantify this _'lost work'_. Entropy represents the portion of a system's energy that is unavailable to do work.

<div className = 'info' >

The achievable work can either be the minimum or maximum, depending on the nature of the process. If the process **requires** work, the theoretical limit represents the minimum work required. Conversely, if the process **produces** work, the theoretical limit represents the maximum achievable work. In both scenarios, this work is attained through a reversible path. We can also refer to it as _potential work_.

</div>

# The Second Law of Thermodynamics

The second law of thermodynamics states that in irreversible physical processes, the total entropy of the system and its surroundings always increases. This means that the final entropy must be greater than the initial entropy.

An example of such an irreversible process is when a hot object is placed in contact with a cold object, and they eventually reach the same temperature. If we later separate these objects, they don't naturally go back to their initial, different temperatures.

We can make the following deductions from the second law of Thermodynamics.

1. In a reversible process, no work is lost, and the total entropy of the universe remains the same.
1. Reversible processes are the most efficient processes possible, and they produce the maximum amount of work or require the minimum amount of work for a given initial and final state.
1. The entropy of the universe can never decrease; it can only stay the same or increase. This means that some work is always lost in real-world processes, because real-world processes are never perfectly reversible.

<div className='info' >

Entropy can also be defined as a measure of a system's randomness or disorder. The intricate concept of entropy as a 'measure of disorder' won't be explored in detail in this introductory article. If you're interested in delving deeper, you can explore a [comprehensive article](<https://en.wikipedia.org/wiki/Entropy_(order_and_disorder)>) that covers this topic.

</div>

# Spontaneous Processes

When a hot substance transfers heat to its relatively colder surroundings, it practically cools down. This phenomenon is a common occurrence in our daily lives, but what drives it to happen in this specific direction (from hot to cold) and not the other way round? Additionally, we notice that this cooling process occurs naturally, meaning it happens on its own without any energy input.

In thermodynamics, any process that occurs naturally in this manner is referred to as a **spontaneous process.** As a general rule of thumb, the change in entropy for any spontaneous process must be greater than zero (i.e positive). Mathematically, _Sf - Si > 0_, where _Sf_ and _Si_ are final and initial entropy respectively.

In the following section, the connection between entropy and spontaneous processes provides us with an answer to our initial problem!

## Heat Transfer

The natural flow of heat from a hot object to a colder one is a spontaneous process, and it contributes to the overall increase in the universe's entropy. This explains why our hot foods eventually cool down, as this transition from hot to cold leads to a positive change in entropy. If, on the other hand, heat were to flow from cold to hot, it would result in a negative change in entropy, violating the second law of thermodynamics. A detailed [mathematical proof is available for further exploration.](<https://phys.libretexts.org/Bookshelves/College_Physics/College_Physics_1e_(OpenStax)/15%3A_Thermodynamics/15.06%3A_Entropy_and_the_Second_Law_of_Thermodynamics-_Disorder_and_the_Unavailability_of_Energy>).

Regarding the problem introduced at the beginning of the process, we can assert without a doubt that this situation does not contradict the first law of thermodynamics because energy remains conserved. The heat lost by the cold object equates to the heat gained by the warm object, explaining why the warm object becomes warmer while the cold object becomes colder. Nevertheless, we don't observe this phenomenon in our daily experiences because it doesn't occur spontaneously.

<div className = 'warning'>
## Pitfall

The non-spontaneity of a process doesn't imply impossibility. Rather, it signifies that the process cannot occur independently without the addition or removal of energy. This is where engineers play a crucial role. One of the primary responsibilities of engineers is to devise methods for making non-spontaneous processes happen. Appliances like refrigerators and air conditioners are specifically engineered to make non-spontaneous heat transfer happen.

 </div>

# Conclusion

The second law of thermodynamics is a fundamental law of physics that has many important implications for the physical world. It explains why heat is always transferred from hot substances to cold substances, and it can be used to predict the spontaneity of processes and to design efficient engines and power plants.

# Reference

Dahm, D. K, Visco, D. P, 2015, _Fundamentals of Chemical Engineering Thermodynamics_, Cengage Learning, Stamford. p-131
