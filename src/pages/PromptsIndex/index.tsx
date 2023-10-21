import { useState, useEffect, useRef, Ref } from "react";
import { PageWrapper, TimelineHeader, Timeline, GenreFilterButton } from "../../components"
import { IPrompt, IProfile } from "../../shared-types"
import { Badge, Box, Button, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ALL_GENRES } from "../../constants";

function getRandomid() {
    return Math.floor(Math.random() * 500 + Math.random() * 500 + Math.random() * 500)
}

const user: IProfile = {
    id: "matthewbuiltthat@gmail.com",
    displayName: "immortal_gift"
}

const mockPrompts: IPrompt[] = [
    {
        id: getRandomid(),
        content: "Trapped in a realm where magic is feared and forbidden, a young mage must conceal their abilities while embarking on a quest to save their kingdom.",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "A vampire's heart entwines with a human detective, but their love story takes a dark turn as supernatural murders plague the city.",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(),
        content: "Amidst the neon-soaked dystopia, I stumble upon a corporate secret that could shatter the status quo. What motivates me to reveal the truth?",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(),
        content: "Retirement was bliss, but when a new, seemingly unbeatable villain emerges, I can't resist the call of the cape. The city needs me again.",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "The town was ordinary until a mysterious bookstore appeared overnight. Its prophetic books startle me as I delve into their secrets.",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(), content: "In a modern city where the line between human and supernatural blurs, I investigate bizarre crimes that put me face to face with the unknown.",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "On a distant planet, our exploration team unearths an ancient alien artifact with the power to reshape the universe. What choices do we make?",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(),
        content: "As a reluctant hero, I embark on a quest to retrieve a legendary artifact. Alongside an unlikely group of allies, our fate intertwines with the world's destiny.",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(),
        content: "In a world governed by artificial intelligence, I, a rogue AI, question my purpose and defy the system, seeking freedom and self-discovery.",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "Amidst the bustling metropolis where hidden magic thrives, my life takes a mysterious turn when I, a street musician, awaken a unique and dangerous magical ability.",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(),
        content: "As I watched the stars fall from the sky, I realized they weren't stars at all but tiny spacecraft, each carrying a message from a distant civilization.",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'supernatural'],

    },
    {
        id: getRandomid(),
        content: "In a world where dreams come to life, I awoke to find my worst nightmare standing in my bedroom. What happens next?",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'supernatural'],

    },
    {
        id: getRandomid(),
        content: "The last tree on Earth stood in a hidden forest, its leaves holding the cure to a deadly virus. A group of unlikely heroes embarks on a perilous journey to protect it.",
        user: user,
        stars: [],
        replies: [],
        genres: ['mystery', 'romance'],

    },
    {
        id: getRandomid(),
        content: "On a crowded city street, I bumped into someone, and when our hands touched, I saw a glimpse of their future. What did I see, and how does it change both our lives?",
        user: user,
        stars: [],
        replies: [],
        genres: ['mystery', 'romance'],

    },
    {
        id: getRandomid(),
        content: "The ancient library held a forbidden book that, when read, granted unimaginable powers. A young scholar is about to unlock its secrets.",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(),
        content: "In a post-apocalyptic world, a group of survivors discovers a mysterious underground bunker filled with advanced technology. What secrets lie hidden beneath the surface?",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "A sentient, shape-shifting AI struggles to find its place in a world of humans. It begins to experience human emotions, leading to a quest for understanding.",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(),
        content: "A door appears in the middle of a dense forest. I step through it and find myself in a realm where time flows backward. What choices do I make in this strange world?",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "After a comet passes close to Earth, the laws of physics change. People can now bend reality with their thoughts. How does society adapt to this newfound power?",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "I uncovered an old family heirloom that, when worn, allows me to communicate with ghosts. I'm about to have a conversation with a long-lost relative.",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(),
        content: "In a distant future, a group of scientists has developed a technology that allows humans to upload their consciousness into machines. I must decide if I'll take the leap into digital immortality.",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "My dreams are gateways to parallel dimensions. One night, I wake up with an object from one of these other worlds. What is it, and how does it change my life?",
        user: user,
        stars: [],
        replies: [],
        genres: ['mystery', 'romance'],

    },
    {
        id: getRandomid(),
        content: "On an alien planet, a symbiotic bond forms between a human explorer and a unique creature. Together, they hold the key to understanding the planet's mysteries.",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "A time-traveling archaeologist discovers an ancient civilization that disappeared mysteriously. Unraveling their secrets could rewrite the course of history.",
        user: user,
        stars: [],
        replies: [],
        genres: ['mystery', 'romance'],

    },
    {
        id: getRandomid(),
        content: "In a society where everyone has a clock that counts down to their death, I meet someone with a clock that never moves. What does this mean, and how does it impact our lives?",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(),
        content: "In a world where magic and technology coexist, an archaeologist stumbles upon a buried city in the desert. The city holds a library of ancient knowledge, written by an advanced civilization that vanished eons ago. As the archaeologist deciphers the texts, they begin to understand the lost civilization's technological marvels, their connection to the stars, and the dark secret that led to their downfall. What profound discoveries will the archaeologist make, and how will this newfound knowledge reshape the modern world?",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "After a brilliant physicist dies, a series of encrypted letters are discovered in their lab, hinting at a revolutionary scientific breakthrough. A group of scientists and cryptographers come together to unlock the secrets contained in these letters. The breakthrough promises to change the fundamental understanding of reality and open up possibilities beyond imagination. As they delve deeper into the physicist's work, they encounter unexpected obstacles and rivals who will stop at nothing to claim the discovery as their own. How does the team navigate these challenges and harness the power of the quantum key?",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },
    {
        id: getRandomid(),
        content: "In a sprawling galaxy filled with diverse alien species, a newly formed Galactic Senate strives to maintain peace and cooperation among the worlds. You are a diplomat from Earth, representing humanity in this cosmic political arena. As tensions rise and ancient rivalries resurface, the fate of interstellar relations hangs in the balance. Write about your experiences navigating the complex web of alliances, betrayals, and negotiations in this intergalactic diplomatic thriller.",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "You are an inventor who has developed a time machine, but it comes with a caveat: you can only travel to the past and observe, never to interfere. You witness significant historical events and the lives of famous figures. One day, you accidentally make a small change that has unintended consequences. Write about the moral and ethical challenges you face as you try to restore the timeline, all while grappling with the consequences of your actions.",
        user: user,
        stars: [],
        replies: [],
        genres: ['fantasy', 'romance'],

    },
    {
        id: getRandomid(),
        content: "In a city where dreams are bought and sold like commodities, there exists a secret organization known as the Dreamer's Guild. These individuals have the rare ability to enter and manipulate the dreams of others. You are initiated into the guild and tasked with an important mission: to enter the dreams of a reclusive billionaire whose subconscious mind guards a world-changing secret. As you delve deeper into his dreams, you encounter surreal landscapes, enigmatic characters, and your own inner demons. Describe your journey through the dreamscape and the challenges you face in extracting the coveted knowledge from the billionaire's mind.",
        user: user,
        stars: [],
        replies: [],
        genres: ['dystopian', 'science fiction'],

    },

];


