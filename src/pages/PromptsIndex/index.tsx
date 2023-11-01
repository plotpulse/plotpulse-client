import { useState, useEffect, useRef, Ref, RefObject } from "react";
import { useParams } from "react-router";
import { PageWrapper, TimelineHeader, Timeline, Suggestions, ActivePromptModal, FilterControls} from "../../components"
import { IPrompt, } from "../../shared-types"
import { Grid, GridItem, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { ALL_GENRES } from "../../constants";
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
   
    const filterPanelHidden = useBreakpointValue({base: true, lg: false})
    const suggestionsPanelHidden = useBreakpointValue({base: true, md: false})

    

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
            
            const { current } = tlRef as RefObject<HTMLDivElement>
            current?.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
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
                <TimelineHeader topOfTl={topOfTl} />

                <Grid templateColumns={'repeat(12, 1fr)'} templateRows='repeat(2, 1fr)' gap={2} maxH={'80vh'}>

                    <GridItem colSpan={3} rowSpan={2} hidden={suggestionsPanelHidden} overflow={'auto'}>
                        <Suggestions prompts={prompts} updateActive={updateActive}/>
                        <FilterControls filters={filters} handleFilter={handleFilter} setFilters={setFilters} hidden={!filterPanelHidden}/>
                    </GridItem>
                    
                    

                    <GridItem colSpan={{base: 12, md: 9, lg:6}} rowSpan={2}>
                        <Timeline prompts={filteredPrompts} updateActive={updateActive} ref={tlRef as Ref<HTMLDivElement>} />
                    </GridItem>

                    
                    <GridItem colSpan={3} rowSpan={1} hidden={filterPanelHidden} >
                        <FilterControls filters={filters} handleFilter={handleFilter} setFilters={setFilters}/>
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