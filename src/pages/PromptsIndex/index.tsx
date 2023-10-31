import { useState, useEffect, useRef, Ref, RefObject } from "react";
import { PageWrapper, TimelineHeader, Timeline, GenreFilterButton, Suggestions, ActivePromptModal} from "../../components"
import { IPrompt, } from "../../shared-types"
import { Box, Grid, GridItem, useColorModeValue, useDisclosure, } from "@chakra-ui/react";
import { ALL_GENRES } from "../../constants";
import { useParams } from "react-router";
import { getAllPrompts } from "../../utilities/prompt-services"



export function PromptsIndex() {
    const { promptId } = useParams()
    

    const [prompts, setPrompts] = useState<IPrompt[] | null>(null)
    const [ activePromptId, setActivePromptId ] = useState<number | null>(null)
    const [filters, setFilters] = useState<string[]>(ALL_GENRES)
    const [filteredPrompts, setFilteredPrompts] = useState<IPrompt[] | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const tlRef: Ref<HTMLDivElement | undefined> = useRef();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const borderValue = useColorModeValue('background.100', 'background.800')

    

    function containsAny(sourceGenres: string[], targetGenres: string[]): boolean {
    
        for (const item of targetGenres) {
            if (sourceGenres.includes(item)) {
                return true
            }
        }
        return false
    }

    function filterPrompts() {
       
        if (!prompts) return

        setFilteredPrompts(prompts.filter(prompt =>
            containsAny(prompt.genres, filters)
        ) ?? null)

    }

    function handleFilter(newFilter: string) {

        if (filters.includes(newFilter)) {
            const newFilters = filters.filter(item => item !== newFilter)
            setFilters(newFilters)
        } else {
            const newFilters = [...filters, newFilter]
            setFilters(newFilters)
        }

    }


    async function handleFetchPrompts() {
        try {
            // actually fetch from db soon
            const promptResponse = await getAllPrompts()
            //prompts should be in a different order each page reload
            setPrompts(promptResponse)
            setIsLoading(false)
            // currently relying on useEffect and the filter prompts function to trigger loading state

        } catch (error) {
            // do something if this doesnt work

        }
    }

    function topOfTl() {
        // there is a typescript warning but it doesn't stop the functionality


        if (tlRef) {
            // i can't figure out this type error but tt is non-blocking
            
            const { current } = tlRef as RefObject<HTMLDivElement>
            current?.scrollTo({
                top: 0,
                behavior: 'smooth'
            });


        }
    }

    function updateActive(id: number){
        setActivePromptId(id)
        onOpen()

    }

    function checkParams(){
        if (Number(promptId)){
            updateActive(Number(promptId))
        }

    }



    useEffect(() => { handleFetchPrompts() }, [isLoading, isOpen])
    useEffect(() => { filterPrompts() }, [filters, prompts])
    useEffect(() => { checkParams()}, [isLoading])


    function loaded() {
        return (
            <>
                <TimelineHeader topOfTl={topOfTl} setFilters={setFilters} />

                <Grid templateColumns={'repeat(12, 1fr)'} gap={2}>

                    <GridItem colSpan={3} w={'100%'} >
                        <Suggestions prompts={prompts} updateActive={updateActive}/>
                    </GridItem>

                    <GridItem colSpan={6}>
                        <Timeline prompts={filteredPrompts} updateActive={updateActive} ref={tlRef as Ref<HTMLDivElement>} />
                    </GridItem>

                    <GridItem colSpan={3} >
                        <Box mx={2} borderLeftWidth={3} borderColor={borderValue} h={'80vh'} display={'flex'} flexDirection={"column"} p={4} gap={2}>
                            {ALL_GENRES.map((genre, idx) => {

                                return (
                                    <GenreFilterButton key={idx} genre={genre} handleFilter={handleFilter} filters={filters} />
                                )
                            })}
                        </Box>
                    </GridItem>
                </Grid>
                <ActivePromptModal activePromptId={activePromptId} isOpen={isOpen} onClose={onClose} children></ActivePromptModal>
            </>
        )

    }


    return (
        <PageWrapper overflow={'hidden'} maxH={'90vh'}>

            {isLoading ? <p>Loading...</p> : loaded()} 

        </PageWrapper>
    )
}