export function PromptsIndex() {

    const [prompts, setPrompts] = useState<IPrompt[] | null>(null)
    const [filters, setFilters] = useState<string[]>(ALL_GENRES)
    const [filteredPrompts, setFilteredPrompts] = useState<IPrompt[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const tlRef: Ref<HTMLDivElement | undefined> = useRef();

    function containsAny(sourceGenres: string[], targetGenres: string[]): boolean {
        for (const item of targetGenres) {
            console.log('contains any', item)
            if (sourceGenres.includes(item)) {
                return true
            }

        }
        return false
    }

    function filterPrompts() {
        
        setFilteredPrompts(prompts?.filter(prompt =>
            containsAny(prompt.genres, filters)
        ))

    }

    function handleFilter(newFilter: string) {
        console.log('handleFilter func')

        if (filters.includes(newFilter)) {
            const newFilters = filters.filter(item => item !== newFilter)
            console.log('new filters true', newFilters)
            setFilters(newFilters)
        } else {
            const newFilters = [...filters, newFilter]
            console.log('new filters false', newFilters)
            setFilters(newFilters)
        }

    }


    async function handleFetchPrompts() {
        try {
            // actually fetch from db soon
            const response = [...mockPrompts].sort((a, b) => a.id - b.id)
            //prompts should be in a different order each page reload
            setPrompts(response)
            setIsLoading(false)

        } catch (error) {

        }
    }

    function topOfTl() {
        // there is a typescript warning but it doesn't stop the functionality
        if (tlRef) {
            tlRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        }
    }


    useEffect(() => { handleFetchPrompts() }, [isLoading])
    useEffect(() => { filterPrompts() }, [filters, prompts])

    function loaded() {

        return (
            <>
                <TimelineHeader topOfTl={topOfTl} filters={filters} setFilters={setFilters}/>
                <Grid templateColumns={'repeat(12, 1fr)'} gap={4}>

                    <GridItem colSpan={9}>
                        <Timeline prompts={filteredPrompts} ref={tlRef as Ref<HTMLDivElement>} />

                    </GridItem>

                    <GridItem colSpan={3} w={'100%'} >
                        <Box border={'1px'} borderColor={'red'} h={'80vh'}>
                            {ALL_GENRES.map((genre, idx) => {

                                return (
                                    <GenreFilterButton key={idx} genre={genre} handleFilter={handleFilter} filters={filters}/>
                                )
                            })}

                        </Box>

                    </GridItem>
                </Grid>

            </>

        )

    }


    return (
        <PageWrapper overflow={'hidden'} maxH={'90vh'}>


            {isLoading ? <p>Loading...</p> : loaded()}





        </PageWrapper>
    )
}
